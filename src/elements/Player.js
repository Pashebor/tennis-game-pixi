import * as PIXI from  'pixi.js';

const DEFAULT_COLOR = '0xFFFFFF';

class Player {
    constructor(color = DEFAULT_COLOR, pos, isCPU = false) {
        this.playerColor = color;
        this.isCPU = isCPU; 
        this.posX = pos ? pos.x : 32;
        this.posY = pos ? pos.y : 32;

        return this._init()
    }

    _init() {
        const player = new PIXI.Graphics();

        player.lineStyle(4, this.playerColor, 1);
        player.moveTo(0, 0);
        player.lineTo(0, window.innerHeight / 4);
        player.x = this.posX;
        player.y = this.posY;

        return player;
    }
}

export default Player