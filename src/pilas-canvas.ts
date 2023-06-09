class PilasCanvas extends HTMLElement {
  game: Phaser.Game;

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

    this.game = this.iniciar_canvas_de_phaser(width, height);
  }

  private iniciar_canvas_de_phaser(width: number, height: number) {
    let canvas = this.querySelector("#game");

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      width: width,
      canvas: canvas as HTMLCanvasElement,
      height: height,
      scene: Example
    };

    return new Phaser.Game(config);
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


class Example extends Phaser.Scene
{
  logo: any;

  constructor ()
  {
    super();
  }

  preload ()
  {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create ()
  {
    this.add.image(400, 300, 'sky');
    this.logo = this.add.image(400, 300, 'logo');
  }

  update() {
    this.logo.rotation += 0.01;
  }
}

export { PilasCanvas };
