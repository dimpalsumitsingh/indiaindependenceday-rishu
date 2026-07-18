import {
  AnimatableColor,
  Fill,
  PixelMode,
  Stroke,
  deepExtend,
  executeOnSingleOrMultiple,
  isNull,
  loadProperty,
  loadRangeProperty,
  setRangeValue
} from "./chunk-J5BJOUTZ.js";

// node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSize.js
var EmitterSize = class {
  height = 0;
  mode = PixelMode.percent;
  width = 0;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "mode", data.mode);
    loadProperty(this, "height", data.height);
    loadProperty(this, "width", data.width);
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterLife.js
var EmitterLife = class {
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

// node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterRate.js
var EmitterRate = class {
  delay = 0.1;
  quantity = 1;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadRangeProperty(this, "quantity", data.quantity);
    loadRangeProperty(this, "delay", data.delay);
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShapeReplace.js
var EmitterShapeReplace = class {
  color = false;
  opacity = false;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "color", data.color);
    loadProperty(this, "opacity", data.opacity);
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShape.js
var EmitterShape = class {
  options = {};
  replace = new EmitterShapeReplace();
  type = "square";
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options ?? {});
    }
    this.replace.load(data.replace);
    loadProperty(this, "type", data.type);
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSpawn.js
var EmitterSpawn = class {
  fill;
  stroke;
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.fill) {
      this.fill ??= new Fill();
      this.fill.load(data.fill);
    }
    if (data.stroke) {
      this.stroke ??= new Stroke();
      this.stroke.load(data.stroke);
    }
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/Emitter.js
var Emitter = class {
  autoPlay = true;
  direction;
  domId;
  fill = true;
  life = new EmitterLife();
  name;
  particles;
  position;
  rate = new EmitterRate();
  shape = new EmitterShape();
  size;
  spawn = new EmitterSpawn();
  spawnFillColor;
  spawnStrokeColor;
  startCount = 0;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "autoPlay", data.autoPlay);
    if (data.size !== void 0) {
      this.size ??= new EmitterSize();
      this.size.load(data.size);
    }
    loadProperty(this, "direction", data.direction);
    loadProperty(this, "domId", data.domId);
    loadProperty(this, "fill", data.fill);
    this.life.load(data.life);
    loadProperty(this, "name", data.name);
    this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
      return deepExtend({}, particles);
    });
    this.rate.load(data.rate);
    this.shape.load(data.shape);
    this.spawn.load(data.spawn);
    if (data.position !== void 0) {
      this.position = {};
      if (data.position.x !== void 0) {
        this.position.x = setRangeValue(data.position.x);
      }
      if (data.position.y !== void 0) {
        this.position.y = setRangeValue(data.position.y);
      }
    }
    if (data.spawnFillColor !== void 0) {
      this.spawnFillColor ??= new AnimatableColor();
      this.spawnFillColor.load(data.spawnFillColor);
    }
    if (data.spawnStrokeColor !== void 0) {
      this.spawnStrokeColor ??= new AnimatableColor();
      this.spawnStrokeColor.load(data.spawnStrokeColor);
    }
    loadProperty(this, "startCount", data.startCount);
  }
};

export {
  EmitterSize,
  Emitter
};
//# sourceMappingURL=chunk-2GUDQIOI.js.map
