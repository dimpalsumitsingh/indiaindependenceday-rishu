import "./chunk-QFFM24WX.js";
import {
  DrawLayer,
  defaultCompositeValue
} from "./chunk-J5BJOUTZ.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/plugin-blend/browser/BlendPluginInstance.js
var BlendPluginInstance = class {
  layer = DrawLayer.CanvasSetup;
  #container;
  #defaultCompositeValue;
  constructor(container) {
    this.#container = container;
  }
  drawParticleCleanup(context, particle) {
    if (!particle.options.blend?.enable) {
      return;
    }
    context.globalCompositeOperation = particle.originalBlendMode ?? defaultCompositeValue;
    particle.originalBlendMode = void 0;
  }
  drawParticleSetup(context, particle) {
    if (!particle.options.blend?.enable) {
      return;
    }
    particle.originalBlendMode = context.globalCompositeOperation;
    context.globalCompositeOperation = particle.options.blend.mode;
  }
  drawSettingsCleanup(context) {
    if (!this.#defaultCompositeValue) {
      return;
    }
    context.globalCompositeOperation = this.#defaultCompositeValue;
  }
  drawSettingsSetup(context) {
    const previousComposite = context.globalCompositeOperation, blend = this.#container.actualOptions.blend;
    this.#defaultCompositeValue = previousComposite;
    context.globalCompositeOperation = blend?.enable ? blend.mode : previousComposite;
  }
};
export {
  BlendPluginInstance
};
//# sourceMappingURL=chunk-A4OGKDLI.js.map
