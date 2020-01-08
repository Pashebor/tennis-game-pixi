import * as PIXI from  'pixi.js';

const DEFAULT_COLOR = '0xFFFFFF';
const GRAVITY = 10.733;

class Ball {
    constructor(appInstance, color = DEFAULT_COLOR) {
        this.color = color;
        this.app = appInstance;

        return this._init();
    }

    drawBall() {
        const graphic = new PIXI.Graphics();

        graphic.x = window.innerWidth / 2;
        graphic.y = window.innerHeight / 2;

        graphic.lineStyle(1, this.color);
        graphic.beginFill(this.color);
        graphic.drawCircle(0, 0, 5);
        graphic.endFill();

        this.app.ticker.add(() => {
            graphic.x += Math.cos(20);
            // graphic.y += -10;
        });

        return graphic;
    }

    _init() {
        return this.drawBall();
    }
}

export default Ball;