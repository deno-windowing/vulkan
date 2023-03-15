import {
  CreateInstance,
  DestroyInstance,
} from "../../api/cmd.ts";
import {
  CString,
  makeVersion,
  PointerRef,
} from "../../api/util.ts";
import { InstanceCreateInfo } from "../../api/struct/InstanceCreateInfo.ts";
import { ApplicationInfo } from "../../api/struct/ApplicationInfo.ts";

const instOut = new PointerRef();
const info =new InstanceCreateInfo({
    pApplicationInfo: new ApplicationInfo({
      pApplicationName: new CString("Deno"),
      applicationVersion: makeVersion(1, 0, 0),
      pEngineName: new CString("Deno"),
      engineVersion: makeVersion(1, 0, 0),
      apiVersion: makeVersion(1, 2, 0),
    }),
  }) 
CreateInstance( info, null, instOut,);

const instance = instOut.value;
DestroyInstance(instance, null);

console.log(1);
console.log(1);
console.log(1);
console.log(1);
