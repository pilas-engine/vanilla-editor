class PilasCanvas extends HTMLElement {

  constructor() {
    super();
    this.style = "width: 100%; display: flex";
    this.innerHTML = `
      <canvas id="game" style="width: 100%; object-fit: contain"></canvas>
    `

    let canvas = this.querySelector("#game");

    const config = {
      type: Phaser.WEBGL,
      width: 800,
      canvas: canvas,
      height: 600,
      scene: Example
    };

    const game = new Phaser.Game(config);
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
