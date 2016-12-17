export default class VraagRenderer {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.context = this.canvas.getContext('2d');

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);

    this.resizeCanvas();
    this.clearCanvas();
  }

  clearCanvas() {
    this.context.save();
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.restore();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}
