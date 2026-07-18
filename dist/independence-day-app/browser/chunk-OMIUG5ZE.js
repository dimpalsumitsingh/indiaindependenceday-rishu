import "./chunk-QFFM24WX.js";
import {
  isArray
} from "./chunk-J5BJOUTZ.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/plugin-emitters/browser/EmittersPluginInstance.js
var EmittersPluginInstance = class {
  #container;
  #instancesManager;
  constructor(instancesManager, container) {
    this.#instancesManager = instancesManager;
    this.#container = container;
    this.#instancesManager.initContainer(container);
  }
  init() {
    return __async(this, null, function* () {
      const emittersOptions = this.#container.actualOptions.emitters;
      if (isArray(emittersOptions)) {
        for (const emitterOptions of emittersOptions) {
          yield this.#instancesManager.addEmitter(this.#container, emitterOptions);
        }
      } else {
        yield this.#instancesManager.addEmitter(this.#container, emittersOptions);
      }
    });
  }
  pause() {
    for (const emitter of this.#instancesManager.getArray(this.#container)) {
      emitter.pause();
    }
  }
  play() {
    for (const emitter of this.#instancesManager.getArray(this.#container)) {
      emitter.play();
    }
  }
  resize() {
    for (const emitter of this.#instancesManager.getArray(this.#container)) {
      emitter.resize();
    }
  }
  stop() {
    this.#instancesManager.clear(this.#container);
  }
  update(delta) {
    this.#instancesManager.getArray(this.#container).forEach((emitter) => {
      emitter.update(delta);
    });
  }
};
export {
  EmittersPluginInstance
};
//# sourceMappingURL=chunk-OMIUG5ZE.js.map
