import {
  HttpClient,
  HttpClientModule
} from "./chunk-LRPQMU57.js";
import {
  CommonModule,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PDRMFLEB.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/freedom-fighters/freedom-fighters.component.ts
function FreedomFightersComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "h3", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "blockquote", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fighter_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", fighter_r1.image, \u0275\u0275sanitizeUrl)("alt", fighter_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(fighter_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", fighter_r1.birth, " - ", fighter_r1.death, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fighter_r1.contributions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', fighter_r1.quote, '"');
  }
}
var FreedomFightersComponent = class _FreedomFightersComponent {
  http;
  fighters = [];
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/data/fighters.json").subscribe((data) => {
      this.fighters = data;
    });
  }
  static \u0275fac = function FreedomFightersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FreedomFightersComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FreedomFightersComponent, selectors: [["app-freedom-fighters"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page-container", "fade-in"], [1, "page-header", "text-center"], [1, "heading-primary", "text-gradient"], [1, "subtitle"], [1, "fighters-grid", "container"], ["class", "fighter-card glass-card", 4, "ngFor", "ngForOf"], [1, "fighter-card", "glass-card"], [1, "card-img-wrapper"], [1, "fighter-img", 3, "src", "alt"], [1, "card-content"], [1, "fighter-name"], [1, "fighter-dates"], [1, "fighter-contrib"], [1, "fighter-quote"]], template: function FreedomFightersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Freedom Fighters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Remembering the heroes who gave us our tomorrow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, FreedomFightersComponent_div_7_Template, 12, 7, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.fighters);
    }
  }, dependencies: [CommonModule, NgForOf, HttpClientModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 100px 20px 60px;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #555;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.fighters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 30px;\n}\n.fighter-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.3s ease;\n}\n.fighter-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n}\n.fighter-card[_ngcontent-%COMP%]:hover   .card-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-img-wrapper[_ngcontent-%COMP%] {\n  height: 250px;\n  overflow: hidden;\n}\n.card-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n  transition: transform 0.5s ease;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.fighter-name[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  color: var(--color-navy);\n  margin: 0 0 5px 0;\n}\n.fighter-dates[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-green);\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.fighter-contrib[_ngcontent-%COMP%] {\n  color: #444;\n  line-height: 1.6;\n  margin-bottom: 20px;\n  flex: 1;\n}\n.fighter-quote[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--color-saffron);\n  border-left: 3px solid var(--color-saffron);\n  padding-left: 15px;\n  margin: 0;\n  font-weight: 600;\n}\n/*# sourceMappingURL=freedom-fighters.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FreedomFightersComponent, { className: "FreedomFightersComponent", filePath: "src\\app\\pages\\freedom-fighters\\freedom-fighters.component.ts", lineNumber: 13 });
})();
export {
  FreedomFightersComponent
};
//# sourceMappingURL=chunk-PZG4WHDL.js.map
