import {
  executeOnSingleOrMultiple,
  isNull,
  loadProperty
} from "./chunk-PO7BXMXD.js";

// node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/ClickEvent.js
var ClickEvent = class {
  enable = false;
  mode = [];
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "mode", data.mode);
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/Enums/DivType.js
var DivType;
(function(DivType2) {
  DivType2["circle"] = "circle";
  DivType2["rectangle"] = "rectangle";
})(DivType || (DivType = {}));

// node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/DivEvent.js
var DivEvent = class {
  enable = false;
  mode = [];
  selectors = [];
  type = DivType.circle;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "selectors", data.selectors);
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "mode", data.mode);
    loadProperty(this, "type", data.type);
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/HoverEvent.js
var HoverEvent = class {
  enable = false;
  mode = [];
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "mode", data.mode);
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/Events.js
var Events = class {
  onClick = new ClickEvent();
  onDiv = new DivEvent();
  onHover = new HoverEvent();
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.onClick.load(data.onClick);
    const onDiv = data.onDiv;
    if (onDiv !== void 0) {
      this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
        const tmp = new DivEvent();
        tmp.load(t);
        return tmp;
      });
    }
    this.onHover.load(data.onHover);
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/Enums/InteractivityDetect.js
var InteractivityDetect;
(function(InteractivityDetect2) {
  InteractivityDetect2["canvas"] = "canvas";
  InteractivityDetect2["parent"] = "parent";
  InteractivityDetect2["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));

// node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Modes/Modes.js
var Modes = class {
  #container;
  #pluginManager;
  constructor(pluginManager, container) {
    this.#pluginManager = pluginManager;
    this.#container = container;
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (!this.#container) {
      return;
    }
    const interactors = this.#pluginManager.interactors?.get(this.#container);
    if (!interactors) {
      return;
    }
    for (const interactor of interactors) {
      if (!interactor.loadModeOptions) {
        continue;
      }
      interactor.loadModeOptions(this, data);
    }
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Interactivity.js
var Interactivity = class {
  detectsOn = InteractivityDetect.window;
  events = new Events();
  modes;
  constructor(pluginManager, container) {
    this.modes = new Modes(pluginManager, container);
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    const detectsOn = data.detectsOn;
    if (detectsOn !== void 0) {
      this.detectsOn = detectsOn;
    }
    this.events.load(data.events);
    this.modes.load(data.modes);
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/InteractivityConstants.js
var clickEvent = "click";
var mouseDownEvent = "pointerdown";
var mouseUpEvent = "pointerup";
var mouseLeaveEvent = "pointerleave";
var mouseMoveEvent = "pointermove";
var touchStartEvent = "touchstart";
var touchEndEvent = "touchend";
var touchMoveEvent = "touchmove";
var touchCancelEvent = "touchcancel";

// node_modules/@tsparticles/plugin-interactivity/browser/Enums/InteractorType.js
var InteractorType;
(function(InteractorType2) {
  InteractorType2["external"] = "external";
  InteractorType2["particles"] = "particles";
})(InteractorType || (InteractorType = {}));

export {
  DivType,
  InteractivityDetect,
  Interactivity,
  clickEvent,
  mouseDownEvent,
  mouseUpEvent,
  mouseLeaveEvent,
  mouseMoveEvent,
  touchStartEvent,
  touchEndEvent,
  touchMoveEvent,
  touchCancelEvent,
  InteractorType
};
//# sourceMappingURL=chunk-OXL5OWV2.js.map
