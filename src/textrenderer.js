const DEFAULT_QUESTION_FONT_SIZE = 30;    // pt
const DEFAULT_ANSWER_FONT_SIZE = 20;      // pt
const SPACE_BETWEEN_QUESTION_ANSWER = 50; // px

export default class TextRenderer {
  constructor(canvasElement, questionText, answerText) {
    this.canvas = canvasElement;
    this.context = this.canvas.getContext('2d');

    this.questionTextWidth = 0;
    this.answerFontSize = DEFAULT_ANSWER_FONT_SIZE;
    this.question = questionText;
    this.answer = answerText;

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    this.resizeCanvas();

    // disable image smoothing
    this.context['imageSmoothingEnabled'] = false;       /* standard */
    this.context['mozImageSmoothingEnabled'] = false;    /* Firefox */
    this.context['oImageSmoothingEnabled'] = false;      /* Opera */
    this.context['msImageSmoothingEnabled'] = false;     /* IE */
  }

  setText(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  drawText() {
    this.clearCanvas();
    this.questionTextWidth = this.renderQuestion();
    this.renderAnswer();
  }

  renderQuestion() {
    let font = 'determinationSans';
    let question_width = this.determineAndSetQuestionSize(this.question, font, this.canvas.width * .8);

    let x = Math.max(50, (this.canvas.width - question_width)/2);
    let y = this.yPos();

    this.context.fillStyle = '#FFF';
    this.context.fillText(this.question, x, y);

    return question_width;
  }

  determineAndSetQuestionSize(text, font, max_width) {
    let current_size = DEFAULT_QUESTION_FONT_SIZE;
    let current_width = max_width;

    this.context.font = `${current_size}pt ${font}`;
    while((current_width = this.context.measureText(text).width) > max_width && current_size > 20) {
      current_size -= 2;
      this.context.font = `${current_size}pt ${font}`;
    }
    this.answerFontSize = Math.min(DEFAULT_ANSWER_FONT_SIZE, current_size - 5);
    return current_width;
  }

  renderAnswer() {
    this.context.font = `${this.answerFontSize}pt determinationMono`;
    this.context.fillStyle = '#FFF';

    let max_width = this.canvas.width * .8;
    let x = (this.canvas.width - max_width) / 2;
    let measuredWidth = this.context.measureText(this.answer).width;

    if(measuredWidth < max_width || measuredWidth < this.questionTextWidth) {
      x = this.canvas.width/2 - measuredWidth/2;
    }

    let line_height = this.answerFontSize * 2;
    let y = this.yPos() + SPACE_BETWEEN_QUESTION_ANSWER;
    let words = this.answer.split(' ');
    let line = '';

    for(var n = 0; n < words.length; n++) {
      let test_line = line + words[n] + ' ';
      let metrics = this.context.measureText(test_line);

      if(metrics.width > max_width && n > 0) {
        this.context.fillText(line, x, y);
        line = words[n] + ' ';
        y += line_height;
      }
      else {
        line = test_line;
      }
    }
    this.context.fillText(line, x, y);
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

    this.drawText();
  }

  yPos() {
    return this.canvas.height/4;
  }
}
