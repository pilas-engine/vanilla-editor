class Camara extends Phaser.GameObjects.Container {
  canvas: Phaser.GameObjects.Graphics;

  constructor(escena)
  {
    super(escena);

    var label = escena.add.text(0, 0, "CÁMARA")
    this.add(label);

    this.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
    escena.input.setDraggable(this);

    this.canvas = escena.add.graphics();


    const thickness = 2;
    const color = 0x00ff00;
    const alpha = 1;

    this.canvas.lineStyle(thickness, color, alpha);

    this.canvas.strokeRect(0, 0, 400, 400);
    this.canvas.strokeRect(400-100, 400-10, 100, 10);

    this.add(this.canvas);


    this.on('pointerover', () => {
    });

    this.on('pointerout', () => {
    });

    this.on("pointerdown", () => {
    });
  }




}
