import {
  HttpClient,
  HttpClientModule
} from "./chunk-LRPQMU57.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-VFFJBW32.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PDRMFLEB.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/quiz/quiz.component.ts
var _c0 = (a0, a1, a2) => ({ "selected": a0, "correct": a1, "wrong": a2 });
function QuizComponent_div_24_div_2_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function QuizComponent_div_24_div_2_button_9_Template_button_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectOption(i_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c0, ctx_r2.selectedOption === i_r2, ctx_r2.isAnswered && i_r2 === ctx_r2.questions[ctx_r2.currentQuestion].answer, ctx_r2.isAnswered && ctx_r2.selectedOption === i_r2 && i_r2 !== ctx_r2.questions[ctx_r2.currentQuestion].answer))("disabled", ctx_r2.isAnswered);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4, " ");
  }
}
function QuizComponent_div_24_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function QuizComponent_div_24_div_2_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.nextQuestion());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentQuestion === ctx_r2.questions.length - 1 ? "Finish" : "Next", " ");
  }
}
function QuizComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 12)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275template(9, QuizComponent_div_24_div_2_button_9_Template, 2, 7, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, QuizComponent_div_24_div_2_div_10_Template, 3, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Question ", ctx_r2.currentQuestion + 1, " / ", ctx_r2.questions.length, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Score: ", ctx_r2.score, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.questions[ctx_r2.currentQuestion].question);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.questions[ctx_r2.currentQuestion].options);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAnswered);
  }
}
function QuizComponent_div_24_div_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Perfect Score! You are a true patriot!");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_div_24_div_3_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Good job! Keep learning.");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_div_24_div_3_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Time to brush up on some history!");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "h2");
    \u0275\u0275text(2, "Quiz Completed!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, QuizComponent_div_24_div_3_p_7_Template, 2, 0, "p", 10)(8, QuizComponent_div_24_div_3_p_8_Template, 2, 0, "p", 10)(9, QuizComponent_div_24_div_3_p_9_Template, 2, 0, "p", 10);
    \u0275\u0275elementStart(10, "div", 22)(11, "h3", 23);
    \u0275\u0275text(12, "\u{1F1EE}\u{1F1F3} Bonus Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 24)(14, "strong");
    \u0275\u0275text(15, "What does Independence Day remind us of?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 25)(17, "strong");
    \u0275\u0275text(18, "Answer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " It reminds us of the sacrifices made by our freedom fighters and inspires us to uphold the values of freedom, unity, peace, and democracy. \u{1F1EE}\u{1F1F3}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 26);
    \u0275\u0275listener("click", function QuizComponent_div_24_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.restartQuiz());
    });
    \u0275\u0275text(21, "Try Again");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.score);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", ctx_r2.questions.length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.score === ctx_r2.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.score < ctx_r2.questions.length && ctx_r2.score > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.score <= 2);
  }
}
function QuizComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275template(2, QuizComponent_div_24_div_2_Template, 11, 6, "div", 10)(3, QuizComponent_div_24_div_3_Template, 22, 5, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.showScore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showScore);
  }
}
var QuizComponent = class _QuizComponent {
  http;
  questions = [];
  currentQuestion = 0;
  score = 0;
  showScore = false;
  selectedOption = null;
  isAnswered = false;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/data/quiz.json").subscribe((data) => {
      this.questions = data;
    });
  }
  selectOption(index) {
    if (this.isAnswered)
      return;
    this.selectedOption = index;
    this.isAnswered = true;
    if (index === this.questions[this.currentQuestion].answer) {
      this.score++;
    }
  }
  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.selectedOption = null;
      this.isAnswered = false;
    } else {
      this.showScore = true;
    }
  }
  restartQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.showScore = false;
    this.selectedOption = null;
    this.isAnswered = false;
  }
  static \u0275fac = function QuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizComponent, selectors: [["app-quiz"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 1, consts: [[1, "page-container", "fade-in"], [1, "page-header", "text-center"], [1, "heading-primary", "text-gradient"], [1, "subtitle"], [1, "poem-section", "text-center", 2, "margin-bottom", "2rem"], [1, "text-gradient"], [1, "poem-text", 2, "font-size", "1.1rem", "line-height", "1.6"], ["class", "quiz-container container", 4, "ngIf"], [1, "quiz-container", "container"], [1, "glass-card", "quiz-card"], [4, "ngIf"], ["class", "score-section text-center", 4, "ngIf"], [1, "quiz-header"], [1, "question-text"], [1, "options-grid"], ["class", "option-btn", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "quiz-footer", 4, "ngIf"], [1, "option-btn", 3, "click", "ngClass", "disabled"], [1, "quiz-footer"], [1, "btn", "btn-primary", 3, "click"], [1, "score-section", "text-center"], [1, "score-circle"], [1, "bonus-question", "mt-4", "p-4", 2, "background", "rgba(255, 255, 255, 0.05)", "border-radius", "10px", "text-align", "left", "margin-top", "2rem", "border-left", "4px solid var(--saffron)"], [1, "text-gradient", 2, "margin-bottom", "1rem"], [2, "margin-bottom", "0.5rem", "font-size", "1.1rem"], [2, "opacity", "0.9"], [1, "btn", "btn-primary", "mt-4", 3, "click"]], template: function QuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Test Your Knowledge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "How well do you know India's history?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "h3", 5);
      \u0275\u0275text(8, "\u{1F1EE}\u{1F1F3} Short Poem on India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6)(10, "strong");
      \u0275\u0275text(11, "My India, proud and free,");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "br");
      \u0275\u0275elementStart(13, "strong");
      \u0275\u0275text(14, "A land of hope for you and me.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "br");
      \u0275\u0275elementStart(16, "strong");
      \u0275\u0275text(17, "With courage, peace, and unity,");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "br");
      \u0275\u0275elementStart(19, "strong");
      \u0275\u0275text(20, "We salute our nation's dignity.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "br");
      \u0275\u0275elementStart(22, "strong");
      \u0275\u0275text(23, "Happy Independence Day! \u{1F1EE}\u{1F1F3}");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, QuizComponent_div_24_Template, 4, 2, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275property("ngIf", ctx.questions.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, HttpClientModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 100px 20px 60px;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #555;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.quiz-card[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.quiz-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  font-weight: 600;\n  color: var(--color-green);\n  font-size: 1.2rem;\n}\n.question-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--color-navy);\n  margin-bottom: 30px;\n  font-family: var(--font-heading);\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 15px;\n  margin-bottom: 30px;\n}\n.option-btn[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  background: white;\n  border-radius: 12px;\n  font-size: 1.1rem;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: var(--font-primary);\n}\n.option-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n  border-color: var(--color-saffron);\n}\n.option-btn.correct[_ngcontent-%COMP%] {\n  background: var(--color-green);\n  color: white;\n  border-color: var(--color-green);\n}\n.option-btn.wrong[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: white;\n  border-color: #e74c3c;\n}\n.quiz-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 30px;\n  border-radius: 30px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-navy);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #000050;\n  transform: translateY(-2px);\n}\n.score-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--color-navy);\n  margin-bottom: 20px;\n}\n.score-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #555;\n}\n.score-circle[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 10px solid var(--color-saffron);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  margin: 0 auto 20px;\n  font-weight: 700;\n  color: var(--color-green);\n}\n.score-circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-right: 5px;\n  color: var(--color-navy);\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=quiz.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizComponent, { className: "QuizComponent", filePath: "src\\app\\pages\\quiz\\quiz.component.ts", lineNumber: 13 });
})();
export {
  QuizComponent
};
//# sourceMappingURL=chunk-HLSUY7RW.js.map
