class PilasCanvas extends HTMLElement {

  constructor() {
    super();

    this.classList.add("flex");
    this.classList.add("w-100");
   
    this.innerHTML = this.obtenerTemplate();

    let width = +(this.getAttribute("width") || "100");
    let height = +(this.getAttribute("height") || "100");

    // @ts-ignore
    let canvas = this.querySelector("#game");
    
    // @ts-ignore
    pilas.iniciar(canvas, width, height); 

    // pilas es una variable global que genera el proceso de
    // compilación "make compilar-pilas" y su código principal
    // está en pilas-engine/pilas.ts
  }

  obtenerTemplate() {
    return `<canvas id="game"></canvas>`;
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return [
      "width",
      "height",
    ];
  }

  attributeChangedCallback(atributo: string, anterior: any, nuevo: any) { 
    console.log(`El atributo ${atributo} cambió: ${anterior} → ${nuevo}`);
  }

}


export { PilasCanvas };
