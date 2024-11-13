import { invert } from "jsr:@std/collections";
``;

export function add(a: number, b: number): number {
  console.log(`Meta Main?`, import.meta.main);
  return a + b;
}

export function invertObject(input: { a: string; b: string }) {
  console.log(invert(input));
}
// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(Deno.env.get("KILLSWITCH"));
  console.log("Add 2 + 3 =", add(2, 3));
  invertObject({ a: "x", b: "y" });
}
