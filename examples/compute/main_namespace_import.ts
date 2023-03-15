import * as vk from "../../api/mod.ts";

const instOut = new vk.PointerRef();
const info = new vk.InstanceCreateInfo({
  pApplicationInfo: new vk.ApplicationInfo({
    pApplicationName: new vk.CString("Deno"),
    applicationVersion: vk.makeVersion(1, 0, 0),
    pEngineName: new vk.CString("Deno"),
    engineVersion: vk.makeVersion(1, 0, 0),
    apiVersion: vk.makeVersion(1, 2, 0),
  }),
});
vk.CreateInstance(info, null, instOut);
const instance = instOut.value;

vk.DestroyInstance(instance, null);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
