import TextRenderer from 'jaargesprek2016/textrenderer';

export default class Navigator {
  constructor(options) {
    this.questionData = options.data;
    this.currentQuestionIndex = -1;
    this.textRenderer = new TextRenderer(options.layers.text, 'Jaargesprek', 'Terry Seidler. 22 december 2016');
    this.background1 = options.layers.background1;
    this.background2 = options.layers.background2;

    document.addEventListener('keydown', (e) => this.handleInput(e.keyCode));
  }

  handleInput(keyCode) {
    switch(keyCode) {
      case 37:
        this.currentQuestionIndex = Math.max(0, this.currentQuestionIndex-1);
        this.renderCurrentQuestion();
        break;
      case 39:
        this.currentQuestionIndex = Math.min(this.questionData.length-1, this.currentQuestionIndex+1);
        this.renderCurrentQuestion();
        break;
    }
  }

  renderCurrentQuestion() {
    let question = this.questionData[this.currentQuestionIndex];

    this.textRenderer.setText(question.question, question.answer);
    this.textRenderer.drawText();
  }
}
