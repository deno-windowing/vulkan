import * as vk from "./vk.ts";

const extCount = new Uint32Array(1);
vk.vkEnumerateInstanceExtensionProperties(
  null,
  new Uint8Array(extCount.buffer),
  null,
);

if (extCount[0] < 1) {
  throw new Error("No extensions found");
}

const exts = new Uint8Array(260 * extCount[0]);
vk.vkEnumerateInstanceExtensionProperties(
  null,
  new Uint8Array(extCount.buffer),
  new Uint8Array(exts.buffer),
);

const extNames: string[] = [];

for (let i = 0; i < extCount[0]; i++) {
  extNames.push(
    new TextDecoder().decode(exts.subarray(i * 260, exts.indexOf(0, i * 260))),
  );
}

const nameBuffers = extNames.map((name) =>
  new TextEncoder().encode(name + "\0")
);
const extensions = new BigUint64Array(
  nameBuffers.map((e) => BigInt(Deno.UnsafePointer.of(e))),
);

const appInfo = vk.VkApplicationInfo.create({
  applicationVersion: 1 << 22,
  engineVersion: 1 << 22,
  apiVersion: 1 << 22,
  pApplicationName: Deno.UnsafePointer.of(new TextEncoder().encode("test\0")),
  pEngineName: Deno.UnsafePointer.of(new TextEncoder().encode("test\0")),
});

const createInfo = vk.VkInstanceCreateInfo.create({
  pApplicationInfo: Deno.UnsafePointer.of(appInfo[vk.BUFFER]),
  enabledExtensionCount: extCount[0],
  ppEnabledExtensionNames: Deno.UnsafePointer.of(extensions),
  enabledLayerCount: 1,
  ppEnabledLayerNames: Deno.UnsafePointer.of(
    new BigUint64Array([BigInt(Deno.UnsafePointer.of(new TextEncoder().encode("VK_LAYER_KHRONOS_validation\0")))]),
  ),
});

const instOut = new BigUint64Array(1);
vk.vkCreateInstance(createInfo, null, new Uint8Array(instOut.buffer));

const inst = Number(instOut[0]);
console.log(inst);

const deviceCount = new Uint32Array(1);
vk.vkEnumeratePhysicalDevices(inst, new Uint8Array(deviceCount.buffer), null);

if (deviceCount[0] < 1) {
  throw new Error("No devices found");
}

const physicalDeviceOut = new BigUint64Array(1);
deviceCount[0] = 1;
vk.vkEnumeratePhysicalDevices(
  inst,
  new Uint8Array(deviceCount.buffer),
  new Uint8Array(physicalDeviceOut.buffer),
);

const physicalDevice = Number(physicalDeviceOut[0]);
console.log(physicalDevice);

const physicalDeviceProperties = vk.VkPhysicalDeviceProperties.alloc();
vk.vkGetPhysicalDeviceProperties(
  physicalDevice,
  physicalDeviceProperties,
);

const physicalDeviceFeatures = vk.VkPhysicalDeviceFeatures.alloc();
vk.vkGetPhysicalDeviceFeatures(
  physicalDevice,
  physicalDeviceFeatures,
);
