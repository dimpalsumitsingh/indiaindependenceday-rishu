import {
  OptionsColor,
  ValueWithRandom,
  isNull,
  isNumber,
  loadProperty,
  loadRangeProperty,
  setRangeValue
} from "./chunk-PO7BXMXD.js";

// node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberLife.js
var AbsorberLife = class {
  count;
  delay;
  duration;
  wait = false;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "count", data.count);
    loadRangeProperty(this, "delay", data.delay);
    loadRangeProperty(this, "duration", data.duration);
    loadProperty(this, "wait", data.wait);
  }
};

// node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSizeLimit.js
var AbsorberSizeLimit = class {
  mass = 0;
  radius = 0;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "mass", data.mass);
    loadProperty(this, "radius", data.radius);
  }
};

// node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSize.js
var AbsorberSize = class extends ValueWithRandom {
  density = 5;
  limit = new AbsorberSizeLimit();
  value = 50;
  load(data) {
    if (isNull(data)) {
      return;
    }
    super.load(data);
    loadProperty(this, "density", data.density);
    if (isNumber(data.limit)) {
      this.limit.radius = data.limit;
    } else {
      this.limit.load(data.limit);
    }
  }
};

// node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/Absorber.js
var Absorber = class {
  color;
  destroy;
  draggable;
  life;
  name;
  opacity;
  orbits;
  position;
  size;
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#000000";
    this.draggable = false;
    this.opacity = 1;
    this.destroy = true;
    this.orbits = false;
    this.life = new AbsorberLife();
    this.size = new AbsorberSize();
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    loadProperty(this, "draggable", data.draggable);
    if (data.life !== void 0) {
      this.life.load(data.life);
    }
    this.name = data.name;
    loadProperty(this, "opacity", data.opacity);
    if (data.position !== void 0) {
      this.position = {};
      if (data.position.x !== void 0) {
        this.position.x = setRangeValue(data.position.x);
      }
      if (data.position.y !== void 0) {
        this.position.y = setRangeValue(data.position.y);
      }
    }
    if (data.size !== void 0) {
      this.size.load(data.size);
    }
    loadProperty(this, "destroy", data.destroy);
    loadProperty(this, "orbits", data.orbits);
  }
};

export {
  Absorber
};
//# sourceMappingURL=chunk-QC5Z5CNL.js.map
