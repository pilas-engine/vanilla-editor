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
var Camara = (function (_super) {
    __extends(Camara, _super);
    function Camara(escena) {
        var _this = _super.call(this, escena) || this;
        var label = escena.add.text(0, 0, "CÁMARA");
        _this.add(label);
        _this.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
        escena.input.setDraggable(_this);
        _this.canvas = escena.add.graphics();
        var thickness = 2;
        var color = 0x00ff00;
        var alpha = 1;
        _this.canvas.lineStyle(thickness, color, alpha);
        _this.canvas.strokeRect(0, 0, 400, 400);
        _this.canvas.strokeRect(400 - 100, 400 - 10, 100, 10);
        _this.add(_this.canvas);
        _this.on('pointerover', function () {
        });
        _this.on('pointerout', function () {
        });
        _this.on("pointerdown", function () {
        });
        return _this;
    }
    return Camara;
}(Phaser.GameObjects.Container));
var EscenaEditor = (function (_super) {
    __extends(EscenaEditor, _super);
    function EscenaEditor() {
        return _super.call(this) || this;
    }
    EscenaEditor.prototype.preload = function () {
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
        this.cameras.main.setBackgroundColor("777");
        this.texto = this.add.text(0, 50, "Modo edición");
    };
    EscenaEditor.prototype.create = function () {
        var _this = this;
        var camara = new Camara(this);
        this.input.enableDebug(camara, 0xff0000);
        this.add.existing(camara);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        this.ajustarCanvasModoEdicion();
        document.addEventListener("comienza-ejecucion", function (evento) {
            _this.ajustarCanvasModoEjecucion();
        });
        document.addEventListener("finaliza-ejecucion", function (evento) {
            _this.ajustarCanvasModoEdicion();
        });
    };
    EscenaEditor.prototype.ajustarCanvasModoEjecucion = function () {
        this.game.scale.scaleMode = Phaser.Scale.NONE;
        this.game.scale.resize(400, 400);
        this.game.scale.refresh();
        console.debug("Comenzando ejecución");
        this.texto.text = "Modo ejecución";
    };
    EscenaEditor.prototype.ajustarCanvasModoEdicion = function () {
        this.game.scale.scaleMode = Phaser.Scale.RESIZE;
        this.game.scale.refresh();
        console.debug("Finaliza ejecución");
        this.texto.text = "Modo edición";
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
            type: Phaser.CANVAS,
            canvas: canvas,
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
    };
    return Pilas;
}());
window.pilas = new Pilas();
