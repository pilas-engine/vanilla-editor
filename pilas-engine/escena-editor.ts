class EscenaEditor extends Phaser.Scene
{
  logo: any;
  texto: Phaser.GameObjects.Text;

  constructor ()
  {
    super();
  }

  preload ()
  {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');

    this.cameras.main.setBackgroundColor("777");
    this.texto = this.add.text(0, 50, "Modo edición");
  }

  create ()
  {
    var camara = new Camara(this);

    this.input.enableDebug(camara, 0xff0000);
    this.add.existing(camara);

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.ajustarCanvasModoEdicion();

    document.addEventListener("comienza-ejecucion", (evento) => {
      this.ajustarCanvasModoEjecucion();
    });

    document.addEventListener("finaliza-ejecucion", (evento) => {
      this.ajustarCanvasModoEdicion();
    });

  }

  ajustarCanvasModoEjecucion() {
    this.game.scale.scaleMode = Phaser.Scale.NONE;
    this.game.scale.resize(400, 400);
    this.game.scale.refresh();
    console.debug("Comenzando ejecución");
    this.texto.text = "Modo ejecución";
  }

  ajustarCanvasModoEdicion() {
    this.game.scale.scaleMode = Phaser.Scale.RESIZE;
    this.game.scale.refresh();
    console.debug("Finaliza ejecución");
    this.texto.text = "Modo edición";
  }

  update() {
  }
}
