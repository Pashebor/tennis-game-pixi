import * as PIXI from 'pixi.js-legacy';

import Player from '../elements/Player';
import Ball from '../elements/Ball';

import { DEFAULT_POSITION } from '../elements/Player';

const DEFAULT_COLOR = '#FFA000';

class MainArea {
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

        const canvas = document.getElementById('tinis'),
          app = new PIXI.Application(
          {
              view: canvas,
              width: this.width,
              height: this.height,
              antialias: true,
              forceCanvas: true,
              transparent: false,
              resolution: 1
          }
        );

        const playerOne = new Player(app),
          playerTwo = new Player(
            app,
            '0xEC407A',
            { x: app.renderer.screen.width - DEFAULT_POSITION, y: DEFAULT_POSITION },
            true),
          ball = new Ball(app);

        app.stage.addChild(playerOne);
        app.stage.addChild(playerTwo);
        app.stage.addChild(ball);


        document.body.appendChild(app.view);
    }
}

export default MainArea;