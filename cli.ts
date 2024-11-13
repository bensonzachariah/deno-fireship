import {
  red,
  green,
  yellow,
  bgRed,
  white,
} from "jsr:@std/internal@^1.0.5/styles";
import { parseArgs } from "jsr:@std/cli/parse-args";
import {
  toKebabCase,
  toSnakeCase,
  toCamelCase,
  toPascalCase,
} from "jsr:@std/text";

console.log(Deno.args);

const flags = parseArgs(Deno.args, {
  boolean: ["snake", "kebab", "pascal", "camel"],
  string: "text",
  default: { text: "Hello world" },
});

console.log(flags);

let age: number = 1;
age = prompt("How old are you?");

if (parseInt(age) < 18) {
  console.log(red("YOU ARE NOT ALLOWED TO BE HERE"));
  Deno.exit();
}

const confirmation = confirm(yellow("are you sure you want to procees?"));

if (!confirmation) {
  console.log(red("TERMINATED"));
  Deno.exit();
}

console.log(green("ACCESS GRANTED"));
console.log(`Input texts: ${flags.text}`);
flags.kebab && console.log(bgRed(toKebabCase(flags.text)));
flags.snake && console.log(bgRed(toSnakeCase(flags.text)));
flags.camel && console.log(bgRed(toCamelCase(flags.text)));
flags.pascal && console.log(bgRed(toPascalCase(flags.text)));
