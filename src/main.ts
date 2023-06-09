import './style.css'
import { setupCounter } from './counter.ts'
import { PilasCanvas } from "./pilas-canvas.ts";

customElements.define("pilas-canvas", PilasCanvas);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="height: 100vh; display: flex">
    <pilas-canvas/>
  </div>
`


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
