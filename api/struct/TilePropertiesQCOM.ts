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
import {Extent3D} from "./Extent3D.ts";
import {Extent2D} from "./Extent2D.ts";
import {Offset2D} from "./Offset2D.ts";
import { StructureType } from "../enum.ts";

export interface InitTilePropertiesQCOM {
  pNext?: AnyPointer;
  tileSize?: Extent3D;
  apronSize?: Extent2D;
  origin?: Offset2D;
}

export class TilePropertiesQCOM implements BaseStruct {
  static size = 48;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitTilePropertiesQCOM);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitTilePropertiesQCOM) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(TilePropertiesQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < TilePropertiesQCOM.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(TilePropertiesQCOM.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.tileSize !== undefined) this.tileSize = data.tileSize;
      if (data.apronSize !== undefined) this.apronSize = data.apronSize;
      if (data.origin !== undefined) this.origin = data.origin;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, TilePropertiesQCOM.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.TILE_PROPERTIES_QCOM;
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

  get tileSize(): Extent3D {
    return new Extent3D(this.#data.subarray(16, 16 + Extent3D.size));
  }

  set tileSize(value: Extent3D) {
    if (value[BUFFER].byteLength < Extent3D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 16);
  }

  get apronSize(): Extent2D {
    return new Extent2D(this.#data.subarray(28, 28 + Extent2D.size));
  }

  set apronSize(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 28);
  }

  get origin(): Offset2D {
    return new Offset2D(this.#data.subarray(36, 36 + Offset2D.size));
  }

  set origin(value: Offset2D) {
    if (value[BUFFER].byteLength < Offset2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 36);
  }
}