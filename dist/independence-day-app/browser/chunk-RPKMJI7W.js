import {
  HttpClient,
  HttpClientModule
} from "./chunk-LRPQMU57.js";
import {
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PDRMFLEB.js";
import "./chunk-WDMUDEB6.js";

// src/app/components/gallery/gallery.component.ts
function GalleryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function GalleryComponent_div_1_Template_div_click_0_listener() {
      const img_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLightbox(img_r2));
    });
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const img_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r2.url, \u0275\u0275sanitizeUrl)("alt", img_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(img_r2.title);
  }
}
function GalleryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function GalleryComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275listener("click", function GalleryComponent_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 9);
    \u0275\u0275listener("click", function GalleryComponent_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275element(3, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementStart(5, "div", 11)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.selectedImage.url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedImage.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedImage.title);
  }
}
var GalleryComponent = class _GalleryComponent {
  http;
  images = [];
  selectedImage = null;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/data/gallery.json").subscribe((data) => {
      this.images = data;
    });
  }
  openLightbox(image) {
    this.selectedImage = image;
  }
  closeLightbox() {
    this.selectedImage = null;
  }
  static \u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleryComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "masonry-gallery"], ["class", "gallery-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "lightbox", 3, "click", 4, "ngIf"], [1, "gallery-item", 3, "click"], [3, "src", "alt"], [1, "overlay"], [1, "title"], [1, "lightbox", 3, "click"], [1, "lightbox-content", 3, "click"], [1, "close-btn", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "lightbox-caption"]], template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, GalleryComponent_div_1_Template, 5, 3, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, GalleryComponent_div_2_Template, 8, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.images);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedImage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, HttpClientModule], styles: ["\n\n.masonry-gallery[_ngcontent-%COMP%] {\n  column-count: 3;\n  column-gap: 20px;\n  padding: 20px;\n}\n.gallery-item[_ngcontent-%COMP%] {\n  break-inside: avoid;\n  margin-bottom: 20px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 12px;\n  cursor: pointer;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  transition: transform 0.5s ease;\n}\n.gallery-item[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.8),\n      transparent);\n  padding: 20px;\n  transform: translateY(100%);\n  transition: transform 0.3s ease;\n  display: flex;\n  align-items: flex-end;\n}\n.gallery-item[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 900px;\n  max-height: 90vh;\n}\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 80vh;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n}\n.lightbox-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: 0;\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 2rem;\n  cursor: pointer;\n}\n.lightbox-content[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-saffron);\n}\n.lightbox-content[_ngcontent-%COMP%]   .lightbox-caption[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #fff;\n  text-align: center;\n}\n.lightbox-content[_ngcontent-%COMP%]   .lightbox-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-heading);\n}\n@media (max-width: 768px) {\n  .masonry-gallery[_ngcontent-%COMP%] {\n    column-count: 2;\n  }\n}\n@media (max-width: 480px) {\n  .masonry-gallery[_ngcontent-%COMP%] {\n    column-count: 1;\n  }\n}\n/*# sourceMappingURL=gallery.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src\\app\\components\\gallery\\gallery.component.ts", lineNumber: 13 });
})();

// src/app/pages/gallery-page/gallery-page.component.ts
var GalleryPageComponent = class _GalleryPageComponent {
  static \u0275fac = function GalleryPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleryPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryPageComponent, selectors: [["app-gallery-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[1, "page-container", "fade-in"], [1, "page-header", "text-center"], [1, "heading-primary", "text-gradient"], [1, "subtitle"]], template: function GalleryPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Glimpses of our vibrant nation");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "app-gallery");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [GalleryComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 100px 20px 60px;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #555;\n}\n/*# sourceMappingURL=gallery-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryPageComponent, { className: "GalleryPageComponent", filePath: "src\\app\\pages\\gallery-page\\gallery-page.component.ts", lineNumber: 11 });
})();
export {
  GalleryPageComponent
};
//# sourceMappingURL=chunk-RPKMJI7W.js.map
