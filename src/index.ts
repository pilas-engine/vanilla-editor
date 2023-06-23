import './style.css'
import { PilasCanvas } from "./pilas-canvas.ts";
import { PilasApp } from "./pilas-app.ts";

customElements.define("pilas-canvas", PilasCanvas);
customElements.define("pilas-app", PilasApp);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <pilas-app/>
`
