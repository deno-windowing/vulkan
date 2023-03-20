// deno-lint-ignore-file no-unused-vars
import { AnyBuffer, anyBuffer } from "./util.ts";
import {
  Result,
  Format,
  ImageType,
  ImageTiling,
  SampleCountFlagBits,
  PipelineBindPoint,
  IndexType,
  ImageLayout,
  Filter,
  PipelineStageFlagBits,
  SubpassContents,
  PresentModeKHR,
  DebugReportObjectTypeEXT,
  ExternalMemoryHandleTypeFlagBits,
  SurfaceCounterFlagBitsEXT,
  ShaderStageFlagBits,
  ShaderInfoTypeAMD,
  TimeDomainEXT,
  DebugUtilsMessageSeverityFlagBitsEXT,
  CoarseSampleOrderTypeNV,
  CopyAccelerationStructureModeKHR,
  QueryType,
  AccelerationStructureCompatibilityKHR,
  ShaderGroupShaderKHR,
  PerformanceParameterTypeINTEL,
  FrontFace,
  PrimitiveTopology,
  CompareOp,
  StencilOp,
  LogicOp,
  TessellationDomainOrigin,
  PolygonMode,
  ConservativeRasterizationModeEXT,
  ProvokingVertexModeEXT,
  LineRasterizationModeEXT,
  CoverageModulationModeNV,
  CoverageReductionModeNV,
  ObjectType,
  FragmentShadingRateCombinerOpKHR,
  FragmentShadingRateNV,
  AccelerationStructureBuildTypeKHR,
  OpticalFlowSessionBindingPointNV,
} from "./enum.ts";
import {
  Instance,
  PhysicalDevice,
  Device,
  ImageUsageFlags,
  ImageCreateFlags,
  Queue,
  Fence,
  DeviceMemory,
  DeviceSize,
  MemoryMapFlags,
  Buffer,
  Image,
  Bool32,
  Semaphore,
  Event,
  QueryPool,
  QueryResultFlags,
  BufferView,
  ImageView,
  ShaderModule,
  PipelineCache,
  Pipeline,
  RenderPass,
  PipelineLayout,
  Sampler,
  DescriptorSetLayout,
  DescriptorPool,
  DescriptorPoolResetFlags,
  DescriptorSet,
  Framebuffer,
  CommandPool,
  CommandPoolResetFlags,
  CommandBuffer,
  CommandBufferResetFlags,
  StencilFaceFlags,
  DeviceAddress,
  PipelineStageFlags,
  DependencyFlags,
  QueryControlFlags,
  ShaderStageFlags,
  SurfaceKHR,
  DisplayKHR,
  DisplayModeKHR,
  SwapchainKHR,
  DebugReportCallbackEXT,
  DebugReportFlagsEXT,
  ExternalMemoryHandleTypeFlagsNV,
  IndirectCommandsLayoutNV,
  CommandPoolTrimFlags,
  PeerMemoryFeatureFlags,
  DeviceGroupPresentModeFlagsKHR,
  DescriptorUpdateTemplate,
  SamplerYcbcrConversion,
  ValidationCacheEXT,
  SwapchainImageUsageFlagsANDROID,
  DebugUtilsMessengerEXT,
  DebugUtilsMessageTypeFlagsEXT,
  AccelerationStructureNV,
  AccelerationStructureKHR,
  DeferredOperationKHR,
  PerformanceConfigurationINTEL,
  CullModeFlags,
  SampleMask,
  ColorComponentFlags,
  PrivateDataSlot,
  PipelineStageFlags2,
  VideoSessionKHR,
  VideoSessionParametersKHR,
  CuModuleNVX,
  CuFunctionNVX,
  BufferCollectionFUCHSIA,
  MicromapEXT,
  OpticalFlowSessionNV,
} from "./def.ts";
const lib = Deno.dlopen(Deno.build.os === "windows" ? "vulkan-1" : Deno.build.os === "darwin" ? "libvulkan.dylib.1" : "libvulkan.so.1", {
  "vkCreateInstance": {
    "parameters": [
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyInstance": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkEnumeratePhysicalDevices": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetDeviceProcAddr": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "function"
  },
  "vkGetInstanceProcAddr": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "function"
  },
  "vkGetPhysicalDeviceProperties": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceQueueFamilyProperties": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceMemoryProperties": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceFeatures": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceFormatProperties": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceImageFormatProperties": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCreateDevice": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyDevice": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkEnumerateInstanceVersion": {
    "parameters": [
      "buffer"
    ],
    "result": "u32"
  },
  "vkEnumerateInstanceLayerProperties": {
    "parameters": [
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkEnumerateInstanceExtensionProperties": {
    "parameters": [
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkEnumerateDeviceLayerProperties": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkEnumerateDeviceExtensionProperties": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetDeviceQueue": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkQueueSubmit": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "pointer"
    ],
    "result": "u32"
  },
  "vkQueueWaitIdle": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "vkDeviceWaitIdle": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "vkAllocateMemory": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkFreeMemory": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkMapMemory": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u64",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkUnmapMemory": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "vkFlushMappedMemoryRanges": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkInvalidateMappedMemoryRanges": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetDeviceMemoryCommitment": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetBufferMemoryRequirements": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkBindBufferMemory": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "u32"
  },
  "vkGetImageMemoryRequirements": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkBindImageMemory": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "u32"
  },
  "vkGetImageSparseMemoryRequirements": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceSparseImageFormatProperties": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkQueueBindSparse": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "pointer"
    ],
    "result": "u32"
  },
  "vkCreateFence": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyFence": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkResetFences": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetFenceStatus": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "u32"
  },
  "vkWaitForFences": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "u32",
      "u64"
    ],
    "result": "u32"
  },
  "vkCreateSemaphore": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroySemaphore": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateEvent": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyEvent": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetEventStatus": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "u32"
  },
  "vkSetEvent": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "u32"
  },
  "vkResetEvent": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "u32"
  },
  "vkCreateQueryPool": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyQueryPool": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetQueryPoolResults": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u32",
      "usize",
      "buffer",
      "u64",
      "u32"
    ],
    "result": "u32"
  },
  "vkResetQueryPool": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCreateBuffer": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateBufferView": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyBufferView": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateImage": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyImage": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetImageSubresourceLayout": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateImageView": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyImageView": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateShaderModule": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyShaderModule": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreatePipelineCache": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyPipelineCache": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPipelineCacheData": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkMergePipelineCaches": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCreateGraphicsPipelines": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCreateComputePipelines": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyPipeline": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreatePipelineLayout": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyPipelineLayout": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateSampler": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroySampler": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateDescriptorSetLayout": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyDescriptorSetLayout": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateDescriptorPool": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyDescriptorPool": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkResetDescriptorPool": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "u32"
  },
  "vkAllocateDescriptorSets": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkFreeDescriptorSets": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkUpdateDescriptorSets": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateFramebuffer": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyFramebuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateRenderPass": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyRenderPass": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetRenderAreaGranularity": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateCommandPool": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyCommandPool": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkResetCommandPool": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "u32"
  },
  "vkAllocateCommandBuffers": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkFreeCommandBuffers": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkBeginCommandBuffer": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkEndCommandBuffer": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "vkResetCommandBuffer": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "u32"
  },
  "vkCmdBindPipeline": {
    "parameters": [
      "pointer",
      "u32",
      "pointer"
    ],
    "result": "void"
  },
  "vkCmdSetViewport": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdSetScissor": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdSetLineWidth": {
    "parameters": [
      "pointer",
      "f32"
    ],
    "result": "void"
  },
  "vkCmdSetDepthBias": {
    "parameters": [
      "pointer",
      "f32",
      "f32",
      "f32"
    ],
    "result": "void"
  },
  "vkCmdSetBlendConstants": {
    "parameters": [
      "pointer",
      "f32"
    ],
    "result": "void"
  },
  "vkCmdSetDepthBounds": {
    "parameters": [
      "pointer",
      "f32",
      "f32"
    ],
    "result": "void"
  },
  "vkCmdSetStencilCompareMask": {
    "parameters": [
      "pointer",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetStencilWriteMask": {
    "parameters": [
      "pointer",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetStencilReference": {
    "parameters": [
      "pointer",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdBindDescriptorSets": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "u32",
      "u32",
      "buffer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdBindIndexBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdBindVertexBuffers": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdDraw": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdDrawIndexed": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "i32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdDrawIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdDrawIndexedIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdDispatch": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdDispatchIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "vkCmdCopyBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdCopyImage": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "pointer",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdBlitImage": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "pointer",
      "u32",
      "u32",
      "buffer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdCopyBufferToImage": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdCopyImageToBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdUpdateBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u64",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdFillBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u64",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdClearColorImage": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "buffer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdClearDepthStencilImage": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "buffer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdClearAttachments": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdResolveImage": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "pointer",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdSetEvent": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdResetEvent": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdWaitEvents": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "u32",
      "u32",
      "u32",
      "buffer",
      "u32",
      "buffer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdPipelineBarrier": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "buffer",
      "u32",
      "buffer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdBeginQuery": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdEndQuery": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdResetQueryPool": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdWriteTimestamp": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdCopyQueryPoolResults": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u32",
      "pointer",
      "u64",
      "u64",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdPushConstants": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdBeginRenderPass": {
    "parameters": [
      "pointer",
      "buffer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdNextSubpass": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdEndRenderPass": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "vkCmdExecuteCommands": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkDestroySurfaceKHR": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceSurfaceSupportKHR": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetPhysicalDeviceSurfaceCapabilitiesKHR": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetPhysicalDeviceSurfaceFormatsKHR": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetPhysicalDeviceSurfacePresentModesKHR": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCreateSwapchainKHR": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroySwapchainKHR": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetSwapchainImagesKHR": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkAcquireNextImageKHR": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkQueuePresentKHR": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetPhysicalDeviceFeatures2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceProperties2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceFormatProperties2": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceImageFormatProperties2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetPhysicalDeviceQueueFamilyProperties2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceMemoryProperties2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceSparseImageFormatProperties2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkTrimCommandPool": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceExternalBufferProperties": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceExternalSemaphoreProperties": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetPhysicalDeviceExternalFenceProperties": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkEnumeratePhysicalDeviceGroups": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkGetDeviceGroupPeerMemoryFeatures": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkBindBufferMemory2": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkBindImageMemory2": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCmdSetDeviceMask": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdDispatchBase": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCreateDescriptorUpdateTemplate": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyDescriptorUpdateTemplate": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkUpdateDescriptorSetWithTemplate": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetBufferMemoryRequirements2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetImageMemoryRequirements2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetImageSparseMemoryRequirements2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetDeviceBufferMemoryRequirements": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetDeviceImageMemoryRequirements": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetDeviceImageSparseMemoryRequirements": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateSamplerYcbcrConversion": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroySamplerYcbcrConversion": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetDeviceQueue2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetDescriptorSetLayoutSupport": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCreateRenderPass2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCmdBeginRenderPass2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdNextSubpass2": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdEndRenderPass2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkGetSemaphoreCounterValue": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkWaitSemaphores": {
    "parameters": [
      "pointer",
      "buffer",
      "u64"
    ],
    "result": "u32"
  },
  "vkSignalSemaphore": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCmdDrawIndirectCount": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "u64",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdDrawIndexedIndirectCount": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "u64",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkGetBufferOpaqueCaptureAddress": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "u64"
  },
  "vkGetBufferDeviceAddress": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "u64"
  },
  "vkGetDeviceMemoryOpaqueCaptureAddress": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "u64"
  },
  "vkGetPhysicalDeviceToolProperties": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkCmdSetCullMode": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetFrontFace": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetPrimitiveTopology": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetViewportWithCount": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdSetScissorWithCount": {
    "parameters": [
      "pointer",
      "u32",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdBindVertexBuffers2": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "buffer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdSetDepthTestEnable": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetDepthWriteEnable": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetDepthCompareOp": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetDepthBoundsTestEnable": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetStencilTestEnable": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetStencilOp": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetRasterizerDiscardEnable": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetDepthBiasEnable": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdSetPrimitiveRestartEnable": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCreatePrivateDataSlot": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer"
    ],
    "result": "u32"
  },
  "vkDestroyPrivateDataSlot": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkSetPrivateData": {
    "parameters": [
      "pointer",
      "u32",
      "u64",
      "pointer",
      "u64"
    ],
    "result": "u32"
  },
  "vkGetPrivateData": {
    "parameters": [
      "pointer",
      "u32",
      "u64",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdCopyBuffer2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdCopyImage2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdBlitImage2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdCopyBufferToImage2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdCopyImageToBuffer2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdResolveImage2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdSetEvent2": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdResetEvent2": {
    "parameters": [
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "vkCmdWaitEvents2": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdPipelineBarrier2": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkQueueSubmit2": {
    "parameters": [
      "pointer",
      "u32",
      "buffer",
      "pointer"
    ],
    "result": "u32"
  },
  "vkCmdWriteTimestamp2": {
    "parameters": [
      "pointer",
      "u64",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "vkCmdBeginRendering": {
    "parameters": [
      "pointer",
      "buffer"
    ],
    "result": "void"
  },
  "vkCmdEndRendering": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
} as const).symbols;

export class VulkanError extends Error {
  constructor(public code: Result) {
    super(`Vulkan error: ${code} (${Result[code]})`);
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

export function EnumeratePhysicalDevices(
  instance: Instance,
  pPhysicalDeviceCount: AnyBuffer,
  pPhysicalDevices: AnyBuffer,
): Result {
  const ret = lib.vkEnumeratePhysicalDevices(
    instance,
    anyBuffer(pPhysicalDeviceCount),
    anyBuffer(pPhysicalDevices),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetDeviceProcAddr(
  device: Device,
  pName: AnyBuffer,
): Deno.PointerValue {
  const ret = lib.vkGetDeviceProcAddr(
    device,
    anyBuffer(pName),
  );
  return ret;
}

export function GetInstanceProcAddr(
  instance: Instance,
  pName: AnyBuffer,
): Deno.PointerValue {
  const ret = lib.vkGetInstanceProcAddr(
    instance,
    anyBuffer(pName),
  );
  return ret;
}

export function GetPhysicalDeviceProperties(
  physicalDevice: PhysicalDevice,
  pProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceProperties(
    physicalDevice,
    anyBuffer(pProperties),
  );
}

export function GetPhysicalDeviceQueueFamilyProperties(
  physicalDevice: PhysicalDevice,
  pQueueFamilyPropertyCount: AnyBuffer,
  pQueueFamilyProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceQueueFamilyProperties(
    physicalDevice,
    anyBuffer(pQueueFamilyPropertyCount),
    anyBuffer(pQueueFamilyProperties),
  );
}

export function GetPhysicalDeviceMemoryProperties(
  physicalDevice: PhysicalDevice,
  pMemoryProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceMemoryProperties(
    physicalDevice,
    anyBuffer(pMemoryProperties),
  );
}

export function GetPhysicalDeviceFeatures(
  physicalDevice: PhysicalDevice,
  pFeatures: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceFeatures(
    physicalDevice,
    anyBuffer(pFeatures),
  );
}

export function GetPhysicalDeviceFormatProperties(
  physicalDevice: PhysicalDevice,
  format: Format,
  pFormatProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceFormatProperties(
    physicalDevice,
    format,
    anyBuffer(pFormatProperties),
  );
}

export function GetPhysicalDeviceImageFormatProperties(
  physicalDevice: PhysicalDevice,
  format: Format,
  type: ImageType,
  tiling: ImageTiling,
  usage: ImageUsageFlags,
  flags: ImageCreateFlags,
  pImageFormatProperties: AnyBuffer,
): Result {
  const ret = lib.vkGetPhysicalDeviceImageFormatProperties(
    physicalDevice,
    format,
    type,
    tiling,
    usage,
    flags,
    anyBuffer(pImageFormatProperties),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CreateDevice(
  physicalDevice: PhysicalDevice,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pDevice: AnyBuffer,
): Result {
  const ret = lib.vkCreateDevice(
    physicalDevice,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pDevice),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyDevice(
  device: Device,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyDevice(
    device,
    anyBuffer(pAllocator),
  );
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

export function EnumerateInstanceLayerProperties(
  pPropertyCount: AnyBuffer,
  pProperties: AnyBuffer,
): Result {
  const ret = lib.vkEnumerateInstanceLayerProperties(
    anyBuffer(pPropertyCount),
    anyBuffer(pProperties),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function EnumerateInstanceExtensionProperties(
  pLayerName: AnyBuffer,
  pPropertyCount: AnyBuffer,
  pProperties: AnyBuffer,
): Result {
  const ret = lib.vkEnumerateInstanceExtensionProperties(
    anyBuffer(pLayerName),
    anyBuffer(pPropertyCount),
    anyBuffer(pProperties),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function EnumerateDeviceLayerProperties(
  physicalDevice: PhysicalDevice,
  pPropertyCount: AnyBuffer,
  pProperties: AnyBuffer,
): Result {
  const ret = lib.vkEnumerateDeviceLayerProperties(
    physicalDevice,
    anyBuffer(pPropertyCount),
    anyBuffer(pProperties),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function EnumerateDeviceExtensionProperties(
  physicalDevice: PhysicalDevice,
  pLayerName: AnyBuffer,
  pPropertyCount: AnyBuffer,
  pProperties: AnyBuffer,
): Result {
  const ret = lib.vkEnumerateDeviceExtensionProperties(
    physicalDevice,
    anyBuffer(pLayerName),
    anyBuffer(pPropertyCount),
    anyBuffer(pProperties),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetDeviceQueue(
  device: Device,
  queueFamilyIndex: number,
  queueIndex: number,
  pQueue: AnyBuffer,
): void {
  lib.vkGetDeviceQueue(
    device,
    queueFamilyIndex,
    queueIndex,
    anyBuffer(pQueue),
  );
}

export function QueueSubmit(
  queue: Queue,
  submitCount: number,
  pSubmits: AnyBuffer,
  fence: Fence,
): Result {
  const ret = lib.vkQueueSubmit(
    queue,
    submitCount,
    anyBuffer(pSubmits),
    fence,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function QueueWaitIdle(
  queue: Queue,
): Result {
  const ret = lib.vkQueueWaitIdle(
    queue,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DeviceWaitIdle(
  device: Device,
): Result {
  const ret = lib.vkDeviceWaitIdle(
    device,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function AllocateMemory(
  device: Device,
  pAllocateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pMemory: AnyBuffer,
): Result {
  const ret = lib.vkAllocateMemory(
    device,
    anyBuffer(pAllocateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pMemory),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function FreeMemory(
  device: Device,
  memory: DeviceMemory,
  pAllocator: AnyBuffer,
): void {
  lib.vkFreeMemory(
    device,
    memory,
    anyBuffer(pAllocator),
  );
}

export function MapMemory(
  device: Device,
  memory: DeviceMemory,
  offset: DeviceSize,
  size: DeviceSize,
  flags: MemoryMapFlags,
  ppData: AnyBuffer,
): Result {
  const ret = lib.vkMapMemory(
    device,
    memory,
    offset,
    size,
    flags,
    anyBuffer(ppData),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function UnmapMemory(
  device: Device,
  memory: DeviceMemory,
): void {
  lib.vkUnmapMemory(
    device,
    memory,
  );
}

export function FlushMappedMemoryRanges(
  device: Device,
  memoryRangeCount: number,
  pMemoryRanges: AnyBuffer,
): Result {
  const ret = lib.vkFlushMappedMemoryRanges(
    device,
    memoryRangeCount,
    anyBuffer(pMemoryRanges),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function InvalidateMappedMemoryRanges(
  device: Device,
  memoryRangeCount: number,
  pMemoryRanges: AnyBuffer,
): Result {
  const ret = lib.vkInvalidateMappedMemoryRanges(
    device,
    memoryRangeCount,
    anyBuffer(pMemoryRanges),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetDeviceMemoryCommitment(
  device: Device,
  memory: DeviceMemory,
  pCommittedMemoryInBytes: AnyBuffer,
): void {
  lib.vkGetDeviceMemoryCommitment(
    device,
    memory,
    anyBuffer(pCommittedMemoryInBytes),
  );
}

export function GetBufferMemoryRequirements(
  device: Device,
  buffer: Buffer,
  pMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetBufferMemoryRequirements(
    device,
    buffer,
    anyBuffer(pMemoryRequirements),
  );
}

export function BindBufferMemory(
  device: Device,
  buffer: Buffer,
  memory: DeviceMemory,
  memoryOffset: DeviceSize,
): Result {
  const ret = lib.vkBindBufferMemory(
    device,
    buffer,
    memory,
    memoryOffset,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetImageMemoryRequirements(
  device: Device,
  image: Image,
  pMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetImageMemoryRequirements(
    device,
    image,
    anyBuffer(pMemoryRequirements),
  );
}

export function BindImageMemory(
  device: Device,
  image: Image,
  memory: DeviceMemory,
  memoryOffset: DeviceSize,
): Result {
  const ret = lib.vkBindImageMemory(
    device,
    image,
    memory,
    memoryOffset,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetImageSparseMemoryRequirements(
  device: Device,
  image: Image,
  pSparseMemoryRequirementCount: AnyBuffer,
  pSparseMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetImageSparseMemoryRequirements(
    device,
    image,
    anyBuffer(pSparseMemoryRequirementCount),
    anyBuffer(pSparseMemoryRequirements),
  );
}

export function GetPhysicalDeviceSparseImageFormatProperties(
  physicalDevice: PhysicalDevice,
  format: Format,
  type: ImageType,
  samples: SampleCountFlagBits,
  usage: ImageUsageFlags,
  tiling: ImageTiling,
  pPropertyCount: AnyBuffer,
  pProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceSparseImageFormatProperties(
    physicalDevice,
    format,
    type,
    samples,
    usage,
    tiling,
    anyBuffer(pPropertyCount),
    anyBuffer(pProperties),
  );
}

export function QueueBindSparse(
  queue: Queue,
  bindInfoCount: number,
  pBindInfo: AnyBuffer,
  fence: Fence,
): Result {
  const ret = lib.vkQueueBindSparse(
    queue,
    bindInfoCount,
    anyBuffer(pBindInfo),
    fence,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CreateFence(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pFence: AnyBuffer,
): Result {
  const ret = lib.vkCreateFence(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pFence),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyFence(
  device: Device,
  fence: Fence,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyFence(
    device,
    fence,
    anyBuffer(pAllocator),
  );
}

export function ResetFences(
  device: Device,
  fenceCount: number,
  pFences: AnyBuffer,
): Result {
  const ret = lib.vkResetFences(
    device,
    fenceCount,
    anyBuffer(pFences),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetFenceStatus(
  device: Device,
  fence: Fence,
): Result {
  const ret = lib.vkGetFenceStatus(
    device,
    fence,
  );
  if (ret === Result.SUCCESS || ret === Result.NOT_READY) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function WaitForFences(
  device: Device,
  fenceCount: number,
  pFences: AnyBuffer,
  waitAll: Bool32,
  timeout: number | bigint,
): Result {
  const ret = lib.vkWaitForFences(
    device,
    fenceCount,
    anyBuffer(pFences),
    waitAll,
    timeout,
  );
  if (ret === Result.SUCCESS || ret === Result.TIMEOUT) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CreateSemaphore(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pSemaphore: AnyBuffer,
): Result {
  const ret = lib.vkCreateSemaphore(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pSemaphore),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroySemaphore(
  device: Device,
  semaphore: Semaphore,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroySemaphore(
    device,
    semaphore,
    anyBuffer(pAllocator),
  );
}

export function CreateEvent(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pEvent: AnyBuffer,
): Result {
  const ret = lib.vkCreateEvent(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pEvent),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyEvent(
  device: Device,
  event: Event,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyEvent(
    device,
    event,
    anyBuffer(pAllocator),
  );
}

export function GetEventStatus(
  device: Device,
  event: Event,
): Result {
  const ret = lib.vkGetEventStatus(
    device,
    event,
  );
  if (ret === Result.EVENT_SET || ret === Result.EVENT_RESET) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function SetEvent(
  device: Device,
  event: Event,
): Result {
  const ret = lib.vkSetEvent(
    device,
    event,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function ResetEvent(
  device: Device,
  event: Event,
): Result {
  const ret = lib.vkResetEvent(
    device,
    event,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CreateQueryPool(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pQueryPool: AnyBuffer,
): Result {
  const ret = lib.vkCreateQueryPool(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pQueryPool),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyQueryPool(
  device: Device,
  queryPool: QueryPool,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyQueryPool(
    device,
    queryPool,
    anyBuffer(pAllocator),
  );
}

export function GetQueryPoolResults(
  device: Device,
  queryPool: QueryPool,
  firstQuery: number,
  queryCount: number,
  dataSize: number | bigint,
  pData: AnyBuffer,
  stride: DeviceSize,
  flags: QueryResultFlags,
): Result {
  const ret = lib.vkGetQueryPoolResults(
    device,
    queryPool,
    firstQuery,
    queryCount,
    dataSize,
    anyBuffer(pData),
    stride,
    flags,
  );
  if (ret === Result.SUCCESS || ret === Result.NOT_READY) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function ResetQueryPool(
  device: Device,
  queryPool: QueryPool,
  firstQuery: number,
  queryCount: number,
): void {
  lib.vkResetQueryPool(
    device,
    queryPool,
    firstQuery,
    queryCount,
  );
}

export function CreateBuffer(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pBuffer: AnyBuffer,
): Result {
  const ret = lib.vkCreateBuffer(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pBuffer),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyBuffer(
  device: Device,
  buffer: Buffer,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyBuffer(
    device,
    buffer,
    anyBuffer(pAllocator),
  );
}

export function CreateBufferView(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pView: AnyBuffer,
): Result {
  const ret = lib.vkCreateBufferView(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pView),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyBufferView(
  device: Device,
  bufferView: BufferView,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyBufferView(
    device,
    bufferView,
    anyBuffer(pAllocator),
  );
}

export function CreateImage(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pImage: AnyBuffer,
): Result {
  const ret = lib.vkCreateImage(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pImage),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyImage(
  device: Device,
  image: Image,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyImage(
    device,
    image,
    anyBuffer(pAllocator),
  );
}

export function GetImageSubresourceLayout(
  device: Device,
  image: Image,
  pSubresource: AnyBuffer,
  pLayout: AnyBuffer,
): void {
  lib.vkGetImageSubresourceLayout(
    device,
    image,
    anyBuffer(pSubresource),
    anyBuffer(pLayout),
  );
}

export function CreateImageView(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pView: AnyBuffer,
): Result {
  const ret = lib.vkCreateImageView(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pView),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyImageView(
  device: Device,
  imageView: ImageView,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyImageView(
    device,
    imageView,
    anyBuffer(pAllocator),
  );
}

export function CreateShaderModule(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pShaderModule: AnyBuffer,
): Result {
  const ret = lib.vkCreateShaderModule(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pShaderModule),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyShaderModule(
  device: Device,
  shaderModule: ShaderModule,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyShaderModule(
    device,
    shaderModule,
    anyBuffer(pAllocator),
  );
}

export function CreatePipelineCache(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pPipelineCache: AnyBuffer,
): Result {
  const ret = lib.vkCreatePipelineCache(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pPipelineCache),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyPipelineCache(
  device: Device,
  pipelineCache: PipelineCache,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyPipelineCache(
    device,
    pipelineCache,
    anyBuffer(pAllocator),
  );
}

export function GetPipelineCacheData(
  device: Device,
  pipelineCache: PipelineCache,
  pDataSize: AnyBuffer,
  pData: AnyBuffer,
): Result {
  const ret = lib.vkGetPipelineCacheData(
    device,
    pipelineCache,
    anyBuffer(pDataSize),
    anyBuffer(pData),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function MergePipelineCaches(
  device: Device,
  dstCache: PipelineCache,
  srcCacheCount: number,
  pSrcCaches: AnyBuffer,
): Result {
  const ret = lib.vkMergePipelineCaches(
    device,
    dstCache,
    srcCacheCount,
    anyBuffer(pSrcCaches),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CreateGraphicsPipelines(
  device: Device,
  pipelineCache: PipelineCache,
  createInfoCount: number,
  pCreateInfos: AnyBuffer,
  pAllocator: AnyBuffer,
  pPipelines: AnyBuffer,
): Result {
  const ret = lib.vkCreateGraphicsPipelines(
    device,
    pipelineCache,
    createInfoCount,
    anyBuffer(pCreateInfos),
    anyBuffer(pAllocator),
    anyBuffer(pPipelines),
  );
  if (ret === Result.SUCCESS || ret === Result.PIPELINE_COMPILE_REQUIRED_EXT) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CreateComputePipelines(
  device: Device,
  pipelineCache: PipelineCache,
  createInfoCount: number,
  pCreateInfos: AnyBuffer,
  pAllocator: AnyBuffer,
  pPipelines: AnyBuffer,
): Result {
  const ret = lib.vkCreateComputePipelines(
    device,
    pipelineCache,
    createInfoCount,
    anyBuffer(pCreateInfos),
    anyBuffer(pAllocator),
    anyBuffer(pPipelines),
  );
  if (ret === Result.SUCCESS || ret === Result.PIPELINE_COMPILE_REQUIRED_EXT) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyPipeline(
  device: Device,
  pipeline: Pipeline,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyPipeline(
    device,
    pipeline,
    anyBuffer(pAllocator),
  );
}

export function CreatePipelineLayout(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pPipelineLayout: AnyBuffer,
): Result {
  const ret = lib.vkCreatePipelineLayout(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pPipelineLayout),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyPipelineLayout(
  device: Device,
  pipelineLayout: PipelineLayout,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyPipelineLayout(
    device,
    pipelineLayout,
    anyBuffer(pAllocator),
  );
}

export function CreateSampler(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pSampler: AnyBuffer,
): Result {
  const ret = lib.vkCreateSampler(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pSampler),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroySampler(
  device: Device,
  sampler: Sampler,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroySampler(
    device,
    sampler,
    anyBuffer(pAllocator),
  );
}

export function CreateDescriptorSetLayout(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pSetLayout: AnyBuffer,
): Result {
  const ret = lib.vkCreateDescriptorSetLayout(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pSetLayout),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyDescriptorSetLayout(
  device: Device,
  descriptorSetLayout: DescriptorSetLayout,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyDescriptorSetLayout(
    device,
    descriptorSetLayout,
    anyBuffer(pAllocator),
  );
}

export function CreateDescriptorPool(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pDescriptorPool: AnyBuffer,
): Result {
  const ret = lib.vkCreateDescriptorPool(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pDescriptorPool),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyDescriptorPool(
  device: Device,
  descriptorPool: DescriptorPool,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyDescriptorPool(
    device,
    descriptorPool,
    anyBuffer(pAllocator),
  );
}

export function ResetDescriptorPool(
  device: Device,
  descriptorPool: DescriptorPool,
  flags: DescriptorPoolResetFlags,
): Result {
  const ret = lib.vkResetDescriptorPool(
    device,
    descriptorPool,
    flags,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function AllocateDescriptorSets(
  device: Device,
  pAllocateInfo: AnyBuffer,
  pDescriptorSets: AnyBuffer,
): Result {
  const ret = lib.vkAllocateDescriptorSets(
    device,
    anyBuffer(pAllocateInfo),
    anyBuffer(pDescriptorSets),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function FreeDescriptorSets(
  device: Device,
  descriptorPool: DescriptorPool,
  descriptorSetCount: number,
  pDescriptorSets: AnyBuffer,
): Result {
  const ret = lib.vkFreeDescriptorSets(
    device,
    descriptorPool,
    descriptorSetCount,
    anyBuffer(pDescriptorSets),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function UpdateDescriptorSets(
  device: Device,
  descriptorWriteCount: number,
  pDescriptorWrites: AnyBuffer,
  descriptorCopyCount: number,
  pDescriptorCopies: AnyBuffer,
): void {
  lib.vkUpdateDescriptorSets(
    device,
    descriptorWriteCount,
    anyBuffer(pDescriptorWrites),
    descriptorCopyCount,
    anyBuffer(pDescriptorCopies),
  );
}

export function CreateFramebuffer(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pFramebuffer: AnyBuffer,
): Result {
  const ret = lib.vkCreateFramebuffer(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pFramebuffer),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyFramebuffer(
  device: Device,
  framebuffer: Framebuffer,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyFramebuffer(
    device,
    framebuffer,
    anyBuffer(pAllocator),
  );
}

export function CreateRenderPass(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pRenderPass: AnyBuffer,
): Result {
  const ret = lib.vkCreateRenderPass(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pRenderPass),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyRenderPass(
  device: Device,
  renderPass: RenderPass,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyRenderPass(
    device,
    renderPass,
    anyBuffer(pAllocator),
  );
}

export function GetRenderAreaGranularity(
  device: Device,
  renderPass: RenderPass,
  pGranularity: AnyBuffer,
): void {
  lib.vkGetRenderAreaGranularity(
    device,
    renderPass,
    anyBuffer(pGranularity),
  );
}

export function CreateCommandPool(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pCommandPool: AnyBuffer,
): Result {
  const ret = lib.vkCreateCommandPool(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pCommandPool),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyCommandPool(
  device: Device,
  commandPool: CommandPool,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyCommandPool(
    device,
    commandPool,
    anyBuffer(pAllocator),
  );
}

export function ResetCommandPool(
  device: Device,
  commandPool: CommandPool,
  flags: CommandPoolResetFlags,
): Result {
  const ret = lib.vkResetCommandPool(
    device,
    commandPool,
    flags,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function AllocateCommandBuffers(
  device: Device,
  pAllocateInfo: AnyBuffer,
  pCommandBuffers: AnyBuffer,
): Result {
  const ret = lib.vkAllocateCommandBuffers(
    device,
    anyBuffer(pAllocateInfo),
    anyBuffer(pCommandBuffers),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function FreeCommandBuffers(
  device: Device,
  commandPool: CommandPool,
  commandBufferCount: number,
  pCommandBuffers: AnyBuffer,
): void {
  lib.vkFreeCommandBuffers(
    device,
    commandPool,
    commandBufferCount,
    anyBuffer(pCommandBuffers),
  );
}

export function BeginCommandBuffer(
  commandBuffer: CommandBuffer,
  pBeginInfo: AnyBuffer,
): Result {
  const ret = lib.vkBeginCommandBuffer(
    commandBuffer,
    anyBuffer(pBeginInfo),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function EndCommandBuffer(
  commandBuffer: CommandBuffer,
): Result {
  const ret = lib.vkEndCommandBuffer(
    commandBuffer,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function ResetCommandBuffer(
  commandBuffer: CommandBuffer,
  flags: CommandBufferResetFlags,
): Result {
  const ret = lib.vkResetCommandBuffer(
    commandBuffer,
    flags,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CmdBindPipeline(
  commandBuffer: CommandBuffer,
  pipelineBindPoint: PipelineBindPoint,
  pipeline: Pipeline,
): void {
  lib.vkCmdBindPipeline(
    commandBuffer,
    pipelineBindPoint,
    pipeline,
  );
}

export function CmdSetViewport(
  commandBuffer: CommandBuffer,
  firstViewport: number,
  viewportCount: number,
  pViewports: AnyBuffer,
): void {
  lib.vkCmdSetViewport(
    commandBuffer,
    firstViewport,
    viewportCount,
    anyBuffer(pViewports),
  );
}

export function CmdSetScissor(
  commandBuffer: CommandBuffer,
  firstScissor: number,
  scissorCount: number,
  pScissors: AnyBuffer,
): void {
  lib.vkCmdSetScissor(
    commandBuffer,
    firstScissor,
    scissorCount,
    anyBuffer(pScissors),
  );
}

export function CmdSetLineWidth(
  commandBuffer: CommandBuffer,
  lineWidth: number,
): void {
  lib.vkCmdSetLineWidth(
    commandBuffer,
    lineWidth,
  );
}

export function CmdSetDepthBias(
  commandBuffer: CommandBuffer,
  depthBiasConstantFactor: number,
  depthBiasClamp: number,
  depthBiasSlopeFactor: number,
): void {
  lib.vkCmdSetDepthBias(
    commandBuffer,
    depthBiasConstantFactor,
    depthBiasClamp,
    depthBiasSlopeFactor,
  );
}

export function CmdSetBlendConstants(
  commandBuffer: CommandBuffer,
  blendConstants: number,
): void {
  lib.vkCmdSetBlendConstants(
    commandBuffer,
    blendConstants,
  );
}

export function CmdSetDepthBounds(
  commandBuffer: CommandBuffer,
  minDepthBounds: number,
  maxDepthBounds: number,
): void {
  lib.vkCmdSetDepthBounds(
    commandBuffer,
    minDepthBounds,
    maxDepthBounds,
  );
}

export function CmdSetStencilCompareMask(
  commandBuffer: CommandBuffer,
  faceMask: StencilFaceFlags,
  compareMask: number,
): void {
  lib.vkCmdSetStencilCompareMask(
    commandBuffer,
    faceMask,
    compareMask,
  );
}

export function CmdSetStencilWriteMask(
  commandBuffer: CommandBuffer,
  faceMask: StencilFaceFlags,
  writeMask: number,
): void {
  lib.vkCmdSetStencilWriteMask(
    commandBuffer,
    faceMask,
    writeMask,
  );
}

export function CmdSetStencilReference(
  commandBuffer: CommandBuffer,
  faceMask: StencilFaceFlags,
  reference: number,
): void {
  lib.vkCmdSetStencilReference(
    commandBuffer,
    faceMask,
    reference,
  );
}

export function CmdBindDescriptorSets(
  commandBuffer: CommandBuffer,
  pipelineBindPoint: PipelineBindPoint,
  layout: PipelineLayout,
  firstSet: number,
  descriptorSetCount: number,
  pDescriptorSets: AnyBuffer,
  dynamicOffsetCount: number,
  pDynamicOffsets: AnyBuffer,
): void {
  lib.vkCmdBindDescriptorSets(
    commandBuffer,
    pipelineBindPoint,
    layout,
    firstSet,
    descriptorSetCount,
    anyBuffer(pDescriptorSets),
    dynamicOffsetCount,
    anyBuffer(pDynamicOffsets),
  );
}

export function CmdBindIndexBuffer(
  commandBuffer: CommandBuffer,
  buffer: Buffer,
  offset: DeviceSize,
  indexType: IndexType,
): void {
  lib.vkCmdBindIndexBuffer(
    commandBuffer,
    buffer,
    offset,
    indexType,
  );
}

export function CmdBindVertexBuffers(
  commandBuffer: CommandBuffer,
  firstBinding: number,
  bindingCount: number,
  pBuffers: AnyBuffer,
  pOffsets: AnyBuffer,
): void {
  lib.vkCmdBindVertexBuffers(
    commandBuffer,
    firstBinding,
    bindingCount,
    anyBuffer(pBuffers),
    anyBuffer(pOffsets),
  );
}

export function CmdDraw(
  commandBuffer: CommandBuffer,
  vertexCount: number,
  instanceCount: number,
  firstVertex: number,
  firstInstance: number,
): void {
  lib.vkCmdDraw(
    commandBuffer,
    vertexCount,
    instanceCount,
    firstVertex,
    firstInstance,
  );
}

export function CmdDrawIndexed(
  commandBuffer: CommandBuffer,
  indexCount: number,
  instanceCount: number,
  firstIndex: number,
  vertexOffset: number,
  firstInstance: number,
): void {
  lib.vkCmdDrawIndexed(
    commandBuffer,
    indexCount,
    instanceCount,
    firstIndex,
    vertexOffset,
    firstInstance,
  );
}

export function CmdDrawIndirect(
  commandBuffer: CommandBuffer,
  buffer: Buffer,
  offset: DeviceSize,
  drawCount: number,
  stride: number,
): void {
  lib.vkCmdDrawIndirect(
    commandBuffer,
    buffer,
    offset,
    drawCount,
    stride,
  );
}

export function CmdDrawIndexedIndirect(
  commandBuffer: CommandBuffer,
  buffer: Buffer,
  offset: DeviceSize,
  drawCount: number,
  stride: number,
): void {
  lib.vkCmdDrawIndexedIndirect(
    commandBuffer,
    buffer,
    offset,
    drawCount,
    stride,
  );
}

export function CmdDispatch(
  commandBuffer: CommandBuffer,
  groupCountX: number,
  groupCountY: number,
  groupCountZ: number,
): void {
  lib.vkCmdDispatch(
    commandBuffer,
    groupCountX,
    groupCountY,
    groupCountZ,
  );
}

export function CmdDispatchIndirect(
  commandBuffer: CommandBuffer,
  buffer: Buffer,
  offset: DeviceSize,
): void {
  lib.vkCmdDispatchIndirect(
    commandBuffer,
    buffer,
    offset,
  );
}

export function CmdCopyBuffer(
  commandBuffer: CommandBuffer,
  srcBuffer: Buffer,
  dstBuffer: Buffer,
  regionCount: number,
  pRegions: AnyBuffer,
): void {
  lib.vkCmdCopyBuffer(
    commandBuffer,
    srcBuffer,
    dstBuffer,
    regionCount,
    anyBuffer(pRegions),
  );
}

export function CmdCopyImage(
  commandBuffer: CommandBuffer,
  srcImage: Image,
  srcImageLayout: ImageLayout,
  dstImage: Image,
  dstImageLayout: ImageLayout,
  regionCount: number,
  pRegions: AnyBuffer,
): void {
  lib.vkCmdCopyImage(
    commandBuffer,
    srcImage,
    srcImageLayout,
    dstImage,
    dstImageLayout,
    regionCount,
    anyBuffer(pRegions),
  );
}

export function CmdBlitImage(
  commandBuffer: CommandBuffer,
  srcImage: Image,
  srcImageLayout: ImageLayout,
  dstImage: Image,
  dstImageLayout: ImageLayout,
  regionCount: number,
  pRegions: AnyBuffer,
  filter: Filter,
): void {
  lib.vkCmdBlitImage(
    commandBuffer,
    srcImage,
    srcImageLayout,
    dstImage,
    dstImageLayout,
    regionCount,
    anyBuffer(pRegions),
    filter,
  );
}

export function CmdCopyBufferToImage(
  commandBuffer: CommandBuffer,
  srcBuffer: Buffer,
  dstImage: Image,
  dstImageLayout: ImageLayout,
  regionCount: number,
  pRegions: AnyBuffer,
): void {
  lib.vkCmdCopyBufferToImage(
    commandBuffer,
    srcBuffer,
    dstImage,
    dstImageLayout,
    regionCount,
    anyBuffer(pRegions),
  );
}

export function CmdCopyImageToBuffer(
  commandBuffer: CommandBuffer,
  srcImage: Image,
  srcImageLayout: ImageLayout,
  dstBuffer: Buffer,
  regionCount: number,
  pRegions: AnyBuffer,
): void {
  lib.vkCmdCopyImageToBuffer(
    commandBuffer,
    srcImage,
    srcImageLayout,
    dstBuffer,
    regionCount,
    anyBuffer(pRegions),
  );
}

export function CmdUpdateBuffer(
  commandBuffer: CommandBuffer,
  dstBuffer: Buffer,
  dstOffset: DeviceSize,
  dataSize: DeviceSize,
  pData: AnyBuffer,
): void {
  lib.vkCmdUpdateBuffer(
    commandBuffer,
    dstBuffer,
    dstOffset,
    dataSize,
    anyBuffer(pData),
  );
}

/** transfer support is only available when VK_KHR_maintenance1 is enabled, as documented in valid usage language in the specification */
export function CmdFillBuffer(
  commandBuffer: CommandBuffer,
  dstBuffer: Buffer,
  dstOffset: DeviceSize,
  size: DeviceSize,
  data: number,
): void {
  lib.vkCmdFillBuffer(
    commandBuffer,
    dstBuffer,
    dstOffset,
    size,
    data,
  );
}

export function CmdClearColorImage(
  commandBuffer: CommandBuffer,
  image: Image,
  imageLayout: ImageLayout,
  pColor: AnyBuffer,
  rangeCount: number,
  pRanges: AnyBuffer,
): void {
  lib.vkCmdClearColorImage(
    commandBuffer,
    image,
    imageLayout,
    anyBuffer(pColor),
    rangeCount,
    anyBuffer(pRanges),
  );
}

export function CmdClearDepthStencilImage(
  commandBuffer: CommandBuffer,
  image: Image,
  imageLayout: ImageLayout,
  pDepthStencil: AnyBuffer,
  rangeCount: number,
  pRanges: AnyBuffer,
): void {
  lib.vkCmdClearDepthStencilImage(
    commandBuffer,
    image,
    imageLayout,
    anyBuffer(pDepthStencil),
    rangeCount,
    anyBuffer(pRanges),
  );
}

export function CmdClearAttachments(
  commandBuffer: CommandBuffer,
  attachmentCount: number,
  pAttachments: AnyBuffer,
  rectCount: number,
  pRects: AnyBuffer,
): void {
  lib.vkCmdClearAttachments(
    commandBuffer,
    attachmentCount,
    anyBuffer(pAttachments),
    rectCount,
    anyBuffer(pRects),
  );
}

export function CmdResolveImage(
  commandBuffer: CommandBuffer,
  srcImage: Image,
  srcImageLayout: ImageLayout,
  dstImage: Image,
  dstImageLayout: ImageLayout,
  regionCount: number,
  pRegions: AnyBuffer,
): void {
  lib.vkCmdResolveImage(
    commandBuffer,
    srcImage,
    srcImageLayout,
    dstImage,
    dstImageLayout,
    regionCount,
    anyBuffer(pRegions),
  );
}

export function CmdSetEvent(
  commandBuffer: CommandBuffer,
  event: Event,
  stageMask: PipelineStageFlags,
): void {
  lib.vkCmdSetEvent(
    commandBuffer,
    event,
    stageMask,
  );
}

export function CmdResetEvent(
  commandBuffer: CommandBuffer,
  event: Event,
  stageMask: PipelineStageFlags,
): void {
  lib.vkCmdResetEvent(
    commandBuffer,
    event,
    stageMask,
  );
}

export function CmdWaitEvents(
  commandBuffer: CommandBuffer,
  eventCount: number,
  pEvents: AnyBuffer,
  srcStageMask: PipelineStageFlags,
  dstStageMask: PipelineStageFlags,
  memoryBarrierCount: number,
  pMemoryBarriers: AnyBuffer,
  bufferMemoryBarrierCount: number,
  pBufferMemoryBarriers: AnyBuffer,
  imageMemoryBarrierCount: number,
  pImageMemoryBarriers: AnyBuffer,
): void {
  lib.vkCmdWaitEvents(
    commandBuffer,
    eventCount,
    anyBuffer(pEvents),
    srcStageMask,
    dstStageMask,
    memoryBarrierCount,
    anyBuffer(pMemoryBarriers),
    bufferMemoryBarrierCount,
    anyBuffer(pBufferMemoryBarriers),
    imageMemoryBarrierCount,
    anyBuffer(pImageMemoryBarriers),
  );
}

export function CmdPipelineBarrier(
  commandBuffer: CommandBuffer,
  srcStageMask: PipelineStageFlags,
  dstStageMask: PipelineStageFlags,
  dependencyFlags: DependencyFlags,
  memoryBarrierCount: number,
  pMemoryBarriers: AnyBuffer,
  bufferMemoryBarrierCount: number,
  pBufferMemoryBarriers: AnyBuffer,
  imageMemoryBarrierCount: number,
  pImageMemoryBarriers: AnyBuffer,
): void {
  lib.vkCmdPipelineBarrier(
    commandBuffer,
    srcStageMask,
    dstStageMask,
    dependencyFlags,
    memoryBarrierCount,
    anyBuffer(pMemoryBarriers),
    bufferMemoryBarrierCount,
    anyBuffer(pBufferMemoryBarriers),
    imageMemoryBarrierCount,
    anyBuffer(pImageMemoryBarriers),
  );
}

export function CmdBeginQuery(
  commandBuffer: CommandBuffer,
  queryPool: QueryPool,
  query: number,
  flags: QueryControlFlags,
): void {
  lib.vkCmdBeginQuery(
    commandBuffer,
    queryPool,
    query,
    flags,
  );
}

export function CmdEndQuery(
  commandBuffer: CommandBuffer,
  queryPool: QueryPool,
  query: number,
): void {
  lib.vkCmdEndQuery(
    commandBuffer,
    queryPool,
    query,
  );
}

export function CmdResetQueryPool(
  commandBuffer: CommandBuffer,
  queryPool: QueryPool,
  firstQuery: number,
  queryCount: number,
): void {
  lib.vkCmdResetQueryPool(
    commandBuffer,
    queryPool,
    firstQuery,
    queryCount,
  );
}

export function CmdWriteTimestamp(
  commandBuffer: CommandBuffer,
  pipelineStage: PipelineStageFlagBits,
  queryPool: QueryPool,
  query: number,
): void {
  lib.vkCmdWriteTimestamp(
    commandBuffer,
    pipelineStage,
    queryPool,
    query,
  );
}

export function CmdCopyQueryPoolResults(
  commandBuffer: CommandBuffer,
  queryPool: QueryPool,
  firstQuery: number,
  queryCount: number,
  dstBuffer: Buffer,
  dstOffset: DeviceSize,
  stride: DeviceSize,
  flags: QueryResultFlags,
): void {
  lib.vkCmdCopyQueryPoolResults(
    commandBuffer,
    queryPool,
    firstQuery,
    queryCount,
    dstBuffer,
    dstOffset,
    stride,
    flags,
  );
}

export function CmdPushConstants(
  commandBuffer: CommandBuffer,
  layout: PipelineLayout,
  stageFlags: ShaderStageFlags,
  offset: number,
  size: number,
  pValues: AnyBuffer,
): void {
  lib.vkCmdPushConstants(
    commandBuffer,
    layout,
    stageFlags,
    offset,
    size,
    anyBuffer(pValues),
  );
}

export function CmdBeginRenderPass(
  commandBuffer: CommandBuffer,
  pRenderPassBegin: AnyBuffer,
  contents: SubpassContents,
): void {
  lib.vkCmdBeginRenderPass(
    commandBuffer,
    anyBuffer(pRenderPassBegin),
    contents,
  );
}

export function CmdNextSubpass(
  commandBuffer: CommandBuffer,
  contents: SubpassContents,
): void {
  lib.vkCmdNextSubpass(
    commandBuffer,
    contents,
  );
}

export function CmdEndRenderPass(
  commandBuffer: CommandBuffer,
): void {
  lib.vkCmdEndRenderPass(
    commandBuffer,
  );
}

export function CmdExecuteCommands(
  commandBuffer: CommandBuffer,
  commandBufferCount: number,
  pCommandBuffers: AnyBuffer,
): void {
  lib.vkCmdExecuteCommands(
    commandBuffer,
    commandBufferCount,
    anyBuffer(pCommandBuffers),
  );
}

export function DestroySurfaceKHR(
  instance: Instance,
  surface: SurfaceKHR,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroySurfaceKHR(
    instance,
    surface,
    anyBuffer(pAllocator),
  );
}

export function GetPhysicalDeviceSurfaceSupportKHR(
  physicalDevice: PhysicalDevice,
  queueFamilyIndex: number,
  surface: SurfaceKHR,
  pSupported: AnyBuffer,
): Result {
  const ret = lib.vkGetPhysicalDeviceSurfaceSupportKHR(
    physicalDevice,
    queueFamilyIndex,
    surface,
    anyBuffer(pSupported),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetPhysicalDeviceSurfaceCapabilitiesKHR(
  physicalDevice: PhysicalDevice,
  surface: SurfaceKHR,
  pSurfaceCapabilities: AnyBuffer,
): Result {
  const ret = lib.vkGetPhysicalDeviceSurfaceCapabilitiesKHR(
    physicalDevice,
    surface,
    anyBuffer(pSurfaceCapabilities),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetPhysicalDeviceSurfaceFormatsKHR(
  physicalDevice: PhysicalDevice,
  surface: SurfaceKHR,
  pSurfaceFormatCount: AnyBuffer,
  pSurfaceFormats: AnyBuffer,
): Result {
  const ret = lib.vkGetPhysicalDeviceSurfaceFormatsKHR(
    physicalDevice,
    surface,
    anyBuffer(pSurfaceFormatCount),
    anyBuffer(pSurfaceFormats),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetPhysicalDeviceSurfacePresentModesKHR(
  physicalDevice: PhysicalDevice,
  surface: SurfaceKHR,
  pPresentModeCount: AnyBuffer,
  pPresentModes: AnyBuffer,
): Result {
  const ret = lib.vkGetPhysicalDeviceSurfacePresentModesKHR(
    physicalDevice,
    surface,
    anyBuffer(pPresentModeCount),
    anyBuffer(pPresentModes),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CreateSwapchainKHR(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pSwapchain: AnyBuffer,
): Result {
  const ret = lib.vkCreateSwapchainKHR(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pSwapchain),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroySwapchainKHR(
  device: Device,
  swapchain: SwapchainKHR,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroySwapchainKHR(
    device,
    swapchain,
    anyBuffer(pAllocator),
  );
}

export function GetSwapchainImagesKHR(
  device: Device,
  swapchain: SwapchainKHR,
  pSwapchainImageCount: AnyBuffer,
  pSwapchainImages: AnyBuffer,
): Result {
  const ret = lib.vkGetSwapchainImagesKHR(
    device,
    swapchain,
    anyBuffer(pSwapchainImageCount),
    anyBuffer(pSwapchainImages),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function AcquireNextImageKHR(
  device: Device,
  swapchain: SwapchainKHR,
  timeout: number | bigint,
  semaphore: Semaphore,
  fence: Fence,
  pImageIndex: AnyBuffer,
): Result {
  const ret = lib.vkAcquireNextImageKHR(
    device,
    swapchain,
    timeout,
    semaphore,
    fence,
    anyBuffer(pImageIndex),
  );
  if (ret === Result.SUCCESS || ret === Result.TIMEOUT || ret === Result.NOT_READY || ret === Result.SUBOPTIMAL_KHR) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function QueuePresentKHR(
  queue: Queue,
  pPresentInfo: AnyBuffer,
): Result {
  const ret = lib.vkQueuePresentKHR(
    queue,
    anyBuffer(pPresentInfo),
  );
  if (ret === Result.SUCCESS || ret === Result.SUBOPTIMAL_KHR) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetPhysicalDeviceFeatures2(
  physicalDevice: PhysicalDevice,
  pFeatures: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceFeatures2(
    physicalDevice,
    anyBuffer(pFeatures),
  );
}

export function GetPhysicalDeviceProperties2(
  physicalDevice: PhysicalDevice,
  pProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceProperties2(
    physicalDevice,
    anyBuffer(pProperties),
  );
}

export function GetPhysicalDeviceFormatProperties2(
  physicalDevice: PhysicalDevice,
  format: Format,
  pFormatProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceFormatProperties2(
    physicalDevice,
    format,
    anyBuffer(pFormatProperties),
  );
}

export function GetPhysicalDeviceImageFormatProperties2(
  physicalDevice: PhysicalDevice,
  pImageFormatInfo: AnyBuffer,
  pImageFormatProperties: AnyBuffer,
): Result {
  const ret = lib.vkGetPhysicalDeviceImageFormatProperties2(
    physicalDevice,
    anyBuffer(pImageFormatInfo),
    anyBuffer(pImageFormatProperties),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetPhysicalDeviceQueueFamilyProperties2(
  physicalDevice: PhysicalDevice,
  pQueueFamilyPropertyCount: AnyBuffer,
  pQueueFamilyProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceQueueFamilyProperties2(
    physicalDevice,
    anyBuffer(pQueueFamilyPropertyCount),
    anyBuffer(pQueueFamilyProperties),
  );
}

export function GetPhysicalDeviceMemoryProperties2(
  physicalDevice: PhysicalDevice,
  pMemoryProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceMemoryProperties2(
    physicalDevice,
    anyBuffer(pMemoryProperties),
  );
}

export function GetPhysicalDeviceSparseImageFormatProperties2(
  physicalDevice: PhysicalDevice,
  pFormatInfo: AnyBuffer,
  pPropertyCount: AnyBuffer,
  pProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceSparseImageFormatProperties2(
    physicalDevice,
    anyBuffer(pFormatInfo),
    anyBuffer(pPropertyCount),
    anyBuffer(pProperties),
  );
}

export function TrimCommandPool(
  device: Device,
  commandPool: CommandPool,
  flags: CommandPoolTrimFlags,
): void {
  lib.vkTrimCommandPool(
    device,
    commandPool,
    flags,
  );
}

export function GetPhysicalDeviceExternalBufferProperties(
  physicalDevice: PhysicalDevice,
  pExternalBufferInfo: AnyBuffer,
  pExternalBufferProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceExternalBufferProperties(
    physicalDevice,
    anyBuffer(pExternalBufferInfo),
    anyBuffer(pExternalBufferProperties),
  );
}

export function GetPhysicalDeviceExternalSemaphoreProperties(
  physicalDevice: PhysicalDevice,
  pExternalSemaphoreInfo: AnyBuffer,
  pExternalSemaphoreProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceExternalSemaphoreProperties(
    physicalDevice,
    anyBuffer(pExternalSemaphoreInfo),
    anyBuffer(pExternalSemaphoreProperties),
  );
}

export function GetPhysicalDeviceExternalFenceProperties(
  physicalDevice: PhysicalDevice,
  pExternalFenceInfo: AnyBuffer,
  pExternalFenceProperties: AnyBuffer,
): void {
  lib.vkGetPhysicalDeviceExternalFenceProperties(
    physicalDevice,
    anyBuffer(pExternalFenceInfo),
    anyBuffer(pExternalFenceProperties),
  );
}

export function EnumeratePhysicalDeviceGroups(
  instance: Instance,
  pPhysicalDeviceGroupCount: AnyBuffer,
  pPhysicalDeviceGroupProperties: AnyBuffer,
): Result {
  const ret = lib.vkEnumeratePhysicalDeviceGroups(
    instance,
    anyBuffer(pPhysicalDeviceGroupCount),
    anyBuffer(pPhysicalDeviceGroupProperties),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetDeviceGroupPeerMemoryFeatures(
  device: Device,
  heapIndex: number,
  localDeviceIndex: number,
  remoteDeviceIndex: number,
  pPeerMemoryFeatures: AnyBuffer,
): void {
  lib.vkGetDeviceGroupPeerMemoryFeatures(
    device,
    heapIndex,
    localDeviceIndex,
    remoteDeviceIndex,
    anyBuffer(pPeerMemoryFeatures),
  );
}

export function BindBufferMemory2(
  device: Device,
  bindInfoCount: number,
  pBindInfos: AnyBuffer,
): Result {
  const ret = lib.vkBindBufferMemory2(
    device,
    bindInfoCount,
    anyBuffer(pBindInfos),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function BindImageMemory2(
  device: Device,
  bindInfoCount: number,
  pBindInfos: AnyBuffer,
): Result {
  const ret = lib.vkBindImageMemory2(
    device,
    bindInfoCount,
    anyBuffer(pBindInfos),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CmdSetDeviceMask(
  commandBuffer: CommandBuffer,
  deviceMask: number,
): void {
  lib.vkCmdSetDeviceMask(
    commandBuffer,
    deviceMask,
  );
}

export function CmdDispatchBase(
  commandBuffer: CommandBuffer,
  baseGroupX: number,
  baseGroupY: number,
  baseGroupZ: number,
  groupCountX: number,
  groupCountY: number,
  groupCountZ: number,
): void {
  lib.vkCmdDispatchBase(
    commandBuffer,
    baseGroupX,
    baseGroupY,
    baseGroupZ,
    groupCountX,
    groupCountY,
    groupCountZ,
  );
}

export function CreateDescriptorUpdateTemplate(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pDescriptorUpdateTemplate: AnyBuffer,
): Result {
  const ret = lib.vkCreateDescriptorUpdateTemplate(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pDescriptorUpdateTemplate),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyDescriptorUpdateTemplate(
  device: Device,
  descriptorUpdateTemplate: DescriptorUpdateTemplate,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyDescriptorUpdateTemplate(
    device,
    descriptorUpdateTemplate,
    anyBuffer(pAllocator),
  );
}

export function UpdateDescriptorSetWithTemplate(
  device: Device,
  descriptorSet: DescriptorSet,
  descriptorUpdateTemplate: DescriptorUpdateTemplate,
  pData: AnyBuffer,
): void {
  lib.vkUpdateDescriptorSetWithTemplate(
    device,
    descriptorSet,
    descriptorUpdateTemplate,
    anyBuffer(pData),
  );
}

export function GetBufferMemoryRequirements2(
  device: Device,
  pInfo: AnyBuffer,
  pMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetBufferMemoryRequirements2(
    device,
    anyBuffer(pInfo),
    anyBuffer(pMemoryRequirements),
  );
}

export function GetImageMemoryRequirements2(
  device: Device,
  pInfo: AnyBuffer,
  pMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetImageMemoryRequirements2(
    device,
    anyBuffer(pInfo),
    anyBuffer(pMemoryRequirements),
  );
}

export function GetImageSparseMemoryRequirements2(
  device: Device,
  pInfo: AnyBuffer,
  pSparseMemoryRequirementCount: AnyBuffer,
  pSparseMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetImageSparseMemoryRequirements2(
    device,
    anyBuffer(pInfo),
    anyBuffer(pSparseMemoryRequirementCount),
    anyBuffer(pSparseMemoryRequirements),
  );
}

export function GetDeviceBufferMemoryRequirements(
  device: Device,
  pInfo: AnyBuffer,
  pMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetDeviceBufferMemoryRequirements(
    device,
    anyBuffer(pInfo),
    anyBuffer(pMemoryRequirements),
  );
}

export function GetDeviceImageMemoryRequirements(
  device: Device,
  pInfo: AnyBuffer,
  pMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetDeviceImageMemoryRequirements(
    device,
    anyBuffer(pInfo),
    anyBuffer(pMemoryRequirements),
  );
}

export function GetDeviceImageSparseMemoryRequirements(
  device: Device,
  pInfo: AnyBuffer,
  pSparseMemoryRequirementCount: AnyBuffer,
  pSparseMemoryRequirements: AnyBuffer,
): void {
  lib.vkGetDeviceImageSparseMemoryRequirements(
    device,
    anyBuffer(pInfo),
    anyBuffer(pSparseMemoryRequirementCount),
    anyBuffer(pSparseMemoryRequirements),
  );
}

export function CreateSamplerYcbcrConversion(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pYcbcrConversion: AnyBuffer,
): Result {
  const ret = lib.vkCreateSamplerYcbcrConversion(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pYcbcrConversion),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroySamplerYcbcrConversion(
  device: Device,
  ycbcrConversion: SamplerYcbcrConversion,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroySamplerYcbcrConversion(
    device,
    ycbcrConversion,
    anyBuffer(pAllocator),
  );
}

export function GetDeviceQueue2(
  device: Device,
  pQueueInfo: AnyBuffer,
  pQueue: AnyBuffer,
): void {
  lib.vkGetDeviceQueue2(
    device,
    anyBuffer(pQueueInfo),
    anyBuffer(pQueue),
  );
}

export function GetDescriptorSetLayoutSupport(
  device: Device,
  pCreateInfo: AnyBuffer,
  pSupport: AnyBuffer,
): void {
  lib.vkGetDescriptorSetLayoutSupport(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pSupport),
  );
}

export function CreateRenderPass2(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pRenderPass: AnyBuffer,
): Result {
  const ret = lib.vkCreateRenderPass2(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pRenderPass),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CmdBeginRenderPass2(
  commandBuffer: CommandBuffer,
  pRenderPassBegin: AnyBuffer,
  pSubpassBeginInfo: AnyBuffer,
): void {
  lib.vkCmdBeginRenderPass2(
    commandBuffer,
    anyBuffer(pRenderPassBegin),
    anyBuffer(pSubpassBeginInfo),
  );
}

export function CmdNextSubpass2(
  commandBuffer: CommandBuffer,
  pSubpassBeginInfo: AnyBuffer,
  pSubpassEndInfo: AnyBuffer,
): void {
  lib.vkCmdNextSubpass2(
    commandBuffer,
    anyBuffer(pSubpassBeginInfo),
    anyBuffer(pSubpassEndInfo),
  );
}

export function CmdEndRenderPass2(
  commandBuffer: CommandBuffer,
  pSubpassEndInfo: AnyBuffer,
): void {
  lib.vkCmdEndRenderPass2(
    commandBuffer,
    anyBuffer(pSubpassEndInfo),
  );
}

export function GetSemaphoreCounterValue(
  device: Device,
  semaphore: Semaphore,
  pValue: AnyBuffer,
): Result {
  const ret = lib.vkGetSemaphoreCounterValue(
    device,
    semaphore,
    anyBuffer(pValue),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function WaitSemaphores(
  device: Device,
  pWaitInfo: AnyBuffer,
  timeout: number | bigint,
): Result {
  const ret = lib.vkWaitSemaphores(
    device,
    anyBuffer(pWaitInfo),
    timeout,
  );
  if (ret === Result.SUCCESS || ret === Result.TIMEOUT) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function SignalSemaphore(
  device: Device,
  pSignalInfo: AnyBuffer,
): Result {
  const ret = lib.vkSignalSemaphore(
    device,
    anyBuffer(pSignalInfo),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CmdDrawIndirectCount(
  commandBuffer: CommandBuffer,
  buffer: Buffer,
  offset: DeviceSize,
  countBuffer: Buffer,
  countBufferOffset: DeviceSize,
  maxDrawCount: number,
  stride: number,
): void {
  lib.vkCmdDrawIndirectCount(
    commandBuffer,
    buffer,
    offset,
    countBuffer,
    countBufferOffset,
    maxDrawCount,
    stride,
  );
}

export function CmdDrawIndexedIndirectCount(
  commandBuffer: CommandBuffer,
  buffer: Buffer,
  offset: DeviceSize,
  countBuffer: Buffer,
  countBufferOffset: DeviceSize,
  maxDrawCount: number,
  stride: number,
): void {
  lib.vkCmdDrawIndexedIndirectCount(
    commandBuffer,
    buffer,
    offset,
    countBuffer,
    countBufferOffset,
    maxDrawCount,
    stride,
  );
}

export function GetBufferOpaqueCaptureAddress(
  device: Device,
  pInfo: AnyBuffer,
): number | bigint {
  const ret = lib.vkGetBufferOpaqueCaptureAddress(
    device,
    anyBuffer(pInfo),
  );
  return ret;
}

export function GetBufferDeviceAddress(
  device: Device,
  pInfo: AnyBuffer,
): DeviceAddress {
  const ret = lib.vkGetBufferDeviceAddress(
    device,
    anyBuffer(pInfo),
  );
  return ret;
}

export function GetDeviceMemoryOpaqueCaptureAddress(
  device: Device,
  pInfo: AnyBuffer,
): number | bigint {
  const ret = lib.vkGetDeviceMemoryOpaqueCaptureAddress(
    device,
    anyBuffer(pInfo),
  );
  return ret;
}

export function GetPhysicalDeviceToolProperties(
  physicalDevice: PhysicalDevice,
  pToolCount: AnyBuffer,
  pToolProperties: AnyBuffer,
): Result {
  const ret = lib.vkGetPhysicalDeviceToolProperties(
    physicalDevice,
    anyBuffer(pToolCount),
    anyBuffer(pToolProperties),
  );
  if (ret === Result.SUCCESS || ret === Result.INCOMPLETE) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CmdSetCullMode(
  commandBuffer: CommandBuffer,
  cullMode: CullModeFlags,
): void {
  lib.vkCmdSetCullMode(
    commandBuffer,
    cullMode,
  );
}

export function CmdSetFrontFace(
  commandBuffer: CommandBuffer,
  frontFace: FrontFace,
): void {
  lib.vkCmdSetFrontFace(
    commandBuffer,
    frontFace,
  );
}

export function CmdSetPrimitiveTopology(
  commandBuffer: CommandBuffer,
  primitiveTopology: PrimitiveTopology,
): void {
  lib.vkCmdSetPrimitiveTopology(
    commandBuffer,
    primitiveTopology,
  );
}

export function CmdSetViewportWithCount(
  commandBuffer: CommandBuffer,
  viewportCount: number,
  pViewports: AnyBuffer,
): void {
  lib.vkCmdSetViewportWithCount(
    commandBuffer,
    viewportCount,
    anyBuffer(pViewports),
  );
}

export function CmdSetScissorWithCount(
  commandBuffer: CommandBuffer,
  scissorCount: number,
  pScissors: AnyBuffer,
): void {
  lib.vkCmdSetScissorWithCount(
    commandBuffer,
    scissorCount,
    anyBuffer(pScissors),
  );
}

export function CmdBindVertexBuffers2(
  commandBuffer: CommandBuffer,
  firstBinding: number,
  bindingCount: number,
  pBuffers: AnyBuffer,
  pOffsets: AnyBuffer,
  pSizes: AnyBuffer,
  pStrides: AnyBuffer,
): void {
  lib.vkCmdBindVertexBuffers2(
    commandBuffer,
    firstBinding,
    bindingCount,
    anyBuffer(pBuffers),
    anyBuffer(pOffsets),
    anyBuffer(pSizes),
    anyBuffer(pStrides),
  );
}

export function CmdSetDepthTestEnable(
  commandBuffer: CommandBuffer,
  depthTestEnable: Bool32,
): void {
  lib.vkCmdSetDepthTestEnable(
    commandBuffer,
    depthTestEnable,
  );
}

export function CmdSetDepthWriteEnable(
  commandBuffer: CommandBuffer,
  depthWriteEnable: Bool32,
): void {
  lib.vkCmdSetDepthWriteEnable(
    commandBuffer,
    depthWriteEnable,
  );
}

export function CmdSetDepthCompareOp(
  commandBuffer: CommandBuffer,
  depthCompareOp: CompareOp,
): void {
  lib.vkCmdSetDepthCompareOp(
    commandBuffer,
    depthCompareOp,
  );
}

export function CmdSetDepthBoundsTestEnable(
  commandBuffer: CommandBuffer,
  depthBoundsTestEnable: Bool32,
): void {
  lib.vkCmdSetDepthBoundsTestEnable(
    commandBuffer,
    depthBoundsTestEnable,
  );
}

export function CmdSetStencilTestEnable(
  commandBuffer: CommandBuffer,
  stencilTestEnable: Bool32,
): void {
  lib.vkCmdSetStencilTestEnable(
    commandBuffer,
    stencilTestEnable,
  );
}

export function CmdSetStencilOp(
  commandBuffer: CommandBuffer,
  faceMask: StencilFaceFlags,
  failOp: StencilOp,
  passOp: StencilOp,
  depthFailOp: StencilOp,
  compareOp: CompareOp,
): void {
  lib.vkCmdSetStencilOp(
    commandBuffer,
    faceMask,
    failOp,
    passOp,
    depthFailOp,
    compareOp,
  );
}

export function CmdSetRasterizerDiscardEnable(
  commandBuffer: CommandBuffer,
  rasterizerDiscardEnable: Bool32,
): void {
  lib.vkCmdSetRasterizerDiscardEnable(
    commandBuffer,
    rasterizerDiscardEnable,
  );
}

export function CmdSetDepthBiasEnable(
  commandBuffer: CommandBuffer,
  depthBiasEnable: Bool32,
): void {
  lib.vkCmdSetDepthBiasEnable(
    commandBuffer,
    depthBiasEnable,
  );
}

export function CmdSetPrimitiveRestartEnable(
  commandBuffer: CommandBuffer,
  primitiveRestartEnable: Bool32,
): void {
  lib.vkCmdSetPrimitiveRestartEnable(
    commandBuffer,
    primitiveRestartEnable,
  );
}

export function CreatePrivateDataSlot(
  device: Device,
  pCreateInfo: AnyBuffer,
  pAllocator: AnyBuffer,
  pPrivateDataSlot: AnyBuffer,
): Result {
  const ret = lib.vkCreatePrivateDataSlot(
    device,
    anyBuffer(pCreateInfo),
    anyBuffer(pAllocator),
    anyBuffer(pPrivateDataSlot),
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function DestroyPrivateDataSlot(
  device: Device,
  privateDataSlot: PrivateDataSlot,
  pAllocator: AnyBuffer,
): void {
  lib.vkDestroyPrivateDataSlot(
    device,
    privateDataSlot,
    anyBuffer(pAllocator),
  );
}

export function SetPrivateData(
  device: Device,
  objectType: ObjectType,
  objectHandle: number | bigint,
  privateDataSlot: PrivateDataSlot,
  data: number | bigint,
): Result {
  const ret = lib.vkSetPrivateData(
    device,
    objectType,
    objectHandle,
    privateDataSlot,
    data,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function GetPrivateData(
  device: Device,
  objectType: ObjectType,
  objectHandle: number | bigint,
  privateDataSlot: PrivateDataSlot,
  pData: AnyBuffer,
): void {
  lib.vkGetPrivateData(
    device,
    objectType,
    objectHandle,
    privateDataSlot,
    anyBuffer(pData),
  );
}

export function CmdCopyBuffer2(
  commandBuffer: CommandBuffer,
  pCopyBufferInfo: AnyBuffer,
): void {
  lib.vkCmdCopyBuffer2(
    commandBuffer,
    anyBuffer(pCopyBufferInfo),
  );
}

export function CmdCopyImage2(
  commandBuffer: CommandBuffer,
  pCopyImageInfo: AnyBuffer,
): void {
  lib.vkCmdCopyImage2(
    commandBuffer,
    anyBuffer(pCopyImageInfo),
  );
}

export function CmdBlitImage2(
  commandBuffer: CommandBuffer,
  pBlitImageInfo: AnyBuffer,
): void {
  lib.vkCmdBlitImage2(
    commandBuffer,
    anyBuffer(pBlitImageInfo),
  );
}

export function CmdCopyBufferToImage2(
  commandBuffer: CommandBuffer,
  pCopyBufferToImageInfo: AnyBuffer,
): void {
  lib.vkCmdCopyBufferToImage2(
    commandBuffer,
    anyBuffer(pCopyBufferToImageInfo),
  );
}

export function CmdCopyImageToBuffer2(
  commandBuffer: CommandBuffer,
  pCopyImageToBufferInfo: AnyBuffer,
): void {
  lib.vkCmdCopyImageToBuffer2(
    commandBuffer,
    anyBuffer(pCopyImageToBufferInfo),
  );
}

export function CmdResolveImage2(
  commandBuffer: CommandBuffer,
  pResolveImageInfo: AnyBuffer,
): void {
  lib.vkCmdResolveImage2(
    commandBuffer,
    anyBuffer(pResolveImageInfo),
  );
}

export function CmdSetEvent2(
  commandBuffer: CommandBuffer,
  event: Event,
  pDependencyInfo: AnyBuffer,
): void {
  lib.vkCmdSetEvent2(
    commandBuffer,
    event,
    anyBuffer(pDependencyInfo),
  );
}

export function CmdResetEvent2(
  commandBuffer: CommandBuffer,
  event: Event,
  stageMask: PipelineStageFlags2,
): void {
  lib.vkCmdResetEvent2(
    commandBuffer,
    event,
    stageMask,
  );
}

export function CmdWaitEvents2(
  commandBuffer: CommandBuffer,
  eventCount: number,
  pEvents: AnyBuffer,
  pDependencyInfos: AnyBuffer,
): void {
  lib.vkCmdWaitEvents2(
    commandBuffer,
    eventCount,
    anyBuffer(pEvents),
    anyBuffer(pDependencyInfos),
  );
}

export function CmdPipelineBarrier2(
  commandBuffer: CommandBuffer,
  pDependencyInfo: AnyBuffer,
): void {
  lib.vkCmdPipelineBarrier2(
    commandBuffer,
    anyBuffer(pDependencyInfo),
  );
}

export function QueueSubmit2(
  queue: Queue,
  submitCount: number,
  pSubmits: AnyBuffer,
  fence: Fence,
): Result {
  const ret = lib.vkQueueSubmit2(
    queue,
    submitCount,
    anyBuffer(pSubmits),
    fence,
  );
  if (ret === Result.SUCCESS) {
    return ret;
  } else {
    throw new VulkanError(ret as Result);
  }
}

export function CmdWriteTimestamp2(
  commandBuffer: CommandBuffer,
  stage: PipelineStageFlags2,
  queryPool: QueryPool,
  query: number,
): void {
  lib.vkCmdWriteTimestamp2(
    commandBuffer,
    stage,
    queryPool,
    query,
  );
}

export function CmdBeginRendering(
  commandBuffer: CommandBuffer,
  pRenderingInfo: AnyBuffer,
): void {
  lib.vkCmdBeginRendering(
    commandBuffer,
    anyBuffer(pRenderingInfo),
  );
}

export function CmdEndRendering(
  commandBuffer: CommandBuffer,
): void {
  lib.vkCmdEndRendering(
    commandBuffer,
  );
}