import TextRenderer from 'jaargesprek2016/textrenderer';

export default class Navigator {
  constructor(options) {
    this.questionData = options.data;
    this.currentQuestionIndex = -1;
    this.textRenderer = new TextRenderer(options.layers.text, 'Jaargesprek', 'Terry Seidler. 22 december 2016');
    this.backgrounds = [
      { element: options.layers.background1, renderObject: null },
      { element: options.layers.background2, renderObject: null }
    ];
    this.background1 = options.layers.background1;
    this.background2 = options.layers.background2;
    this.activeBackgroundNumber = 0;

    document.addEventListener('keydown', (e) => this.handleInput(e.keyCode));
  }

  handleInput(keyCode) {
    switch(keyCode) {
      case 37:
        this.currentQuestionIndex = Math.max(0, this.currentQuestionIndex-1);
        this.renderCurrentQuestion();
        this.swapAndRenderBackground();
        break;
      case 39:
        this.currentQuestionIndex = Math.min(this.questionData.length-1, this.currentQuestionIndex+1);
        this.renderCurrentQuestion();
        this.swapAndRenderBackground();
        break;
    }
  }

  currentQuestion() {
    return this.questionData[this.currentQuestionIndex];
  }

  renderCurrentQuestion() {
    let question = this.currentQuestion();

    this.textRenderer.setText(question.question, question.answer);
    this.textRenderer.render();
  }

  swapAndRenderBackground() {
    let question = this.currentQuestion();
    let prevBackground = this.backgrounds[this.activeBackgroundNumber].renderObject;
    if(prevBackground) {
      prevBackground.fadeOut();
    }

    this.activeBackgroundNumber = (this.activeBackgroundNumber+1)%2;
    let bg = this.backgrounds[this.activeBackgroundNumber].renderObject = new question.background.type(
      this.backgrounds[this.activeBackgroundNumber].element,
      question.background.options
    );
    bg.fadeIn();
  }
}
