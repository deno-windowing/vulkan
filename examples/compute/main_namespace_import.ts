import * as vk from "../../api/mod.ts";

const instOut = new vk.PointerRef();
vk.CreateInstance(
  new vk.InstanceCreateInfo({
    pApplicationInfo: new vk.ApplicationInfo({
      pApplicationName: new vk.CString("Deno"),
      applicationVersion: vk.makeVersion(1, 0, 0),
      pEngineName: new vk.CString("Deno"),
      engineVersion: vk.makeVersion(1, 0, 0),
      apiVersion: vk.makeVersion(1, 2, 0),
    }),
  }),
  null,
  instOut,
);
globalThis.addEventListener("unload", () => {
  vk.DestroyInstance(instance, null);
});
const instance = instOut.value;

const physicalDeviceCount = new Uint32Array(1);
vk.EnumeratePhysicalDevices(instance, physicalDeviceCount, null);
const physicalDevices = new vk.PointerArray(physicalDeviceCount[0]);
vk.EnumeratePhysicalDevices(instance, physicalDeviceCount, physicalDevices);

const properties: vk.PhysicalDeviceProperties[] = [];
for (let i = 0; i < physicalDevices.length; i++) {
  const physicalDevice = physicalDevices.pointer(i);
  const property = new vk.PhysicalDeviceProperties();
  vk.GetPhysicalDeviceProperties(physicalDevice, property);
  properties.push(property);
}

const names = properties.map((p) => vk.jsString(p.deviceName));
if (names.length === 0) {
  console.log("No physical devices found");
  Deno.exit(1);
} else if (names.length === 1) {
  console.log("Using physical device:", names[0]);
} else {
  console.log("Multiple physical devices found:");
  for (let i = 0; i < names.length; i++) {
    console.log(`  - ${i}: ${names[i]}`);
  }
}

// function selelcPhysicalDevice(devices: vk.PhysicalDeviceProperties[]): number {
//   for (const [index, device] of devices.entries()) {
//     if (device.deviceType == vk.PhysicalDeviceType.DISCRETE_GPU) {
//       return index;
//     }
//   }
//   return 0;
// }

// const selectedPhysicDevcieIndex = selelcPhysicalDevice(properties);
// console.log(`select device: ${names[selectedPhysicDevcieIndex]}`);
// const physicalDevice = physicalDevices.pointer(selectedPhysicDevcieIndex);

// function getQueueFamliyProperties(device: vk.PhysicalDevice) {
//   const queueFamilyCount = new Uint32Array(1);
//   vk.GetPhysicalDeviceQueueFamilyProperties(
//     device,
//     queueFamilyCount,
//     null,
//   );
//   if (queueFamilyCount[0] == 0) return [];

//   const queuesBuffer = new Uint8Array(
//     vk.QueueFamilyProperties.size * queueFamilyCount[0],
//   );
//   vk.GetPhysicalDeviceQueueFamilyProperties(
//     device,
//     queueFamilyCount,
//     queuesBuffer,
//   );
//   const queues = [] as vk.QueueFamilyProperties[];
//   for (let i = 0; i < queueFamilyCount[0]; i++) {
//     const size = vk.QueueFamilyProperties.size;
//     queues.push(
//       new vk.QueueFamilyProperties(
//         queuesBuffer.slice(i * size, (i + 1) * size),
//       ),
//     );
//   }
//   return queues;
// }

// function getComputeQueueIndex(
//   queues: vk.QueueFamilyProperties[],
// ): number | undefined {
//   for (const [index, queue] of queues.entries()) {
//     const isCompute = queue.queueFlags & vk.QueueFlagBits.COMPUTE;
//     if (isCompute && queue.queueCount > 0) {
//       return index;
//     }
//   }
// }

// const queueFamilyProperties = getQueueFamliyProperties(physicalDevice);
// const queueIndex = getComputeQueueIndex(queueFamilyProperties);
// if (queueIndex === undefined) {
//   console.log("Compute queue not found.");
//   Deno.exit(1);
// }

// const queueRef = new vk.PointerRef();
// vk.GetDeviceQueue(physicalDevice, queueIndex, 0, queueRef);
// const queue = queueRef.value;
