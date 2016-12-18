const FADE_INTERVAL_SPEED = 100;
const DEFAULT_OPTIONS = {
  styles: {
    backgroundColor: '#FFF'
  },
  fade_time: 1000
};

export default class Background {
  constructor(canvasElement, options = {}) {
    Object.assign(this, DEFAULT_OPTIONS, options);

    this.canvas = canvasElement;
    this.context = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    for(let prop in this.styles) {
      this.canvas.style[prop] = this.styles[prop];
    }
  }

  fadeIn(time_ms = 2000) {
    this.canvas.style.opacity = 0;
    return new Promise((resolve) => {
      this.changeOpacity(1, 1/(time_ms/FADE_INTERVAL_SPEED), resolve);
    });
  }
  fadeOut(time_ms = 2000) {
    this.canvas.style.opacity = 1;
    return new Promise((resolve) => {
      this.changeOpacity(0, 1/(time_ms/FADE_INTERVAL_SPEED), resolve);
    });
  }

  changeOpacity(target, change, doneCallback) {
    if(target === 1) {
      this.canvas.style.opacity = Math.min(1, parseFloat(this.canvas.style.opacity) + change);
    } else {
      this.canvas.style.opacity = Math.max(0, parseFloat(this.canvas.style.opacity) - change);
    }

    if(target == this.canvas.style.opacity) {
      doneCallback();
    } else {
      setTimeout(this.changeOpacity.bind(this, target, change, doneCallback), FADE_INTERVAL_SPEED);
    }
  }
}
