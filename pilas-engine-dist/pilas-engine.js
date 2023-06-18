var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EscenaEditor = (function (_super) {
    __extends(EscenaEditor, _super);
    function EscenaEditor() {
        return _super.call(this) || this;
    }
    EscenaEditor.prototype.preload = function () {
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
        this.cameras.main.setBackgroundColor("BBB");
    };
    EscenaEditor.prototype.create = function () {
        var graphics;
        graphics = this.add.graphics();
        var thickness = 1;
        var color = 0x00ff00;
        var alpha = 1;
        graphics.lineStyle(thickness, color, alpha);
        graphics.strokeRect(32, 32, 256, 256);
    };
    EscenaEditor.prototype.update = function () {
    };
    return EscenaEditor;
}(Phaser.Scene));
var Pilas = (function () {
    function Pilas() {
    }
    Pilas.prototype.iniciar = function (canvas, ancho, alto) {
        var config = {
            type: Phaser.WEBGL,
            width: ancho,
            canvas: canvas,
            height: alto,
            scene: EscenaEditor,
            physics: {
                default: "matter",
            },
            banner: false,
        };
        this.game = new Phaser.Game(config);
    };
    return Pilas;
}());
window.pilas = new Pilas();
