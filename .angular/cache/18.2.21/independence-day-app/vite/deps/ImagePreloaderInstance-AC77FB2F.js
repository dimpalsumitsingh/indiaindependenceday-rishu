import "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/shape-image/browser/ImagePreloaderInstance.js
var ImagePreloaderInstance = class {
  #container;
  #engine;
  constructor(engine, container) {
    this.#engine = engine;
    this.#container = container;
  }
  destroy() {
    this.#engine.images?.delete(this.#container);
  }
};
export {
  ImagePreloaderInstance
};
//# sourceMappingURL=ImagePreloaderInstance-AC77FB2F.js.map
