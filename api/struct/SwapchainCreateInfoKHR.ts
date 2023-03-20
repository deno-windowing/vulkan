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
import {Extent2D} from "./Extent2D.ts";
import { StructureType, Format, ColorSpaceKHR, SharingMode, SurfaceTransformFlagBitsKHR, CompositeAlphaFlagBitsKHR, PresentModeKHR } from "../enum.ts";
import { SwapchainCreateFlagsKHR, SurfaceKHR, ImageUsageFlags, Bool32, SwapchainKHR } from "../def.ts";

export interface InitSwapchainCreateInfoKHR {
  pNext?: AnyPointer;
  flags?: SwapchainCreateFlagsKHR;
  surface?: SurfaceKHR;
  minImageCount?: number;
  imageFormat?: Format;
  imageColorSpace?: ColorSpaceKHR;
  imageExtent?: Extent2D;
  imageArrayLayers?: number;
  imageUsage?: ImageUsageFlags;
  imageSharingMode?: SharingMode;
  queueFamilyIndexCount?: number;
  pQueueFamilyIndices?: AnyPointer;
  preTransform?: SurfaceTransformFlagBitsKHR;
  compositeAlpha?: CompositeAlphaFlagBitsKHR;
  presentMode?: PresentModeKHR;
  clipped?: Bool32;
  oldSwapchain?: SwapchainKHR;
}

export class SwapchainCreateInfoKHR implements BaseStruct {
  static size = 104;

  #data!: Uint8Array;
  #view!: DataView;

  get [BUFFER]() { return this.#data; }
  get [DATAVIEW]() { return this.#view; }

  constructor();
  constructor(ptr: Deno.PointerValue);
  constructor(init: InitSwapchainCreateInfoKHR);
  constructor(data: Uint8Array);
  constructor(data?: Deno.PointerValue | Uint8Array | InitSwapchainCreateInfoKHR) {
    if (data === undefined || data === null) {
      this.#data = new Uint8Array(SwapchainCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    } else if (data instanceof Uint8Array) {
      if (data.byteLength < SwapchainCreateInfoKHR.size) {
        throw new Error("Data buffer too small");
      }
      this.#data = data;
      this.#view = new DataView(data.buffer, data.byteOffset);
    } else if(notPointerObject(data)) {
      this.#data = new Uint8Array(SwapchainCreateInfoKHR.size);
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
      if (data.pNext !== undefined) this.pNext = data.pNext;
      if (data.flags !== undefined) this.flags = data.flags;
      if (data.surface !== undefined) this.surface = data.surface;
      if (data.minImageCount !== undefined) this.minImageCount = data.minImageCount;
      if (data.imageFormat !== undefined) this.imageFormat = data.imageFormat;
      if (data.imageColorSpace !== undefined) this.imageColorSpace = data.imageColorSpace;
      if (data.imageExtent !== undefined) this.imageExtent = data.imageExtent;
      if (data.imageArrayLayers !== undefined) this.imageArrayLayers = data.imageArrayLayers;
      if (data.imageUsage !== undefined) this.imageUsage = data.imageUsage;
      if (data.imageSharingMode !== undefined) this.imageSharingMode = data.imageSharingMode;
      if (data.queueFamilyIndexCount !== undefined) this.queueFamilyIndexCount = data.queueFamilyIndexCount;
      if (data.pQueueFamilyIndices !== undefined) this.pQueueFamilyIndices = data.pQueueFamilyIndices;
      if (data.preTransform !== undefined) this.preTransform = data.preTransform;
      if (data.compositeAlpha !== undefined) this.compositeAlpha = data.compositeAlpha;
      if (data.presentMode !== undefined) this.presentMode = data.presentMode;
      if (data.clipped !== undefined) this.clipped = data.clipped;
      if (data.oldSwapchain !== undefined) this.oldSwapchain = data.oldSwapchain;
    } else {
      this.#data = new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(data, SwapchainCreateInfoKHR.size));
      this.#view = new DataView(this.#data.buffer, this.#data.byteOffset);
    }
    this.sType = StructureType.SWAPCHAIN_CREATE_INFO_KHR;
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

  get flags(): number {
    return this.#view.getUint32(16, LE);
  }

  set flags(value: SwapchainCreateFlagsKHR) {
    this.#view.setUint32(16, Number(value), LE);
  }

  get surface(): Deno.PointerValue {
    return pointerFromView(this.#view, 24, LE);
  }

  set surface(value: SurfaceKHR) {
    this.#view.setBigUint64(24, BigInt(anyPointer(value)), LE);
  }

  get minImageCount(): number {
    return this.#view.getUint32(32, LE);
  }

  set minImageCount(value: number) {
    this.#view.setUint32(32, Number(value), LE);
  }

  get imageFormat(): number {
    return this.#view.getUint32(36, LE);
  }

  set imageFormat(value: Format) {
    this.#view.setUint32(36, Number(value), LE);
  }

  get imageColorSpace(): number {
    return this.#view.getUint32(40, LE);
  }

  set imageColorSpace(value: ColorSpaceKHR) {
    this.#view.setUint32(40, Number(value), LE);
  }

  get imageExtent(): Extent2D {
    return new Extent2D(this.#data.subarray(44, 44 + Extent2D.size));
  }

  set imageExtent(value: Extent2D) {
    if (value[BUFFER].byteLength < Extent2D.size) {
      throw new Error("Data buffer too small");
    }
    this.#data.set(value[BUFFER], 44);
  }

  get imageArrayLayers(): number {
    return this.#view.getUint32(52, LE);
  }

  set imageArrayLayers(value: number) {
    this.#view.setUint32(52, Number(value), LE);
  }

  get imageUsage(): number {
    return this.#view.getUint32(56, LE);
  }

  set imageUsage(value: ImageUsageFlags) {
    this.#view.setUint32(56, Number(value), LE);
  }

  get imageSharingMode(): number {
    return this.#view.getUint32(60, LE);
  }

  set imageSharingMode(value: SharingMode) {
    this.#view.setUint32(60, Number(value), LE);
  }

  get queueFamilyIndexCount(): number {
    return this.#view.getUint32(64, LE);
  }

  set queueFamilyIndexCount(value: number) {
    this.#view.setUint32(64, Number(value), LE);
  }

  get pQueueFamilyIndices(): Deno.PointerValue {
    return pointerFromView(this.#view, 72, LE);
  }

  set pQueueFamilyIndices(value: AnyPointer) {
    this.#view.setBigUint64(72, BigInt(anyPointer(value)), LE);
  }

  get preTransform(): number {
    return this.#view.getUint32(80, LE);
  }

  set preTransform(value: SurfaceTransformFlagBitsKHR) {
    this.#view.setUint32(80, Number(value), LE);
  }

  get compositeAlpha(): number {
    return this.#view.getUint32(84, LE);
  }

  set compositeAlpha(value: CompositeAlphaFlagBitsKHR) {
    this.#view.setUint32(84, Number(value), LE);
  }

  get presentMode(): number {
    return this.#view.getUint32(88, LE);
  }

  set presentMode(value: PresentModeKHR) {
    this.#view.setUint32(88, Number(value), LE);
  }

  get clipped(): number {
    return this.#view.getUint32(92, LE);
  }

  set clipped(value: Bool32) {
    this.#view.setUint32(92, Number(value), LE);
  }

  get oldSwapchain(): Deno.PointerValue {
    return pointerFromView(this.#view, 96, LE);
  }

  set oldSwapchain(value: SwapchainKHR) {
    this.#view.setBigUint64(96, BigInt(anyPointer(value)), LE);
  }
}