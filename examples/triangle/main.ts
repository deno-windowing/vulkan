import * as vk from "../../api/vk.ts";
import * as dwm from "../../../../../Projects/dwm/mod.ts";
import { ffi } from "../../../../../Projects/dwm/src/platform/glfw/ffi.ts";

export class TriangleApplication {
  window!: dwm.DwmWindow;

  instance!: vk.VkInstance;
  surface!: vk.VkSurfaceKHR;
  physicalDevice!: vk.VkPhysicalDevice;
  device!: vk.VkDevice;
  graphicsQueue!: vk.VkQueue;
  presentQueue!: vk.VkQueue;
  deviceMemoryProperties!: vk.VkPhysicalDeviceMemoryProperties;
  imageAvailableSemaphore!: vk.VkSemaphore;
  renderingFinishedSemaphore!: vk.VkSemaphore;

  vertexBuffer!: vk.VkBuffer;
  vertexBufferMemory!: vk.VkDeviceMemory;
  indexBuffer!: vk.VkBuffer;
  indexBufferMemory!: vk.VkDeviceMemory;
  vertexBindingDescription!: vk.VkVertexInputBindingDescription;
  vertexAttributeDescriptions!: vk.VkVertexInputAttributeDescription[];

  // deno-fmt-ignore
  uniformBufferData = new Float32Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0,
  ]);
  uniformBuffer!: vk.VkBuffer;
  uniformBufferMemory!: vk.VkDeviceMemory;
  descriptorSetLayout!: vk.VkDescriptorSetLayout;
  descriptorPool!: vk.VkDescriptorPool;
  descriptorSet!: vk.VkDescriptorSet;

  swapChainExtent!: vk.VkExtent2D;
  swapChainFormat!: vk.VkFormat;
  oldSwapChain!: vk.VkSwapchainKHR;
  swapChain!: vk.VkSwapchainKHR;
  swapChainImages!: BigUint64Array;
  swapChainImageViews!: BigUint64Array;
  swapChainFramebuffers!: BigUint64Array;

  renderPass!: vk.VkRenderPass;
  graphicsPipeline!: vk.VkPipeline;
  pipelineLayout!: vk.VkPipelineLayout;

  commandPool!: vk.VkCommandPool;
  graphicsCommandBuffers!: BigUint64Array;

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

    this.setupVulkan();
    await this.mainloop();
    this.cleanup(true);
  }

  setupVulkan() {
    this.oldSwapChain = 0;

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
    this.createGraphicsPipeline();
    this.createDescriptorPool();
    this.createDescriptorSet();
    this.createCommandBuffers();
  }

  async mainloop() {
    await dwm.mainloop(() => {
      this.updateUniformData();
      this.draw();
    });
  }

  resized = false;

  onWindowResized() {
    this.resized = true;
  }

  onWindowSizeChanged() {
    this.resized = false;

    this.cleanup(false);

    this.createSwapChain();
    this.createRenderPass();
    this.createImageViews();
    this.createFramebuffers();
    this.createGraphicsPipeline();
    this.createCommandBuffers();
  }

  cleanup(fullClean: boolean) {
    vk.vkDeviceWaitIdle(this.device);

    vk.vkFreeCommandBuffers(
      this.device,
      this.commandPool,
      this.graphicsCommandBuffers.length,
      this.graphicsCommandBuffers,
    );

    vk.vkDestroyPipeline(this.device, this.graphicsPipeline, null);
    vk.vkDestroyRenderPass(this.device, this.renderPass, null);

    for (let i = 0; i < this.swapChainFramebuffers.length; i++) {
      vk.vkDestroyFramebuffer(this.device, this.swapChainFramebuffers[i], null);
      vk.vkDestroyImageView(this.device, this.swapChainImageViews[i], null);
    }

    vk.vkDestroyDescriptorSetLayout(
      this.device,
      this.descriptorSetLayout,
      null,
    );

    if (fullClean) {
      vk.vkDestroySemaphore(this.device, this.imageAvailableSemaphore, null);
      vk.vkDestroySemaphore(this.device, this.renderingFinishedSemaphore, null);

      vk.vkDestroyCommandPool(this.device, this.commandPool, null);

      vk.vkDestroyDescriptorPool(this.device, this.descriptorPool, null);
      vk.vkDestroyBuffer(this.device, this.uniformBuffer, null);
      vk.vkFreeMemory(this.device, this.uniformBufferMemory, null);

      vk.vkDestroyBuffer(this.device, this.vertexBuffer, null);
      vk.vkFreeMemory(this.device, this.vertexBufferMemory, null);
      vk.vkDestroyBuffer(this.device, this.indexBuffer, null);
      vk.vkFreeMemory(this.device, this.indexBufferMemory, null);

      vk.vkDestroySwapchainKHR(this.device, this.swapChain, null);

      vk.vkDestroyDevice(this.device, null);

      // vk.vkDestroySurfaceKHR(this.instance, this.surface, null);

      vk.vkDestroyInstance(this.instance, null);
    }
  }

  createInstance() {
    const extCount = new Uint32Array(1);
    vk.vkEnumerateInstanceExtensionProperties(
      null,
      extCount,
      null,
    );

    if (extCount[0] < 1) {
      throw new Error("No extensions found");
    }

    const exts = new Uint8Array(260 * extCount[0]);
    vk.vkEnumerateInstanceExtensionProperties(
      null,
      extCount,
      exts,
    );

    const extNames: string[] = [];

    for (let i = 0; i < extCount[0]; i++) {
      extNames.push(
        new TextDecoder().decode(
          exts.subarray(i * 260, exts.indexOf(0, i * 260)),
        ),
      );
    }

    const appInfo = vk.VkApplicationInfo.create({
      applicationVersion: 1 << 22,
      engineVersion: 1 << 22,
      apiVersion: 1 << 22,
      pApplicationName: new TextEncoder().encode("Test\0"),
      pEngineName: new TextEncoder().encode("No Engine\0"),
    });

    const glfwExtCount = new Uint32Array(1);
    const glfwExts = ffi.glfwGetRequiredInstanceExtensions(glfwExtCount);
    const view = new Deno.UnsafePointerView(glfwExts);
    const names = [];
    for (let i = 0; i < glfwExtCount[0]; i++) {
      names.push(Deno.UnsafePointerView.getCString(view.getBigUint64(i * 8)));
    }

    const nameBuffers = names.map((name) =>
      new TextEncoder().encode(name + "\0")
    );
    const extensions = new BigUint64Array(
      nameBuffers.map((e) => BigInt(Deno.UnsafePointer.of(e))),
    );

    const createInfo = vk.VkInstanceCreateInfo.create({
      pApplicationInfo: appInfo,
      enabledExtensionCount: extensions.length,
      ppEnabledExtensionNames: extensions,
      enabledLayerCount: 1,
      ppEnabledLayerNames: new BigUint64Array([
        BigInt(
          Deno.UnsafePointer.of(
            new TextEncoder().encode("VK_LAYER_KHRONOS_validation\0"),
          ),
        ),
      ]),
    });

    const instOut = new BigUint64Array(1);
    vk.vkCreateInstance(createInfo, null, instOut.buffer);
    this.instance = instOut[0];
  }

  createWindowSurface() {
    const surfaceOut = new BigUint64Array(1);
    ffi.glfwCreateWindowSurface(
      this.instance,
      this.window.nativeHandle,
      null,
      surfaceOut,
    );
    this.surface = surfaceOut[0];
  }

  findPhysicalDevice() {
    const deviceCount = new Uint32Array(1);
    vk.vkEnumeratePhysicalDevices(
      this.instance,
      deviceCount,
      null,
    );

    if (deviceCount[0] < 1) {
      throw new Error("No devices found");
    }

    const physicalDeviceOut = new BigUint64Array(1);
    deviceCount[0] = 1;
    vk.vkEnumeratePhysicalDevices(
      this.instance,
      deviceCount,
      physicalDeviceOut,
    );
    this.physicalDevice = physicalDeviceOut[0];
  }

  checkSwapChainSupport() {}

  findQueueFamilies() {
    const queueFamilyCount = new Uint32Array(1);
    vk.vkGetPhysicalDeviceQueueFamilyProperties(
      this.physicalDevice,
      queueFamilyCount.buffer,
      null,
    );

    if (queueFamilyCount[0] < 1) {
      throw new Error("No queue families found");
    }

    const queueFamilyPropertiesPtr = new Uint8Array(
      vk.VkQueueFamilyProperties.size * queueFamilyCount[0],
    );
    vk.vkGetPhysicalDeviceQueueFamilyProperties(
      this.physicalDevice,
      queueFamilyCount,
      queueFamilyPropertiesPtr,
    );

    const queueFamilies = new Array(queueFamilyCount[0]).fill(0).map((_, i) => {
      return new vk.VkQueueFamilyProperties(
        queueFamilyPropertiesPtr.subarray(i * vk.VkQueueFamilyProperties.size),
      );
    });

    let foundGraphicsQueueFamily = false;
    let foundPresentQueueFamily = false;

    for (let i = 0; i < queueFamilyCount[0]; i++) {
      const presentSupport = new Uint32Array(1);
      vk.vkGetPhysicalDeviceSurfaceSupportKHR(
        this.physicalDevice,
        i,
        this.surface,
        presentSupport,
      );

      if (
        queueFamilies[i].queueCount > 0 &&
        queueFamilies[i].queueFlags & vk.VkQueueFlagBits.VK_QUEUE_GRAPHICS_BIT
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
    let queuePriority = new Float32Array([1.0]);

    const pQueueCreateInfos = new Uint8Array(
      vk.VkDeviceQueueCreateInfo.size * 2,
    );

    const queueCreateInfo = [
      new vk.VkDeviceQueueCreateInfo(
        pQueueCreateInfos.subarray(0, vk.VkDeviceQueueCreateInfo.size),
      ),
      new vk.VkDeviceQueueCreateInfo(
        pQueueCreateInfos.subarray(
          vk.VkDeviceQueueCreateInfo.size,
          vk.VkDeviceQueueCreateInfo.size * 2,
        ),
      ),
    ];

    queueCreateInfo[0].sType =
      vk.VkStructureType.VK_STRUCTURE_TYPE_DEVICE_QUEUE_CREATE_INFO;
    queueCreateInfo[0].queueFamilyIndex = this.graphicsQueueFamily;
    queueCreateInfo[0].queueCount = 1;
    queueCreateInfo[0].pQueuePriorities = Deno.UnsafePointer.of(queuePriority);

    queueCreateInfo[1].sType =
      vk.VkStructureType.VK_STRUCTURE_TYPE_DEVICE_QUEUE_CREATE_INFO;
    queueCreateInfo[1].queueFamilyIndex = this.presentQueueFamily;
    queueCreateInfo[1].queueCount = 1;
    queueCreateInfo[1].pQueuePriorities = Deno.UnsafePointer.of(queuePriority);

    const enabledFeatures = vk.VkPhysicalDeviceFeatures.alloc();
    enabledFeatures.shaderClipDistance = 1;
    enabledFeatures.shaderCullDistance = 1;

    const deviceCreateInfo = vk.VkDeviceCreateInfo.create({
      pQueueCreateInfos,
      queueCreateInfoCount: this.graphicsQueueFamily === this.presentQueueFamily
        ? 1
        : 2,
      pEnabledFeatures: enabledFeatures,
      enabledExtensionCount: 1,
      ppEnabledExtensionNames: new BigUint64Array([
        BigInt(
          Deno.UnsafePointer.of(
            new TextEncoder().encode("VK_KHR_swapchain\0"),
          ),
        ),
      ]),
      enabledLayerCount: 1,
      ppEnabledLayerNames: new BigUint64Array([
        BigInt(
          Deno.UnsafePointer.of(
            new TextEncoder().encode("VK_LAYER_KHRONOS_validation\0"),
          ),
        ),
      ]),
    });

    const deviceOut = new BigUint64Array(1);
    vk.vkCreateDevice(
      this.physicalDevice,
      deviceCreateInfo,
      null,
      deviceOut,
    );
    this.device = deviceOut[0];

    const graphicsQueueOut = new BigUint64Array(1);
    vk.vkGetDeviceQueue(
      this.device,
      this.graphicsQueueFamily,
      0,
      graphicsQueueOut,
    );
    this.graphicsQueue = graphicsQueueOut[0];
    const presentQueueOut = new BigUint64Array(1);
    vk.vkGetDeviceQueue(
      this.device,
      this.presentQueueFamily,
      0,
      presentQueueOut,
    );
    this.presentQueue = presentQueueOut[0];

    const deviceMemoryProperties = vk.VkPhysicalDeviceMemoryProperties.alloc();
    vk.vkGetPhysicalDeviceMemoryProperties(
      this.physicalDevice,
      deviceMemoryProperties,
    );
    this.deviceMemoryProperties = deviceMemoryProperties;
  }

  createDebugCallback() {}

  createSemaphores() {
    const createInfo = vk.VkSemaphoreCreateInfo.create({});

    const imageAvailableSemaphoreOut = new BigUint64Array(1);
    const renderingFinishedSemaphoreOut = new BigUint64Array(1);

    vk.vkCreateSemaphore(
      this.device,
      createInfo,
      null,
      imageAvailableSemaphoreOut,
    );
    vk.vkCreateSemaphore(
      this.device,
      createInfo,
      null,
      renderingFinishedSemaphoreOut,
    );

    this.imageAvailableSemaphore = imageAvailableSemaphoreOut[0];
    this.renderingFinishedSemaphore = renderingFinishedSemaphoreOut[0];
  }

  createCommandPool() {
    const poolCreateInfo = vk.VkCommandPoolCreateInfo.create({
      queueFamilyIndex: this.graphicsQueueFamily,
    });

    const commandPoolOut = new BigUint64Array(1);
    vk.vkCreateCommandPool(
      this.device,
      poolCreateInfo,
      null,
      commandPoolOut,
    );
    this.commandPool = commandPoolOut[0];
  }

  createVertexBuffer() {
    // deno-fmt-ignore
    const vertices = new Float32Array([
      -0.5, -0.5, 0.0,  1.0, 0.0, 0.0,
      -0.5,  0.5, 0.0,  0.0, 1.0, 0.0,
       0.5,  0.5, 0.0,  0.0, 0.0, 1.0,
    ]);

    const indices = new Uint16Array([0, 1, 2]);

    const memAlloc = vk.VkMemoryAllocateInfo.create({});
    const memReqs = vk.VkMemoryRequirements.alloc();

    const cmdBufInfo = vk.VkCommandBufferAllocateInfo.create({
      commandPool: this.commandPool,
      level: vk.VkCommandBufferLevel.VK_COMMAND_BUFFER_LEVEL_PRIMARY,
      commandBufferCount: 1,
    });

    const copyCommandBufferOut = new BigUint64Array(1);
    vk.vkAllocateCommandBuffers(
      this.device,
      cmdBufInfo,
      copyCommandBufferOut,
    );

    const copyCommandBuffer = copyCommandBufferOut[0];

    const vertexBufferInfo = vk.VkBufferCreateInfo.create({
      size: vertices.byteLength,
      usage: vk.VkBufferUsageFlagBits.VK_BUFFER_USAGE_TRANSFER_SRC_BIT,
    });

    const vertexBufferOut = new BigUint64Array(1);
    vk.vkCreateBuffer(
      this.device,
      vertexBufferInfo,
      null,
      vertexBufferOut,
    );
    const vertexBuffer = vertexBufferOut[0];

    vk.vkGetBufferMemoryRequirements(
      this.device,
      vertexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.VkMemoryPropertyFlagBits.VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT,
    );
    const vertexBufferMemoryOut = new BigUint64Array(1);
    vk.vkAllocateMemory(
      this.device,
      memAlloc,
      null,
      vertexBufferMemoryOut,
    );
    const vertexBufferMemory = vertexBufferMemoryOut[0];

    const dataOut = new BigUint64Array(1);
    vk.vkMapMemory(
      this.device,
      vertexBufferMemory,
      0,
      vertices.byteLength,
      0,
      dataOut,
    );
    const data = new Float32Array(
      Deno.UnsafePointerView.getArrayBuffer(dataOut[0], vertices.byteLength),
    );
    data.set(vertices);
    vk.vkUnmapMemory(this.device, vertexBufferMemory);
    vk.vkBindBufferMemory(
      this.device,
      vertexBuffer,
      vertexBufferMemory,
      0,
    );

    vertexBufferInfo.usage =
      vk.VkBufferUsageFlagBits.VK_BUFFER_USAGE_TRANSFER_DST_BIT |
      vk.VkBufferUsageFlagBits.VK_BUFFER_USAGE_VERTEX_BUFFER_BIT;
    vk.vkCreateBuffer(
      this.device,
      vertexBufferInfo,
      null,
      vertexBufferOut,
    );
    this.vertexBuffer = vertexBufferOut[0];
    vk.vkGetBufferMemoryRequirements(
      this.device,
      this.vertexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.VkMemoryPropertyFlagBits.VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT,
    );
    vk.vkAllocateMemory(
      this.device,
      memAlloc,
      null,
      vertexBufferMemoryOut,
    );
    this.vertexBufferMemory = vertexBufferMemoryOut[0];
    vk.vkBindBufferMemory(
      this.device,
      this.vertexBuffer,
      this.vertexBufferMemory,
      0,
    );

    const indexBufferInfo = vk.VkBufferCreateInfo.create({
      size: indices.byteLength,
      usage: vk.VkBufferUsageFlagBits.VK_BUFFER_USAGE_TRANSFER_SRC_BIT,
    });

    const indexBufferOut = new BigUint64Array(1);
    vk.vkCreateBuffer(
      this.device,
      indexBufferInfo,
      null,
      indexBufferOut,
    );
    const indexBuffer = indexBufferOut[0];
    vk.vkGetBufferMemoryRequirements(
      this.device,
      indexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.VkMemoryPropertyFlagBits.VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT,
    );
    const indexBufferMemoryOut = new BigUint64Array(1);
    vk.vkAllocateMemory(
      this.device,
      memAlloc,
      null,
      indexBufferMemoryOut,
    );
    const indexBufferMemory = indexBufferMemoryOut[0];
    vk.vkMapMemory(
      this.device,
      indexBufferMemory,
      0,
      indices.byteLength,
      0,
      dataOut,
    );
    const indexData = new Uint16Array(
      Deno.UnsafePointerView.getArrayBuffer(dataOut[0], indices.byteLength),
    );
    indexData.set(indices);
    vk.vkUnmapMemory(this.device, indexBufferMemory);
    vk.vkBindBufferMemory(
      this.device,
      indexBuffer,
      indexBufferMemory,
      0,
    );

    indexBufferInfo.usage =
      vk.VkBufferUsageFlagBits.VK_BUFFER_USAGE_TRANSFER_DST_BIT |
      vk.VkBufferUsageFlagBits.VK_BUFFER_USAGE_INDEX_BUFFER_BIT;
    vk.vkCreateBuffer(
      this.device,
      indexBufferInfo,
      null,
      indexBufferOut,
    );
    this.indexBuffer = indexBufferOut[0];
    vk.vkGetBufferMemoryRequirements(
      this.device,
      this.indexBuffer,
      memReqs,
    );
    memAlloc.allocationSize = memReqs.size;
    memAlloc.memoryTypeIndex = this.getMemoryType(
      memReqs.memoryTypeBits,
      vk.VkMemoryPropertyFlagBits.VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT,
    );
    vk.vkAllocateMemory(
      this.device,
      memAlloc,
      null,
      indexBufferMemoryOut,
    );
    this.indexBufferMemory = indexBufferMemoryOut[0];
    vk.vkBindBufferMemory(
      this.device,
      this.indexBuffer,
      this.indexBufferMemory,
      0,
    );

    const bufferBeginInfo = vk.VkCommandBufferBeginInfo.create({
      flags: vk.VkCommandBufferUsageFlagBits
        .VK_COMMAND_BUFFER_USAGE_ONE_TIME_SUBMIT_BIT,
    });

    vk.vkBeginCommandBuffer(copyCommandBuffer, bufferBeginInfo);

    const copyRegion = vk.VkBufferCopy.create({
      size: vertices.byteLength,
    });
    vk.vkCmdCopyBuffer(
      copyCommandBuffer,
      vertexBuffer,
      this.vertexBuffer,
      1,
      copyRegion,
    );
    copyRegion.size = indices.byteLength;
    vk.vkCmdCopyBuffer(
      copyCommandBuffer,
      indexBuffer,
      this.indexBuffer,
      1,
      copyRegion,
    );

    vk.vkEndCommandBuffer(copyCommandBuffer);

    const submitInfo = vk.VkSubmitInfo.create({
      commandBufferCount: 1,
      pCommandBuffers: new BigUint64Array([copyCommandBuffer]),
    });

    vk.vkQueueSubmit(this.graphicsQueue, 1, submitInfo, 0);
    vk.vkQueueWaitIdle(this.graphicsQueue);

    vk.vkFreeCommandBuffers(
      this.device,
      this.commandPool,
      1,
      new BigUint64Array([copyCommandBuffer]),
    );

    vk.vkDestroyBuffer(this.device, vertexBuffer, null);
    vk.vkFreeMemory(this.device, vertexBufferMemory, null);
    vk.vkDestroyBuffer(this.device, indexBuffer, null);
    vk.vkFreeMemory(this.device, indexBufferMemory, null);

    this.vertexBindingDescription = vk.VkVertexInputBindingDescription.create({
      binding: 0,
      stride: 4 * 3,
      inputRate: vk.VkVertexInputRate.VK_VERTEX_INPUT_RATE_VERTEX,
    });

    this.vertexAttributeDescriptions = [
      // vec2 position
      vk.VkVertexInputAttributeDescription.create({
        binding: 0,
        location: 0,
        format: vk.VkFormat.VK_FORMAT_R32G32B32_SFLOAT,
      }),
      // vec3 color
      vk.VkVertexInputAttributeDescription.create({
        binding: 0,
        location: 1,
        format: vk.VkFormat.VK_FORMAT_R32G32B32_SFLOAT,
        offset: 4 * 3,
      }),
    ];
  }

  createUniformBuffer() {
    const bufferInfo = vk.VkBufferCreateInfo.create({
      size: 4 * 4 * 4,
      usage: vk.VkBufferUsageFlagBits.VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT,
    });

    const bufferOut = new BigUint64Array(1);
    vk.vkCreateBuffer(
      this.device,
      bufferInfo,
      null,
      bufferOut,
    );
    this.uniformBuffer = bufferOut[0];

    const memReqs = vk.VkMemoryRequirements.alloc();
    vk.vkGetBufferMemoryRequirements(
      this.device,
      this.uniformBuffer,
      memReqs,
    );

    const memAlloc = vk.VkMemoryAllocateInfo.create({
      allocationSize: memReqs.size,
      memoryTypeIndex: this.getMemoryType(
        memReqs.memoryTypeBits,
        vk.VkMemoryPropertyFlagBits.VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT |
          vk.VkMemoryPropertyFlagBits.VK_MEMORY_PROPERTY_HOST_COHERENT_BIT,
      ),
    });

    const bufferMemoryOut = new BigUint64Array(1);
    vk.vkAllocateMemory(
      this.device,
      memAlloc,
      null,
      bufferMemoryOut,
    );
    this.uniformBufferMemory = bufferMemoryOut[0];

    vk.vkBindBufferMemory(
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

    const dataOut = new BigUint64Array(1);
    vk.vkMapMemory(
      this.device,
      this.uniformBufferMemory,
      0,
      4 * 4 * 4,
      0,
      dataOut,
    );
    const data = new Float32Array(
      Deno.UnsafePointerView.getArrayBuffer(dataOut[0], 4 * 4 * 4),
    );
    data.set(this.uniformBufferData);
    vk.vkUnmapMemory(this.device, this.uniformBufferMemory);
  }

  getMemoryType(
    typeBits: number,
    properties: vk.VkFlags,
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
    const surfaceCapabilities = vk.VkSurfaceCapabilitiesKHR.alloc();
    vk.vkGetPhysicalDeviceSurfaceCapabilitiesKHR(
      this.physicalDevice,
      this.surface,
      surfaceCapabilities,
    );

    const formatCountOut = new Uint32Array(1);
    vk.vkGetPhysicalDeviceSurfaceFormatsKHR(
      this.physicalDevice,
      this.surface,
      formatCountOut,
      null,
    );

    const surfaceFormats = new Uint8Array(
      formatCountOut[0] * vk.VkSurfaceFormatKHR.size,
    );
    vk.vkGetPhysicalDeviceSurfaceFormatsKHR(
      this.physicalDevice,
      this.surface,
      formatCountOut,
      surfaceFormats,
    );

    const presentModeCountOut = new Uint32Array(1);
    vk.vkGetPhysicalDeviceSurfacePresentModesKHR(
      this.physicalDevice,
      this.surface,
      presentModeCountOut,
      null,
    );

    const presentModes = new Uint8Array(presentModeCountOut[0] * 4);
    vk.vkGetPhysicalDeviceSurfacePresentModesKHR(
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

    const surfaceFormat = this.chooseSurfaceFormat(
      new Array(formatCountOut[0]).fill(0).map((_, i) =>
        new vk.VkSurfaceFormatKHR(
          surfaceFormats.subarray(
            i * vk.VkSurfaceFormatKHR.size,
            (i + 1) * vk.VkSurfaceFormatKHR.size,
          ),
        )
      ),
    );

    this.swapChainExtent = this.chooseSwapExtent(surfaceCapabilities);

    let surfaceTransform = 0;
    if (
      surfaceCapabilities.supportedTransforms &
      vk.VkSurfaceTransformFlagBitsKHR.VK_SURFACE_TRANSFORM_IDENTITY_BIT_KHR
    ) {
      surfaceTransform =
        vk.VkSurfaceTransformFlagBitsKHR.VK_SURFACE_TRANSFORM_IDENTITY_BIT_KHR;
    } else {
      surfaceTransform = surfaceCapabilities.currentTransform;
    }

    const presentMode = this.choosePresentMode(
      new Array(presentModeCountOut[0]).fill(0).map((_, i) =>
        new Uint32Array(presentModes.subarray(i * 4, (i + 1) * 4))[0]
      ),
    );

    const createInfo = vk.VkSwapchainCreateInfoKHR.create({
      surface: this.surface,
      minImageCount: imageCount,
      imageFormat: surfaceFormat.format,
      imageColorSpace: surfaceFormat.colorSpace,
      imageExtent: this.swapChainExtent,
      imageArrayLayers: 1,
      imageUsage: vk.VkImageUsageFlagBits.VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT,
      imageSharingMode: vk.VkSharingMode.VK_SHARING_MODE_EXCLUSIVE,
      queueFamilyIndexCount: 0,
      pQueueFamilyIndices: 0,
      preTransform: surfaceTransform,
      compositeAlpha:
        vk.VkCompositeAlphaFlagBitsKHR.VK_COMPOSITE_ALPHA_OPAQUE_BIT_KHR,
      presentMode,
      clipped: 1,
      oldSwapchain: this.oldSwapChain,
    });

    const swapChainOut = new BigUint64Array(1);
    vk.vkCreateSwapchainKHR(
      this.device,
      createInfo,
      null,
      swapChainOut,
    );
    this.swapChain = swapChainOut[0];

    if (this.oldSwapChain) {
      vk.vkDestroySwapchainKHR(this.device, this.oldSwapChain, null);
    }

    this.oldSwapChain = this.swapChain;

    this.swapChainFormat = surfaceFormat.format;

    const actualImageCount = new Uint32Array(1);
    vk.vkGetSwapchainImagesKHR(
      this.device,
      this.swapChain,
      actualImageCount,
      null,
    );

    this.swapChainImages = new BigUint64Array(actualImageCount[0]);
    vk.vkGetSwapchainImagesKHR(
      this.device,
      this.swapChain,
      actualImageCount,
      new Uint8Array(this.swapChainImages.buffer),
    );
  }

  chooseSurfaceFormat(availableFormats: vk.VkSurfaceFormatKHR[]) {
    if (
      availableFormats.length === 1 &&
      availableFormats[0].format === vk.VkFormat.VK_FORMAT_UNDEFINED
    ) {
      return vk.VkSurfaceFormatKHR.create({
        format: vk.VkFormat.VK_FORMAT_B8G8R8A8_UNORM,
        colorSpace: vk.VkColorSpaceKHR.VK_COLOR_SPACE_SRGB_NONLINEAR_KHR,
      });
    }

    for (const availableFormat of availableFormats) {
      if (
        availableFormat.format === vk.VkFormat.VK_FORMAT_B8G8R8A8_UNORM &&
        availableFormat.colorSpace ===
          vk.VkColorSpaceKHR.VK_COLOR_SPACE_SRGB_NONLINEAR_KHR
      ) {
        return availableFormat;
      }
    }

    return availableFormats[0];
  }

  chooseSwapExtent(surfaceCapabilities: vk.VkSurfaceCapabilitiesKHR) {
    if (surfaceCapabilities.currentExtent.width === -1) {
      return vk.VkExtent2D.create({
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

  choosePresentMode(presentModes: vk.VkPresentModeKHR[]) {
    for (const presentMode of presentModes) {
      if (presentMode === vk.VkPresentModeKHR.VK_PRESENT_MODE_MAILBOX_KHR) {
        return presentMode;
      }
    }
    return vk.VkPresentModeKHR.VK_PRESENT_MODE_FIFO_KHR;
  }

  createRenderPass() {
    const attachmentDescription = vk.VkAttachmentDescription.create({
      format: this.swapChainFormat,
      samples: vk.VkSampleCountFlagBits.VK_SAMPLE_COUNT_1_BIT,
      loadOp: vk.VkAttachmentLoadOp.VK_ATTACHMENT_LOAD_OP_CLEAR,
      storeOp: vk.VkAttachmentStoreOp.VK_ATTACHMENT_STORE_OP_STORE,
      stencilLoadOp: vk.VkAttachmentLoadOp.VK_ATTACHMENT_LOAD_OP_DONT_CARE,
      stencilStoreOp: vk.VkAttachmentStoreOp.VK_ATTACHMENT_STORE_OP_DONT_CARE,
      initialLayout: vk.VkImageLayout.VK_IMAGE_LAYOUT_UNDEFINED,
      finalLayout: vk.VkImageLayout.VK_IMAGE_LAYOUT_PRESENT_SRC_KHR,
    });

    const colorAttachment = vk.VkAttachmentReference.create({
      attachment: 0,
      layout: vk.VkImageLayout.VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL,
    });

    const subPassDescription = vk.VkSubpassDescription.create({
      pipelineBindPoint: vk.VkPipelineBindPoint.VK_PIPELINE_BIND_POINT_GRAPHICS,
      colorAttachmentCount: 1,
      pColorAttachments: colorAttachment,
    });

    const createInfo = vk.VkRenderPassCreateInfo.create({
      attachmentCount: 1,
      pAttachments: attachmentDescription,
      subpassCount: 1,
      pSubpasses: subPassDescription,
    });

    const renderPassOut = new BigUint64Array(1);
    vk.vkCreateRenderPass(
      this.device,
      createInfo,
      null,
      renderPassOut,
    );

    this.renderPass = renderPassOut[0];
  }

  createImageViews() {
    this.swapChainImageViews = new BigUint64Array(this.swapChainImages.length);

    for (let i = 0; i < this.swapChainImages.length; i++) {
      const components = vk.VkComponentMapping.create({
        r: vk.VkComponentSwizzle.VK_COMPONENT_SWIZZLE_IDENTITY,
        g: vk.VkComponentSwizzle.VK_COMPONENT_SWIZZLE_IDENTITY,
        b: vk.VkComponentSwizzle.VK_COMPONENT_SWIZZLE_IDENTITY,
        a: vk.VkComponentSwizzle.VK_COMPONENT_SWIZZLE_IDENTITY,
      });

      const subresourceRange = vk.VkImageSubresourceRange.create({
        aspectMask: vk.VkImageAspectFlagBits.VK_IMAGE_ASPECT_COLOR_BIT,
        baseMipLevel: 0,
        levelCount: 1,
        baseArrayLayer: 0,
        layerCount: 1,
      });

      const createInfo = vk.VkImageViewCreateInfo.create({
        image: this.swapChainImages[i],
        viewType: vk.VkImageViewType.VK_IMAGE_VIEW_TYPE_2D,
        format: this.swapChainFormat,
        components,
        subresourceRange,
      });

      const imageViewOut = new BigUint64Array(1);
      vk.vkCreateImageView(
        this.device,
        createInfo,
        null,
        imageViewOut,
      );

      this.swapChainImageViews[i] = imageViewOut[0];
    }
  }

  createFramebuffers() {
    this.swapChainFramebuffers = new BigUint64Array(
      this.swapChainImages.length,
    );

    for (let i = 0; i < this.swapChainImages.length; i++) {
      const createInfo = vk.VkFramebufferCreateInfo.create({
        renderPass: this.renderPass,
        attachmentCount: 1,
        pAttachments: 
          new BigUint64Array([this.swapChainImageViews[i]]),
        width: this.swapChainExtent.width,
        height: this.swapChainExtent.height,
        layers: 1,
      });

      const framebufferOut = new BigUint64Array(1);
      vk.vkCreateFramebuffer(
        this.device,
        createInfo,
        null,
        framebufferOut,
      );

      this.swapChainFramebuffers[i] = framebufferOut[0];
    }
  }

  createShaderModule(file: string | URL) {
    const data = Deno.readFileSync(file);

    const createInfo = vk.VkShaderModuleCreateInfo.create({
      codeSize: data.byteLength,
      pCode: data,
    });

    const shaderModuleOut = new BigUint64Array(1);
    vk.vkCreateShaderModule(
      this.device,
      createInfo,
      null,
      shaderModuleOut,
    );

    return shaderModuleOut[0];
  }

  createGraphicsPipeline() {
    const vertexShaderModule = this.createShaderModule(new URL("./vert.spv", import.meta.url));
    const fragmentShaderModule = this.createShaderModule(new URL("./frag.spv", import.meta.url));

    const vertexShaderCreateInfo = vk.VkPipelineShaderStageCreateInfo.create({
      stage: vk.VkShaderStageFlagBits.VK_SHADER_STAGE_VERTEX_BIT,
      module: vertexShaderModule,
      pName: new TextEncoder().encode("main\0"),
    });

    const fragmentShaderCreateInfo = vk.VkPipelineShaderStageCreateInfo.create({
      stage: vk.VkShaderStageFlagBits.VK_SHADER_STAGE_FRAGMENT_BIT,
      module: fragmentShaderModule,
      pName: new TextEncoder().encode("main\0"),
    });

    const shaderStages = new Uint8Array(
      2 * vk.VkPipelineShaderStageCreateInfo.size,
    );
    shaderStages.set(vertexShaderCreateInfo[vk.BUFFER]);
    shaderStages.set(
      fragmentShaderCreateInfo[vk.BUFFER],
      vk.VkPipelineShaderStageCreateInfo.size,
    );

    const vertexAttributeDescriptions = new Uint8Array(
      this.vertexAttributeDescriptions.length *
        vk.VkVertexInputAttributeDescription.size,
    );
    for (let i = 0; i < this.vertexAttributeDescriptions.length; i++) {
      vertexAttributeDescriptions.set(
        this.vertexAttributeDescriptions[i][vk.BUFFER],
        i * vk.VkVertexInputAttributeDescription.size,
      );
    }

    const vertexInputCreateInfo = vk.VkPipelineVertexInputStateCreateInfo
      .create({
        vertexBindingDescriptionCount: 1,
        pVertexBindingDescriptions: Deno.UnsafePointer.of(
          this.vertexBindingDescription[vk.BUFFER],
        ),
        vertexAttributeDescriptionCount: 2,
        pVertexAttributeDescriptions: Deno.UnsafePointer.of(
          vertexAttributeDescriptions,
        ),
      });

    const inputAssemblyCreateInfo = vk.VkPipelineInputAssemblyStateCreateInfo
      .create({
        topology: vk.VkPrimitiveTopology.VK_PRIMITIVE_TOPOLOGY_TRIANGLE_LIST,
        primitiveRestartEnable: 0,
      });

    const viewport = vk.VkViewport.create({
      x: 0,
      y: 0,
      width: this.swapChainExtent.width,
      height: this.swapChainExtent.height,
      minDepth: 0,
      maxDepth: 1,
    });

    const scissor = vk.VkRect2D.create({
      offset: vk.VkOffset2D.create({ x: 0, y: 0 }),
      extent: this.swapChainExtent,
    });

    const viewportCreateInfo = vk.VkPipelineViewportStateCreateInfo.create({
      viewportCount: 1,
      pViewports: viewport,
      scissorCount: 1,
      pScissors: scissor,
    });

    const rasterizerCreateInfo = vk.VkPipelineRasterizationStateCreateInfo
      .create({
        depthClampEnable: 0,
        rasterizerDiscardEnable: 0,
        polygonMode: vk.VkPolygonMode.VK_POLYGON_MODE_FILL,
        cullMode: vk.VkCullModeFlagBits.VK_CULL_MODE_BACK_BIT,
        frontFace: vk.VkFrontFace.VK_FRONT_FACE_CLOCKWISE,
        depthBiasEnable: 0,
        depthBiasConstantFactor: 0,
        depthBiasClamp: 0,
        depthBiasSlopeFactor: 0,
        lineWidth: 1,
      });

    const multisampleCreateInfo = vk.VkPipelineMultisampleStateCreateInfo
      .create({
        sampleShadingEnable: 0,
        rasterizationSamples: vk.VkSampleCountFlagBits.VK_SAMPLE_COUNT_1_BIT,
        minSampleShading: 1,
        alphaToCoverageEnable: 0,
        alphaToOneEnable: 0,
      });

    const colorBlendAttachmentState = vk.VkPipelineColorBlendAttachmentState
      .create({
        blendEnable: 0,
        srcColorBlendFactor: vk.VkBlendFactor.VK_BLEND_FACTOR_ONE,
        dstColorBlendFactor: vk.VkBlendFactor.VK_BLEND_FACTOR_ZERO,
        colorBlendOp: vk.VkBlendOp.VK_BLEND_OP_ADD,
        srcAlphaBlendFactor: vk.VkBlendFactor.VK_BLEND_FACTOR_ONE,
        dstAlphaBlendFactor: vk.VkBlendFactor.VK_BLEND_FACTOR_ZERO,
        alphaBlendOp: vk.VkBlendOp.VK_BLEND_OP_ADD,
        colorWriteMask: vk.VkColorComponentFlagBits.VK_COLOR_COMPONENT_R_BIT |
          vk.VkColorComponentFlagBits.VK_COLOR_COMPONENT_G_BIT |
          vk.VkColorComponentFlagBits.VK_COLOR_COMPONENT_B_BIT |
          vk.VkColorComponentFlagBits.VK_COLOR_COMPONENT_A_BIT,
      });

    const colorBlendCreateInfo = vk.VkPipelineColorBlendStateCreateInfo.create({
      logicOpEnable: 0,
      logicOp: vk.VkLogicOp.VK_LOGIC_OP_COPY,
      attachmentCount: 1,
      pAttachments: colorBlendAttachmentState,
      blendConstants: [0, 0, 0, 0],
    });

    const layoutBinding = vk.VkDescriptorSetLayoutBinding.create({
      descriptorType: vk.VkDescriptorType.VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,
      descriptorCount: 1,
      stageFlags: vk.VkShaderStageFlagBits.VK_SHADER_STAGE_VERTEX_BIT,
    });

    const descriptorLayoutCreateInfo = vk.VkDescriptorSetLayoutCreateInfo
      .create({
        bindingCount: 1,
        pBindings: layoutBinding,
      });

    const descriptorSetLayoutOut = new BigUint64Array(1);
    vk.vkCreateDescriptorSetLayout(
      this.device,
      descriptorLayoutCreateInfo,
      null,
      descriptorSetLayoutOut,
    );
    this.descriptorSetLayout = descriptorSetLayoutOut[0];

    const layoutCreateInfo = vk.VkPipelineLayoutCreateInfo.create({
      setLayoutCount: 1,
      pSetLayouts: new BigUint64Array([this.descriptorSetLayout]),
    });

    const pipelineLayoutOut = new BigUint64Array(1);
    vk.vkCreatePipelineLayout(
      this.device,
      layoutCreateInfo,
      null,
      pipelineLayoutOut,
    );
    this.pipelineLayout = pipelineLayoutOut[0];

    const pipelineCreateInfo = vk.VkGraphicsPipelineCreateInfo.create({
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
      basePipelineHandle: 0,
      basePipelineIndex: -1,
    });

    const pipelineOut = new BigUint64Array(1);
    vk.vkCreateGraphicsPipelines(
      this.device,
      0,
      1,
      pipelineCreateInfo,
      null,
      pipelineOut,
    );
    this.graphicsPipeline = pipelineOut[0];

    vk.vkDestroyShaderModule(this.device, vertexShaderModule, null);
    vk.vkDestroyShaderModule(this.device, fragmentShaderModule, null);
  }

  createDescriptorPool() {
    const typeCount = vk.VkDescriptorPoolSize.create({
      type: vk.VkDescriptorType.VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,
      descriptorCount: 1,
    });

    const createInfo = vk.VkDescriptorPoolCreateInfo.create({
      poolSizeCount: 1,
      pPoolSizes: typeCount,
      maxSets: 1,
    });

    const poolOut = new BigUint64Array(1);
    vk.vkCreateDescriptorPool(
      this.device,
      createInfo,
      null,
      poolOut,
    );
    this.descriptorPool = poolOut[0];
  }

  createDescriptorSet() {
    const allocInfo = vk.VkDescriptorSetAllocateInfo.create({
      descriptorPool: this.descriptorPool,
      descriptorSetCount: 1,
      pSetLayouts: new BigUint64Array([BigInt(this.descriptorSetLayout)]),
    });

    const descriptorSetOut = new BigUint64Array(1);
    vk.vkAllocateDescriptorSets(
      this.device,
      allocInfo,
      descriptorSetOut,
    );
    this.descriptorSet = descriptorSetOut[0];

    const descriptorBufferInfo = vk.VkDescriptorBufferInfo.create({
      buffer: this.uniformBuffer,
      offset: 0,
      range: 64,
    });

    const writeDescriptorSet = vk.VkWriteDescriptorSet.create({
      dstSet: this.descriptorSet,
      descriptorCount: 1,
      descriptorType: vk.VkDescriptorType.VK_DESCRIPTOR_TYPE_UNIFORM_BUFFER,
      pBufferInfo: descriptorBufferInfo,
      dstBinding: 0,
    });

    vk.vkUpdateDescriptorSets(
      this.device,
      1,
      writeDescriptorSet,
      0,
      null,
    );
  }

  createCommandBuffers() {
    this.graphicsCommandBuffers = new BigUint64Array(
      this.swapChainImages.length,
    );

    const allocInfo = vk.VkCommandBufferAllocateInfo.create({
      commandPool: this.commandPool,
      level: vk.VkCommandBufferLevel.VK_COMMAND_BUFFER_LEVEL_PRIMARY,
      commandBufferCount: this.graphicsCommandBuffers.length,
    });

    vk.vkAllocateCommandBuffers(
      this.device,
      allocInfo,
      this.graphicsCommandBuffers,
    );

    const beginInfo = vk.VkCommandBufferBeginInfo.create({
      flags: vk.VkCommandBufferUsageFlagBits
        .VK_COMMAND_BUFFER_USAGE_SIMULTANEOUS_USE_BIT,
    });

    const subResourceRange = vk.VkImageSubresourceRange.create({
      aspectMask: vk.VkImageAspectFlagBits.VK_IMAGE_ASPECT_COLOR_BIT,
      baseMipLevel: 0,
      levelCount: 1,
      baseArrayLayer: 0,
      layerCount: 1,
    });

    const clearValues = new Float32Array([0.0, 0.0, 0.0, 1.0]);

    for (let i = 0; i < this.graphicsCommandBuffers.length; i++) {
      vk.vkBeginCommandBuffer(this.graphicsCommandBuffers[i], beginInfo);

      const presentToDrawBarrier = vk.VkImageMemoryBarrier.create({
        srcAccessMask: 0,
        dstAccessMask: vk.VkAccessFlagBits.VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT,
        oldLayout: vk.VkImageLayout.VK_IMAGE_LAYOUT_UNDEFINED,
        newLayout: vk.VkImageLayout.VK_IMAGE_LAYOUT_PRESENT_SRC_KHR,
      });

      if (this.presentQueueFamily !== this.graphicsQueueFamily) {
        presentToDrawBarrier.srcQueueFamilyIndex = vk.VK_QUEUE_FAMILY_IGNORED;
        presentToDrawBarrier.dstQueueFamilyIndex = vk.VK_QUEUE_FAMILY_IGNORED;
      } else {
        presentToDrawBarrier.srcQueueFamilyIndex = this.presentQueueFamily;
        presentToDrawBarrier.dstQueueFamilyIndex = this.graphicsQueueFamily;
      }

      presentToDrawBarrier.image = this.swapChainImages[i];
      presentToDrawBarrier.subresourceRange = subResourceRange;

      vk.vkCmdPipelineBarrier(
        this.graphicsCommandBuffers[i],
        vk.VkPipelineStageFlagBits
          .VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
        vk.VkPipelineStageFlagBits
          .VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
        0,
        0,
        new Uint8Array(),
        0,
        new Uint8Array(),
        1,
        presentToDrawBarrier,
      );

      const renderPassBeginInfo = vk.VkRenderPassBeginInfo.create({
        renderPass: this.renderPass,
        framebuffer: this.swapChainFramebuffers[i],
        renderArea: vk.VkRect2D.create({
          offset: vk.VkOffset2D.create({ x: 0, y: 0 }),
          extent: this.swapChainExtent,
        }),
        clearValueCount: 1,
        pClearValues: clearValues,
      });

      vk.vkCmdBeginRenderPass(
        this.graphicsCommandBuffers[i],
        renderPassBeginInfo,
        vk.VkSubpassContents.VK_SUBPASS_CONTENTS_INLINE,
      );

      vk.vkCmdBindDescriptorSets(
        this.graphicsCommandBuffers[i],
        vk.VkPipelineBindPoint.VK_PIPELINE_BIND_POINT_GRAPHICS,
        this.pipelineLayout,
        0,
        1,
        new BigUint64Array([BigInt(this.descriptorSet)]),
        0,
        null,
      );

      vk.vkCmdBindPipeline(
        this.graphicsCommandBuffers[i],
        vk.VkPipelineBindPoint.VK_PIPELINE_BIND_POINT_GRAPHICS,
        this.graphicsPipeline,
      );

      const offset = new BigUint64Array(1);
      vk.vkCmdBindVertexBuffers(
        this.graphicsCommandBuffers[i],
        0,
        1,
        new BigUint64Array([BigInt(this.vertexBuffer)]),
        offset,
      );

      vk.vkCmdBindIndexBuffer(
        this.graphicsCommandBuffers[i],
        this.indexBuffer,
        0,
        vk.VkIndexType.VK_INDEX_TYPE_UINT16,
      );

      vk.vkCmdDrawIndexed(this.graphicsCommandBuffers[i], 3, 1, 0, 0, 0);

      vk.vkCmdEndRenderPass(this.graphicsCommandBuffers[i]);

      if (this.presentQueueFamily !== this.graphicsQueueFamily) {
        const drawToPresentBarrier = vk.VkImageMemoryBarrier.create({
          srcAccessMask:
            vk.VkAccessFlagBits.VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT,
          dstAccessMask: vk.VkAccessFlagBits.VK_ACCESS_MEMORY_READ_BIT,
          oldLayout: vk.VkImageLayout.VK_IMAGE_LAYOUT_PRESENT_SRC_KHR,
          newLayout: vk.VkImageLayout.VK_IMAGE_LAYOUT_PRESENT_SRC_KHR,
          srcQueueFamilyIndex: this.graphicsQueueFamily,
          dstQueueFamilyIndex: this.presentQueueFamily,
          image: this.swapChainImages[i],
          subresourceRange: subResourceRange,
        });

        vk.vkCmdPipelineBarrier(
          this.graphicsCommandBuffers[i],
          vk.VkPipelineStageFlagBits
            .VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
          vk.VkPipelineStageFlagBits.VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT,
          0,
          0,
          null,
          0,
          null,
          1,
          drawToPresentBarrier,
        );
      }

      vk.vkEndCommandBuffer(this.graphicsCommandBuffers[i]);
    }

    vk.vkDestroyPipelineLayout(this.device, this.pipelineLayout, null);
  }

  draw() {
    const imageIndex = new Uint32Array(1);
    try {
      vk.vkAcquireNextImageKHR(
        this.device,
        this.swapChain,
        1000000000,
        this.imageAvailableSemaphore,
        0,
        imageIndex,
      );
    } catch (e: any) {
      if (e.code === vk.VkResult.VK_ERROR_OUT_OF_DATE_KHR) {
        this.onWindowSizeChanged();
        return;
      } else {
        throw e;
      }
    }

    const submitInfo = vk.VkSubmitInfo.create({
      waitSemaphoreCount: 1,
      pWaitSemaphores: new BigUint64Array([BigInt(this.imageAvailableSemaphore)]),
      signalSemaphoreCount: 1,
      pSignalSemaphores: new BigUint64Array([BigInt(this.renderingFinishedSemaphore)]),
      pWaitDstStageMask: new Uint32Array([
          vk.VkPipelineStageFlagBits
            .VK_PIPELINE_STAGE_COLOR_ATTACHMENT_OUTPUT_BIT,
        ]),
      commandBufferCount: 1,
      pCommandBuffers: new BigUint64Array([BigInt(this.graphicsCommandBuffers[imageIndex[0]])]),
    });

    vk.vkQueueSubmit(this.graphicsQueue, 1, submitInfo, 0);

    const presentInfo = vk.VkPresentInfoKHR.create({
      waitSemaphoreCount: 1,
      pWaitSemaphores: new BigUint64Array([BigInt(this.renderingFinishedSemaphore)]),
      swapchainCount: 1,
      pSwapchains: new BigUint64Array([BigInt(this.swapChain)]),
      pImageIndices: imageIndex,
    });

    try {
      const res = vk.vkQueuePresentKHR(this.presentQueue, presentInfo);
      if (res === vk.VkResult.VK_SUBOPTIMAL_KHR || this.resized) {
        this.onWindowSizeChanged();
      }
    } catch (e: any) {
      if (e.code === vk.VkResult.VK_ERROR_OUT_OF_DATE_KHR) {
        this.onWindowSizeChanged();
      } else {
        throw e;
      }
    }
  }
}

const app = new TriangleApplication();
await app.run();
