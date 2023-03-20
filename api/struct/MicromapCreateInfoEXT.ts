// deno-lint-ignore-file no-unused-vars
import {
  AnyBuffer,
  AnyPointer,
  anyBuffer,
  anyPointer,
  BUFFER,
  DATAVIEW,
  LE,
  BaseStruct,
  pointerFromView,
  notPointerObject,
} from "../util.ts";
import { StructureType, MicromapTypeEXT } from "../enum.ts";
import { MicromapCreateFlagsEXT, Buffer, DeviceSize, DeviceAddress } from "../def.ts";

export interface InitMicromapCreateInfoEXT {
  pNext?: AnyPointer;
  createFlags?: MicromapCreateFlagsEXT;
  buffer?: Buffer;
  offset?: DeviceSize;
  size?: DeviceSize;
  type?: MicromapTypeEXT;
  deviceAddress?: DeviceAddress;
}

export class MicromapCreateInfoEXT implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitMicromapCreateInfoEXT);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitMicromapCreateInfoEXT) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(MicromapCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < MicromapCreateInfoEXT.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(MicromapCreateInfoEXT.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.createFlags !== undefined) this.createFlags = data.createFlags;
      if (data.buffer !== undefined) this.buffer = data.buffer;
      if (data.offset !== undefined) this.offset = data.offset;
      if (data.size !== undefined) this.size = data.size;
      if (data.type !== undefined) this.type = data.type;
      if (data.deviceAddress !== undefined) this.deviceAddress = data.deviceAddress;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, MicromapCreateInfoEXT.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.MICROMAP_CREATE_INFO_EXT;
  }

  get sType(): number {
    return this.#view.getUint32(0, LE);
  }

  set sType(value: StructureType) {
    this.#view.setUint32(0, Number(value), LE);
  }

  get pNext(): Deno.PointerValue {
    return pointerFromView(this.#view, 8, LE);
  }

  set pNext(value: AnyPointer) {
    this.#view.setBigUint64(8, BigInt(anyPointer(value)), LE);
  }

  get createFlags(): number {
    return this.#view.getUint32(16, LE);
  }

  set createFlags(value: MicromapCreateFlagsEXT) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get buffer(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set buffer(value: Buffer) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get offset(): bigint {
    return this.#view.getBigUint64(32, LE);
  }

  set offset(value: DeviceSize) {
    this.#view.setBigUint64(32, BigInt(value), LE);
  }

  get size(): bigint {
    return this.#view.getBigUint64(40, LE);
  }

  set size(value: DeviceSize) {
    this.#view.setBigUint64(40, BigInt(value), LE);
  }

  get type(): number {
    return this.#view.getUint32(48, LE);
  }

  set type(value: MicromapTypeEXT) {
    this.#view.setUint32(48, Number(value), LE);
  }

  get deviceAddress(): bigint {
    return this.#view.getBigUint64(56, LE);
  }

  set deviceAddress(value: DeviceAddress) {
    this.#view.setBigUint64(56, BigInt(value), LE);
  }
}