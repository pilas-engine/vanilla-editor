/// <reference types="./phaser" />
declare class Camara extends Phaser.GameObjects.Container {
    canvas: Phaser.GameObjects.Graphics;
    constructor(escena: any);
}
declare class EscenaEditor extends Phaser.Scene {
    logo: any;
    texto: Phaser.GameObjects.Text;
    constructor();
    preload(): void;
    create(): void;
    ajustarCanvasModoEjecucion(): void;
    ajustarCanvasModoEdicion(): void;
    update(): void;
}
declare class Pilas {
    game: Phaser.Game;
    escena: Phaser.Scene;
    constructor();
    iniciar(canvas: HTMLElement, ancho: number, alto: number): void;
}
