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

import {DevicePrivateDataCreateInfo} from "./struct/DevicePrivateDataCreateInfo.ts";
import {PrivateDataSlotCreateInfo} from "./struct/PrivateDataSlotCreateInfo.ts";
import {PhysicalDevicePrivateDataFeatures} from "./struct/PhysicalDevicePrivateDataFeatures.ts";
import {PhysicalDeviceFeatures2} from "./struct/PhysicalDeviceFeatures2.ts";
import {PhysicalDeviceProperties2} from "./struct/PhysicalDeviceProperties2.ts";
import {FormatProperties2} from "./struct/FormatProperties2.ts";
import {ImageFormatProperties2} from "./struct/ImageFormatProperties2.ts";
import {PhysicalDeviceImageFormatInfo2} from "./struct/PhysicalDeviceImageFormatInfo2.ts";
import {QueueFamilyProperties2} from "./struct/QueueFamilyProperties2.ts";
import {PhysicalDeviceMemoryProperties2} from "./struct/PhysicalDeviceMemoryProperties2.ts";
import {SparseImageFormatProperties2} from "./struct/SparseImageFormatProperties2.ts";
import {PhysicalDeviceSparseImageFormatInfo2} from "./struct/PhysicalDeviceSparseImageFormatInfo2.ts";
import {ConformanceVersion} from "./struct/ConformanceVersion.ts";
import {PhysicalDeviceDriverProperties} from "./struct/PhysicalDeviceDriverProperties.ts";
import {PhysicalDeviceVariablePointersFeatures} from "./struct/PhysicalDeviceVariablePointersFeatures.ts";
import {ExternalMemoryProperties} from "./struct/ExternalMemoryProperties.ts";
import {PhysicalDeviceExternalImageFormatInfo} from "./struct/PhysicalDeviceExternalImageFormatInfo.ts";
import {ExternalImageFormatProperties} from "./struct/ExternalImageFormatProperties.ts";
import {PhysicalDeviceExternalBufferInfo} from "./struct/PhysicalDeviceExternalBufferInfo.ts";
import {ExternalBufferProperties} from "./struct/ExternalBufferProperties.ts";
import {PhysicalDeviceIDProperties} from "./struct/PhysicalDeviceIDProperties.ts";
import {ExternalMemoryImageCreateInfo} from "./struct/ExternalMemoryImageCreateInfo.ts";
import {ExternalMemoryBufferCreateInfo} from "./struct/ExternalMemoryBufferCreateInfo.ts";
import {ExportMemoryAllocateInfo} from "./struct/ExportMemoryAllocateInfo.ts";
import {PhysicalDeviceExternalSemaphoreInfo} from "./struct/PhysicalDeviceExternalSemaphoreInfo.ts";
import {ExternalSemaphoreProperties} from "./struct/ExternalSemaphoreProperties.ts";
import {ExportSemaphoreCreateInfo} from "./struct/ExportSemaphoreCreateInfo.ts";
import {PhysicalDeviceExternalFenceInfo} from "./struct/PhysicalDeviceExternalFenceInfo.ts";
import {ExternalFenceProperties} from "./struct/ExternalFenceProperties.ts";
import {ExportFenceCreateInfo} from "./struct/ExportFenceCreateInfo.ts";
import {PhysicalDeviceMultiviewFeatures} from "./struct/PhysicalDeviceMultiviewFeatures.ts";
import {PhysicalDeviceMultiviewProperties} from "./struct/PhysicalDeviceMultiviewProperties.ts";
import {RenderPassMultiviewCreateInfo} from "./struct/RenderPassMultiviewCreateInfo.ts";
import {PhysicalDeviceGroupProperties} from "./struct/PhysicalDeviceGroupProperties.ts";
import {MemoryAllocateFlagsInfo} from "./struct/MemoryAllocateFlagsInfo.ts";
import {BindBufferMemoryInfo} from "./struct/BindBufferMemoryInfo.ts";
import {BindBufferMemoryDeviceGroupInfo} from "./struct/BindBufferMemoryDeviceGroupInfo.ts";
import {BindImageMemoryInfo} from "./struct/BindImageMemoryInfo.ts";
import {BindImageMemoryDeviceGroupInfo} from "./struct/BindImageMemoryDeviceGroupInfo.ts";
import {DeviceGroupRenderPassBeginInfo} from "./struct/DeviceGroupRenderPassBeginInfo.ts";
import {DeviceGroupCommandBufferBeginInfo} from "./struct/DeviceGroupCommandBufferBeginInfo.ts";
import {DeviceGroupSubmitInfo} from "./struct/DeviceGroupSubmitInfo.ts";
import {DeviceGroupBindSparseInfo} from "./struct/DeviceGroupBindSparseInfo.ts";
import {DeviceGroupDeviceCreateInfo} from "./struct/DeviceGroupDeviceCreateInfo.ts";
import {DescriptorUpdateTemplateEntry} from "./struct/DescriptorUpdateTemplateEntry.ts";
import {DescriptorUpdateTemplateCreateInfo} from "./struct/DescriptorUpdateTemplateCreateInfo.ts";
import {InputAttachmentAspectReference} from "./struct/InputAttachmentAspectReference.ts";
import {RenderPassInputAttachmentAspectCreateInfo} from "./struct/RenderPassInputAttachmentAspectCreateInfo.ts";
import {PhysicalDevice16BitStorageFeatures} from "./struct/PhysicalDevice16BitStorageFeatures.ts";
import {PhysicalDeviceShaderSubgroupExtendedTypesFeatures} from "./struct/PhysicalDeviceShaderSubgroupExtendedTypesFeatures.ts";
import {BufferMemoryRequirementsInfo2} from "./struct/BufferMemoryRequirementsInfo2.ts";
import {DeviceBufferMemoryRequirements} from "./struct/DeviceBufferMemoryRequirements.ts";
import {ImageMemoryRequirementsInfo2} from "./struct/ImageMemoryRequirementsInfo2.ts";
import {ImageSparseMemoryRequirementsInfo2} from "./struct/ImageSparseMemoryRequirementsInfo2.ts";
import {DeviceImageMemoryRequirements} from "./struct/DeviceImageMemoryRequirements.ts";
import {MemoryRequirements2} from "./struct/MemoryRequirements2.ts";
import {SparseImageMemoryRequirements2} from "./struct/SparseImageMemoryRequirements2.ts";
import {PhysicalDevicePointClippingProperties} from "./struct/PhysicalDevicePointClippingProperties.ts";
import {MemoryDedicatedRequirements} from "./struct/MemoryDedicatedRequirements.ts";
import {MemoryDedicatedAllocateInfo} from "./struct/MemoryDedicatedAllocateInfo.ts";
import {ImageViewUsageCreateInfo} from "./struct/ImageViewUsageCreateInfo.ts";
import {PipelineTessellationDomainOriginStateCreateInfo} from "./struct/PipelineTessellationDomainOriginStateCreateInfo.ts";
import {SamplerYcbcrConversionInfo} from "./struct/SamplerYcbcrConversionInfo.ts";
import {SamplerYcbcrConversionCreateInfo} from "./struct/SamplerYcbcrConversionCreateInfo.ts";
import {BindImagePlaneMemoryInfo} from "./struct/BindImagePlaneMemoryInfo.ts";
import {ImagePlaneMemoryRequirementsInfo} from "./struct/ImagePlaneMemoryRequirementsInfo.ts";
import {PhysicalDeviceSamplerYcbcrConversionFeatures} from "./struct/PhysicalDeviceSamplerYcbcrConversionFeatures.ts";
import {SamplerYcbcrConversionImageFormatProperties} from "./struct/SamplerYcbcrConversionImageFormatProperties.ts";
import {PhysicalDeviceSamplerFilterMinmaxProperties} from "./struct/PhysicalDeviceSamplerFilterMinmaxProperties.ts";
import {SamplerReductionModeCreateInfo} from "./struct/SamplerReductionModeCreateInfo.ts";
import {PhysicalDeviceInlineUniformBlockFeatures} from "./struct/PhysicalDeviceInlineUniformBlockFeatures.ts";
import {PhysicalDeviceInlineUniformBlockProperties} from "./struct/PhysicalDeviceInlineUniformBlockProperties.ts";
import {WriteDescriptorSetInlineUniformBlock} from "./struct/WriteDescriptorSetInlineUniformBlock.ts";
import {DescriptorPoolInlineUniformBlockCreateInfo} from "./struct/DescriptorPoolInlineUniformBlockCreateInfo.ts";
import {ImageFormatListCreateInfo} from "./struct/ImageFormatListCreateInfo.ts";
import {PhysicalDeviceMaintenance3Properties} from "./struct/PhysicalDeviceMaintenance3Properties.ts";
import {PhysicalDeviceMaintenance4Features} from "./struct/PhysicalDeviceMaintenance4Features.ts";
import {PhysicalDeviceMaintenance4Properties} from "./struct/PhysicalDeviceMaintenance4Properties.ts";
import {DescriptorSetLayoutSupport} from "./struct/DescriptorSetLayoutSupport.ts";
import {PhysicalDeviceShaderDrawParametersFeatures} from "./struct/PhysicalDeviceShaderDrawParametersFeatures.ts";
import {PhysicalDeviceShaderFloat16Int8Features} from "./struct/PhysicalDeviceShaderFloat16Int8Features.ts";
import {PhysicalDeviceFloatControlsProperties} from "./struct/PhysicalDeviceFloatControlsProperties.ts";
import {PhysicalDeviceHostQueryResetFeatures} from "./struct/PhysicalDeviceHostQueryResetFeatures.ts";
import {DeviceQueueGlobalPriorityCreateInfoKHR} from "./struct/DeviceQueueGlobalPriorityCreateInfoKHR.ts";
import {PhysicalDeviceGlobalPriorityQueryFeaturesKHR} from "./struct/PhysicalDeviceGlobalPriorityQueryFeaturesKHR.ts";
import {QueueFamilyGlobalPriorityPropertiesKHR} from "./struct/QueueFamilyGlobalPriorityPropertiesKHR.ts";
import {PhysicalDeviceDescriptorIndexingFeatures} from "./struct/PhysicalDeviceDescriptorIndexingFeatures.ts";
import {PhysicalDeviceDescriptorIndexingProperties} from "./struct/PhysicalDeviceDescriptorIndexingProperties.ts";
import {DescriptorSetLayoutBindingFlagsCreateInfo} from "./struct/DescriptorSetLayoutBindingFlagsCreateInfo.ts";
import {DescriptorSetVariableDescriptorCountAllocateInfo} from "./struct/DescriptorSetVariableDescriptorCountAllocateInfo.ts";
import {DescriptorSetVariableDescriptorCountLayoutSupport} from "./struct/DescriptorSetVariableDescriptorCountLayoutSupport.ts";
import {AttachmentDescription2} from "./struct/AttachmentDescription2.ts";
import {AttachmentReference2} from "./struct/AttachmentReference2.ts";
import {SubpassDescription2} from "./struct/SubpassDescription2.ts";
import {SubpassDependency2} from "./struct/SubpassDependency2.ts";
import {RenderPassCreateInfo2} from "./struct/RenderPassCreateInfo2.ts";
import {SubpassBeginInfo} from "./struct/SubpassBeginInfo.ts";
import {SubpassEndInfo} from "./struct/SubpassEndInfo.ts";
import {PhysicalDeviceTimelineSemaphoreFeatures} from "./struct/PhysicalDeviceTimelineSemaphoreFeatures.ts";
import {PhysicalDeviceTimelineSemaphoreProperties} from "./struct/PhysicalDeviceTimelineSemaphoreProperties.ts";
import {SemaphoreTypeCreateInfo} from "./struct/SemaphoreTypeCreateInfo.ts";
import {TimelineSemaphoreSubmitInfo} from "./struct/TimelineSemaphoreSubmitInfo.ts";
import {SemaphoreWaitInfo} from "./struct/SemaphoreWaitInfo.ts";
import {SemaphoreSignalInfo} from "./struct/SemaphoreSignalInfo.ts";
import {PhysicalDevice8BitStorageFeatures} from "./struct/PhysicalDevice8BitStorageFeatures.ts";
import {PhysicalDeviceVulkanMemoryModelFeatures} from "./struct/PhysicalDeviceVulkanMemoryModelFeatures.ts";
import {PhysicalDeviceShaderAtomicInt64Features} from "./struct/PhysicalDeviceShaderAtomicInt64Features.ts";
import {PhysicalDeviceDepthStencilResolveProperties} from "./struct/PhysicalDeviceDepthStencilResolveProperties.ts";
import {SubpassDescriptionDepthStencilResolve} from "./struct/SubpassDescriptionDepthStencilResolve.ts";
import {PhysicalDeviceFragmentShaderBarycentricFeaturesKHR} from "./struct/PhysicalDeviceFragmentShaderBarycentricFeaturesKHR.ts";
import {ImageStencilUsageCreateInfo} from "./struct/ImageStencilUsageCreateInfo.ts";
import {PhysicalDeviceScalarBlockLayoutFeatures} from "./struct/PhysicalDeviceScalarBlockLayoutFeatures.ts";
import {PhysicalDeviceUniformBufferStandardLayoutFeatures} from "./struct/PhysicalDeviceUniformBufferStandardLayoutFeatures.ts";
import {PhysicalDeviceBufferDeviceAddressFeatures} from "./struct/PhysicalDeviceBufferDeviceAddressFeatures.ts";
import {PhysicalDeviceBufferDeviceAddressFeaturesEXT} from "./struct/PhysicalDeviceBufferDeviceAddressFeaturesEXT.ts";
import {BufferDeviceAddressInfo} from "./struct/BufferDeviceAddressInfo.ts";
import {BufferOpaqueCaptureAddressCreateInfo} from "./struct/BufferOpaqueCaptureAddressCreateInfo.ts";
import {PhysicalDeviceImagelessFramebufferFeatures} from "./struct/PhysicalDeviceImagelessFramebufferFeatures.ts";
import {FramebufferAttachmentsCreateInfo} from "./struct/FramebufferAttachmentsCreateInfo.ts";
import {FramebufferAttachmentImageInfo} from "./struct/FramebufferAttachmentImageInfo.ts";
import {RenderPassAttachmentBeginInfo} from "./struct/RenderPassAttachmentBeginInfo.ts";
import {PhysicalDeviceTextureCompressionASTCHDRFeatures} from "./struct/PhysicalDeviceTextureCompressionASTCHDRFeatures.ts";
import {PipelineCreationFeedback} from "./struct/PipelineCreationFeedback.ts";
import {PipelineCreationFeedbackCreateInfo} from "./struct/PipelineCreationFeedbackCreateInfo.ts";
import {QueryPoolPerformanceQueryCreateInfoINTEL} from "./struct/QueryPoolPerformanceQueryCreateInfoINTEL.ts";
import {PhysicalDeviceSeparateDepthStencilLayoutsFeatures} from "./struct/PhysicalDeviceSeparateDepthStencilLayoutsFeatures.ts";
import {AttachmentReferenceStencilLayout} from "./struct/AttachmentReferenceStencilLayout.ts";
import {AttachmentDescriptionStencilLayout} from "./struct/AttachmentDescriptionStencilLayout.ts";
import {PipelineInfoKHR} from "./struct/PipelineInfoKHR.ts";
import {PhysicalDeviceShaderDemoteToHelperInvocationFeatures} from "./struct/PhysicalDeviceShaderDemoteToHelperInvocationFeatures.ts";
import {PhysicalDeviceTexelBufferAlignmentProperties} from "./struct/PhysicalDeviceTexelBufferAlignmentProperties.ts";
import {PhysicalDeviceSubgroupSizeControlFeatures} from "./struct/PhysicalDeviceSubgroupSizeControlFeatures.ts";
import {PhysicalDeviceSubgroupSizeControlProperties} from "./struct/PhysicalDeviceSubgroupSizeControlProperties.ts";
import {PipelineShaderStageRequiredSubgroupSizeCreateInfo} from "./struct/PipelineShaderStageRequiredSubgroupSizeCreateInfo.ts";
import {MemoryOpaqueCaptureAddressAllocateInfo} from "./struct/MemoryOpaqueCaptureAddressAllocateInfo.ts";
import {DeviceMemoryOpaqueCaptureAddressInfo} from "./struct/DeviceMemoryOpaqueCaptureAddressInfo.ts";
import {PhysicalDevicePipelineCreationCacheControlFeatures} from "./struct/PhysicalDevicePipelineCreationCacheControlFeatures.ts";
import {PhysicalDeviceToolProperties} from "./struct/PhysicalDeviceToolProperties.ts";
import {AabbPositionsKHR} from "./struct/AabbPositionsKHR.ts";
import {TransformMatrixKHR} from "./struct/TransformMatrixKHR.ts";
import {AccelerationStructureInstanceKHR} from "./struct/AccelerationStructureInstanceKHR.ts";
import {PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures} from "./struct/PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures.ts";
import {PhysicalDeviceImageRobustnessFeatures} from "./struct/PhysicalDeviceImageRobustnessFeatures.ts";
import {BufferCopy2} from "./struct/BufferCopy2.ts";
import {ImageCopy2} from "./struct/ImageCopy2.ts";
import {ImageBlit2} from "./struct/ImageBlit2.ts";
import {BufferImageCopy2} from "./struct/BufferImageCopy2.ts";
import {ImageResolve2} from "./struct/ImageResolve2.ts";
import {CopyBufferInfo2} from "./struct/CopyBufferInfo2.ts";
import {CopyImageInfo2} from "./struct/CopyImageInfo2.ts";
import {BlitImageInfo2} from "./struct/BlitImageInfo2.ts";
import {CopyBufferToImageInfo2} from "./struct/CopyBufferToImageInfo2.ts";
import {CopyImageToBufferInfo2} from "./struct/CopyImageToBufferInfo2.ts";
import {ResolveImageInfo2} from "./struct/ResolveImageInfo2.ts";
import {PhysicalDeviceShaderTerminateInvocationFeatures} from "./struct/PhysicalDeviceShaderTerminateInvocationFeatures.ts";
import {PhysicalDeviceMutableDescriptorTypeFeaturesEXT} from "./struct/PhysicalDeviceMutableDescriptorTypeFeaturesEXT.ts";
import {MutableDescriptorTypeListEXT} from "./struct/MutableDescriptorTypeListEXT.ts";
import {MutableDescriptorTypeCreateInfoEXT} from "./struct/MutableDescriptorTypeCreateInfoEXT.ts";
import {MemoryBarrier2} from "./struct/MemoryBarrier2.ts";
import {ImageMemoryBarrier2} from "./struct/ImageMemoryBarrier2.ts";
import {BufferMemoryBarrier2} from "./struct/BufferMemoryBarrier2.ts";
import {DependencyInfo} from "./struct/DependencyInfo.ts";
import {SemaphoreSubmitInfo} from "./struct/SemaphoreSubmitInfo.ts";
import {CommandBufferSubmitInfo} from "./struct/CommandBufferSubmitInfo.ts";
import {SubmitInfo2} from "./struct/SubmitInfo2.ts";
import {PhysicalDeviceSynchronization2Features} from "./struct/PhysicalDeviceSynchronization2Features.ts";
import {PhysicalDeviceShaderIntegerDotProductFeatures} from "./struct/PhysicalDeviceShaderIntegerDotProductFeatures.ts";
import {PhysicalDeviceShaderIntegerDotProductProperties} from "./struct/PhysicalDeviceShaderIntegerDotProductProperties.ts";
import {FormatProperties3} from "./struct/FormatProperties3.ts";
import {PipelineRenderingCreateInfo} from "./struct/PipelineRenderingCreateInfo.ts";
import {RenderingInfo} from "./struct/RenderingInfo.ts";
import {RenderingAttachmentInfo} from "./struct/RenderingAttachmentInfo.ts";
import {PhysicalDeviceDynamicRenderingFeatures} from "./struct/PhysicalDeviceDynamicRenderingFeatures.ts";
import {CommandBufferInheritanceRenderingInfo} from "./struct/CommandBufferInheritanceRenderingInfo.ts";
import {AttachmentSampleCountInfoAMD} from "./struct/AttachmentSampleCountInfoAMD.ts";
import {PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT} from "./struct/PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT.ts";
import { PrivateDataSlotCreateFlagBits, DescriptorUpdateTemplateType, PointClippingBehavior, QueueGlobalPriorityKHR, ResolveModeFlagBits, DescriptorBindingFlagBits, SemaphoreType, GeometryFlagBitsKHR, GeometryInstanceFlagBitsKHR, BuildAccelerationStructureFlagBitsKHR, CopyAccelerationStructureModeKHR, AccelerationStructureTypeKHR, GeometryTypeKHR, RayTracingShaderGroupTypeKHR, PipelineCreationFeedbackFlagBits, SemaphoreWaitFlagBits, ToolPurposeFlagBits, AccessFlagBits2, PipelineStageFlagBits2, FormatFeatureFlagBits2, RenderingFlagBits, ExternalMemoryHandleTypeFlagBits, ExternalMemoryFeatureFlagBits, ExternalSemaphoreHandleTypeFlagBits, ExternalSemaphoreFeatureFlagBits, SemaphoreImportFlagBits, ExternalFenceHandleTypeFlagBits, ExternalFenceFeatureFlagBits, FenceImportFlagBits, PeerMemoryFeatureFlagBits, MemoryAllocateFlagBits, TessellationDomainOrigin, SamplerYcbcrModelConversion, SamplerYcbcrRange, ChromaLocation, SamplerReductionMode, ShaderFloatControlsIndependence, SubmitFlagBits, DriverId } from "./enum.ts";

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

export type PrivateDataSlotCreateFlagBitsEXT = PrivateDataSlotCreateFlagBits;

export type DescriptorUpdateTemplateTypeKHR = DescriptorUpdateTemplateType;

export type PointClippingBehaviorKHR = PointClippingBehavior;

export type QueueGlobalPriorityEXT = QueueGlobalPriorityKHR;

export type ResolveModeFlagBitsKHR = ResolveModeFlagBits;

export type DescriptorBindingFlagBitsEXT = DescriptorBindingFlagBits;

export type SemaphoreTypeKHR = SemaphoreType;

export type GeometryFlagBitsNV = GeometryFlagBitsKHR;

export type GeometryInstanceFlagBitsNV = GeometryInstanceFlagBitsKHR;

export type BuildAccelerationStructureFlagBitsNV = BuildAccelerationStructureFlagBitsKHR;

export type CopyAccelerationStructureModeNV = CopyAccelerationStructureModeKHR;

export type AccelerationStructureTypeNV = AccelerationStructureTypeKHR;

export type GeometryTypeNV = GeometryTypeKHR;

export type RayTracingShaderGroupTypeNV = RayTracingShaderGroupTypeKHR;

export type PipelineCreationFeedbackFlagBitsEXT = PipelineCreationFeedbackFlagBits;

export type SemaphoreWaitFlagBitsKHR = SemaphoreWaitFlagBits;

export type ToolPurposeFlagBitsEXT = ToolPurposeFlagBits;

export type AccessFlagBits2KHR = AccessFlagBits2;

export type PipelineStageFlagBits2KHR = PipelineStageFlagBits2;

export type FormatFeatureFlagBits2KHR = FormatFeatureFlagBits2;

export type RenderingFlagBitsKHR = RenderingFlagBits;

export type ExternalMemoryHandleTypeFlagBitsKHR = ExternalMemoryHandleTypeFlagBits;

export type ExternalMemoryFeatureFlagBitsKHR = ExternalMemoryFeatureFlagBits;

export type ExternalSemaphoreHandleTypeFlagBitsKHR = ExternalSemaphoreHandleTypeFlagBits;

export type ExternalSemaphoreFeatureFlagBitsKHR = ExternalSemaphoreFeatureFlagBits;

export type SemaphoreImportFlagBitsKHR = SemaphoreImportFlagBits;

export type ExternalFenceHandleTypeFlagBitsKHR = ExternalFenceHandleTypeFlagBits;

export type ExternalFenceFeatureFlagBitsKHR = ExternalFenceFeatureFlagBits;

export type FenceImportFlagBitsKHR = FenceImportFlagBits;

export type PeerMemoryFeatureFlagBitsKHR = PeerMemoryFeatureFlagBits;

export type MemoryAllocateFlagBitsKHR = MemoryAllocateFlagBits;

export type TessellationDomainOriginKHR = TessellationDomainOrigin;

export type SamplerYcbcrModelConversionKHR = SamplerYcbcrModelConversion;

export type SamplerYcbcrRangeKHR = SamplerYcbcrRange;

export type ChromaLocationKHR = ChromaLocation;

export type SamplerReductionModeEXT = SamplerReductionMode;

export type ShaderFloatControlsIndependenceKHR = ShaderFloatControlsIndependence;

export type SubmitFlagBitsKHR = SubmitFlagBits;

export type DriverIdKHR = DriverId;

export type DevicePrivateDataCreateInfoEXT = DevicePrivateDataCreateInfo;

export type PrivateDataSlotCreateInfoEXT = PrivateDataSlotCreateInfo;

export type PhysicalDevicePrivateDataFeaturesEXT = PhysicalDevicePrivateDataFeatures;

export type PhysicalDeviceFeatures2KHR = PhysicalDeviceFeatures2;

export type PhysicalDeviceProperties2KHR = PhysicalDeviceProperties2;

export type FormatProperties2KHR = FormatProperties2;

export type ImageFormatProperties2KHR = ImageFormatProperties2;

export type PhysicalDeviceImageFormatInfo2KHR = PhysicalDeviceImageFormatInfo2;

export type QueueFamilyProperties2KHR = QueueFamilyProperties2;

export type PhysicalDeviceMemoryProperties2KHR = PhysicalDeviceMemoryProperties2;

export type SparseImageFormatProperties2KHR = SparseImageFormatProperties2;

export type PhysicalDeviceSparseImageFormatInfo2KHR = PhysicalDeviceSparseImageFormatInfo2;

export type ConformanceVersionKHR = ConformanceVersion;

export type PhysicalDeviceDriverPropertiesKHR = PhysicalDeviceDriverProperties;

export type PhysicalDeviceVariablePointersFeaturesKHR = PhysicalDeviceVariablePointersFeatures;

export type PhysicalDeviceVariablePointerFeaturesKHR = PhysicalDeviceVariablePointersFeatures;

export type PhysicalDeviceVariablePointerFeatures = PhysicalDeviceVariablePointersFeatures;

export type ExternalMemoryPropertiesKHR = ExternalMemoryProperties;

export type PhysicalDeviceExternalImageFormatInfoKHR = PhysicalDeviceExternalImageFormatInfo;

export type ExternalImageFormatPropertiesKHR = ExternalImageFormatProperties;

export type PhysicalDeviceExternalBufferInfoKHR = PhysicalDeviceExternalBufferInfo;

export type ExternalBufferPropertiesKHR = ExternalBufferProperties;

export type PhysicalDeviceIDPropertiesKHR = PhysicalDeviceIDProperties;

export type ExternalMemoryImageCreateInfoKHR = ExternalMemoryImageCreateInfo;

export type ExternalMemoryBufferCreateInfoKHR = ExternalMemoryBufferCreateInfo;

export type ExportMemoryAllocateInfoKHR = ExportMemoryAllocateInfo;

export type PhysicalDeviceExternalSemaphoreInfoKHR = PhysicalDeviceExternalSemaphoreInfo;

export type ExternalSemaphorePropertiesKHR = ExternalSemaphoreProperties;

export type ExportSemaphoreCreateInfoKHR = ExportSemaphoreCreateInfo;

export type PhysicalDeviceExternalFenceInfoKHR = PhysicalDeviceExternalFenceInfo;

export type ExternalFencePropertiesKHR = ExternalFenceProperties;

export type ExportFenceCreateInfoKHR = ExportFenceCreateInfo;

export type PhysicalDeviceMultiviewFeaturesKHR = PhysicalDeviceMultiviewFeatures;

export type PhysicalDeviceMultiviewPropertiesKHR = PhysicalDeviceMultiviewProperties;

export type RenderPassMultiviewCreateInfoKHR = RenderPassMultiviewCreateInfo;

export type PhysicalDeviceGroupPropertiesKHR = PhysicalDeviceGroupProperties;

export type MemoryAllocateFlagsInfoKHR = MemoryAllocateFlagsInfo;

export type BindBufferMemoryInfoKHR = BindBufferMemoryInfo;

export type BindBufferMemoryDeviceGroupInfoKHR = BindBufferMemoryDeviceGroupInfo;

export type BindImageMemoryInfoKHR = BindImageMemoryInfo;

export type BindImageMemoryDeviceGroupInfoKHR = BindImageMemoryDeviceGroupInfo;

export type DeviceGroupRenderPassBeginInfoKHR = DeviceGroupRenderPassBeginInfo;

export type DeviceGroupCommandBufferBeginInfoKHR = DeviceGroupCommandBufferBeginInfo;

export type DeviceGroupSubmitInfoKHR = DeviceGroupSubmitInfo;

export type DeviceGroupBindSparseInfoKHR = DeviceGroupBindSparseInfo;

export type DeviceGroupDeviceCreateInfoKHR = DeviceGroupDeviceCreateInfo;

export type DescriptorUpdateTemplateEntryKHR = DescriptorUpdateTemplateEntry;

export type DescriptorUpdateTemplateCreateInfoKHR = DescriptorUpdateTemplateCreateInfo;

export type InputAttachmentAspectReferenceKHR = InputAttachmentAspectReference;

export type RenderPassInputAttachmentAspectCreateInfoKHR = RenderPassInputAttachmentAspectCreateInfo;

export type PhysicalDevice16BitStorageFeaturesKHR = PhysicalDevice16BitStorageFeatures;

export type PhysicalDeviceShaderSubgroupExtendedTypesFeaturesKHR = PhysicalDeviceShaderSubgroupExtendedTypesFeatures;

export type BufferMemoryRequirementsInfo2KHR = BufferMemoryRequirementsInfo2;

export type DeviceBufferMemoryRequirementsKHR = DeviceBufferMemoryRequirements;

export type ImageMemoryRequirementsInfo2KHR = ImageMemoryRequirementsInfo2;

export type ImageSparseMemoryRequirementsInfo2KHR = ImageSparseMemoryRequirementsInfo2;

export type DeviceImageMemoryRequirementsKHR = DeviceImageMemoryRequirements;

export type MemoryRequirements2KHR = MemoryRequirements2;

export type SparseImageMemoryRequirements2KHR = SparseImageMemoryRequirements2;

export type PhysicalDevicePointClippingPropertiesKHR = PhysicalDevicePointClippingProperties;

export type MemoryDedicatedRequirementsKHR = MemoryDedicatedRequirements;

export type MemoryDedicatedAllocateInfoKHR = MemoryDedicatedAllocateInfo;

export type ImageViewUsageCreateInfoKHR = ImageViewUsageCreateInfo;

export type PipelineTessellationDomainOriginStateCreateInfoKHR = PipelineTessellationDomainOriginStateCreateInfo;

export type SamplerYcbcrConversionInfoKHR = SamplerYcbcrConversionInfo;

export type SamplerYcbcrConversionCreateInfoKHR = SamplerYcbcrConversionCreateInfo;

export type BindImagePlaneMemoryInfoKHR = BindImagePlaneMemoryInfo;

export type ImagePlaneMemoryRequirementsInfoKHR = ImagePlaneMemoryRequirementsInfo;

export type PhysicalDeviceSamplerYcbcrConversionFeaturesKHR = PhysicalDeviceSamplerYcbcrConversionFeatures;

export type SamplerYcbcrConversionImageFormatPropertiesKHR = SamplerYcbcrConversionImageFormatProperties;

export type PhysicalDeviceSamplerFilterMinmaxPropertiesEXT = PhysicalDeviceSamplerFilterMinmaxProperties;

export type SamplerReductionModeCreateInfoEXT = SamplerReductionModeCreateInfo;

export type PhysicalDeviceInlineUniformBlockFeaturesEXT = PhysicalDeviceInlineUniformBlockFeatures;

export type PhysicalDeviceInlineUniformBlockPropertiesEXT = PhysicalDeviceInlineUniformBlockProperties;

export type WriteDescriptorSetInlineUniformBlockEXT = WriteDescriptorSetInlineUniformBlock;

export type DescriptorPoolInlineUniformBlockCreateInfoEXT = DescriptorPoolInlineUniformBlockCreateInfo;

export type ImageFormatListCreateInfoKHR = ImageFormatListCreateInfo;

export type PhysicalDeviceMaintenance3PropertiesKHR = PhysicalDeviceMaintenance3Properties;

export type PhysicalDeviceMaintenance4FeaturesKHR = PhysicalDeviceMaintenance4Features;

export type PhysicalDeviceMaintenance4PropertiesKHR = PhysicalDeviceMaintenance4Properties;

export type DescriptorSetLayoutSupportKHR = DescriptorSetLayoutSupport;

export type PhysicalDeviceShaderDrawParameterFeatures = PhysicalDeviceShaderDrawParametersFeatures;

export type PhysicalDeviceShaderFloat16Int8FeaturesKHR = PhysicalDeviceShaderFloat16Int8Features;

export type PhysicalDeviceFloat16Int8FeaturesKHR = PhysicalDeviceShaderFloat16Int8Features;

export type PhysicalDeviceFloatControlsPropertiesKHR = PhysicalDeviceFloatControlsProperties;

export type PhysicalDeviceHostQueryResetFeaturesEXT = PhysicalDeviceHostQueryResetFeatures;

export type DeviceQueueGlobalPriorityCreateInfoEXT = DeviceQueueGlobalPriorityCreateInfoKHR;

export type PhysicalDeviceGlobalPriorityQueryFeaturesEXT = PhysicalDeviceGlobalPriorityQueryFeaturesKHR;

export type QueueFamilyGlobalPriorityPropertiesEXT = QueueFamilyGlobalPriorityPropertiesKHR;

export type PhysicalDeviceDescriptorIndexingFeaturesEXT = PhysicalDeviceDescriptorIndexingFeatures;

export type PhysicalDeviceDescriptorIndexingPropertiesEXT = PhysicalDeviceDescriptorIndexingProperties;

export type DescriptorSetLayoutBindingFlagsCreateInfoEXT = DescriptorSetLayoutBindingFlagsCreateInfo;

export type DescriptorSetVariableDescriptorCountAllocateInfoEXT = DescriptorSetVariableDescriptorCountAllocateInfo;

export type DescriptorSetVariableDescriptorCountLayoutSupportEXT = DescriptorSetVariableDescriptorCountLayoutSupport;

export type AttachmentDescription2KHR = AttachmentDescription2;

export type AttachmentReference2KHR = AttachmentReference2;

export type SubpassDescription2KHR = SubpassDescription2;

export type SubpassDependency2KHR = SubpassDependency2;

export type RenderPassCreateInfo2KHR = RenderPassCreateInfo2;

export type SubpassBeginInfoKHR = SubpassBeginInfo;

export type SubpassEndInfoKHR = SubpassEndInfo;

export type PhysicalDeviceTimelineSemaphoreFeaturesKHR = PhysicalDeviceTimelineSemaphoreFeatures;

export type PhysicalDeviceTimelineSemaphorePropertiesKHR = PhysicalDeviceTimelineSemaphoreProperties;

export type SemaphoreTypeCreateInfoKHR = SemaphoreTypeCreateInfo;

export type TimelineSemaphoreSubmitInfoKHR = TimelineSemaphoreSubmitInfo;

export type SemaphoreWaitInfoKHR = SemaphoreWaitInfo;

export type SemaphoreSignalInfoKHR = SemaphoreSignalInfo;

export type PhysicalDevice8BitStorageFeaturesKHR = PhysicalDevice8BitStorageFeatures;

export type PhysicalDeviceVulkanMemoryModelFeaturesKHR = PhysicalDeviceVulkanMemoryModelFeatures;

export type PhysicalDeviceShaderAtomicInt64FeaturesKHR = PhysicalDeviceShaderAtomicInt64Features;

export type PhysicalDeviceDepthStencilResolvePropertiesKHR = PhysicalDeviceDepthStencilResolveProperties;

export type SubpassDescriptionDepthStencilResolveKHR = SubpassDescriptionDepthStencilResolve;

export type PhysicalDeviceFragmentShaderBarycentricFeaturesNV = PhysicalDeviceFragmentShaderBarycentricFeaturesKHR;

export type ImageStencilUsageCreateInfoEXT = ImageStencilUsageCreateInfo;

export type PhysicalDeviceScalarBlockLayoutFeaturesEXT = PhysicalDeviceScalarBlockLayoutFeatures;

export type PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR = PhysicalDeviceUniformBufferStandardLayoutFeatures;

export type PhysicalDeviceBufferDeviceAddressFeaturesKHR = PhysicalDeviceBufferDeviceAddressFeatures;

export type PhysicalDeviceBufferAddressFeaturesEXT = PhysicalDeviceBufferDeviceAddressFeaturesEXT;

export type BufferDeviceAddressInfoKHR = BufferDeviceAddressInfo;

export type BufferDeviceAddressInfoEXT = BufferDeviceAddressInfo;

export type BufferOpaqueCaptureAddressCreateInfoKHR = BufferOpaqueCaptureAddressCreateInfo;

export type PhysicalDeviceImagelessFramebufferFeaturesKHR = PhysicalDeviceImagelessFramebufferFeatures;

export type FramebufferAttachmentsCreateInfoKHR = FramebufferAttachmentsCreateInfo;

export type FramebufferAttachmentImageInfoKHR = FramebufferAttachmentImageInfo;

export type RenderPassAttachmentBeginInfoKHR = RenderPassAttachmentBeginInfo;

export type PhysicalDeviceTextureCompressionASTCHDRFeaturesEXT = PhysicalDeviceTextureCompressionASTCHDRFeatures;

export type PipelineCreationFeedbackEXT = PipelineCreationFeedback;

export type PipelineCreationFeedbackCreateInfoEXT = PipelineCreationFeedbackCreateInfo;

export type QueryPoolCreateInfoINTEL = QueryPoolPerformanceQueryCreateInfoINTEL;

export type PhysicalDeviceSeparateDepthStencilLayoutsFeaturesKHR = PhysicalDeviceSeparateDepthStencilLayoutsFeatures;

export type AttachmentReferenceStencilLayoutKHR = AttachmentReferenceStencilLayout;

export type AttachmentDescriptionStencilLayoutKHR = AttachmentDescriptionStencilLayout;

export type PipelineInfoEXT = PipelineInfoKHR;

export type PhysicalDeviceShaderDemoteToHelperInvocationFeaturesEXT = PhysicalDeviceShaderDemoteToHelperInvocationFeatures;

export type PhysicalDeviceTexelBufferAlignmentPropertiesEXT = PhysicalDeviceTexelBufferAlignmentProperties;

export type PhysicalDeviceSubgroupSizeControlFeaturesEXT = PhysicalDeviceSubgroupSizeControlFeatures;

export type PhysicalDeviceSubgroupSizeControlPropertiesEXT = PhysicalDeviceSubgroupSizeControlProperties;

export type PipelineShaderStageRequiredSubgroupSizeCreateInfoEXT = PipelineShaderStageRequiredSubgroupSizeCreateInfo;

export type MemoryOpaqueCaptureAddressAllocateInfoKHR = MemoryOpaqueCaptureAddressAllocateInfo;

export type DeviceMemoryOpaqueCaptureAddressInfoKHR = DeviceMemoryOpaqueCaptureAddressInfo;

export type PhysicalDevicePipelineCreationCacheControlFeaturesEXT = PhysicalDevicePipelineCreationCacheControlFeatures;

export type PhysicalDeviceToolPropertiesEXT = PhysicalDeviceToolProperties;

export type AabbPositionsNV = AabbPositionsKHR;

export type TransformMatrixNV = TransformMatrixKHR;

export type AccelerationStructureInstanceNV = AccelerationStructureInstanceKHR;

export type PhysicalDeviceZeroInitializeWorkgroupMemoryFeaturesKHR = PhysicalDeviceZeroInitializeWorkgroupMemoryFeatures;

export type PhysicalDeviceImageRobustnessFeaturesEXT = PhysicalDeviceImageRobustnessFeatures;

export type BufferCopy2KHR = BufferCopy2;

export type ImageCopy2KHR = ImageCopy2;

export type ImageBlit2KHR = ImageBlit2;

export type BufferImageCopy2KHR = BufferImageCopy2;

export type ImageResolve2KHR = ImageResolve2;

export type CopyBufferInfo2KHR = CopyBufferInfo2;

export type CopyImageInfo2KHR = CopyImageInfo2;

export type BlitImageInfo2KHR = BlitImageInfo2;

export type CopyBufferToImageInfo2KHR = CopyBufferToImageInfo2;

export type CopyImageToBufferInfo2KHR = CopyImageToBufferInfo2;

export type ResolveImageInfo2KHR = ResolveImageInfo2;

export type PhysicalDeviceShaderTerminateInvocationFeaturesKHR = PhysicalDeviceShaderTerminateInvocationFeatures;

export type PhysicalDeviceMutableDescriptorTypeFeaturesVALVE = PhysicalDeviceMutableDescriptorTypeFeaturesEXT;

export type MutableDescriptorTypeListVALVE = MutableDescriptorTypeListEXT;

export type MutableDescriptorTypeCreateInfoVALVE = MutableDescriptorTypeCreateInfoEXT;

export type MemoryBarrier2KHR = MemoryBarrier2;

export type ImageMemoryBarrier2KHR = ImageMemoryBarrier2;

export type BufferMemoryBarrier2KHR = BufferMemoryBarrier2;

export type DependencyInfoKHR = DependencyInfo;

export type SemaphoreSubmitInfoKHR = SemaphoreSubmitInfo;

export type CommandBufferSubmitInfoKHR = CommandBufferSubmitInfo;

export type SubmitInfo2KHR = SubmitInfo2;

export type PhysicalDeviceSynchronization2FeaturesKHR = PhysicalDeviceSynchronization2Features;

export type PhysicalDeviceShaderIntegerDotProductFeaturesKHR = PhysicalDeviceShaderIntegerDotProductFeatures;

export type PhysicalDeviceShaderIntegerDotProductPropertiesKHR = PhysicalDeviceShaderIntegerDotProductProperties;

export type FormatProperties3KHR = FormatProperties3;

export type PipelineRenderingCreateInfoKHR = PipelineRenderingCreateInfo;

export type RenderingInfoKHR = RenderingInfo;

export type RenderingAttachmentInfoKHR = RenderingAttachmentInfo;

export type PhysicalDeviceDynamicRenderingFeaturesKHR = PhysicalDeviceDynamicRenderingFeatures;

export type CommandBufferInheritanceRenderingInfoKHR = CommandBufferInheritanceRenderingInfo;

export type AttachmentSampleCountInfoNV = AttachmentSampleCountInfoAMD;

export type PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesARM = PhysicalDeviceRasterizationOrderAttachmentAccessFeaturesEXT;