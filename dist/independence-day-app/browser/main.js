import {
  Emitter
} from "./chunk-2GUDQIOI.js";
import {
  DivType,
  Interactivity,
  InteractorType,
  mouseLeaveEvent,
  mouseMoveEvent
} from "./chunk-UMMN6UGV.js";
import {
  Absorber
} from "./chunk-QHCDU3JY.js";
import {
  DestroyType,
  RotateDirection,
  tsParticles
} from "./chunk-QFFM24WX.js";
import {
  AlterType,
  AnimatableColor,
  AnimationMode,
  AnimationStatus,
  Circle,
  OptionsColor,
  OutMode,
  OutModeDirection,
  ParticleOutType,
  ParticlesBounce,
  PixelMode,
  RangedAnimationOptions,
  RangedAnimationValueWithRandom,
  Rectangle,
  StartValueType,
  ValueWithRandom,
  Vector,
  calculateBounds,
  circleBounce,
  circleBounceDataFromParticle,
  clamp,
  colorMix,
  deepExtend,
  defaultAlpha,
  defaultFps,
  defaultRatio,
  degToRad,
  double,
  doublePI,
  executeOnSingleOrMultiple,
  getDistance,
  getDistances,
  getHslAnimationFromHsl,
  getItemMapFromInitializer,
  getItemsFromInitializer,
  getLinkColor,
  getLinkRandomColor,
  getLogger,
  getRandom,
  getRangeMax,
  getRangeMin,
  getRangeValue,
  getStyleFromHsl,
  getStyleFromRgb,
  hMax,
  half,
  hslToRgb,
  hslaToRgba,
  identity,
  isArray,
  isInArray,
  isNull,
  isNumber,
  isObject,
  isPointInside,
  itemFromArray,
  itemFromSingleOrMultiple,
  lMax,
  loadOptionProperty,
  loadParticlesOptions,
  loadProperty,
  loadRangeProperty,
  millisecondsToSeconds,
  minDistance,
  minRadius,
  minVelocity,
  originPoint,
  parseAlpha,
  percentDenominator,
  quarter,
  randomInRangeValue,
  rangeColorToHsl,
  rgbToHsl,
  sMax,
  safeDocument,
  setRangeValue,
  squareExp,
  updateColor
} from "./chunk-J5BJOUTZ.js";
import {
  DomRendererFactory2,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-EUPDNNIO.js";
import {
  provideHttpClient
} from "./chunk-LRPQMU57.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgClass,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-VFFJBW32.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_INITIALIZER,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionScheduler,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NEVER,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  RendererFactory2,
  RuntimeError,
  Subject,
  concat,
  defer,
  delay,
  filter,
  from,
  fromEvent,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  merge,
  of,
  performanceMarkFeature,
  provideZoneChangeDetection,
  publish,
  setClassMetadata,
  switchMap,
  take,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵtext
} from "./chunk-PDRMFLEB.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-HO6W6PCP.js").then((c) => c.HomeComponent) },
  { path: "history", loadComponent: () => import("./chunk-WHQUK6EU.js").then((c) => c.HistoryComponent) },
  { path: "timeline", loadComponent: () => import("./chunk-NXM7MA4W.js").then((c) => c.TimelinePageComponent) },
  { path: "freedom-fighters", loadComponent: () => import("./chunk-PZG4WHDL.js").then((c) => c.FreedomFightersComponent) },
  { path: "stories", loadComponent: () => import("./chunk-NXTO5GJZ.js").then((c) => c.StoriesComponent) },
  { path: "gallery", loadComponent: () => import("./chunk-RPKMJI7W.js").then((c) => c.GalleryPageComponent) },
  { path: "events", loadComponent: () => import("./chunk-NTH44JET.js").then((c) => c.EventsComponent) },
  { path: "quiz", loadComponent: () => import("./chunk-HLSUY7RW.js").then((c) => c.QuizComponent) },
  { path: "about", loadComponent: () => import("./chunk-KPT76RNY.js").then((c) => c.AboutComponent) },
  { path: "contact", loadComponent: () => import("./chunk-FBOOVL5I.js").then((c) => c.ContactComponent) },
  { path: "**", redirectTo: "" }
];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
    this.loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-PIW32JGS.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  static {
    this.\u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AsyncAnimationRendererFactory,
      factory: _AsyncAnimationRendererFactory.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
function errorObservable(message) {
  return defer(() => throwError(new Error(message)));
}
var NgswCommChannel = class {
  constructor(serviceWorker) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      const controllerChangeEvents = fromEvent(serviceWorker, "controllerchange");
      const controllerChanges = controllerChangeEvents.pipe(map(() => serviceWorker.controller));
      const currentController = defer(() => of(serviceWorker.controller));
      const controllerWithChanges = concat(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe(filter((c) => !!c));
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration()));
      const rawEvents = fromEvent(serviceWorker, "message");
      const rawEventPayload = rawEvents.pipe(map((event) => event.data));
      const eventsUnconnected = rawEventPayload.pipe(filter((event) => event && event.type));
      const events = eventsUnconnected.pipe(publish());
      events.connect();
      this.events = events;
    }
  }
  postMessage(action, payload) {
    return this.worker.pipe(take(1), tap((sw) => {
      sw.postMessage(__spreadValues({
        action
      }, payload));
    })).toPromise().then(() => void 0);
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
      if (event.result !== void 0) {
        return event.result;
      }
      throw new Error(event.error);
    })).toPromise();
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    this.pushManager = null;
    this.subscriptionChanges = new Subject();
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = merge(workerDrivenSubscriptions, this.subscriptionChanges);
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).toPromise().then((sub) => {
      this.subscriptionChanges.next(sub);
      return sub;
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new Error("Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new Error("Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return this.subscription.pipe(take(1), switchMap(doUnsubscribe)).toPromise();
  }
  decodeBase64(input) {
    return atob(input);
  }
  static {
    this.\u0275fac = function SwPush_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SwPush,
      factory: _SwPush.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce);
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="alert is-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the application shell and other page resources,
   * such as lazy-loaded chunks, whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static {
    this.\u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SwUpdate,
      factory: _SwUpdate.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer(injector, script, options, platformId) {
  return () => {
    if (!(isPlatformBrowser(platformId) && "serviceWorker" in navigator && options.enabled !== false)) {
      return;
    }
    const ngZone = injector.get(NgZone);
    const appRef = injector.get(ApplicationRef);
    ngZone.runOutsideAngular(() => {
      const sw = navigator.serviceWorker;
      const onControllerChange = () => sw.controller?.postMessage({
        action: "INITIALIZE"
      });
      sw.addEventListener("controllerchange", onControllerChange);
      appRef.onDestroy(() => {
        sw.removeEventListener("controllerchange", onControllerChange);
      });
    });
    let readyToRegister$;
    if (typeof options.registrationStrategy === "function") {
      readyToRegister$ = options.registrationStrategy();
    } else {
      const [strategy, ...args] = (options.registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister$ = of(null);
          break;
        case "registerWithDelay":
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          const whenStable$ = from(injector.get(ApplicationRef).whenStable());
          readyToRegister$ = !args[0] ? whenStable$ : merge(whenStable$, delayWithTimeout(+args[0]));
          break;
        default:
          throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    ngZone.runOutsideAngular(() => readyToRegister$.pipe(take(1)).subscribe(() => navigator.serviceWorker.register(script, {
      scope: options.scope
    }).catch((err) => console.error("Service worker registration failed with:", err))));
  };
}
function delayWithTimeout(timeout) {
  return of(null).pipe(delay(timeout));
}
function ngswCommChannelFactory(opts, platformId) {
  return new NgswCommChannel(isPlatformBrowser(platformId) && opts.enabled !== false ? navigator.serviceWorker : void 0);
}
var SwRegistrationOptions = class {
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, PLATFORM_ID]
  }, {
    provide: APP_INITIALIZER,
    useFactory: ngswAppInitializer,
    deps: [Injector, SCRIPT, SwRegistrationOptions, PLATFORM_ID],
    multi: true
  }]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static {
    this.\u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceWorkerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ServiceWorkerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [SwPush, SwUpdate]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
  ]
};

// src/app/core/services/audio.service.ts
var AudioService = class _AudioService {
  audio = new Audio();
  audioCtx;
  isPlayingSubject = new BehaviorSubject(false);
  isPlaying$ = this.isPlayingSubject.asObservable();
  volumeSubject = new BehaviorSubject(0.5);
  volume$ = this.volumeSubject.asObservable();
  isMutedSubject = new BehaviorSubject(false);
  isMuted$ = this.isMutedSubject.asObservable();
  isBrowser;
  constructor(platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
      this.audio.src = "assets/audio/ae_watan.mp4";
      this.audio.loop = true;
      const savedVolume = localStorage.getItem("audioVolume");
      const savedMute = localStorage.getItem("audioMuted");
      const savedPlaying = localStorage.getItem("audioPlaying");
      if (savedVolume !== null) {
        this.volumeSubject.next(parseFloat(savedVolume));
      }
      if (savedMute !== null) {
        this.isMutedSubject.next(savedMute === "true");
      }
      this.audio.volume = this.volumeSubject.value;
      this.audio.muted = this.isMutedSubject.value;
      if (savedPlaying !== "false" && !this.audio.muted) {
        this.audio.play().then(() => {
          this.isPlayingSubject.next(true);
        }).catch(() => {
          this.isPlayingSubject.next(false);
        });
      }
    }
  }
  toggleAudio() {
    if (!this.isBrowser)
      return;
    if (this.audio.paused) {
      this.audio.play().then(() => {
        this.isPlayingSubject.next(true);
        localStorage.setItem("audioPlaying", "true");
        if (this.isMutedSubject.value)
          this.toggleMute();
      }).catch((err) => console.error("Error playing audio:", err));
    } else {
      this.audio.pause();
      this.isPlayingSubject.next(false);
      localStorage.setItem("audioPlaying", "false");
    }
  }
  playAudio() {
    if (!this.isBrowser)
      return;
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    if (this.audio.paused && !this.isMutedSubject.value && localStorage.getItem("audioPlaying") !== "false") {
      this.audio.play().then(() => {
        this.isPlayingSubject.next(true);
        localStorage.setItem("audioPlaying", "true");
      }).catch((err) => console.error("Error playing audio:", err));
    }
  }
  setVolume(volume) {
    if (!this.isBrowser)
      return;
    this.audio.volume = volume;
    this.volumeSubject.next(volume);
    localStorage.setItem("audioVolume", volume.toString());
  }
  toggleMute() {
    if (!this.isBrowser)
      return;
    const newMutedState = !this.isMutedSubject.value;
    this.audio.muted = newMutedState;
    this.isMutedSubject.next(newMutedState);
    localStorage.setItem("audioMuted", newMutedState.toString());
    if (newMutedState) {
      this.audio.pause();
      this.isPlayingSubject.next(false);
    } else if (localStorage.getItem("audioPlaying") !== "false") {
      this.playAudio();
    }
  }
  playClickSound() {
    if (!this.isBrowser || !this.audioCtx || this.isMutedSubject.value)
      return;
    if (this.audioCtx.state === "suspended")
      this.audioCtx.resume();
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(this.volumeSubject.value * 0.3, this.audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.1);
    osc.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.1);
  }
  playHoverSound() {
    if (!this.isBrowser || !this.audioCtx || this.isMutedSubject.value)
      return;
    if (this.audioCtx.state === "suspended")
      this.audioCtx.resume();
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.audioCtx.currentTime + 0.05);
    gainNode.gain.setValueAtTime(this.volumeSubject.value * 0.1, this.audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.05);
    osc.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }
  static \u0275fac = function AudioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AudioService)(\u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AudioService, factory: _AudioService.\u0275fac, providedIn: "root" });
};

// src/app/components/navbar/navbar.component.ts
var _c0 = (a0) => ({ "scrolled": a0 });
var _c1 = (a0) => ({ "open": a0 });
var _c2 = () => ({ exact: true });
var NavbarComponent = class _NavbarComponent {
  audioService;
  isScrolled = false;
  isMenuOpen = false;
  constructor(audioService) {
    this.audioService = audioService;
  }
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  onNavClick() {
    this.toggleMenu();
    this.audioService.playClickSound();
  }
  toggleMusic() {
    this.audioService.toggleAudio();
  }
  onVolumeChange(event) {
    const input = event.target;
    this.audioService.setVolume(parseFloat(input.value));
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(AudioService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 18, consts: [[1, "navbar", 3, "ngClass"], [1, "nav-container"], ["routerLink", "/", 1, "logo", "text-gradient", "heading-primary"], [1, "fa-solid", "fa-dharmachakra", "fa-spin", 2, "--fa-animation-duration", "10s"], [1, "nav-controls", 2, "display", "flex", "gap", "1rem", "align-items", "center"], [1, "audio-controls", 2, "display", "flex", "align-items", "center", "gap", "0.5rem"], ["aria-label", "Play/Pause Music", 1, "icon-btn", 3, "click"], [1, "fa-solid", 3, "ngClass"], ["aria-label", "Mute/Unmute", 1, "icon-btn", 3, "click"], ["type", "range", "min", "0", "max", "1", "step", "0.01", "aria-label", "Volume Control", 1, "volume-slider", 3, "input", "value"], [1, "menu-toggle", 3, "click"], [1, "nav-links", 3, "ngClass"], ["routerLink", "/", "routerLinkActive", "active", 3, "click", "mouseenter", "routerLinkActiveOptions"], ["routerLink", "/history", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/timeline", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/freedom-fighters", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/stories", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/gallery", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/events", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/quiz", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/about", "routerLinkActive", "active", 3, "click", "mouseenter"], ["routerLink", "/contact", "routerLinkActive", "active", 3, "click", "mouseenter"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, " Independence Day ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "button", 6);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_7_listener() {
        return ctx.toggleMusic();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_10_listener() {
        return ctx.audioService.toggleMute();
      });
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275listener("input", function NavbarComponent_Template_input_input_13_listener($event) {
        return ctx.onVolumeChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275listener("click", function NavbarComponent_Template_div_click_15_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(16, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "ul", 11)(18, "li")(19, "a", 12);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_19_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_19_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(20, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 13);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_22_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_22_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(23, "History");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li")(25, "a", 14);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_25_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_25_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(26, "Timeline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 15);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_28_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_28_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(29, "Freedom Fighters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 16);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_31_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_31_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(32, "Stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 17);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_34_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_34_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(35, "Gallery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li")(37, "a", 18);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_37_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_37_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(38, "Events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 19);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_40_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_40_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(41, "Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 20);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_43_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_43_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(44, "About");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 21);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_46_listener() {
        return ctx.onNavClick();
      })("mouseenter", function NavbarComponent_Template_a_mouseenter_46_listener() {
        return ctx.audioService.playHoverSound();
      });
      \u0275\u0275text(47, "Contact");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c0, ctx.isScrolled));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pipeBind1(9, 7, ctx.audioService.isPlaying$) ? "fa-pause" : "fa-play");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pipeBind1(12, 9, ctx.audioService.isMuted$) ? "fa-volume-xmark" : "fa-volume-high");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(14, 11, ctx.audioService.volume$));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.isMenuOpen ? "fa-xmark" : "fa-bars");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c1, ctx.isMenuOpen));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(17, _c2));
    }
  }, dependencies: [RouterModule, RouterLink, RouterLinkActive, CommonModule, NgClass, AsyncPipe], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  padding: 20px 0;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(19, 136, 8, 0.1);\n}\n.navbar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 153, 51, 0.08),\n      rgba(255, 255, 255, 0.08),\n      rgba(19, 136, 8, 0.08));\n  pointer-events: none;\n  z-index: -1;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  background: rgba(255, 255, 255, 0.5);\n  border-bottom: 1px solid rgba(19, 136, 8, 0.2);\n}\n.navbar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-navy);\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--color-navy);\n  font-weight: 600;\n  font-size: 1rem;\n  transition: color 0.2s ease, transform 0.2s ease;\n  position: relative;\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: -4px;\n  left: 0;\n  background:\n    linear-gradient(\n      to right,\n      var(--color-saffron),\n      var(--color-green));\n  transition: width 0.3s ease;\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, \n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--color-saffron);\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after, \n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible::after, \n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(19, 136, 8, 0.22);\n}\n.navbar[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--color-navy);\n}\n.navbar[_ngcontent-%COMP%]   .audio-controls[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.88);\n  border: 1px solid rgba(19, 136, 8, 0.2);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-navy);\n  transition: all 0.2s ease;\n}\n.navbar[_ngcontent-%COMP%]   .audio-controls[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover, \n.navbar[_ngcontent-%COMP%]   .audio-controls[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:focus-visible {\n  background: #ffffff;\n  transform: scale(1.05);\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(19, 136, 8, 0.22);\n}\n.navbar[_ngcontent-%COMP%]   .audio-controls[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 80px;\n  height: 4px;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  outline: none;\n  transition: opacity 0.2s;\n}\n.navbar[_ngcontent-%COMP%]   .audio-controls[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--color-navy);\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .audio-controls[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--color-navy);\n  cursor: pointer;\n  border: none;\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background: var(--glass-bg);\n    backdrop-filter: blur(15px);\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n    padding: 20px 0;\n    transform: translateY(-150%);\n    opacity: 0;\n    transition: all 0.3s ease;\n    z-index: -1;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-links.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 12 });
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 0, consts: [[1, "footer"], [1, "footer-content"], [1, "footer-section", "brand"], [1, "text-gradient"], [1, "fa-solid", "fa-dharmachakra"], [1, "social-links"], ["href", "#", "aria-label", "Facebook"], [1, "fa-brands", "fa-facebook-f"], ["href", "#", "aria-label", "Twitter"], [1, "fa-brands", "fa-twitter"], ["href", "#", "aria-label", "Instagram"], [1, "fa-brands", "fa-instagram"], ["href", "#", "aria-label", "YouTube"], [1, "fa-brands", "fa-youtube"], [1, "footer-section", "links"], ["routerLink", "/about"], ["routerLink", "/history"], ["routerLink", "/timeline"], ["routerLink", "/freedom-fighters"], ["routerLink", "/gallery"], ["routerLink", "/events"], ["routerLink", "/quiz"], ["routerLink", "/contact"], ["href", "#"], [1, "footer-bottom"], [1, "fa-solid", "fa-heart", 2, "color", "#FF9933"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " Independence Day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Celebrating the spirit of freedom, unity, and pride of India. A tribute to the heroes of our nation.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 12);
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "h4");
      \u0275\u0275text(19, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "ul")(21, "li")(22, "a", 15);
      \u0275\u0275text(23, "About");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "li")(25, "a", 16);
      \u0275\u0275text(26, "History");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 17);
      \u0275\u0275text(29, "Timeline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 18);
      \u0275\u0275text(32, "Freedom Fighters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 19);
      \u0275\u0275text(35, "Gallery");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 14)(37, "h4");
      \u0275\u0275text(38, "More");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul")(40, "li")(41, "a", 20);
      \u0275\u0275text(42, "Events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 21);
      \u0275\u0275text(45, "Take a Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 22);
      \u0275\u0275text(48, "Contact Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 23);
      \u0275\u0275text(51, "Privacy Policy");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "div", 24)(53, "p");
      \u0275\u0275text(54, "\xA9 2026 Independence Day Celebration. Built with ");
      \u0275\u0275element(55, "i", 25);
      \u0275\u0275text(56, " by Rishabh Singh.");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterModule, RouterLink], styles: ['\n\n.footer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 153, 51, 0.95),\n      rgba(255, 255, 255, 0.98) 33.33%,\n      rgba(19, 136, 8, 0.95) 66.66%);\n  color: var(--text-dark);\n  padding: 60px 20px 20px;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n}\n.footer[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at top center,\n      rgba(255, 255, 255, 0.2),\n      transparent 40%);\n  pointer-events: none;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 40px;\n  margin-bottom: 40px;\n  position: relative;\n  z-index: 1;\n}\n.footer[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 20px;\n}\n.footer[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-navy);\n}\n.footer[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: #333;\n  margin-bottom: 20px;\n}\n.footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-navy);\n  background: rgba(255, 255, 255, 0.7);\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  background: var(--color-saffron);\n  color: var(--color-white);\n  transform: translateY(-3px);\n  outline: none;\n  box-shadow: 0 0 0 4px rgba(19, 136, 8, 0.22);\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 20px;\n  color: var(--color-navy);\n  position: relative;\n  display: inline-block;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  width: 30px;\n  height: 2px;\n  background: var(--color-green);\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111827;\n  text-decoration: none;\n  transition: color 0.2s ease, transform 0.2s ease;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  color: var(--color-saffron);\n  transform: translateX(2px);\n  outline: none;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 20px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  color: #030358;\n  font-size: 0.9rem;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 11 });
})();

// node_modules/@tsparticles/angular/fesm2022/tsparticles-angular.mjs
var initialized = false;
var initPromise;
var initCallback;
var NgParticlesService = class _NgParticlesService {
  get loaded() {
    return initialized;
  }
  assertInitialized() {
    if (!initialized) {
      throw new Error("NgParticlesService.init(...) must be called once before rendering ngx-particles components.");
    }
  }
  init(particlesInit) {
    return __async(this, null, function* () {
      if (initialized) {
        return;
      }
      if (initPromise) {
        if (initCallback !== particlesInit) {
          throw new Error("NgParticlesService init callback must be stable across the app lifecycle.");
        }
        yield initPromise;
        return;
      }
      initCallback = particlesInit;
      initPromise = (() => __async(this, null, function* () {
        if (particlesInit) {
          yield particlesInit(tsParticles);
        }
        yield tsParticles.init();
        initialized = true;
      }))().catch((error) => {
        initPromise = void 0;
        initCallback = void 0;
        initialized = false;
        throw error;
      });
      yield initPromise;
    });
  }
  waitForInitialization() {
    return __async(this, null, function* () {
      yield initPromise ?? Promise.resolve();
    });
  }
  static \u0275fac = function NgParticlesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgParticlesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NgParticlesService,
    factory: _NgParticlesService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgParticlesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgxParticlesComponent = class _NgxParticlesComponent {
  platformId;
  options;
  url;
  id = "tsparticles";
  theme;
  particlesLoaded = new EventEmitter();
  #container;
  #loadingPromise;
  #particlesService;
  constructor(platformId, particlesService) {
    this.platformId = platformId;
    this.#particlesService = particlesService;
  }
  ngAfterViewInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.#loadingPromise = this.#loadParticles();
  }
  ngOnChanges(changes) {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    if (!this.#container) {
      return;
    }
    if (changes["id"] || changes["options"] || changes["url"]) {
      void this.#loadParticles();
    }
    if (changes["theme"]) {
      this.#container.loadTheme?.(changes["theme"].currentValue);
    }
  }
  ngOnDestroy() {
    this.#container?.destroy();
    this.#loadingPromise = void 0;
  }
  #loadParticles() {
    return __async(this, null, function* () {
      yield this.#particlesService.waitForInitialization();
      this.#particlesService.assertInitialized();
      this.#container?.destroy();
      const container = yield tsParticles.load({
        id: this.id,
        options: this.options,
        url: this.url
      });
      this.#container = container;
      if (container && this.theme) {
        container.loadTheme?.(this.theme);
      }
      this.particlesLoaded.emit(container);
    });
  }
  static \u0275fac = function NgxParticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxParticlesComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(NgParticlesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NgxParticlesComponent,
    selectors: [["ngx-particles"]],
    inputs: {
      options: "options",
      url: "url",
      id: "id",
      theme: "theme"
    },
    outputs: {
      particlesLoaded: "particlesLoaded"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "id"]],
    template: function NgxParticlesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("id", ctx.id);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxParticlesComponent, [{
    type: Component,
    args: [{
      selector: "ngx-particles",
      standalone: false,
      template: '<div [id]="id"></div>'
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgParticlesService
  }], {
    options: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    particlesLoaded: [{
      type: Output
    }]
  });
})();
var NgxParticlesModule = class _NgxParticlesModule {
  static \u0275fac = function NgxParticlesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxParticlesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxParticlesModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [NgParticlesService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxParticlesModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxParticlesComponent],
      exports: [NgxParticlesComponent],
      providers: [NgParticlesService]
    }]
  }], null, null);
})();

// node_modules/@tsparticles/plugin-interactivity/browser/InteractivityPlugin.js
var InteractivityPlugin = class {
  id = "interactivity";
  #pluginManager;
  constructor(pluginManager) {
    this.#pluginManager = pluginManager;
  }
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        InteractivityPluginInstance
      } = yield import("./chunk-AMKGXW5S.js");
      return new InteractivityPluginInstance(this.#pluginManager, container);
    });
  }
  loadOptions(container, options, source) {
    if (!this.needsPlugin()) {
      return;
    }
    let interactivityOptions = options.interactivity;
    if (!interactivityOptions?.load) {
      options.interactivity = interactivityOptions = new Interactivity(this.#pluginManager, container);
    }
    interactivityOptions.load(source?.interactivity);
    const interactors = this.#pluginManager.interactors?.get(container);
    if (!interactors) {
      return;
    }
    for (const interactor of interactors) {
      if (interactor.loadOptions) {
        interactor.loadOptions(options, source);
      }
    }
  }
  loadParticlesOptions(container, options, source) {
    if (source?.interactivity) {
      options.interactivity = deepExtend({}, source.interactivity);
    }
    const interactors = this.#pluginManager.interactors?.get(container);
    if (!interactors) {
      return;
    }
    for (const interactor of interactors) {
      interactor.loadParticlesOptions?.(options, source);
    }
  }
  needsPlugin() {
    return true;
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/BaseClasses/ExternalInteractorBase.js
var ExternalInteractorBase = class {
  type = InteractorType.external;
  container;
  constructor(container) {
    this.container = container;
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/BaseClasses/ParticlesInteractorBase.js
var ParticlesInteractorBase = class {
  type = InteractorType.particles;
  container;
  constructor(container) {
    this.container = container;
  }
};

// node_modules/@tsparticles/plugin-interactivity/browser/utils.js
function findItemFromSingleOrMultiple(obj, callback) {
  if (isArray(obj)) {
    return obj.find((t, index) => callback(t, index));
  }
  const defaultIndex = 0;
  return callback(obj, defaultIndex) ? obj : void 0;
}
function checkSelector(element, selectors) {
  const res = executeOnSingleOrMultiple(selectors, (selector) => {
    return element.matches(selector);
  });
  return isArray(res) ? res.some((t) => t) : res;
}
function isDivModeEnabled(mode, divs) {
  return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray(mode, t.mode));
}
function divModeExecute(mode, divs, callback) {
  executeOnSingleOrMultiple(divs, (div) => {
    const divMode2 = div.mode, divEnabled = div.enable;
    if (divEnabled && isInArray(mode, divMode2)) {
      singleDivModeExecute(div, callback);
    }
  });
}
function singleDivModeExecute(div, callback) {
  const selectors = div.selectors;
  executeOnSingleOrMultiple(selectors, (selector) => {
    callback(selector, div);
  });
}
function divMode(divs, element) {
  if (!element || !divs) {
    return;
  }
  return findItemFromSingleOrMultiple(divs, (div) => {
    return checkSelector(element, div.selectors);
  });
}

// node_modules/@tsparticles/plugin-interactivity/browser/index.js
function loadInteractivityPlugin(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      const interactivityEngine = e, interactivityPluginManager = interactivityEngine.pluginManager;
      interactivityPluginManager.addPlugin(new InteractivityPlugin(interactivityPluginManager));
      interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
      interactivityPluginManager.interactors ??= /* @__PURE__ */ new Map();
      interactivityPluginManager.addInteractor = (name, interactorInitializer) => {
        interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
        interactivityPluginManager.initializers.interactors.set(name, interactorInitializer);
      };
      interactivityPluginManager.getInteractors = (container, force = false) => __async(this, null, function* () {
        interactivityPluginManager.interactors ??= /* @__PURE__ */ new Map();
        interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
        return getItemsFromInitializer(container, interactivityPluginManager.interactors, interactivityPluginManager.initializers.interactors, force);
      });
      interactivityPluginManager.setOnClickHandler = (callback) => {
        const {
          items
        } = interactivityEngine;
        if (!items.length) {
          throw new Error("Click handlers can only be set after calling tsParticles.load()");
        }
        items.forEach((item) => {
          const interactivityContainer = item;
          interactivityContainer.addClickHandler?.(callback);
        });
      };
    });
  });
}
function ensureInteractivityPluginLoaded(e) {
  if (!e.pluginManager.addInteractor) {
    throw new Error("tsParticles Interactivity Plugin is not loaded");
  }
}

// node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersInteractor.js
var absorbersMode = "absorbers";
var AbsorbersInteractor = class extends ExternalInteractorBase {
  handleClickMode;
  maxDistance;
  #dragging = false;
  #draggingAbsorber;
  #instancesManager;
  constructor(container, instancesManager) {
    super(container);
    this.maxDistance = 0;
    this.#instancesManager = instancesManager;
    this.#instancesManager.initContainer(container);
    this.handleClickMode = (mode, interactivityData) => {
      const container2 = this.container, options = container2.actualOptions, absorbers = options.interactivity.modes.absorbers;
      if (!absorbers || mode !== absorbersMode) {
        return;
      }
      const {
        clickPosition
      } = interactivityData.mouse;
      if (clickPosition) {
        const existingAbsorber = instancesManager.getArray(this.container).some((t) => getDistance(t.position, clickPosition) < t.size);
        if (existingAbsorber) {
          return;
        }
      }
      const absorbersModeOptions = itemFromArray(absorbers) ?? new Absorber();
      void this.#instancesManager.addAbsorber(container2, absorbersModeOptions, clickPosition);
    };
  }
  clear() {
  }
  init() {
  }
  interact(interactivityData, delta) {
    for (const particle of this.container.particles.filter((p) => this.isEnabled(interactivityData, p))) {
      for (const absorber of this.#instancesManager.getArray(this.container)) {
        if (absorber.options.draggable) {
          const mouse = interactivityData.mouse;
          if (mouse.clicking && mouse.downPosition) {
            const mouseDist = getDistance(absorber.position, mouse.downPosition);
            if (mouseDist <= absorber.size) {
              this.#dragging = true;
              this.#draggingAbsorber = absorber;
            }
          } else {
            this.#dragging = false;
            this.#draggingAbsorber = void 0;
          }
          if (this.#dragging && this.#draggingAbsorber == absorber && mouse.position) {
            absorber.position.x = mouse.position.x;
            absorber.position.y = mouse.position.y;
          }
        }
        absorber.attract(particle, delta);
        if (particle.destroyed) {
          break;
        }
      }
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity).events;
    if (!mouse.clickPosition || !events.onClick.enable) {
      return false;
    }
    return isInArray(absorbersMode, events.onClick.mode);
  }
  loadModeOptions(options, ...sources) {
    options.absorbers ??= [];
    for (const source of sources) {
      if (!source) {
        continue;
      }
      if (isArray(source.absorbers)) {
        for (const absorber of source.absorbers) {
          const tmp = new Absorber();
          tmp.load(absorber);
          options.absorbers.push(tmp);
        }
      } else {
        const tmp = new Absorber();
        tmp.load(source.absorbers);
        options.absorbers.push(tmp);
      }
    }
  }
  reset() {
  }
};

// node_modules/@tsparticles/plugin-absorbers/browser/getAbsorbersInstancesManager.js
var instancesManagers = /* @__PURE__ */ new WeakMap();
function getAbsorbersInstancesManager(e) {
  const pluginManager = e.pluginManager;
  let manager = instancesManagers.get(pluginManager);
  if (!manager) {
    manager = import("./chunk-OSOPLBE4.js").then(({
      AbsorbersInstancesManager
    }) => new AbsorbersInstancesManager(pluginManager)).catch((error) => {
      instancesManagers.delete(pluginManager);
      throw error;
    });
    instancesManagers.set(pluginManager, manager);
  }
  return manager;
}

// node_modules/@tsparticles/plugin-absorbers/browser/interaction.js
function loadAbsorbersInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => __async(this, null, function* () {
      const pluginManager = e.pluginManager, instancesManager = yield getAbsorbersInstancesManager(e);
      ensureInteractivityPluginLoaded(e);
      pluginManager.addInteractor?.("externalAbsorbers", (container) => {
        return Promise.resolve(new AbsorbersInteractor(container, instancesManager));
      });
    }));
  });
}

// node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersPlugin.js
var AbsorbersPlugin = class {
  id = "absorbers";
  #instancesManager;
  constructor(instancesManager) {
    this.#instancesManager = instancesManager;
  }
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        AbsorbersPluginInstance
      } = yield import("./chunk-27UMHXEU.js");
      return new AbsorbersPluginInstance(container, this.#instancesManager);
    });
  }
  loadOptions(_container, options, source) {
    if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
      return;
    }
    if (source?.absorbers) {
      options.absorbers = executeOnSingleOrMultiple(source.absorbers, (absorber) => {
        const tmp = new Absorber();
        tmp.load(absorber);
        return tmp;
      });
    }
  }
  needsPlugin(options) {
    if (!options) {
      return false;
    }
    const absorbers = options.absorbers;
    if (isArray(absorbers)) {
      return !!absorbers.length;
    } else if (absorbers) {
      return true;
    }
    return false;
  }
};

// node_modules/@tsparticles/plugin-absorbers/browser/plugin.js
function loadAbsorbersPluginSimple(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => __async(this, null, function* () {
      const pluginManager = e.pluginManager, instancesManager = yield getAbsorbersInstancesManager(e);
      pluginManager.addPlugin(new AbsorbersPlugin(instancesManager));
    }));
  });
}

// node_modules/@tsparticles/plugin-absorbers/browser/index.js
function loadAbsorbersPlugin(engine) {
  return __async(this, null, function* () {
    yield loadAbsorbersPluginSimple(engine);
    yield loadAbsorbersInteraction(engine);
  });
}

// node_modules/@tsparticles/updater-destroy/browser/Options/Classes/DestroyBounds.js
var DestroyBounds = class {
  bottom;
  left;
  right;
  top;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadRangeProperty(this, "bottom", data.bottom);
    loadRangeProperty(this, "left", data.left);
    loadRangeProperty(this, "right", data.right);
    loadRangeProperty(this, "top", data.top);
  }
};

// node_modules/@tsparticles/updater-destroy/browser/Enums/DestroyMode.js
var DestroyMode;
(function(DestroyMode2) {
  DestroyMode2["explode"] = "explode";
  DestroyMode2["none"] = "none";
  DestroyMode2["split"] = "split";
})(DestroyMode || (DestroyMode = {}));

// node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Explode.js
var Explode = class {
  maxSizeFactor = 3;
  speed = 2;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "maxSizeFactor", data.maxSizeFactor);
    loadProperty(this, "speed", data.speed);
  }
};

// node_modules/@tsparticles/updater-destroy/browser/Options/Classes/SplitFactor.js
var SplitFactor = class extends ValueWithRandom {
  value = 3;
};

// node_modules/@tsparticles/updater-destroy/browser/Options/Classes/SplitRate.js
var SplitRate = class extends ValueWithRandom {
  value = {
    min: 4,
    max: 9
  };
};

// node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Split.js
var Split = class {
  count = 1;
  factor = new SplitFactor();
  fillColor;
  fillColorOffset;
  particles;
  rate = new SplitRate();
  sizeOffset = true;
  strokeColor;
  strokeColorOffset;
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.fillColor !== void 0) {
      this.fillColor = OptionsColor.create(this.fillColor, data.fillColor);
    }
    if (data.strokeColor !== void 0) {
      this.strokeColor = OptionsColor.create(this.strokeColor, data.strokeColor);
    }
    loadProperty(this, "count", data.count);
    this.factor.load(data.factor);
    this.rate.load(data.rate);
    this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
      return deepExtend({}, particles);
    });
    loadProperty(this, "sizeOffset", data.sizeOffset);
    if (data.fillColorOffset) {
      this.fillColorOffset = this.fillColorOffset ?? {};
      if (data.fillColorOffset.h !== void 0) {
        this.fillColorOffset.h = data.fillColorOffset.h;
      }
      if (data.fillColorOffset.s !== void 0) {
        this.fillColorOffset.s = data.fillColorOffset.s;
      }
      if (data.fillColorOffset.l !== void 0) {
        this.fillColorOffset.l = data.fillColorOffset.l;
      }
    }
    if (data.strokeColorOffset) {
      this.strokeColorOffset = this.strokeColorOffset ?? {};
      if (data.strokeColorOffset.h !== void 0) {
        this.strokeColorOffset.h = data.strokeColorOffset.h;
      }
      if (data.strokeColorOffset.s !== void 0) {
        this.strokeColorOffset.s = data.strokeColorOffset.s;
      }
      if (data.strokeColorOffset.l !== void 0) {
        this.strokeColorOffset.l = data.strokeColorOffset.l;
      }
    }
  }
};

// node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Destroy.js
var Destroy = class {
  bounds = new DestroyBounds();
  explode = new Explode();
  mode = DestroyMode.none;
  split = new Split();
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.mode) {
      this.mode = data.mode;
    }
    if (data.bounds) {
      this.bounds.load(data.bounds);
    }
    this.explode.load(data.explode);
    this.split.load(data.split);
  }
};

// node_modules/@tsparticles/updater-destroy/browser/Utils.js
var defaultOffset = 0;
var minDestroySize = 0.5;
var defaultSplitCount = 0;
var increment = 1;
var unbreakableTime = 500;
var minSplitCount = 0;
var minHue = 0;
var hueRange = 360;
var minSaturation = 0;
var maxSaturation = 100;
var minLightness = 0;
var maxLightness = 100;
function createParentColor(parentColor) {
  return AnimatableColor.create(void 0, {
    value: {
      hsl: parentColor
    }
  });
}
function createOffsetColor(parentColor, offset) {
  const offsetH = getRangeValue(offset.h ?? defaultOffset), offsetS = getRangeValue(offset.s ?? defaultOffset), offsetL = getRangeValue(offset.l ?? defaultOffset), h = (parentColor.h + offsetH) % hueRange, s = Math.max(minSaturation, Math.min(maxSaturation, parentColor.s + offsetS)), l = Math.max(minLightness, Math.min(maxLightness, parentColor.l + offsetL));
  return AnimatableColor.create(void 0, {
    value: {
      hsl: {
        h: h < minHue ? h + hueRange : h,
        s,
        l
      }
    }
  });
}
function resolveSplitColor(offset, splitColor, splitParticlesColor, parentColor) {
  if (offset && parentColor) {
    return createOffsetColor(parentColor, offset);
  }
  if (splitColor) {
    return AnimatableColor.create(void 0, splitColor);
  }
  if (splitParticlesColor) {
    return AnimatableColor.create(void 0, splitParticlesColor);
  }
  return parentColor ? createParentColor(parentColor) : void 0;
}
function addSplitParticle(pluginManager, container, parent, splitParticlesOptions) {
  const destroyOptions = parent.options.destroy;
  if (!destroyOptions) {
    return;
  }
  const splitOptions = destroyOptions.split, splitParticleOptions = loadParticlesOptions(pluginManager, container, parent.options), splitFillColor = itemFromSingleOrMultiple(splitOptions.fillColor), splitStrokeColor = itemFromSingleOrMultiple(splitOptions.strokeColor), parentFillColor = parent.getFillColor(), parentStrokeColor = parent.getStrokeColor();
  splitParticleOptions.move.load({
    center: {
      x: parent.position.x,
      y: parent.position.y,
      mode: PixelMode.precise
    }
  });
  const factor = identity / getRangeValue(splitOptions.factor.value), sizeOptions = splitParticleOptions["size"];
  if (sizeOptions) {
    if (isNumber(sizeOptions.value)) {
      sizeOptions.value *= factor;
    } else {
      sizeOptions.value.min *= factor;
      sizeOptions.value.max *= factor;
    }
  }
  splitParticleOptions.load(splitParticlesOptions);
  const splitParticlePaintOptions = itemFromSingleOrMultiple(splitParticleOptions.paint), splitParticleFillOptions = splitParticlePaintOptions?.fill, splitParticleStrokeOptions = splitParticlePaintOptions?.stroke, fillColor = resolveSplitColor(splitOptions.fillColorOffset, splitFillColor, splitParticleFillOptions?.color, parentFillColor), strokeColor = resolveSplitColor(splitOptions.strokeColorOffset, splitStrokeColor, splitParticleStrokeOptions?.color, parentStrokeColor);
  if (fillColor && splitParticleFillOptions) {
    splitParticleFillOptions.color = fillColor;
  }
  if (strokeColor && splitParticleStrokeOptions) {
    splitParticleStrokeOptions.color = strokeColor;
  }
  const offset = splitOptions.sizeOffset ? setRangeValue(-parent.size.value, parent.size.value) : defaultOffset, position = {
    x: parent.position.x + randomInRangeValue(offset),
    y: parent.position.y + randomInRangeValue(offset)
  };
  return container.particles.addParticle(position, splitParticleOptions, parent.group, (particle) => {
    if (particle.size.value < minDestroySize) {
      return false;
    }
    particle.velocity.length = randomInRangeValue(setRangeValue(parent.velocity.length, particle.velocity.length));
    particle.splitCount = (parent.splitCount ?? defaultSplitCount) + increment;
    particle.unbreakable = true;
    particle.unbreakableUntil = performance.now() + unbreakableTime;
    return true;
  });
}
function split(pluginManager, container, particle) {
  const destroyOptions = particle.options.destroy;
  if (!destroyOptions) {
    return;
  }
  const splitOptions = destroyOptions.split;
  if (splitOptions.count >= minSplitCount) {
    if (particle.splitCount === void 0 || particle.splitCount > splitOptions.count) {
      return;
    }
    particle.splitCount++;
  }
  const rate = getRangeValue(splitOptions.rate.value), particlesSplitOptions = itemFromSingleOrMultiple(splitOptions.particles);
  for (let i = 0; i < rate; i++) {
    addSplitParticle(pluginManager, container, particle, particlesSplitOptions);
  }
}

// node_modules/@tsparticles/updater-destroy/browser/DestroyUpdater.js
var defaultDeltaFactor = 1;
var fpsFactor = 60;
var minExplodeSpeed = 0.01;
var maxExplodeProgress = 1;
var DestroyUpdater = class {
  #container;
  #pluginManager;
  constructor(pluginManager, container) {
    this.#container = container;
    this.#pluginManager = pluginManager;
  }
  init(particle) {
    const container = this.#container, particlesOptions = particle.options, destroyOptions = particlesOptions.destroy;
    if (!destroyOptions) {
      return;
    }
    particle.exploding = void 0;
    particle.splitCount = 0;
    const destroyBoundsOptions = destroyOptions.bounds;
    particle.destroyBounds ??= {};
    const {
      bottom,
      left,
      right,
      top
    } = destroyBoundsOptions, {
      destroyBounds
    } = particle, canvasSize = container.canvas.size;
    if (bottom) {
      destroyBounds.bottom = getRangeValue(bottom) * canvasSize.height / percentDenominator;
    }
    if (left) {
      destroyBounds.left = getRangeValue(left) * canvasSize.width / percentDenominator;
    }
    if (right) {
      destroyBounds.right = getRangeValue(right) * canvasSize.width / percentDenominator;
    }
    if (top) {
      destroyBounds.top = getRangeValue(top) * canvasSize.height / percentDenominator;
    }
  }
  isEnabled(particle) {
    const destroyParticle = particle;
    return !destroyParticle.destroyed || !!destroyParticle.exploding;
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "destroy", Destroy, ...sources);
  }
  particleDestroyed(particle, override) {
    if (override) {
      return;
    }
    const destroyOptions = particle.options.destroy;
    switch (destroyOptions?.mode) {
      case DestroyMode.split:
        split(this.#pluginManager, this.#container, particle);
        break;
      case DestroyMode.explode: {
        if (particle.exploding) {
          particle.destroyed = false;
          break;
        }
        const {
          explode
        } = destroyOptions, initialSize = particle.size.value, maxSize = initialSize * explode.maxSizeFactor, opacity = particle.getOpacity();
        particle.exploding = {
          initialFillOpacity: opacity.fillOpacity,
          initialSize,
          initialStrokeOpacity: opacity.strokeOpacity,
          maxSize,
          progress: 0,
          speed: Math.max(explode.speed, minExplodeSpeed)
        };
        particle.fillOpacity = opacity.fillOpacity;
        particle.strokeOpacity = opacity.strokeOpacity;
        particle.destroyed = false;
        break;
      }
      default:
        break;
    }
  }
  update(particle, delta) {
    if (particle.exploding) {
      const explosionState = particle.exploding, deltaFactor = delta.factor || defaultDeltaFactor;
      explosionState.progress = Math.min(maxExplodeProgress, explosionState.progress + explosionState.speed * deltaFactor / fpsFactor);
      const progress = explosionState.progress;
      particle.size.value = explosionState.initialSize + (explosionState.maxSize - explosionState.initialSize) * progress;
      particle.fillOpacity = explosionState.initialFillOpacity * (maxExplodeProgress - progress);
      particle.strokeOpacity = explosionState.initialStrokeOpacity * (maxExplodeProgress - progress);
      if (progress >= maxExplodeProgress) {
        particle.exploding = void 0;
        particle.destroy(true);
      }
      return;
    }
    if (particle.unbreakableUntil !== void 0 && performance.now() >= particle.unbreakableUntil) {
      particle.unbreakable = false;
      particle.unbreakableUntil = void 0;
    }
    const position = particle.getPosition(), bounds = particle.destroyBounds;
    if (!bounds) {
      return;
    }
    if (bounds.bottom !== void 0 && position.y >= bounds.bottom || bounds.left !== void 0 && position.x <= bounds.left || bounds.right !== void 0 && position.x >= bounds.right || bounds.top !== void 0 && position.y <= bounds.top) {
      particle.destroy();
    }
  }
};

// node_modules/@tsparticles/updater-destroy/browser/index.js
function loadDestroyUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("destroy", (container) => {
        return Promise.resolve(new DestroyUpdater(e.pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/plugin-emitters/browser/constants.js
var defaultRandomOptions = {
  count: 1,
  enable: true
};

// node_modules/@tsparticles/plugin-emitters/browser/EmittersInteractor.js
var emittersMode = "emitters";
var EmittersInteractor = class extends ExternalInteractorBase {
  handleClickMode;
  maxDistance;
  #instancesManager;
  constructor(instancesManager, container) {
    super(container);
    this.#instancesManager = instancesManager;
    this.maxDistance = 0;
    this.handleClickMode = (mode, interactivityData) => {
      const container2 = this.container, options = container2.actualOptions, modeEmitters = options.interactivity.modes.emitters;
      if (!modeEmitters || mode !== emittersMode) {
        return;
      }
      let emittersModeOptions;
      if (isArray(modeEmitters.value)) {
        const minLength3 = 0, modeEmittersCount = modeEmitters.value.length;
        if (modeEmittersCount > minLength3 && modeEmitters.random.enable) {
          emittersModeOptions = [];
          const usedIndexes = /* @__PURE__ */ new Set();
          for (let i = 0; i < modeEmitters.random.count; i++) {
            const idx = Math.floor(getRandom() * modeEmitters.value.length);
            if (usedIndexes.has(idx) && usedIndexes.size < modeEmittersCount) {
              i--;
              continue;
            }
            usedIndexes.add(idx);
            const selectedOptions = itemFromArray(modeEmitters.value, idx);
            if (!selectedOptions) {
              continue;
            }
            emittersModeOptions.push(selectedOptions);
          }
        } else {
          emittersModeOptions = modeEmitters.value;
        }
      } else {
        emittersModeOptions = modeEmitters.value;
      }
      const emittersOptions = emittersModeOptions, ePosition = interactivityData.mouse.clickPosition;
      void executeOnSingleOrMultiple(emittersOptions, (emitter) => __async(this, null, function* () {
        yield this.#instancesManager.addEmitter(this.container, emitter, ePosition);
      }));
    };
  }
  clear() {
  }
  init() {
  }
  interact(_interactivityData, delta) {
    for (const emitter of this.#instancesManager.getArray(this.container)) {
      emitter.update(delta);
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity).events;
    if (!mouse.clickPosition || !events.onClick.enable) {
      return false;
    }
    return isInArray(emittersMode, events.onClick.mode);
  }
  loadModeOptions(options, ...sources) {
    options.emitters = {
      random: defaultRandomOptions,
      value: []
    };
    for (const source of sources) {
      if (!source?.emitters) {
        continue;
      }
      if (isArray(source.emitters)) {
        for (const emitter of source.emitters) {
          const tmp = new Emitter();
          tmp.load(emitter);
          options.emitters.value.push(tmp);
        }
      } else if ("value" in source.emitters) {
        const emitterModeOptions = source.emitters;
        options.emitters.random.enable = emitterModeOptions.random?.enable ?? options.emitters.random.enable;
        options.emitters.random.count = emitterModeOptions.random?.count ?? options.emitters.random.count;
        if (isArray(emitterModeOptions.value)) {
          for (const emitter of emitterModeOptions.value) {
            const tmp = new Emitter();
            tmp.load(emitter);
            options.emitters.value.push(tmp);
          }
        } else {
          const tmp = new Emitter();
          tmp.load(emitterModeOptions.value);
          options.emitters.value.push(tmp);
        }
      } else {
        const tmp = new Emitter();
        tmp.load(source.emitters);
        options.emitters.value.push(tmp);
      }
    }
  }
  removeEmitter(emitter) {
    const index = this.#instancesManager.getArray(this.container).indexOf(emitter), minIndex = 0, deleteCount = 1;
    if (index >= minIndex) {
      this.#instancesManager.getArray(this.container).splice(index, deleteCount);
    }
  }
  reset() {
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/addEmittersShapesManager.js
function addEmittersShapesManager(e) {
  return __async(this, null, function* () {
    const {
      ShapeManager
    } = yield import("./chunk-BKPNAGKR.js"), pluginManager = e.pluginManager;
    pluginManager.emitterShapeManager ??= new ShapeManager();
    pluginManager.addEmitterShapeGenerator ??= (name, generator) => {
      pluginManager.emitterShapeManager?.addShapeGenerator(name, generator);
    };
  });
}

// node_modules/@tsparticles/plugin-emitters/browser/getEmittersInstancesManager.js
var instancesManagers2 = /* @__PURE__ */ new WeakMap();
function getEmittersInstancesManager(e) {
  const pluginManager = e.pluginManager;
  let manager = instancesManagers2.get(pluginManager);
  if (!manager) {
    manager = import("./chunk-ZSZKVWSU.js").then(({
      EmittersInstancesManager
    }) => new EmittersInstancesManager(pluginManager)).catch((error) => {
      instancesManagers2.delete(pluginManager);
      throw error;
    });
    instancesManagers2.set(pluginManager, manager);
  }
  return manager;
}

// node_modules/@tsparticles/plugin-emitters/browser/EmitterShapeBase.js
var EmitterShapeBase = class {
  fill;
  options;
  position;
  size;
  constructor(position, size, fill, options) {
    this.position = position;
    this.size = size;
    this.fill = fill;
    this.options = options;
  }
  resize(position, size) {
    this.position = position;
    this.size = size;
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/Enums/EmitterClickMode.js
var EmitterClickMode;
(function(EmitterClickMode2) {
  EmitterClickMode2["emitter"] = "emitter";
})(EmitterClickMode || (EmitterClickMode = {}));

// node_modules/@tsparticles/plugin-emitters/browser/interaction.js
function loadEmittersInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => __async(this, null, function* () {
      const instancesManager = yield getEmittersInstancesManager(e);
      ensureInteractivityPluginLoaded(e);
      yield addEmittersShapesManager(e);
      e.pluginManager.addInteractor?.("externalEmitters", (container) => {
        return Promise.resolve(new EmittersInteractor(instancesManager, container));
      });
    }));
  });
}

// node_modules/@tsparticles/plugin-emitters/browser/EmittersPlugin.js
var EmittersPlugin = class {
  id = "emitters";
  #instancesManager;
  constructor(instancesManager) {
    this.#instancesManager = instancesManager;
  }
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        EmittersPluginInstance
      } = yield import("./chunk-OMIUG5ZE.js");
      return new EmittersPluginInstance(this.#instancesManager, container);
    });
  }
  loadOptions(_container, options, source) {
    if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
      return;
    }
    if (source?.emitters) {
      options.emitters = executeOnSingleOrMultiple(source.emitters, (emitter) => {
        const tmp = new Emitter();
        tmp.load(emitter);
        return tmp;
      });
    }
  }
  needsPlugin(options) {
    if (!options) {
      return false;
    }
    const emitters = options.emitters;
    return isArray(emitters) && !!emitters.length || emitters !== void 0;
  }
};

// node_modules/@tsparticles/plugin-emitters/browser/plugin.js
function loadEmittersPluginSimple(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => __async(this, null, function* () {
      const instancesManager = yield getEmittersInstancesManager(e);
      yield addEmittersShapesManager(e);
      e.pluginManager.addPlugin(new EmittersPlugin(instancesManager));
    }));
  });
}

// node_modules/@tsparticles/plugin-emitters/browser/ensureEmittersPluginLoaded.js
function ensureEmittersPluginLoaded(e) {
  if (!e.pluginManager.addEmitterShapeGenerator) {
    throw new Error("tsParticles Emitters Plugin is not loaded");
  }
}

// node_modules/@tsparticles/plugin-emitters/browser/index.js
function loadEmittersPlugin(engine) {
  return __async(this, null, function* () {
    yield loadEmittersPluginSimple(engine);
    yield loadEmittersInteraction(engine);
  });
}

// node_modules/@tsparticles/plugin-emitters-shape-circle/browser/EmittersCircleShape.js
var EmittersCircleShape = class extends EmitterShapeBase {
  constructor(position, size, fill, options) {
    super(position, size, fill, options);
  }
  init() {
    return __async(this, null, function* () {
    });
  }
  randomPosition() {
    const size = this.size, fill = this.fill, position = this.position, generateTheta = (x, y) => {
      const u = getRandom() * quarter, theta = Math.atan(y / x * Math.tan(doublePI * u)), v = getRandom();
      if (v < quarter) {
        return theta;
      } else if (v < double * quarter) {
        return Math.PI - theta;
      } else if (v < double * quarter + quarter) {
        return Math.PI + theta;
      } else {
        return -theta;
      }
    }, radius = (x, y, theta) => x * y / Math.sqrt((y * Math.cos(theta)) ** squareExp + (x * Math.sin(theta)) ** squareExp), [a, b] = [size.width * half, size.height * half], randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt(getRandom()) : maxRadius;
    return {
      position: {
        x: position.x + randomRadius * Math.cos(randomTheta),
        y: position.y + randomRadius * Math.sin(randomTheta)
      }
    };
  }
};

// node_modules/@tsparticles/plugin-emitters-shape-circle/browser/EmittersCircleShapeGenerator.js
var EmittersCircleShapeGenerator = class {
  generate(_container, position, size, fill, options) {
    return new EmittersCircleShape(position, size, fill, options);
  }
};

// node_modules/@tsparticles/plugin-emitters-shape-circle/browser/index.js
function loadEmittersShapeCircle(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureEmittersPluginLoaded(e);
      e.pluginManager.addEmitterShapeGenerator?.("circle", new EmittersCircleShapeGenerator());
    });
  });
}

// node_modules/@tsparticles/plugin-emitters-shape-square/browser/EmittersSquareShape.js
var sides = 4;
var Sides;
(function(Sides2) {
  Sides2[Sides2["TopLeft"] = 0] = "TopLeft";
  Sides2[Sides2["TopRight"] = 1] = "TopRight";
  Sides2[Sides2["BottomRight"] = 2] = "BottomRight";
  Sides2[Sides2["BottomLeft"] = 3] = "BottomLeft";
})(Sides || (Sides = {}));
function randomSquareCoordinate(position, offset) {
  return position + offset * (getRandom() - half);
}
function getRandomSize(sides7) {
  return Math.floor(getRandom() * sides7);
}
var EmittersSquareShape = class extends EmitterShapeBase {
  constructor(position, size, fill, options) {
    super(position, size, fill, options);
  }
  init() {
    return __async(this, null, function* () {
    });
  }
  randomPosition() {
    const fill = this.fill, position = this.position, size = this.size;
    if (fill) {
      return {
        position: {
          x: randomSquareCoordinate(position.x, size.width),
          y: randomSquareCoordinate(position.y, size.height)
        }
      };
    } else {
      const halfW = size.width * half, halfH = size.height * half, side = getRandomSize(sides), v = (getRandom() - half) * double;
      switch (side) {
        case Sides.TopLeft:
          return {
            position: {
              x: position.x + v * halfW,
              y: position.y - halfH
            }
          };
        case Sides.TopRight:
          return {
            position: {
              x: position.x - halfW,
              y: position.y + v * halfH
            }
          };
        case Sides.BottomRight:
          return {
            position: {
              x: position.x + v * halfW,
              y: position.y + halfH
            }
          };
        case Sides.BottomLeft:
        default:
          return {
            position: {
              x: position.x + halfW,
              y: position.y + v * halfH
            }
          };
      }
    }
  }
};

// node_modules/@tsparticles/plugin-emitters-shape-square/browser/EmittersSquareShapeGenerator.js
var EmittersSquareShapeGenerator = class {
  generate(_container, position, size, fill, options) {
    return new EmittersSquareShape(position, size, fill, options);
  }
};

// node_modules/@tsparticles/plugin-emitters-shape-square/browser/index.js
function loadEmittersShapeSquare(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureEmittersPluginLoaded(e);
      e.pluginManager.addEmitterShapeGenerator?.("square", new EmittersSquareShapeGenerator());
    });
  });
}

// node_modules/@tsparticles/interaction-external-drag/browser/Options/Classes/Drag.js
var defaultMomentumFactor = 0.03;
var defaultPreserveMomentum = false;
var Drag = class {
  momentumFactor = defaultMomentumFactor;
  preserveMomentum = defaultPreserveMomentum;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "momentumFactor", data.momentumFactor);
    loadProperty(this, "preserveMomentum", data.preserveMomentum);
  }
};

// node_modules/@tsparticles/interaction-external-drag/browser/Dragger.js
var clickReleaseDelayMs = 50;
var defaultMomentumFactor2 = 0.03;
var dragMode = "drag";
var firstSampleIndex = 0;
var lastSampleOffset = 1;
var maxMomentumSamples = 5;
var minSamplesForMomentum = 2;
var momentumToVelocityFactor = millisecondsToSeconds / defaultFps;
var zeroValue = 0;
var Dragger = class extends ExternalInteractorBase {
  maxDistance = 0;
  #dragStartClickTime;
  #dragStartClickingFalseTime;
  #draggedParticle;
  #grabOffset;
  #lastMousePosition;
  #momentumSamples = [];
  #mouseDownHandled = false;
  #savedVelocity;
  constructor(container) {
    super(container);
  }
  clear(_particle, _delta) {
  }
  init() {
  }
  interact(interactivityData, _delta) {
    const mouse = interactivityData.mouse, mousePos = mouse.position;
    if (mousePos) {
      this.#lastMousePosition = mousePos;
    }
    if (this.#draggedParticle) {
      const now = performance.now();
      if (!mouse.clicking) {
        this.#dragStartClickingFalseTime ??= now;
      } else {
        this.#dragStartClickingFalseTime = void 0;
      }
      const hasStableClickEndWithoutClickTime = this.#dragStartClickTime === void 0 && this.#dragStartClickingFalseTime !== void 0 && now - this.#dragStartClickingFalseTime >= clickReleaseDelayMs;
      if (!mouse.inside || this.#hasClickEnded(mouse) || hasStableClickEndWithoutClickTime) {
        this.#releaseDragged();
        this.#mouseDownHandled = false;
        return;
      }
      const pointerPos = mousePos ?? this.#lastMousePosition;
      if (!pointerPos) {
        return;
      }
      this.#momentumSamples.push({
        x: pointerPos.x,
        y: pointerPos.y,
        t: now
      });
      if (this.#momentumSamples.length > maxMomentumSamples) {
        this.#momentumSamples.shift();
      }
      const targetX = pointerPos.x + (this.#grabOffset?.x ?? zeroValue), targetY = pointerPos.y + (this.#grabOffset?.y ?? zeroValue);
      this.#draggedParticle.position.x = targetX - this.#draggedParticle.offset.x;
      this.#draggedParticle.position.y = targetY - this.#draggedParticle.offset.y;
      this.#draggedParticle.velocity.x = zeroValue;
      this.#draggedParticle.velocity.y = zeroValue;
      this.#draggedParticle.initialPosition.x = this.#draggedParticle.position.x;
      this.#draggedParticle.initialPosition.y = this.#draggedParticle.position.y;
      this.#draggedParticle.misplaced = false;
      return;
    }
    if (!mouse.clicking) {
      this.#releaseDragged();
      this.#mouseDownHandled = false;
      return;
    }
    if (this.#mouseDownHandled) {
      return;
    }
    this.#mouseDownHandled = true;
    const downPos = mouse.downPosition ?? mousePos ?? this.#lastMousePosition, closest = this.#findParticleUnderCursor(interactivityData, downPos);
    if (!closest || !mousePos) {
      if (!closest) {
        this.#mouseDownHandled = false;
      }
      return;
    }
    const renderedPos = closest.getPosition();
    this.#draggedParticle = closest;
    this.#dragStartClickTime = mouse.clickTime;
    this.#grabOffset = {
      x: renderedPos.x - mousePos.x,
      y: renderedPos.y - mousePos.y
    };
    this.#savedVelocity = {
      x: closest.velocity.x,
      y: closest.velocity.y
    };
    this.#dragStartClickingFalseTime = void 0;
    this.#momentumSamples = [{
      x: mousePos.x,
      y: mousePos.y,
      t: performance.now()
    }];
    closest.velocity.x = zeroValue;
    closest.velocity.y = zeroValue;
    closest.position.x = renderedPos.x - closest.offset.x;
    closest.position.y = renderedPos.y - closest.offset.y;
    closest.initialPosition.x = closest.position.x;
    closest.initialPosition.y = closest.position.y;
    closest.misplaced = false;
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
    if (this.#draggedParticle || this.#mouseDownHandled) {
      return true;
    }
    return !!events?.onClick.enable && mouse.clicking && !!mouse.position && isInArray(dragMode, events.onClick.mode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "drag", Drag, ...sources);
  }
  reset(_interactivityData, _particle) {
  }
  #findParticleUnderCursor(interactivityData, mousePos) {
    if (!mousePos) {
      return;
    }
    const candidates = this.container.particles.filter((p) => this.isEnabled(interactivityData, p));
    let closest, closestDist = Infinity;
    for (const candidate of candidates) {
      const dist = getDistance(candidate.getPosition(), mousePos), radius = candidate.getRadius();
      if (!Number.isFinite(dist) || !Number.isFinite(radius) || dist > radius || dist >= closestDist) {
        continue;
      }
      closest = candidate;
      closestDist = dist;
    }
    return closest;
  }
  #hasClickEnded(mouse) {
    return this.#dragStartClickTime !== void 0 && mouse.clickTime !== void 0 && mouse.clickTime !== this.#dragStartClickTime;
  }
  #releaseDragged() {
    if (this.#draggedParticle) {
      const dragOptions = this.container.actualOptions.interactivity?.modes.drag, preserveMomentum = dragOptions?.preserveMomentum ?? false;
      if (preserveMomentum && this.#momentumSamples.length >= minSamplesForMomentum) {
        const first = this.#momentumSamples[firstSampleIndex], last = this.#momentumSamples[this.#momentumSamples.length - lastSampleOffset];
        if (first && last) {
          const dt = last.t - first.t;
          if (dt > zeroValue) {
            const factor = dragOptions?.momentumFactor ?? defaultMomentumFactor2;
            this.#draggedParticle.velocity.x = (last.x - first.x) / dt * momentumToVelocityFactor * factor;
            this.#draggedParticle.velocity.y = (last.y - first.y) / dt * momentumToVelocityFactor * factor;
          } else if (this.#savedVelocity) {
            this.#draggedParticle.velocity.x = this.#savedVelocity.x;
            this.#draggedParticle.velocity.y = this.#savedVelocity.y;
          }
        } else if (this.#savedVelocity) {
          this.#draggedParticle.velocity.x = this.#savedVelocity.x;
          this.#draggedParticle.velocity.y = this.#savedVelocity.y;
        }
      } else if (this.#savedVelocity) {
        this.#draggedParticle.velocity.x = this.#savedVelocity.x;
        this.#draggedParticle.velocity.y = this.#savedVelocity.y;
      }
    }
    this.#draggedParticle = void 0;
    this.#dragStartClickTime = void 0;
    this.#dragStartClickingFalseTime = void 0;
    this.#grabOffset = void 0;
    this.#lastMousePosition = void 0;
    this.#momentumSamples = [];
    this.#savedVelocity = void 0;
  }
};

// node_modules/@tsparticles/interaction-external-drag/browser/index.js
function loadExternalDragInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalDrag", (container) => {
        return Promise.resolve(new Dragger(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/TrailColorWeight.js
var TrailColorWeight = class {
  x = 0;
  y = 0;
  load(data) {
    if (!data) {
      return;
    }
    loadProperty(this, "x", data.x);
    loadProperty(this, "y", data.y);
  }
};

// node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/TrailColorComponent.js
var TrailColorComponent = class {
  value;
  weights = new TrailColorWeight();
  load(data) {
    if (!data) {
      return;
    }
    if (data.weights) {
      this.weights ??= new TrailColorWeight();
      this.weights.load(data.weights);
    }
    if (!isNull(data.value)) {
      this.value = setRangeValue(data.value);
    }
  }
};

// node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/TrailColorCoords.js
var TrailColorCoords = class {
  h = new TrailColorComponent();
  l = new TrailColorComponent();
  s = new TrailColorComponent();
  load(data) {
    if (!data) {
      return;
    }
    if (data.h) {
      this.h ??= new TrailColorComponent();
      this.h.load(data.h);
    }
    if (data.s) {
      this.s ??= new TrailColorComponent();
      this.s.load(data.s);
    }
    if (data.l) {
      this.l ??= new TrailColorComponent();
      this.l.load(data.l);
    }
  }
};

// node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/Trail.js
var Trail = class {
  colorCoords = new TrailColorCoords();
  delay = 1;
  particles;
  pauseOnStop = false;
  quantity = 1;
  load(data) {
    if (isNull(data)) return;
    loadProperty(this, "delay", data.delay);
    loadProperty(this, "quantity", data.quantity);
    loadProperty(this, "pauseOnStop", data.pauseOnStop);
    if (data.particles !== void 0) {
      this.particles = deepExtend({}, data.particles);
    }
    if (data.colorCoords) {
      this.colorCoords ??= new TrailColorCoords();
      this.colorCoords.load(data.colorCoords);
    }
  }
};

// node_modules/@tsparticles/interaction-external-trail/browser/TrailMaker.js
var trailMode = "trail";
var defaultMin = 0;
var defaultWeight = 0;
var TrailMaker = class extends ExternalInteractorBase {
  maxDistance = 0;
  #delay;
  #lastPosition;
  #pluginManager;
  constructor(pluginManager, container) {
    super(container);
    this.#pluginManager = pluginManager;
    this.#delay = 0;
  }
  clear() {
  }
  init() {
  }
  interact(interactivityData, delta) {
    const container = this.container;
    if (!container.retina.reduceFactor) return;
    const options = container.actualOptions, trailOptions = options.interactivity?.modes.trail;
    if (!trailOptions) return;
    const optDelay = trailOptions.delay * millisecondsToSeconds / this.container.retina.reduceFactor;
    if (this.#delay < optDelay) {
      this.#delay += delta.value;
    }
    if (this.#delay < optDelay) return;
    const mousePos = interactivityData.mouse.position, canEmit = !(trailOptions.pauseOnStop && (mousePos === this.#lastPosition || mousePos?.x === this.#lastPosition?.x && mousePos?.y === this.#lastPosition?.y));
    if (mousePos) {
      this.#lastPosition = __spreadValues({}, mousePos);
    } else {
      this.#lastPosition = void 0;
    }
    if (canEmit && mousePos) {
      let particleOptions = trailOptions.particles;
      const colorCoords = trailOptions.colorCoords;
      if (colorCoords) {
        const {
          width,
          height
        } = container.canvas.size, norm = {
          x: mousePos.x / width,
          y: mousePos.y / height
        }, hasWeights = (comp) => {
          return !!(comp?.weights?.x ?? comp?.weights?.y);
        }, calculateValue = (comp, originalValue, defaultMax) => {
          if (!hasWeights(comp)) return void 0;
          const w = comp?.weights, factor = norm.x * (w?.x ?? defaultWeight) + norm.y * (w?.y ?? defaultWeight), rangeSource = comp?.value ?? originalValue, min = getRangeMin(rangeSource ?? defaultMin), max = getRangeMax(rangeSource ?? defaultMax), result = min + factor * (max - min);
          return Math.min(max, Math.max(min, result));
        }, trailPaintOptions = trailOptions.particles?.paint ? itemFromSingleOrMultiple(trailOptions.particles.paint) : void 0, fillData = trailPaintOptions?.fill, baseHsl = fillData ? rangeColorToHsl(this.#pluginManager, AnimatableColor.create(void 0, fillData.color)) : void 0, h = calculateValue(colorCoords.h, baseHsl?.h, hMax), s = calculateValue(colorCoords.s, baseHsl?.s, sMax), l = calculateValue(colorCoords.l, baseHsl?.l, lMax);
        if (h !== void 0 || s !== void 0 || l !== void 0) {
          particleOptions = deepExtend({}, trailOptions.particles, {
            paint: {
              fill: {
                color: {
                  value: {
                    h: h ?? baseHsl?.h,
                    s: s ?? baseHsl?.s,
                    l: l ?? baseHsl?.l
                  }
                }
              }
            }
          });
        }
      }
      container.particles.push(trailOptions.quantity, mousePos, particleOptions);
    }
    this.#delay -= optDelay;
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    return !!events && (mouse.clicking && mouse.inside && !!mouse.position && isInArray(trailMode, events.onClick.mode) || mouse.inside && !!mouse.position && isInArray(trailMode, events.onHover.mode));
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "trail", Trail, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-trail/browser/index.js
function loadExternalTrailInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalTrail", (container) => {
        return Promise.resolve(new TrailMaker(e.pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/updater-roll/browser/RollMode.js
var RollMode;
(function(RollMode2) {
  RollMode2["both"] = "both";
  RollMode2["horizontal"] = "horizontal";
  RollMode2["vertical"] = "vertical";
})(RollMode || (RollMode = {}));

// node_modules/@tsparticles/updater-roll/browser/Utils.js
var maxAngle = 360;
function initParticle(pluginManager, particle) {
  const rollOpt = particle.options.roll;
  if (!rollOpt?.enable) {
    particle.roll = {
      enable: false,
      horizontal: false,
      vertical: false,
      angle: 0,
      speed: 0
    };
    return;
  }
  particle.roll = {
    enable: rollOpt.enable,
    horizontal: rollOpt.mode === RollMode.horizontal || rollOpt.mode === RollMode.both,
    vertical: rollOpt.mode === RollMode.vertical || rollOpt.mode === RollMode.both,
    angle: getRandom() * doublePI,
    speed: getRangeValue(rollOpt.speed) / maxAngle
  };
  if (rollOpt.backColor) {
    particle.backColor = rangeColorToHsl(pluginManager, rollOpt.backColor);
  } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
    const alterType = getRandom() >= half ? AlterType.darken : AlterType.enlighten;
    particle.roll.alter = {
      type: alterType,
      value: getRangeValue(alterType === AlterType.darken ? rollOpt.darken.value : rollOpt.enlighten.value)
    };
  } else if (rollOpt.darken.enable) {
    particle.roll.alter = {
      type: AlterType.darken,
      value: getRangeValue(rollOpt.darken.value)
    };
  } else if (rollOpt.enlighten.enable) {
    particle.roll.alter = {
      type: AlterType.enlighten,
      value: getRangeValue(rollOpt.enlighten.value)
    };
  }
}
function updateRoll(particle, delta) {
  const roll = particle.options.roll, data = particle.roll;
  if (!data || !roll?.enable) {
    return;
  }
  const speed = data.speed * delta.factor, max = doublePI;
  data.angle += speed;
  if (data.angle > max) {
    data.angle -= max;
  }
}

// node_modules/@tsparticles/updater-roll/browser/Options/Classes/RollLight.js
var RollLight = class {
  enable = false;
  value = 0;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "enable", data.enable);
    loadRangeProperty(this, "value", data.value);
  }
};

// node_modules/@tsparticles/updater-roll/browser/Options/Classes/Roll.js
var Roll = class {
  backColor;
  darken = new RollLight();
  enable = false;
  enlighten = new RollLight();
  mode = RollMode.vertical;
  speed = 25;
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.backColor !== void 0) {
      this.backColor = OptionsColor.create(this.backColor, data.backColor);
    }
    this.darken.load(data.darken);
    loadProperty(this, "enable", data.enable);
    this.enlighten.load(data.enlighten);
    loadProperty(this, "mode", data.mode);
    loadRangeProperty(this, "speed", data.speed);
  }
};

// node_modules/@tsparticles/updater-roll/browser/RollUpdater.js
var RollUpdater = class {
  #pluginManager;
  constructor(pluginManager) {
    this.#pluginManager = pluginManager;
  }
  getTransformValues(particle) {
    const roll = particle.roll?.enable && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
    return {
      a: rollHorizontal ? Math.cos(roll.angle) : void 0,
      d: rollVertical ? Math.sin(roll.angle) : void 0
    };
  }
  init(particle) {
    initParticle(this.#pluginManager, particle);
  }
  isEnabled(particle) {
    const roll = particle.options.roll;
    return !particle.destroyed && !particle.spawning && !!roll?.enable;
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "roll", Roll, ...sources);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateRoll(particle, delta);
  }
};

// node_modules/@tsparticles/updater-roll/browser/index.js
function loadRollUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("roll", () => {
        return Promise.resolve(new RollUpdater(e.pluginManager));
      });
    });
  });
}

// node_modules/@tsparticles/plugin-blend/browser/Options/Classes/Blend.js
var Blend = class {
  enable = false;
  mode = "destination-out";
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "mode", data.mode);
    loadProperty(this, "enable", data.enable);
  }
};

// node_modules/@tsparticles/plugin-blend/browser/BlendPlugin.js
var BlendPlugin = class {
  id = "blend";
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        BlendPluginInstance
      } = yield import("./chunk-A4OGKDLI.js");
      return new BlendPluginInstance(container);
    });
  }
  loadOptions(_container, options, source) {
    if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
      return;
    }
    let blendOptions = options.blend;
    if (!blendOptions?.load) {
      options.blend = blendOptions = new Blend();
    }
    blendOptions.load(source?.blend);
  }
  loadParticlesOptions(_container, options, source) {
    options.blend ??= new Blend();
    options.blend.load(source?.blend);
  }
  needsPlugin(options) {
    return !!options?.blend?.enable || !!options?.particles?.blend?.enable;
  }
};

// node_modules/@tsparticles/plugin-blend/browser/index.js
function loadBlendPlugin(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addPlugin(new BlendPlugin());
    });
  });
}

// node_modules/@tsparticles/shape-circle/browser/Utils.js
var minAngle = 0;
function drawCircle(data) {
  const {
    context,
    particle,
    radius
  } = data;
  particle.circleRange ??= {
    min: minAngle,
    max: doublePI
  };
  const circleRange = particle.circleRange;
  context.arc(originPoint.x, originPoint.y, radius, circleRange.min, circleRange.max, false);
}

// node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
var sides2 = 12;
var maxAngle2 = 360;
var minAngle2 = 0;
var CircleDrawer = class {
  draw(data) {
    drawCircle(data);
  }
  getSidesCount() {
    return sides2;
  }
  particleInit(_container, particle) {
    const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
      max: maxAngle2,
      min: minAngle2
    };
    particle.circleRange = isObject(angle) ? {
      min: degToRad(angle.min),
      max: degToRad(angle.max)
    } : {
      min: minAngle2,
      max: degToRad(angle)
    };
  }
};

// node_modules/@tsparticles/shape-circle/browser/index.js
function loadCircleShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["circle"], () => {
        return Promise.resolve(new CircleDrawer());
      });
    });
  });
}

// node_modules/@tsparticles/plugin-hex-color/browser/HexColorManager.js
var RgbIndexes;
(function(RgbIndexes3) {
  RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
  RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
  RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
  RgbIndexes3[RgbIndexes3["a"] = 4] = "a";
})(RgbIndexes || (RgbIndexes = {}));
var shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
var hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
var hexRadix = 16;
var defaultAlpha2 = 1;
var alphaFactor = 255;
var HexColorManager = class {
  accepts(input) {
    return input.startsWith("#");
  }
  handleColor(color) {
    return this.#parseString(color.value);
  }
  handleRangeColor(color) {
    return this.#parseString(color.value);
  }
  parseString(input) {
    return this.#parseString(input);
  }
  #parseString(hexColor) {
    if (typeof hexColor !== "string" || !this.accepts(hexColor)) {
      return;
    }
    const hexFixed = hexColor.replace(shorthandHexRegex, (_, r, g, b, a) => {
      return r + r + g + g + b + b + (a === void 0 ? "" : a + a);
    }), result = hexRegex.exec(hexFixed);
    return result ? {
      a: result[RgbIndexes.a] ? Number.parseInt(result[RgbIndexes.a], hexRadix) / alphaFactor : defaultAlpha2,
      b: Number.parseInt(result[RgbIndexes.b] ?? "0", hexRadix),
      g: Number.parseInt(result[RgbIndexes.g] ?? "0", hexRadix),
      r: Number.parseInt(result[RgbIndexes.r] ?? "0", hexRadix)
    } : void 0;
  }
};

// node_modules/@tsparticles/plugin-hex-color/browser/index.js
function loadHexColorPlugin(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("hex", new HexColorManager());
    });
  });
}

// node_modules/@tsparticles/plugin-hsl-color/browser/HslColorManager.js
var HslIndexes;
(function(HslIndexes2) {
  HslIndexes2[HslIndexes2["h"] = 1] = "h";
  HslIndexes2[HslIndexes2["s"] = 2] = "s";
  HslIndexes2[HslIndexes2["l"] = 3] = "l";
  HslIndexes2[HslIndexes2["a"] = 5] = "a";
})(HslIndexes || (HslIndexes = {}));
var hslRegex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
var HslColorManager = class {
  accepts(input) {
    return input.startsWith("hsl");
  }
  handleColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) {
      return;
    }
    return hslToRgb(hslColor);
  }
  handleRangeColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) {
      return;
    }
    return hslToRgb({
      h: getRangeValue(hslColor.h),
      l: getRangeValue(hslColor.l),
      s: getRangeValue(hslColor.s)
    });
  }
  parseString(input) {
    if (!this.accepts(input)) {
      return;
    }
    const result = hslRegex.exec(input), minLength3 = 4, defaultAlpha3 = 1, radix = 10;
    return result ? hslaToRgba({
      a: result.length > minLength3 ? parseAlpha(result[HslIndexes.a]) : defaultAlpha3,
      h: Number.parseInt(result[HslIndexes.h] ?? "0", radix),
      l: Number.parseInt(result[HslIndexes.l] ?? "0", radix),
      s: Number.parseInt(result[HslIndexes.s] ?? "0", radix)
    }) : void 0;
  }
};

// node_modules/@tsparticles/plugin-hsl-color/browser/index.js
function loadHslColorPlugin(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("hsl", new HslColorManager());
    });
  });
}

// node_modules/@tsparticles/plugin-move/browser/MovePlugin.js
var MovePlugin = class {
  id = "move";
  #pluginManager;
  constructor(pluginManager) {
    this.#pluginManager = pluginManager;
  }
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        MovePluginInstance
      } = yield import("./chunk-KG6IDW5B.js");
      return new MovePluginInstance(this.#pluginManager, container);
    });
  }
  loadOptions() {
  }
  needsPlugin() {
    return true;
  }
};

// node_modules/@tsparticles/plugin-move/browser/index.js
function loadMovePlugin(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      const moveEngine = e, movePluginManager = moveEngine.pluginManager;
      movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
      movePluginManager.pathGenerators ??= /* @__PURE__ */ new Map();
      movePluginManager.addPathGenerator = (name, generator) => {
        movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
        movePluginManager.initializers.pathGenerators.set(name, generator);
      };
      movePluginManager.getPathGenerators = (container, force = false) => __async(this, null, function* () {
        movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
        movePluginManager.pathGenerators ??= /* @__PURE__ */ new Map();
        return getItemMapFromInitializer(container, movePluginManager.pathGenerators, movePluginManager.initializers.pathGenerators, force);
      });
      e.pluginManager.addPlugin(new MovePlugin(e.pluginManager));
    });
  });
}

// node_modules/@tsparticles/animation-utils/browser/Utils.js
function checkDestroy(particle, destroyType, value, minValue, maxValue) {
  switch (destroyType) {
    case DestroyType.max:
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case DestroyType.min:
      if (value <= minValue) {
        particle.destroy();
      }
      break;
    default:
      break;
  }
}
function initParticleNumericAnimationValue(options, pxRatio) {
  const valueRange = options.value, animationOptions = options.animation, res = {
    delayTime: getRangeValue(animationOptions.delay) * millisecondsToSeconds,
    enable: animationOptions.enable,
    value: getRangeValue(options.value) * pxRatio,
    max: getRangeMax(valueRange) * pxRatio,
    min: getRangeMin(valueRange) * pxRatio,
    loops: 0,
    maxLoops: getRangeValue(animationOptions.count),
    time: 0
  }, decayOffset = 1;
  if (animationOptions.enable) {
    res.decay = decayOffset - getRangeValue(animationOptions.decay);
    switch (animationOptions.mode) {
      case AnimationMode.increase:
        res.status = AnimationStatus.increasing;
        break;
      case AnimationMode.decrease:
        res.status = AnimationStatus.decreasing;
        break;
      case AnimationMode.random:
        res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
        break;
      default:
        break;
    }
    const autoStatus = animationOptions.mode === AnimationMode.auto;
    switch (animationOptions.startValue) {
      case StartValueType.min:
        res.value = res.min;
        if (autoStatus) {
          res.status = AnimationStatus.increasing;
        }
        break;
      case StartValueType.max:
        res.value = res.max;
        if (autoStatus) {
          res.status = AnimationStatus.decreasing;
        }
        break;
      case StartValueType.random:
      default:
        res.value = randomInRangeValue(res);
        if (autoStatus) {
          res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
        }
        break;
    }
  }
  res.initialValue = res.value;
  return res;
}
function updateAnimation(particle, data, changeDirection, destroyType, delta) {
  const minLoops2 = 0, minDelay = 0, identity4 = 1, minVelocity2 = 0, minDecay = 1;
  if (particle.destroyed || !data.enable || (data.maxLoops ?? minLoops2) > minLoops2 && (data.loops ?? minLoops2) > (data.maxLoops ?? minLoops2)) {
    return;
  }
  const velocity = (data.velocity ?? minVelocity2) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
  data.time ??= 0;
  const delayTime = data.delayTime ?? minDelay;
  if (delayTime > minDelay && data.time < delayTime) {
    data.time += delta.value;
    if (data.time < delayTime) {
      return;
    }
  }
  switch (data.status) {
    case AnimationStatus.increasing:
      data.value += velocity;
      break;
    case AnimationStatus.decreasing:
      data.value -= velocity;
      break;
    default:
      break;
  }
  if (data.velocity && decay !== identity4) {
    data.velocity *= decay;
  }
  switch (data.status) {
    case AnimationStatus.increasing:
      if (data.value >= maxValue) {
        if (changeDirection) {
          data.status = AnimationStatus.decreasing;
        } else {
          data.value -= maxValue;
        }
        data.loops ??= minLoops2;
        data.loops++;
      }
      break;
    case AnimationStatus.decreasing:
      if (data.value <= minValue) {
        if (changeDirection) {
          data.status = AnimationStatus.increasing;
        } else {
          data.value += maxValue;
        }
        data.loops ??= minLoops2;
        data.loops++;
      }
      break;
    default:
      break;
  }
  checkDestroy(particle, destroyType, data.value, minValue, maxValue);
  if (!particle.destroyed) {
    data.value = clamp(data.value, minValue, maxValue);
  }
}

// node_modules/@tsparticles/updater-opacity/browser/Options/Classes/OpacityAnimation.js
var OpacityAnimation = class extends RangedAnimationOptions {
  destroy = DestroyType.none;
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "destroy", data.destroy);
  }
};

// node_modules/@tsparticles/updater-opacity/browser/Options/Classes/Opacity.js
var Opacity = class extends RangedAnimationValueWithRandom {
  animation = new OpacityAnimation();
  value = 1;
  load(data) {
    if (isNull(data)) {
      return;
    }
    super.load(data);
    const animation = data.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
};

// node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js
var OpacityUpdater = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  init(particle) {
    const opacityOptions = particle.options.opacity, pxRatio = 1;
    if (!opacityOptions) {
      return;
    }
    particle.opacity = initParticleNumericAnimationValue(opacityOptions, pxRatio);
    const opacityAnimation = opacityOptions.animation;
    if (opacityAnimation.enable) {
      particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / percentDenominator * this.#container.retina.reduceFactor;
      if (!opacityAnimation.sync) {
        particle.opacity.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    const none = 0;
    return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none) <= none || (particle.opacity.maxLoops ?? none) > none && (particle.opacity.loops ?? none) < (particle.opacity.maxLoops ?? none));
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "opacity", Opacity, ...sources);
  }
  reset(particle) {
    if (!particle.opacity) {
      return;
    }
    particle.opacity.time = 0;
    particle.opacity.loops = 0;
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.opacity || !particle.options.opacity) {
      return;
    }
    updateAnimation(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
  }
};

// node_modules/@tsparticles/updater-opacity/browser/index.js
function loadOpacityUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("opacity", (container) => {
        return Promise.resolve(new OpacityUpdater(container));
      });
    });
  });
}

// node_modules/@tsparticles/updater-out-modes/browser/Utils.js
var boundsMin = 0;
function bounceHorizontal(data) {
  if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.left && data.direction !== OutModeDirection.right) {
    return;
  }
  if (data.bounds.right < boundsMin && data.direction === OutModeDirection.left) {
    data.particle.position.x = data.size + data.offset.x;
  } else if (data.bounds.left > data.canvasSize.width && data.direction === OutModeDirection.right) {
    data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
  }
  const velocity = data.particle.velocity.x;
  let bounced = false;
  if (data.outOfCanvas && (data.direction === OutModeDirection.right && velocity > minVelocity || data.direction === OutModeDirection.left && velocity < minVelocity)) {
    const newVelocity = getRangeValue(data.particle.options.bounce.horizontal.value);
    data.particle.velocity.x *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data.offset.x + data.size;
  if (data.outOfCanvas && data.direction === OutModeDirection.right) {
    data.particle.position.x = data.canvasSize.width - minPos;
  } else if (data.outOfCanvas && data.direction === OutModeDirection.left) {
    data.particle.position.x = minPos;
  }
  if (data.outMode === OutMode.split) {
    data.particle.destroy();
  }
}
function bounceVertical(data) {
  if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || data.direction !== OutModeDirection.bottom && data.direction !== OutModeDirection.top) {
    return;
  }
  if (data.bounds.bottom < boundsMin && data.direction === OutModeDirection.top) {
    data.particle.position.y = data.size + data.offset.y;
  } else if (data.bounds.top > data.canvasSize.height && data.direction === OutModeDirection.bottom) {
    data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
  }
  const velocity = data.particle.velocity.y;
  let bounced = false;
  if (data.outOfCanvas && (data.direction === OutModeDirection.bottom && velocity > minVelocity || data.direction === OutModeDirection.top && velocity < minVelocity)) {
    const newVelocity = getRangeValue(data.particle.options.bounce.vertical.value);
    data.particle.velocity.y *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data.offset.y + data.size;
  if (data.outOfCanvas && data.direction === OutModeDirection.bottom) {
    data.particle.position.y = data.canvasSize.height - minPos;
  } else if (data.outOfCanvas && data.direction === OutModeDirection.top) {
    data.particle.position.y = minPos;
  }
  if (data.outMode === OutMode.split) {
    data.particle.destroy();
  }
}

// node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js
var BounceOutMode = class {
  modes;
  #container;
  #particleBouncePlugins;
  constructor(container) {
    this.#container = container;
    this.modes = [OutMode.bounce, OutMode.split];
    this.#particleBouncePlugins = container.plugins.filter((p) => p.particleBounce !== void 0);
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.#container;
    let handled = false;
    for (const plugin of this.#particleBouncePlugins) {
      handled = plugin.particleBounce?.(particle, delta, direction) ?? false;
      if (handled) {
        break;
      }
    }
    if (handled) {
      return;
    }
    const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container.canvas.size, outOfCanvas = !particle.isInsideCanvasForOutMode(outMode, direction);
    bounceHorizontal({
      particle,
      outMode,
      direction,
      bounds,
      canvasSize,
      offset,
      outOfCanvas,
      size
    });
    bounceVertical({
      particle,
      outMode,
      direction,
      bounds,
      canvasSize,
      offset,
      outOfCanvas,
      size
    });
  }
};

// node_modules/@tsparticles/updater-out-modes/browser/DestroyOutMode.js
var DestroyOutMode = class {
  modes;
  constructor(_container) {
    this.modes = [OutMode.destroy];
  }
  update(particle, direction, _delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    switch (particle.outType) {
      case ParticleOutType.normal:
      case ParticleOutType.outside:
        if (particle.isInsideCanvasForOutMode(outMode, direction)) {
          return;
        }
        break;
      case ParticleOutType.inside: {
        const {
          dx,
          dy
        } = getDistances(particle.position, particle.moveCenter), {
          x: vx,
          y: vy
        } = particle.velocity;
        if (vx < minVelocity && dx > particle.moveCenter.radius || vy < minVelocity && dy > particle.moveCenter.radius || vx >= minVelocity && dx < -particle.moveCenter.radius || vy >= minVelocity && dy < -particle.moveCenter.radius) {
          return;
        }
        break;
      }
    }
    particle.destroy(true);
  }
};

// node_modules/@tsparticles/updater-out-modes/browser/NoneOutMode.js
var NoneOutMode = class {
  modes;
  #container;
  constructor(container) {
    this.#container = container;
    this.modes = [OutMode.none];
  }
  update(particle, direction, _delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    if ((particle.options.move.distance.horizontal && (direction === OutModeDirection.left || direction === OutModeDirection.right)) ?? (particle.options.move.distance.vertical && (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) {
      return;
    }
    const gravityOptions = particle.options.move.gravity, container = this.#container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
    if (!gravityOptions.enable) {
      if (particle.velocity.y > minVelocity && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity && particle.position.y >= -pRadius || particle.velocity.x > minVelocity && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity && particle.position.x >= -pRadius) {
        return;
      }
      if (!isPointInside(particle.position, container.canvas.size, originPoint, pRadius, direction)) {
        particle.destroy();
      }
    } else {
      const position = particle.position;
      if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === OutModeDirection.top) {
        particle.destroy();
      }
    }
  }
};

// node_modules/@tsparticles/updater-out-modes/browser/OutOutMode.js
var updateVector = Vector.origin;
var OutOutMode = class {
  modes;
  #container;
  constructor(container) {
    this.#container = container;
    this.modes = [OutMode.out];
  }
  update(particle, direction, _delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.#container;
    switch (particle.outType) {
      case ParticleOutType.inside: {
        const {
          x: vx,
          y: vy
        } = particle.velocity;
        updateVector.setTo(originPoint);
        updateVector.length = particle.moveCenter.radius;
        updateVector.angle = particle.velocity.angle + Math.PI;
        updateVector.addTo(particle.moveCenter);
        const {
          dx,
          dy
        } = getDistances(particle.position, updateVector);
        if (vx <= minVelocity && dx >= minDistance || vy <= minVelocity && dy >= minDistance || vx >= minVelocity && dx <= minDistance || vy >= minVelocity && dy <= minDistance) {
          return;
        }
        particle.position.x = Math.floor(randomInRangeValue({
          min: 0,
          max: container.canvas.size.width
        }));
        particle.position.y = Math.floor(randomInRangeValue({
          min: 0,
          max: container.canvas.size.height
        }));
        const {
          dx: newDx,
          dy: newDy
        } = getDistances(particle.position, particle.moveCenter);
        particle.direction = Math.atan2(-newDy, -newDx);
        particle.velocity.angle = particle.direction;
        particle.justWarped = true;
        break;
      }
      default: {
        if (particle.isInsideCanvasForOutMode(outMode, direction)) {
          return;
        }
        switch (particle.outType) {
          case ParticleOutType.outside: {
            particle.position.x = Math.floor(randomInRangeValue({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.x;
            particle.position.y = Math.floor(randomInRangeValue({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.y;
            const {
              dx,
              dy
            } = getDistances(particle.position, particle.moveCenter);
            if (particle.moveCenter.radius) {
              particle.direction = Math.atan2(dy, dx);
              particle.velocity.angle = particle.direction;
            }
            particle.justWarped = true;
            break;
          }
          case ParticleOutType.normal: {
            const warp = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
              bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
              left: -particle.getRadius() - particle.offset.x,
              right: canvasSize.width + particle.getRadius() + particle.offset.x,
              top: -particle.getRadius() - particle.offset.y
            }, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
            if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
              particle.position.x = newPos.left;
              particle.initialPosition.x = particle.position.x;
              if (!warp) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
              particle.justWarped = true;
            } else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
              particle.position.x = newPos.right;
              particle.initialPosition.x = particle.position.x;
              if (!warp) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
              particle.justWarped = true;
            }
            if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
              if (!warp) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.top;
              particle.initialPosition.y = particle.position.y;
              particle.justWarped = true;
            } else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
              if (!warp) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.bottom;
              particle.initialPosition.y = particle.position.y;
              particle.justWarped = true;
            }
            break;
          }
        }
        break;
      }
    }
  }
};

// node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js
var checkOutMode = (outModes, outMode) => {
  return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
};
var OutOfCanvasUpdater = class {
  updaters;
  #container;
  constructor(container) {
    this.#container = container;
    this.updaters = /* @__PURE__ */ new Map();
  }
  init(particle) {
    this.#addUpdaterIfMissing(particle, OutMode.bounce, (container) => new BounceOutMode(container));
    this.#addUpdaterIfMissing(particle, OutMode.out, (container) => new OutOutMode(container));
    this.#addUpdaterIfMissing(particle, OutMode.destroy, (container) => new DestroyOutMode(container));
    this.#addUpdaterIfMissing(particle, OutMode.none, (container) => new NoneOutMode(container));
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning;
  }
  update(particle, delta) {
    const outModes = particle.options.move.outModes;
    particle.justWarped = false;
    this.#updateOutMode(particle, delta, outModes.bottom ?? outModes.default, OutModeDirection.bottom);
    this.#updateOutMode(particle, delta, outModes.left ?? outModes.default, OutModeDirection.left);
    this.#updateOutMode(particle, delta, outModes.right ?? outModes.default, OutModeDirection.right);
    this.#updateOutMode(particle, delta, outModes.top ?? outModes.default, OutModeDirection.top);
  }
  #addUpdaterIfMissing(particle, outMode, getUpdater) {
    const outModes = particle.options.move.outModes;
    if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) {
      this.updaters.set(outMode, getUpdater(this.#container));
    }
  }
  #updateOutMode(particle, delta, outMode, direction) {
    for (const updater of this.updaters.values()) {
      updater.update(particle, direction, delta, outMode);
    }
  }
};

// node_modules/@tsparticles/updater-out-modes/browser/index.js
function loadOutModesUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("outModes", (container) => {
        return Promise.resolve(new OutOfCanvasUpdater(container));
      });
    });
  });
}

// node_modules/@tsparticles/updater-paint/browser/PaintUpdater.js
var defaultOpacity = 1;
var PaintUpdater = class {
  #container;
  #pluginManager;
  constructor(pluginManager, container) {
    this.#container = container;
    this.#pluginManager = pluginManager;
  }
  init(particle) {
    const container = this.#container, options = particle.options, paint = itemFromSingleOrMultiple(options.paint, particle.id, options.reduceDuplicates), color = paint?.color, paintColor = color ?? void 0, fill = paint?.fill, stroke = paint?.stroke;
    if (fill) {
      const fillColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), fill.color);
      particle.fillEnabled = fill.enable;
      particle.fillOpacity = getRangeValue(fill.opacity);
      particle.fillAnimation = fillColor.animation;
      const fillHslColor = rangeColorToHsl(this.#pluginManager, fillColor);
      if (fillHslColor) {
        particle.fillColor = getHslAnimationFromHsl(fillHslColor, particle.fillAnimation, container.retina.reduceFactor);
      }
    } else {
      particle.fillEnabled = false;
      particle.fillAnimation = void 0;
      particle.fillColor = void 0;
      particle.fillOpacity = defaultOpacity;
    }
    if (stroke) {
      const strokeColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), stroke.color);
      particle.strokeWidth = getRangeValue(stroke.width) * container.retina.pixelRatio;
      particle.strokeOpacity = getRangeValue(stroke.opacity ?? defaultOpacity);
      particle.strokeAnimation = strokeColor.animation;
      const strokeHslColor = rangeColorToHsl(this.#pluginManager, strokeColor) ?? particle.getFillColor();
      if (strokeHslColor) {
        particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
      }
    } else {
      particle.strokeAnimation = void 0;
      particle.strokeColor = void 0;
      particle.strokeOpacity = defaultOpacity;
      particle.strokeWidth = 0;
    }
  }
  isEnabled(particle) {
    const {
      fillAnimation,
      fillColor,
      strokeAnimation,
      strokeColor
    } = particle, fillEnabled = !!fillAnimation && (fillColor?.h.value !== void 0 && fillColor.h.enable || fillColor?.s.value !== void 0 && fillColor.s.enable || fillColor?.l.value !== void 0 && fillColor.l.enable), strokeEnabled = !!strokeAnimation && (strokeColor?.h.value !== void 0 && strokeColor.h.enable || strokeColor?.s.value !== void 0 && strokeColor.s.enable || strokeColor?.l.value !== void 0 && strokeColor.l.enable);
    return !particle.destroyed && !particle.spawning && (fillEnabled || strokeEnabled);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateColor(particle.fillColor, delta, this.#container.hdr);
    updateColor(particle.strokeColor, delta, this.#container.hdr);
  }
};

// node_modules/@tsparticles/updater-paint/browser/index.js
function loadPaintUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("paint", (container) => {
        return Promise.resolve(new PaintUpdater(e.pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/plugin-rgb-color/browser/RgbColorManager.js
var RgbIndexes2;
(function(RgbIndexes3) {
  RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
  RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
  RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
  RgbIndexes3[RgbIndexes3["a"] = 5] = "a";
})(RgbIndexes2 || (RgbIndexes2 = {}));
var rgbRegex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
var RgbColorManager = class {
  accepts(input) {
    return input.startsWith("rgb");
  }
  handleColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) {
      return;
    }
    return rgbColor;
  }
  handleRangeColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) {
      return;
    }
    return {
      r: getRangeValue(rgbColor.r),
      g: getRangeValue(rgbColor.g),
      b: getRangeValue(rgbColor.b)
    };
  }
  parseString(input) {
    if (!this.accepts(input)) {
      return;
    }
    const result = rgbRegex.exec(input), radix = 10, minLength3 = 4, defaultAlpha3 = 1;
    return result ? {
      a: result.length > minLength3 ? parseAlpha(result[RgbIndexes2.a]) : defaultAlpha3,
      b: parseInt(result[RgbIndexes2.b] ?? "0", radix),
      g: parseInt(result[RgbIndexes2.g] ?? "0", radix),
      r: parseInt(result[RgbIndexes2.r] ?? "0", radix)
    } : void 0;
  }
};

// node_modules/@tsparticles/plugin-rgb-color/browser/index.js
function loadRgbColorPlugin(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("rgb", new RgbColorManager());
    });
  });
}

// node_modules/@tsparticles/updater-size/browser/Options/Classes/SizeAnimation.js
var SizeAnimation = class extends RangedAnimationOptions {
  destroy = DestroyType.none;
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "destroy", data.destroy);
  }
};

// node_modules/@tsparticles/updater-size/browser/Options/Classes/Size.js
var Size = class extends RangedAnimationValueWithRandom {
  animation = new SizeAnimation();
  value = 3;
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    const animation = data.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
};

// node_modules/@tsparticles/updater-size/browser/SizeUpdater.js
var minLoops = 0;
var SizeUpdater = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  init(particle) {
    const container = this.#container, sizeOptions = particle.options.size;
    if (!sizeOptions) {
      return;
    }
    const sizeAnimation = sizeOptions.animation;
    if (!sizeAnimation.enable) {
      return;
    }
    particle.size.velocity = particle.retina.sizeAnimationSpeed / percentDenominator * container.retina.reduceFactor;
    if (sizeAnimation.sync) {
      return;
    }
    particle.size.velocity *= getRandom();
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "size", Size, ...sources);
  }
  preInit(particle) {
    const pxRatio = this.#container.retina.pixelRatio, options = particle.options, sizeOptions = options.size;
    if (!sizeOptions) {
      return;
    }
    particle.size = initParticleNumericAnimationValue(sizeOptions, pxRatio);
    particle.retina.sizeAnimationSpeed = getRangeValue(sizeOptions.animation.speed) * pxRatio;
  }
  reset(particle) {
    particle.size.time = 0;
    particle.size.loops = 0;
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.options.size) {
      return;
    }
    updateAnimation(particle, particle.size, true, particle.options.size.animation.destroy, delta);
  }
};

// node_modules/@tsparticles/updater-size/browser/index.js
function loadSizeUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("size", (container) => {
        return Promise.resolve(new SizeUpdater(container));
      });
    });
  });
}

// node_modules/@tsparticles/basic/browser/index.js
function loadBasic(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => __async(this, null, function* () {
      yield Promise.all([loadBlendPlugin(e), loadHexColorPlugin(e), loadHslColorPlugin(e), loadRgbColorPlugin(e), loadMovePlugin(e), loadCircleShape(e), loadPaintUpdater(e), loadOpacityUpdater(e), loadOutModesUpdater(e), loadSizeUpdater(e)]);
    }));
  });
}

// node_modules/@tsparticles/plugin-easing-quad/browser/easingsFunctions.js
var easingsFunctions = /* @__PURE__ */ new Map();
easingsFunctions.set("ease-in-quad", (value) => value ** 2);
easingsFunctions.set("ease-out-quad", (value) => 1 - (1 - value) ** 2);
easingsFunctions.set("ease-in-out-quad", (value) => value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2);

// node_modules/@tsparticles/plugin-easing-quad/browser/index.js
function loadEasingQuadPlugin(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      for (const [easing, easingFn] of easingsFunctions) {
        e.pluginManager.addEasing(easing, easingFn);
      }
    });
  });
}

// node_modules/@tsparticles/shape-emoji/browser/Utils.js
var validTypes = ["emoji"];
function drawEmoji(data, image) {
  const {
    context,
    opacity
  } = data, previousAlpha = context.globalAlpha, diameter = image.width, radius = diameter * half;
  context.globalAlpha = opacity;
  context.drawImage(image, -radius, -radius, diameter, diameter);
  context.globalAlpha = previousAlpha;
}

// node_modules/@tsparticles/canvas-utils/browser/Utils.js
var alphaMax = 255;
var alphaFactor2 = identity / alphaMax;
function drawLine(context, begin, end) {
  context.beginPath();
  context.moveTo(begin.x, begin.y);
  context.lineTo(end.x, end.y);
  context.closePath();
}
function loadFont(font, weight) {
  return __async(this, null, function* () {
    try {
      yield safeDocument().fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    } catch {
    }
  });
}

// node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js
var defaultFont = '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
var noPadding = 0;
var firstItem = 0;
var EmojiDrawer = class {
  #emojiShapeDict = /* @__PURE__ */ new Map();
  destroy() {
    for (const [key, data] of this.#emojiShapeDict) {
      if (data instanceof ImageBitmap) {
        data.close();
      }
      this.#emojiShapeDict.delete(key);
    }
  }
  draw(data) {
    const key = data.particle.emojiDataKey;
    if (!key) {
      return;
    }
    const image = this.#emojiShapeDict.get(key);
    if (!image) {
      return;
    }
    drawEmoji(data, image);
  }
  init(container) {
    return __async(this, null, function* () {
      const options = container.actualOptions, shapeData = options.particles.shape;
      if (!validTypes.some((t) => isInArray(t, shapeData.type))) {
        return;
      }
      const promises = [loadFont(defaultFont)], shapeOptions = validTypes.map((t) => shapeData.options[t])[firstItem];
      executeOnSingleOrMultiple(shapeOptions, (shape) => {
        if (shape.font) {
          promises.push(loadFont(shape.font));
        }
      });
      yield Promise.all(promises);
    });
  }
  particleDestroy(particle) {
    particle.emojiDataKey = void 0;
  }
  particleInit(container, particle) {
    const shapeData = particle.shapeData;
    if (!shapeData.value) {
      return;
    }
    const emoji = itemFromSingleOrMultiple(shapeData.value, particle.randomIndexData);
    if (!emoji) {
      return;
    }
    const emojiOptions = typeof emoji === "string" ? {
      font: shapeData.font ?? defaultFont,
      padding: shapeData.padding ?? noPadding,
      value: emoji
    } : __spreadValues(__spreadValues({
      font: defaultFont,
      padding: noPadding
    }, shapeData), emoji), font = emojiOptions.font, value = emojiOptions.value, cacheKey = `${value}_${font}`;
    if (this.#emojiShapeDict.has(cacheKey)) {
      particle.emojiDataKey = cacheKey;
      return;
    }
    const padding = emojiOptions.padding * double, maxSize = getRangeMax(particle.size.value), fullSize = maxSize + padding, canvasSize = fullSize * double, cacheCanvas = new OffscreenCanvas(canvasSize, canvasSize), context = cacheCanvas.getContext("2d", container.canvas.render.settings);
    if (!context) {
      return;
    }
    context.font = `400 ${(maxSize * double).toString()}px ${font}`;
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillText(value, fullSize, fullSize);
    const image = cacheCanvas instanceof HTMLCanvasElement ? cacheCanvas : cacheCanvas.transferToImageBitmap();
    this.#emojiShapeDict.set(cacheKey, image);
    particle.emojiDataKey = cacheKey;
  }
};

// node_modules/@tsparticles/shape-emoji/browser/index.js
function loadEmojiShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(validTypes, () => Promise.resolve(new EmojiDrawer()));
    });
  });
}

// node_modules/@tsparticles/interaction-external-attract/browser/Utils.js
var minFactor = 1;
var minRadius2 = 0;
var updateVector2 = Vector.origin;
function processAttract(pluginManager, container, position, attractRadius, area, queryCb, onAttractParticle) {
  const attractOptions = container.actualOptions.interactivity?.modes.attract;
  if (!attractOptions) {
    return;
  }
  const query = container.particles.grid.query(area, queryCb);
  for (const particle of query) {
    const {
      dx,
      dy,
      distance
    } = getDistances(particle.position, position), velocity = attractOptions.speed * attractOptions.factor, attractFactor2 = clamp(pluginManager.getEasing(attractOptions.easing)(identity - distance / attractRadius) * velocity, minFactor, attractOptions.maxSpeed);
    updateVector2.x = !distance ? velocity : dx / distance * attractFactor2;
    updateVector2.y = !distance ? velocity : dy / distance * attractFactor2;
    onAttractParticle?.(particle);
    particle.position.subFrom(updateVector2);
  }
}
function clickAttract(pluginManager, container, interactivityData, enabledCb, onAttractParticle) {
  container.attract ??= {
    particles: []
  };
  const {
    attract
  } = container;
  if (!attract.finish) {
    attract.count ??= 0;
    attract.count++;
    if (attract.count === container.particles.count) {
      attract.finish = true;
    }
  }
  if (attract.clicking) {
    const mousePos = interactivityData.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
    if (!attractRadius || attractRadius < minRadius2 || !mousePos) {
      return;
    }
    processAttract(pluginManager, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p), onAttractParticle);
  } else if (attract.clicking === false) {
    attract.particles = [];
  }
}
function hoverAttract(pluginManager, container, interactivityData, enabledCb, onAttractParticle) {
  const mousePos = interactivityData.mouse.position, attractRadius = container.retina.attractModeDistance;
  if (!attractRadius || attractRadius < minRadius2 || !mousePos) {
    return;
  }
  processAttract(pluginManager, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p), onAttractParticle);
}

// node_modules/@tsparticles/interaction-external-attract/browser/Options/Classes/Attract.js
var Attract = class {
  distance = 200;
  duration = 0.4;
  easing = "ease-out-quad";
  factor = 1;
  maxSpeed = 50;
  restore;
  speed = 1;
  constructor() {
    this.restore = {
      enable: false,
      delay: 0,
      speed: 0.08,
      follow: true
    };
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "distance", data.distance);
    loadProperty(this, "duration", data.duration);
    if (data.easing !== void 0) {
      this.easing = data.easing;
    }
    loadProperty(this, "factor", data.factor);
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
    loadProperty(this, "speed", data.speed);
    if (data.restore !== void 0) {
      this.restore.enable = data.restore.enable ?? this.restore.enable;
      this.restore.delay = data.restore.delay ?? this.restore.delay;
      this.restore.speed = data.restore.speed ?? this.restore.speed;
      this.restore.follow = data.restore.follow ?? this.restore.follow;
    }
  }
};

// node_modules/@tsparticles/interaction-external-attract/browser/Attractor.js
var attractMode = "attract";
var minVelocityLengthSq = 0;
var minRestoreSpeed = 1e-3;
var maxRestoreSpeed = 1;
var restoreEpsilon = 0.5;
var Attractor = class extends ExternalInteractorBase {
  handleClickMode;
  #interactedThisFrame;
  #maxDistance;
  #pluginManager;
  #restoreData;
  constructor(pluginManager, container) {
    super(container);
    this.#pluginManager = pluginManager;
    this.#maxDistance = 0;
    this.#interactedThisFrame = /* @__PURE__ */ new Set();
    this.#restoreData = /* @__PURE__ */ new Map();
    container.attract ??= {
      particles: []
    };
    this.handleClickMode = (mode, interactivityData) => {
      const options = this.container.actualOptions, attract = options.interactivity?.modes.attract;
      if (!attract || mode !== attractMode) {
        return;
      }
      container.attract ??= {
        particles: []
      };
      container.attract.clicking = true;
      container.attract.count = 0;
      for (const particle of container.attract.particles) {
        if (!this.isEnabled(interactivityData, particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.attract.particles = [];
      container.attract.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        container.attract ??= {
          particles: []
        };
        container.attract.clicking = false;
      }, attract.duration * millisecondsToSeconds);
    };
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
    const container = this.container, attract = container.actualOptions.interactivity?.modes.attract;
    if (!attract) {
      return;
    }
    this.#maxDistance = attract.distance;
    container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
  }
  interact(interactivityData) {
    this.#interactedThisFrame.clear();
    const container = this.container, options = container.actualOptions, mouseMoveStatus = interactivityData.status === mouseMoveEvent, events = options.interactivity?.events;
    if (!events) {
      return;
    }
    const {
      enable: hoverEnabled,
      mode: hoverMode
    } = events.onHover, {
      enable: clickEnabled,
      mode: clickMode
    } = events.onClick;
    if (mouseMoveStatus && hoverEnabled && isInArray(attractMode, hoverMode)) {
      hoverAttract(this.#pluginManager, this.container, interactivityData, (p) => this.isEnabled(interactivityData, p), (p) => {
        this.#trackInteractedParticle(p);
      });
    } else if (clickEnabled && isInArray(attractMode, clickMode)) {
      clickAttract(this.#pluginManager, this.container, interactivityData, (p) => this.isEnabled(interactivityData, p), (p) => {
        this.#trackInteractedParticle(p);
      });
    }
    this.#restoreParticles();
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    if ((!mouse.position || !events?.onHover.enable) && (!mouse.clickPosition || !events?.onClick.enable)) {
      return false;
    }
    const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
    return isInArray(attractMode, hoverMode) || isInArray(attractMode, clickMode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "attract", Attract, ...sources);
  }
  reset() {
  }
  #restoreParticles() {
    const restore = this.container.actualOptions.interactivity?.modes.attract?.restore;
    if (!restore?.enable || !this.#restoreData.size) {
      return;
    }
    const now = Date.now(), restoreDelay = restore.delay * millisecondsToSeconds, restoreSpeed = Math.max(minRestoreSpeed, Math.min(maxRestoreSpeed, restore.speed));
    for (const [particle, restoreData] of this.#restoreData) {
      if (this.#interactedThisFrame.has(particle)) {
        continue;
      }
      if (particle.destroyed) {
        this.#restoreData.delete(particle);
        continue;
      }
      const target = restoreData.target;
      if (now - restoreData.lastInteractionTime < restoreDelay) {
        continue;
      }
      let dx = target.x - particle.position.x, dy = target.y - particle.position.y, dz = target.z - particle.position.z;
      if (restore.follow && particle.options.move.enable) {
        const {
          x: vx,
          y: vy,
          z: vz
        } = particle.velocity, velocityLengthSq = vx * vx + vy * vy + vz * vz;
        if (velocityLengthSq > minVelocityLengthSq) {
          const parallelScale = (dx * vx + dy * vy + dz * vz) / velocityLengthSq;
          dx -= vx * parallelScale;
          dy -= vy * parallelScale;
          dz -= vz * parallelScale;
        }
      }
      particle.position.x += dx * restoreSpeed;
      particle.position.y += dy * restoreSpeed;
      particle.position.z += dz * restoreSpeed;
      if (Math.abs(dx) <= restoreEpsilon && Math.abs(dy) <= restoreEpsilon) {
        particle.position.x = target.x;
        particle.position.y = target.y;
        particle.position.z = target.z;
        this.#restoreData.delete(particle);
        continue;
      }
    }
  }
  #trackInteractedParticle(particle) {
    this.#interactedThisFrame.add(particle);
    const restore = this.container.actualOptions.interactivity?.modes.attract?.restore;
    if (!restore?.enable) {
      return;
    }
    const now = Date.now();
    let restoreData = this.#restoreData.get(particle);
    if (!restoreData) {
      restoreData = {
        target: particle.position.copy(),
        lastInteractionTime: now
      };
      this.#restoreData.set(particle, restoreData);
    }
    restoreData.lastInteractionTime = now;
  }
};

// node_modules/@tsparticles/interaction-external-attract/browser/index.js
function loadExternalAttractInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalAttract", (container) => {
        return Promise.resolve(new Attractor(e.pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-bounce/browser/Utils.js
var halfPI = Math.PI * half;
var toleranceFactor = 10;
function processBounce(container, position, radius, area, enabledCb) {
  const query = container.particles.grid.query(area, enabledCb);
  for (const particle of query) {
    if (area instanceof Circle) {
      circleBounce(circleBounceDataFromParticle(particle), {
        position,
        radius,
        mass: radius ** squareExp * halfPI,
        velocity: Vector.origin,
        factor: Vector.origin
      });
    } else if (area instanceof Rectangle) {
      rectBounce(particle, calculateBounds(position, radius));
    }
  }
}
function singleSelectorBounce(container, selector, div, bounceCb) {
  const query = safeDocument().querySelectorAll(selector);
  if (!query.length) {
    return;
  }
  query.forEach((item) => {
    const elem = item, pxRatio = container.retina.pixelRatio, pos = {
      x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
      y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
    }, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double, elem.offsetHeight * pxRatio + tolerance * double);
    bounceCb(pos, radius, area);
  });
}
function divBounce(container, divs, bounceMode2, enabledCb) {
  divModeExecute(bounceMode2, divs, (selector, div) => {
    singleSelectorBounce(container, selector, div, (pos, radius, area) => {
      processBounce(container, pos, radius, area, enabledCb);
    });
  });
}
function mouseBounce(container, interactivityData, enabledCb) {
  const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor * pxRatio, mousePos = interactivityData.mouse.position, radius = container.retina.bounceModeDistance;
  if (!radius || radius < minRadius || !mousePos) {
    return;
  }
  processBounce(container, mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance), enabledCb);
}
function rectSideBounce(data) {
  const res = {
    bounced: false
  }, {
    pSide,
    pOtherSide,
    rectSide,
    rectOtherSide,
    velocity,
    factor
  } = data;
  if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
    return res;
  }
  if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * half && velocity > minVelocity || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * half && velocity < minVelocity) {
    res.velocity = velocity * -factor;
    res.bounced = true;
  }
  return res;
}
function rectBounce(particle, divBounds) {
  const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), bounceOptions = particle.options.bounce, resH = rectSideBounce({
    pSide: {
      min: bounds.left,
      max: bounds.right
    },
    pOtherSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    rectSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    rectOtherSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    velocity: particle.velocity.x,
    factor: getRangeValue(bounceOptions.horizontal.value)
  });
  if (resH.bounced) {
    if (resH.velocity !== void 0) {
      particle.velocity.x = resH.velocity;
    }
    if (resH.position !== void 0) {
      particle.position.x = resH.position;
    }
  }
  const resV = rectSideBounce({
    pSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    pOtherSide: {
      min: bounds.left,
      max: bounds.right
    },
    rectSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    rectOtherSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    velocity: particle.velocity.y,
    factor: getRangeValue(bounceOptions.vertical.value)
  });
  if (resV.bounced) {
    if (resV.velocity !== void 0) {
      particle.velocity.y = resV.velocity;
    }
    if (resV.position !== void 0) {
      particle.position.y = resV.position;
    }
  }
}

// node_modules/@tsparticles/interaction-external-bounce/browser/Options/Classes/Bounce.js
var Bounce = class {
  distance = 200;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "distance", data.distance);
  }
};

// node_modules/@tsparticles/interaction-external-bounce/browser/Bouncer.js
var bounceMode = "bounce";
var Bouncer = class extends ExternalInteractorBase {
  #maxDistance;
  constructor(container) {
    super(container);
    this.#maxDistance = 0;
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
    const container = this.container, bounce2 = container.actualOptions.interactivity?.modes.bounce;
    if (!bounce2) {
      return;
    }
    this.#maxDistance = bounce2.distance;
    container.retina.bounceModeDistance = bounce2.distance * container.retina.pixelRatio;
  }
  interact(interactivityData) {
    const container = this.container, options = container.actualOptions, events = options.interactivity?.events, mouseMoveStatus = interactivityData.status === mouseMoveEvent;
    if (!events) {
      return;
    }
    const hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray(bounceMode, hoverMode)) {
      mouseBounce(this.container, interactivityData, (p) => this.isEnabled(interactivityData, p));
    } else {
      divBounce(this.container, divs, bounceMode, (p) => this.isEnabled(interactivityData, p));
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    if (!events) {
      return false;
    }
    const divs = events.onDiv;
    return !!mouse.position && events.onHover.enable && isInArray(bounceMode, events.onHover.mode) || isDivModeEnabled(bounceMode, divs);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "bounce", Bounce, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-bounce/browser/index.js
function loadExternalBounceInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalBounce", (container) => {
        return Promise.resolve(new Bouncer(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleBase.js
var BubbleBase = class {
  color;
  distance = 200;
  duration = 0.4;
  mix = false;
  opacity;
  size;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "distance", data.distance);
    loadProperty(this, "duration", data.duration);
    loadProperty(this, "mix", data.mix);
    loadRangeProperty(this, "opacity", data.opacity);
    if (data.color !== void 0) {
      const sourceColor = isArray(this.color) ? void 0 : this.color;
      this.color = executeOnSingleOrMultiple(data.color, (color) => {
        return OptionsColor.create(sourceColor, color);
      });
    }
    loadProperty(this, "size", data.size);
  }
};

// node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleDiv.js
var BubbleDiv = class extends BubbleBase {
  selectors = [];
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "selectors", data.selectors);
  }
};

// node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/Bubble.js
var Bubble = class extends BubbleBase {
  divs;
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
      const tmp = new BubbleDiv();
      tmp.load(div);
      return tmp;
    });
  }
};

// node_modules/@tsparticles/interaction-external-bubble/browser/BubbleModifier.js
var BubbleModifier = class {
  div;
  enabled = false;
  fillColor;
  finalColor;
  id = "bubble";
  inRange = false;
  opacity;
  priority = 100;
  radius;
  strokeColor;
};

// node_modules/@tsparticles/interaction-external-bubble/browser/Enums.js
var ProcessBubbleType;
(function(ProcessBubbleType2) {
  ProcessBubbleType2["color"] = "color";
  ProcessBubbleType2["opacity"] = "opacity";
  ProcessBubbleType2["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));

// node_modules/@tsparticles/interaction-external-bubble/browser/Utils.js
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
  if (modeValue >= optionsValue) {
    const value = particleValue + (modeValue - optionsValue) * ratio;
    return clamp(value, particleValue, modeValue);
  } else if (modeValue < optionsValue) {
    const value = particleValue - (optionsValue - modeValue) * ratio;
    return clamp(value, modeValue, particleValue);
  }
  return void 0;
}

// node_modules/@tsparticles/interaction-external-bubble/browser/Bubbler.js
var bubbleMode = "bubble";
var minDistance2 = 0;
var defaultClickTime = 0;
var defaultOpacity2 = 1;
var ratioOffset = 1;
var defaultBubbleValue = 0;
var minRatio = 0;
var defaultRatio2 = 1;
var Bubbler = class extends ExternalInteractorBase {
  handleClickMode;
  #maxDistance;
  #modifiers = /* @__PURE__ */ new WeakMap();
  #pluginManager;
  constructor(pluginManager, container) {
    super(container);
    this.#pluginManager = pluginManager;
    this.#maxDistance = 0;
    container.bubble ??= {};
    this.handleClickMode = (mode) => {
      if (mode !== bubbleMode) {
        return;
      }
      container.bubble ??= {};
      container.bubble.clicking = true;
    };
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear(particle, _delta, force) {
    const mod = this.#modifiers.get(particle);
    if (mod?.inRange && !force) {
      return;
    }
    particle.removeModifier(bubbleMode);
    this.#modifiers.delete(particle);
  }
  getOrCreateModifier(particle) {
    let mod = this.#modifiers.get(particle);
    if (!mod) {
      mod = new BubbleModifier();
      this.#modifiers.set(particle, mod);
      particle.addModifier(mod);
    }
    return mod;
  }
  init() {
    const container = this.container, bubble = container.actualOptions.interactivity?.modes.bubble;
    if (!bubble) {
      return;
    }
    this.#maxDistance = bubble.distance;
    container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
    if (bubble.size !== void 0) {
      container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
    }
  }
  interact(interactivityData, delta) {
    const options = this.container.actualOptions, events = options.interactivity?.events;
    if (!events) {
      return;
    }
    const onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
    if (hoverEnabled && isInArray(bubbleMode, hoverMode)) {
      this.#hoverBubble(interactivityData);
    } else if (clickEnabled && isInArray(bubbleMode, clickMode)) {
      this.#clickBubble(interactivityData);
    } else {
      divModeExecute(bubbleMode, divs, (selector, div) => {
        this.#singleSelectorHover(interactivityData, delta, selector, div);
      });
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    if (!events) {
      return false;
    }
    const {
      onClick,
      onDiv,
      onHover
    } = events, divBubble = isDivModeEnabled(bubbleMode, onDiv);
    if (!(divBubble || onHover.enable && !!mouse.position || onClick.enable && mouse.clickPosition)) {
      return false;
    }
    return isInArray(bubbleMode, onHover.mode) || isInArray(bubbleMode, onClick.mode) || divBubble;
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "bubble", Bubble, ...sources);
  }
  reset(_interactivityData, particle) {
    const mod = this.#modifiers.get(particle);
    if (mod) {
      mod.enabled = false;
      mod.inRange = false;
    }
  }
  #clickBubble(interactivityData) {
    const container = this.container, options = container.actualOptions, mouseClickPos = interactivityData.mouse.clickPosition, bubbleOptions = options.interactivity?.modes.bubble;
    if (!bubbleOptions || !mouseClickPos) {
      return;
    }
    container.bubble ??= {};
    const distance = container.retina.bubbleModeDistance;
    if (!distance || distance < minDistance2) {
      return;
    }
    const query = container.particles.grid.queryCircle(mouseClickPos, distance, (p) => this.isEnabled(interactivityData, p)), {
      bubble
    } = container;
    for (const particle of query) {
      if (!bubble.clicking) {
        continue;
      }
      const mod = this.getOrCreateModifier(particle);
      mod.enabled = !bubble.durationEnd;
      mod.inRange = !bubble.durationEnd;
      const pos = particle.getPosition(), distMouse = getDistance(pos, mouseClickPos), timeSpent = (performance.now() - (interactivityData.mouse.clickTime ?? defaultClickTime)) / millisecondsToSeconds;
      if (timeSpent > bubbleOptions.duration) {
        bubble.durationEnd = true;
      }
      if (timeSpent > bubbleOptions.duration * double) {
        bubble.clicking = false;
        bubble.durationEnd = false;
      }
      const sizeData = {
        bubbleObj: {
          optValue: container.retina.bubbleModeSize,
          value: mod.radius
        },
        particlesObj: {
          optValue: particle.size.max,
          value: particle.size.value
        },
        type: ProcessBubbleType.size
      };
      this.#process(particle, distMouse, timeSpent, sizeData);
      const opacityData = {
        bubbleObj: {
          optValue: bubbleOptions.opacity,
          value: mod.opacity
        },
        particlesObj: {
          optValue: particle.opacity?.max ?? defaultOpacity2,
          value: particle.opacity?.value ?? defaultOpacity2
        },
        type: ProcessBubbleType.opacity
      };
      this.#process(particle, distMouse, timeSpent, opacityData);
      if (!bubble.durationEnd && distMouse <= distance) {
        this.#hoverBubbleColor(particle, distMouse);
      } else {
        mod.fillColor = void 0;
        mod.strokeColor = void 0;
      }
    }
  }
  #hoverBubble(interactivityData) {
    const container = this.container, mousePos = interactivityData.mouse.position, distance = container.retina.bubbleModeDistance;
    if (!distance || distance < minDistance2 || !mousePos) {
      return;
    }
    const query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
    for (const particle of query) {
      const mod = this.getOrCreateModifier(particle);
      mod.enabled = true;
      mod.inRange = true;
      const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos), ratio = ratioOffset - pointDistance / distance;
      if (pointDistance <= distance) {
        if (ratio >= minRatio && interactivityData.status === mouseMoveEvent) {
          this.#hoverBubbleSize(particle, ratio);
          this.#hoverBubbleOpacity(particle, ratio);
          this.#hoverBubbleColor(particle, ratio);
        }
      } else {
        this.reset(interactivityData, particle);
      }
      if (interactivityData.status === mouseLeaveEvent) {
        this.reset(interactivityData, particle);
      }
    }
  }
  #hoverBubbleColor(particle, ratio, divBubble) {
    const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity?.modes.bubble, mod = this.getOrCreateModifier(particle);
    if (!bubbleOptions) {
      return;
    }
    if (!mod.finalColor) {
      const modeColor = bubbleOptions.color;
      if (!modeColor) {
        return;
      }
      const bubbleColor = itemFromSingleOrMultiple(modeColor);
      mod.finalColor = rangeColorToHsl(this.#pluginManager, bubbleColor);
    }
    if (!mod.finalColor) {
      return;
    }
    if (bubbleOptions.mix) {
      mod.fillColor = void 0;
      mod.strokeColor = void 0;
      const pColor = particle.getFillColor();
      if (pColor) {
        const mixedColor = rgbToHsl(colorMix(pColor, mod.finalColor, ratioOffset - ratio, ratio));
        mod.fillColor = mixedColor;
        mod.strokeColor = mixedColor;
      } else {
        mod.fillColor = mod.finalColor;
        mod.strokeColor = mod.finalColor;
      }
    } else {
      mod.fillColor = mod.finalColor;
      mod.strokeColor = mod.finalColor;
    }
  }
  #hoverBubbleOpacity(particle, ratio, divBubble) {
    const container = this.container, options = container.actualOptions, modeOpacity = divBubble?.opacity ?? options.interactivity?.modes.bubble?.opacity;
    if (!modeOpacity) {
      return;
    }
    const pOpacity = particle.opacity?.value ?? defaultOpacity2, opacity = calculateBubbleValue(pOpacity, modeOpacity, particle.opacity?.max ?? defaultOpacity2, ratio);
    if (opacity !== void 0) {
      const mod = this.getOrCreateModifier(particle);
      mod.opacity = opacity;
    }
  }
  #hoverBubbleSize(particle, ratio, divBubble) {
    const container = this.container, modeSize = divBubble?.size ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
    if (modeSize === void 0) {
      return;
    }
    const pSize = particle.size.value, size = calculateBubbleValue(pSize, modeSize, particle.size.max, ratio);
    if (size !== void 0) {
      const mod = this.getOrCreateModifier(particle);
      mod.radius = size;
    }
  }
  #process(particle, distMouse, timeSpent, data) {
    const container = this.container, bubbleParam = data.bubbleObj.optValue, options = container.actualOptions, bubbleOptions = options.interactivity?.modes.bubble;
    if (!bubbleOptions || bubbleParam === void 0) {
      return;
    }
    const bubbleDuration = bubbleOptions.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value ?? defaultBubbleValue, type = data.type;
    if (!bubbleDistance || bubbleDistance < minDistance2 || bubbleParam === particlesParam) {
      return;
    }
    container.bubble ??= {};
    const mod = this.getOrCreateModifier(particle);
    if (container.bubble.durationEnd) {
      if (pObjBubble) {
        if (type === ProcessBubbleType.size) {
          mod.radius = void 0;
        }
        if (type === ProcessBubbleType.opacity) {
          mod.opacity = void 0;
        }
      }
    } else {
      if (distMouse <= bubbleDistance) {
        const obj = pObjBubble ?? pObj;
        if (obj !== bubbleParam) {
          const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
          if (type === ProcessBubbleType.size) {
            mod.radius = value;
          }
          if (type === ProcessBubbleType.opacity) {
            mod.opacity = value;
          }
        }
      } else {
        if (type === ProcessBubbleType.size) {
          mod.radius = void 0;
        }
        if (type === ProcessBubbleType.opacity) {
          mod.opacity = void 0;
        }
      }
    }
  }
  #singleSelectorHover(interactivityData, delta, selector, div) {
    const container = this.container, selectors = safeDocument().querySelectorAll(selector), bubble = container.actualOptions.interactivity?.modes.bubble;
    if (!bubble || !selectors.length) {
      return;
    }
    selectors.forEach((item) => {
      const elem = item, pxRatio = container.retina.pixelRatio, pos = {
        x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
      }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.grid.query(area, (p) => this.isEnabled(interactivityData, p));
      for (const particle of query) {
        if (!area.contains(particle.getPosition())) {
          continue;
        }
        const mod = this.getOrCreateModifier(particle);
        mod.enabled = true;
        mod.inRange = true;
        const divs = bubble.divs, divBubble = divMode(divs, elem);
        if (!mod.div || mod.div !== elem) {
          this.clear(particle, delta, true);
          mod.div = elem;
        }
        this.#hoverBubbleSize(particle, defaultRatio2, divBubble);
        this.#hoverBubbleOpacity(particle, defaultRatio2, divBubble);
        this.#hoverBubbleColor(particle, defaultRatio2, divBubble);
      }
    });
  }
};

// node_modules/@tsparticles/interaction-external-bubble/browser/index.js
function loadExternalBubbleInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalBubble", (container) => {
        return Promise.resolve(new Bubbler(e.pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/ConnectLinks.js
var ConnectLinks = class {
  opacity = 0.5;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadRangeProperty(this, "opacity", data.opacity);
  }
};

// node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/Connect.js
var Connect = class {
  distance = 80;
  links = new ConnectLinks();
  radius = 60;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "distance", data.distance);
    this.links.load(data.links);
    loadProperty(this, "radius", data.radius);
  }
};

// node_modules/@tsparticles/interaction-external-connect/browser/Utils.js
var gradientMin = 0;
var gradientMax = 1;
var defaultLinksWidth = 0;
function gradient(container, context, p1, p2, opacity) {
  const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
  if (!color1 || !color2) {
    return;
  }
  const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
  grad.addColorStop(gradientMin, getStyleFromHsl(color1, container.hdr, opacity));
  grad.addColorStop(clamp(gradStop, gradientMin, gradientMax), getStyleFromRgb(midRgb, container.hdr, opacity));
  grad.addColorStop(gradientMax, getStyleFromHsl(color2, container.hdr, opacity));
  return grad;
}
function drawConnectLine(context, width, lineStyle2, begin, end) {
  drawLine(context, begin, end);
  context.lineWidth = width;
  context.strokeStyle = lineStyle2;
  context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
  const options = container.actualOptions, connectOptions = options.interactivity?.modes.connect;
  if (!connectOptions) {
    return;
  }
  return gradient(container, ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
  container.canvas.render.draw((ctx) => {
    const ls = lineStyle(container, ctx, p1, p2);
    if (!ls) {
      return;
    }
    const pos1 = p1.getPosition(), pos2 = p2.getPosition();
    drawConnectLine(ctx, p1.retina.linksWidth ?? defaultLinksWidth, ls, pos1, pos2);
  });
}

// node_modules/@tsparticles/interaction-external-connect/browser/Connector.js
var connectMode = "connect";
var minDistance3 = 0;
var Connector = class extends ExternalInteractorBase {
  #maxDistance;
  constructor(container) {
    super(container);
    this.#maxDistance = 0;
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
    const container = this.container, connect = container.actualOptions.interactivity?.modes.connect;
    if (!connect) {
      return;
    }
    this.#maxDistance = connect.distance;
    container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
    container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
  }
  interact(interactivityData) {
    const container = this.container, options = container.actualOptions;
    if (options.interactivity?.events.onHover.enable && interactivityData.status === "pointermove") {
      const mousePos = interactivityData.mouse.position, {
        connectModeDistance,
        connectModeRadius
      } = container.retina;
      if (!connectModeDistance || connectModeDistance < minDistance3 || !connectModeRadius || connectModeRadius < minDistance3 || !mousePos) {
        return;
      }
      const distance = Math.abs(connectModeRadius), query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
      query.forEach((p1, i) => {
        const pos1 = p1.getPosition(), indexOffset = 1;
        for (const p2 of query.slice(i + indexOffset)) {
          const pos2 = p2.getPosition(), distMax = Math.abs(connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
          if (xDiff < distMax && yDiff < distMax) {
            drawConnection(container, p1, p2);
          }
        }
      });
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
    if (!(events?.onHover.enable && mouse.position)) {
      return false;
    }
    return isInArray(connectMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "connect", Connect, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-connect/browser/index.js
function loadExternalConnectInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalConnect", (container) => {
        return Promise.resolve(new Connector(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-destroy/browser/Utils.js
var toleranceFactor2 = 10;
function processDestroy(container, area) {
  const query = container.particles.grid.query(area);
  for (const particle of query) {
    particle.destroy();
  }
}
function singleSelectorDestroy(container, selector, div) {
  const query = safeDocument().querySelectorAll(selector);
  if (!query.length) {
    return;
  }
  query.forEach((item) => {
    const elem = item, pxRatio = container.retina.pixelRatio, pos = {
      x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
      y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
    }, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor2 * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double, elem.offsetHeight * pxRatio + tolerance * double);
    processDestroy(container, area);
  });
}
function divDestroy(container, divs, destroyMode2) {
  divModeExecute(destroyMode2, divs, (selector, div) => {
    singleSelectorDestroy(container, selector, div);
  });
}
function mouseDestroy(container, interactivityData) {
  const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor2 * pxRatio, mousePos = interactivityData.mouse.position, radius = container.retina.destroyModeDistance;
  if (!radius || radius < minRadius || !mousePos) {
    return;
  }
  processDestroy(container, new Circle(mousePos.x, mousePos.y, radius + tolerance));
}

// node_modules/@tsparticles/interaction-external-destroy/browser/Options/Classes/Destroy.js
var Destroy2 = class {
  distance = 200;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "distance", data.distance);
  }
};

// node_modules/@tsparticles/interaction-external-destroy/browser/Destroyer.js
var destroyMode = "destroy";
var Destroyer = class extends ExternalInteractorBase {
  #maxDistance;
  constructor(container) {
    super(container);
    this.#maxDistance = 0;
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
    const container = this.container, destroy2 = container.actualOptions.interactivity?.modes.destroy;
    if (!destroy2) {
      return;
    }
    this.#maxDistance = destroy2.distance;
    container.retina.destroyModeDistance = destroy2.distance * container.retina.pixelRatio;
  }
  interact(interactivityData) {
    const container = this.container, options = container.actualOptions, events = options.interactivity?.events, mouseMoveStatus = interactivityData.status === mouseMoveEvent;
    if (!events) {
      return;
    }
    const hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray(destroyMode, hoverMode)) {
      mouseDestroy(this.container, interactivityData);
    } else {
      divDestroy(this.container, divs, destroyMode);
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    if (!events) {
      return false;
    }
    const divs = events.onDiv;
    return !!mouse.position && events.onHover.enable && isInArray(destroyMode, events.onHover.mode) || isDivModeEnabled(destroyMode, divs);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "destroy", Destroy2, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-destroy/browser/index.js
function loadExternalDestroyInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalDestroy", (container) => __async(this, null, function* () {
        return Promise.resolve(new Destroyer(container));
      }));
    });
  });
}

// node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/GrabLinks.js
var GrabLinks = class {
  blink = false;
  color;
  consent = false;
  opacity = 1;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "blink", data.blink);
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    loadProperty(this, "consent", data.consent);
    loadRangeProperty(this, "opacity", data.opacity);
  }
};

// node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/Grab.js
var Grab = class {
  distance = 100;
  links = new GrabLinks();
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "distance", data.distance);
    this.links.load(data.links);
  }
};

// node_modules/@tsparticles/interaction-external-grab/browser/Utils.js
var defaultWidth = 0;
function drawGrabLine(context, width, begin, end, colorLine, opacity, hdr = false) {
  drawLine(context, begin, end);
  context.strokeStyle = getStyleFromRgb(colorLine, hdr, opacity);
  context.lineWidth = width;
  context.stroke();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
  container.canvas.render.draw((ctx) => {
    const beginPos = particle.getPosition();
    drawGrabLine(ctx, particle.retina.linksWidth ?? defaultWidth, beginPos, mousePos, lineColor, opacity, container.hdr);
  });
}

// node_modules/@tsparticles/interaction-external-grab/browser/Grabber.js
var grabMode = "grab";
var minDistance4 = 0;
var minOpacity = 0;
var Grabber = class extends ExternalInteractorBase {
  #maxDistance;
  #pluginManager;
  constructor(pluginManager, container) {
    super(container);
    this.#pluginManager = pluginManager;
    this.#maxDistance = 0;
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
    const container = this.container, grab = container.actualOptions.interactivity?.modes.grab;
    if (!grab) {
      return;
    }
    this.#maxDistance = grab.distance;
    container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
  }
  interact(interactivityData) {
    const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
    if (!interactivity?.modes.grab || !interactivity.events.onHover.enable || interactivityData.status !== mouseMoveEvent) {
      return;
    }
    const mousePos = interactivityData.mouse.position;
    if (!mousePos) {
      return;
    }
    const distance = container.retina.grabModeDistance;
    if (!distance || distance < minDistance4) {
      return;
    }
    const query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
    for (const particle of query) {
      const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos);
      if (pointDistance > distance) {
        continue;
      }
      const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
      if (opacityLine <= minOpacity) {
        continue;
      }
      const optColor = grabLineOptions.color ?? particle.options.links?.color;
      if (!container.particles.grabLineColor && optColor) {
        const linksOptions = interactivity.modes.grab.links;
        container.particles.grabLineColor = getLinkRandomColor(this.#pluginManager, optColor, linksOptions.blink, linksOptions.consent);
      }
      const colorLine = getLinkColor(particle, void 0, container.particles.grabLineColor);
      if (!colorLine) {
        continue;
      }
      drawGrab(container, particle, colorLine, opacityLine, mousePos);
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
    return !!events?.onHover.enable && !!mouse.position && isInArray(grabMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "grab", Grab, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-grab/browser/index.js
function loadExternalGrabInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalGrab", (container) => {
        return Promise.resolve(new Grabber(e.pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-parallax/browser/Options/Classes/Parallax.js
var Parallax = class {
  force = 2;
  smooth = 10;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "force", data.force);
    loadProperty(this, "smooth", data.smooth);
  }
};

// node_modules/@tsparticles/interaction-external-parallax/browser/Parallaxer.js
var parallaxMode = "parallax";
var Parallaxer = class extends ExternalInteractorBase {
  maxDistance = 0;
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
  }
  interact(interactivityData) {
    for (const particle of this.container.particles.filter((p) => this.isEnabled(interactivityData, p))) {
      this.#parallaxInteract(interactivityData, particle);
    }
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
    return !!events?.onHover.enable && !!mouse.position && isInArray(parallaxMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "parallax", Parallax, ...sources);
  }
  reset() {
  }
  #parallaxInteract(interactivityData, particle) {
    if (!this.isEnabled(interactivityData, particle)) {
      return;
    }
    const container = this.container, options = container.actualOptions, parallaxOptions = options.interactivity?.modes.parallax;
    if (!parallaxOptions) {
      return;
    }
    const parallaxForce = parallaxOptions.force, mousePos = interactivityData.mouse.position;
    if (!mousePos) {
      return;
    }
    const canvasSize = container.canvas.size, canvasCenter = {
      x: canvasSize.width * half,
      y: canvasSize.height * half
    }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
      x: (mousePos.x - canvasCenter.x) * factor,
      y: (mousePos.y - canvasCenter.y) * factor
    }, {
      offset
    } = particle;
    offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
    offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
  }
};

// node_modules/@tsparticles/interaction-external-parallax/browser/index.js
function loadExternalParallaxInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalParallax", (container) => {
        return Promise.resolve(new Parallaxer(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-pause/browser/Pauser.js
var pauseMode = "pause";
var Pauser = class extends ExternalInteractorBase {
  handleClickMode;
  maxDistance = 0;
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== pauseMode) {
        return;
      }
      const container2 = this.container;
      if (container2.animationStatus) {
        container2.pause();
      } else {
        container2.play();
      }
    };
  }
  clear() {
  }
  init() {
  }
  interact() {
  }
  isEnabled(_interactivityData, particle) {
    const container = this.container, options = container.actualOptions, events = (particle?.interactivity ?? options.interactivity)?.events;
    return !!events && isInArray(pauseMode, events.onClick.mode);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-pause/browser/index.js
function loadExternalPauseInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalPause", (container) => {
        return Promise.resolve(new Pauser(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-push/browser/Options/Classes/Push.js
var Push = class {
  default = true;
  groups = [];
  particles;
  quantity = 4;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "default", data.default);
    if (data.groups !== void 0) {
      this.groups = data.groups.map((t) => t);
    }
    if (!this.groups.length) {
      this.default = true;
    }
    loadRangeProperty(this, "quantity", data.quantity);
    this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
      return deepExtend({}, particles);
    });
  }
};

// node_modules/@tsparticles/interaction-external-push/browser/Pusher.js
var pushMode = "push";
var minQuantity = 0;
var Pusher = class extends ExternalInteractorBase {
  handleClickMode;
  maxDistance = 0;
  constructor(container) {
    super(container);
    this.handleClickMode = (mode, interactivityData) => {
      if (mode !== pushMode) {
        return;
      }
      const container2 = this.container, options = container2.actualOptions, pushOptions = options.interactivity?.modes.push;
      if (!pushOptions) {
        return;
      }
      const quantity = getRangeValue(pushOptions.quantity);
      if (quantity <= minQuantity) {
        return;
      }
      const group = itemFromArray([void 0, ...pushOptions.groups]), groupOptions = group !== void 0 ? container2.actualOptions.particles.groups[group] : void 0, particlesOptions = itemFromSingleOrMultiple(pushOptions.particles), overrideOptions = deepExtend(groupOptions, particlesOptions);
      container2.particles.push(quantity, interactivityData.mouse.position, overrideOptions, group);
    };
  }
  clear() {
  }
  init() {
  }
  interact() {
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    return !!events && mouse.clicking && mouse.inside && !!mouse.position && isInArray(pushMode, events.onClick.mode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "push", Push, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-push/browser/index.js
function loadExternalPushInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalPush", (container) => {
        return Promise.resolve(new Pusher(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-remove/browser/Options/Classes/Remove.js
var Remove = class {
  quantity = 2;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadRangeProperty(this, "quantity", data.quantity);
  }
};

// node_modules/@tsparticles/interaction-external-remove/browser/Remover.js
var removeMode = "remove";
var Remover = class extends ExternalInteractorBase {
  handleClickMode;
  maxDistance = 0;
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      const container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity?.modes.remove || mode !== removeMode) {
        return;
      }
      const removeNb = getRangeValue(options.interactivity.modes.remove.quantity);
      for (let i = 0; i < removeNb; i++) {
        container2.particles.get(i)?.destroy();
      }
    };
  }
  clear() {
  }
  init() {
  }
  interact() {
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    return !!events && mouse.clicking && mouse.inside && !!mouse.position && isInArray(removeMode, events.onClick.mode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "remove", Remove, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-external-remove/browser/index.js
function loadExternalRemoveInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalRemove", (container) => {
        return Promise.resolve(new Remover(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseBase.js
var RepulseBase = class {
  distance = 200;
  duration = 0.4;
  easing = "ease-out-quad";
  factor = 100;
  maxSpeed = 50;
  restore;
  speed = 1;
  constructor() {
    this.restore = {
      enable: false,
      delay: 0,
      speed: 0.08,
      follow: true
    };
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "distance", data.distance);
    loadProperty(this, "duration", data.duration);
    loadProperty(this, "easing", data.easing);
    loadProperty(this, "factor", data.factor);
    loadProperty(this, "speed", data.speed);
    loadProperty(this, "maxSpeed", data.maxSpeed);
    if (data.restore !== void 0) {
      this.restore.enable = data.restore.enable ?? this.restore.enable;
      this.restore.delay = data.restore.delay ?? this.restore.delay;
      this.restore.speed = data.restore.speed ?? this.restore.speed;
      this.restore.follow = data.restore.follow ?? this.restore.follow;
    }
  }
};

// node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseDiv.js
var RepulseDiv = class extends RepulseBase {
  selectors = [];
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "selectors", data.selectors);
  }
};

// node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/Repulse.js
var Repulse = class extends RepulseBase {
  divs;
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
      const tmp = new RepulseDiv();
      tmp.load(div);
      return tmp;
    });
  }
};

// node_modules/@tsparticles/interaction-external-repulse/browser/Repulser.js
var repulseMode = "repulse";
var minDistance5 = 0;
var repulseRadiusFactor = 6;
var repulseRadiusPower = 3;
var squarePower = 2;
var minRadius3 = 0;
var minSpeed = 0;
var easingOffset = 1;
var minRestoreSpeed2 = 1e-3;
var maxRestoreSpeed2 = 1;
var restoreEpsilon2 = 0.5;
var Repulser = class extends ExternalInteractorBase {
  handleClickMode;
  #clickVec;
  #interactedThisFrame;
  #maxDistance;
  #normVec;
  #pluginManager;
  #restoreData;
  constructor(pluginManager, container) {
    super(container);
    this.#pluginManager = pluginManager;
    this.#maxDistance = 0;
    this.#normVec = Vector.origin;
    this.#interactedThisFrame = /* @__PURE__ */ new Set();
    this.#clickVec = Vector.origin;
    this.#restoreData = /* @__PURE__ */ new Map();
    container.repulse ??= {
      particles: []
    };
    this.handleClickMode = (mode, interactivityData) => {
      const options = this.container.actualOptions, repulseOpts = options.interactivity?.modes.repulse;
      if (!repulseOpts || mode !== repulseMode) {
        return;
      }
      container.repulse ??= {
        particles: []
      };
      const repulse = container.repulse;
      repulse.clicking = true;
      repulse.count = 0;
      for (const particle of container.repulse.particles) {
        if (!this.isEnabled(interactivityData, particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      repulse.particles = [];
      repulse.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        repulse.clicking = false;
      }, repulseOpts.duration * millisecondsToSeconds);
    };
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
    const container = this.container, repulse = container.actualOptions.interactivity?.modes.repulse;
    if (!repulse) {
      return;
    }
    this.#maxDistance = repulse.distance;
    container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
  }
  interact(interactivityData) {
    this.#interactedThisFrame.clear();
    const container = this.container, options = container.actualOptions, mouseMoveStatus = interactivityData.status === mouseMoveEvent, events = options.interactivity?.events;
    if (!events) {
      return;
    }
    const hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray(repulseMode, hoverMode)) {
      this.#hoverRepulse(interactivityData);
    } else if (clickEnabled && isInArray(repulseMode, clickMode)) {
      this.#clickRepulse(interactivityData);
    } else {
      divModeExecute(repulseMode, divs, (selector, div) => {
        this.#singleSelectorRepulse(interactivityData, selector, div);
      });
    }
    this.#restoreParticles();
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
    if (!events) {
      return false;
    }
    const divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = isDivModeEnabled(repulseMode, divs);
    if (!(divRepulse || hover.enable && !!mouse.position || click.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = hover.mode, clickMode = click.mode;
    return isInArray(repulseMode, hoverMode) || isInArray(repulseMode, clickMode) || divRepulse;
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "repulse", Repulse, ...sources);
  }
  reset() {
  }
  #clickRepulse(interactivityData) {
    const container = this.container, repulseOptions = container.actualOptions.interactivity?.modes.repulse;
    if (!repulseOptions) {
      return;
    }
    const repulse = container.repulse ?? {
      particles: []
    };
    if (!repulse.finish) {
      repulse.count ??= 0;
      repulse.count++;
      if (repulse.count === container.particles.count) {
        repulse.finish = true;
      }
    }
    if (repulse.clicking) {
      const repulseDistance = container.retina.repulseModeDistance;
      if (!repulseDistance || repulseDistance < minDistance5) {
        return;
      }
      const repulseRadius = Math.pow(repulseDistance / repulseRadiusFactor, repulseRadiusPower), mouseClickPos = interactivityData.mouse.clickPosition;
      if (mouseClickPos === void 0) {
        return;
      }
      const range = new Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.grid.query(range, (p) => this.isEnabled(interactivityData, p));
      for (const particle of query) {
        const {
          dx,
          dy,
          distance
        } = getDistances(mouseClickPos, particle.position), d = distance ** squarePower, velocity = repulseOptions.speed, force = -repulseRadius * velocity / d;
        if (d <= repulseRadius) {
          this.#trackInteractedParticle(particle);
          repulse.particles.push(particle);
          this.#clickVec.x = dx;
          this.#clickVec.y = dy;
          this.#clickVec.length = force;
          particle.velocity.setTo(this.#clickVec);
        }
      }
    } else if (repulse.clicking === false) {
      for (const particle of repulse.particles) {
        particle.velocity.setTo(particle.initialVelocity);
      }
      repulse.particles = [];
    }
  }
  #hoverRepulse(interactivityData) {
    const container = this.container, mousePos = interactivityData.mouse.position, repulseRadius = container.retina.repulseModeDistance;
    if (!repulseRadius || repulseRadius < minRadius3 || !mousePos) {
      return;
    }
    this.#processRepulse(interactivityData, mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
  }
  #processRepulse(interactivityData, position, repulseRadius, area, divRepulse) {
    const container = this.container, query = container.particles.grid.query(area, (p) => this.isEnabled(interactivityData, p)), repulseOptions = container.actualOptions.interactivity?.modes.repulse;
    if (!repulseOptions) {
      return;
    }
    const {
      easing,
      speed,
      factor,
      maxSpeed
    } = repulseOptions, easingFunc = this.#pluginManager.getEasing(easing), velocity = (divRepulse?.speed ?? speed) * factor;
    for (const particle of query) {
      const {
        dx,
        dy,
        distance
      } = getDistances(particle.position, position), repulseFactor = clamp(easingFunc(easingOffset - distance / repulseRadius) * velocity, minSpeed, maxSpeed);
      this.#normVec.x = !distance ? velocity : dx / distance * repulseFactor;
      this.#normVec.y = !distance ? velocity : dy / distance * repulseFactor;
      this.#trackInteractedParticle(particle);
      particle.position.addTo(this.#normVec);
    }
  }
  #restoreParticles() {
    const restore = this.container.actualOptions.interactivity?.modes.repulse?.restore;
    if (!restore?.enable || !this.#restoreData.size) {
      return;
    }
    const now = Date.now(), restoreDelay = restore.delay * millisecondsToSeconds, restoreSpeed = Math.max(minRestoreSpeed2, Math.min(maxRestoreSpeed2, restore.speed));
    for (const [particle, restoreData] of this.#restoreData) {
      if (this.#interactedThisFrame.has(particle)) {
        continue;
      }
      if (particle.destroyed) {
        this.#restoreData.delete(particle);
        continue;
      }
      const target = restoreData.target;
      if (now - restoreData.lastInteractionTime < restoreDelay) {
        continue;
      }
      if (restore.follow && particle.options.move.enable) {
        target.x += particle.velocity.x;
        target.y += particle.velocity.y;
        target.z += particle.velocity.z;
      }
      const dx = target.x - particle.position.x, dy = target.y - particle.position.y, dz = target.z - particle.position.z;
      particle.position.x += dx * restoreSpeed;
      particle.position.y += dy * restoreSpeed;
      particle.position.z += dz * restoreSpeed;
      if (Math.abs(dx) <= restoreEpsilon2 && Math.abs(dy) <= restoreEpsilon2) {
        particle.position.x = target.x;
        particle.position.y = target.y;
        particle.position.z = target.z;
        this.#restoreData.delete(particle);
        continue;
      }
    }
  }
  #singleSelectorRepulse(interactivityData, selector, div) {
    const container = this.container, repulse = container.actualOptions.interactivity?.modes.repulse;
    if (!repulse) {
      return;
    }
    const query = safeDocument().querySelectorAll(selector);
    if (!query.length) {
      return;
    }
    query.forEach((item) => {
      const elem = item, pxRatio = container.retina.pixelRatio, pos = {
        x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
      }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = divMode(divs, elem);
      this.#processRepulse(interactivityData, pos, repulseRadius, area, divRepulse);
    });
  }
  #trackInteractedParticle(particle) {
    this.#interactedThisFrame.add(particle);
    const restore = this.container.actualOptions.interactivity?.modes.repulse?.restore;
    if (!restore?.enable) {
      return;
    }
    const now = Date.now();
    let restoreData = this.#restoreData.get(particle);
    if (!restoreData) {
      restoreData = {
        target: particle.position.copy(),
        lastInteractionTime: now
      };
      this.#restoreData.set(particle, restoreData);
    }
    restoreData.lastInteractionTime = now;
    if (restore.follow && particle.options.move.enable) {
      restoreData.target.x += particle.velocity.x;
      restoreData.target.y += particle.velocity.y;
      restoreData.target.z += particle.velocity.z;
    }
  }
};

// node_modules/@tsparticles/interaction-external-repulse/browser/index.js
function loadExternalRepulseInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      const pluginManager = e.pluginManager;
      pluginManager.addInteractor?.("externalRepulse", (container) => {
        return Promise.resolve(new Repulser(pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-external-slow/browser/Options/Classes/Slow.js
var Slow = class {
  factor = 3;
  radius = 200;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "factor", data.factor);
    loadProperty(this, "radius", data.radius);
  }
};

// node_modules/@tsparticles/interaction-external-slow/browser/SlowModifier.js
var SlowModifier = class {
  enabled = false;
  id = "slow";
  priority = 100;
  speedFactor = 1;
};

// node_modules/@tsparticles/interaction-external-slow/browser/Slower.js
var slowMode = "slow";
var minRadius4 = 0;
var Slower = class extends ExternalInteractorBase {
  #maxDistance;
  #modifiers = /* @__PURE__ */ new WeakMap();
  constructor(container) {
    super(container);
    this.#maxDistance = 0;
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear(particle, _delta, force) {
    const mod = this.#modifiers.get(particle);
    if (mod?.enabled && !force) {
      return;
    }
    particle.removeModifier(slowMode);
    this.#modifiers.delete(particle);
  }
  getOrCreateModifier(particle) {
    let mod = this.#modifiers.get(particle);
    if (!mod) {
      mod = new SlowModifier();
      this.#modifiers.set(particle, mod);
      particle.addModifier(mod);
    }
    return mod;
  }
  init() {
    const container = this.container, slow = container.actualOptions.interactivity?.modes.slow;
    if (!slow) {
      return;
    }
    this.#maxDistance = slow.radius;
    container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
  }
  interact() {
  }
  isEnabled(interactivityData, particle) {
    const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
    return !!events?.onHover.enable && !!mouse.position && isInArray(slowMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    loadOptionProperty(options, "slow", Slow, ...sources);
  }
  reset(interactivityData, particle) {
    const mod = this.#modifiers.get(particle);
    if (mod) {
      mod.enabled = false;
    }
    const container = this.container, options = container.actualOptions, mousePos = interactivityData.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity?.modes.slow;
    if (!slowOptions || !radius || radius < minRadius4 || !mousePos) {
      return;
    }
    const particlePos = particle.getPosition(), dist = getDistance(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor;
    if (dist > radius) {
      return;
    }
    const activeMod = this.getOrCreateModifier(particle);
    activeMod.enabled = true;
    activeMod.speedFactor = proximityFactor / slowFactor;
  }
};

// node_modules/@tsparticles/interaction-external-slow/browser/index.js
function loadExternalSlowInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalSlow", (container) => {
        return Promise.resolve(new Slower(container));
      });
    });
  });
}

// node_modules/@tsparticles/shape-image/browser/Utils.js
var shapeTypes = ["image", "images"];
var stringStart = 0;
var defaultOpacity3 = 1;
var currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity, hdr = false) {
  const {
    svgData
  } = imageShape;
  if (!svgData) {
    return "";
  }
  const colorStyle = getStyleFromHsl(color, hdr, opacity);
  if (svgData.includes("fill")) {
    return svgData.replaceAll(currentColorRegex, () => colorStyle);
  }
  const preFillIndex = svgData.indexOf(">");
  return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
function loadImage(image) {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      image.loading = true;
      const img = new Image();
      image.element = img;
      img.addEventListener("load", () => {
        image.loading = false;
        resolve();
      });
      img.addEventListener("error", () => {
        image.element = void 0;
        image.error = true;
        image.loading = false;
        getLogger().error(`Error loading image: ${image.source}`);
        resolve();
      });
      img.src = image.source;
    });
  });
}
function downloadSvgImage(image) {
  return __async(this, null, function* () {
    if (image.type !== "svg") {
      yield loadImage(image);
      return;
    }
    image.loading = true;
    const response = yield fetch(image.source);
    if (response.ok) {
      image.svgData = yield response.text();
    } else {
      getLogger().error("Image not found");
      image.error = true;
    }
    image.loading = false;
  });
}
function replaceImageColor(image, imageData, color, particle, hdr = false) {
  const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? defaultOpacity3, hdr), imageRes = {
    color,
    data: __spreadProps(__spreadValues({}, image), {
      svgData: svgColoredData
    }),
    loaded: false,
    ratio: imageData.width / imageData.height,
    replaceColor: imageData.replaceColor,
    source: imageData.src
  };
  return new Promise((resolve) => {
    const svg = new Blob([svgColoredData], {
      type: "image/svg+xml"
    }), url = URL.createObjectURL(svg), img = new Image();
    img.addEventListener("load", () => {
      imageRes.loaded = true;
      imageRes.element = img;
      resolve(imageRes);
      URL.revokeObjectURL(url);
    });
    const errorHandler = () => __async(this, null, function* () {
      URL.revokeObjectURL(url);
      const img2 = __spreadProps(__spreadValues({}, image), {
        error: false,
        loading: true
      });
      yield loadImage(img2);
      imageRes.loaded = true;
      imageRes.element = img2.element;
      resolve(imageRes);
    });
    img.addEventListener("error", () => void errorHandler());
    img.src = url;
  });
}

// node_modules/@tsparticles/shape-image/browser/ImageDrawer.js
var sides3 = 12;
var ImageDrawer = class {
  #container;
  #engine;
  constructor(engine, container) {
    this.#engine = engine;
    this.#container = container;
  }
  draw(data) {
    const {
      context,
      radius,
      particle,
      opacity
    } = data, image = particle.image, element = image?.element;
    if (!image) {
      return;
    }
    context.globalAlpha = opacity;
    if (element) {
      const ratio = image.ratio, pos = {
        x: -radius,
        y: -radius
      }, diameter = radius * double;
      context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
    }
    context.globalAlpha = defaultAlpha;
  }
  getSidesCount() {
    return sides3;
  }
  init(container) {
    return __async(this, null, function* () {
      const options = container.actualOptions;
      if (!options.preload || !this.#engine.loadImage) {
        return;
      }
      const promises = [];
      for (const imageData of options.preload) {
        promises.push(this.#engine.loadImage(container, imageData));
      }
      yield Promise.all(promises);
    });
  }
  loadShape(particle) {
    const container = this.#container;
    if (!particle.shape || !shapeTypes.includes(particle.shape)) {
      return;
    }
    const imageData = particle.shapeData;
    if (!imageData) {
      return;
    }
    const images = this.#engine.getImages?.(container), image = images?.find((t) => t.name === imageData.name || t.source === imageData.src);
    if (image) {
      return;
    }
    void this.#loadImageShape(container, imageData).then(() => {
      this.loadShape(particle);
    });
  }
  particleInit(container, particle) {
    if (particle.shape !== "image" && particle.shape !== "images") {
      return;
    }
    const images = this.#engine.getImages?.(container), imageData = particle.shapeData;
    if (!imageData) {
      return;
    }
    const color = particle.getFillColor(), image = images?.find((t) => t.name === imageData.name || t.source === imageData.src);
    if (!image) {
      return;
    }
    const replaceColor = imageData.replaceColor;
    if (image.loading) {
      setTimeout(() => {
        this.particleInit(container, particle);
      });
      return;
    }
    void (() => __async(this, null, function* () {
      let imageRes;
      if (image.svgData && color) {
        imageRes = yield replaceImageColor(image, imageData, color, particle, container.hdr);
      } else {
        imageRes = {
          color,
          data: image,
          element: image.element,
          loaded: true,
          ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? defaultRatio,
          replaceColor,
          source: imageData.src
        };
      }
      if (!imageRes.ratio) {
        imageRes.ratio = 1;
      }
      const close = imageData.close ?? particle.shapeClose, imageShape = {
        image: imageRes,
        close
      };
      particle.image = imageShape.image;
      particle.shapeClose = imageShape.close;
    }))();
  }
  #loadImageShape = (container, imageShape) => __async(this, null, function* () {
    if (!this.#engine.loadImage) {
      throw new Error(`Image shape not initialized`);
    }
    yield this.#engine.loadImage(container, {
      name: imageShape.name,
      replaceColor: imageShape.replaceColor,
      src: imageShape.src
    });
  });
};

// node_modules/@tsparticles/shape-image/browser/Options/Classes/Preload.js
var Preload = class {
  height;
  name;
  replaceColor;
  src = "";
  width;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "height", data.height);
    loadProperty(this, "name", data.name);
    loadProperty(this, "replaceColor", data.replaceColor);
    loadProperty(this, "src", data.src);
    loadProperty(this, "width", data.width);
  }
};

// node_modules/@tsparticles/shape-image/browser/ImagePreloader.js
var ImagePreloaderPlugin = class {
  id = "image-preloader";
  #engine;
  constructor(engine) {
    this.#engine = engine;
  }
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        ImagePreloaderInstance
      } = yield import("./chunk-URTOHFKF.js");
      return new ImagePreloaderInstance(this.#engine, container);
    });
  }
  loadOptions(_container, options, source) {
    if (!source?.preload) {
      return;
    }
    options.preload ??= [];
    const preloadOptions = options.preload;
    for (const item of source.preload) {
      const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
      if (existing) {
        existing.load(item);
      } else {
        const preload = new Preload();
        preload.load(item);
        preloadOptions.push(preload);
      }
    }
  }
  needsPlugin() {
    return true;
  }
};

// node_modules/@tsparticles/shape-image/browser/index.js
var extLength = 3;
function addLoadImageToEngine(engine) {
  engine.getImages ??= (container) => {
    engine.images ??= /* @__PURE__ */ new Map();
    let images = engine.images.get(container);
    if (!images) {
      images = [];
      engine.images.set(container, images);
    }
    return images;
  };
  engine.loadImage ??= (container, data) => __async(this, null, function* () {
    if (!engine.getImages) {
      throw new Error("No images collection found");
    }
    if (!data.name && !data.src) {
      throw new Error("No image source provided");
    }
    engine.images ??= /* @__PURE__ */ new Map();
    const containerImages = engine.getImages(container);
    if (containerImages.some((t) => t.name === data.name || t.source === data.src)) {
      return;
    }
    try {
      const image = {
        name: data.name ?? data.src,
        source: data.src,
        type: data.src.substring(data.src.length - extLength),
        error: false,
        loading: true,
        replaceColor: data.replaceColor,
        ratio: data.width && data.height ? data.width / data.height : void 0
      };
      containerImages.push(image);
      engine.images.set(container, containerImages);
      let imageFunc;
      if (data.replaceColor) {
        imageFunc = downloadSvgImage;
      } else {
        imageFunc = loadImage;
      }
      yield imageFunc(image);
    } catch {
      throw new Error(`${data.name ?? data.src} not found`);
    }
  });
}
function loadImageShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      addLoadImageToEngine(e);
      e.pluginManager.addPlugin(new ImagePreloaderPlugin(e));
      e.pluginManager.addShape(shapeTypes, (container) => Promise.resolve(new ImageDrawer(e, container)));
    });
  });
}

// node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDelay.js
var LifeDelay = class extends ValueWithRandom {
  sync = false;
  load(data) {
    if (isNull(data)) {
      return;
    }
    super.load(data);
    loadProperty(this, "sync", data.sync);
  }
};

// node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDuration.js
var LifeDuration = class extends ValueWithRandom {
  sync = false;
  load(data) {
    if (isNull(data)) {
      return;
    }
    super.load(data);
    loadProperty(this, "sync", data.sync);
  }
};

// node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js
var Life = class {
  count = 0;
  delay = new LifeDelay();
  duration = new LifeDuration();
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "count", data.count);
    this.delay.load(data.delay);
    this.duration.load(data.duration);
  }
};

// node_modules/@tsparticles/updater-life/browser/Utils.js
var noTime = 0;
var infiniteValue = -1;
var noLife = 0;
var minCanvasSize = 0;
function updateLife(particle, delta, canvasSize) {
  if (!particle.life) {
    return;
  }
  const life = particle.life;
  let justSpawned = false;
  if (particle.spawning) {
    life.delayTime += delta.value;
    if (life.delayTime >= particle.life.delay) {
      justSpawned = true;
      particle.spawning = false;
      life.delayTime = noTime;
      life.time = noTime;
    } else {
      return;
    }
  }
  if (life.duration === infiniteValue) {
    return;
  }
  if (justSpawned) {
    life.time = noTime;
  } else {
    life.time += delta.value;
  }
  if (life.time < life.duration) {
    return;
  }
  life.time = noTime;
  if (particle.life.count > noLife) {
    particle.life.count--;
  }
  if (particle.life.count === noLife) {
    particle.destroy();
    return;
  }
  const widthRange = setRangeValue(minCanvasSize, canvasSize.width), heightRange = setRangeValue(minCanvasSize, canvasSize.width);
  particle.position.x = randomInRangeValue(widthRange);
  particle.position.y = randomInRangeValue(heightRange);
  particle.spawning = true;
  life.delayTime = noTime;
  life.time = noTime;
  particle.reset();
  const lifeOptions = particle.options.life;
  if (lifeOptions) {
    life.delay = getRangeValue(lifeOptions.delay.value) * millisecondsToSeconds;
    life.duration = getRangeValue(lifeOptions.duration.value) * millisecondsToSeconds;
  }
}

// node_modules/@tsparticles/updater-life/browser/LifeUpdater.js
var noTime2 = 0;
var identity2 = 1;
var infiniteValue2 = -1;
var LifeUpdater = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  init(particle) {
    const container = this.#container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
    if (!lifeOptions) {
      return;
    }
    const delayFactor = lifeOptions.delay.sync ? identity2 : getRandom(), durationFactor = lifeOptions.duration.sync ? identity2 : getRandom();
    particle.life = {
      delay: container.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * delayFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime2,
      delayTime: noTime2,
      duration: container.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * durationFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime2,
      time: noTime2,
      count: lifeOptions.count
    };
    if (particle.life.duration <= noTime2) {
      particle.life.duration = infiniteValue2;
    }
    if (particle.life.count <= noTime2) {
      particle.life.count = infiniteValue2;
    }
    particle.spawning = particle.life.delay > noTime2;
  }
  isEnabled(particle) {
    return !particle.destroyed;
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "life", Life, ...sources);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.life) {
      return;
    }
    updateLife(particle, delta, this.#container.canvas.size);
  }
};

// node_modules/@tsparticles/updater-life/browser/index.js
function loadLifeUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("life", (container) => {
        return Promise.resolve(new LifeUpdater(container));
      });
    });
  });
}

// node_modules/@tsparticles/shape-line/browser/Utils.js
function drawLine2(data) {
  const {
    context,
    particle,
    radius
  } = data, shapeData = particle.shapeData, centerY = 0;
  context.moveTo(-radius, centerY);
  context.lineTo(radius, centerY);
  context.lineCap = shapeData?.cap ?? "butt";
}

// node_modules/@tsparticles/shape-line/browser/LineDrawer.js
var sides4 = 1;
var LineDrawer = class {
  draw(data) {
    drawLine2(data);
  }
  getSidesCount() {
    return sides4;
  }
};

// node_modules/@tsparticles/shape-line/browser/index.js
function loadLineShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["line"], () => Promise.resolve(new LineDrawer()));
    });
  });
}

// node_modules/@tsparticles/interaction-particles-attract/browser/Options/Classes/Attract.js
var Attract2 = class {
  distance = 200;
  enable = false;
  rotate;
  constructor() {
    this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadRangeProperty(this, "distance", data.distance);
    loadProperty(this, "enable", data.enable);
    if (data.rotate) {
      const rotateX = data.rotate.x;
      if (rotateX !== void 0) {
        this.rotate.x = rotateX;
      }
      const rotateY = data.rotate.y;
      if (rotateY !== void 0) {
        this.rotate.y = rotateY;
      }
    }
  }
};

// node_modules/@tsparticles/interaction-particles-attract/browser/Attractor.js
var attractFactor = 1e3;
var identity3 = 1;
var Attractor2 = class extends ParticlesInteractorBase {
  #maxDistance;
  constructor(container) {
    super(container);
    this.#maxDistance = 0;
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
  }
  interact(p1) {
    if (!p1.options.attract?.enable) {
      return;
    }
    const container = this.container;
    if (isNull(p1.attractDistance)) {
      const attractDistance = getRangeValue(p1.options.attract.distance);
      if (attractDistance > this.#maxDistance) {
        this.#maxDistance = attractDistance;
      }
      p1.attractDistance = attractDistance * container.retina.pixelRatio;
    }
    const distance = p1.attractDistance, pos1 = p1.getPosition(), query = container.particles.grid.queryCircle(pos1, distance);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.attract?.enable || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), {
        dx,
        dy
      } = getDistances(pos1, pos2), rotate = p1.options.attract.rotate, ax = dx / (rotate.x * attractFactor), ay = dy / (rotate.y * attractFactor), p1Factor = p2.size.value / p1.size.value, p2Factor = identity3 / p1Factor;
      p1.velocity.x -= ax * p1Factor;
      p1.velocity.y -= ay * p1Factor;
      p2.velocity.x += ax * p2Factor;
      p2.velocity.y += ay * p2Factor;
    }
  }
  isEnabled(particle) {
    return particle.options.attract?.enable ?? false;
  }
  loadParticlesOptions(options, ...sources) {
    loadOptionProperty(options, "attract", Attract2, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-particles-attract/browser/index.js
function loadParticlesAttractInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("particlesAttract", (container) => {
        return Promise.resolve(new Attractor2(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/CollisionMode.js
var CollisionMode;
(function(CollisionMode2) {
  CollisionMode2["absorb"] = "absorb";
  CollisionMode2["bounce"] = "bounce";
  CollisionMode2["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));

// node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/CollisionsAbsorb.js
var CollisionsAbsorb = class {
  speed = 2;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "speed", data.speed);
  }
};

// node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/CollisionsOverlap.js
var CollisionsOverlap = class {
  enable = true;
  retries = 0;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "retries", data.retries);
  }
};

// node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/Collisions.js
var Collisions = class {
  absorb = new CollisionsAbsorb();
  bounce = new ParticlesBounce();
  enable = false;
  maxSpeed = 50;
  mode = CollisionMode.bounce;
  overlap = new CollisionsOverlap();
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.absorb.load(data.absorb);
    this.bounce.load(data.bounce);
    loadProperty(this, "enable", data.enable);
    loadRangeProperty(this, "maxSpeed", data.maxSpeed);
    loadProperty(this, "mode", data.mode);
    this.overlap.load(data.overlap);
  }
};

// node_modules/@tsparticles/interaction-particles-collisions/browser/Absorb.js
var minAbsorbAmount = 0;
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
  if (!p1.options.collisions || !p2.options.collisions) {
    return;
  }
  const absorbSpeed = p1.options.collisions.absorb.speed, shrinkAmount = clamp(absorbSpeed * delta.factor, minAbsorbAmount, r2);
  p1.size.value = Math.sqrt(r1 * r1 + shrinkAmount * shrinkAmount);
  p2.size.value -= shrinkAmount;
  if (p2.size.value <= pixelRatio) {
    p2.size.value = 0;
    p2.destroy();
  }
}
function absorb(p1, p2, delta, pixelRatio) {
  const r1 = p1.getRadius(), r2 = p2.getRadius();
  if (!r1 && r2) {
    p1.destroy();
  } else if (r1 && !r2) {
    p2.destroy();
  } else if (r1 && r2) {
    if (r1 >= r2) {
      updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
    } else {
      updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
    }
  }
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/Bounce.js
var energyCorrectionMinRatio = 1e-6;
var energyDriftThreshold = 1e-4;
var correctionFactorNeutral = 1;
var fixBounceSpeed = (p) => {
  if (!p.options.collisions) {
    return;
  }
  p.collisionMaxSpeed ??= getRangeValue(p.options.collisions.maxSpeed);
  if (p.velocity.length > p.collisionMaxSpeed) {
    p.velocity.length = p.collisionMaxSpeed;
  }
};
function bounce(p1, p2) {
  const m1 = p1.getMass(), m2 = p2.getMass(), speed1Before = p1.velocity.length, speed2Before = p2.velocity.length, keBefore = m1 * speed1Before * speed1Before + m2 * speed2Before * speed2Before;
  circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
  const speed1After = p1.velocity.length, speed2After = p2.velocity.length, keAfter = m1 * speed1After * speed1After + m2 * speed2After * speed2After;
  if (keAfter > keBefore * energyCorrectionMinRatio) {
    const correctionFactor = Math.sqrt(keBefore / keAfter);
    if (Math.abs(correctionFactor - correctionFactorNeutral) > energyDriftThreshold) {
      p1.velocity.length = speed1After * correctionFactor;
      p2.velocity.length = speed2After * correctionFactor;
    }
  }
  fixBounceSpeed(p1);
  fixBounceSpeed(p2);
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/Destroy.js
function destroy(p1, p2) {
  if (!p1.unbreakable && !p2.unbreakable) {
    bounce(p1, p2);
  }
  const p1Radius = p1.getRadius(), p2Radius = p2.getRadius();
  if (!p1Radius && p2Radius) {
    p1.destroy();
  } else if (p1Radius && !p2Radius) {
    p2.destroy();
  } else if (p1Radius && p2Radius) {
    const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
    deleteP.destroy();
  }
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/ResolveCollision.js
function resolveCollision(p1, p2, delta, pixelRatio) {
  if (!p1.options.collisions || !p2.options.collisions) {
    return;
  }
  switch (p1.options.collisions.mode) {
    case CollisionMode.absorb: {
      absorb(p1, p2, delta, pixelRatio);
      break;
    }
    case CollisionMode.bounce: {
      bounce(p1, p2);
      break;
    }
    case CollisionMode.destroy: {
      destroy(p1, p2);
      break;
    }
    default:
      break;
  }
}

// node_modules/@tsparticles/interaction-particles-collisions/browser/Collider.js
var Collider = class extends ParticlesInteractorBase {
  maxDistance;
  constructor(container) {
    super(container);
    this.maxDistance = 0;
  }
  clear() {
  }
  init() {
  }
  interact(p1, _interactivityData, delta) {
    if (p1.destroyed || p1.spawning) {
      return;
    }
    const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.grid.queryCircle(pos1, radius1 * double);
    for (const p2 of query) {
      if (p1 === p2 || p1.id >= p2.id || !p1.options.collisions?.enable || !p2.options.collisions?.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), radius2 = p2.getRadius();
      if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
        continue;
      }
      const dist = getDistance(pos1, pos2), distP = radius1 + radius2;
      if (dist > distP) {
        continue;
      }
      resolveCollision(p1, p2, delta, container.retina.pixelRatio);
    }
  }
  isEnabled(particle) {
    return !!particle.options.collisions?.enable;
  }
  loadParticlesOptions(options, ...sources) {
    loadOptionProperty(options, "collisions", Collisions, ...sources);
  }
  reset() {
  }
};

// node_modules/@tsparticles/interaction-particles-collisions/browser/OverlapPlugin.js
var OverlapPlugin = class {
  id = "overlap";
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        OverlapPluginInstance
      } = yield import("./chunk-ZXIJ67TE.js");
      return new OverlapPluginInstance(container);
    });
  }
  loadOptions() {
  }
  needsPlugin() {
    return true;
  }
};

// node_modules/@tsparticles/interaction-particles-collisions/browser/index.js
function loadParticlesCollisionsInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addPlugin(new OverlapPlugin());
      e.pluginManager.addInteractor?.("particlesCollisions", (container) => {
        return Promise.resolve(new Collider(container));
      });
    });
  });
}

// node_modules/@tsparticles/interaction-particles-links/browser/CircleWarp.js
var CircleWarp = class extends Circle {
  #canvasSize;
  constructor(x, y, radius, canvasSize) {
    super(x, y, radius);
    this.#canvasSize = canvasSize;
  }
  contains(point) {
    if (super.contains(point)) return true;
    const {
      width,
      height
    } = this.#canvasSize, {
      x,
      y
    } = point;
    return super.contains({
      x: x - width,
      y
    }) || super.contains({
      x: x + width,
      y
    }) || super.contains({
      x,
      y: y - height
    }) || super.contains({
      x,
      y: y + height
    }) || super.contains({
      x: x - width,
      y: y - height
    }) || super.contains({
      x: x + width,
      y: y + height
    }) || super.contains({
      x: x - width,
      y: y + height
    }) || super.contains({
      x: x + width,
      y: y - height
    });
  }
  intersects(range) {
    if (super.intersects(range)) return true;
    const {
      width,
      height
    } = this.#canvasSize, pos = range.position, shifts = [{
      x: -width,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: 0,
      y: -height
    }, {
      x: 0,
      y: height
    }, {
      x: -width,
      y: -height
    }, {
      x: width,
      y: height
    }, {
      x: -width,
      y: height
    }, {
      x: width,
      y: -height
    }];
    for (const shift of shifts) {
      const shiftedPos = {
        x: pos.x + shift.x,
        y: pos.y + shift.y
      };
      let shiftedRange;
      if (range instanceof Circle) {
        shiftedRange = new Circle(shiftedPos.x, shiftedPos.y, range.radius);
      } else {
        const rect = range;
        shiftedRange = new Rectangle(shiftedPos.x, shiftedPos.y, rect.size.width, rect.size.height);
      }
      if (super.intersects(shiftedRange)) return true;
    }
    return false;
  }
};

// node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksShadow.js
var LinksShadow = class {
  blur = 5;
  color = new OptionsColor();
  enable = false;
  constructor() {
    this.color.value = "#000";
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "blur", data.blur);
    this.color = OptionsColor.create(this.color, data.color);
    loadProperty(this, "enable", data.enable);
  }
};

// node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksTriangle.js
var LinksTriangle = class {
  color;
  enable = false;
  frequency = 1;
  opacity;
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "frequency", data.frequency);
    loadProperty(this, "opacity", data.opacity);
  }
};

// node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/Links.js
var Links = class {
  blink = false;
  color = new OptionsColor();
  consent = false;
  distance = 100;
  enable = false;
  frequency = 1;
  id;
  opacity = 1;
  shadow = new LinksShadow();
  triangles = new LinksTriangle();
  warp = false;
  width = 1;
  constructor() {
    this.color.value = "#fff";
  }
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "id", data.id);
    loadProperty(this, "blink", data.blink);
    this.color = OptionsColor.create(this.color, data.color);
    loadProperty(this, "consent", data.consent);
    loadProperty(this, "distance", data.distance);
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "frequency", data.frequency);
    loadProperty(this, "opacity", data.opacity);
    this.shadow.load(data.shadow);
    this.triangles.load(data.triangles);
    loadProperty(this, "width", data.width);
    loadProperty(this, "warp", data.warp);
  }
};

// node_modules/@tsparticles/interaction-particles-links/browser/Linker.js
var opacityOffset = 1;
var minDistance6 = 0;
function getWarpDistance(pos1, pos2, canvasSize) {
  const {
    dx,
    dy
  } = getDistances(pos1, pos2), absDiffs = {
    x: Math.abs(dx),
    y: Math.abs(dy)
  }, warpDistances = {
    x: Math.min(absDiffs.x, canvasSize.width - absDiffs.x),
    y: Math.min(absDiffs.y, canvasSize.height - absDiffs.y)
  };
  return Math.hypot(warpDistances.x, warpDistances.y);
}
var Linker = class extends ParticlesInteractorBase {
  #maxDistance;
  #pluginManager;
  constructor(pluginManager, container) {
    super(container);
    this.#pluginManager = pluginManager;
    this.#maxDistance = 0;
  }
  get maxDistance() {
    return this.#maxDistance;
  }
  clear() {
  }
  init() {
    this.container.particles.linksColor = void 0;
    this.container.particles.linksColors = /* @__PURE__ */ new Map();
  }
  interact(p1) {
    if (!p1.options.links) {
      return;
    }
    p1.links = [];
    if (p1.linksDistance && p1.linksDistance > this.#maxDistance) {
      this.#maxDistance = p1.linksDistance;
    }
    const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
    if (pos1.x < originPoint.x || pos1.y < originPoint.y || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
      return;
    }
    const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? minDistance6, warp = linkOpt1.warp, range = warp ? new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Circle(pos1.x, pos1.y, optDistance), query = container.particles.grid.query(range);
    for (const p2 of query) {
      const linkOpt2 = p2.options.links;
      if (p1 === p2 || !linkOpt2?.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || !p2.links || p1.links.some((t) => t.destination === p2) || p2.links.some((t) => t.destination === p1)) {
        continue;
      }
      const pos2 = p2.getPosition();
      if (pos2.x < originPoint.x || pos2.y < originPoint.y || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
        continue;
      }
      const distDirect = getDistances(pos1, pos2).distance, distWarp = warp && linkOpt2.warp ? getWarpDistance(pos1, pos2, canvasSize) : distDirect, distance = Math.min(distDirect, distWarp);
      if (distance > optDistance) {
        continue;
      }
      const opacityLine = (opacityOffset - distance / optDistance) * optOpacity;
      this.#setColor(p1);
      p1.links.push({
        destination: p2,
        opacity: opacityLine,
        color: this.#getLinkColor(p1, p2),
        isWarped: distWarp < distDirect
      });
    }
  }
  isEnabled(particle) {
    return !!particle.options.links?.enable;
  }
  loadParticlesOptions(options, ...sources) {
    loadOptionProperty(options, "links", Links, ...sources);
  }
  reset() {
  }
  #getLinkColor(p1, p2) {
    const container = this.container, linksOptions = p1.options.links;
    if (!linksOptions) {
      return;
    }
    const linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
    return getLinkColor(p1, p2, linkColor);
  }
  #setColor(p1) {
    if (!p1.options.links) {
      return;
    }
    const container = this.container, linksOptions = p1.options.links;
    let linkColor = linksOptions.id === void 0 ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
    if (linkColor) {
      return;
    }
    linkColor = getLinkRandomColor(this.#pluginManager, linksOptions.color, linksOptions.blink, linksOptions.consent);
    if (linksOptions.id === void 0) {
      container.particles.linksColor = linkColor;
    } else {
      container.particles.linksColors.set(linksOptions.id, linkColor);
    }
  }
};

// node_modules/@tsparticles/interaction-particles-links/browser/LinksPlugin.js
var LinksPlugin = class {
  id = "links";
  #pluginManager;
  constructor(pluginManager) {
    this.#pluginManager = pluginManager;
  }
  getPlugin(container) {
    return __async(this, null, function* () {
      const {
        LinkInstance
      } = yield import("./chunk-WYFUGRHV.js");
      return new LinkInstance(this.#pluginManager, container);
    });
  }
  loadOptions() {
  }
  needsPlugin() {
    return true;
  }
};

// node_modules/@tsparticles/interaction-particles-links/browser/index.js
function loadParticlesLinksInteraction(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      const pluginManager = e.pluginManager;
      ensureInteractivityPluginLoaded(e);
      pluginManager.addPlugin(new LinksPlugin(pluginManager));
      pluginManager.addInteractor?.("particlesLinks", (container) => {
        return Promise.resolve(new Linker(pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/shape-polygon/browser/Utils.js
var polygonCache = /* @__PURE__ */ new Map();
var noOffset = 0;
function getUnitPolygon(sides7) {
  const cached = polygonCache.get(sides7);
  if (cached) {
    return cached;
  }
  const step = doublePI / sides7, isOdd = !!(sides7 % double), baseAngle = (-Math.PI + (isOdd ? noOffset : step)) * half, verts = [];
  for (let i = 0; i < sides7; i++) {
    const angle = baseAngle + i * step;
    verts[i] = {
      x: Math.cos(angle),
      y: Math.sin(angle)
    };
  }
  polygonCache.set(sides7, verts);
  return verts;
}
function drawPolygon(data, side) {
  const {
    context,
    radius
  } = data, sides7 = side.count.numerator / side.count.denominator, verts = getUnitPolygon(sides7);
  context.beginPath();
  for (let i = 0; i < verts.length; i++) {
    const vert = verts[i];
    if (!vert) {
      continue;
    }
    const x = vert.x * radius, y = vert.y * radius;
    if (i) {
      context.lineTo(x, y);
    } else {
      context.moveTo(x, y);
    }
  }
  context.closePath();
}

// node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js
var defaultSides = 5;
var PolygonDrawerBase = class {
  draw(data) {
    const {
      particle,
      radius
    } = data, side = this.getSidesData(particle, radius);
    drawPolygon(data, side);
  }
  getSidesCount(particle) {
    const polygon = particle.shapeData;
    return Math.round(getRangeValue(polygon?.sides ?? defaultSides));
  }
};

// node_modules/@tsparticles/shape-polygon/browser/PolygonDrawer.js
var yFactor = 2.66;
var sidesFactor = 3;
var PolygonDrawer = class extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    const {
      sides: sides7
    } = particle;
    return {
      count: {
        denominator: 1,
        numerator: sides7
      },
      length: radius * yFactor / (sides7 / sidesFactor)
    };
  }
};

// node_modules/@tsparticles/shape-polygon/browser/TriangleDrawer.js
var sides5 = 3;
var yFactor2 = 2.66;
var sidesFactor2 = 3;
var TriangleDrawer = class extends PolygonDrawerBase {
  getSidesCount() {
    return sides5;
  }
  getSidesData(_particle, radius) {
    return {
      count: {
        denominator: 1,
        numerator: sides5
      },
      length: radius * yFactor2 / (sides5 / sidesFactor2)
    };
  }
};

// node_modules/@tsparticles/shape-polygon/browser/index.js
function loadGenericPolygonShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["polygon"], () => Promise.resolve(new PolygonDrawer()));
    });
  });
}
function loadTriangleShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["triangle"], () => Promise.resolve(new TriangleDrawer()));
    });
  });
}
function loadPolygonShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield Promise.all([loadGenericPolygonShape(engine), loadTriangleShape(engine)]);
  });
}

// node_modules/@tsparticles/updater-rotate/browser/Options/Classes/RotateAnimation.js
var RotateAnimation = class {
  decay = 0;
  enable = false;
  speed = 0;
  sync = false;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "enable", data.enable);
    loadRangeProperty(this, "speed", data.speed);
    loadRangeProperty(this, "decay", data.decay);
    loadProperty(this, "sync", data.sync);
  }
};

// node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js
var Rotate = class extends ValueWithRandom {
  animation = new RotateAnimation();
  direction = RotateDirection.clockwise;
  path = false;
  load(data) {
    if (isNull(data)) {
      return;
    }
    super.load(data);
    loadProperty(this, "direction", data.direction);
    this.animation.load(data.animation);
    loadProperty(this, "path", data.path);
  }
};

// node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js
var doublePIDeg = 360;
var RotateUpdater = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  init(particle) {
    const rotateOptions = particle.options.rotate;
    if (!rotateOptions) {
      return;
    }
    particle.rotate = {
      enable: rotateOptions.animation.enable,
      value: degToRad(getRangeValue(rotateOptions.value)),
      min: 0,
      max: doublePI
    };
    particle.pathRotation = rotateOptions.path;
    let rotateDirection = rotateOptions.direction;
    if (rotateDirection === RotateDirection.random) {
      const index = Math.floor(getRandom() * double), minIndex = 0;
      rotateDirection = index > minIndex ? RotateDirection.counterClockwise : RotateDirection.clockwise;
    }
    switch (rotateDirection) {
      case RotateDirection.counterClockwise:
      case "counterClockwise":
        particle.rotate.status = AnimationStatus.decreasing;
        break;
      case RotateDirection.clockwise:
        particle.rotate.status = AnimationStatus.increasing;
        break;
      default:
        break;
    }
    const rotateAnimation = rotateOptions.animation;
    if (rotateAnimation.enable) {
      particle.rotate.decay = identity - getRangeValue(rotateAnimation.decay);
      particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / doublePIDeg * this.#container.retina.reduceFactor;
      if (!rotateAnimation.sync) {
        particle.rotate.velocity *= getRandom();
      }
    }
    particle.rotation = particle.rotate.value;
  }
  isEnabled(particle) {
    const rotate = particle.options.rotate;
    if (!rotate) {
      return false;
    }
    return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "rotate", Rotate, ...sources);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    particle.isRotating = !!particle.rotate;
    if (!particle.rotate) {
      return;
    }
    updateAnimation(particle, particle.rotate, false, DestroyType.none, delta);
    particle.rotation = particle.rotate.value;
  }
};

// node_modules/@tsparticles/updater-rotate/browser/index.js
function loadRotateUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("rotate", (container) => {
        return Promise.resolve(new RotateUpdater(container));
      });
    });
  });
}

// node_modules/@tsparticles/shape-square/browser/Utils.js
function drawSquare(data) {
  const {
    context,
    radius
  } = data, fixedRadius = radius * Math.SQRT1_2, fixedDiameter = fixedRadius * double;
  context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
}

// node_modules/@tsparticles/shape-square/browser/SquareDrawer.js
var sides6 = 4;
var SquareDrawer = class {
  draw(data) {
    drawSquare(data);
  }
  getSidesCount() {
    return sides6;
  }
};

// node_modules/@tsparticles/shape-square/browser/index.js
function loadSquareShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["edge", "square"], () => Promise.resolve(new SquareDrawer()));
    });
  });
}

// node_modules/@tsparticles/shape-star/browser/Utils.js
var defaultInset = 2;
var origin = {
  x: 0,
  y: 0
};
function drawStar(data) {
  const {
    context,
    particle,
    radius
  } = data, sides7 = particle.sides, inset = particle.starInset ?? defaultInset;
  context.moveTo(origin.x, origin.y - radius);
  for (let i = 0; i < sides7; i++) {
    context.rotate(Math.PI / sides7);
    context.lineTo(origin.x, origin.y - radius * inset);
    context.rotate(Math.PI / sides7);
    context.lineTo(origin.x, origin.y - radius);
  }
}

// node_modules/@tsparticles/shape-star/browser/StarDrawer.js
var defaultInset2 = 2;
var defaultSides2 = 5;
var StarDrawer = class {
  draw(data) {
    drawStar(data);
  }
  getSidesCount(particle) {
    const star = particle.shapeData;
    return Math.round(getRangeValue(star?.sides ?? defaultSides2));
  }
  particleInit(_container, particle) {
    const star = particle.shapeData;
    particle.starInset = getRangeValue(star?.inset ?? defaultInset2);
  }
};

// node_modules/@tsparticles/shape-star/browser/index.js
function loadStarShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["star"], () => Promise.resolve(new StarDrawer()));
    });
  });
}

// node_modules/@tsparticles/slim/browser/index.js
function loadSlim(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => __async(this, null, function* () {
      const loadInteractivityForSlim = (e2) => __async(this, null, function* () {
        yield loadInteractivityPlugin(e2);
        yield Promise.all([loadExternalParallaxInteraction(e2), loadExternalAttractInteraction(e2), loadExternalBounceInteraction(e2), loadExternalBubbleInteraction(e2), loadExternalConnectInteraction(e2), loadExternalDestroyInteraction(e2), loadExternalGrabInteraction(e2), loadExternalPauseInteraction(e2), loadExternalPushInteraction(e2), loadExternalRemoveInteraction(e2), loadExternalRepulseInteraction(e2), loadExternalSlowInteraction(e2), loadParticlesAttractInteraction(e2), loadParticlesCollisionsInteraction(e2), loadParticlesLinksInteraction(e2)]);
      });
      yield Promise.all([loadBasic(e), loadInteractivityForSlim(e), loadEasingQuadPlugin(e), loadEmojiShape(e), loadImageShape(e), loadLineShape(e), loadPolygonShape(e), loadSquareShape(e), loadStarShape(e), loadLifeUpdater(e), loadPaintUpdater(e), loadRotateUpdater(e)]);
    }));
  });
}

// node_modules/@tsparticles/shape-text/browser/Utils.js
var validTypes2 = ["text", "character", "char", "multiline-text"];
var firstIndex = 0;
var minLength = 0;
function drawText(data) {
  const {
    context,
    particle,
    fill,
    stroke,
    radius,
    opacity
  } = data, character = particle.shapeData;
  if (!character) {
    return;
  }
  const textData = character.value;
  particle.textLines ??= itemFromSingleOrMultiple(textData, particle.randomIndexData)?.split("\n") ?? [];
  particle.maxTextLength ??= particle.textLines.length ? Math.max(...particle.textLines.map((t) => t.length)) : particle.textLines[firstIndex]?.length ?? minLength;
  if (!particle.textLines.length || !particle.maxTextLength) {
    return;
  }
  const lines = particle.textLines, style = character.style ?? "", weight = character.weight ?? "400", font = character.font ?? "Verdana", size = Math.round(radius) * double / (lines.length * particle.maxTextLength);
  context.font = `${style} ${weight} ${size.toString()}px "${font}"`;
  const originalGlobalAlpha = context.globalAlpha;
  context.globalAlpha = opacity;
  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i];
    if (!currentLine) {
      continue;
    }
    drawTextLine(context, currentLine, size, i, fill, stroke);
  }
  context.globalAlpha = originalGlobalAlpha;
}
function drawTextLine(context, line, size, index, fill, stroke) {
  const pos = {
    x: -(line.length * size * half),
    y: size * half + index * size
  };
  if (fill) {
    context.fillText(line, pos.x, pos.y);
  }
  if (stroke) {
    context.strokeText(line, pos.x, pos.y);
  }
}

// node_modules/@tsparticles/shape-text/browser/TextDrawer.js
var firstIndex2 = 0;
var minLength2 = 0;
var TextDrawer = class {
  draw(data) {
    drawText(data);
  }
  init(container) {
    return __async(this, null, function* () {
      const options = container.actualOptions;
      if (validTypes2.find((t) => isInArray(t, options.particles.shape.type))) {
        const shapeOptions = validTypes2.map((t) => options.particles.shape.options[t]).find((t) => !!t), promises = [];
        executeOnSingleOrMultiple(shapeOptions, (shape) => {
          promises.push(loadFont(shape.font, shape.weight));
        });
        yield Promise.all(promises);
      }
    });
  }
  particleInit(_container, particle) {
    if (!particle.shape || !validTypes2.includes(particle.shape)) {
      return;
    }
    const character = particle.shapeData;
    if (character === void 0) {
      return;
    }
    const textData = character.value;
    if (!textData) {
      return;
    }
    particle.textLines = itemFromSingleOrMultiple(textData, particle.randomIndexData)?.split("\n") ?? [];
    particle.maxTextLength = particle.textLines.length ? Math.max(...particle.textLines.map((t) => t.length)) : particle.textLines[firstIndex2]?.length ?? minLength2;
  }
};

// node_modules/@tsparticles/shape-text/browser/index.js
function loadTextShape(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addShape(validTypes2, () => Promise.resolve(new TextDrawer()));
    });
  });
}

// node_modules/@tsparticles/updater-tilt/browser/TiltDirection.js
var TiltDirection;
(function(TiltDirection2) {
  TiltDirection2["clockwise"] = "clockwise";
  TiltDirection2["counterClockwise"] = "counter-clockwise";
  TiltDirection2["random"] = "random";
})(TiltDirection || (TiltDirection = {}));

// node_modules/@tsparticles/updater-tilt/browser/Options/Classes/TiltAnimation.js
var TiltAnimation = class {
  decay = 0;
  enable = false;
  speed = 0;
  sync = false;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadProperty(this, "enable", data.enable);
    loadRangeProperty(this, "speed", data.speed);
    loadRangeProperty(this, "decay", data.decay);
    loadProperty(this, "sync", data.sync);
  }
};

// node_modules/@tsparticles/updater-tilt/browser/Options/Classes/Tilt.js
var Tilt = class extends ValueWithRandom {
  animation = new TiltAnimation();
  direction = TiltDirection.clockwise;
  enable = false;
  load(data) {
    super.load(data);
    if (isNull(data)) {
      return;
    }
    this.animation.load(data.animation);
    loadProperty(this, "direction", data.direction);
    loadProperty(this, "enable", data.enable);
  }
};

// node_modules/@tsparticles/updater-tilt/browser/TiltUpdater.js
var maxAngle3 = 360;
var TiltUpdater = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  getTransformValues(particle) {
    const tilt = particle.tilt?.enable && particle.tilt;
    return {
      b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : void 0,
      c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : void 0
    };
  }
  init(particle) {
    const tiltOptions = particle.options.tilt;
    if (!tiltOptions) {
      return;
    }
    particle.tilt = {
      enable: tiltOptions.enable,
      value: degToRad(getRangeValue(tiltOptions.value)),
      sinDirection: getRandom() >= half ? identity : -identity,
      cosDirection: getRandom() >= half ? identity : -identity,
      min: 0,
      max: doublePI
    };
    let tiltDirection = tiltOptions.direction;
    if (tiltDirection === TiltDirection.random) {
      const index = Math.floor(getRandom() * double), minIndex = 0;
      tiltDirection = index > minIndex ? TiltDirection.counterClockwise : TiltDirection.clockwise;
    }
    switch (tiltDirection) {
      case TiltDirection.counterClockwise:
      case "counterClockwise":
        particle.tilt.status = AnimationStatus.decreasing;
        break;
      case TiltDirection.clockwise:
        particle.tilt.status = AnimationStatus.increasing;
        break;
      default:
        break;
    }
    const tiltAnimation = particle.options.tilt?.animation;
    if (tiltAnimation?.enable) {
      particle.tilt.decay = identity - getRangeValue(tiltAnimation.decay);
      particle.tilt.velocity = getRangeValue(tiltAnimation.speed) / maxAngle3 * this.#container.retina.reduceFactor;
      if (!tiltAnimation.sync) {
        particle.tilt.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    const tiltAnimation = particle.options.tilt?.animation;
    return !particle.destroyed && !particle.spawning && !!tiltAnimation?.enable;
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "tilt", Tilt, ...sources);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.tilt) {
      return;
    }
    updateAnimation(particle, particle.tilt, false, DestroyType.none, delta);
  }
};

// node_modules/@tsparticles/updater-tilt/browser/index.js
function loadTiltUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("tilt", (container) => {
        return Promise.resolve(new TiltUpdater(container));
      });
    });
  });
}

// node_modules/@tsparticles/updater-twinkle/browser/Options/Classes/TwinkleLinksValues.js
var TwinkleLinksValues = class {
  color;
  enable = false;
  frequency = 0.05;
  opacity = 1;
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "frequency", data.frequency);
    loadRangeProperty(this, "opacity", data.opacity);
  }
};

// node_modules/@tsparticles/updater-twinkle/browser/Options/Classes/TwinkleParticlesValues.js
var TwinkleParticlesValues = class {
  enable = false;
  fillColor;
  frequency = 0.05;
  opacity = 1;
  strokeColor;
  load(data) {
    if (isNull(data)) {
      return;
    }
    if (data.fillColor !== void 0) {
      this.fillColor = OptionsColor.create(this.fillColor, data.fillColor);
    }
    if (data.strokeColor !== void 0) {
      this.strokeColor = OptionsColor.create(this.strokeColor, data.strokeColor);
    }
    loadProperty(this, "enable", data.enable);
    loadProperty(this, "frequency", data.frequency);
    loadRangeProperty(this, "opacity", data.opacity);
  }
};

// node_modules/@tsparticles/updater-twinkle/browser/Options/Classes/Twinkle.js
var Twinkle = class {
  links = new TwinkleLinksValues();
  particles = new TwinkleParticlesValues();
  load(data) {
    if (isNull(data)) {
      return;
    }
    this.links.load(data.links);
    this.particles.load(data.particles);
  }
};

// node_modules/@tsparticles/updater-twinkle/browser/TwinkleUpdater.js
var TwinkleUpdater = class {
  #container;
  #pluginManager;
  constructor(pluginManager, container) {
    this.#pluginManager = pluginManager;
    this.#container = container;
  }
  getColorStyles(particle, _context, _radius, opacity) {
    const pOptions = particle.options, container = this.#container, twinkleOptions = pOptions["twinkle"];
    if (!twinkleOptions) {
      return {};
    }
    const twinkle = twinkleOptions.particles, twinkling = twinkle.enable && getRandom() < twinkle.frequency, zIndexOptions = particle.options.zIndex, zOffset = 1, zOpacityFactor = (zOffset - particle.zIndexFactor) ** zIndexOptions.opacityRate, twinklingOpacity = twinkling ? getRangeValue(twinkle.opacity) * zOpacityFactor : opacity, twinkleFillRgb = rangeColorToHsl(this.#pluginManager, twinkle.fillColor), twinkleStrokeRgb = rangeColorToHsl(this.#pluginManager, twinkle.strokeColor), getTwinkleFillStyle = () => {
      if (!twinkleFillRgb) {
        return void 0;
      }
      return getStyleFromHsl(twinkleFillRgb, container.hdr, twinklingOpacity);
    }, getTwinkleStrokeStyle = () => {
      if (!twinkleStrokeRgb) {
        return void 0;
      }
      return getStyleFromHsl(twinkleStrokeRgb, container.hdr, twinklingOpacity);
    }, twinkleFillStyle = getTwinkleFillStyle(), twinkleStrokeStyle = getTwinkleStrokeStyle(), res = {}, needsTwinkle = twinkling && (!!twinkleFillStyle || !!twinkleStrokeStyle);
    res.fill = needsTwinkle ? twinkleFillStyle : void 0;
    res.stroke = needsTwinkle ? twinkleStrokeStyle : void 0;
    return res;
  }
  init() {
  }
  isEnabled(particle) {
    const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
    if (!twinkleOptions) {
      return false;
    }
    return twinkleOptions.particles.enable;
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "twinkle", Twinkle, ...sources);
  }
  update() {
  }
};

// node_modules/@tsparticles/updater-twinkle/browser/index.js
function loadTwinkleUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("twinkle", (container) => {
        return Promise.resolve(new TwinkleUpdater(e.pluginManager, container));
      });
    });
  });
}

// node_modules/@tsparticles/updater-wobble/browser/Options/Classes/WobbleSpeed.js
var WobbleSpeed = class {
  angle = 50;
  move = 10;
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadRangeProperty(this, "angle", data.angle);
    loadRangeProperty(this, "move", data.move);
  }
};

// node_modules/@tsparticles/updater-wobble/browser/Options/Classes/Wobble.js
var Wobble = class {
  distance = 5;
  enable = false;
  speed = new WobbleSpeed();
  load(data) {
    if (isNull(data)) {
      return;
    }
    loadRangeProperty(this, "distance", data.distance);
    loadProperty(this, "enable", data.enable);
    if (data.speed !== void 0) {
      if (isNumber(data.speed)) {
        this.speed.load({
          angle: data.speed
        });
      } else {
        const rangeSpeed = data.speed;
        if ("min" in rangeSpeed) {
          this.speed.load({
            angle: rangeSpeed
          });
        } else {
          this.speed.load(data.speed);
        }
      }
    }
  }
};

// node_modules/@tsparticles/updater-wobble/browser/Utils.js
var defaultDistance = 0;
var distanceFactor = 60;
function updateWobble(container, particle, delta) {
  const {
    wobble: wobbleOptions
  } = particle.options, {
    wobble
  } = particle;
  if (!wobbleOptions?.enable || !wobble) {
    return;
  }
  const reduceFactor = container.retina.reduceFactor, angleSpeed = wobble.angleSpeed * delta.factor * reduceFactor, moveSpeed = wobble.moveSpeed * delta.factor * reduceFactor, distance = moveSpeed * (particle.retina.wobbleDistance ?? defaultDistance) / (millisecondsToSeconds / distanceFactor), max = doublePI, {
    position
  } = particle;
  wobble.angle += angleSpeed;
  if (wobble.angle > max) {
    wobble.angle -= max;
  }
  position.x += distance * Math.cos(wobble.angle);
  position.y += distance * Math.abs(Math.sin(wobble.angle));
}

// node_modules/@tsparticles/updater-wobble/browser/WobbleUpdater.js
var maxAngle4 = 360;
var moveSpeedFactor = 10;
var defaultDistance2 = 0;
var WobbleUpdater = class {
  #container;
  constructor(container) {
    this.#container = container;
  }
  init(particle) {
    const wobbleOpt = particle.options.wobble;
    if (wobbleOpt?.enable) {
      particle.wobble = {
        angle: getRandom() * doublePI,
        angleSpeed: getRangeValue(wobbleOpt.speed.angle) / maxAngle4,
        moveSpeed: getRangeValue(wobbleOpt.speed.move) / moveSpeedFactor
      };
    } else {
      particle.wobble = {
        angle: 0,
        angleSpeed: 0,
        moveSpeed: 0
      };
    }
    particle.retina.wobbleDistance = getRangeValue(wobbleOpt?.distance ?? defaultDistance2) * this.#container.retina.pixelRatio;
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;
  }
  loadOptions(options, ...sources) {
    loadOptionProperty(options, "wobble", Wobble, ...sources);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateWobble(this.#container, particle, delta);
  }
};

// node_modules/@tsparticles/updater-wobble/browser/index.js
function loadWobbleUpdater(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("wobble", (container) => {
        return Promise.resolve(new WobbleUpdater(container));
      });
    });
  });
}

// node_modules/tsparticles/browser/index.js
function loadFull(engine) {
  return __async(this, null, function* () {
    engine.checkVersion("4.3.2");
    yield engine.pluginManager.register((e) => __async(this, null, function* () {
      const loadEmittersPluginBundle = (e2) => __async(this, null, function* () {
        yield loadEmittersPlugin(e2);
        yield Promise.all([loadEmittersShapeCircle(e2), loadEmittersShapeSquare(e2)]);
      }), loadInteractivityForFull = (e2) => __async(this, null, function* () {
        yield loadSlim(e2);
        yield Promise.all([loadExternalDragInteraction(e2), loadExternalTrailInteraction(e2), loadAbsorbersPlugin(e2), loadEmittersPluginBundle(e2)]);
      });
      yield Promise.all([loadInteractivityForFull(e), loadDestroyUpdater(e), loadRollUpdater(e), loadTiltUpdater(e), loadTwinkleUpdater(e), loadWobbleUpdater(e), loadTextShape(e)]);
    }));
  });
}

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  ngParticlesService;
  audioService;
  id = "tsparticles";
  particlesOptions = {
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: {
          enable: true
        }
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: ["#FF9933", "#FFFFFF", "#138808"]
      },
      links: {
        enable: false
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: {
          default: "out"
        },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true
        },
        value: 50
      },
      opacity: {
        value: 0.8
      },
      shape: {
        type: ["circle", "star"]
      },
      size: {
        value: { min: 2, max: 5 }
      }
    },
    detectRetina: true
  };
  hasInteracted = false;
  constructor(ngParticlesService, audioService) {
    this.ngParticlesService = ngParticlesService;
    this.audioService = audioService;
  }
  ngOnInit() {
    void this.ngParticlesService.init((engine) => __async(this, null, function* () {
      yield loadFull(engine);
    }));
  }
  lastHoveredElement = null;
  onDocumentClick(event) {
    if (!this.hasInteracted) {
      this.hasInteracted = true;
      this.audioService.playAudio();
    }
    if (this.isInteractive(event.target)) {
      this.audioService.playClickSound();
    }
  }
  onDocumentMouseOver(event) {
    const target = event.target;
    const interactiveElement = target.closest('a, button, input, select, textarea, [role="button"], [role="link"], .clickable, .music-toggle, .menu-toggle, .card, .glass-card');
    if (interactiveElement && interactiveElement !== this.lastHoveredElement) {
      this.audioService.playHoverSound();
      this.lastHoveredElement = interactiveElement;
    } else if (!interactiveElement) {
      this.lastHoveredElement = null;
    }
  }
  isInteractive(element) {
    if (!element)
      return false;
    return !!element.closest('a, button, input, select, textarea, [role="button"], [role="link"], .clickable, .music-toggle, .menu-toggle, .card, .glass-card');
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(NgParticlesService), \u0275\u0275directiveInject(AudioService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AppComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument)("mouseover", function AppComponent_mouseover_HostBindingHandler($event) {
        return ctx.onDocumentMouseOver($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[3, "id", "options"], [1, "main-content", 2, "position", "relative", "z-index", "1"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "ngx-particles", 0)(1, "app-navbar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275property("id", ctx.id)("options", ctx.particlesOptions);
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent, NgxParticlesModule, NgxParticlesComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 17 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main.js.map
