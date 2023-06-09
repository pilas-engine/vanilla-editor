import './style.css'
import { setupCounter } from './counter.ts'
import { PilasCanvas } from "./pilas-canvas.ts";

customElements.define("pilas-canvas", PilasCanvas);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex vh-100">
    <pilas-canvas/>
  </div>
`


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
