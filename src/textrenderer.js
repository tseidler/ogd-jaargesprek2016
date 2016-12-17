export default class TextRenderer {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.context = this.canvas.getContext('2d');

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);

    this.resizeCanvas();
    this.clearCanvas();

    this.context['imageSmoothingEnabled'] = false;       /* standard */
    this.context['mozImageSmoothingEnabled'] = false;    /* Firefox */
    this.context['oImageSmoothingEnabled'] = false;      /* Opera */
    this.context['webkitImageSmoothingEnabled'] = false; /* Safari */
    this.context['msImageSmoothingEnabled'] = false;     /* IE */
  }

  setText(questionText, answerText, speed) {
    this.clearCanvas();

    this.question = questionText;
    this.answer = '';

    this.drawQuestion();
  }

  drawQuestion() {
    this.context.font = '40pt determinationSans';
    this.context.fillStyle = '#FFFFFF';
    this.context.fillText(this.question, this.canvas.width/3, this.canvas.height/4);
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

    this.drawQuestion();
  }
}
