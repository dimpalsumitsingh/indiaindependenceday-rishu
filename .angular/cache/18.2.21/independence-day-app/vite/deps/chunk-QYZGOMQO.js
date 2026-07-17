import {
  EventType,
  canvasFirstIndex,
  canvasTag,
  deleteCount,
  generatedAttribute,
  generatedFalse,
  generatedTrue,
  getItemMapFromInitializer,
  getItemsFromInitializer,
  getLogger,
  getRandom,
  itemFromSingleOrMultiple,
  loadMinIndex,
  loadRandomFactor,
  minIndex,
  none,
  one,
  removeDeleteCount,
  removeMinIndex,
  safeDocument
} from "./chunk-PO7BXMXD.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js
var RotateDirection;
(function(RotateDirection2) {
  RotateDirection2["clockwise"] = "clockwise";
  RotateDirection2["counterClockwise"] = "counter-clockwise";
  RotateDirection2["random"] = "random";
})(RotateDirection || (RotateDirection = {}));

// node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js
var EventDispatcher = class {
  #listeners;
  constructor() {
    this.#listeners = /* @__PURE__ */ new Map();
  }
  addEventListener(type, listener) {
    this.removeEventListener(type, listener);
    let arr = this.#listeners.get(type);
    if (!arr) {
      arr = [];
      this.#listeners.set(type, arr);
    }
    arr.push(listener);
  }
  dispatchEvent(type, args) {
    const listeners = this.#listeners.get(type);
    listeners?.forEach((handler) => {
      handler(args);
    });
  }
  hasEventListener(type) {
    return !!this.#listeners.get(type);
  }
  removeAllEventListeners(type) {
    if (!type) {
      this.#listeners = /* @__PURE__ */ new Map();
    } else {
      this.#listeners.delete(type);
    }
  }
  removeEventListener(type, listener) {
    const arr = this.#listeners.get(type);
    if (!arr) {
      return;
    }
    const length = arr.length, idx = arr.indexOf(listener);
    if (idx < minIndex) {
      return;
    }
    if (length === deleteCount) {
      this.#listeners.delete(type);
    } else {
      arr.splice(idx, deleteCount);
    }
  }
};

// node_modules/@tsparticles/engine/browser/Core/Utils/PluginManager.js
var PluginManager = class {
  colorManagers = /* @__PURE__ */ new Map();
  easingFunctions = /* @__PURE__ */ new Map();
  effectDrawers = /* @__PURE__ */ new Map();
  initializers = {
    effects: /* @__PURE__ */ new Map(),
    shapes: /* @__PURE__ */ new Map(),
    updaters: /* @__PURE__ */ new Map()
  };
  palettes = /* @__PURE__ */ new Map();
  plugins = [];
  presets = /* @__PURE__ */ new Map();
  shapeDrawers = /* @__PURE__ */ new Map();
  updaters = /* @__PURE__ */ new Map();
  #allLoadersSet = /* @__PURE__ */ new Set();
  #configs = /* @__PURE__ */ new Map();
  #engine;
  #executedSet = /* @__PURE__ */ new Set();
  #initialized = false;
  #isRunningLoaders = false;
  #loadPromises = /* @__PURE__ */ new Set();
  constructor(engine) {
    this.#engine = engine;
  }
  get configs() {
    const res = {};
    for (const [name, config] of this.#configs) {
      res[name] = config;
    }
    return res;
  }
  addColorManager(name, manager) {
    this.colorManagers.set(name, manager);
  }
  addConfig(config) {
    const key = config.key ?? config.name ?? "default";
    this.#configs.set(key, config);
    this.#engine.dispatchEvent(EventType.configAdded, {
      data: {
        name: key,
        config
      }
    });
  }
  addEasing(name, easing) {
    if (this.easingFunctions.get(name)) {
      return;
    }
    this.easingFunctions.set(name, easing);
  }
  addEffect(effect, drawer) {
    this.initializers.effects.set(effect, drawer);
  }
  addPalette(name, palette) {
    this.palettes.set(name, palette);
  }
  addParticleUpdater(name, updaterInitializer) {
    this.initializers.updaters.set(name, updaterInitializer);
  }
  addPlugin(plugin) {
    if (this.getPlugin(plugin.id)) {
      return;
    }
    this.plugins.push(plugin);
  }
  addPreset(preset, options, override = false) {
    if (!(override || !this.getPreset(preset))) {
      return;
    }
    this.presets.set(preset, options);
  }
  addShape(shapes, drawer) {
    for (const shape of shapes) {
      this.initializers.shapes.set(shape, drawer);
    }
  }
  clearPlugins(container) {
    this.effectDrawers.delete(container);
    this.shapeDrawers.delete(container);
    this.updaters.delete(container);
  }
  getEasing(name) {
    return this.easingFunctions.get(name) ?? ((value) => value);
  }
  getEffectDrawers(container, force = false) {
    return getItemMapFromInitializer(container, this.effectDrawers, this.initializers.effects, force);
  }
  getPalette(name) {
    return this.palettes.get(name);
  }
  getPlugin(plugin) {
    return this.plugins.find((t) => t.id === plugin);
  }
  getPreset(preset) {
    return this.presets.get(preset);
  }
  getShapeDrawers(container, force = false) {
    return __async(this, null, function* () {
      return getItemMapFromInitializer(container, this.shapeDrawers, this.initializers.shapes, force);
    });
  }
  getUpdaters(container, force = false) {
    return __async(this, null, function* () {
      return getItemsFromInitializer(container, this.updaters, this.initializers.updaters, force);
    });
  }
  init() {
    return __async(this, null, function* () {
      if (this.#initialized || this.#isRunningLoaders) {
        return;
      }
      this.#isRunningLoaders = true;
      this.#executedSet = /* @__PURE__ */ new Set();
      this.#allLoadersSet = new Set(this.#loadPromises);
      try {
        for (const loader of this.#allLoadersSet) {
          yield this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
        }
      } finally {
        this.#loadPromises.clear();
        this.#isRunningLoaders = false;
        this.#initialized = true;
      }
    });
  }
  loadParticlesOptions(container, options, ...sourceOptions) {
    const updaters = this.updaters.get(container);
    if (!updaters) {
      return;
    }
    updaters.forEach((updater) => updater.loadOptions?.(options, ...sourceOptions));
  }
  register(...loaders) {
    return __async(this, null, function* () {
      if (this.#initialized) {
        throw new Error("Register plugins can only be done before calling tsParticles.load()");
      }
      for (const loader of loaders) {
        if (this.#isRunningLoaders) {
          yield this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
        } else {
          this.#loadPromises.add(loader);
        }
      }
    });
  }
  #runLoader(loader, executed, allLoaders) {
    return __async(this, null, function* () {
      if (executed.has(loader)) return;
      executed.add(loader);
      allLoaders.add(loader);
      yield loader(this.#engine);
    });
  }
};

// node_modules/@tsparticles/engine/browser/Core/Engine.js
var fullPercent = "100%";
function getDataFromUrl(data) {
  return __async(this, null, function* () {
    const url = itemFromSingleOrMultiple(data.url, data.index);
    if (!url) {
      return data.fallback;
    }
    const response = yield fetch(url);
    if (response.ok) {
      return yield response.json();
    }
    getLogger().error(`${response.status.toString()} while retrieving config file`);
    return data.fallback;
  });
}
var getCanvasFromContainer = (domContainer) => {
  const documentSafe = safeDocument();
  let canvasEl;
  const isCanvas = domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag;
  if (isCanvas) {
    canvasEl = domContainer;
    canvasEl.dataset[generatedAttribute] ??= generatedFalse;
    if (canvasEl.dataset[generatedAttribute] === generatedTrue) {
      canvasEl.style.width ||= fullPercent;
      canvasEl.style.height ||= fullPercent;
      canvasEl.style.pointerEvents = "none";
      canvasEl.style.setProperty("pointer-events", "none");
    }
  } else {
    const existingCanvases = domContainer.getElementsByTagName(canvasTag), foundCanvas = existingCanvases.item(canvasFirstIndex);
    if (foundCanvas) {
      canvasEl = foundCanvas;
      canvasEl.dataset[generatedAttribute] = generatedFalse;
    } else {
      canvasEl = documentSafe.createElement(canvasTag);
      canvasEl.dataset[generatedAttribute] = generatedTrue;
      domContainer.appendChild(canvasEl);
    }
    canvasEl.style.width ||= fullPercent;
    canvasEl.style.height ||= fullPercent;
    canvasEl.style.pointerEvents = "none";
    canvasEl.style.setProperty("pointer-events", "none");
  }
  return canvasEl;
};
var getDomContainer = (id, source) => {
  const documentSafe = safeDocument();
  let domContainer = source ?? documentSafe.getElementById(id);
  if (domContainer) {
    return domContainer;
  }
  domContainer = documentSafe.createElement("canvas");
  domContainer.id = id;
  domContainer.dataset[generatedAttribute] = generatedTrue;
  documentSafe.body.append(domContainer);
  return domContainer;
};
var Engine = class {
  pluginManager = new PluginManager(this);
  #domArray = [];
  #eventDispatcher = new EventDispatcher();
  #initialized = false;
  get items() {
    return this.#domArray;
  }
  get version() {
    return "4.3.2";
  }
  addEventListener(type, listener) {
    this.#eventDispatcher.addEventListener(type, listener);
  }
  checkVersion(pluginVersion) {
    if (this.version === pluginVersion) {
      return;
    }
    throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${pluginVersion}`);
  }
  dispatchEvent(type, args) {
    this.#eventDispatcher.dispatchEvent(type, args);
  }
  init() {
    return __async(this, null, function* () {
      if (this.#initialized) {
        return;
      }
      yield this.pluginManager.init();
      this.#initialized = true;
    });
  }
  item(index) {
    const items = this.items, item = items[index];
    if (item?.destroyed) {
      items.splice(index, removeDeleteCount);
      return;
    }
    return item;
  }
  load(params) {
    return __async(this, null, function* () {
      yield this.init();
      let domSourceElement;
      if (typeof HTMLElement !== "undefined" && params.element instanceof HTMLElement) {
        domSourceElement = params.element;
      }
      const {
        Container
      } = yield import("./Container-3TBAQAA5.js"), id = params.id ?? domSourceElement?.id ?? `tsparticles${Math.floor(getRandom() * loadRandomFactor).toString()}`, {
        index,
        url
      } = params, options = url ? yield getDataFromUrl({
        fallback: params.options,
        url,
        index
      }) : params.options, currentOptions = itemFromSingleOrMultiple(options, index), {
        items
      } = this, oldIndex = items.findIndex((v) => v.id.description === id), newItem = new Container({
        dispatchCallback: (eventType, args) => {
          this.dispatchEvent(eventType, args);
        },
        id,
        onDestroy: (remove) => {
          if (!remove) {
            return;
          }
          const mainArr = this.items, idx = mainArr.indexOf(newItem);
          if (idx >= removeMinIndex) {
            mainArr.splice(idx, removeDeleteCount);
          }
        },
        pluginManager: this.pluginManager,
        sourceOptions: currentOptions
      });
      if (oldIndex >= loadMinIndex) {
        const old = this.item(oldIndex), deleteCount2 = old ? one : none;
        if (old && !old.destroyed) {
          old.destroy(false);
        }
        items.splice(oldIndex, deleteCount2, newItem);
      } else {
        items.push(newItem);
      }
      const sourceCanvas = typeof OffscreenCanvas !== "undefined" && params.element instanceof OffscreenCanvas ? params.element : getCanvasFromContainer(getDomContainer(id, domSourceElement));
      newItem.canvas.loadCanvas(sourceCanvas);
      yield newItem.start();
      return newItem;
    });
  }
  refresh(refresh = true) {
    return __async(this, null, function* () {
      if (!refresh) {
        return;
      }
      yield Promise.all(this.items.map((t) => t.refresh()));
    });
  }
  removeEventListener(type, listener) {
    this.#eventDispatcher.removeEventListener(type, listener);
  }
};

// node_modules/@tsparticles/engine/browser/initEngine.js
function initEngine() {
  return new Engine();
}

// node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js
var DestroyType;
(function(DestroyType2) {
  DestroyType2["none"] = "none";
  DestroyType2["max"] = "max";
  DestroyType2["min"] = "min";
})(DestroyType || (DestroyType = {}));

// node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js
var GradientType;
(function(GradientType2) {
  GradientType2["linear"] = "linear";
  GradientType2["radial"] = "radial";
  GradientType2["random"] = "random";
})(GradientType || (GradientType = {}));

// node_modules/@tsparticles/engine/browser/index.js
var tsParticles = initEngine();

export {
  RotateDirection,
  DestroyType,
  tsParticles
};
//# sourceMappingURL=chunk-QYZGOMQO.js.map
