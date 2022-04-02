
import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
console.log('howdy folks');

const url = 'https://www.toronto.ca/explore-enjoy/parks-gardens-beaches/toronto-island-park/all-ferry-schedules';

const ferrySchedulePage = await fetch(url)
  .then((result) => result.text())

  const doc = new DOMParser().parseFromString(ferrySchedulePage, "text/html")!;

const p = doc.querySelector("p")!;

console.log(p.textContent); // "Hello from Deno!"
console.log(p.childNodes[1].textContent); // "Deno!"

p.innerHTML = "DOM in <b>Deno</b> is pretty cool";
console.log(p.children[0].outerHTML); // "<b>Deno</b>"
