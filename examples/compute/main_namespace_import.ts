import { assert } from "https://deno.land/std@0.179.0/_util/asserts.ts";
import * as vk from "../../api/mod.ts";
import { DebugUtilsMessengerCallbackDataEXT } from "../../api/struct/DebugUtilsMessengerCallbackDataEXT.ts";
import { DebugUtilsMessengerCreateInfoEXT } from "../../api/struct/DebugUtilsMessengerCreateInfoEXT.ts";
import { CString, jsString, PointerRef } from "../../api/util.ts";

const enableDebug = true;

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
    const data = new DebugUtilsMessengerCallbackDataEXT(pCallbackData);
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

const debugCreateInfo = new DebugUtilsMessengerCreateInfoEXT({
  messageSeverity: vk.DebugUtilsMessageSeverityFlagBitsEXT
    .DEBUG_UTILS_MESSAGE_SEVERITY_ERROR_BIT_EXT |
    vk.DebugUtilsMessageSeverityFlagBitsEXT
      .DEBUG_UTILS_MESSAGE_SEVERITY_WARNING_BIT_EXT |
    vk.DebugUtilsMessageSeverityFlagBitsEXT
      .DEBUG_UTILS_MESSAGE_SEVERITY_INFO_BIT_EXT,
  messageType: vk.DebugUtilsMessageTypeFlagBitsEXT
    .DEBUG_UTILS_MESSAGE_TYPE_GENERAL_BIT_EXT |
    vk.DebugUtilsMessageTypeFlagBitsEXT
      .DEBUG_UTILS_MESSAGE_TYPE_PERFORMANCE_BIT_EXT |
    vk.DebugUtilsMessageTypeFlagBitsEXT
      .DEBUG_UTILS_MESSAGE_TYPE_VALIDATION_BIT_EXT,
  pfnUserCallback: debugCallback.pointer,
});

const layers = [] as string[];
const extensions = [] as string[];
if (enableDebug) {
  layers.push("VK_LAYER_KHRONOS_validation");
  extensions.push(vk.EXT_DEBUG_UTILS_EXTENSION_NAME);
}

// function getInstanceLayers() {
//   const count = Uint32Array.of(0);
//   vk.EnumerateInstanceLayerProperties(count, null);
//   const size = vk.LayerProperties.size;
//   const buffer = new Uint8Array(size * count[0]);
//   vk.EnumerateInstanceLayerProperties(count, buffer);
//   const ret = [] as vk.LayerProperties[];
//   for (let i = 0; i < count[0]; i++) {
//     ret.push(new vk.LayerProperties(buffer.subarray(i * size, (i + 1) * size)));
//   }
//   return ret;
// }
// const availableLayers = getInstanceLayers();

// for (const layer of availableLayers) {
//   console.log(jsString(layer.layerName));
// }

const instOut = new vk.PointerRef();
const instanceCreateInfo = new vk.InstanceCreateInfo({
  pApplicationInfo: new vk.ApplicationInfo({
    pApplicationName: new vk.CString("Deno"),
    applicationVersion: vk.makeVersion(1, 0, 0),
    pEngineName: new vk.CString("Deno"),
    engineVersion: vk.makeVersion(1, 0, 0),
    apiVersion: vk.makeVersion(1, 3, 0),
  }),
  ppEnabledLayerNames: new vk.CStringArray(layers),
  enabledLayerCount: layers.length,
  ppEnabledExtensionNames: new vk.CStringArray(extensions),
  enabledExtensionCount: extensions.length,
});

// {
//   const layers = instanceCreateInfo.ppEnabledLayerNames;
//   const count = instanceCreateInfo.enabledLayerCount;

//   assert(layers !== null);

//   const used = [] as string[];
//   const view = new Deno.UnsafePointerView(layers);
//   for (let i = 0; i < count; i++) {
//     used.push(jsString(view.getPointer(i * 8)));
//   }
//   console.log(used);
// }

if (enableDebug) {
  instanceCreateInfo.pNext = debugCreateInfo;
}

vk.CreateInstance(instanceCreateInfo, null, instOut);
const instance = instOut.value;

// {
//   const name1 = new CString("vkGetInstanceProcAddr");
//   const p = vk.GetInstanceProcAddr(instance, name1);
//   const p1 = vk.GetInstanceProcAddr(
//     instance,
//     new CString("vkCreateDebugUtilsMessengerEXT"),
//   );
//   console.log(1);
// }
function loadCreateDebugUtilsMessengerEXT() {
  const p = vk.GetInstanceProcAddr(
    instance,
    new CString("vkCreateDebugUtilsMessengerEXT"),
  );
  if (p !== null) {
    return new Deno.UnsafeFnPointer(p, {
      "parameters": [
        "pointer",
        "buffer",
        "buffer",
        "buffer",
      ],
      "result": "u32",
    });
  } else {
    return null;
  }
}

function loadDestroyDebugUtilsMessengerEXT() {
  const p = vk.GetInstanceProcAddr(
    instance,
    new CString("vkDestroyDebugUtilsMessengerEXT"),
  );
  if (p !== null) {
    return new Deno.UnsafeFnPointer(p, {
      "parameters": [
        "pointer",
        "pointer",
        "buffer",
      ],
      "result": "void",
    });
  } else {
    return null;
  }
}

const CreateDebugUtilsMessengerEXT = loadCreateDebugUtilsMessengerEXT();
const DestroyDebugUtilsMessengerEXT = loadDestroyDebugUtilsMessengerEXT();

function createDebugMessenger() {
  if (enableDebug && CreateDebugUtilsMessengerEXT) {
    const _debugMessengerRef = new PointerRef();
    CreateDebugUtilsMessengerEXT.call(
      instance,
      vk.anyBuffer(debugCreateInfo),
      null,
      vk.anyBuffer(_debugMessengerRef),
    );
    return _debugMessengerRef.value;
  } else {
    return null;
  }
}
const debugMessenger = createDebugMessenger();

if (enableDebug && DestroyDebugUtilsMessengerEXT && debugMessenger !== null) {
  DestroyDebugUtilsMessengerEXT.call(instance, debugMessenger, null);
}
vk.DestroyInstance(instance, null);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
