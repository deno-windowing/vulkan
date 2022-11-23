import { XMLParser } from "npm:fast-xml-parser";

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  parseTagValue: true,
  parseAttributeValue: true,
  alwaysCreateTextNode: true,
  attributeNamePrefix: "$",
});
const xml = Deno.readTextFileSync(new URL("./vk.xml", import.meta.url));

console.log("Parsing...");
const json = parser.parse(xml);
console.log("Done!");

Deno.writeTextFileSync(new URL("./vk.json", import.meta.url), JSON.stringify(json, null, 2));
