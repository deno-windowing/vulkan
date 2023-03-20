// test command
try {
  new Deno.Command("glslc", {
    args: ["--help"],
  }).outputSync();
} catch (error) {
  if (error instanceof Deno.errors.NotFound) {
    console.error("glslc not found.");
  } else {
    console.error(error);
  }
  Deno.exit(1);
}

import { join, parse } from "https://deno.land/std@0.180.0/path/mod.ts";

function buildShader(filePath: string) {
  const pathInfo = parse(filePath);
  const outFileName = `${pathInfo.base}.spv`;
  const outFilePath = join(pathInfo.dir, outFileName);

  const { stdout, stderr } = new Deno.Command("glslc", {
    args: ["-o", outFilePath, "-g", filePath],
  }).outputSync();
  const decoder = new TextDecoder();
  console.log(decoder.decode(stdout) + decoder.decode(stderr));
}

buildShader("./examples/compute/shaders/compute.comp");
