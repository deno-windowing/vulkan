import * as vk from "../../api/mod.ts";
import * as dwm from "https://deno.land/x/dwm@0.3.2/mod.ts";
import { PointerArray } from "../../api/mod.ts";

export class TriangleApplication {
  window!: dwm.DwmWindow;

  instance!: vk.Instance;
  surface!: vk.SurfaceKHR;
  physicalDevice!: vk.PhysicalDevice;
  device!: vk.Device;
  graphicsQueue!: vk.Queue;
  presentQueue!: vk.Queue;
  deviceMemoryProperties!: vk.PhysicalDeviceMemoryProperties;
  imageAvailableSemaphore!: vk.Semaphore;
  renderingFinishedSemaphore!: vk.Semaphore;

  vertexBuffer!: vk.Buffer;
  vertexBufferMemory!: vk.DeviceMemory;
  indexBuffer!: vk.Buffer;
  indexBufferMemory!: vk.DeviceMemory;
  vertexBindingDescription!: vk.VertexInputBindingDescription;
  vertexAttributeDescriptions!: vk.VertexInputAttributeDescription[];

  // deno-fmt-ignore
  uniformBufferData = new Float32Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0,
  ]);
  uniformBuffer!: vk.Buffer;
  uniformBufferMemory!: vk.DeviceMemory;
  descriptorSetLayout!: vk.DescriptorSetLayout;
  descriptorPool!: vk.DescriptorPool;
  descriptorSet!: vk.DescriptorSet;

  swapChainExtent!: vk.Extent2D;
  swapChainFormat!: vk.Format;
  oldSwapChain!: vk.SwapchainKHR;
  swapChain!: vk.SwapchainKHR;
  swapChainImages!: Deno.PointerValue[];
  swapChainImageViews!: Deno.PointerValue[];
  swapChainFramebuffers!: Deno.PointerValue[];

  renderPass!: vk.RenderPass;
  graphicsPipeline!: vk.Pipeline;
  pipelineLayout!: vk.PipelineLayout;

  commandPool!: vk.CommandPool;
  graphicsCommandBuffers!: Deno.PointerValue[];

  graphicsQueueFamily!: number;
  presentQueueFamily!: number;

  timeStart!: number;

  constructor() {
    this.timeStart = performance.now();
  }

  async run() {
    this.window = dwm.createWindow({
      title: "Test",
      width: 800,
      height: 600,
      resizable: true,
      noClientAPI: true,
    });

    addEventListener("framebuffersize", (event) => {
      if (event.match(this.window)) {
        this.onWindowResized();
      }
    });

    await this.setupVulkan();
    await this.mainloop();
    this.cleanup(true);
  }

  async setupVulkan() {
    this.oldSwapChain = null;

    this.createInstance();
    this.createDebugCallback();
    this.createWindowSurface();
    this.findPhysicalDevice();
    this.checkSwapChainSupport();
    this.findQueueFamilies();
    this.createLogicalDevice();
    this.createSemaphores();
    this.createCommandPool();
    this.createVertexBuffer();
    this.createUniformBuffer();
    this.createSwapChain();
    this.createRenderPass();
    this.createImageViews();
    this.createFramebuffers();
    await this.createGraphicsPipeline();
    this.createDescriptorPool();
    this.createDescriptorSet();
    this.createCommandBuffers();
  }

  async mainloop() {
    await dwm.mainloop(async () => {
      this.updateUniformData();
      await this.draw();
    });
  }

  resized = false;

  onWindowResized() {
    this.resized = true;
  }

  async onWindowSizeChanged() {
    this.resized = false;

    this.cleanup(false);

    this.createSwapChain();
    this.createRenderPass();
    this.createImageViews();
    this.createFramebuffers();
    await this.createGraphicsPipeline();
    this.createCommandBuffers();
  }

  cleanup(fullClean: boolean) {
    vk.DeviceWaitIdle(this.device);

    vk.FreeCommandBuffers(
      this.device,
      this.commandPool,
      this.graphicsCommandBuffers.length,
      new PointerArray(this.graphicsCommandBuffers),
    );

    vk.DestroyPipeline(this.device, this.graphicsPipeline, null);
    vk.DestroyRenderPass(this.device, this.renderPass, null);

    for (let i = 0; i < this.swapChainFramebuffers.length; i++) {
      vk.DestroyFramebuffer(this.device, this.swapChainFramebuffers[i], null);
      vk.DestroyImageView(this.device, this.swapChainImageViews[i], null);
    }

    vk.DestroyDescriptorSetLayout(
      this.device,
      this.descriptorSetLayout,
      null,
    );

    if (fullClean) {
      vk.DestroySemaphore(this.device, this.imageAvailableSemaphore, null);
      vk.DestroySemaphore(this.device, this.renderingFinishedSemaphore, null);

      vk.DestroyCommandPool(this.device, this.commandPool, null);

      vk.DestroyDescriptorPool(this.device, this.descriptorPool, null);
      vk.DestroyBuffer(this.device, this.uniformBuffer, null);
      vk.FreeMemory(this.device, this.uniformBufferMemory, null);

      vk.DestroyBuffer(this.device, this.vertexBuffer, null);
      vk.FreeMemory(this.device, this.vertexBufferMemory, null);
      vk.DestroyBuffer(this.device, this.indexBuffer, null);
      vk.FreeMemory(this.device, this.indexBufferMemory, null);

      vk.DestroySwapchainKHR(this.device, this.swapChain, null);

      vk.DestroyDevice(this.device, null);

      vk.DestroySurfaceKHR(this.instance, this.surface, null);

      vk.DestroyInstance(this.instance, null);
    }
  }

  createInstance() {
    const appInfo = new vk.ApplicationInfo({
      applicationVersion: vk.makeVersion(1, 0, 0),
      engineVersion: vk.makeVersion(1, 0, 0),
      apiVersion: vk.makeVersion(1, 2, 0),
      pApplicationName: new vk.CString("Test"),
      pEngineName: new vk.CString("No Engine"),
    });

    const names = dwm.getRequiredInstanceExtensions();
    const createInfo = new vk.InstanceCreateInfo({
      pApplicationInfo: appInfo,
      enabledExtensionCount: names.length,
      ppEnabledExtensionNames: new vk.CStringArray(names),
      // enabledLayerCount: 1,
      ppEnabledLayerNames: new vk.CStringArray(["VK_LAYER_KHRONOS_validation"]),
    });

    const instOut = new vk.PointerRef();
    vk.CreateInstance(createInfo, null, instOut);
    this.instance = instOut.value;
  }

  createWindowSurface() {
    this.surface = this.window.createSurface(this.instance);
  }

  findPhysicalDevice() {
    const deviceCount = new Uint32Array(1);
    vk.EnumeratePhysicalDevices(
      this.instance,
      deviceCount,
      null,
    );

    if (deviceCount[0] < 1) {
      throw new Error("No devices found");
    }

    const physicalDeviceOut = new vk.PointerRef();
    deviceCount[0] = 1;
    vk.EnumeratePhysicalDevices(
      this.instance,
      deviceCount,
      physicalDeviceOut,
    );
    this.physicalDevice = physicalDeviceOut.value;
  }

  checkSwapChainSupport() {}

  findQueueFamilies() {
    const queueFamilyCount = new Uint32Array(1);
    vk.GetPhysicalDeviceQueueFamilyProperties(
      this.physicalDevice,
      queueFamilyCount.buffer,
      null,
    );

    if (queueFamilyCount[0] < 1) {
      throw new Error("No queue families found");
    }

    const queueFamilyPropertiesPtr = new vk.StructArray(
      queueFamilyCount[0],
      vk.QueueFamilyProperties,
    );
    vk.GetPhysicalDeviceQueueFamilyProperties(
      this.physicalDevice,
      queueFamilyCount,
      queueFamilyPropertiesPtr,
    );
    const queueFamilies = [...queueFamilyPropertiesPtr];

    let foundGraphicsQueueFamily = false;
    let foundPresentQueueFamily = false;

    for (let i = 0; i < queueFamilyCount[0]; i++) {
      const presentSupport = new Uint32Array(1);
      vk.GetPhysicalDeviceSurfaceSupportKHR(
        this.physicalDevice,
        i,
        this.surface,
        presentSupport,
      );

      if (
        queueFamilies[i].queueCount > 0 &&
        queueFamilies[i].queueFlags & vk.QueueFlagBits.GRAPHICS
      ) {
        this.graphicsQueueFamily = i;
        foundGraphicsQueueFamily = true;

        if (presentSupport[0] > 0) {
          this.presentQueueFamily = i;
          foundPresentQueueFamily = true;
          break;
        }
      }

      if (!foundPresentQueueFamily && presentSupport[0] > 0) {
        this.presentQueueFamily = i;
        foundPresentQueueFamily = true;
      }
    }

    if (!foundGraphicsQueueFamily) {
      throw new Error("No graphics queue family found");
    }
  }

  createLogicalDevice() {
    const queuePriority = new Float32Array([1.0]);

    const pQueueCreateInfos = new vk.StructArray(
      2,
      vk.DeviceQueueCreateInfo,
    );

    const queueCreateInfo = [
      pQueueCreateInfos.get(0),
      pQueueCreateInfos.get(1),
    ];

    queueCreateInfo[0].sType = vk.StructureType.DEVICE_QUEUE_CREATE_INFO;
    queueCreateInfo[0].queueFamilyIndex = this.graphicsQueueFamily;
    queueCreateInfo[0].queueCount = 1;
    queueCreateInfo[0].pQueuePriorities = queuePriority;

    queueCreateInfo[1].sType = vk.StructureType.DEVICE_QUEUE_CREATE_INFO;
    queueCreateInfo[1].queueFamilyIndex = this.presentQueueFamily;
    queueCreateInfo[1].queueCount = 1;
    queueCreateInfo[1].pQueuePriorities = queuePriority;

    const enabledFeatures = new vk.PhysicalDeviceFeatures();
    if (Deno.build.os !== "darwin") {
      enabledFeatures.shaderClipDistance = 1;
      enabledFeatures.shaderCullDistance = 1;
    }

    const deviceCreateInfo = new vk.DeviceCreateInfo({
      pQueueCreateInfos,
      queueCreateInfoCount: this.graphicsQueueFamily === this.presentQueueFamily
        ? 1
        : 2,
      pEnabledFeatures: enabledFeatures,
      enabledExtensionCount: 1,
      ppEnabledExtensionNames: new vk.CStringArray([
        vk.KHR_SWAPCHAIN_EXTENSION_NAME,
      ]),
      // enabledLayerCount: 1,
      // ppEnabledLayerNames: new vk.CStringArray(["VK_LAYER_KHRONOS_validation"]),
    });

    const deviceOut = new vk.PointerRef();
    vk.CreateDevice(
      this.physicalDevice,
      deviceCreateInfo,
      null,
      deviceOut,
    );
    this.device = deviceOut.value;

    const graphicsQueueOut = new vk.PointerRef();
    vk.GetDeviceQueue(
      this.device,
      this.graphicsQueueFamily,
      0,
      graphicsQueueOut,
    );
    this.graphicsQueue = graphicsQueueOut.value;
    const presentQueueOut = new vk.PointerRef();
    vk.GetDeviceQueue(
      this.device,
      this.presentQueueFamily,
      0,
      presentQueueOut,
    );
    this.presentQueue = presentQueueOut.value;

    const deviceMemoryProperties = new vk.PhysicalDeviceMemoryProperties();
    vk.GetPhysicalDeviceMemoryProperties(
      this.physicalDevice,
      deviceMemoryProperties,
    );
    this.deviceMemoryProperties = deviceMemoryProperties;
  }

  createDebugCallback() {}

  createSemaphores() {
    const createInfo = new vk.SemaphoreCreateInfo({});

    const imageAvailableSemaphoreOut = new vk.PointerRef();
    const renderingFinishedSemaphoreOut = new vk.PointerRef();

    vk.CreateSemaphore(
      this.device,
      createInfo,
      null,
      imageAvailableSemaphoreOut,
    );
    vk.CreateSemaphore(
      this.device,
      createInfo,
      null,
      renderingFinishedSemaphoreOut,
    );

    this.imageAvailableSemaphore = imageAvailableSemaphoreOut.value;
    this.renderingFinishedSemaphore = renderingFinishedSemaphoreOut.value;
  }

  createCommandPool() {
    const poolCreateInfo = new vk.CommandPoolCreateInfo({
      queueFamilyIndex: this.graphicsQueueFamily,
    });

    const commandPoolOut = new vk.PointerRef();
    vk.CreateCommandPool(
      this.device,
      poolCreateInfo,
      null,
      commandPoolOut,
    );
    this.commandPool = commandPoolOut.value;
  }

  createVertexBuffer() {
    // deno-fmt-ignore
    const vertices = new Float32Array([
      -0.5, -0.5, 0.0,  1.0, 0.0, 0.0,
      -0.5,  0.5, 0.0,  0.0, 1.0, 0.0,
       0.5,  0.5, 0.0,  0.0, 0.0, 1.0,
    ]);

    const indices = new Uint16Array([0, 1, 2]);

    const memAlloc = new vk.MemoryAllocateInfo({});
    const memReqs = new vk.MemoryRequirements();

    const cmdBufInfo = new vk.CommandBufferAllocateInfo({
      commandPool: this.commandPool,
      level: vk.CommandBufferLevel.PRIMARY,
      commandBufferCount: 1,
    });

    const copyCommandBufferOut = new vk.PointerRef();
    vk.AllocateCommandBuffers(
      this.device,
      cmdBufInfo,
      copyCommandBufferOut,
    );
    const copyCommandBuffer = copyCommandBufferOut.value;

    const vertexBufferInfo = new vk.BufferCreateInfo({
      size: vertices.byteLength,
      usage: vk.BufferUsageFlagBits.TRANSFER_SRC,
    });

    const vertexBufferOut = new vk.PointerRef();
    vk.CreateBuffer(
      this.device,
      vertexBufferInfo,
      null,
      vertexBufferOut,
    );
    const vertexBuffer = vertexBufferOut.value;

    vk.GetBufferMemoryRequirements(
      this.device,
      vertexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.MemoryPropertyFlagBits.HOST_VISIBLE,
    );
    const vertexBufferMemoryOut = new vk.PointerRef();
    vk.AllocateMemory(
      this.device,
      memAlloc,
      null,
      vertexBufferMemoryOut,
    );
    const vertexBufferMemory = vertexBufferMemoryOut.value;

    const dataOut = new vk.PointerRef();
    vk.MapMemory(
      this.device,
      vertexBufferMemory,
      0,
      vertices.byteLength,
      0,
      dataOut,
    );
    vk.getBuffer(dataOut.checkedValue, vertices.byteLength, Float32Array).set(
      vertices,
    );
    vk.UnmapMemory(this.device, vertexBufferMemory);
    vk.BindBufferMemory(
      this.device,
      vertexBuffer,
      vertexBufferMemory,
      0,
    );

    vertexBufferInfo.usage = vk.BufferUsageFlagBits.TRANSFER_DST |
      vk.BufferUsageFlagBits.VERTEX_BUFFER;
    vk.CreateBuffer(
      this.device,
      vertexBufferInfo,
      null,
      vertexBufferOut,
    );
    this.vertexBuffer = vertexBufferOut.value;
    vk.GetBufferMemoryRequirements(
      this.device,
      this.vertexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.MemoryPropertyFlagBits.DEVICE_LOCAL,
    );
    vk.AllocateMemory(
      this.device,
      memAlloc,
      null,
      vertexBufferMemoryOut,
    );
    this.vertexBufferMemory = vertexBufferMemoryOut.value;
    vk.BindBufferMemory(
      this.device,
      this.vertexBuffer,
      this.vertexBufferMemory,
      0,
    );

    const indexBufferInfo = new vk.BufferCreateInfo({
      size: indices.byteLength,
      usage: vk.BufferUsageFlagBits.TRANSFER_SRC,
    });

    const indexBufferOut = new vk.PointerRef();
    vk.CreateBuffer(
      this.device,
      indexBufferInfo,
      null,
      indexBufferOut,
    );
    const indexBuffer = indexBufferOut.value;
    vk.GetBufferMemoryRequirements(
      this.device,
      indexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.MemoryPropertyFlagBits.HOST_VISIBLE,
    );
    const indexBufferMemoryOut = new vk.PointerRef();
    vk.AllocateMemory(
      this.device,
      memAlloc,
      null,
      indexBufferMemoryOut,
    );
    const indexBufferMemory = indexBufferMemoryOut.value;
    vk.MapMemory(
      this.device,
      indexBufferMemory,
      0,
      indices.byteLength,
      0,
      dataOut,
    );
    vk.getBuffer(dataOut.checkedValue, indices.byteLength, Uint16Array).set(
      indices,
    );
    vk.UnmapMemory(this.device, indexBufferMemory);
    vk.BindBufferMemory(
      this.device,
      indexBuffer,
      indexBufferMemory,
      0,
    );

    indexBufferInfo.usage = vk.BufferUsageFlagBits.TRANSFER_DST |
      vk.BufferUsageFlagBits.INDEX_BUFFER;
    vk.CreateBuffer(
      this.device,
      indexBufferInfo,
      null,
      indexBufferOut,
    );
    this.indexBuffer = indexBufferOut.value;
    vk.GetBufferMemoryRequirements(
      this.device,
      this.indexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.MemoryPropertyFlagBits.DEVICE_LOCAL,
    );
    vk.AllocateMemory(
      this.device,
      memAlloc,
      null,
      indexBufferMemoryOut,
    );
    this.indexBufferMemory = indexBufferMemoryOut.value;
    vk.BindBufferMemory(
      this.device,
      this.indexBuffer,
      this.indexBufferMemory,
      0,
    );

    const bufferBeginInfo = new vk.CommandBufferBeginInfo({
      flags: vk.CommandBufferUsageFlagBits.ONE_TIME_SUBMIT,
    });

    vk.BeginCommandBuffer(copyCommandBuffer, bufferBeginInfo);

    const copyRegion = new vk.BufferCopy({
      size: vertices.byteLength,
    });
    vk.CmdCopyBuffer(
      copyCommandBuffer,
      vertexBuffer,
      this.vertexBuffer,
      1,
      copyRegion,
    );
    copyRegion.size = indices.byteLength;
    vk.CmdCopyBuffer(
      copyCommandBuffer,
      indexBuffer,
      this.indexBuffer,
      1,
      copyRegion,
    );

    vk.EndCommandBuffer(copyCommandBuffer);

    const submitInfo = new vk.SubmitInfo({
      commandBufferCount: 1,
      pCommandBuffers: new vk.PointerArray([copyCommandBuffer]),
    });

    vk.QueueSubmit(this.graphicsQueue, 1, submitInfo, null);
    vk.QueueWaitIdle(this.graphicsQueue);

    vk.FreeCommandBuffers(
      this.device,
      this.commandPool,
      1,
      new vk.PointerArray([copyCommandBuffer]),
    );

    vk.DestroyBuffer(this.device, vertexBuffer, null);
    vk.FreeMemory(this.device, vertexBufferMemory, null);
    vk.DestroyBuffer(this.device, indexBuffer, null);
    vk.FreeMemory(this.device, indexBufferMemory, null);

    this.vertexBindingDescription = new vk.VertexInputBindingDescription({
      binding: 0,
      stride: 4 * 3,
      inputRate: vk.VertexInputRate.VERTEX,
    });

    this.vertexAttributeDescriptions = [
      // vec2 position
      new vk.VertexInputAttributeDescription({
        binding: 0,
        location: 0,
        format: vk.Format.R32G32B32_SFLOAT,
      }),
      // vec3 color
      new vk.VertexInputAttributeDescription({
        binding: 0,
        location: 1,
        format: vk.Format.R32G32B32_SFLOAT,
        offset: 4 * 3,
      }),
    ];
  }

  createUniformBuffer() {
    const bufferInfo = new vk.BufferCreateInfo({
      size: 4 * 4 * 4,
      usage: vk.BufferUsageFlagBits.UNIFORM_BUFFER,
    });

    const bufferOut = new vk.PointerRef();
    vk.CreateBuffer(
      this.device,
      bufferInfo,
      null,
      bufferOut,
    );
    this.uniformBuffer = bufferOut.value;

    const memReqs = new vk.MemoryRequirements();
    vk.GetBufferMemoryRequirements(
      this.device,
      this.uniformBuffer,
      memReqs,
    );

    const memAlloc = new vk.MemoryAllocateInfo({
      allocationSize: memReqs.size,
      memoryTypeIndex: this.getMemoryType(
        memReqs.memoryTypeBits,
        vk.MemoryPropertyFlagBits.HOST_VISIBLE |
          vk.MemoryPropertyFlagBits.HOST_COHERENT,
      ),
    });

    const bufferMemoryOut = new vk.PointerRef();
    vk.AllocateMemory(
      this.device,
      memAlloc,
      null,
      bufferMemoryOut,
    );
    this.uniformBufferMemory = bufferMemoryOut.value;

    vk.BindBufferMemory(
      this.device,
      this.uniformBuffer,
      this.uniformBufferMemory,
      0,
    );

    this.updateUniformData();
  }

  updateUniformData() {
    // const timeNow = performance.now();
    // const timeDelta = timeNow - this.timeStart;
    // const angle = (timeDelta % 4000) / 4000 * Math.PI * 2;

    const dataOut = new vk.PointerRef();
    vk.MapMemory(
      this.device,
      this.uniformBufferMemory,
      0,
      4 * 4 * 4,
      0,
      dataOut,
    );
    vk.getBuffer(
      dataOut.checkedValue,
      this.uniformBufferData.byteLength,
      Float32Array,
    )
      .set(this.uniformBufferData);
    vk.UnmapMemory(this.device, this.uniformBufferMemory);
  }

  getMemoryType(
    typeBits: number,
    properties: vk.Flags,
  ) {
    for (let i = 0; i < 32; i++) {
      if ((typeBits & 1) === 1) {
        if (
          (this.deviceMemoryProperties.memoryTypes[i].propertyFlags &
            properties) === properties
        ) {
          return i;
        }
      }
      typeBits >>= 1;
    }
    return 0;
  }

  createSwapChain() {
    const surfaceCapabilities = new vk.SurfaceCapabilitiesKHR();
    vk.GetPhysicalDeviceSurfaceCapabilitiesKHR(
      this.physicalDevice,
      this.surface,
      surfaceCapabilities,
    );

    const formatCountOut = new Uint32Array(1);
    vk.GetPhysicalDeviceSurfaceFormatsKHR(
      this.physicalDevice,
      this.surface,
      formatCountOut,
      null,
    );

    const surfaceFormats = new vk.StructArray(
      formatCountOut[0],
      vk.SurfaceFormatKHR,
    );
    vk.GetPhysicalDeviceSurfaceFormatsKHR(
      this.physicalDevice,
      this.surface,
      formatCountOut,
      surfaceFormats,
    );

    const presentModeCountOut = new Uint32Array(1);
    vk.GetPhysicalDeviceSurfacePresentModesKHR(
      this.physicalDevice,
      this.surface,
      presentModeCountOut,
      null,
    );

    const presentModes = new Uint32Array(presentModeCountOut[0]);
    vk.GetPhysicalDeviceSurfacePresentModesKHR(
      this.physicalDevice,
      this.surface,
      presentModeCountOut,
      presentModes,
    );

    let imageCount = surfaceCapabilities.minImageCount + 1;
    if (
      surfaceCapabilities.maxImageCount > 0 &&
      imageCount > surfaceCapabilities.maxImageCount
    ) {
      imageCount = surfaceCapabilities.maxImageCount;
    }

    const surfaceFormat = this.chooseSurfaceFormat([...surfaceFormats]);

    this.swapChainExtent = this.chooseSwapExtent(surfaceCapabilities);

    let surfaceTransform = 0;
    if (
      surfaceCapabilities.supportedTransforms &
      vk.SurfaceTransformFlagBitsKHR.SURFACE_TRANSFORM_IDENTITY_BIT_KHR
    ) {
      surfaceTransform =
        vk.SurfaceTransformFlagBitsKHR.SURFACE_TRANSFORM_IDENTITY_BIT_KHR;
    } else {
      surfaceTransform = surfaceCapabilities.currentTransform;
    }

    const presentMode = this.choosePresentMode([...presentModes]);

    const createInfo = new vk.SwapchainCreateInfoKHR({
      surface: this.surface,
      minImageCount: imageCount,
      imageFormat: surfaceFormat.format,
      imageColorSpace: surfaceFormat.colorSpace,
      imageExtent: this.swapChainExtent,
      imageArrayLayers: 1,
      imageUsage: vk.ImageUsageFlagBits.COLOR_ATTACHMENT,
      imageSharingMode: vk.SharingMode.EXCLUSIVE,
      queueFamilyIndexCount: 0,
      pQueueFamilyIndices: null,
      preTransform: surfaceTransform,
      compositeAlpha:
        vk.CompositeAlphaFlagBitsKHR.COMPOSITE_ALPHA_OPAQUE_BIT_KHR,
      presentMode,
      clipped: 1,
      oldSwapchain: this.oldSwapChain,
    });

    const swapChainOut = new vk.PointerRef();
    vk.CreateSwapchainKHR(
      this.device,
      createInfo,
      null,
      swapChainOut,
    );
    this.swapChain = swapChainOut.value;

    if (this.oldSwapChain) {
      vk.DestroySwapchainKHR(this.device, this.oldSwapChain, null);
    }

    this.oldSwapChain = this.swapChain;

    this.swapChainFormat = surfaceFormat.format;

    const actualImageCount = new Uint32Array(1);
    vk.GetSwapchainImagesKHR(
      this.device,
      this.swapChain,
      actualImageCount,
      null,
    );

    const _imageArray = new PointerArray(actualImageCount[0]);
    vk.GetSwapchainImagesKHR(
      this.device,
      this.swapChain,
      actualImageCount,
      _imageArray,
    );
    this.swapChainImages = _imageArray.toList();
  }

  chooseSurfaceFormat(availableFormats: vk.SurfaceFormatKHR[]) {
    if (
      availableFormats.length === 1 &&
      availableFormats[0].format === vk.Format.UNDEFINED
    ) {
      return new vk.SurfaceFormatKHR({
        format: vk.Format.B8G8R8A8_UNORM,
        colorSpace: vk.ColorSpaceKHR.COLOR_SPACE_SRGB_NONLINEAR_KHR,
      });
    }

    for (const availableFormat of availableFormats) {
      if (
        availableFormat.format === vk.Format.B8G8R8A8_UNORM &&
        availableFormat.colorSpace ===
          vk.ColorSpaceKHR.COLOR_SPACE_SRGB_NONLINEAR_KHR
      ) {
        return availableFormat;
      }
    }

    return availableFormats[0];
  }

  chooseSwapExtent(surfaceCapabilities: vk.SurfaceCapabilitiesKHR) {
    if (surfaceCapabilities.currentExtent.width === -1) {
      return new vk.Extent2D({
        width: Math.min(
          Math.max(
            this.window.size.width,
            surfaceCapabilities.minImageExtent.width,
          ),
          surfaceCapabilities.maxImageExtent.width,
        ),
        height: Math.min(
          Math.max(
            this.window.size.height,
            surfaceCapabilities.minImageExtent.height,
          ),
          surfaceCapabilities.maxImageExtent.height,
        ),
      });
    } else {
      return surfaceCapabilities.currentExtent;
    }
  }

  choosePresentMode(presentModes: vk.PresentModeKHR[]) {
    for (const presentMode of presentModes) {
      if (presentMode === vk.PresentModeKHR.PRESENT_MODE_MAILBOX_KHR) {
        return presentMode;
      }
    }
    return vk.PresentModeKHR.PRESENT_MODE_FIFO_KHR;
  }

  createRenderPass() {
    const attachmentDescription = new vk.AttachmentDescription({
      format: this.swapChainFormat,
      samples: vk.SampleCountFlagBits.VK_1,
      loadOp: vk.AttachmentLoadOp.CLEAR,
      storeOp: vk.AttachmentStoreOp.STORE,
      stencilLoadOp: vk.AttachmentLoadOp.DONT_CARE,
      stencilStoreOp: vk.AttachmentStoreOp.DONT_CARE,
      initialLayout: vk.ImageLayout.UNDEFINED,
      finalLayout: vk.ImageLayout.PRESENT_SRC_KHR,
    });

    const colorAttachment = new vk.AttachmentReference({
      attachment: 0,
      layout: vk.ImageLayout.COLOR_ATTACHMENT_OPTIMAL,
    });

    const subPassDescription = new vk.SubpassDescription({
      pipelineBindPoint: vk.PipelineBindPoint.GRAPHICS,
      colorAttachmentCount: 1,
      pColorAttachments: colorAttachment,
    });

    const createInfo = new vk.RenderPassCreateInfo({
      attachmentCount: 1,
      pAttachments: attachmentDescription,
      subpassCount: 1,
      pSubpasses: subPassDescription,
    });

    const renderPassOut = new vk.PointerRef();
    vk.CreateRenderPass(
      this.device,
      createInfo,
      null,
      renderPassOut,
    );
    this.renderPass = renderPassOut.value;
  }

  createImageViews() {
    this.swapChainImageViews = Array(this.swapChainImages.length).fill(null);

    for (let i = 0; i < this.swapChainImages.length; i++) {
      const components = new vk.ComponentMapping({
        r: vk.ComponentSwizzle.IDENTITY,
        g: vk.ComponentSwizzle.IDENTITY,
        b: vk.ComponentSwizzle.IDENTITY,
        a: vk.ComponentSwizzle.IDENTITY,
      });

      const subresourceRange = new vk.ImageSubresourceRange({
        aspectMask: vk.ImageAspectFlagBits.COLOR,
        baseMipLevel: 0,
        levelCount: 1,
        baseArrayLayer: 0,
        layerCount: 1,
      });

      const createInfo = new vk.ImageViewCreateInfo({
        image: this.swapChainImages[i],
        viewType: vk.ImageViewType.VK_2D,
        format: this.swapChainFormat,
        components,
        subresourceRange,
      });

      const imageViewOut = new vk.PointerRef();
      vk.CreateImageView(
        this.device,
        createInfo,
        null,
        imageViewOut,
      );
      this.swapChainImageViews[i] = imageViewOut.value;
    }
  }

  createFramebuffers() {
    this.swapChainFramebuffers = Array(this.swapChainImages.length).fill(null);

    for (let i = 0; i < this.swapChainImages.length; i++) {
      const createInfo = new vk.FramebufferCreateInfo({
        renderPass: this.renderPass,
        attachmentCount: 1,
        pAttachments: new vk.PointerArray([this.swapChainImageViews[i]]),
        width: this.swapChainExtent.width,
        height: this.swapChainExtent.height,
        layers: 1,
      });

      const framebufferOut = new vk.PointerRef();
      vk.CreateFramebuffer(
        this.device,
        createInfo,
        null,
        framebufferOut,
      );

      this.swapChainFramebuffers[i] = framebufferOut.value;
    }
  }

  async createShaderModule(file: string | URL) {
    const data = new Uint8Array(
      await (await (await fetch(file)).arrayBuffer()),
    );

    const createInfo = new vk.ShaderModuleCreateInfo({
      codeSize: data.byteLength,
      pCode: data,
    });

    const shaderModuleOut = new vk.PointerRef();
    vk.CreateShaderModule(
      this.device,
      createInfo,
      null,
      shaderModuleOut,
    );
    return shaderModuleOut.value;
  }

  async createGraphicsPipeline() {
    const vertexShaderModule = await this.createShaderModule(
      new URL("./shaders/vert.spv", import.meta.url),
    );
    const fragmentShaderModule = await this.createShaderModule(
      new URL("./shaders/frag.spv", import.meta.url),
    );

    const vertexShaderCreateInfo = new vk.PipelineShaderStageCreateInfo({
      stage: vk.ShaderStageFlagBits.VERTEX,
      module: vertexShaderModule,
      pName: new vk.CString("main"),
    });

    const fragmentShaderCreateInfo = new vk.PipelineShaderStageCreateInfo({
      stage: vk.ShaderStageFlagBits.FRAGMENT,
      module: fragmentShaderModule,
      pName: new vk.CString("main"),
    });

    const shaderStages = new vk.StructArray(
      [
        vertexShaderCreateInfo,
        fragmentShaderCreateInfo,
      ],
      vk.PipelineShaderStageCreateInfo,
    );

    const vertexAttributeDescriptions = new vk.StructArray(
      this.vertexAttributeDescriptions,
      vk.VertexInputAttributeDescription,
    );

    const vertexInputCreateInfo = new vk.PipelineVertexInputStateCreateInfo({
      vertexBindingDescriptionCount: 1,
      pVertexBindingDescriptions: this.vertexBindingDescription,
      vertexAttributeDescriptionCount: 2,
      pVertexAttributeDescriptions: vertexAttributeDescriptions,
    });

    const inputAssemblyCreateInfo = new vk.PipelineInputAssemblyStateCreateInfo(
      {
        topology: vk.PrimitiveTopology.TRIANGLE_LIST,
        primitiveRestartEnable: 0,
      },
    );

    const viewport = new vk.Viewport({
      x: 0,
      y: 0,
      width: this.swapChainExtent.width,
      height: this.swapChainExtent.height,
      minDepth: 0,
      maxDepth: 1,
    });

    const scissor = new vk.Rect2D({
      offset: new vk.Offset2D({ x: 0, y: 0 }),
      extent: this.swapChainExtent,
    });

    const viewportCreateInfo = new vk.PipelineViewportStateCreateInfo({
      viewportCount: 1,
      pViewports: viewport,
      scissorCount: 1,
      pScissors: scissor,
    });

    const rasterizerCreateInfo = new vk.PipelineRasterizationStateCreateInfo({
      depthClampEnable: 0,
      rasterizerDiscardEnable: 0,
      polygonMode: vk.PolygonMode.FILL,
      cullMode: vk.CullModeFlagBits.BACK,
      frontFace: vk.FrontFace.CLOCKWISE,
      depthBiasEnable: 0,
      depthBiasConstantFactor: 0,
      depthBiasClamp: 0,
      depthBiasSlopeFactor: 0,
      lineWidth: 1,
    });

    const multisampleCreateInfo = new vk.PipelineMultisampleStateCreateInfo({
      sampleShadingEnable: 0,
      rasterizationSamples: vk.SampleCountFlagBits.VK_1,
      minSampleShading: 1,
      alphaToCoverageEnable: 0,
      alphaToOneEnable: 0,
    });

    const colorBlendAttachmentState = new vk.PipelineColorBlendAttachmentState({
      blendEnable: 0,
      srcColorBlendFactor: vk.BlendFactor.ONE,
      dstColorBlendFactor: vk.BlendFactor.ZERO,
      colorBlendOp: vk.BlendOp.ADD,
      srcAlphaBlendFactor: vk.BlendFactor.ONE,
      dstAlphaBlendFactor: vk.BlendFactor.ZERO,
      alphaBlendOp: vk.BlendOp.ADD,
      colorWriteMask: vk.ColorComponentFlagBits.R |
        vk.ColorComponentFlagBits.G |
        vk.ColorComponentFlagBits.B |
        vk.ColorComponentFlagBits.A,
    });

    const colorBlendCreateInfo = new vk.PipelineColorBlendStateCreateInfo({
      logicOpEnable: 0,
      logicOp: vk.LogicOp.COPY,
      attachmentCount: 1,
      pAttachments: colorBlendAttachmentState,
      blendConstants: new Float32Array([0, 0, 0, 0]),
    });

    const layoutBinding = new vk.DescriptorSetLayoutBinding({
      descriptorType: vk.DescriptorType.UNIFORM_BUFFER,
      descriptorCount: 1,
      stageFlags: vk.ShaderStageFlagBits.VERTEX,
    });

    const descriptorLayoutCreateInfo = new vk.DescriptorSetLayoutCreateInfo({
      bindingCount: 1,
      pBindings: layoutBinding,
    });

    const descriptorSetLayoutOut = new vk.PointerRef();
    vk.CreateDescriptorSetLayout(
      this.device,
      descriptorLayoutCreateInfo,
      null,
      descriptorSetLayoutOut,
    );
    this.descriptorSetLayout = descriptorSetLayoutOut.value;

    const layoutCreateInfo = new vk.PipelineLayoutCreateInfo({
      setLayoutCount: 1,
      pSetLayouts: new vk.PointerArray([this.descriptorSetLayout]),
    });

    const pipelineLayoutOut = new vk.PointerRef();
    vk.CreatePipelineLayout(
      this.device,
      layoutCreateInfo,
      null,
      pipelineLayoutOut,
    );
    this.pipelineLayout = pipelineLayoutOut.value;

    const pipelineCreateInfo = new vk.GraphicsPipelineCreateInfo({
      stageCount: 2,
      pStages: shaderStages,
      pVertexInputState: vertexInputCreateInfo,
      pInputAssemblyState: inputAssemblyCreateInfo,
      pViewportState: viewportCreateInfo,
      pRasterizationState: rasterizerCreateInfo,
      pMultisampleState: multisampleCreateInfo,
      pColorBlendState: colorBlendCreateInfo,
      layout: this.pipelineLayout,
      renderPass: this.renderPass,
      subpass: 0,
      basePipelineHandle: null,
      basePipelineIndex: -1,
    });

    const pipelineOut = new vk.PointerRef();
    vk.CreateGraphicsPipelines(
      this.device,
      null,
      1,
      pipelineCreateInfo,
      null,
      pipelineOut,
    );
    this.graphicsPipeline = pipelineOut.value;

    vk.DestroyShaderModule(this.device, vertexShaderModule, null);
    vk.DestroyShaderModule(this.device, fragmentShaderModule, null);
  }

  createDescriptorPool() {
    const typeCount = new vk.DescriptorPoolSize({
      type: vk.DescriptorType.UNIFORM_BUFFER,
      descriptorCount: 1,
    });

    const createInfo = new vk.DescriptorPoolCreateInfo({
      poolSizeCount: 1,
      pPoolSizes: typeCount,
      maxSets: 1,
    });

    const poolOut = new vk.PointerRef();
    vk.CreateDescriptorPool(
      this.device,
      createInfo,
      null,
      poolOut,
    );
    this.descriptorPool = poolOut.value;
  }

  createDescriptorSet() {
    const allocInfo = new vk.DescriptorSetAllocateInfo({
      descriptorPool: this.descriptorPool,
      descriptorSetCount: 1,
      pSetLayouts: new vk.PointerArray([this.descriptorSetLayout]),
    });

    const descriptorSetOut = new vk.PointerRef();
    vk.AllocateDescriptorSets(
      this.device,
      allocInfo,
      descriptorSetOut,
    );
    this.descriptorSet = descriptorSetOut.value;

    const descriptorBufferInfo = new vk.DescriptorBufferInfo({
      buffer: this.uniformBuffer,
      offset: 0,
      range: 64,
    });

    const writeDescriptorSet = new vk.WriteDescriptorSet({
      dstSet: this.descriptorSet,
      descriptorCount: 1,
      descriptorType: vk.DescriptorType.UNIFORM_BUFFER,
      pBufferInfo: descriptorBufferInfo,
      dstBinding: 0,
    });

    vk.UpdateDescriptorSets(
      this.device,
      1,
      writeDescriptorSet,
      0,
      null,
    );
  }

  createCommandBuffers() {
    this.graphicsCommandBuffers = Array(this.swapChainImages.length).fill(null);
    const allocInfo = new vk.CommandBufferAllocateInfo({
      commandPool: this.commandPool,
      level: vk.CommandBufferLevel.PRIMARY,
      commandBufferCount: this.graphicsCommandBuffers.length,
    });

    const _commandBuffers = new PointerArray(
      this.graphicsCommandBuffers.length,
    );
    vk.AllocateCommandBuffers(
      this.device,
      allocInfo,
      _commandBuffers,
    );
    this.graphicsCommandBuffers = _commandBuffers.toList();

    const beginInfo = new vk.CommandBufferBeginInfo({
      flags: vk.CommandBufferUsageFlagBits.SIMULTANEOUS_USE,
    });

    const subResourceRange = new vk.ImageSubresourceRange({
      aspectMask: vk.ImageAspectFlagBits.COLOR,
      baseMipLevel: 0,
      levelCount: 1,
      baseArrayLayer: 0,
      layerCount: 1,
    });

    const clearValues = new Float32Array([0.0, 0.0, 0.0, 1.0]);

    for (let i = 0; i < this.graphicsCommandBuffers.length; i++) {
      vk.BeginCommandBuffer(this.graphicsCommandBuffers[i], beginInfo);

      const presentToDrawBarrier = new vk.ImageMemoryBarrier({
        srcAccessMask: 0,
        dstAccessMask: vk.AccessFlagBits.COLOR_ATTACHMENT_WRITE,
        oldLayout: vk.ImageLayout.UNDEFINED,
        newLayout: vk.ImageLayout.PRESENT_SRC_KHR,
      });

      if (this.presentQueueFamily !== this.graphicsQueueFamily) {
        presentToDrawBarrier.srcQueueFamilyIndex = vk.QUEUE_FAMILY_IGNORED;
        presentToDrawBarrier.dstQueueFamilyIndex = vk.QUEUE_FAMILY_IGNORED;
      } else {
        presentToDrawBarrier.srcQueueFamilyIndex = this.presentQueueFamily;
        presentToDrawBarrier.dstQueueFamilyIndex = this.graphicsQueueFamily;
      }

      presentToDrawBarrier.image = this.swapChainImages[i];
      presentToDrawBarrier.subresourceRange = subResourceRange;

      vk.CmdPipelineBarrier(
        this.graphicsCommandBuffers[i],
        vk.PipelineStageFlagBits.COLOR_ATTACHMENT_OUTPUT,
        vk.PipelineStageFlagBits.COLOR_ATTACHMENT_OUTPUT,
        0,
        0,
        null,
        0,
        null,
        1,
        presentToDrawBarrier,
      );

      const renderPassBeginInfo = new vk.RenderPassBeginInfo({
        renderPass: this.renderPass,
        framebuffer: this.swapChainFramebuffers[i],
        renderArea: new vk.Rect2D({
          offset: new vk.Offset2D({ x: 0, y: 0 }),
          extent: this.swapChainExtent,
        }),
        clearValueCount: 1,
        pClearValues: clearValues,
      });

      vk.CmdBeginRenderPass(
        this.graphicsCommandBuffers[i],
        renderPassBeginInfo,
        vk.SubpassContents.INLINE,
      );

      vk.CmdBindDescriptorSets(
        this.graphicsCommandBuffers[i],
        vk.PipelineBindPoint.GRAPHICS,
        this.pipelineLayout,
        0,
        1,
        new vk.PointerArray([this.descriptorSet]),
        0,
        null,
      );

      vk.CmdBindPipeline(
        this.graphicsCommandBuffers[i],
        vk.PipelineBindPoint.GRAPHICS,
        this.graphicsPipeline,
      );

      const offset = new vk.PointerRef();
      vk.CmdBindVertexBuffers(
        this.graphicsCommandBuffers[i],
        0,
        1,
        new vk.PointerArray([this.vertexBuffer]),
        offset,
      );

      vk.CmdBindIndexBuffer(
        this.graphicsCommandBuffers[i],
        this.indexBuffer,
        0,
        vk.IndexType.UINT16,
      );

      vk.CmdDrawIndexed(this.graphicsCommandBuffers[i], 3, 1, 0, 0, 0);

      vk.CmdEndRenderPass(this.graphicsCommandBuffers[i]);

      if (this.presentQueueFamily !== this.graphicsQueueFamily) {
        const drawToPresentBarrier = new vk.ImageMemoryBarrier({
          srcAccessMask: vk.AccessFlagBits.COLOR_ATTACHMENT_WRITE,
          dstAccessMask: vk.AccessFlagBits.MEMORY_READ,
          oldLayout: vk.ImageLayout.PRESENT_SRC_KHR,
          newLayout: vk.ImageLayout.PRESENT_SRC_KHR,
          srcQueueFamilyIndex: this.graphicsQueueFamily,
          dstQueueFamilyIndex: this.presentQueueFamily,
          image: this.swapChainImages[i],
          subresourceRange: subResourceRange,
        });

        vk.CmdPipelineBarrier(
          this.graphicsCommandBuffers[i],
          vk.PipelineStageFlagBits.COLOR_ATTACHMENT_OUTPUT,
          vk.PipelineStageFlagBits.BOTTOM_OF_PIPE,
          0,
          0,
          null,
          0,
          null,
          1,
          drawToPresentBarrier,
        );
      }

      vk.EndCommandBuffer(this.graphicsCommandBuffers[i]);
    }

    vk.DestroyPipelineLayout(this.device, this.pipelineLayout, null);
  }

  async draw() {
    const imageIndex = new Uint32Array(1);
    try {
      vk.AcquireNextImageKHR(
        this.device,
        this.swapChain,
        1000000000,
        this.imageAvailableSemaphore,
        null,
        imageIndex,
      );
      // deno-lint-ignore no-explicit-any
    } catch (e: any) {
      if (e.code === vk.Result.ERROR_OUT_OF_DATE_KHR) {
        await this.onWindowSizeChanged();
        return;
      } else {
        throw e;
      }
    }

    const submitInfo = new vk.SubmitInfo({
      waitSemaphoreCount: 1,
      pWaitSemaphores: new vk.PointerArray([this.imageAvailableSemaphore]),
      signalSemaphoreCount: 1,
      pSignalSemaphores: new vk.PointerArray([this.renderingFinishedSemaphore]),
      pWaitDstStageMask: new Uint32Array([
        vk.PipelineStageFlagBits.COLOR_ATTACHMENT_OUTPUT,
      ]),
      commandBufferCount: 1,
      pCommandBuffers: new vk.PointerArray([
        this.graphicsCommandBuffers[imageIndex[0]],
      ]),
    });

    vk.QueueSubmit(this.graphicsQueue, 1, submitInfo, null);

    const presentInfo = new vk.PresentInfoKHR({
      waitSemaphoreCount: 1,
      pWaitSemaphores: new vk.PointerArray([this.renderingFinishedSemaphore]),
      swapchainCount: 1,
      pSwapchains: new vk.PointerArray([this.swapChain]),
      pImageIndices: imageIndex,
    });

    try {
      const res = vk.QueuePresentKHR(this.presentQueue, presentInfo);
      if (res === vk.Result.SUBOPTIMAL_KHR || this.resized) {
        this.onWindowSizeChanged();
      }
      // deno-lint-ignore no-explicit-any
    } catch (e: any) {
      if (e.code === vk.Result.ERROR_OUT_OF_DATE_KHR) {
        this.onWindowSizeChanged();
      } else {
        throw e;
      }
    }
  }
}

if (!dwm.vulkanSupported()) {
  console.log("Vulkan not supported");
  Deno.exit(1);
}

const app = new TriangleApplication();
await app.run();
