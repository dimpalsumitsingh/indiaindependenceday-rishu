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
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PDRMFLEB.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/timeline/timeline.component.ts
var _c0 = (a0, a1) => ({ "left": a0, "right": a1 });
function TimelineComponent_div_2_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r4.image, \u0275\u0275sanitizeUrl)("alt", item_r4.title);
  }
}
function TimelineComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TimelineComponent_div_2_div_8_div_3_Template, 2, 2, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.image);
  }
}
function TimelineComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275listener("click", function TimelineComponent_div_2_Template_div_click_1_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleExpand(i_r2));
    });
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TimelineComponent_div_2_div_8_Template, 4, 2, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, i_r2 % 2 === 0, i_r2 % 2 !== 0));
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r2.expandedIndex === i_r2);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("fa-solid ", item_r4.icon, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandedIndex === i_r2);
  }
}
var TimelineComponent = class _TimelineComponent {
  http;
  timelineData = [];
  expandedIndex = null;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/data/timeline.json").subscribe((data) => {
      this.timelineData = data;
    });
  }
  toggleExpand(index) {
    if (this.expandedIndex === index) {
      this.expandedIndex = null;
    } else {
      this.expandedIndex = index;
    }
  }
  static \u0275fac = function TimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["app-timeline"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "timeline-container"], [1, "timeline"], ["class", "timeline-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "timeline-item", 3, "ngClass"], [1, "timeline-content", "glass-card", 3, "click"], [1, "timeline-icon"], [1, "timeline-year"], [1, "timeline-title"], ["class", "timeline-details", 4, "ngIf"], [1, "timeline-details"], [1, "timeline-desc"], ["class", "timeline-image", "style", "margin-top: 1rem; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2);", 4, "ngIf"], [1, "timeline-image", 2, "margin-top", "1rem", "border-radius", "8px", "overflow", "hidden", "box-shadow", "0 4px 15px rgba(0,0,0,0.2)"], [2, "width", "100%", "height", "auto", "max-height", "250px", "object-fit", "cover", "border-radius", "8px", "display", "block", 3, "src", "alt"]], template: function TimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, TimelineComponent_div_2_Template, 9, 12, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.timelineData);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, HttpClientModule], styles: ['\n\n.timeline-container[_ngcontent-%COMP%] {\n  padding: 50px 20px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 4px;\n  background-color: rgba(255, 255, 255, 0.2);\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -2px;\n  border-radius: 2px;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n  position: relative;\n  background-color: inherit;\n  width: 50%;\n}\n.timeline-item.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n.timeline-item.right[_ngcontent-%COMP%] {\n  left: 50%;\n}\n.timeline-item[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  right: -10px;\n  background-color: var(--color-white);\n  border: 4px solid var(--color-saffron);\n  top: 20px;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 0 10px rgba(255, 153, 51, 0.5);\n}\n.timeline-item.right[_ngcontent-%COMP%]::after {\n  left: -10px;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 12px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.timeline-content[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  font-size: 5rem;\n  opacity: 0.05;\n  color: var(--color-navy);\n  transform: rotate(-15deg);\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-year[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-saffron);\n  margin-bottom: 10px;\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-family: var(--font-heading);\n  color: var(--text-dark);\n  margin: 0;\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-desc[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #555;\n  line-height: 1.6;\n  animation: fadeIn 0.5s ease-in-out;\n}\n@media screen and (max-width: 768px) {\n  .timeline[_ngcontent-%COMP%]::after {\n    left: 31px;\n  }\n  .timeline-item[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n  }\n  .timeline-item.left[_ngcontent-%COMP%], \n   .timeline-item.right[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .timeline-item[_ngcontent-%COMP%]::after, \n   .timeline-item.right[_ngcontent-%COMP%]::after {\n    left: 21px;\n  }\n}\n/*# sourceMappingURL=timeline.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src\\app\\components\\timeline\\timeline.component.ts", lineNumber: 13 });
})();

// src/app/pages/timeline-page/timeline-page.component.ts
var TimelinePageComponent = class _TimelinePageComponent {
  static \u0275fac = function TimelinePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelinePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelinePageComponent, selectors: [["app-timeline-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[1, "page-container", "fade-in"], [1, "page-header"], [1, "heading-primary", "text-gradient", "text-center"], [1, "text-center", "subtitle"]], template: function TimelinePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Historical Timeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "A journey through India's struggle for freedom");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "app-timeline");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [TimelineComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 100px 20px 60px;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #666;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=timeline-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelinePageComponent, { className: "TimelinePageComponent", filePath: "src\\app\\pages\\timeline-page\\timeline-page.component.ts", lineNumber: 11 });
})();
export {
  TimelinePageComponent
};
//# sourceMappingURL=chunk-NXM7MA4W.js.map
