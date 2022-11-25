import * as vk from "../../api/vk.ts";

const instOut = new vk.PointerRef();
vk.CreateInstance(
  new vk.InstanceCreateInfo({
    pApplicationInfo: new vk.ApplicationInfo({
      pApplicationName: new vk.CString("Deno"),
      applicationVersion: 1 << 22,
      pEngineName: new vk.CString("Deno"),
      engineVersion: 1 << 22,
      apiVersion: 1 << 22,
    }),
  }),
  null,
  instOut,
);
const instance = instOut.value;

const physicalDeviceCount = new Uint32Array(1);
vk.EnumeratePhysicalDevices(instance, physicalDeviceCount, null);

const physicalDevices = new vk.PointerArray(physicalDeviceCount[0]);
vk.EnumeratePhysicalDevices(instance, physicalDeviceCount, physicalDevices);

const properties: vk.PhysicalDeviceProperties[] = [];

for (let i = 0; i < physicalDevices.length; i++) {
  const physicalDevice = physicalDevices[i];
  const property = new vk.PhysicalDeviceProperties();
  vk.GetPhysicalDeviceProperties(physicalDevice, property);
  properties.push(property);
}

const names = properties.map((p) => {
  const buf = new Uint8Array(p.deviceName);
  const name = new TextDecoder().decode(buf.subarray(0, buf.indexOf(0)));
  return name;
});

if (names.length === 0) {
  console.log("No physical devices found");
  Deno.exit(1);
}

let physicalDevice: vk.PhysicalDevice;

if (names.length === 1) {
  console.log("Using physical device:", names[0]);
  physicalDevice = physicalDevices[0];
} else {
  console.log("Multiple physical devices found:");
  for (let i = 0; i < names.length; i++) {
    console.log(`  - ${i}: ${names[i]}`);
  }

  const index = prompt("Select physical device: ");
  physicalDevice = physicalDevices[parseInt(index!)];
  if (!physicalDevice) {
    console.log("Invalid physical device");
    Deno.exit(1);
  }
}

const queueFamilyCount = new Uint32Array(1);
vk.GetPhysicalDeviceQueueFamilyProperties(physicalDevice, queueFamilyCount, null);
