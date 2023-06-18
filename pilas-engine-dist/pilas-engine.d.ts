/// <reference types="./phaser" />
declare class EscenaEditor extends Phaser.Scene {
    logo: any;
    constructor();
    preload(): void;
    create(): void;
    update(): void;
}
declare class Pilas {
    game: Phaser.Game;
    constructor();
    iniciar(canvas: HTMLElement, ancho: number, alto: number): void;
}
