import {
  RouterLink,
  RouterModule
} from "./chunk-EUPDNNIO.js";
import "./chunk-LRPQMU57.js";
import {
  CommonModule
} from "./chunk-VFFJBW32.js";
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

// src/app/components/hero/hero.component.ts
var HeroComponent = class _HeroComponent {
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "hero-section"], [1, "hero-bg"], [1, "overlay"], ["src", "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2070&auto=format&fit=crop", "alt", "Indian Flag Background", 1, "bg-img", "parallax"], [1, "hero-content"], [1, "glass-card", "hero-card", "fade-in"], [1, "chakra-wrapper"], [1, "fa-solid", "fa-dharmachakra", "chakra-spin"], [1, "main-title", "text-gradient"], [1, "subtitle"], [1, "cta-group"], ["routerLink", "/history", 1, "btn", "btn-primary"], ["routerLink", "/freedom-fighters", 1, "btn", "btn-secondary"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 8);
      \u0275\u0275text(9, "Happy Independence Day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, "Celebrating Freedom, Unity and Pride");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "a", 11);
      \u0275\u0275text(14, "Explore History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 12);
      \u0275\u0275text(16, "Freedom Fighters");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -2;\n  background:\n    linear-gradient(\n      180deg,\n      var(--color-saffron) 33.33%,\n      #FFFFFF 33.33%,\n      #FFFFFF 66.66%,\n      var(--color-green) 66.66%);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  z-index: 1;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-bg[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  display: none;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  padding: 0 20px;\n  max-width: 800px;\n  width: 100%;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  padding: 40px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(19, 136, 8, 0.18);\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);\n  border-radius: 24px;\n  backdrop-filter: blur(18px);\n  -webkit-backdrop-filter: blur(18px);\n  color: var(--text-dark);\n}\n.hero-section[_ngcontent-%COMP%]   .chakra-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.hero-section[_ngcontent-%COMP%]   .chakra-wrapper[_ngcontent-%COMP%]   .chakra-spin[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--color-navy);\n  animation: _ngcontent-%COMP%_spin 10s linear infinite;\n  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));\n}\n.hero-section[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 1.1;\n  margin-bottom: 10px;\n  color: var(--color-navy);\n  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.12);\n  background: none;\n  -webkit-background-clip: unset;\n  -webkit-text-fill-color: currentColor;\n}\n.hero-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #333;\n  margin-bottom: 40px;\n  font-weight: 300;\n}\n.hero-section[_ngcontent-%COMP%]   .cta-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n.hero-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  border-radius: 30px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition:\n    transform 0.2s ease,\n    background-color 0.2s ease,\n    color 0.2s ease;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 160px;\n  border: 2px solid transparent;\n}\n.hero-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(19, 136, 8, 0.25);\n}\n.hero-section[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-navy);\n  color: var(--color-white);\n  border-color: var(--color-navy);\n}\n.hero-section[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #001f54;\n  transform: translateY(-2px);\n}\n.hero-section[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-navy);\n  border: 2px solid var(--color-navy);\n}\n.hero-section[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(19, 136, 8, 0.08);\n  transform: translateY(-2px);\n}\n.hero-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(19, 136, 8, 0.25);\n}\n.hero-section[_ngcontent-%COMP%]   .music-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: var(--color-white);\n  padding: 10px 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0 auto;\n  transition: background 0.3s ease;\n}\n.hero-section[_ngcontent-%COMP%]   .music-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n@keyframes _ngcontent-%COMP%_slowZoom {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .cta-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src\\app\\components\\hero\\hero.component.ts", lineNumber: 12 });
})();

// src/app/pages/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "home-page", "fade-in"], [1, "about-section"], [1, "container"], [1, "about-content", "glass-card"], [1, "heading-primary"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-hero");
      \u0275\u0275elementStart(2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
      \u0275\u0275text(6, "About Independence Day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " On August 15, 1947, India gained its independence from British rule after a long and hard-fought struggle. This day marks the birth of a free and democratic nation. We celebrate the courage, sacrifice, and resilience of our freedom fighters who laid down their lives for our future. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Today, we remember our history and look forward to a brighter future, upholding the values of unity in diversity. ");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [HeroComponent], styles: ["\n\n.home-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.about-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: var(--bg-gradient);\n}\n.about-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n}\n.about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 30px;\n}\n.about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1.8;\n  color: #555;\n  margin-bottom: 20px;\n}\n.about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .about-section[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .about-section[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 11 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-HO6W6PCP.js.map
