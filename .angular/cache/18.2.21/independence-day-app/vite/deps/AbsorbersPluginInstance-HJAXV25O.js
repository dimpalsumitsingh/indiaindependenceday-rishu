import "./chunk-QYZGOMQO.js";
import {
  executeOnSingleOrMultiple,
  isArray
} from "./chunk-PO7BXMXD.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersPluginInstance.js
var AbsorbersPluginInstance = class {
  #container;
  #instancesManager;
  constructor(container, instancesManager) {
    this.#container = container;
    this.#instancesManager = instancesManager;
    this.#instancesManager.initContainer(container);
  }
  draw(context) {
    for (const absorber of this.#instancesManager.getArray(this.#container)) {
      absorber.draw(context);
    }
  }
  init() {
    return __async(this, null, function* () {
      const absorbers = this.#container.actualOptions.absorbers, promises = executeOnSingleOrMultiple(absorbers, (absorber) => __async(this, null, function* () {
        yield this.#instancesManager.addAbsorber(this.#container, absorber);
      }));
      if (isArray(promises)) {
        yield Promise.all(promises);
      } else {
        yield promises;
      }
    });
  }
  particleUpdate(particle, delta) {
    for (const absorber of this.#instancesManager.getArray(this.#container)) {
      absorber.attract(particle, delta);
      if (particle.destroyed) {
        break;
      }
    }
  }
  resize() {
    for (const absorber of this.#instancesManager.getArray(this.#container)) {
      absorber.resize();
    }
  }
  stop() {
    this.#instancesManager.clear(this.#container);
  }
};
export {
  AbsorbersPluginInstance
};
//# sourceMappingURL=AbsorbersPluginInstance-HJAXV25O.js.map
