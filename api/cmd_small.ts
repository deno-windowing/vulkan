import { AnyBuffer, anyBuffer } from "./util.ts";
import { Result } from "./enum.ts";
import { Instance } from "./def.ts";
const lib =
  Deno.dlopen(
    Deno.build.os === "windows"
      ? "vulkan-1"
      : Deno.build.os === "darwin"
      ? "libvulkan.dylib.1"
      : "libvulkan.so.1",
    {
      "vkCreateInstance": {
        "parameters": [
          "buffer",
          "buffer",
          "buffer",
        ],
        "result": "u32",
      },
      "vkDestroyInstance": {
        "parameters": [
          "pointer",
          "buffer",
        ],
        "result": "void",
      },
      "vkEnumerateInstanceVersion": {
        "parameters": [
          "buffer",
        ],
        "result": "u32",
      },
    } as const,
  ).symbols;

export class VulkanError extends Error {
  constructor(public code: Result) {
    super(`Vulkan error: ${code} (${Result[code]})`);
  }
}
export function EnumerateInstanceVersion(
  pApiVersion: AnyBuffer,
): Result {
  const ret = lib.vkEnumerateInstanceVersion(
    anyBuffer(pApiVersion),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}
/// Commands

export function CreateInstance(
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pInstance: AnyBuffer,
): Result {
  const ret = lib.vkCreateInstance(
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pInstance),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyInstance(
  instance: Instance,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyInstance(
    instance,
    anyBuffer(pAllocator),
  );
}
