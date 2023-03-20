import { assert } from "https://deno.land/std@0.179.0/_util/asserts.ts";

export const BUFFER = Symbol("vkStructBuffer");
export const DATAVIEW = Symbol("vkStructDataView");
export const LE =
  new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;

export interface BaseStruct {
  readonly [BUFFER]: Uint8Array;
}

export type TypedArray =
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array
  | BigUint64Array
  | BigInt64Array;

export type AnyBuffer =
  | ArrayBuffer
  | TypedArray
  | null
  | BaseStruct;

export function isTypedArray(x: unknown): x is TypedArray {
  return x instanceof Uint8Array ||
    x instanceof Uint16Array ||
    x instanceof Uint32Array ||
    x instanceof Int8Array ||
    x instanceof Int16Array ||
    x instanceof Int32Array ||
    x instanceof Float32Array ||
    x instanceof Float64Array ||
    x instanceof BigUint64Array ||
    x instanceof BigInt64Array;
}

export function anyBuffer(buffer: AnyBuffer) {
  if (!buffer) return null;
  else if (typeof buffer === "object" && BUFFER in buffer) {
    return (buffer as BaseStruct)[BUFFER];
  } else if (buffer instanceof Uint8Array) return buffer;
  return new Uint8Array(
    buffer instanceof ArrayBuffer
      ? buffer
      : (buffer as unknown as ArrayBufferView).buffer,
  );
}

export function isBaseStruct(value: unknown): value is BaseStruct {
  return typeof value === "object" && value !== null && BUFFER in value;
}

export function addressOf(buffer: BufferSource): number | bigint {
  return Deno.UnsafePointer.value(Deno.UnsafePointer.of(buffer));
}

export function pointerFromView(
  view: DataView,
  offset: number,
  le: boolean,
): Deno.PointerValue {
  return Deno.UnsafePointer.create(view.getBigUint64(offset, le));
}
export function maybePointerObject(x: unknown): boolean {
  if (x === null) return false;
  if (typeof x != "object") return false;
  return Object.keys(x).length == 0 && Object.getPrototypeOf(x) === null &&
    Object.isExtensible(x) == false;
}

export function notPointerObject<T extends unknown>(
  x: T,
): x is Exclude<T, NonNullable<Deno.PointerValue>> {
  return !maybePointerObject(x);
}

export type AnyPointer = Deno.PointerValue | null | AnyBuffer;

export function anyPointer(value: AnyPointer): number | bigint {
  if (value === null) {
    return 0;
  } else if (isTypedArray(value) || value instanceof ArrayBuffer) {
    return value.byteLength == 0 ? 0 : addressOf(value);
  } else if (isBaseStruct(value)) {
    return addressOf(value[BUFFER]);
  } else if (typeof value == "number" || typeof value == "bigint") {
    return value;
  } else {
    return Deno.UnsafePointer.value(value);
  }
}

export class CString extends Uint8Array {
  constructor(str: string) {
    super(str.length + 1);
    new TextEncoder().encodeInto(str, this);
  }
}

export function jsString(source: BufferSource | Deno.PointerValue): string {
  if (source === null) {
    return "";
  } else if (notPointerObject(source)) {
    const pointer = Deno.UnsafePointer.of(source);
    if (pointer === null) return "";
    const view = new Deno.UnsafePointerView(pointer);
    return view.getCString();
  } else {
    const view = new Deno.UnsafePointerView(source);
    return view.getCString();
  }
}

export class CStringArray extends Uint8Array {
  #view: DataView;
  #datas: CString[] = [];

  constructor(strs: string[]) {
    super(strs.length * 8);
    this.#view = new DataView(this.buffer);
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      const data = new CString(str);
      this.#datas.push(data);
      this.#view.setBigUint64(i * 8, BigInt(addressOf(data)), LE);
    }
  }
}

// const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);

export class PointerRef extends Uint8Array {
  #view: DataView;

  constructor() {
    super(8);
    this.#view = new DataView(this.buffer);
  }

  get value(): Deno.PointerValue {
    const ptr = this.#view.getBigUint64(0, LE);
    return Deno.UnsafePointer.create(ptr);
  }

  set value(value: Deno.PointerValue) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
  }

  get checkedValue(): NonNullable<Deno.PointerValue> {
    const pointer = this.value;
    assert(pointer !== null);
    return pointer;
  }

  static ofPointer(pointer: Deno.PointerValue) {
    const ref = new PointerRef();
    ref.value = pointer;
    return ref;
  }
}

export class PointerArray extends BigUint64Array {
  #_datas: AnyPointer[] = [];

  constructor(ptrs: AnyPointer[] | number) {
    super(typeof ptrs === "number" ? ptrs : ptrs.length);
    if (typeof ptrs !== "number") {
      this.#_datas = ptrs;
      for (let i = 0; i < ptrs.length; i++) {
        this[i] = BigInt(anyPointer(ptrs[i]));
      }
    }
  }

  pointer(index: number): Deno.PointerValue {
    if (index < 0 || index > this.length) return null;
    return Deno.UnsafePointer.create(this[index]);
  }

  toList() {
    const ret = [] as Deno.PointerValue[];
    for (let i = 0; i < this.length; i++) {
      ret.push(this.pointer(i));
    }
    return ret;
  }
}

export class StructArray<T extends BaseStruct> implements BaseStruct {
  #data: Uint8Array;

  get data() {
    return this.#data;
  }

  get [BUFFER]() {
    return this.#data;
  }

  constructor(
    datas: T[] | number | Uint8Array,
    public Struct: (new (u8: Uint8Array) => T) & { size: number },
  ) {
    this.#data = datas instanceof Uint8Array ? datas : new Uint8Array(
      typeof datas === "number"
        ? datas * Struct.size
        : datas.length * Struct.size,
    );
    if (typeof datas !== "number" && !(datas instanceof Uint8Array)) {
      for (let i = 0; i < datas.length; i++) {
        this.#data.set(datas[i][BUFFER], i * Struct.size);
      }
    }
  }

  get length() {
    return this.#data.length / this.Struct.size;
  }

  get byteLength() {
    return this.#data.byteLength;
  }

  get(index: number): T {
    return new this.Struct(this.#data.subarray(index * this.Struct.size));
  }

  set(index: number, value: T) {
    this.#data.set(value[BUFFER], index * this.Struct.size);
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this.get(i);
    }
  }
}

export function getBuffer<T = TypedArray>(
  ptr: NonNullable<Deno.PointerValue>,
  size: number,
  arr: new (buf: ArrayBuffer) => T,
): T {
  return new arr(Deno.UnsafePointerView.getArrayBuffer(ptr, size));
}

export function makeVersion(major: number, minor: number, patch: number) {
  return (major << 22) | (minor << 12) | patch;
}
