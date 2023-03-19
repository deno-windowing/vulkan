import { assert } from "https://deno.land/std@0.180.0/testing/asserts.ts";
import * as vk from "../../api/mod.ts";
import {
  CString,
  CStringArray,
  jsString,
  PointerArray,
  PointerRef,
  StructArray,
  TypedArray,
} from "../../api/util.ts";

function getInstanceLayers() {
  const count = Uint32Array.of(0);
  vk.EnumerateInstanceLayerProperties(count, null);
  const size = vk.LayerProperties.size;
  const buffer = new Uint8Array(size * count[0]);
  vk.EnumerateInstanceLayerProperties(count, buffer);
  const ret = [] as vk.LayerProperties[];
  for (let i = 0; i < count[0]; i++) {
    ret.push(new vk.LayerProperties(buffer.subarray(i * size, (i + 1) * size)));
  }
  return ret;
}

function getInstanceExtensions(layerName?: string) {
  const _layerName = layerName === undefined ? null : new CString(layerName);
  const count = Uint32Array.of(0);
  vk.EnumerateInstanceExtensionProperties(_layerName, count, null);
  const size = vk.ExtensionProperties.size;
  const buffer = new Uint8Array(size * count[0]);
  vk.EnumerateInstanceExtensionProperties(_layerName, count, buffer);
  const ret = [] as vk.ExtensionProperties[];
  for (let i = 0; i < count[0]; i++) {
    ret.push(
      new vk.ExtensionProperties(buffer.subarray(i * size, (i + 1) * size)),
    );
  }
  return ret;
}

function getPhysicalDevicesAndProperties(
  instance: NonNullable<Deno.PointerValue>,
) {
  const physicalDeviceCount = new Uint32Array(1);
  vk.EnumeratePhysicalDevices(instance, physicalDeviceCount, null);
  const physicalDevicesBuffer = new PointerArray(physicalDeviceCount[0]);
  vk.EnumeratePhysicalDevices(
    instance,
    physicalDeviceCount,
    physicalDevicesBuffer,
  );
  const physicalDevices = physicalDevicesBuffer.toList();

  const properties: vk.PhysicalDeviceProperties[] = [];
  for (let i = 0; i < physicalDevices.length; i++) {
    const physicalDevice = physicalDevices[i];
    const property = new vk.PhysicalDeviceProperties();
    vk.GetPhysicalDeviceProperties(physicalDevice, property);
    properties.push(property);
  }
  return { physicalDevices, properties };
}

function getQueueFamiliyProperties(
  physicalDevice: NonNullable<Deno.PointerValue>,
) {
  const queueFamilyCount = new Uint32Array(1);
  vk.GetPhysicalDeviceQueueFamilyProperties(
    physicalDevice,
    queueFamilyCount,
    null,
  );
  if (queueFamilyCount[0] == 0) return [];

  const queuesBuffer = new Uint8Array(
    vk.QueueFamilyProperties.size * queueFamilyCount[0],
  );
  vk.GetPhysicalDeviceQueueFamilyProperties(
    physicalDevice,
    queueFamilyCount,
    queuesBuffer,
  );
  const queues = [] as vk.QueueFamilyProperties[];
  for (let i = 0; i < queueFamilyCount[0]; i++) {
    const size = vk.QueueFamilyProperties.size;
    queues.push(
      new vk.QueueFamilyProperties(
        queuesBuffer.slice(i * size, (i + 1) * size),
      ),
    );
  }
  return queues;
}

function createInstance(
  appInfo: vk.ApplicationInfo,
  layers: string[],
  extensions: string[],
  enableDebugLayer = false,
  debugCreateInfo?: vk.DebugUtilsMessengerCreateInfoEXT,
) {
  const _layers = [...layers];
  const _extensions = [...extensions];
  if (enableDebugLayer && debugCreateInfo) {
    if (!_layers.includes("VK_LAYER_KHRONOS_validation")) {
      _layers.push("VK_LAYER_KHRONOS_validation");
    }
    if (!_extensions.includes(vk.EXT_DEBUG_UTILS_EXTENSION_NAME)) {
      _extensions.push(vk.EXT_DEBUG_UTILS_EXTENSION_NAME);
    }
  }

  const availableLayers = getInstanceLayers();
  const availableExtensions = getInstanceExtensions();

  const unsupportLayers = [] as string[];
  const unsupportExtensions = [] as string[];
  for (const layer of layers) {
    let support = false;
    for (const availableLayer of availableLayers) {
      if (jsString(availableLayer.layerName) == layer) {
        support = true;
        break;
      }
    }
    if (!support) {
      unsupportLayers.push(layer);
    }
  }
  for (const extension of extensions) {
    let support = false;
    for (const availableExtension of availableExtensions) {
      if (jsString(availableExtension.extensionName) == extension) {
        support = true;
        break;
      }
    }
    if (!support) {
      unsupportExtensions.push(extension);
    }
  }

  if (unsupportLayers.length !== 0 || unsupportExtensions.length !== 0) {
    return { instance: null, unsupportLayers, unsupportExtensions };
  }

  const instOut = new vk.PointerRef();
  const instanceCreateInfo = new vk.InstanceCreateInfo({
    pApplicationInfo: appInfo,
    ppEnabledLayerNames: new vk.CStringArray(_layers),
    enabledLayerCount: _layers.length,
    ppEnabledExtensionNames: new vk.CStringArray(_extensions),
    enabledExtensionCount: _extensions.length,
  });

  if (enableDebugLayer && debugCreateInfo) {
    instanceCreateInfo.pNext = debugCreateInfo;
  }

  vk.CreateInstance(instanceCreateInfo, null, instOut);
  const instance = instOut.checkedValue;

  if (enableDebugLayer && debugCreateInfo) {
    const loadCreateDebugUtilsMessengerEXT = () => {
      const p = vk.GetInstanceProcAddr(
        instance,
        new CString("vkCreateDebugUtilsMessengerEXT"),
      );
      assert(p !== null);
      return new Deno.UnsafeFnPointer(p, {
        "parameters": [
          "pointer",
          "buffer",
          "buffer",
          "buffer",
        ],
        "result": "u32",
      });
    };

    const loadDestroyDebugUtilsMessengerEXT = () => {
      const p = vk.GetInstanceProcAddr(
        instance,
        new CString("vkDestroyDebugUtilsMessengerEXT"),
      );
      assert(p !== null);
      return new Deno.UnsafeFnPointer(p, {
        "parameters": [
          "pointer",
          "pointer",
          "buffer",
        ],
        "result": "void",
      });
    };

    const createDebugUtilsMessengerEXT = loadCreateDebugUtilsMessengerEXT();
    const destroyDebugUtilsMessengerEXT = loadDestroyDebugUtilsMessengerEXT();

    const createDebugMessenger = () => {
      const _debugMessengerRef = new PointerRef();
      createDebugUtilsMessengerEXT.call(
        instance,
        vk.anyBuffer(debugCreateInfo),
        null,
        vk.anyBuffer(_debugMessengerRef),
      );
      return _debugMessengerRef.checkedValue;
    };
    const debugMessenger = createDebugMessenger();
    const destroyDebugMessenger = () => {
      destroyDebugUtilsMessengerEXT.call(instance, debugMessenger, null);
    };
    return { instance, debugMessenger, destroyDebugMessenger };
  } else {
    return { instance };
  }
}

function selelcPhysicalDevice(
  instance: NonNullable<Deno.PointerValue>,
  select: (properties: vk.PhysicalDeviceProperties[]) => number,
) {
  const {
    physicalDevices,
    properties,
  } = getPhysicalDevicesAndProperties(instance);
  assert(physicalDevices.length > 0, "no physical device found.");

  const index = select(properties);
  assert(index >= 0 && index < physicalDevices.length, "index out of range.");

  const physicalDevice = physicalDevices[index];
  assert(physicalDevice !== null);

  const memoryProperties = new vk.PhysicalDeviceMemoryProperties();
  vk.GetPhysicalDeviceMemoryProperties(physicalDevice, memoryProperties);

  return {
    physicalDevice,
    deviceProperties: properties[index],
    memoryProperties,
  };
}

function createDeviceAndQueue(
  physicalDevice: NonNullable<Deno.PointerValue>,
  extensions: string[] = [],
) {
  // queue familiy
  const queueFamilies = getQueueFamiliyProperties(physicalDevice);
  const select = () => {
    for (const [index, queueFamily] of queueFamilies.entries()) {
      const isCompute = queueFamily.queueFlags & vk.QueueFlagBits.COMPUTE;
      const isGraphic = queueFamily.queueFlags & vk.QueueFlagBits.GRAPHICS;
      const isTransfer = queueFamily.queueFlags & vk.QueueFlagBits.TRANSFER;
      if (isCompute && isGraphic && isTransfer && queueFamily.queueCount > 0) {
        return index;
      }
    }
    /**
     * From vulkan spec,
     * "If an implementation exposes any queue family that supports
     * graphics operations, at least one queue family of at least one
     * physical device exposed by the implementation must support both
     * graphics and compute operations."
     *
     * Also,
     * "All commands that are allowed on a queue that supports transfer
     * operations are also allowed on a queue that supports either graphics
     * or compute operations. Thus, if the capabilities of a queue family
     * include VK_QUEUE_GRAPHICS_BIT or VK_QUEUE_COMPUTE_BIT, then
     * reporting the VK_QUEUE_TRANSFER_BIT capability separately for
     * that queue family is optional."
     */
    throw Error("versatile queue not found");
  };
  const queueFamilyIndex = select();

  // device

  const _deviceRef = new PointerRef();
  vk.CreateDevice(
    physicalDevice,
    new vk.DeviceCreateInfo({
      enabledExtensionCount: extensions.length,
      ppEnabledExtensionNames: new CStringArray(extensions),
      queueCreateInfoCount: 1,
      pQueueCreateInfos: new vk.DeviceQueueCreateInfo({
        queueFamilyIndex,
        queueCount: 1,
        pQueuePriorities: Float32Array.of(1),
      }),
    }),
    null,
    _deviceRef,
  );
  const device = _deviceRef.checkedValue;

  const queueRef = new PointerRef();
  const queueIndex = 0;
  vk.GetDeviceQueue(
    device,
    queueFamilyIndex,
    queueIndex,
    queueRef,
  );
  const queue = queueRef.checkedValue;
  return { device, queue, queueFamilyIndex };
}

function getMemoryType(
  memoryProperties: vk.PhysicalDeviceMemoryProperties,
  typeBits: number,
  properties: vk.Flags,
) {
  for (let i = 0; i < vk.MAX_MEMORY_TYPES; i++) {
    if ((typeBits & 1) === 1) {
      const flags = memoryProperties.memoryTypes[i].propertyFlags;
      if ((flags & properties) === properties) {
        return i;
      }
    }
    typeBits >>= 1;
  }
  throw Error("no proper memory type found.");
}

function createBuffer(
  device: NonNullable<vk.Device>,
  physicalMemoryProperties: vk.PhysicalDeviceMemoryProperties,
  byteLength: number,
  usage: vk.BufferUsageFlags,
  requiredMemoryProperties: vk.MemoryPropertyFlags,
) {
  const buffer = new PointerRef();
  vk.CreateBuffer(
    device,
    new vk.BufferCreateInfo({
      size: byteLength,
      usage: usage,
    }),
    null,
    buffer,
  );

  const memReqs = new vk.MemoryRequirements();
  vk.GetBufferMemoryRequirements(
    device,
    buffer.checkedValue,
    memReqs,
  );

  const memory = new PointerRef();
  const memroyType = getMemoryType(
    physicalMemoryProperties,
    memReqs.memoryTypeBits,
    requiredMemoryProperties,
  );
  vk.AllocateMemory(
    device,
    new vk.MemoryAllocateInfo({
      allocationSize: memReqs.size,
      memoryTypeIndex: memroyType,
    }),
    null,
    memory,
  );
  vk.BindBufferMemory(device, buffer.checkedValue, memory.checkedValue, 0);
  return { buffer: buffer.checkedValue, memory: memory.checkedValue };
}
const debugCallback = new Deno.UnsafeCallback(
  {
    parameters: ["i32", "i32", "pointer", "pointer"],
    result: "u32",
  } as const,
  (
    messageSeverity: vk.DebugUtilsMessageSeverityFlagBitsEXT,
    _messageType: vk.DebugUtilsMessageTypeFlagBitsEXT,
    pCallbackData: Deno.PointerValue,
    _pUserData: Deno.PointerValue,
  ) => {
    const data = new vk.DebugUtilsMessengerCallbackDataEXT(pCallbackData);
    const message = vk.jsString(data.pMessage);
    switch (messageSeverity) {
      case vk.DebugUtilsMessageSeverityFlagBitsEXT
        .DEBUG_UTILS_MESSAGE_SEVERITY_ERROR_BIT_EXT:
        console.error(message);
        break;
      case vk.DebugUtilsMessageSeverityFlagBitsEXT
        .DEBUG_UTILS_MESSAGE_SEVERITY_WARNING_BIT_EXT:
        console.warn(message);
        break;
      case vk.DebugUtilsMessageSeverityFlagBitsEXT
        .DEBUG_UTILS_MESSAGE_SEVERITY_INFO_BIT_EXT:
        console.info(message);
        break;
      case vk.DebugUtilsMessageSeverityFlagBitsEXT
        .DEBUG_UTILS_MESSAGE_SEVERITY_VERBOSE_BIT_EXT:
        console.debug(message);
        break;
    }
    return 0;
  },
);

interface BufferInfo {
  memory: NonNullable<vk.DeviceMemory>;
  buffer: NonNullable<vk.Buffer>;
  usage: vk.BufferUsageFlags;
  memoryProperties: vk.MemoryPropertyFlags;
  byteLength: number;
}

class ComputeApp {
  instance!: NonNullable<vk.Instance>;
  debugMessenger!: vk.DebugUtilsMessengerEXT;
  physicalDevice!: NonNullable<vk.PhysicalDevice>;
  memoryProperties!: vk.PhysicalDeviceMemoryProperties;
  device!: NonNullable<vk.Device>;
  computeQueue!: NonNullable<vk.Queue>;
  queueFamilyIndex!: number;

  descriptorSetLayout!: NonNullable<vk.Buffer>;
  pipelineLayout!: NonNullable<vk.PipelineLayout>;
  pipeline!: NonNullable<vk.Pipeline>;

  descriptorPool!: NonNullable<vk.DescriptorPool>;
  commandPool!: NonNullable<vk.CommandPool>;
  inputBuffer!: BufferInfo;
  outputBuffer!: BufferInfo;
  uniformBuffer!: BufferInfo;
  descriptorSet!: NonNullable<vk.DescriptorSet>;
  inputData = new Float32Array(16).fill(1);
  uniformData = Int32Array.of(this.inputData.length);

  #cleanupCallbacks: (() => void)[] = [];

  constructor(enableDebug: boolean) {
    const appInfo = new vk.ApplicationInfo({
      pApplicationName: new vk.CString("Deno"),
      applicationVersion: vk.makeVersion(1, 0, 0),
      pEngineName: new vk.CString("Deno"),
      engineVersion: vk.makeVersion(1, 0, 0),
      apiVersion: vk.makeVersion(1, 3, 0),
    });

    const debugInfo = new vk.DebugUtilsMessengerCreateInfoEXT({
      messageSeverity:
        // vk.DebugUtilsMessageSeverityFlagBitsEXT
        //   .DEBUG_UTILS_MESSAGE_SEVERITY_INFO_BIT_EXT |
        // vk.DebugUtilsMessageSeverityFlagBitsEXT
        //   .DEBUG_UTILS_MESSAGE_SEVERITY_VERBOSE_BIT_EXT |
        vk.DebugUtilsMessageSeverityFlagBitsEXT
          .DEBUG_UTILS_MESSAGE_SEVERITY_WARNING_BIT_EXT |
        vk.DebugUtilsMessageSeverityFlagBitsEXT
          .DEBUG_UTILS_MESSAGE_SEVERITY_ERROR_BIT_EXT,
      messageType: vk.DebugUtilsMessageTypeFlagBitsEXT
        .DEBUG_UTILS_MESSAGE_TYPE_GENERAL_BIT_EXT |
        vk.DebugUtilsMessageTypeFlagBitsEXT
          .DEBUG_UTILS_MESSAGE_TYPE_PERFORMANCE_BIT_EXT |
        vk.DebugUtilsMessageTypeFlagBitsEXT
          .DEBUG_UTILS_MESSAGE_TYPE_VALIDATION_BIT_EXT,
      pfnUserCallback: debugCallback.pointer,
    });

    const result = createInstance(appInfo, [], [], enableDebug, debugInfo);
    if (result.instance === null) {
      console.error(`unsurppot layers: ${result.unsupportLayers}`);
      console.error(`unsurppot extensions: ${result.unsupportExtensions}`);
      throw Error("instance create failed.");
    } else {
      this.instance = result.instance;
      this.#cleanupCallbacks.push(() =>
        vk.DestroyInstance(this.instance, null)
      );
      if (enableDebug) {
        assert(result.debugMessenger);
        this.debugMessenger = result.debugMessenger;
        if (this.debugMessenger == null) {
          console.warn("debug layer init faild.");
        } else {
          this.#cleanupCallbacks.push(() => result.destroyDebugMessenger());
        }
      }
    }

    const {
      physicalDevice,
      memoryProperties,
    } = selelcPhysicalDevice(this.instance, (properties) => {
      for (const [index, device] of properties.entries()) {
        if (device.deviceType == vk.PhysicalDeviceType.DISCRETE_GPU) {
          return index;
        }
      }
      return 0;
    });

    // this.physicalDevice = physicalDevice;
    // this.memoryProperties = memoryProperties;

    // const {
    //   device,
    //   queue,
    //   queueFamilyIndex,
    // } = createDeviceAndQueue(this.physicalDevice);
    // this.device = device;
    // this.#cleanupCallbacks.push(() => vk.DestroyDevice(this.device, null));
    // this.computeQueue = queue;
    // this.queueFamilyIndex = queueFamilyIndex;

    // this.createPipline();
    // this.createResources();
  }

  cleanup() {
    if (this.device) {
      vk.DeviceWaitIdle(this.device);
    }
    const callbacks = this.#cleanupCallbacks.toReversed();
    for (const callback of callbacks) {
      callback();
    }
  }

  createResources() {
    // pools
    const descriptorPool = new PointerRef();
    const poolSizes = [
      new vk.DescriptorPoolSize({
        type: vk.DescriptorType.STORAGE_BUFFER,
        descriptorCount: 20,
      }),
    ];
    vk.CreateDescriptorPool(
      this.device,
      new vk.DescriptorPoolCreateInfo({
        pPoolSizes: new StructArray(poolSizes, vk.DescriptorPoolSize),
        poolSizeCount: poolSizes.length,
        maxSets: 100,
      }),
      null,
      descriptorPool,
    );
    this.#cleanupCallbacks.push(() =>
      vk.DestroyDescriptorPool(this.device, descriptorPool.checkedValue, null)
    );
    this.descriptorPool = descriptorPool.checkedValue;

    const commandPool = new PointerRef();
    vk.CreateCommandPool(
      this.device,
      new vk.CommandPoolCreateInfo({
        queueFamilyIndex: this.queueFamilyIndex,
      }),
      null,
      commandPool,
    );
    this.#cleanupCallbacks.push(() =>
      vk.DestroyCommandPool(this.device, commandPool.checkedValue, null)
    );
    this.commandPool = commandPool.checkedValue;

    // buffers
    // const inputData = new Float32Array(16);
    this.inputBuffer = this.createBuffer(
      this.inputData.byteLength,
      vk.BufferUsageFlagBits.STORAGE_BUFFER,
      vk.MemoryPropertyFlagBits.HOST_VISIBLE |
        vk.MemoryPropertyFlagBits.HOST_COHERENT,
    );
    this.writeBuffer(this.inputBuffer, this.inputData);

    this.outputBuffer = this.createBuffer(
      this.inputData.byteLength,
      vk.BufferUsageFlagBits.STORAGE_BUFFER,
      vk.MemoryPropertyFlagBits.HOST_VISIBLE |
        vk.MemoryPropertyFlagBits.HOST_COHERENT,
    );

    this.uniformBuffer = this.createBuffer(
      this.uniformData.byteLength,
      vk.BufferUsageFlagBits.UNIFORM_BUFFER,
      vk.MemoryPropertyFlagBits.HOST_VISIBLE |
        vk.MemoryPropertyFlagBits.HOST_COHERENT,
    );
    this.writeBuffer(this.uniformBuffer, this.uniformData);

    // descriptor set
    const descriptorSetRef = new PointerRef();
    vk.AllocateDescriptorSets(
      this.device,
      new vk.DescriptorSetAllocateInfo({
        descriptorPool: this.descriptorPool,
        descriptorSetCount: 1,
        pSetLayouts: PointerRef.ofPointer(this.descriptorSetLayout),
      }),
      descriptorSetRef,
    );
    this.descriptorSet = descriptorSetRef.checkedValue;

    const descriptorWrites = [
      new vk.WriteDescriptorSet({
        dstSet: descriptorSetRef.checkedValue,
        dstBinding: 0,
        descriptorCount: 1,
        descriptorType: vk.DescriptorType.UNIFORM_BUFFER,
        pBufferInfo: new vk.DescriptorBufferInfo({
          buffer: this.uniformBuffer.buffer,
          offset: 0,
          range: vk.WHOLE_SIZE,
        }),
      }),
      new vk.WriteDescriptorSet({
        dstSet: descriptorSetRef.checkedValue,
        dstBinding: 1,
        descriptorCount: 1,
        descriptorType: vk.DescriptorType.STORAGE_BUFFER,
        pBufferInfo: new vk.DescriptorBufferInfo({
          buffer: this.inputBuffer.buffer,
          offset: 0,
          range: vk.WHOLE_SIZE,
        }),
      }),
      new vk.WriteDescriptorSet({
        dstSet: descriptorSetRef.checkedValue,
        dstBinding: 2,
        descriptorCount: 1,
        descriptorType: vk.DescriptorType.STORAGE_BUFFER,
        pBufferInfo: new vk.DescriptorBufferInfo({
          buffer: this.outputBuffer.buffer,
          offset: 0,
          range: vk.WHOLE_SIZE,
        }),
      }),
    ];

    vk.UpdateDescriptorSets(
      this.device,
      descriptorWrites.length,
      new StructArray(descriptorWrites, vk.WriteDescriptorSet),
      0,
      null,
    );
  }

  createBuffer(
    byteLength: number,
    usage: vk.BufferUsageFlags,
    memoryProperties: vk.MemoryPropertyFlags,
  ) {
    const { buffer, memory } = createBuffer(
      this.device,
      this.memoryProperties,
      byteLength,
      usage,
      memoryProperties,
    );
    this.#cleanupCallbacks.push(() => {
      vk.DestroyBuffer(this.device, buffer, null);
      vk.FreeMemory(this.device, memory, null);
    });
    return { buffer, memory, byteLength, usage, memoryProperties };
  }

  createPipline() {
    const shaderModuleRef = new PointerRef();
    const code = Deno.readFileSync(
      "./examples/compute/shaders/compute.comp.spv",
    );
    vk.CreateShaderModule(
      this.device,
      new vk.ShaderModuleCreateInfo({
        codeSize: code.length,
        pCode: code,
      }),
      null,
      shaderModuleRef,
    );
    this.#cleanupCallbacks.push(() =>
      vk.DestroyShaderModule(
        this.device,
        shaderModuleRef.checkedValue,
        null,
      )
    );

    const shaderStageInfo = new vk.PipelineShaderStageCreateInfo({
      module: shaderModuleRef.checkedValue,
      pName: new CString("main"),
      stage: vk.ShaderStageFlagBits.COMPUTE,
    });

    const bindings = [
      new vk.DescriptorSetLayoutBinding({
        binding: 0,
        descriptorCount: 1,
        descriptorType: vk.DescriptorType.UNIFORM_BUFFER,
        stageFlags: vk.ShaderStageFlagBits.COMPUTE,
      }),
      new vk.DescriptorSetLayoutBinding({
        binding: 1,
        descriptorCount: 1,
        descriptorType: vk.DescriptorType.STORAGE_BUFFER,
        stageFlags: vk.ShaderStageFlagBits.COMPUTE,
      }),
      new vk.DescriptorSetLayoutBinding({
        binding: 2,
        descriptorCount: 1,
        descriptorType: vk.DescriptorType.STORAGE_BUFFER,
        stageFlags: vk.ShaderStageFlagBits.COMPUTE,
      }),
    ];

    const descriptorSetLayoutRef = new PointerRef();
    vk.CreateDescriptorSetLayout(
      this.device,
      new vk.DescriptorSetLayoutCreateInfo({
        pBindings: new StructArray(bindings, vk.DescriptorSetLayoutBinding),
        bindingCount: bindings.length,
      }),
      null,
      descriptorSetLayoutRef,
    );
    this.#cleanupCallbacks.push(() =>
      vk.DestroyDescriptorSetLayout(
        this.device,
        descriptorSetLayoutRef.checkedValue,
        null,
      )
    );
    this.descriptorSetLayout = descriptorSetLayoutRef.checkedValue;

    const pipelineLayoutRef = new PointerRef();
    vk.CreatePipelineLayout(
      this.device,
      new vk.PipelineLayoutCreateInfo({
        setLayoutCount: 1,
        pSetLayouts: descriptorSetLayoutRef,
      }),
      null,
      pipelineLayoutRef,
    );
    this.#cleanupCallbacks.push(() =>
      vk.DestroyPipelineLayout(
        this.device,
        pipelineLayoutRef.checkedValue,
        null,
      )
    );
    this.pipelineLayout = pipelineLayoutRef.checkedValue;

    const pipelineRef = new PointerRef();
    const infos = new vk.ComputePipelineCreateInfo({
      stage: shaderStageInfo,
      layout: pipelineLayoutRef.checkedValue,
    });
    vk.CreateComputePipelines(
      this.device,
      null,
      1,
      infos,
      null,
      pipelineRef,
    );
    this.#cleanupCallbacks.push(() =>
      vk.DestroyPipeline(this.device, pipelineRef.checkedValue, null)
    );

    this.pipeline = pipelineRef.checkedValue;
  }

  writeBuffer(buffer: BufferInfo, data: TypedArray) {
    assert(buffer.memoryProperties & vk.MemoryPropertyFlagBits.HOST_VISIBLE);
    assert(data.byteLength <= buffer.byteLength);
    const byteView = data instanceof Uint8Array
      ? data
      : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    const outPointer = new vk.PointerRef();
    const byteLength = byteView.byteLength;
    vk.MapMemory(this.device, buffer.memory, 0, byteLength, 0, outPointer);
    const outBuffer = new Uint8Array(
      Deno.UnsafePointerView.getArrayBuffer(
        outPointer.checkedValue,
        byteLength,
      ),
    );
    outBuffer.set(byteView, 0);
    vk.UnmapMemory(this.device, buffer.memory);
  }

  readBuffer(buffer: BufferInfo) {
    assert(buffer.memoryProperties & vk.MemoryPropertyFlagBits.HOST_VISIBLE);
    const outPointer = new vk.PointerRef();
    const byteLength = buffer.byteLength;
    vk.MapMemory(this.device, buffer.memory, 0, byteLength, 0, outPointer);
    const outBuffer = Deno.UnsafePointerView.getArrayBuffer(
      outPointer.checkedValue,
      byteLength,
    );
    const copy = outBuffer.slice(0);
    vk.UnmapMemory(this.device, buffer.memory);
    return copy;
  }

  run() {
    console.log("input");
    console.log(this.inputData);

    const fenceRef = new PointerRef();
    vk.CreateFence(this.device, new vk.FenceCreateInfo(), null, fenceRef);
    this.#cleanupCallbacks.push(() =>
      vk.DestroyFence(this.device, fenceRef.checkedValue, null)
    );
    const fence = fenceRef.checkedValue;

    const cmdRef = new PointerRef();
    vk.AllocateCommandBuffers(
      this.device,
      new vk.CommandBufferAllocateInfo({
        commandPool: this.commandPool,
        commandBufferCount: 1,
        level: vk.CommandBufferLevel.PRIMARY,
      }),
      cmdRef,
    );
    const cmd = cmdRef.checkedValue;

    vk.BeginCommandBuffer(
      cmd,
      new vk.CommandBufferBeginInfo({
        flags: vk.CommandBufferUsageFlagBits.ONE_TIME_SUBMIT,
      }),
    );

    vk.CmdBindDescriptorSets(
      cmd,
      vk.PipelineBindPoint.COMPUTE,
      this.pipelineLayout,
      0,
      1,
      PointerRef.ofPointer(this.descriptorSet),
      0,
      null,
    );
    vk.CmdBindPipeline(cmd, vk.PipelineBindPoint.COMPUTE, this.pipeline);
    vk.CmdDispatch(cmd, 1, 1, 1);

    vk.EndCommandBuffer(cmd);
    vk.QueueSubmit(
      this.computeQueue,
      1,
      new vk.SubmitInfo({ commandBufferCount: 1, pCommandBuffers: cmdRef }),
      fence,
    );

    vk.WaitForFences(
      this.device,
      1,
      fenceRef,
      1, /** VKBool */
      5 * 1000 * 1000, /** ns */
    );
    console.log("output");
    const copy = new Float32Array(this.readBuffer(this.outputBuffer));
    console.log(copy);
  }
}

console.time("creations");
const app = new ComputeApp(true);
console.timeEnd("creations");

// console.time("run");
// app.run();
// console.timeEnd("run");

console.time("cleanup");
app.cleanup();
console.timeEnd("cleanup");

debugCallback.close();
Deno.exit(0);
