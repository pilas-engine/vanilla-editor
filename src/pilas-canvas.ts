class PilasCanvas extends HTMLElement {

  constructor() {
    super();

    this.classList.add("flex");
    this.classList.add("w-100");
   
    this.innerHTML = `
      <canvas id="game"
              class="w-100" 
              style="object-fit: contain"
              ></canvas>
    `

    let width = +(this.getAttribute("width") || "100");
    let height = +(this.getAttribute("height") || "100");

    // @ts-ignore
    let canvas = this.querySelector("#game");
    pilas.iniciar(canvas, width, height); 

    // solo para acceder a este elemento desde la consola del
    // navegador.
    //window.game = this.game;
    //game.parent = this.parentElement;

    // Lo siguiente es para hacer que el area de juego
    // se adapte al tamaño de pantalla.
    // game.scale.resize(game.parent.clientWidth, game.parent.clientHeight)
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
