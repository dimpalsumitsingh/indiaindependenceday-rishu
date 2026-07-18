import {
  Emitter
} from "./chunk-2GUDQIOI.js";
import "./chunk-QFFM24WX.js";
import {
  isNumber
} from "./chunk-J5BJOUTZ.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/plugin-emitters/browser/EmittersInstancesManager.js
var defaultIndex = 0;
var EmittersInstancesManager = class {
  #containerArrays;
  #pluginManager;
  constructor(pluginManager) {
    this.#containerArrays = /* @__PURE__ */ new Map();
    this.#pluginManager = pluginManager;
  }
  addEmitter(container, options, position) {
    return __async(this, null, function* () {
      const emitterOptions = new Emitter();
      emitterOptions.load(options);
      const {
        EmitterInstance
      } = yield import("./chunk-5ESPI4IY.js"), emitter = new EmitterInstance(this.#pluginManager, container, (emitter2) => {
        this.removeEmitter(container, emitter2);
      }, emitterOptions, position);
      yield emitter.init();
      this.getArray(container).push(emitter);
      return emitter;
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
    container.getEmitter = (idxOrName) => {
      const array = this.getArray(container);
      return idxOrName === void 0 || isNumber(idxOrName) ? array[idxOrName ?? defaultIndex] : array.find((t) => t.name === idxOrName);
    };
    container.addEmitter = (options, position) => __async(this, null, function* () {
      return this.addEmitter(container, options, position);
    });
    container.removeEmitter = (idxOrName) => {
      const emitter = container.getEmitter?.(idxOrName);
      if (emitter) {
        this.removeEmitter(container, emitter);
      }
    };
    container.playEmitter = (idxOrName) => {
      const emitter = container.getEmitter?.(idxOrName);
      if (emitter) {
        emitter.externalPlay();
      }
    };
    container.pauseEmitter = (idxOrName) => {
      const emitter = container.getEmitter?.(idxOrName);
      if (emitter) {
        emitter.externalPause();
      }
    };
  }
  removeEmitter(container, emitter) {
    const index = this.getArray(container).indexOf(emitter), minIndex = 0, deleteCount = 1;
    if (index >= minIndex) {
      this.getArray(container).splice(index, deleteCount);
    }
  }
};
export {
  EmittersInstancesManager
};
//# sourceMappingURL=chunk-ZSZKVWSU.js.map
