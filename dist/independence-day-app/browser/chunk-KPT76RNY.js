import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-PDRMFLEB.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 0, consts: [[1, "page-container", "fade-in"], [1, "page-header", "text-center"], [1, "heading-primary"], [1, "subtitle"], [1, "about-grid", "container", "glass-card"], [1, "about-image"], ["src", "./assets/images/Rishu.jpeg", "alt", "Rishabh Singh"], [1, "about-details"], [1, "about-section"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "About Rishabh Singh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "A young learner with a passion for knowledge, creativity, and positive growth.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275element(8, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "h2");
      \u0275\u0275text(12, "Who is Rishabh?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Rishabh Singh is a student of Class 5 at Pawar Public School. He is an enthusiastic learner with a keen interest in academics, sports, and extracurricular activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "He is known for his positive attitude, curiosity, and willingness to learn new things.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "h2");
      \u0275\u0275text(19, "School & Interests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ul")(21, "li")(22, "strong");
      \u0275\u0275text(23, "School:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Pawar Public School");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "li")(26, "strong");
      \u0275\u0275text(27, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Grade 5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li")(30, "strong");
      \u0275\u0275text(31, "Interests:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " Reading, Science, Sports, Art, and Technology");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 8)(34, "h2");
      \u0275\u0275text(35, "Character & Goals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "Through his participation in classroom activities and school programs, Rishabh continues to build confidence, discipline, and leadership qualities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "He aims to continue learning, growing, and contributing positively to his school community.");
      \u0275\u0275elementEnd()()()()();
    }
  }, styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 100px 20px 60px;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #555;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.about-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  gap: 40px;\n  padding: 40px;\n  background: rgba(255, 255, 255, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n}\n.about-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 24px;\n  box-shadow: var(--glass-shadow);\n}\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 420px;\n  object-fit: cover;\n  display: block;\n  border-radius: inherit;\n}\n.about-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n}\n.about-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: var(--color-navy);\n  font-family: var(--font-heading);\n}\n.about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.about-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  line-height: 1.8;\n  font-size: 1rem;\n}\n.about-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc inside;\n  padding-left: 0;\n  margin: 0;\n}\n@media (max-width: 900px) {\n  .about-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 280px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\pages\\about\\about.component.ts", lineNumber: 10 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-KPT76RNY.js.map
