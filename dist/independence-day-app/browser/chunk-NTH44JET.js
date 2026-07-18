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
  ɵɵtextInterpolate1
} from "./chunk-PDRMFLEB.js";
import "./chunk-WDMUDEB6.js";

// src/app/pages/events/events.component.ts
function EventsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "span");
    \u0275\u0275element(8, "i", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275element(11, "i", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275text(16, "RSVP Now");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", event_r1.image, \u0275\u0275sanitizeUrl)("alt", event_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r1.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", event_r1.location, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r1.date, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.description);
  }
}
var EventsComponent = class _EventsComponent {
  http;
  events = [];
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get("assets/data/events.json").subscribe((data) => {
      this.events = data;
    });
  }
  static \u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page-container", "fade-in"], [1, "page-header", "text-center"], [1, "heading-primary", "text-gradient"], [1, "subtitle"], [1, "events-container", "container"], ["class", "event-card glass-card", 4, "ngFor", "ngForOf"], [1, "event-card", "glass-card"], [1, "event-image"], [3, "src", "alt"], [1, "event-details"], [1, "event-meta"], [1, "fa-solid", "fa-location-dot"], [1, "fa-regular", "fa-calendar"], [1, "btn", "btn-primary"]], template: function EventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Upcoming Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Join the celebrations across the country");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, EventsComponent_div_7_Template, 17, 6, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.events);
    }
  }, dependencies: [CommonModule, NgForOf, HttpClientModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 100px 20px 60px;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #555;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.events-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.event-card[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  transition: transform 0.3s ease;\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.event-image[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n}\n.event-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.event-details[_ngcontent-%COMP%] {\n  padding: 30px;\n  flex: 1;\n}\n.event-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-navy);\n  margin-top: 0;\n  margin-bottom: 15px;\n  font-size: 1.8rem;\n}\n.event-details[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  color: var(--color-green);\n  font-weight: 600;\n}\n.event-details[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.event-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #444;\n  line-height: 1.6;\n  margin-bottom: 25px;\n}\n.event-details[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  background: var(--color-saffron);\n  color: white;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background 0.3s;\n}\n.event-details[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #e6801c;\n}\n@media (max-width: 768px) {\n  .event-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .event-image[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=events.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "src\\app\\pages\\events\\events.component.ts", lineNumber: 13 });
})();
export {
  EventsComponent
};
//# sourceMappingURL=chunk-NTH44JET.js.map
