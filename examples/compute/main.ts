import { assert } from "https://deno.land/std@0.179.0/testing/asserts.ts";

import {
  CreateInstance,
  DestroyInstance,
  EnumeratePhysicalDevices,
  GetDeviceQueue,
  GetPhysicalDeviceProperties,
  GetPhysicalDeviceQueueFamilyProperties,
} from "../../api/cmd.ts";
import {
  CString,
  jsString,
  makeVersion,
  PointerArray,
  PointerRef,
} from "../../api/util.ts";
import { InstanceCreateInfo } from "../../api/struct/InstanceCreateInfo.ts";
import { ApplicationInfo } from "../../api/struct/ApplicationInfo.ts";
import { PhysicalDevice } from "../../api/def.ts";
import { PhysicalDeviceProperties } from "../../api/struct/PhysicalDeviceProperties.ts";
import { PhysicalDeviceType, QueueFlagBits } from "../../api/enum.ts";
import { QueueFamilyProperties } from "../../api/struct/QueueFamilyProperties.ts";

const instOut = new PointerRef();
CreateInstance(
  new InstanceCreateInfo({
    pApplicationInfo: new ApplicationInfo({
      pApplicationName: new CString("Deno"),
      applicationVersion: makeVersion(1, 0, 0),
      pEngineName: new CString("Deno"),
      engineVersion: makeVersion(1, 0, 0),
      apiVersion: makeVersion(1, 2, 0),
    }),
  }),
  null,
  instOut,
);
globalThis.addEventListener("unload", () => {
  DestroyInstance(instance, null);
});
const instance = instOut.value;

const physicalDeviceCount = new Uint32Array(1);
EnumeratePhysicalDevices(instance, physicalDeviceCount, null);
const physicalDevices = new PointerArray(physicalDeviceCount[0]);
EnumeratePhysicalDevices(instance, physicalDeviceCount, physicalDevices);

const properties: PhysicalDeviceProperties[] = [];
for (let i = 0; i < physicalDevices.length; i++) {
  const physicalDevice = physicalDevices.pointer(i);
  const property = new PhysicalDeviceProperties();
  GetPhysicalDeviceProperties(physicalDevice, property);
  properties.push(property);
}

const names = properties.map((p) => jsString(p.deviceName));
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

// function selelcPhysicalDevice(devices: PhysicalDeviceProperties[]): number {
//   for (const [index, device] of devices.entries()) {
//     if (device.deviceType == PhysicalDeviceType.DISCRETE_GPU) {
//       return index;
//     }
//   }
//   return 0;
// }

// const selectedPhysicDevcieIndex = selelcPhysicalDevice(properties);
// console.log(`select device: ${names[selectedPhysicDevcieIndex]}`);
// const physicalDevice = physicalDevices.pointer(selectedPhysicDevcieIndex);

// function getQueueFamliyProperties(device: PhysicalDevice) {
//   const queueFamilyCount = new Uint32Array(1);
//   GetPhysicalDeviceQueueFamilyProperties(
//     physicalDevice,
//     queueFamilyCount,
//     null,
//   );
//   if (queueFamilyCount[0] == 0) return [];

//   const queuesBuffer = new Uint8Array(
//     QueueFamilyProperties.size * queueFamilyCount[0],
//   );
//   GetPhysicalDeviceQueueFamilyProperties(
//     physicalDevice,
//     queueFamilyCount,
//     queuesBuffer,
//   );
//   const queues = [] as QueueFamilyProperties[];
//   for (let i = 0; i < queueFamilyCount[0]; i++) {
//     const size = QueueFamilyProperties.size;
//     queues.push(
//       new QueueFamilyProperties(queuesBuffer.slice(i * size, (i + 1) * size)),
//     );
//   }
//   return queues;
// }

// function getComputeQueueIndex(
//   queues: QueueFamilyProperties[],
// ): number | undefined {
//   for (const [index, queue] of queues.entries()) {
//     const isCompute = queue.queueFlags & QueueFlagBits.COMPUTE;
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

// const queueRef = new PointerRef();
// GetDeviceQueue(physicalDevice, queueIndex, 0, queueRef);
// const queue = queueRef.value

