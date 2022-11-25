export const BUFFER = Symbol("vkStructBuffer");
export const DATAVIEW = Symbol("vkStructDataView");
export const LE =
  new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;

export interface BaseStruct {
  readonly [BUFFER]: Uint8Array;
}

export type AnyBuffer =
  | ArrayBuffer
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float32Array
  | Float64Array
  | BigUint64Array
  | BigInt64Array
  | null
  | BaseStruct;

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

export type AnyPointer = Deno.PointerValue | null | AnyBuffer;

export function anyPointer(buffer: AnyPointer): Deno.PointerValue {
  if (!buffer) return 0;
  else if (typeof buffer === "number" || typeof buffer === "bigint") {
    return buffer;
  }
  const u8 = anyBuffer(buffer);
  return u8!.length === 0 ? 0 : Deno.UnsafePointer.of(u8 ?? new Uint8Array());
}

export class CString extends Uint8Array {
  constructor(str: string) {
    super(str.length + 1);
    new TextEncoder().encodeInto(str, this);
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
      this.#view.setBigUint64(i * 8, BigInt(Deno.UnsafePointer.of(data)), LE);
    }
  }
}

const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);

export class PointerRef extends Uint8Array {
  #view: DataView;

  constructor() {
    super(8);
    this.#view = new DataView(this.buffer);
  }

  get value(): Deno.PointerValue {
    const ptr = this.#view.getBigUint64(0, LE);
    if (ptr < MAX_SAFE_INTEGER) return Number(ptr);
    return ptr;
  }

  set value(value: Deno.PointerValue) {
    this.#view.setBigUint64(0, BigInt(anyPointer(value)), LE);
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
}
