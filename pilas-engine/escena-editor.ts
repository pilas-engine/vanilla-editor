class EscenaEditor extends Phaser.Scene
{
  logo: any;

  constructor ()
  {
    super();
  }

  preload ()
  {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');

    this.cameras.main.setBackgroundColor("BBB");


  }

  create ()
  {
    var graphics: Phaser.GameObjects.Graphics;
    graphics = this.add.graphics();

    const thickness = 1;
    const color = 0x00ff00;
    const alpha = 1;

    graphics.lineStyle(thickness, color, alpha);

    graphics.strokeRect(32, 32, 256, 256);
    graphics.strokeRect(10, 10, 10, 30);

    //this.logo = this.add.image(400, 300, 'logo');
  }

  update() {
    //this.logo.rotation += 0.01;
  }
}
