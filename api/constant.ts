/// Constants

/// API Constants
/// Vulkan hardcoded constants - not an enumerated type, part of the header boilerplate

export const MAX_PHYSICAL_DEVICE_NAME_SIZE = 256;
export const UUID_SIZE = 16;
export const LUID_SIZE = 8;
export const LUID_SIZE_KHR = undefined;
export const MAX_EXTENSION_NAME_SIZE = 256;
export const MAX_DESCRIPTION_SIZE = 256;
export const MAX_MEMORY_TYPES = 32;
/** The maximum number of unique memory heaps, each of which supporting 1 or more memory types */
export const MAX_MEMORY_HEAPS = 16;
export const LOD_CLAMP_NONE = 1000.0;
export const REMAINING_MIP_LEVELS = (~0);
export const REMAINING_ARRAY_LAYERS = (~0);
export const WHOLE_SIZE = (~0n);
export const ATTACHMENT_UNUSED = (~0);
export const TRUE = 1;
export const FALSE = 0;
export const QUEUE_FAMILY_IGNORED = (~0);
export const QUEUE_FAMILY_EXTERNAL = (~1);
export const QUEUE_FAMILY_EXTERNAL_KHR = undefined;
export const QUEUE_FAMILY_FOREIGN_EXT = (~2);
export const SUBPASS_EXTERNAL = (~0);
export const MAX_DEVICE_GROUP_SIZE = 32;
export const MAX_DEVICE_GROUP_SIZE_KHR = undefined;
export const MAX_DRIVER_NAME_SIZE = 256;
export const MAX_DRIVER_NAME_SIZE_KHR = undefined;
export const MAX_DRIVER_INFO_SIZE = 256;
export const MAX_DRIVER_INFO_SIZE_KHR = undefined;
export const SHADER_UNUSED_KHR = (~0);
export const SHADER_UNUSED_NV = undefined;
export const MAX_GLOBAL_PRIORITY_SIZE_KHR = 16;
export const MAX_GLOBAL_PRIORITY_SIZE_EXT = undefined;
export const MAX_SHADER_MODULE_IDENTIFIER_SIZE_EXT = 32;

/// vulkan_video_codec_h264std

export const STD_VIDEO_H264_CPB_CNT_LIST_SIZE = 32;
export const STD_VIDEO_H264_SCALING_LIST_4X4_NUM_LISTS = 6;
export const STD_VIDEO_H264_SCALING_LIST_4X4_NUM_ELEMENTS = 16;
export const STD_VIDEO_H264_SCALING_LIST_8X8_NUM_LISTS = 6;
export const STD_VIDEO_H264_SCALING_LIST_8X8_NUM_ELEMENTS = 64;
export const STD_VIDEO_H264_MAX_NUM_LIST_REF = 32;
export const STD_VIDEO_H264_MAX_CHROMA_PLANES = 2;

/// vulkan_video_codec_h264std_decode

export const STD_VULKAN_VIDEO_CODEC_H264_DECODE_EXTENSION_NAME = "VK_STD_vulkan_video_codec_h264_decode";
export const STD_VIDEO_DECODE_H264_FIELD_ORDER_COUNT_LIST_SIZE = 2;

/// vulkan_video_codec_h264std_encode

export const STD_VULKAN_VIDEO_CODEC_H264_ENCODE_EXTENSION_NAME = "VK_STD_vulkan_video_codec_h264_encode";

/// vulkan_video_codec_h265std

export const STD_VIDEO_H265_CPB_CNT_LIST_SIZE = 32;
export const STD_VIDEO_H265_SUBLAYERS_LIST_SIZE = 7;
export const STD_VIDEO_H265_SCALING_LIST_4X4_NUM_LISTS = 6;
export const STD_VIDEO_H265_SCALING_LIST_4X4_NUM_ELEMENTS = 16;
export const STD_VIDEO_H265_SCALING_LIST_8X8_NUM_LISTS = 6;
export const STD_VIDEO_H265_SCALING_LIST_8X8_NUM_ELEMENTS = 64;
export const STD_VIDEO_H265_SCALING_LIST_16X16_NUM_LISTS = 6;
export const STD_VIDEO_H265_SCALING_LIST_16X16_NUM_ELEMENTS = 64;
export const STD_VIDEO_H265_SCALING_LIST_32X32_NUM_LISTS = 2;
export const STD_VIDEO_H265_SCALING_LIST_32X32_NUM_ELEMENTS = 64;
export const STD_VIDEO_H265_CHROMA_QP_OFFSET_LIST_SIZE = 6;
export const STD_VIDEO_H265_CHROMA_QP_OFFSET_TILE_COLS_LIST_SIZE = 19;
export const STD_VIDEO_H265_CHROMA_QP_OFFSET_TILE_ROWS_LIST_SIZE = 21;
export const STD_VIDEO_H265_PREDICTOR_PALETTE_COMPONENTS_LIST_SIZE = 3;
export const STD_VIDEO_H265_PREDICTOR_PALETTE_COMP_ENTRIES_LIST_SIZE = 128;
export const STD_VIDEO_H265_MAX_NUM_LIST_REF = 15;
export const STD_VIDEO_H265_MAX_CHROMA_PLANES = 2;
export const STD_VIDEO_H265_MAX_SHORT_TERM_REF_PIC_SETS = 64;
export const STD_VIDEO_H265_MAX_DPB_SIZE = 16;
export const STD_VIDEO_H265_MAX_LONG_TERM_REF_PICS_SPS = 32;
export const STD_VIDEO_H265_MAX_LONG_TERM_PICS = 16;
export const STD_VIDEO_H265_MAX_DELTA_POC = 48;

/// vulkan_video_codec_h265std_decode

export const STD_VULKAN_VIDEO_CODEC_H265_DECODE_EXTENSION_NAME = "VK_STD_vulkan_video_codec_h265_decode";
export const STD_VIDEO_DECODE_H265_REF_PIC_SET_LIST_SIZE = 8;

/// vulkan_video_codec_h265std_encode

export const STD_VULKAN_VIDEO_CODEC_H265_ENCODE_EXTENSION_NAME = "VK_STD_vulkan_video_codec_h265_encode";

/// VK_KHR_surface

export const KHR_SURFACE_EXTENSION_NAME = "VK_KHR_surface";

/// VK_KHR_swapchain

export const KHR_SWAPCHAIN_EXTENSION_NAME = "VK_KHR_swapchain";

/// VK_KHR_display

export const KHR_DISPLAY_EXTENSION_NAME = "VK_KHR_display";

/// VK_KHR_display_swapchain

export const KHR_DISPLAY_SWAPCHAIN_EXTENSION_NAME = "VK_KHR_display_swapchain";

/// VK_KHR_xlib_surface

export const KHR_XLIB_SURFACE_EXTENSION_NAME = "VK_KHR_xlib_surface";

/// VK_KHR_xcb_surface

export const KHR_XCB_SURFACE_EXTENSION_NAME = "VK_KHR_xcb_surface";

/// VK_KHR_wayland_surface

export const KHR_WAYLAND_SURFACE_EXTENSION_NAME = "VK_KHR_wayland_surface";

/// VK_KHR_mir_surface

export const KHR_MIR_SURFACE_EXTENSION_NAME = "VK_KHR_mir_surface";

/// VK_KHR_android_surface

export const KHR_ANDROID_SURFACE_EXTENSION_NAME = "VK_KHR_android_surface";

/// VK_KHR_win32_surface

export const KHR_WIN32_SURFACE_EXTENSION_NAME = "VK_KHR_win32_surface";

/// VK_ANDROID_native_buffer

export const ANDROID_NATIVE_BUFFER_NUMBER = 11;
export const ANDROID_NATIVE_BUFFER_EXTENSION_NAME = "VK_ANDROID_native_buffer";

/// VK_EXT_debug_report

export const EXT_DEBUG_REPORT_EXTENSION_NAME = "VK_EXT_debug_report";

/// VK_NV_glsl_shader

export const NV_GLSL_SHADER_EXTENSION_NAME = "VK_NV_glsl_shader";

/// VK_EXT_depth_range_unrestricted

export const EXT_DEPTH_RANGE_UNRESTRICTED_EXTENSION_NAME = "VK_EXT_depth_range_unrestricted";

/// VK_KHR_sampler_mirror_clamp_to_edge

export const KHR_SAMPLER_MIRROR_CLAMP_TO_EDGE_EXTENSION_NAME = "VK_KHR_sampler_mirror_clamp_to_edge";

/// VK_IMG_filter_cubic

export const IMG_FILTER_CUBIC_EXTENSION_NAME = "VK_IMG_filter_cubic";

/// VK_AMD_extension_17

export const AMD_EXTENSION_17_EXTENSION_NAME = "VK_AMD_extension_17";

/// VK_AMD_extension_18

export const AMD_EXTENSION_18_EXTENSION_NAME = "VK_AMD_extension_18";

/// VK_AMD_rasterization_order

export const AMD_RASTERIZATION_ORDER_EXTENSION_NAME = "VK_AMD_rasterization_order";

/// VK_AMD_extension_20

export const AMD_EXTENSION_20_EXTENSION_NAME = "VK_AMD_extension_20";

/// VK_AMD_shader_trinary_minmax

export const AMD_SHADER_TRINARY_MINMAX_EXTENSION_NAME = "VK_AMD_shader_trinary_minmax";

/// VK_AMD_shader_explicit_vertex_parameter

export const AMD_SHADER_EXPLICIT_VERTEX_PARAMETER_EXTENSION_NAME = "VK_AMD_shader_explicit_vertex_parameter";

/// VK_EXT_debug_marker

export const EXT_DEBUG_MARKER_EXTENSION_NAME = "VK_EXT_debug_marker";

/// VK_KHR_video_queue

export const KHR_VIDEO_QUEUE_EXTENSION_NAME = "VK_KHR_video_queue";

/// VK_KHR_video_decode_queue

export const KHR_VIDEO_DECODE_QUEUE_EXTENSION_NAME = "VK_KHR_video_decode_queue";

/// VK_AMD_gcn_shader

export const AMD_GCN_SHADER_EXTENSION_NAME = "VK_AMD_gcn_shader";

/// VK_NV_dedicated_allocation

export const NV_DEDICATED_ALLOCATION_EXTENSION_NAME = "VK_NV_dedicated_allocation";

/// VK_EXT_extension_28

export const EXT_EXTENSION_28_EXTENSION_NAME = "VK_EXT_extension_28";

/// VK_EXT_transform_feedback

export const EXT_TRANSFORM_FEEDBACK_EXTENSION_NAME = "VK_EXT_transform_feedback";

/// VK_NVX_binary_import

export const NVX_BINARY_IMPORT_EXTENSION_NAME = "VK_NVX_binary_import";

/// VK_NVX_image_view_handle

export const NVX_IMAGE_VIEW_HANDLE_EXTENSION_NAME = "VK_NVX_image_view_handle";

/// VK_AMD_extension_32

export const AMD_EXTENSION_32_EXTENSION_NAME = "VK_AMD_extension_32";

/// VK_AMD_extension_33

export const AMD_EXTENSION_33_EXTENSION_NAME = "VK_AMD_extension_33";

/// VK_AMD_draw_indirect_count

export const AMD_DRAW_INDIRECT_COUNT_EXTENSION_NAME = "VK_AMD_draw_indirect_count";

/// VK_AMD_extension_35

export const AMD_EXTENSION_35_EXTENSION_NAME = "VK_AMD_extension_35";

/// VK_AMD_negative_viewport_height

export const AMD_NEGATIVE_VIEWPORT_HEIGHT_EXTENSION_NAME = "VK_AMD_negative_viewport_height";

/// VK_AMD_gpu_shader_half_float

export const AMD_GPU_SHADER_HALF_FLOAT_EXTENSION_NAME = "VK_AMD_gpu_shader_half_float";

/// VK_AMD_shader_ballot

export const AMD_SHADER_BALLOT_EXTENSION_NAME = "VK_AMD_shader_ballot";

/// VK_EXT_video_encode_h264

export const EXT_VIDEO_ENCODE_H264_EXTENSION_NAME = "VK_EXT_video_encode_h264";

/// VK_EXT_video_encode_h265

export const EXT_VIDEO_ENCODE_H265_EXTENSION_NAME = "VK_EXT_video_encode_h265";

/// VK_EXT_video_decode_h264

export const EXT_VIDEO_DECODE_H264_EXTENSION_NAME = "VK_EXT_video_decode_h264";

/// VK_AMD_texture_gather_bias_lod

export const AMD_TEXTURE_GATHER_BIAS_LOD_EXTENSION_NAME = "VK_AMD_texture_gather_bias_lod";

/// VK_AMD_shader_info

export const AMD_SHADER_INFO_EXTENSION_NAME = "VK_AMD_shader_info";

/// VK_AMD_extension_44

export const AMD_EXTENSION_44_EXTENSION_NAME = "VK_AMD_extension_44";

/// VK_KHR_dynamic_rendering

export const KHR_DYNAMIC_RENDERING_EXTENSION_NAME = "VK_KHR_dynamic_rendering";

/// VK_AMD_extension_46

export const AMD_EXTENSION_46_EXTENSION_NAME = "VK_AMD_extension_46";

/// VK_AMD_shader_image_load_store_lod

export const AMD_SHADER_IMAGE_LOAD_STORE_LOD_EXTENSION_NAME = "VK_AMD_shader_image_load_store_lod";

/// VK_NVX_extension_48

export const NVX_EXTENSION_48_EXTENSION_NAME = "VK_NVX_extension_48";

/// VK_GOOGLE_extension_49

export const GOOGLE_EXTENSION_49_EXTENSION_NAME = "VK_GOOGLE_extension_49";

/// VK_GGP_stream_descriptor_surface

export const GGP_STREAM_DESCRIPTOR_SURFACE_EXTENSION_NAME = "VK_GGP_stream_descriptor_surface";

/// VK_NV_corner_sampled_image

export const NV_CORNER_SAMPLED_IMAGE_EXTENSION_NAME = "VK_NV_corner_sampled_image";

/// VK_NV_extension_52

export const NV_EXTENSION_52_EXTENSION_NAME = "VK_NV_extension_52";

/// VK_NV_extension_53

export const NV_EXTENSION_53_EXTENSION_NAME = "VK_NV_extension_53";

/// VK_KHR_multiview

export const KHR_MULTIVIEW_EXTENSION_NAME = "VK_KHR_multiview";

/// VK_IMG_format_pvrtc

export const IMG_FORMAT_PVRTC_EXTENSION_NAME = "VK_IMG_format_pvrtc";

/// VK_NV_external_memory_capabilities

export const NV_EXTERNAL_MEMORY_CAPABILITIES_EXTENSION_NAME = "VK_NV_external_memory_capabilities";

/// VK_NV_external_memory

export const NV_EXTERNAL_MEMORY_EXTENSION_NAME = "VK_NV_external_memory";

/// VK_NV_external_memory_win32

export const NV_EXTERNAL_MEMORY_WIN32_EXTENSION_NAME = "VK_NV_external_memory_win32";

/// VK_NV_win32_keyed_mutex

export const NV_WIN32_KEYED_MUTEX_EXTENSION_NAME = "VK_NV_win32_keyed_mutex";

/// VK_KHR_get_physical_device_properties2

export const KHR_GET_PHYSICAL_DEVICE_PROPERTIES_2_EXTENSION_NAME = "VK_KHR_get_physical_device_properties2";

/// VK_KHR_device_group

export const KHR_DEVICE_GROUP_EXTENSION_NAME = "VK_KHR_device_group";

/// VK_EXT_validation_flags

export const EXT_VALIDATION_FLAGS_EXTENSION_NAME = "VK_EXT_validation_flags";

/// VK_NN_vi_surface

export const NN_VI_SURFACE_EXTENSION_NAME = "VK_NN_vi_surface";

/// VK_KHR_shader_draw_parameters

export const KHR_SHADER_DRAW_PARAMETERS_EXTENSION_NAME = "VK_KHR_shader_draw_parameters";

/// VK_EXT_shader_subgroup_ballot

export const EXT_SHADER_SUBGROUP_BALLOT_EXTENSION_NAME = "VK_EXT_shader_subgroup_ballot";

/// VK_EXT_shader_subgroup_vote

export const EXT_SHADER_SUBGROUP_VOTE_EXTENSION_NAME = "VK_EXT_shader_subgroup_vote";

/// VK_EXT_texture_compression_astc_hdr

export const EXT_TEXTURE_COMPRESSION_ASTC_HDR_EXTENSION_NAME = "VK_EXT_texture_compression_astc_hdr";

/// VK_EXT_astc_decode_mode

export const EXT_ASTC_DECODE_MODE_EXTENSION_NAME = "VK_EXT_astc_decode_mode";

/// VK_EXT_pipeline_robustness

export const EXT_PIPELINE_ROBUSTNESS_EXTENSION_NAME = "VK_EXT_pipeline_robustness";

/// VK_KHR_maintenance1

export const KHR_MAINTENANCE_1_EXTENSION_NAME = "VK_KHR_maintenance1";

/// VK_KHR_device_group_creation

export const KHR_DEVICE_GROUP_CREATION_EXTENSION_NAME = "VK_KHR_device_group_creation";

/// VK_KHR_external_memory_capabilities

export const KHR_EXTERNAL_MEMORY_CAPABILITIES_EXTENSION_NAME = "VK_KHR_external_memory_capabilities";

/// VK_KHR_external_memory

export const KHR_EXTERNAL_MEMORY_EXTENSION_NAME = "VK_KHR_external_memory";

/// VK_KHR_external_memory_win32

export const KHR_EXTERNAL_MEMORY_WIN32_EXTENSION_NAME = "VK_KHR_external_memory_win32";

/// VK_KHR_external_memory_fd

export const KHR_EXTERNAL_MEMORY_FD_EXTENSION_NAME = "VK_KHR_external_memory_fd";

/// VK_KHR_win32_keyed_mutex

export const KHR_WIN32_KEYED_MUTEX_EXTENSION_NAME = "VK_KHR_win32_keyed_mutex";

/// VK_KHR_external_semaphore_capabilities

export const KHR_EXTERNAL_SEMAPHORE_CAPABILITIES_EXTENSION_NAME = "VK_KHR_external_semaphore_capabilities";

/// VK_KHR_external_semaphore

export const KHR_EXTERNAL_SEMAPHORE_EXTENSION_NAME = "VK_KHR_external_semaphore";

/// VK_KHR_external_semaphore_win32

export const KHR_EXTERNAL_SEMAPHORE_WIN32_EXTENSION_NAME = "VK_KHR_external_semaphore_win32";

/// VK_KHR_external_semaphore_fd

export const KHR_EXTERNAL_SEMAPHORE_FD_EXTENSION_NAME = "VK_KHR_external_semaphore_fd";

/// VK_KHR_push_descriptor

export const KHR_PUSH_DESCRIPTOR_EXTENSION_NAME = "VK_KHR_push_descriptor";

/// VK_EXT_conditional_rendering

export const EXT_CONDITIONAL_RENDERING_EXTENSION_NAME = "VK_EXT_conditional_rendering";

/// VK_KHR_shader_float16_int8

export const KHR_SHADER_FLOAT16_INT8_EXTENSION_NAME = "VK_KHR_shader_float16_int8";

/// VK_KHR_16bit_storage

export const KHR_16BIT_STORAGE_EXTENSION_NAME = "VK_KHR_16bit_storage";

/// VK_KHR_incremental_present

export const KHR_INCREMENTAL_PRESENT_EXTENSION_NAME = "VK_KHR_incremental_present";

/// VK_KHR_descriptor_update_template

export const KHR_DESCRIPTOR_UPDATE_TEMPLATE_EXTENSION_NAME = "VK_KHR_descriptor_update_template";

/// VK_NVX_device_generated_commands

export const NVX_DEVICE_GENERATED_COMMANDS_EXTENSION_NAME = "VK_NVX_device_generated_commands";

/// VK_NV_clip_space_w_scaling

export const NV_CLIP_SPACE_W_SCALING_EXTENSION_NAME = "VK_NV_clip_space_w_scaling";

/// VK_EXT_direct_mode_display

export const EXT_DIRECT_MODE_DISPLAY_EXTENSION_NAME = "VK_EXT_direct_mode_display";

/// VK_EXT_acquire_xlib_display

export const EXT_ACQUIRE_XLIB_DISPLAY_EXTENSION_NAME = "VK_EXT_acquire_xlib_display";

/// VK_EXT_display_surface_counter

export const EXT_DISPLAY_SURFACE_COUNTER_EXTENSION_NAME = "VK_EXT_display_surface_counter";

/// VK_EXT_display_control

export const EXT_DISPLAY_CONTROL_EXTENSION_NAME = "VK_EXT_display_control";

/// VK_GOOGLE_display_timing

export const GOOGLE_DISPLAY_TIMING_EXTENSION_NAME = "VK_GOOGLE_display_timing";

/// VK_RESERVED_do_not_use_94

export const RESERVED_DO_NOT_USE_94_EXTENSION_NAME = "VK_RESERVED_do_not_use_94";

/// VK_NV_sample_mask_override_coverage

export const NV_SAMPLE_MASK_OVERRIDE_COVERAGE_EXTENSION_NAME = "VK_NV_sample_mask_override_coverage";

/// VK_NV_geometry_shader_passthrough

export const NV_GEOMETRY_SHADER_PASSTHROUGH_EXTENSION_NAME = "VK_NV_geometry_shader_passthrough";

/// VK_NV_viewport_array2

export const NV_VIEWPORT_ARRAY_2_EXTENSION_NAME = "VK_NV_viewport_array2";

/// VK_NVX_multiview_per_view_attributes

export const NVX_MULTIVIEW_PER_VIEW_ATTRIBUTES_EXTENSION_NAME = "VK_NVX_multiview_per_view_attributes";

/// VK_NV_viewport_swizzle

export const NV_VIEWPORT_SWIZZLE_EXTENSION_NAME = "VK_NV_viewport_swizzle";

/// VK_EXT_discard_rectangles

export const EXT_DISCARD_RECTANGLES_EXTENSION_NAME = "VK_EXT_discard_rectangles";

/// VK_NV_extension_101

export const NV_EXTENSION_101_EXTENSION_NAME = "VK_NV_extension_101";

/// VK_EXT_conservative_rasterization

export const EXT_CONSERVATIVE_RASTERIZATION_EXTENSION_NAME = "VK_EXT_conservative_rasterization";

/// VK_EXT_depth_clip_enable

export const EXT_DEPTH_CLIP_ENABLE_EXTENSION_NAME = "VK_EXT_depth_clip_enable";

/// VK_NV_extension_104

export const NV_EXTENSION_104_EXTENSION_NAME = "VK_NV_extension_104";

/// VK_EXT_swapchain_colorspace

export const EXT_SWAPCHAIN_COLOR_SPACE_EXTENSION_NAME = "VK_EXT_swapchain_colorspace";

/// VK_EXT_hdr_metadata

export const EXT_HDR_METADATA_EXTENSION_NAME = "VK_EXT_hdr_metadata";

/// VK_IMG_extension_107

export const IMG_EXTENSION_107_EXTENSION_NAME = "VK_IMG_extension_107";

/// VK_IMG_extension_108

export const IMG_EXTENSION_108_EXTENSION_NAME = "VK_IMG_extension_108";

/// VK_KHR_imageless_framebuffer

export const KHR_IMAGELESS_FRAMEBUFFER_EXTENSION_NAME = "VK_KHR_imageless_framebuffer";

/// VK_KHR_create_renderpass2

export const KHR_CREATE_RENDERPASS_2_EXTENSION_NAME = "VK_KHR_create_renderpass2";

/// VK_IMG_extension_111

export const IMG_EXTENSION_111_EXTENSION_NAME = "VK_IMG_extension_111";

/// VK_KHR_shared_presentable_image

export const KHR_SHARED_PRESENTABLE_IMAGE_EXTENSION_NAME = "VK_KHR_shared_presentable_image";

/// VK_KHR_external_fence_capabilities

export const KHR_EXTERNAL_FENCE_CAPABILITIES_EXTENSION_NAME = "VK_KHR_external_fence_capabilities";

/// VK_KHR_external_fence

export const KHR_EXTERNAL_FENCE_EXTENSION_NAME = "VK_KHR_external_fence";

/// VK_KHR_external_fence_win32

export const KHR_EXTERNAL_FENCE_WIN32_EXTENSION_NAME = "VK_KHR_external_fence_win32";

/// VK_KHR_external_fence_fd

export const KHR_EXTERNAL_FENCE_FD_EXTENSION_NAME = "VK_KHR_external_fence_fd";

/// VK_KHR_performance_query

export const KHR_PERFORMANCE_QUERY_EXTENSION_NAME = "VK_KHR_performance_query";

/// VK_KHR_maintenance2

export const KHR_MAINTENANCE_2_EXTENSION_NAME = "VK_KHR_maintenance2";

/// VK_KHR_extension_119

export const KHR_EXTENSION_119_EXTENSION_NAME = "VK_KHR_extension_119";

/// VK_KHR_get_surface_capabilities2

export const KHR_GET_SURFACE_CAPABILITIES_2_EXTENSION_NAME = "VK_KHR_get_surface_capabilities2";

/// VK_KHR_variable_pointers

export const KHR_VARIABLE_POINTERS_EXTENSION_NAME = "VK_KHR_variable_pointers";

/// VK_KHR_get_display_properties2

export const KHR_GET_DISPLAY_PROPERTIES_2_EXTENSION_NAME = "VK_KHR_get_display_properties2";

/// VK_MVK_ios_surface

export const MVK_IOS_SURFACE_EXTENSION_NAME = "VK_MVK_ios_surface";

/// VK_MVK_macos_surface

export const MVK_MACOS_SURFACE_EXTENSION_NAME = "VK_MVK_macos_surface";

/// VK_MVK_moltenvk

export const MVK_MOLTENVK_EXTENSION_NAME = "VK_MVK_moltenvk";

/// VK_EXT_external_memory_dma_buf

export const EXT_EXTERNAL_MEMORY_DMA_BUF_EXTENSION_NAME = "VK_EXT_external_memory_dma_buf";

/// VK_EXT_queue_family_foreign

export const EXT_QUEUE_FAMILY_FOREIGN_EXTENSION_NAME = "VK_EXT_queue_family_foreign";

/// VK_KHR_dedicated_allocation

export const KHR_DEDICATED_ALLOCATION_EXTENSION_NAME = "VK_KHR_dedicated_allocation";

/// VK_EXT_debug_utils

export const EXT_DEBUG_UTILS_EXTENSION_NAME = "VK_EXT_debug_utils";

/// VK_ANDROID_external_memory_android_hardware_buffer

export const ANDROID_EXTERNAL_MEMORY_ANDROID_HARDWARE_BUFFER_EXTENSION_NAME = "VK_ANDROID_external_memory_android_hardware_buffer";

/// VK_EXT_sampler_filter_minmax

export const EXT_SAMPLER_FILTER_MINMAX_EXTENSION_NAME = "VK_EXT_sampler_filter_minmax";

/// VK_KHR_storage_buffer_storage_class

export const KHR_STORAGE_BUFFER_STORAGE_CLASS_EXTENSION_NAME = "VK_KHR_storage_buffer_storage_class";

/// VK_AMD_gpu_shader_int16

export const AMD_GPU_SHADER_INT16_EXTENSION_NAME = "VK_AMD_gpu_shader_int16";

/// VK_AMD_extension_134

export const AMD_EXTENSION_134_EXTENSION_NAME = "VK_AMD_extension_134";

/// VK_AMD_extension_135

export const AMD_EXTENSION_135_EXTENSION_NAME = "VK_AMD_extension_135";

/// VK_AMD_extension_136

export const AMD_EXTENSION_136_EXTENSION_NAME = "VK_AMD_extension_136";

/// VK_AMD_mixed_attachment_samples

export const AMD_MIXED_ATTACHMENT_SAMPLES_EXTENSION_NAME = "VK_AMD_mixed_attachment_samples";

/// VK_AMD_shader_fragment_mask

export const AMD_SHADER_FRAGMENT_MASK_EXTENSION_NAME = "VK_AMD_shader_fragment_mask";

/// VK_EXT_inline_uniform_block

export const EXT_INLINE_UNIFORM_BLOCK_EXTENSION_NAME = "VK_EXT_inline_uniform_block";

/// VK_AMD_extension_140

export const AMD_EXTENSION_140_EXTENSION_NAME = "VK_AMD_extension_140";

/// VK_EXT_shader_stencil_export

export const EXT_SHADER_STENCIL_EXPORT_EXTENSION_NAME = "VK_EXT_shader_stencil_export";

/// VK_AMD_extension_142

export const AMD_EXTENSION_142_EXTENSION_NAME = "VK_AMD_extension_142";

/// VK_AMD_extension_143

export const AMD_EXTENSION_143_EXTENSION_NAME = "VK_AMD_extension_143";

/// VK_EXT_sample_locations

export const EXT_SAMPLE_LOCATIONS_EXTENSION_NAME = "VK_EXT_sample_locations";

/// VK_KHR_relaxed_block_layout

export const KHR_RELAXED_BLOCK_LAYOUT_EXTENSION_NAME = "VK_KHR_relaxed_block_layout";

/// VK_RESERVED_do_not_use_146

export const RESERVED_DO_NOT_USE_146_EXTENSION_NAME = "VK_RESERVED_do_not_use_146";

/// VK_KHR_get_memory_requirements2

export const KHR_GET_MEMORY_REQUIREMENTS_2_EXTENSION_NAME = "VK_KHR_get_memory_requirements2";

/// VK_KHR_image_format_list

export const KHR_IMAGE_FORMAT_LIST_EXTENSION_NAME = "VK_KHR_image_format_list";

/// VK_EXT_blend_operation_advanced

export const EXT_BLEND_OPERATION_ADVANCED_EXTENSION_NAME = "VK_EXT_blend_operation_advanced";

/// VK_NV_fragment_coverage_to_color

export const NV_FRAGMENT_COVERAGE_TO_COLOR_EXTENSION_NAME = "VK_NV_fragment_coverage_to_color";

/// VK_KHR_acceleration_structure

export const KHR_ACCELERATION_STRUCTURE_EXTENSION_NAME = "VK_KHR_acceleration_structure";

/// VK_KHR_ray_tracing_pipeline

export const KHR_RAY_TRACING_PIPELINE_EXTENSION_NAME = "VK_KHR_ray_tracing_pipeline";

/// VK_KHR_ray_query

export const KHR_RAY_QUERY_EXTENSION_NAME = "VK_KHR_ray_query";

/// VK_NV_extension_152

export const NV_EXTENSION_152_EXTENSION_NAME = "VK_NV_extension_152";

/// VK_NV_framebuffer_mixed_samples

export const NV_FRAMEBUFFER_MIXED_SAMPLES_EXTENSION_NAME = "VK_NV_framebuffer_mixed_samples";

/// VK_NV_fill_rectangle

export const NV_FILL_RECTANGLE_EXTENSION_NAME = "VK_NV_fill_rectangle";

/// VK_NV_shader_sm_builtins

export const NV_SHADER_SM_BUILTINS_EXTENSION_NAME = "VK_NV_shader_sm_builtins";

/// VK_EXT_post_depth_coverage

export const EXT_POST_DEPTH_COVERAGE_EXTENSION_NAME = "VK_EXT_post_depth_coverage";

/// VK_KHR_sampler_ycbcr_conversion

export const KHR_SAMPLER_YCBCR_CONVERSION_EXTENSION_NAME = "VK_KHR_sampler_ycbcr_conversion";

/// VK_KHR_bind_memory2

export const KHR_BIND_MEMORY_2_EXTENSION_NAME = "VK_KHR_bind_memory2";

/// VK_EXT_image_drm_format_modifier

export const EXT_IMAGE_DRM_FORMAT_MODIFIER_EXTENSION_NAME = "VK_EXT_image_drm_format_modifier";

/// VK_EXT_extension_160

export const EXT_EXTENSION_160_EXTENSION_NAME = "VK_EXT_extension_160";

/// VK_EXT_validation_cache

export const EXT_VALIDATION_CACHE_EXTENSION_NAME = "VK_EXT_validation_cache";

/// VK_EXT_descriptor_indexing

export const EXT_DESCRIPTOR_INDEXING_EXTENSION_NAME = "VK_EXT_descriptor_indexing";

/// VK_EXT_shader_viewport_index_layer

export const EXT_SHADER_VIEWPORT_INDEX_LAYER_EXTENSION_NAME = "VK_EXT_shader_viewport_index_layer";

/// VK_KHR_portability_subset

export const KHR_PORTABILITY_SUBSET_EXTENSION_NAME = "VK_KHR_portability_subset";

/// VK_NV_shading_rate_image

export const NV_SHADING_RATE_IMAGE_EXTENSION_NAME = "VK_NV_shading_rate_image";

/// VK_NV_ray_tracing

export const NV_RAY_TRACING_EXTENSION_NAME = "VK_NV_ray_tracing";

/// VK_NV_representative_fragment_test

export const NV_REPRESENTATIVE_FRAGMENT_TEST_EXTENSION_NAME = "VK_NV_representative_fragment_test";

/// VK_NV_extension_168

export const NV_EXTENSION_168_EXTENSION_NAME = "VK_NV_extension_168";

/// VK_KHR_maintenance3

export const KHR_MAINTENANCE_3_EXTENSION_NAME = "VK_KHR_maintenance3";

/// VK_KHR_draw_indirect_count

export const KHR_DRAW_INDIRECT_COUNT_EXTENSION_NAME = "VK_KHR_draw_indirect_count";

/// VK_EXT_filter_cubic

export const EXT_FILTER_CUBIC_EXTENSION_NAME = "VK_EXT_filter_cubic";

/// VK_QCOM_render_pass_shader_resolve

export const QCOM_RENDER_PASS_SHADER_RESOLVE_EXTENSION_NAME = "VK_QCOM_render_pass_shader_resolve";

/// VK_QCOM_extension_173

export const QCOM_EXTENSION_173_EXTENSION_NAME = "VK_QCOM_extension_173";

/// VK_QCOM_extension_174

export const QCOM_EXTENSION_174_EXTENSION_NAME = "VK_QCOM_extension_174";

/// VK_EXT_global_priority

export const EXT_GLOBAL_PRIORITY_EXTENSION_NAME = "VK_EXT_global_priority";

/// VK_KHR_shader_subgroup_extended_types

export const KHR_SHADER_SUBGROUP_EXTENDED_TYPES_EXTENSION_NAME = "VK_KHR_shader_subgroup_extended_types";

/// VK_EXT_extension_177

export const EXT_EXTENSION_177_EXTENSION_NAME = "VK_EXT_extension_177";

/// VK_KHR_8bit_storage

export const KHR_8BIT_STORAGE_EXTENSION_NAME = "VK_KHR_8bit_storage";

/// VK_EXT_external_memory_host

export const EXT_EXTERNAL_MEMORY_HOST_EXTENSION_NAME = "VK_EXT_external_memory_host";

/// VK_AMD_buffer_marker

export const AMD_BUFFER_MARKER_EXTENSION_NAME = "VK_AMD_buffer_marker";

/// VK_KHR_shader_atomic_int64

export const KHR_SHADER_ATOMIC_INT64_EXTENSION_NAME = "VK_KHR_shader_atomic_int64";

/// VK_KHR_shader_clock

export const KHR_SHADER_CLOCK_EXTENSION_NAME = "VK_KHR_shader_clock";

/// VK_AMD_extension_183

export const AMD_EXTENSION_183_EXTENSION_NAME = "VK_AMD_extension_183";

/// VK_AMD_pipeline_compiler_control

export const AMD_PIPELINE_COMPILER_CONTROL_EXTENSION_NAME = "VK_AMD_pipeline_compiler_control";

/// VK_EXT_calibrated_timestamps

export const EXT_CALIBRATED_TIMESTAMPS_EXTENSION_NAME = "VK_EXT_calibrated_timestamps";

/// VK_AMD_shader_core_properties

export const AMD_SHADER_CORE_PROPERTIES_EXTENSION_NAME = "VK_AMD_shader_core_properties";

/// VK_AMD_extension_187

export const AMD_EXTENSION_187_EXTENSION_NAME = "VK_AMD_extension_187";

/// VK_EXT_video_decode_h265

export const EXT_VIDEO_DECODE_H265_EXTENSION_NAME = "VK_EXT_video_decode_h265";

/// VK_KHR_global_priority

export const KHR_GLOBAL_PRIORITY_EXTENSION_NAME = "VK_KHR_global_priority";

/// VK_AMD_memory_overallocation_behavior

export const AMD_MEMORY_OVERALLOCATION_BEHAVIOR_EXTENSION_NAME = "VK_AMD_memory_overallocation_behavior";

/// VK_EXT_vertex_attribute_divisor

export const EXT_VERTEX_ATTRIBUTE_DIVISOR_EXTENSION_NAME = "VK_EXT_vertex_attribute_divisor";

/// VK_GGP_frame_token

export const GGP_FRAME_TOKEN_EXTENSION_NAME = "VK_GGP_frame_token";

/// VK_EXT_pipeline_creation_feedback

export const EXT_PIPELINE_CREATION_FEEDBACK_EXTENSION_NAME = "VK_EXT_pipeline_creation_feedback";

/// VK_GOOGLE_extension_194

export const GOOGLE_EXTENSION_194_EXTENSION_NAME = "VK_GOOGLE_extension_194";

/// VK_GOOGLE_extension_195

export const GOOGLE_EXTENSION_195_EXTENSION_NAME = "VK_GOOGLE_extension_195";

/// VK_GOOGLE_extension_196

export const GOOGLE_EXTENSION_196_EXTENSION_NAME = "VK_GOOGLE_extension_196";

/// VK_KHR_driver_properties

export const KHR_DRIVER_PROPERTIES_EXTENSION_NAME = "VK_KHR_driver_properties";

/// VK_KHR_shader_float_controls

export const KHR_SHADER_FLOAT_CONTROLS_EXTENSION_NAME = "VK_KHR_shader_float_controls";

/// VK_NV_shader_subgroup_partitioned

export const NV_SHADER_SUBGROUP_PARTITIONED_EXTENSION_NAME = "VK_NV_shader_subgroup_partitioned";

/// VK_KHR_depth_stencil_resolve

export const KHR_DEPTH_STENCIL_RESOLVE_EXTENSION_NAME = "VK_KHR_depth_stencil_resolve";

/// VK_KHR_swapchain_mutable_format

export const KHR_SWAPCHAIN_MUTABLE_FORMAT_EXTENSION_NAME = "VK_KHR_swapchain_mutable_format";

/// VK_NV_compute_shader_derivatives

export const NV_COMPUTE_SHADER_DERIVATIVES_EXTENSION_NAME = "VK_NV_compute_shader_derivatives";

/// VK_NV_mesh_shader

export const NV_MESH_SHADER_EXTENSION_NAME = "VK_NV_mesh_shader";

/// VK_NV_fragment_shader_barycentric

export const NV_FRAGMENT_SHADER_BARYCENTRIC_EXTENSION_NAME = "VK_NV_fragment_shader_barycentric";

/// VK_NV_shader_image_footprint

export const NV_SHADER_IMAGE_FOOTPRINT_EXTENSION_NAME = "VK_NV_shader_image_footprint";

/// VK_NV_scissor_exclusive

export const NV_SCISSOR_EXCLUSIVE_EXTENSION_NAME = "VK_NV_scissor_exclusive";

/// VK_NV_device_diagnostic_checkpoints

export const NV_DEVICE_DIAGNOSTIC_CHECKPOINTS_EXTENSION_NAME = "VK_NV_device_diagnostic_checkpoints";

/// VK_KHR_timeline_semaphore

export const KHR_TIMELINE_SEMAPHORE_EXTENSION_NAME = "VK_KHR_timeline_semaphore";

/// VK_KHR_extension_209

export const KHR_EXTENSION_209_EXTENSION_NAME = "VK_KHR_extension_209";

/// VK_INTEL_shader_integer_functions2

export const INTEL_SHADER_INTEGER_FUNCTIONS_2_EXTENSION_NAME = "VK_INTEL_shader_integer_functions2";

/// VK_INTEL_performance_query

export const INTEL_PERFORMANCE_QUERY_EXTENSION_NAME = "VK_INTEL_performance_query";

/// VK_KHR_vulkan_memory_model

export const KHR_VULKAN_MEMORY_MODEL_EXTENSION_NAME = "VK_KHR_vulkan_memory_model";

/// VK_EXT_pci_bus_info

export const EXT_PCI_BUS_INFO_EXTENSION_NAME = "VK_EXT_pci_bus_info";

/// VK_AMD_display_native_hdr

export const AMD_DISPLAY_NATIVE_HDR_EXTENSION_NAME = "VK_AMD_display_native_hdr";

/// VK_FUCHSIA_imagepipe_surface

export const FUCHSIA_IMAGEPIPE_SURFACE_EXTENSION_NAME = "VK_FUCHSIA_imagepipe_surface";

/// VK_KHR_shader_terminate_invocation

export const KHR_SHADER_TERMINATE_INVOCATION_EXTENSION_NAME = "VK_KHR_shader_terminate_invocation";

/// VK_GOOGLE_extension_217

export const GOOGLE_EXTENSION_217_EXTENSION_NAME = "VK_GOOGLE_extension_217";

/// VK_EXT_metal_surface

export const EXT_METAL_SURFACE_EXTENSION_NAME = "VK_EXT_metal_surface";

/// VK_EXT_fragment_density_map

export const EXT_FRAGMENT_DENSITY_MAP_EXTENSION_NAME = "VK_EXT_fragment_density_map";

/// VK_EXT_extension_220

export const EXT_EXTENSION_220_EXTENSION_NAME = "VK_EXT_extension_220";

/// VK_KHR_extension_221

export const KHR_EXTENSION_221_EXTENSION_NAME = "VK_KHR_extension_221";

/// VK_EXT_scalar_block_layout

export const EXT_SCALAR_BLOCK_LAYOUT_EXTENSION_NAME = "VK_EXT_scalar_block_layout";

/// VK_EXT_extension_223

export const EXT_EXTENSION_223_EXTENSION_NAME = "VK_EXT_extension_223";

/// VK_GOOGLE_hlsl_functionality1

export const GOOGLE_HLSL_FUNCTIONALITY_1_EXTENSION_NAME = "VK_GOOGLE_hlsl_functionality1";

/// VK_GOOGLE_decorate_string

export const GOOGLE_DECORATE_STRING_EXTENSION_NAME = "VK_GOOGLE_decorate_string";

/// VK_EXT_subgroup_size_control

export const EXT_SUBGROUP_SIZE_CONTROL_EXTENSION_NAME = "VK_EXT_subgroup_size_control";

/// VK_KHR_fragment_shading_rate

export const KHR_FRAGMENT_SHADING_RATE_EXTENSION_NAME = "VK_KHR_fragment_shading_rate";

/// VK_AMD_shader_core_properties2

export const AMD_SHADER_CORE_PROPERTIES_2_EXTENSION_NAME = "VK_AMD_shader_core_properties2";

/// VK_AMD_extension_229

export const AMD_EXTENSION_229_EXTENSION_NAME = "VK_AMD_extension_229";

/// VK_AMD_device_coherent_memory

export const AMD_DEVICE_COHERENT_MEMORY_EXTENSION_NAME = "VK_AMD_device_coherent_memory";

/// VK_AMD_extension_231

export const AMD_EXTENSION_231_EXTENSION_NAME = "VK_AMD_extension_231";

/// VK_AMD_extension_232

export const AMD_EXTENSION_232_EXTENSION_NAME = "VK_AMD_extension_232";

/// VK_AMD_extension_233

export const AMD_EXTENSION_233_EXTENSION_NAME = "VK_AMD_extension_233";

/// VK_AMD_extension_234

export const AMD_EXTENSION_234_EXTENSION_NAME = "VK_AMD_extension_234";

/// VK_EXT_shader_image_atomic_int64

export const EXT_SHADER_IMAGE_ATOMIC_INT64_EXTENSION_NAME = "VK_EXT_shader_image_atomic_int64";

/// VK_AMD_extension_236

export const AMD_EXTENSION_236_EXTENSION_NAME = "VK_AMD_extension_236";

/// VK_KHR_spirv_1_4

export const KHR_SPIRV_1_4_EXTENSION_NAME = "VK_KHR_spirv_1_4";

/// VK_EXT_memory_budget

export const EXT_MEMORY_BUDGET_EXTENSION_NAME = "VK_EXT_memory_budget";

/// VK_EXT_memory_priority

export const EXT_MEMORY_PRIORITY_EXTENSION_NAME = "VK_EXT_memory_priority";

/// VK_KHR_surface_protected_capabilities

export const KHR_SURFACE_PROTECTED_CAPABILITIES_EXTENSION_NAME = "VK_KHR_surface_protected_capabilities";

/// VK_NV_dedicated_allocation_image_aliasing

export const NV_DEDICATED_ALLOCATION_IMAGE_ALIASING_EXTENSION_NAME = "VK_NV_dedicated_allocation_image_aliasing";

/// VK_KHR_separate_depth_stencil_layouts

export const KHR_SEPARATE_DEPTH_STENCIL_LAYOUTS_EXTENSION_NAME = "VK_KHR_separate_depth_stencil_layouts";

/// VK_INTEL_extension_243

export const INTEL_EXTENSION_243_EXTENSION_NAME = "VK_INTEL_extension_243";

/// VK_MESA_extension_244

export const MESA_EXTENSION_244_EXTENSION_NAME = "VK_MESA_extension_244";

/// VK_EXT_buffer_device_address

export const EXT_BUFFER_DEVICE_ADDRESS_EXTENSION_NAME = "VK_EXT_buffer_device_address";

/// VK_EXT_tooling_info

export const EXT_TOOLING_INFO_EXTENSION_NAME = "VK_EXT_tooling_info";

/// VK_EXT_separate_stencil_usage

export const EXT_SEPARATE_STENCIL_USAGE_EXTENSION_NAME = "VK_EXT_separate_stencil_usage";

/// VK_EXT_validation_features

export const EXT_VALIDATION_FEATURES_EXTENSION_NAME = "VK_EXT_validation_features";

/// VK_KHR_present_wait

export const KHR_PRESENT_WAIT_EXTENSION_NAME = "VK_KHR_present_wait";

/// VK_NV_cooperative_matrix

export const NV_COOPERATIVE_MATRIX_EXTENSION_NAME = "VK_NV_cooperative_matrix";

/// VK_NV_coverage_reduction_mode

export const NV_COVERAGE_REDUCTION_MODE_EXTENSION_NAME = "VK_NV_coverage_reduction_mode";

/// VK_EXT_fragment_shader_interlock

export const EXT_FRAGMENT_SHADER_INTERLOCK_EXTENSION_NAME = "VK_EXT_fragment_shader_interlock";

/// VK_EXT_ycbcr_image_arrays

export const EXT_YCBCR_IMAGE_ARRAYS_EXTENSION_NAME = "VK_EXT_ycbcr_image_arrays";

/// VK_KHR_uniform_buffer_standard_layout

export const KHR_UNIFORM_BUFFER_STANDARD_LAYOUT_EXTENSION_NAME = "VK_KHR_uniform_buffer_standard_layout";

/// VK_EXT_provoking_vertex

export const EXT_PROVOKING_VERTEX_EXTENSION_NAME = "VK_EXT_provoking_vertex";

/// VK_EXT_full_screen_exclusive

export const EXT_FULL_SCREEN_EXCLUSIVE_EXTENSION_NAME = "VK_EXT_full_screen_exclusive";

/// VK_EXT_headless_surface

export const EXT_HEADLESS_SURFACE_EXTENSION_NAME = "VK_EXT_headless_surface";

/// VK_KHR_buffer_device_address

export const KHR_BUFFER_DEVICE_ADDRESS_EXTENSION_NAME = "VK_KHR_buffer_device_address";

/// VK_EXT_extension_259

export const EXT_EXTENSION_259_EXTENSION_NAME = "VK_EXT_extension_259";

/// VK_EXT_line_rasterization

export const EXT_LINE_RASTERIZATION_EXTENSION_NAME = "VK_EXT_line_rasterization";

/// VK_EXT_shader_atomic_float

export const EXT_SHADER_ATOMIC_FLOAT_EXTENSION_NAME = "VK_EXT_shader_atomic_float";

/// VK_EXT_host_query_reset

export const EXT_HOST_QUERY_RESET_EXTENSION_NAME = "VK_EXT_host_query_reset";

/// VK_GGP_extension_263

export const GGP_EXTENSION_263_EXTENSION_NAME = "VK_GGP_extension_263";

/// VK_BRCM_extension_264

export const BRCM_EXTENSION_264_EXTENSION_NAME = "VK_BRCM_extension_264";

/// VK_BRCM_extension_265

export const BRCM_EXTENSION_265_EXTENSION_NAME = "VK_BRCM_extension_265";

/// VK_EXT_index_type_uint8

export const EXT_INDEX_TYPE_UINT8_EXTENSION_NAME = "VK_EXT_index_type_uint8";

/// VK_EXT_extension_267

export const EXT_EXTENSION_267_EXTENSION_NAME = "VK_EXT_extension_267";

/// VK_EXT_extended_dynamic_state

export const EXT_EXTENDED_DYNAMIC_STATE_EXTENSION_NAME = "VK_EXT_extended_dynamic_state";

/// VK_KHR_deferred_host_operations

export const KHR_DEFERRED_HOST_OPERATIONS_EXTENSION_NAME = "VK_KHR_deferred_host_operations";

/// VK_KHR_pipeline_executable_properties

export const KHR_PIPELINE_EXECUTABLE_PROPERTIES_EXTENSION_NAME = "VK_KHR_pipeline_executable_properties";

/// VK_INTEL_extension_271

export const INTEL_EXTENSION_271_EXTENSION_NAME = "VK_INTEL_extension_271";

/// VK_INTEL_extension_272

export const INTEL_EXTENSION_272_EXTENSION_NAME = "VK_INTEL_extension_272";

/// VK_INTEL_extension_273

export const INTEL_EXTENSION_273_EXTENSION_NAME = "VK_INTEL_extension_273";

/// VK_EXT_shader_atomic_float2

export const EXT_SHADER_ATOMIC_FLOAT_2_EXTENSION_NAME = "VK_EXT_shader_atomic_float2";

/// VK_KHR_extension_275

export const KHR_EXTENSION_275_EXTENSION_NAME = "VK_KHR_extension_275";

/// VK_KHR_extension_276

export const KHR_EXTENSION_276_EXTENSION_NAME = "VK_KHR_extension_276";

/// VK_EXT_shader_demote_to_helper_invocation

export const EXT_SHADER_DEMOTE_TO_HELPER_INVOCATION_EXTENSION_NAME = "VK_EXT_shader_demote_to_helper_invocation";

/// VK_NV_device_generated_commands

export const NV_DEVICE_GENERATED_COMMANDS_EXTENSION_NAME = "VK_NV_device_generated_commands";

/// VK_NV_inherited_viewport_scissor

export const NV_INHERITED_VIEWPORT_SCISSOR_EXTENSION_NAME = "VK_NV_inherited_viewport_scissor";

/// VK_KHR_extension_280

export const KHR_EXTENSION_280_EXTENSION_NAME = "VK_KHR_extension_280";

/// VK_KHR_shader_integer_dot_product

export const KHR_SHADER_INTEGER_DOT_PRODUCT_EXTENSION_NAME = "VK_KHR_shader_integer_dot_product";

/// VK_EXT_texel_buffer_alignment

export const EXT_TEXEL_BUFFER_ALIGNMENT_EXTENSION_NAME = "VK_EXT_texel_buffer_alignment";

/// VK_QCOM_render_pass_transform

export const QCOM_RENDER_PASS_TRANSFORM_EXTENSION_NAME = "VK_QCOM_render_pass_transform";

/// VK_EXT_extension_284

export const EXT_EXTENSION_284_EXTENSION_NAME = "VK_EXT_extension_284";

/// VK_EXT_device_memory_report

export const EXT_DEVICE_MEMORY_REPORT_EXTENSION_NAME = "VK_EXT_device_memory_report";

/// VK_EXT_acquire_drm_display

export const EXT_ACQUIRE_DRM_DISPLAY_EXTENSION_NAME = "VK_EXT_acquire_drm_display";

/// VK_EXT_robustness2

export const EXT_ROBUSTNESS_2_EXTENSION_NAME = "VK_EXT_robustness2";

/// VK_EXT_custom_border_color

export const EXT_CUSTOM_BORDER_COLOR_EXTENSION_NAME = "VK_EXT_custom_border_color";

/// VK_EXT_extension_289

export const EXT_EXTENSION_289_EXTENSION_NAME = "VK_EXT_extension_289";

/// VK_GOOGLE_user_type

export const GOOGLE_USER_TYPE_EXTENSION_NAME = "VK_GOOGLE_user_type";

/// VK_KHR_pipeline_library

export const KHR_PIPELINE_LIBRARY_EXTENSION_NAME = "VK_KHR_pipeline_library";

/// VK_NV_extension_292

export const NV_EXTENSION_292_EXTENSION_NAME = "VK_NV_extension_292";

/// VK_NV_present_barrier

export const NV_PRESENT_BARRIER_EXTENSION_NAME = "VK_NV_present_barrier";

/// VK_KHR_shader_non_semantic_info

export const KHR_SHADER_NON_SEMANTIC_INFO_EXTENSION_NAME = "VK_KHR_shader_non_semantic_info";

/// VK_KHR_present_id

export const KHR_PRESENT_ID_EXTENSION_NAME = "VK_KHR_present_id";

/// VK_EXT_private_data

export const EXT_PRIVATE_DATA_EXTENSION_NAME = "VK_EXT_private_data";

/// VK_KHR_extension_297

export const KHR_EXTENSION_297_EXTENSION_NAME = "VK_KHR_extension_297";

/// VK_EXT_pipeline_creation_cache_control

export const EXT_PIPELINE_CREATION_CACHE_CONTROL_EXTENSION_NAME = "VK_EXT_pipeline_creation_cache_control";

/// VK_KHR_extension_299

export const KHR_EXTENSION_299_EXTENSION_NAME = "VK_KHR_extension_299";

/// VK_KHR_video_encode_queue

export const KHR_VIDEO_ENCODE_QUEUE_EXTENSION_NAME = "VK_KHR_video_encode_queue";

/// VK_NV_device_diagnostics_config

export const NV_DEVICE_DIAGNOSTICS_CONFIG_EXTENSION_NAME = "VK_NV_device_diagnostics_config";

/// VK_QCOM_render_pass_store_ops

export const QCOM_RENDER_PASS_STORE_OPS_EXTENSION_NAME = "VK_QCOM_render_pass_store_ops";

/// VK_QCOM_extension_303

export const QCOM_EXTENSION_303_EXTENSION_NAME = "VK_QCOM_extension_303";

/// VK_QCOM_extension_304

export const QCOM_EXTENSION_304_EXTENSION_NAME = "VK_QCOM_extension_304";

/// VK_QCOM_extension_305

export const QCOM_EXTENSION_305_EXTENSION_NAME = "VK_QCOM_extension_305";

/// VK_QCOM_extension_306

export const QCOM_EXTENSION_306_EXTENSION_NAME = "VK_QCOM_extension_306";

/// VK_QCOM_extension_307

export const QCOM_EXTENSION_307_EXTENSION_NAME = "VK_QCOM_extension_307";

/// VK_NV_extension_308

export const NV_EXTENSION_308_EXTENSION_NAME = "VK_NV_extension_308";

/// VK_KHR_extension_309

export const KHR_EXTENSION_309_EXTENSION_NAME = "VK_KHR_extension_309";

/// VK_QCOM_extension_310

export const QCOM_EXTENSION_310_EXTENSION_NAME = "VK_QCOM_extension_310";

/// VK_NV_extension_311

export const NV_EXTENSION_311_EXTENSION_NAME = "VK_NV_extension_311";

/// VK_EXT_metal_objects

export const EXT_METAL_OBJECTS_EXTENSION_NAME = "VK_EXT_metal_objects";

/// VK_EXT_extension_313

export const EXT_EXTENSION_313_EXTENSION_NAME = "VK_EXT_extension_313";

/// VK_AMD_extension_314

export const AMD_EXTENSION_314_EXTENSION_NAME = "VK_AMD_extension_314";

/// VK_KHR_synchronization2

export const KHR_SYNCHRONIZATION_2_EXTENSION_NAME = "VK_KHR_synchronization2";

/// VK_AMD_extension_316

export const AMD_EXTENSION_316_EXTENSION_NAME = "VK_AMD_extension_316";

/// VK_EXT_descriptor_buffer

export const EXT_DESCRIPTOR_BUFFER_EXTENSION_NAME = "VK_EXT_descriptor_buffer";

/// VK_AMD_extension_318

export const AMD_EXTENSION_318_EXTENSION_NAME = "VK_AMD_extension_318";

/// VK_AMD_extension_319

export const AMD_EXTENSION_319_EXTENSION_NAME = "VK_AMD_extension_319";

/// VK_AMD_extension_320

export const AMD_EXTENSION_320_EXTENSION_NAME = "VK_AMD_extension_320";

/// VK_EXT_graphics_pipeline_library

export const EXT_GRAPHICS_PIPELINE_LIBRARY_EXTENSION_NAME = "VK_EXT_graphics_pipeline_library";

/// VK_AMD_shader_early_and_late_fragment_tests

export const AMD_SHADER_EARLY_AND_LATE_FRAGMENT_TESTS_EXTENSION_NAME = "VK_AMD_shader_early_and_late_fragment_tests";

/// VK_KHR_fragment_shader_barycentric

export const KHR_FRAGMENT_SHADER_BARYCENTRIC_EXTENSION_NAME = "VK_KHR_fragment_shader_barycentric";

/// VK_KHR_shader_subgroup_uniform_control_flow

export const KHR_SHADER_SUBGROUP_UNIFORM_CONTROL_FLOW_EXTENSION_NAME = "VK_KHR_shader_subgroup_uniform_control_flow";

/// VK_KHR_extension_325

export const KHR_EXTENSION_325_EXTENSION_NAME = "VK_KHR_extension_325";

/// VK_KHR_zero_initialize_workgroup_memory

export const KHR_ZERO_INITIALIZE_WORKGROUP_MEMORY_EXTENSION_NAME = "VK_KHR_zero_initialize_workgroup_memory";

/// VK_NV_fragment_shading_rate_enums

export const NV_FRAGMENT_SHADING_RATE_ENUMS_EXTENSION_NAME = "VK_NV_fragment_shading_rate_enums";

/// VK_NV_ray_tracing_motion_blur

export const NV_RAY_TRACING_MOTION_BLUR_EXTENSION_NAME = "VK_NV_ray_tracing_motion_blur";

/// VK_EXT_mesh_shader

export const EXT_MESH_SHADER_EXTENSION_NAME = "VK_EXT_mesh_shader";

/// VK_NV_extension_330

export const NV_EXTENSION_330_EXTENSION_NAME = "VK_NV_extension_330";

/// VK_EXT_ycbcr_2plane_444_formats

export const EXT_YCBCR_2PLANE_444_FORMATS_EXTENSION_NAME = "VK_EXT_ycbcr_2plane_444_formats";

/// VK_NV_extension_332

export const NV_EXTENSION_332_EXTENSION_NAME = "VK_NV_extension_332";

/// VK_EXT_fragment_density_map2

export const EXT_FRAGMENT_DENSITY_MAP_2_EXTENSION_NAME = "VK_EXT_fragment_density_map2";

/// VK_QCOM_rotated_copy_commands

export const QCOM_ROTATED_COPY_COMMANDS_EXTENSION_NAME = "VK_QCOM_rotated_copy_commands";

/// VK_KHR_extension_335

export const KHR_EXTENSION_335_EXTENSION_NAME = "VK_KHR_extension_335";

/// VK_EXT_image_robustness

export const EXT_IMAGE_ROBUSTNESS_EXTENSION_NAME = "VK_EXT_image_robustness";

/// VK_KHR_workgroup_memory_explicit_layout

export const KHR_WORKGROUP_MEMORY_EXPLICIT_LAYOUT_EXTENSION_NAME = "VK_KHR_workgroup_memory_explicit_layout";

/// VK_KHR_copy_commands2

export const KHR_COPY_COMMANDS_2_EXTENSION_NAME = "VK_KHR_copy_commands2";

/// VK_EXT_image_compression_control

export const EXT_IMAGE_COMPRESSION_CONTROL_EXTENSION_NAME = "VK_EXT_image_compression_control";

/// VK_EXT_attachment_feedback_loop_layout

export const EXT_ATTACHMENT_FEEDBACK_LOOP_LAYOUT_EXTENSION_NAME = "VK_EXT_attachment_feedback_loop_layout";

/// VK_EXT_4444_formats

export const EXT_4444_FORMATS_EXTENSION_NAME = "VK_EXT_4444_formats";

/// VK_EXT_device_fault

export const EXT_DEVICE_FAULT_EXTENSION_NAME = "VK_EXT_device_fault";

/// VK_ARM_rasterization_order_attachment_access

export const ARM_RASTERIZATION_ORDER_ATTACHMENT_ACCESS_EXTENSION_NAME = "VK_ARM_rasterization_order_attachment_access";

/// VK_ARM_extension_344

export const ARM_EXTENSION_344_EXTENSION_NAME = "VK_ARM_extension_344";

/// VK_EXT_rgba10x6_formats

export const EXT_RGBA10X6_FORMATS_EXTENSION_NAME = "VK_EXT_rgba10x6_formats";

/// VK_NV_acquire_winrt_display

export const NV_ACQUIRE_WINRT_DISPLAY_EXTENSION_NAME = "VK_NV_acquire_winrt_display";

/// VK_EXT_directfb_surface

export const EXT_DIRECTFB_SURFACE_EXTENSION_NAME = "VK_EXT_directfb_surface";

/// VK_KHR_extension_350

export const KHR_EXTENSION_350_EXTENSION_NAME = "VK_KHR_extension_350";

/// VK_NV_extension_351

export const NV_EXTENSION_351_EXTENSION_NAME = "VK_NV_extension_351";

/// VK_VALVE_mutable_descriptor_type

export const VALVE_MUTABLE_DESCRIPTOR_TYPE_EXTENSION_NAME = "VK_VALVE_mutable_descriptor_type";

/// VK_EXT_vertex_input_dynamic_state

export const EXT_VERTEX_INPUT_DYNAMIC_STATE_EXTENSION_NAME = "VK_EXT_vertex_input_dynamic_state";

/// VK_EXT_physical_device_drm

export const EXT_PHYSICAL_DEVICE_DRM_EXTENSION_NAME = "VK_EXT_physical_device_drm";

/// VK_EXT_device_address_binding_report

export const EXT_DEVICE_ADDRESS_BINDING_REPORT_EXTENSION_NAME = "VK_EXT_device_address_binding_report";

/// VK_EXT_depth_clip_control

export const EXT_DEPTH_CLIP_CONTROL_EXTENSION_NAME = "VK_EXT_depth_clip_control";

/// VK_EXT_primitive_topology_list_restart

export const EXT_PRIMITIVE_TOPOLOGY_LIST_RESTART_EXTENSION_NAME = "VK_EXT_primitive_topology_list_restart";

/// VK_KHR_extension_358

export const KHR_EXTENSION_358_EXTENSION_NAME = "VK_KHR_extension_358";

/// VK_EXT_extension_359

export const EXT_EXTENSION_359_EXTENSION_NAME = "VK_EXT_extension_359";

/// VK_EXT_extension_360

export const EXT_EXTENSION_360_EXTENSION_NAME = "VK_EXT_extension_360";

/// VK_KHR_format_feature_flags2

export const KHR_FORMAT_FEATURE_FLAGS_2_EXTENSION_NAME = "VK_KHR_format_feature_flags2";

/// VK_EXT_extension_362

export const EXT_EXTENSION_362_EXTENSION_NAME = "VK_EXT_extension_362";

/// VK_EXT_extension_363

export const EXT_EXTENSION_363_EXTENSION_NAME = "VK_EXT_extension_363";

/// VK_FUCHSIA_extension_364

export const FUCHSIA_EXTENSION_364_EXTENSION_NAME = "VK_FUCHSIA_extension_364";

/// VK_FUCHSIA_external_memory

export const FUCHSIA_EXTERNAL_MEMORY_EXTENSION_NAME = "VK_FUCHSIA_external_memory";

/// VK_FUCHSIA_external_semaphore

export const FUCHSIA_EXTERNAL_SEMAPHORE_EXTENSION_NAME = "VK_FUCHSIA_external_semaphore";

/// VK_FUCHSIA_buffer_collection

export const FUCHSIA_BUFFER_COLLECTION_EXTENSION_NAME = "VK_FUCHSIA_buffer_collection";

/// VK_FUCHSIA_extension_368

export const FUCHSIA_EXTENSION_368_EXTENSION_NAME = "VK_FUCHSIA_extension_368";

/// VK_QCOM_extension_369

export const QCOM_EXTENSION_369_EXTENSION_NAME = "VK_QCOM_extension_369";

/// VK_HUAWEI_subpass_shading

export const HUAWEI_SUBPASS_SHADING_EXTENSION_NAME = "VK_HUAWEI_subpass_shading";

/// VK_HUAWEI_invocation_mask

export const HUAWEI_INVOCATION_MASK_EXTENSION_NAME = "VK_HUAWEI_invocation_mask";

/// VK_NV_external_memory_rdma

export const NV_EXTERNAL_MEMORY_RDMA_EXTENSION_NAME = "VK_NV_external_memory_rdma";

/// VK_EXT_pipeline_properties

export const EXT_PIPELINE_PROPERTIES_EXTENSION_NAME = "VK_EXT_pipeline_properties";

/// VK_NV_extension_374

export const NV_EXTENSION_374_EXTENSION_NAME = "VK_NV_extension_374";

/// VK_NV_extension_375

export const NV_EXTENSION_375_EXTENSION_NAME = "VK_NV_extension_375";

/// VK_EXT_extension_376

export const EXT_EXTENSION_376_EXTENSION_NAME = "VK_EXT_extension_376";

/// VK_EXT_multisampled_render_to_single_sampled

export const EXT_MULTISAMPLED_RENDER_TO_SINGLE_SAMPLED_EXTENSION_NAME = "VK_EXT_multisampled_render_to_single_sampled";

/// VK_EXT_extended_dynamic_state2

export const EXT_EXTENDED_DYNAMIC_STATE_2_EXTENSION_NAME = "VK_EXT_extended_dynamic_state2";

/// VK_QNX_screen_surface

export const QNX_SCREEN_SURFACE_EXTENSION_NAME = "VK_QNX_screen_surface";

/// VK_KHR_extension_380

export const KHR_EXTENSION_380_EXTENSION_NAME = "VK_KHR_extension_380";

/// VK_KHR_extension_381

export const KHR_EXTENSION_381_EXTENSION_NAME = "VK_KHR_extension_381";

/// VK_EXT_color_write_enable

export const EXT_COLOR_WRITE_ENABLE_EXTENSION_NAME = "VK_EXT_color_write_enable";

/// VK_EXT_primitives_generated_query

export const EXT_PRIMITIVES_GENERATED_QUERY_EXTENSION_NAME = "VK_EXT_primitives_generated_query";

/// VK_EXT_extension_384

export const EXT_EXTENSION_384_EXTENSION_NAME = "VK_EXT_extension_384";

/// VK_MESA_extension_385

export const MESA_EXTENSION_385_EXTENSION_NAME = "VK_MESA_extension_385";

/// VK_GOOGLE_extension_386

export const GOOGLE_EXTENSION_386_EXTENSION_NAME = "VK_GOOGLE_extension_386";

/// VK_KHR_ray_tracing_maintenance1

export const KHR_RAY_TRACING_MAINTENANCE_1_EXTENSION_NAME = "VK_KHR_ray_tracing_maintenance1";

/// VK_EXT_extension_388

export const EXT_EXTENSION_388_EXTENSION_NAME = "VK_EXT_extension_388";

/// VK_EXT_global_priority_query

export const EXT_GLOBAL_PRIORITY_QUERY_EXTENSION_NAME = "VK_EXT_global_priority_query";

/// VK_EXT_extension_390

export const EXT_EXTENSION_390_EXTENSION_NAME = "VK_EXT_extension_390";

/// VK_EXT_extension_391

export const EXT_EXTENSION_391_EXTENSION_NAME = "VK_EXT_extension_391";

/// VK_EXT_image_view_min_lod

export const EXT_IMAGE_VIEW_MIN_LOD_EXTENSION_NAME = "VK_EXT_image_view_min_lod";

/// VK_EXT_multi_draw

export const EXT_MULTI_DRAW_EXTENSION_NAME = "VK_EXT_multi_draw";

/// VK_EXT_image_2d_view_of_3d

export const EXT_IMAGE_2D_VIEW_OF_3D_EXTENSION_NAME = "VK_EXT_image_2d_view_of_3d";

/// VK_KHR_portability_enumeration

export const KHR_PORTABILITY_ENUMERATION_EXTENSION_NAME = "VK_KHR_portability_enumeration";

/// VK_KHR_extension_396

export const KHR_EXTENSION_396_EXTENSION_NAME = "VK_KHR_extension_396";

/// VK_EXT_opacity_micromap

export const EXT_OPACITY_MICROMAP_EXTENSION_NAME = "VK_EXT_opacity_micromap";

/// VK_NV_extension_398

export const NV_EXTENSION_398_EXTENSION_NAME = "VK_NV_extension_398";

/// VK_JUICE_extension_399

export const JUICE_EXTENSION_399_EXTENSION_NAME = "VK_JUICE_extension_399";

/// VK_JUICE_extension_400

export const JUICE_EXTENSION_400_EXTENSION_NAME = "VK_JUICE_extension_400";

/// VK_EXT_load_store_op_none

export const EXT_LOAD_STORE_OP_NONE_EXTENSION_NAME = "VK_EXT_load_store_op_none";

/// VK_FB_extension_402

export const FB_EXTENSION_402_EXTENSION_NAME = "VK_FB_extension_402";

/// VK_FB_extension_403

export const FB_EXTENSION_403_EXTENSION_NAME = "VK_FB_extension_403";

/// VK_FB_extension_404

export const FB_EXTENSION_404_EXTENSION_NAME = "VK_FB_extension_404";

/// VK_HUAWEI_extension_405

export const HUAWEI_EXTENSION_405_EXTENSION_NAME = "VK_HUAWEI_extension_405";

/// VK_HUAWEI_extension_406

export const HUAWEI_EXTENSION_406_EXTENSION_NAME = "VK_HUAWEI_extension_406";

/// VK_GGP_extension_407

export const GGP_EXTENSION_407_EXTENSION_NAME = "VK_GGP_extension_407";

/// VK_GGP_extension_408

export const GGP_EXTENSION_408_EXTENSION_NAME = "VK_GGP_extension_408";

/// VK_GGP_extension_409

export const GGP_EXTENSION_409_EXTENSION_NAME = "VK_GGP_extension_409";

/// VK_GGP_extension_410

export const GGP_EXTENSION_410_EXTENSION_NAME = "VK_GGP_extension_410";

/// VK_GGP_extension_411

export const GGP_EXTENSION_411_EXTENSION_NAME = "VK_GGP_extension_411";

/// VK_EXT_border_color_swizzle

export const EXT_BORDER_COLOR_SWIZZLE_EXTENSION_NAME = "VK_EXT_border_color_swizzle";

/// VK_EXT_pageable_device_local_memory

export const EXT_PAGEABLE_DEVICE_LOCAL_MEMORY_EXTENSION_NAME = "VK_EXT_pageable_device_local_memory";

/// VK_KHR_maintenance4

export const KHR_MAINTENANCE_4_EXTENSION_NAME = "VK_KHR_maintenance4";

/// VK_HUAWEI_extension_415

export const HUAWEI_EXTENSION_415_EXTENSION_NAME = "VK_HUAWEI_extension_415";

/// VK_ARM_extension_416

export const ARM_EXTENSION_416_EXTENSION_NAME = "VK_ARM_extension_416";

/// VK_KHR_extension_417

export const KHR_EXTENSION_417_EXTENSION_NAME = "VK_KHR_extension_417";

/// VK_ARM_extension_418

export const ARM_EXTENSION_418_EXTENSION_NAME = "VK_ARM_extension_418";

/// VK_EXT_extension_419

export const EXT_EXTENSION_419_EXTENSION_NAME = "VK_EXT_extension_419";

/// VK_EXT_extension_420

export const EXT_EXTENSION_420_EXTENSION_NAME = "VK_EXT_extension_420";

/// VK_VALVE_descriptor_set_host_mapping

export const VALVE_DESCRIPTOR_SET_HOST_MAPPING_EXTENSION_NAME = "VK_VALVE_descriptor_set_host_mapping";

/// VK_EXT_depth_clamp_zero_one

export const EXT_DEPTH_CLAMP_ZERO_ONE_EXTENSION_NAME = "VK_EXT_depth_clamp_zero_one";

/// VK_EXT_non_seamless_cube_map

export const EXT_NON_SEAMLESS_CUBE_MAP_EXTENSION_NAME = "VK_EXT_non_seamless_cube_map";

/// VK_ARM_extension_424

export const ARM_EXTENSION_424_EXTENSION_NAME = "VK_ARM_extension_424";

/// VK_ARM_extension_425

export const ARM_EXTENSION_425_EXTENSION_NAME = "VK_ARM_extension_425";

/// VK_QCOM_fragment_density_map_offset

export const QCOM_FRAGMENT_DENSITY_MAP_OFFSET_EXTENSION_NAME = "VK_QCOM_fragment_density_map_offset";

/// VK_NV_copy_memory_indirect

export const NV_COPY_MEMORY_INDIRECT_EXTENSION_NAME = "VK_NV_copy_memory_indirect";

/// VK_NV_memory_decompression

export const NV_MEMORY_DECOMPRESSION_EXTENSION_NAME = "VK_NV_memory_decompression";

/// VK_NV_extension_429

export const NV_EXTENSION_429_EXTENSION_NAME = "VK_NV_extension_429";

/// VK_NV_extension_430

export const NV_EXTENSION_430_EXTENSION_NAME = "VK_NV_extension_430";

/// VK_NV_linear_color_attachment

export const NV_LINEAR_COLOR_ATTACHMENT_EXTENSION_NAME = "VK_NV_linear_color_attachment";

/// VK_NV_extension_432

export const NV_EXTENSION_432_EXTENSION_NAME = "VK_NV_extension_432";

/// VK_NV_extension_433

export const NV_EXTENSION_433_EXTENSION_NAME = "VK_NV_extension_433";

/// VK_GOOGLE_surfaceless_query

export const GOOGLE_SURFACELESS_QUERY_EXTENSION_NAME = "VK_GOOGLE_surfaceless_query";

/// VK_KHR_extension_435

export const KHR_EXTENSION_435_EXTENSION_NAME = "VK_KHR_extension_435";

/// VK_NV_extension_436

export const NV_EXTENSION_436_EXTENSION_NAME = "VK_NV_extension_436";

/// VK_EXT_extension_437

export const EXT_EXTENSION_437_EXTENSION_NAME = "VK_EXT_extension_437";

/// VK_EXT_image_compression_control_swapchain

export const EXT_IMAGE_COMPRESSION_CONTROL_SWAPCHAIN_EXTENSION_NAME = "VK_EXT_image_compression_control_swapchain";

/// VK_SEC_extension_439

export const SEC_EXTENSION_439_EXTENSION_NAME = "VK_SEC_extension_439";

/// VK_QCOM_extension_440

export const QCOM_EXTENSION_440_EXTENSION_NAME = "VK_QCOM_extension_440";

/// VK_QCOM_image_processing

export const QCOM_IMAGE_PROCESSING_EXTENSION_NAME = "VK_QCOM_image_processing";

/// VK_COREAVI_extension_442

export const COREAVI_EXTENSION_442_EXTENSION_NAME = "VK_COREAVI_extension_442";

/// VK_COREAVI_extension_443

export const COREAVI_EXTENSION_443_EXTENSION_NAME = "VK_COREAVI_extension_443";

/// VK_COREAVI_extension_444

export const COREAVI_EXTENSION_444_EXTENSION_NAME = "VK_COREAVI_extension_444";

/// VK_COREAVI_extension_445

export const COREAVI_EXTENSION_445_EXTENSION_NAME = "VK_COREAVI_extension_445";

/// VK_COREAVI_extension_446

export const COREAVI_EXTENSION_446_EXTENSION_NAME = "VK_COREAVI_extension_446";

/// VK_COREAVI_extension_447

export const COREAVI_EXTENSION_447_EXTENSION_NAME = "VK_COREAVI_extension_447";

/// VK_SEC_extension_448

export const SEC_EXTENSION_448_EXTENSION_NAME = "VK_SEC_extension_448";

/// VK_SEC_extension_449

export const SEC_EXTENSION_449_EXTENSION_NAME = "VK_SEC_extension_449";

/// VK_SEC_extension_450

export const SEC_EXTENSION_450_EXTENSION_NAME = "VK_SEC_extension_450";

/// VK_SEC_extension_451

export const SEC_EXTENSION_451_EXTENSION_NAME = "VK_SEC_extension_451";

/// VK_NV_extension_452

export const NV_EXTENSION_452_EXTENSION_NAME = "VK_NV_extension_452";

/// VK_ARM_extension_453

export const ARM_EXTENSION_453_EXTENSION_NAME = "VK_ARM_extension_453";

/// VK_GOOGLE_extension_454

export const GOOGLE_EXTENSION_454_EXTENSION_NAME = "VK_GOOGLE_extension_454";

/// VK_GOOGLE_extension_455

export const GOOGLE_EXTENSION_455_EXTENSION_NAME = "VK_GOOGLE_extension_455";

/// VK_EXT_extended_dynamic_state3

export const EXT_EXTENDED_DYNAMIC_STATE_3_EXTENSION_NAME = "VK_EXT_extended_dynamic_state3";

/// VK_EXT_extension_457

export const EXT_EXTENSION_457_EXTENSION_NAME = "VK_EXT_extension_457";

/// VK_EXT_extension_458

export const EXT_EXTENSION_458_EXTENSION_NAME = "VK_EXT_extension_458";

/// VK_EXT_subpass_merge_feedback

export const EXT_SUBPASS_MERGE_FEEDBACK_EXTENSION_NAME = "VK_EXT_subpass_merge_feedback";

/// VK_EXT_extension_460

export const EXT_EXTENSION_460_EXTENSION_NAME = "VK_EXT_extension_460";

/// VK_EXT_extension_461

export const EXT_EXTENSION_461_EXTENSION_NAME = "VK_EXT_extension_461";

/// VK_EXT_extension_462

export const EXT_EXTENSION_462_EXTENSION_NAME = "VK_EXT_extension_462";

/// VK_EXT_shader_module_identifier

export const EXT_SHADER_MODULE_IDENTIFIER_EXTENSION_NAME = "VK_EXT_shader_module_identifier";

/// VK_EXT_rasterization_order_attachment_access

export const EXT_RASTERIZATION_ORDER_ATTACHMENT_ACCESS_EXTENSION_NAME = "VK_EXT_rasterization_order_attachment_access";

/// VK_NV_optical_flow

export const NV_OPTICAL_FLOW_EXTENSION_NAME = "VK_NV_optical_flow";

/// VK_EXT_legacy_dithering

export const EXT_LEGACY_DITHERING_EXTENSION_NAME = "VK_EXT_legacy_dithering";

/// VK_EXT_pipeline_protected_access

export const EXT_PIPELINE_PROTECTED_ACCESS_EXTENSION_NAME = "VK_EXT_pipeline_protected_access";

/// VK_EXT_extension_468

export const EXT_EXTENSION_468_EXTENSION_NAME = "VK_EXT_extension_468";

/// VK_ANDROID_extension_469

export const ANDROID_EXTENSION_469_EXTENSION_NAME = "VK_ANDROID_extension_469";

/// VK_AMD_extension_470

export const AMD_EXTENSION_470_EXTENSION_NAME = "VK_AMD_extension_470";

/// VK_AMD_extension_471

export const AMD_EXTENSION_471_EXTENSION_NAME = "VK_AMD_extension_471";

/// VK_AMD_extension_472

export const AMD_EXTENSION_472_EXTENSION_NAME = "VK_AMD_extension_472";

/// VK_AMD_extension_473

export const AMD_EXTENSION_473_EXTENSION_NAME = "VK_AMD_extension_473";

/// VK_AMD_extension_474

export const AMD_EXTENSION_474_EXTENSION_NAME = "VK_AMD_extension_474";

/// VK_AMD_extension_475

export const AMD_EXTENSION_475_EXTENSION_NAME = "VK_AMD_extension_475";

/// VK_AMD_extension_476

export const AMD_EXTENSION_476_EXTENSION_NAME = "VK_AMD_extension_476";

/// VK_AMD_extension_477

export const AMD_EXTENSION_477_EXTENSION_NAME = "VK_AMD_extension_477";

/// VK_AMD_extension_478

export const AMD_EXTENSION_478_EXTENSION_NAME = "VK_AMD_extension_478";

/// VK_AMD_extension_479

export const AMD_EXTENSION_479_EXTENSION_NAME = "VK_AMD_extension_479";

/// VK_EXT_extension_480

export const EXT_EXTENSION_480_EXTENSION_NAME = "VK_EXT_extension_480";

/// VK_EXT_extension_481

export const EXT_EXTENSION_481_EXTENSION_NAME = "VK_EXT_extension_481";

/// VK_EXT_extension_482

export const EXT_EXTENSION_482_EXTENSION_NAME = "VK_EXT_extension_482";

/// VK_EXT_extension_483

export const EXT_EXTENSION_483_EXTENSION_NAME = "VK_EXT_extension_483";

/// VK_EXT_extension_484

export const EXT_EXTENSION_484_EXTENSION_NAME = "VK_EXT_extension_484";

/// VK_QCOM_tile_properties

export const QCOM_TILE_PROPERTIES_EXTENSION_NAME = "VK_QCOM_tile_properties";

/// VK_SEC_amigo_profiling

export const SEC_AMIGO_PROFILING_EXTENSION_NAME = "VK_SEC_amigo_profiling";

/// VK_EXT_extension_487

export const EXT_EXTENSION_487_EXTENSION_NAME = "VK_EXT_extension_487";

/// VK_EXT_extension_488

export const EXT_EXTENSION_488_EXTENSION_NAME = "VK_EXT_extension_488";

/// VK_QCOM_extension_489

export const QCOM_EXTENSION_489_EXTENSION_NAME = "VK_QCOM_extension_489";

/// VK_NV_extension_490

export const NV_EXTENSION_490_EXTENSION_NAME = "VK_NV_extension_490";

/// VK_NV_ray_tracing_invocation_reorder

export const NV_RAY_TRACING_INVOCATION_REORDER_EXTENSION_NAME = "VK_NV_ray_tracing_invocation_reorder";

/// VK_NV_extension_492

export const NV_EXTENSION_492_EXTENSION_NAME = "VK_NV_extension_492";

/// VK_NV_extension_493

export const NV_EXTENSION_493_EXTENSION_NAME = "VK_NV_extension_493";

/// VK_NV_extension_494

export const NV_EXTENSION_494_EXTENSION_NAME = "VK_NV_extension_494";

/// VK_EXT_mutable_descriptor_type

export const EXT_MUTABLE_DESCRIPTOR_TYPE_EXTENSION_NAME = "VK_EXT_mutable_descriptor_type";

/// VK_EXT_extension_496

export const EXT_EXTENSION_496_EXTENSION_NAME = "VK_EXT_extension_496";

/// VK_EXT_extension_497

export const EXT_EXTENSION_497_EXTENSION_NAME = "VK_EXT_extension_497";

/// VK_ARM_shader_core_builtins

export const ARM_SHADER_CORE_BUILTINS_EXTENSION_NAME = "VK_ARM_shader_core_builtins";

/// VK_EXT_extension_499

export const EXT_EXTENSION_499_EXTENSION_NAME = "VK_EXT_extension_499";

/// VK_EXT_extension_500

export const EXT_EXTENSION_500_EXTENSION_NAME = "VK_EXT_extension_500";

/// VK_EXT_extension_501

export const EXT_EXTENSION_501_EXTENSION_NAME = "VK_EXT_extension_501";

/// VK_EXT_extension_502

export const EXT_EXTENSION_502_EXTENSION_NAME = "VK_EXT_extension_502";

/// VK_EXT_extension_503

export const EXT_EXTENSION_503_EXTENSION_NAME = "VK_EXT_extension_503";

/// VK_NV_extension_504

export const NV_EXTENSION_504_EXTENSION_NAME = "VK_NV_extension_504";