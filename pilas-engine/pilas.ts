class Pilas {
  public game: Phaser.Game;
  public escena: Phaser.Scene;

  constructor () {
  }

  iniciar(canvas: HTMLElement, ancho: number, alto: number) {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.CANVAS,
      canvas: canvas as HTMLCanvasElement,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      pixelArt: true,
      width: ancho, 
      height: alto,
      scene: EscenaEditor,
      physics: {
        default: "matter",
      },
      banner: false,
    };

    this.game = new Phaser.Game(config);
  }

}

// @ts-ignore
window.pilas = new Pilas();
