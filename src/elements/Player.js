import * as PIXI from  'pixi.js';

const DEFAULT_COLOR = '0xFFFFFF';
export const DEFAULT_POSITION = 30;

class Player {
    constructor(appInstance, color = DEFAULT_COLOR, pos, isCPU = false) {
        this.app = appInstance;
        this.playerColor = color;
        this.isCPU = isCPU;
        this.size = window.innerHeight / 4;
        this.posX = pos ? pos.x : DEFAULT_POSITION;
        this.posY = pos ? pos.y : DEFAULT_POSITION;
        this.player = new PIXI.Graphics();

        return this._init()
    }

    _init() {
        this.player.lineStyle(4, this.playerColor, 1);
        this.player.moveTo(0, 0);
        this.player.lineTo(0, this.size);
        this.player.x = this.posX;
        this.player.y = this.posY;

        if (!this.isCPU) {
            this.player.interactive = true;
            this.player.on('mousemove', this._moveHandler.bind(this));
        }

        return this.player;
    }

    _moveHandler({ data }) {
        this.app.ticker.add(() => {
            const playerCenter = this.size / 2,
                position = data.global.y - playerCenter;

            if (data.global.y < playerCenter) {
                this.player.y = 0;
            } else if ((window.innerHeight - playerCenter) > data.global.y) {
                this.player.y = position;
            }
        });
    }
}

export default Player