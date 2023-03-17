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

export interface InitStdVideoH265SubLayerHrdParameters {
  bit_rate_value_minus1?: Uint32Array;
  cpb_size_value_minus1?: Uint32Array;
  cpb_size_du_value_minus1?: Uint32Array;
  bit_rate_du_value_minus1?: Uint32Array;
  cbr_flag?: number;
}

/** sub_layer_hrd_parameters */
export class StdVideoH265SubLayerHrdParameters implements BaseStruct {
  static size = 516;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitStdVideoH265SubLayerHrdParameters);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitStdVideoH265SubLayerHrdParameters) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(StdVideoH265SubLayerHrdParameters.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < StdVideoH265SubLayerHrdParameters.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(StdVideoH265SubLayerHrdParameters.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.bit_rate_value_minus1 !== undefined) this.bit_rate_value_minus1 = data.bit_rate_value_minus1;
      if (data.cpb_size_value_minus1 !== undefined) this.cpb_size_value_minus1 = data.cpb_size_value_minus1;
      if (data.cpb_size_du_value_minus1 !== undefined) this.cpb_size_du_value_minus1 = data.cpb_size_du_value_minus1;
      if (data.bit_rate_du_value_minus1 !== undefined) this.bit_rate_du_value_minus1 = data.bit_rate_du_value_minus1;
      if (data.cbr_flag !== undefined) this.cbr_flag = data.cbr_flag;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, StdVideoH265SubLayerHrdParameters.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get bit_rate_value_minus1(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 0, 32);
  }

  set bit_rate_value_minus1(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 0);
  }

  get cpb_size_value_minus1(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 128, 32);
  }

  set cpb_size_value_minus1(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 128);
  }

  get cpb_size_du_value_minus1(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 256, 32);
  }

  set cpb_size_du_value_minus1(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 256);
  }

  get bit_rate_du_value_minus1(): Uint32Array {
    return new Uint32Array(this.#data.buffer, this.#data.byteOffset + 384, 32);
  }

  set bit_rate_du_value_minus1(value: Uint32Array) {
    this.#data.set(new Uint8Array(value.buffer), 384);
  }

  get cbr_flag(): number {
    return this.#view.getUint32(512, LE);
  }

  set cbr_flag(value: number) {
    this.#view.setUint32(512, Number(value), LE);
  }
}