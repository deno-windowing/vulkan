/// Type definitions

export type MTLDevice_id = Deno.PointerValue;

export type MTLCommandQueue_id = Deno.PointerValue;

export type MTLBuffer_id = Deno.PointerValue;

export type MTLTexture_id = Deno.PointerValue;

export type MTLSharedEvent_id = Deno.PointerValue;

export type IOSurfaceRef = Deno.PointerValue;

export type SampleMask = number;

export type Bool32 = number;

export type Flags = number;

export type Flags64 = number | bigint;

export type DeviceSize = number | bigint;

export type DeviceAddress = number | bigint;

export type FramebufferCreateFlags = Flags;

export type QueryPoolCreateFlags = Flags;

export type RenderPassCreateFlags = Flags;

export type SamplerCreateFlags = Flags;

export type PipelineLayoutCreateFlags = Flags;

export type PipelineCacheCreateFlags = Flags;

export type PipelineDepthStencilStateCreateFlags = Flags;

export type PipelineDynamicStateCreateFlags = Flags;

export type PipelineColorBlendStateCreateFlags = Flags;

export type PipelineMultisampleStateCreateFlags = Flags;

export type PipelineRasterizationStateCreateFlags = Flags;

export type PipelineViewportStateCreateFlags = Flags;

export type PipelineTessellationStateCreateFlags = Flags;

export type PipelineInputAssemblyStateCreateFlags = Flags;

export type PipelineVertexInputStateCreateFlags = Flags;

export type PipelineShaderStageCreateFlags = Flags;

export type DescriptorSetLayoutCreateFlags = Flags;

export type BufferViewCreateFlags = Flags;

export type InstanceCreateFlags = Flags;

export type DeviceCreateFlags = Flags;

export type DeviceQueueCreateFlags = Flags;

export type QueueFlags = Flags;

export type MemoryPropertyFlags = Flags;

export type MemoryHeapFlags = Flags;

export type AccessFlags = Flags;

export type BufferUsageFlags = Flags;

export type BufferCreateFlags = Flags;

export type ShaderStageFlags = Flags;

export type ImageUsageFlags = Flags;

export type ImageCreateFlags = Flags;

export type ImageViewCreateFlags = Flags;

export type PipelineCreateFlags = Flags;

export type ColorComponentFlags = Flags;

export type FenceCreateFlags = Flags;

export type SemaphoreCreateFlags = Flags;

export type FormatFeatureFlags = Flags;

export type QueryControlFlags = Flags;

export type QueryResultFlags = Flags;

export type ShaderModuleCreateFlags = Flags;

export type EventCreateFlags = Flags;

export type CommandPoolCreateFlags = Flags;

export type CommandPoolResetFlags = Flags;

export type CommandBufferResetFlags = Flags;

export type CommandBufferUsageFlags = Flags;

export type QueryPipelineStatisticFlags = Flags;

export type MemoryMapFlags = Flags;

export type ImageAspectFlags = Flags;

export type SparseMemoryBindFlags = Flags;

export type SparseImageFormatFlags = Flags;

export type SubpassDescriptionFlags = Flags;

export type PipelineStageFlags = Flags;

export type SampleCountFlags = Flags;

export type AttachmentDescriptionFlags = Flags;

export type StencilFaceFlags = Flags;

export type CullModeFlags = Flags;

export type DescriptorPoolCreateFlags = Flags;

export type DescriptorPoolResetFlags = Flags;

export type DependencyFlags = Flags;

export type SubgroupFeatureFlags = Flags;

export type IndirectCommandsLayoutUsageFlagsNV = Flags;

export type IndirectStateFlagsNV = Flags;

export type GeometryFlagsKHR = Flags;

export type GeometryInstanceFlagsKHR = Flags;

export type BuildAccelerationStructureFlagsKHR = Flags;

export type PrivateDataSlotCreateFlags = Flags;

export type AccelerationStructureCreateFlagsKHR = Flags;

export type DescriptorUpdateTemplateCreateFlags = Flags;

export type PipelineCreationFeedbackFlags = Flags;

export type PerformanceCounterDescriptionFlagsKHR = Flags;

export type AcquireProfilingLockFlagsKHR = Flags;

export type SemaphoreWaitFlags = Flags;

export type PipelineCompilerControlFlagsAMD = Flags;

export type ShaderCorePropertiesFlagsAMD = Flags;

export type DeviceDiagnosticsConfigFlagsNV = Flags;

export type AccessFlags2 = Flags64;

export type PipelineStageFlags2 = Flags64;

export type AccelerationStructureMotionInfoFlagsNV = Flags;

export type AccelerationStructureMotionInstanceFlagsNV = Flags;

export type FormatFeatureFlags2 = Flags64;

export type RenderingFlags = Flags;

export type MemoryDecompressionMethodFlagsNV = Flags64;

export type BuildMicromapFlagsEXT = Flags;

export type MicromapCreateFlagsEXT = Flags;

export type CompositeAlphaFlagsKHR = Flags;

export type DisplayPlaneAlphaFlagsKHR = Flags;

export type SurfaceTransformFlagsKHR = Flags;

export type SwapchainCreateFlagsKHR = Flags;

export type DisplayModeCreateFlagsKHR = Flags;

export type DisplaySurfaceCreateFlagsKHR = Flags;

export type AndroidSurfaceCreateFlagsKHR = Flags;

export type ViSurfaceCreateFlagsNN = Flags;

export type WaylandSurfaceCreateFlagsKHR = Flags;

export type Win32SurfaceCreateFlagsKHR = Flags;

export type XlibSurfaceCreateFlagsKHR = Flags;

export type XcbSurfaceCreateFlagsKHR = Flags;

export type DirectFBSurfaceCreateFlagsEXT = Flags;

export type IOSSurfaceCreateFlagsMVK = Flags;

export type MacOSSurfaceCreateFlagsMVK = Flags;

export type MetalSurfaceCreateFlagsEXT = Flags;

export type ImagePipeSurfaceCreateFlagsFUCHSIA = Flags;

export type StreamDescriptorSurfaceCreateFlagsGGP = Flags;

export type HeadlessSurfaceCreateFlagsEXT = Flags;

export type ScreenSurfaceCreateFlagsQNX = Flags;

export type PeerMemoryFeatureFlags = Flags;

export type MemoryAllocateFlags = Flags;

export type DeviceGroupPresentModeFlagsKHR = Flags;

export type DebugReportFlagsEXT = Flags;

export type CommandPoolTrimFlags = Flags;

export type ExternalMemoryHandleTypeFlagsNV = Flags;

export type ExternalMemoryFeatureFlagsNV = Flags;

export type ExternalMemoryHandleTypeFlags = Flags;

export type ExternalMemoryFeatureFlags = Flags;

export type ExternalSemaphoreHandleTypeFlags = Flags;

export type ExternalSemaphoreFeatureFlags = Flags;

export type SemaphoreImportFlags = Flags;

export type ExternalFenceHandleTypeFlags = Flags;

export type ExternalFenceFeatureFlags = Flags;

export type FenceImportFlags = Flags;

export type SurfaceCounterFlagsEXT = Flags;

export type PipelineViewportSwizzleStateCreateFlagsNV = Flags;

export type PipelineDiscardRectangleStateCreateFlagsEXT = Flags;

export type PipelineCoverageToColorStateCreateFlagsNV = Flags;

export type PipelineCoverageModulationStateCreateFlagsNV = Flags;

export type PipelineCoverageReductionStateCreateFlagsNV = Flags;

export type ValidationCacheCreateFlagsEXT = Flags;

export type DebugUtilsMessageSeverityFlagsEXT = Flags;

export type DebugUtilsMessageTypeFlagsEXT = Flags;

export type DebugUtilsMessengerCreateFlagsEXT = Flags;

export type DebugUtilsMessengerCallbackDataFlagsEXT = Flags;

export type DeviceMemoryReportFlagsEXT = Flags;

export type PipelineRasterizationConservativeStateCreateFlagsEXT = Flags;

export type DescriptorBindingFlags = Flags;

export type ConditionalRenderingFlagsEXT = Flags;

export type ResolveModeFlags = Flags;

export type PipelineRasterizationStateStreamCreateFlagsEXT = Flags;

export type PipelineRasterizationDepthClipStateCreateFlagsEXT = Flags;

export type SwapchainImageUsageFlagsANDROID = Flags;

export type ToolPurposeFlags = Flags;

export type SubmitFlags = Flags;

export type ImageFormatConstraintsFlagsFUCHSIA = Flags;

export type ImageConstraintsInfoFlagsFUCHSIA = Flags;

export type GraphicsPipelineLibraryFlagsEXT = Flags;

export type ImageCompressionFlagsEXT = Flags;

export type ImageCompressionFixedRateFlagsEXT = Flags;

export type ExportMetalObjectTypeFlagsEXT = Flags;

export type DeviceAddressBindingFlagsEXT = Flags;

export type OpticalFlowGridSizeFlagsNV = Flags;

export type OpticalFlowUsageFlagsNV = Flags;

export type OpticalFlowSessionCreateFlagsNV = Flags;

export type OpticalFlowExecuteFlagsNV = Flags;

export type VideoCodecOperationFlagsKHR = Flags;

export type VideoCapabilityFlagsKHR = Flags;

export type VideoSessionCreateFlagsKHR = Flags;

export type VideoSessionParametersCreateFlagsKHR = Flags;

export type VideoBeginCodingFlagsKHR = Flags;

export type VideoEndCodingFlagsKHR = Flags;

export type VideoCodingControlFlagsKHR = Flags;

export type VideoDecodeUsageFlagsKHR = Flags;

export type VideoDecodeCapabilityFlagsKHR = Flags;

export type VideoDecodeFlagsKHR = Flags;

export type VideoDecodeH264PictureLayoutFlagsEXT = Flags;

export type VideoEncodeFlagsKHR = Flags;

export type VideoEncodeUsageFlagsKHR = Flags;

export type VideoEncodeContentFlagsKHR = Flags;

export type VideoEncodeCapabilityFlagsKHR = Flags;

export type VideoEncodeRateControlFlagsKHR = Flags;

export type VideoEncodeRateControlModeFlagsKHR = Flags;

export type VideoChromaSubsamplingFlagsKHR = Flags;

export type VideoComponentBitDepthFlagsKHR = Flags;

export type VideoEncodeH264CapabilityFlagsEXT = Flags;

export type VideoEncodeH264InputModeFlagsEXT = Flags;

export type VideoEncodeH264OutputModeFlagsEXT = Flags;

export type VideoEncodeH265CapabilityFlagsEXT = Flags;

export type VideoEncodeH265InputModeFlagsEXT = Flags;

export type VideoEncodeH265OutputModeFlagsEXT = Flags;

export type VideoEncodeH265CtbSizeFlagsEXT = Flags;

export type VideoEncodeH265TransformBlockSizeFlagsEXT = Flags;

export type Instance = Deno.PointerValue;

export type PhysicalDevice = Deno.PointerValue;

export type Device = Deno.PointerValue;

export type Queue = Deno.PointerValue;

export type CommandBuffer = Deno.PointerValue;

export type DeviceMemory = Deno.PointerValue;

export type CommandPool = Deno.PointerValue;

export type Buffer = Deno.PointerValue;

export type BufferView = Deno.PointerValue;

export type Image = Deno.PointerValue;

export type ImageView = Deno.PointerValue;

export type ShaderModule = Deno.PointerValue;

export type Pipeline = Deno.PointerValue;

export type PipelineLayout = Deno.PointerValue;

export type Sampler = Deno.PointerValue;

export type DescriptorSet = Deno.PointerValue;

export type DescriptorSetLayout = Deno.PointerValue;

export type DescriptorPool = Deno.PointerValue;

export type Fence = Deno.PointerValue;

export type Semaphore = Deno.PointerValue;

export type Event = Deno.PointerValue;

export type QueryPool = Deno.PointerValue;

export type Framebuffer = Deno.PointerValue;

export type RenderPass = Deno.PointerValue;

export type PipelineCache = Deno.PointerValue;

export type IndirectCommandsLayoutNV = Deno.PointerValue;

export type DescriptorUpdateTemplate = Deno.PointerValue;

export type DescriptorUpdateTemplateKHR = DescriptorUpdateTemplate;

export type SamplerYcbcrConversion = Deno.PointerValue;

export type SamplerYcbcrConversionKHR = SamplerYcbcrConversion;

export type ValidationCacheEXT = Deno.PointerValue;

export type AccelerationStructureKHR = Deno.PointerValue;

export type AccelerationStructureNV = Deno.PointerValue;

export type PerformanceConfigurationINTEL = Deno.PointerValue;

export type BufferCollectionFUCHSIA = Deno.PointerValue;

export type DeferredOperationKHR = Deno.PointerValue;

export type PrivateDataSlot = Deno.PointerValue;

export type PrivateDataSlotEXT = PrivateDataSlot;

export type CuModuleNVX = Deno.PointerValue;

export type CuFunctionNVX = Deno.PointerValue;

export type OpticalFlowSessionNV = Deno.PointerValue;

export type MicromapEXT = Deno.PointerValue;

export type DisplayKHR = Deno.PointerValue;

export type DisplayModeKHR = Deno.PointerValue;

export type SurfaceKHR = Deno.PointerValue;

export type SwapchainKHR = Deno.PointerValue;

export type DebugReportCallbackEXT = Deno.PointerValue;

export type DebugUtilsMessengerEXT = Deno.PointerValue;

export type VideoSessionKHR = Deno.PointerValue;

export type VideoSessionParametersKHR = Deno.PointerValue;

export type GeometryFlagsNV = GeometryFlagsKHR;

export type GeometryInstanceFlagsNV = GeometryInstanceFlagsKHR;

export type BuildAccelerationStructureFlagsNV = BuildAccelerationStructureFlagsKHR;

export type PrivateDataSlotCreateFlagsEXT = PrivateDataSlotCreateFlags;

export type DescriptorUpdateTemplateCreateFlagsKHR = DescriptorUpdateTemplateCreateFlags;

export type PipelineCreationFeedbackFlagsEXT = PipelineCreationFeedbackFlags;

export type SemaphoreWaitFlagsKHR = SemaphoreWaitFlags;

export type AccessFlags2KHR = AccessFlags2;

export type PipelineStageFlags2KHR = PipelineStageFlags2;

export type FormatFeatureFlags2KHR = FormatFeatureFlags2;

export type RenderingFlagsKHR = RenderingFlags;

export type PeerMemoryFeatureFlagsKHR = PeerMemoryFeatureFlags;

export type MemoryAllocateFlagsKHR = MemoryAllocateFlags;

export type CommandPoolTrimFlagsKHR = CommandPoolTrimFlags;

export type ExternalMemoryHandleTypeFlagsKHR = ExternalMemoryHandleTypeFlags;

export type ExternalMemoryFeatureFlagsKHR = ExternalMemoryFeatureFlags;

export type ExternalSemaphoreHandleTypeFlagsKHR = ExternalSemaphoreHandleTypeFlags;

export type ExternalSemaphoreFeatureFlagsKHR = ExternalSemaphoreFeatureFlags;

export type SemaphoreImportFlagsKHR = SemaphoreImportFlags;

export type ExternalFenceHandleTypeFlagsKHR = ExternalFenceHandleTypeFlags;

export type ExternalFenceFeatureFlagsKHR = ExternalFenceFeatureFlags;

export type FenceImportFlagsKHR = FenceImportFlags;

export type DescriptorBindingFlagsEXT = DescriptorBindingFlags;

export type ResolveModeFlagsKHR = ResolveModeFlags;

export type ToolPurposeFlagsEXT = ToolPurposeFlags;

export type SubmitFlagsKHR = SubmitFlags;