import { XMLParser } from "npm:fast-xml-parser";

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  parseTagValue: true,
  parseAttributeValue: true,
  alwaysCreateTextNode: true,
  attributeNamePrefix: "$",
});
const xml = Deno.readTextFileSync(new URL("../data/vk.xml", import.meta.url));
const videoXml = Deno.readTextFileSync(
  new URL("../data/video.xml", import.meta.url),
);

console.log("Parsing...");
const json = parser.parse(xml);
console.log("Done!");
const json2 = parser.parse(videoXml);

json.registry.types.type = [
  ...json2.registry.types.type,
  ...json.registry.types.type,
];
json.registry.enums = [...json2.registry.enums, ...json.registry.enums];
json.registry.extensions.extension = [
  ...json2.registry.extensions.extension,
  ...json.registry.extensions.extension,
];

Deno.writeTextFileSync(
  new URL("../data/vk.json", import.meta.url),
  JSON.stringify(json, null, 2),
);
