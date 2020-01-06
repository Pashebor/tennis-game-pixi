import * as PIXI from  'pixi.js';

import Player from '../elements/Player'; 

const DEFAULT_COLOR = '#FFA000';

class MainArea{
    constructor(
        width = window.innerWidth,
        height = window.innerHeight,
        bgColor = DEFAULT_COLOR
    ) {
        this.width = width;
        this.height = height;
        this.bgColor = bgColor
    }

    drawArea() {
        const app = new PIXI.Application(
            { 
                width: this.width,
                height: this.height,
                antialias: true,
                transparent: false,
                resolution: 1
            }
        );
        
        const playerOne = new Player(),
            playerTwo = new Player('0xEC407A', { x: app.renderer.screen.width - 36, y: 32 });    
            
        app.stage.addChild(playerOne);
        app.stage.addChild(playerTwo);
        
        document.body.appendChild(app.view);    
    }

    init() {
        
    }
}

export default MainArea;