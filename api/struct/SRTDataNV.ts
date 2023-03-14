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

export interface InitSRTDataNV {
  sx?: number;
  a?: number;
  b?: number;
  pvx?: number;
  sy?: number;
  c?: number;
  pvy?: number;
  sz?: number;
  pvz?: number;
  qx?: number;
  qy?: number;
  qz?: number;
  qw?: number;
  tx?: number;
  ty?: number;
  tz?: number;
}

export class SRTDataNV implements BaseStruct {
  static size = 64;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSRTDataNV);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSRTDataNV) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SRTDataNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SRTDataNV.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SRTDataNV.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.sx !== undefined) this.sx = data.sx;
      if (data.a !== undefined) this.a = data.a;
      if (data.b !== undefined) this.b = data.b;
      if (data.pvx !== undefined) this.pvx = data.pvx;
      if (data.sy !== undefined) this.sy = data.sy;
      if (data.c !== undefined) this.c = data.c;
      if (data.pvy !== undefined) this.pvy = data.pvy;
      if (data.sz !== undefined) this.sz = data.sz;
      if (data.pvz !== undefined) this.pvz = data.pvz;
      if (data.qx !== undefined) this.qx = data.qx;
      if (data.qy !== undefined) this.qy = data.qy;
      if (data.qz !== undefined) this.qz = data.qz;
      if (data.qw !== undefined) this.qw = data.qw;
      if (data.tx !== undefined) this.tx = data.tx;
      if (data.ty !== undefined) this.ty = data.ty;
      if (data.tz !== undefined) this.tz = data.tz;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SRTDataNV.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
  }

  get sx() {
    return this.#view.getFloat32(0, LE);
  }

  set sx(value: number) {
    this.#view.setFloat32(0, Number(value), LE);
  }

  get a() {
    return this.#view.getFloat32(4, LE);
  }

  set a(value: number) {
    this.#view.setFloat32(4, Number(value), LE);
  }

  get b() {
    return this.#view.getFloat32(8, LE);
  }

  set b(value: number) {
    this.#view.setFloat32(8, Number(value), LE);
  }

  get pvx() {
    return this.#view.getFloat32(12, LE);
  }

  set pvx(value: number) {
    this.#view.setFloat32(12, Number(value), LE);
  }

  get sy() {
    return this.#view.getFloat32(16, LE);
  }

  set sy(value: number) {
    this.#view.setFloat32(16, Number(value), LE);
  }

  get c() {
    return this.#view.getFloat32(20, LE);
  }

  set c(value: number) {
    this.#view.setFloat32(20, Number(value), LE);
  }

  get pvy() {
    return this.#view.getFloat32(24, LE);
  }

  set pvy(value: number) {
    this.#view.setFloat32(24, Number(value), LE);
  }

  get sz() {
    return this.#view.getFloat32(28, LE);
  }

  set sz(value: number) {
    this.#view.setFloat32(28, Number(value), LE);
  }

  get pvz() {
    return this.#view.getFloat32(32, LE);
  }

  set pvz(value: number) {
    this.#view.setFloat32(32, Number(value), LE);
  }

  get qx() {
    return this.#view.getFloat32(36, LE);
  }

  set qx(value: number) {
    this.#view.setFloat32(36, Number(value), LE);
  }

  get qy() {
    return this.#view.getFloat32(40, LE);
  }

  set qy(value: number) {
    this.#view.setFloat32(40, Number(value), LE);
  }

  get qz() {
    return this.#view.getFloat32(44, LE);
  }

  set qz(value: number) {
    this.#view.setFloat32(44, Number(value), LE);
  }

  get qw() {
    return this.#view.getFloat32(48, LE);
  }

  set qw(value: number) {
    this.#view.setFloat32(48, Number(value), LE);
  }

  get tx() {
    return this.#view.getFloat32(52, LE);
  }

  set tx(value: number) {
    this.#view.setFloat32(52, Number(value), LE);
  }

  get ty() {
    return this.#view.getFloat32(56, LE);
  }

  set ty(value: number) {
    this.#view.setFloat32(56, Number(value), LE);
  }

  get tz() {
    return this.#view.getFloat32(60, LE);
  }

  set tz(value: number) {
    this.#view.setFloat32(60, Number(value), LE);
  }
}