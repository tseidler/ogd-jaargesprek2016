import Background from 'backgrounds/background';
import Sprite from 'jaargesprek2016/sprite';

const DEFAULT_OPTIONS = {
  styles: {
    backgroundImage: 'none',
    backgroundColor: 'pink'
  },
  numSprites: 10
};
const SPRITE_MIN_SPEED = 100;
const SPRITE_MAX_SPEED = 350;

export default class SpriteBackground extends Background {
  constructor(canvasElement, options = {}) {
    let opts = Object.assign({}, DEFAULT_OPTIONS, options);
    super(canvasElement, opts);

    this.lastDraw = null;
    this.images = options.images;
    this.sprites = [];
    this.initializeSprites(options.sprites);
    this.start();
  }

  initializeSprites(spriteNames = ['404']) {
    let width = Math.max(0, this.canvas.width - 75);

    for(let i=0; i < this.numSprites; i++) {
      let image = this.images.get(spriteNames[Math.floor(Math.random() * spriteNames.length)]);
      let position = {x: Math.random() * width, y: -(image.height + Math.random() * 100)};
      this.sprites.push({
        speed: SPRITE_MIN_SPEED + Math.random() * SPRITE_MAX_SPEED,
        pos: position,
        sprite: new Sprite(image, {x:0,y:0}, {width: image.width, height: image.height}, 0, 0, false)
      });
    }
  }

  start() {
    this.running = true;
    window.requestAnimationFrame((timestamp) => this.update(timestamp));
  }

  stop() {
    this.running = false;
    this.sprites = [];
  }

  update(timestamp) {
    if(!this.lastUpdate) { this.lastUpdate = timestamp; }
    let dTime = (timestamp - this.lastUpdate) / 1000;

    // UPDATE ALL THE THINGS!!!1 (sprites)
    this.sprites = this.sprites.map((spriteInfo) => {
      let new_y = spriteInfo.pos.y + dTime * spriteInfo.speed;
      let new_x = spriteInfo.pos.x;

      if(new_y > this.canvas.height ) {
        new_y = -200;
        new_x = Math.random() * this.canvas.width - 75;
        spriteInfo.speed = SPRITE_MIN_SPEED + Math.random() * SPRITE_MAX_SPEED;
      }

      return {
        speed: spriteInfo.speed,
        pos: {
          x: new_x,
          y: new_y
        },
        sprite: spriteInfo.sprite
      };
    });

    this.draw();
    // keep drawing until stopped
    this.lastUpdate = timestamp;
    if(this.running) {
      window.requestAnimationFrame((time) => this.update(time));
    }
  }

  draw() {
    this.clearCanvas();

    // DRAW ALL THE THINGS!!!1
    for(let spriteInfo of this.sprites) {
      spriteInfo.sprite.draw(this.context, spriteInfo.pos.x, spriteInfo.pos.y);
    }
  }
}
