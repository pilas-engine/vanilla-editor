class PilasCanvas extends HTMLElement {
  game: Phaser.Game;

  constructor() {
    super();

    this.style.width = "100%";
    this.style.display = "flex";

    this.innerHTML = `
      <canvas id="game" style="width: 100%; object-fit: contain"></canvas>
    `

    this.game = this.iniciar_canvas_de_phaser();
  }

  private iniciar_canvas_de_phaser() {
    let canvas = this.querySelector("#game");

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      width: 800,
      canvas: canvas as HTMLCanvasElement,
      height: 600,
      scene: Example
    };

    return new Phaser.Game(config);
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
