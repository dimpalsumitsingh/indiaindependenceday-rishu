import "./chunk-QYZGOMQO.js";
import {
  getDistance
} from "./chunk-PO7BXMXD.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/interaction-particles-collisions/browser/OverlapPluginInstance.js
var minRetries = 0;
var OverlapPluginInstance = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  checkParticlePosition(particle, position, tryCount) {
    return !this.#hasOverlaps(particle, position, tryCount);
  }
  #hasOverlaps(particle, pos, tryCount) {
    const collisionsOptions = particle.options.collisions;
    if (!collisionsOptions?.enable) {
      return false;
    }
    const overlapOptions = collisionsOptions.overlap;
    if (overlapOptions.enable) {
      return false;
    }
    const retries = overlapOptions.retries;
    if (retries >= minRetries && tryCount > retries) {
      throw new Error(`Particle is overlapping and can't be placed`);
    }
    return !!this.#container.particles.find((p) => getDistance(pos, p.position) < particle.getRadius() + p.getRadius());
  }
};
export {
  OverlapPluginInstance
};
//# sourceMappingURL=OverlapPluginInstance-HDCMFHTI.js.map
