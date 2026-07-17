import "./chunk-QYZGOMQO.js";
import {
  isNumber
} from "./chunk-PO7BXMXD.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersInstancesManager.js
var defaultIndex = 0;
var AbsorbersInstancesManager = class {
  #containerArrays;
  #pluginManager;
  constructor(pluginManager) {
    this.#pluginManager = pluginManager;
    this.#containerArrays = /* @__PURE__ */ new Map();
  }
  addAbsorber(container, options, position) {
    return __async(this, null, function* () {
      const {
        AbsorberInstance
      } = yield import("./AbsorberInstance-ZIXLFMN3.js"), absorber = new AbsorberInstance(this.#pluginManager, container, options, position), array = this.getArray(container);
      array.push(absorber);
      return absorber;
    });
  }
  clear(container) {
    this.initContainer(container);
    this.#containerArrays.set(container, []);
  }
  getArray(container) {
    this.initContainer(container);
    let array = this.#containerArrays.get(container);
    if (!array) {
      array = [];
      this.#containerArrays.set(container, array);
    }
    return array;
  }
  initContainer(container) {
    if (this.#containerArrays.has(container)) {
      return;
    }
    this.#containerArrays.set(container, []);
    container.getAbsorber ??= (idxOrName) => {
      const array = this.getArray(container);
      return idxOrName === void 0 || isNumber(idxOrName) ? array[idxOrName ?? defaultIndex] : array.find((t) => t.name === idxOrName);
    };
    container.addAbsorber ??= (options, position) => {
      return this.addAbsorber(container, options, position);
    };
  }
  removeAbsorber(container, absorber) {
    const index = this.getArray(container).indexOf(absorber), deleteCount = 1;
    if (index >= defaultIndex) {
      this.getArray(container).splice(index, deleteCount);
    }
  }
};
export {
  AbsorbersInstancesManager
};
//# sourceMappingURL=AbsorbersInstancesManager-NHX4TSCG.js.map
