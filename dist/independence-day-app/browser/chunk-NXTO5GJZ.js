import {
  HttpClient,
  HttpClientModule
} from "./chunk-LRPQMU57.js";
import {
  CommonModule,
  NgClass,
  NgForOf
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PDRMFLEB.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/stories/stories.component.ts
var _c0 = (a0) => ({ "reverse": a0 });
function StoriesComponent_div_7_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r1);
  }
}
function StoriesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "h4");
    \u0275\u0275text(10, "Key Events:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul");
    \u0275\u0275template(12, StoriesComponent_div_7_li_12_Template, 2, 1, "li", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const story_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, i_r3 % 2 !== 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", story_r2.image, \u0275\u0275sanitizeUrl)("alt", story_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(story_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(story_r2.summary);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", story_r2.events);
  }
}
var StoriesComponent = class _StoriesComponent {
  http;
  stories = [];
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/data/stories.json").subscribe((data) => {
      this.stories = data;
    });
  }
  static \u0275fac = function StoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoriesComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoriesComponent, selectors: [["app-stories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page-container", "fade-in"], [1, "page-header", "text-center"], [1, "heading-primary", "text-gradient"], [1, "subtitle"], [1, "stories-container", "container"], ["class", "story-card glass-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "story-card", "glass-card", 3, "ngClass"], [1, "story-image"], [3, "src", "alt"], [1, "story-content"], [1, "summary"], [1, "timeline-events"], [4, "ngFor", "ngForOf"]], template: function StoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Inspirational Stories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Tales of courage and sacrifice from the freedom struggle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, StoriesComponent_div_7_Template, 13, 8, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.stories);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, HttpClientModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 100px 20px 60px;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #555;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.stories-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n.story-card[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  transition: transform 0.3s ease;\n}\n.story-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.story-card.reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.story-image[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.story-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.story-content[_ngcontent-%COMP%] {\n  flex: 1.5;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.story-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  color: var(--color-navy);\n  margin-bottom: 20px;\n}\n.story-content[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #444;\n  margin-bottom: 30px;\n}\n.story-content[_ngcontent-%COMP%]   .timeline-events[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.5);\n  padding: 20px;\n  border-radius: 12px;\n  border-left: 4px solid var(--color-saffron);\n}\n.story-content[_ngcontent-%COMP%]   .timeline-events[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: var(--color-green);\n  margin-bottom: 15px;\n}\n.story-content[_ngcontent-%COMP%]   .timeline-events[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.story-content[_ngcontent-%COMP%]   .timeline-events[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #555;\n}\n.story-content[_ngcontent-%COMP%]   .timeline-events[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .story-card[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n  .story-image[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .story-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=stories.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoriesComponent, { className: "StoriesComponent", filePath: "src\\app\\pages\\stories\\stories.component.ts", lineNumber: 13 });
})();
export {
  StoriesComponent
};
//# sourceMappingURL=chunk-NXTO5GJZ.js.map
