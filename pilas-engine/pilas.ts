class Pilas {
  public game: Phaser.Game;

  constructor () {
  }

  iniciar(canvas: HTMLElement, ancho: number, alto: number) {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      width: ancho,
      canvas: canvas as HTMLCanvasElement,
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
