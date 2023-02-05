import * as vk from "../../mod.ts";

export class ComputeApp {
  instance!: vk.Instance;
  physicalDevice!: vk.PhysicalDevice;
  device!: vk.Device;
  queueFamilyIndex!: number;
  queue!: vk.Queue;
  descriptorPool!: vk.DescriptorPool;
  descriptorSetLayout!: vk.DescriptorSetLayout;
  descriptorSet!: vk.DescriptorSet;
  buffers!: vk.Buffer[];
  bufferSizes!: number[];
  pipelineLayout!: vk.PipelineLayout;

  constructor() {
    this.createInstance();
    this.pickPhysicalDevice();
    this.findQueueFamily();
    this.createDevice();
    this.createPipeline();
  }

  createInstance() {
    const instOut = new vk.PointerRef();
    vk.CreateInstance(
      new vk.InstanceCreateInfo({
        pApplicationInfo: new vk.ApplicationInfo({
          pApplicationName: new vk.CString("Vulkan Compute"),
          applicationVersion: vk.makeVersion(1, 0, 0),
          pEngineName: new vk.CString("Deno Vulkan"),
          engineVersion: vk.makeVersion(1, 0, 0),
          apiVersion: vk.makeVersion(1, 2, 0),
        }),
        enabledLayerCount: 1,
        ppEnabledLayerNames: new vk.CStringArray([
          "VK_LAYER_KHRONOS_validation",
        ]),
      }),
      null,
      instOut,
    );
    this.instance = instOut.value;
  }

  pickPhysicalDevice() {
    const physicalDeviceCount = new Uint32Array(1);
    vk.EnumeratePhysicalDevices(this.instance, physicalDeviceCount, null);

    const physicalDevices = new vk.PointerArray(physicalDeviceCount[0]);
    vk.EnumeratePhysicalDevices(
      this.instance,
      physicalDeviceCount,
      physicalDevices,
    );

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

    this.physicalDevice = physicalDevice;
  }

  findQueueFamily() {
    const queueFamilyCount = new Uint32Array(1);
    vk.GetPhysicalDeviceQueueFamilyProperties(
      this.physicalDevice,
      queueFamilyCount,
      null,
    );

    const queueFamilies = new vk.StructArray(
      queueFamilyCount[0],
      vk.QueueFamilyProperties,
    );
    vk.GetPhysicalDeviceQueueFamilyProperties(
      this.physicalDevice,
      queueFamilyCount,
      queueFamilies,
    );

    let queueFamilyIndex = 0;
    let found = false;
    for (const props of queueFamilies) {
      if (props.queueFlags & vk.QueueFlagBits.COMPUTE) {
        found = true;
        break;

      }
      queueFamilyIndex++;
    }

    if (!found) {
      throw new Error("No compute queue family found");
    }

    this.queueFamilyIndex = queueFamilyIndex;
  }

  createDevice() {
    const deviceOut = new vk.PointerRef();
    vk.CreateDevice(
      this.physicalDevice,
      new vk.DeviceCreateInfo({
        queueCreateInfoCount: 1,
        pQueueCreateInfos: new vk.StructArray([
          new vk.DeviceQueueCreateInfo({
            queueFamilyIndex: this.queueFamilyIndex,
            queueCount: 1,
            pQueuePriorities: new Float32Array([1.0]),
          }),
        ], vk.DeviceQueueCreateInfo),
      }),
      null,
      deviceOut,
    );
    this.device = deviceOut.value;

    const queueOut = new vk.PointerRef();
    vk.GetDeviceQueue(this.device, this.queueFamilyIndex, 0, queueOut);
    this.queue = queueOut.value;
  }

  createPipeline() {
    const descriptorCount = 2;

    const descriptorPoolSize = new vk.DescriptorPoolSize({
      type: vk.DescriptorType.STORAGE_BUFFER,
      descriptorCount,
    });

    const descriptorPoolOut = new vk.PointerRef();
    vk.CreateDescriptorPool(
      this.device,
      new vk.DescriptorPoolCreateInfo({
        maxSets: 1,
        poolSizeCount: 1,
        pPoolSizes: descriptorPoolSize,
      }),
      null,
      descriptorPoolOut,
    );
    this.descriptorPool = descriptorPoolOut.value;

    const descriptorSetLayoutBindings = new vk.StructArray(
      descriptorCount,
      vk.DescriptorSetLayoutBinding,
    );
    for (let i = 0; i < descriptorCount; i++) {
      const desc = descriptorSetLayoutBindings.get(i);
      desc.binding = i;
      desc.descriptorType = vk.DescriptorType.STORAGE_BUFFER;
      desc.descriptorCount = 1;
      desc.stageFlags = vk.ShaderStageFlagBits.COMPUTE;
    }

    const descriptorSetLayoutOut = new vk.PointerRef();
    vk.CreateDescriptorSetLayout(
      this.device,
      new vk.DescriptorSetLayoutCreateInfo({
        bindingCount: descriptorCount,
        pBindings: descriptorSetLayoutBindings,
      }),
      null,
      descriptorSetLayoutOut,
    );
    this.descriptorSetLayout = descriptorSetLayoutOut.value;

    const descriptorSetAllocateInfo = new vk.DescriptorSetAllocateInfo({
      descriptorPool: descriptorPoolOut.value,
      descriptorSetCount: 1,
      pSetLayouts: new vk.PointerArray([descriptorSetLayoutOut.value]),
    });

    const descriptorSetOut = new vk.PointerRef();
    vk.AllocateDescriptorSets(
      this.device,
      descriptorSetAllocateInfo,
      descriptorSetOut,
    );
    this.descriptorSet = descriptorSetOut.value;

    // for (let i = 0; i < descriptorCount; i++) {
    //   const descriptorBufferInfo = new vk.DescriptorBufferInfo({
    //     buffer: this.buffers[i],
    //     offset: 0,
    //     range: this.bufferSizes[i],
    //   });

    //   const writeDescriptorSet = new vk.WriteDescriptorSet({
    //     dstSet: descriptorSetOut.value,
    //     dstBinding: i,
    //     dstArrayElement: 0,
    //     descriptorCount: 1,
    //     descriptorType: vk.DescriptorType.DESCRIPTOR_TYPE_STORAGE_BUFFER,
    //     pBufferInfo: descriptorBufferInfo,
    //   });

    //   vk.UpdateDescriptorSets(this.device, 1, writeDescriptorSet, 0, null);
    // }

    // const pushConstantRange = new vk.PushConstantRange({
    //   stageFlags: vk.ShaderStageFlagBits.SHADER_STAGE_COMPUTE_BIT,
    //   offset: 0,
    //   size: 4,
    // });

    // const pipelineLayoutOut = new vk.PointerRef();
    // vk.CreatePipelineLayout(
    //   this.device,
    //   new vk.PipelineLayoutCreateInfo({
    //     setLayoutCount: 1,
    //     pSetLayouts: new vk.PointerArray([descriptorSetLayoutOut.value]),
    //     pushConstantRangeCount: 1,
    //     pPushConstantRanges: pushConstantRange,
    //   }),
    //   null,
    //   pipelineLayoutOut,
    // );
    // this.pipelineLayout = pipelineLayoutOut.value;
  }
}

const app = new ComputeApp();
console.log(app);
