import './style.css'
import { PilasCanvas } from "./pilas-canvas.ts";

customElements.define("pilas-canvas", PilasCanvas);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex vh-100">
    <pilas-canvas width="800" height="800"/>
  </div>
`
