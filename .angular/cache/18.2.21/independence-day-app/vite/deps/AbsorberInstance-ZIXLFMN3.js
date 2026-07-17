import {
  Absorber
} from "./chunk-QC5Z5CNL.js";
import {
  RotateDirection
} from "./chunk-QYZGOMQO.js";
import {
  Vector,
  calcPositionOrRandomFromSize,
  calcPositionOrRandomFromSizeRanged,
  doublePI,
  getDistance,
  getDistances,
  getRandom,
  getRangeValue,
  getStyleFromRgb,
  half,
  identity,
  isPointInside,
  millisecondsToSeconds,
  minVelocity,
  originPoint,
  rangeColorToRgb,
  squareExp
} from "./chunk-PO7BXMXD.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@tsparticles/plugin-absorbers/browser/AbsorberInstance.js
var absorbFactor = 0.033;
var minOrbitLength = 0;
var minRadius = 0;
var minMass = 0;
var minAngle = 0;
var maxAngle = doublePI;
var maxDegreeAngle = 360;
var angleIncrementFactor = identity / maxDegreeAngle;
var defaultLifeDelay = 0;
var minLifeCount = 0;
var defaultSpawnDelay = 0;
var defaultLifeCount = -1;
var AbsorberInstance = class {
  color;
  limit;
  mass;
  name;
  opacity;
  options;
  position;
  size;
  #container;
  #currentDuration;
  #currentSpawnDelay;
  #duration;
  #firstSpawn;
  #immortal;
  #initialPosition;
  #lifeCount;
  #pluginManager;
  #spawnDelay;
  constructor(pluginManager, container, options, position) {
    this.#container = container;
    this.#pluginManager = pluginManager;
    this.#currentDuration = 0;
    this.#currentSpawnDelay = 0;
    this.#initialPosition = position ? Vector.create(position.x, position.y) : void 0;
    if (options instanceof Absorber) {
      this.options = options;
    } else {
      this.options = new Absorber();
      this.options.load(options);
    }
    this.name = this.options.name;
    this.opacity = this.options.opacity;
    this.size = getRangeValue(this.options.size.value) * container.retina.pixelRatio;
    this.mass = this.size * this.options.size.density * container.retina.reduceFactor;
    const limit = this.options.size.limit;
    this.limit = {
      radius: limit.radius * container.retina.pixelRatio * container.retina.reduceFactor,
      mass: limit.mass
    };
    this.color = rangeColorToRgb(this.#pluginManager, this.options.color) ?? {
      b: 0,
      g: 0,
      r: 0
    };
    this.position = this.#initialPosition?.copy() ?? this.#calcPosition();
    this.#firstSpawn = !this.options.life.wait;
    this.#lifeCount = this.options.life.count ?? defaultLifeCount;
    this.#immortal = this.#lifeCount <= minLifeCount;
    this.#spawnDelay = container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
  }
  attract(particle, delta) {
    const container = this.#container, options = this.options, pos = particle.getPosition(), {
      dx,
      dy,
      distance
    } = getDistances(this.position, pos), v = Vector.create(dx, dy);
    v.length = this.mass / Math.pow(distance, squareExp) * container.retina.reduceFactor;
    if (distance < this.size + particle.getRadius()) {
      const sizeFactor = particle.getRadius() * absorbFactor * container.retina.pixelRatio * delta.factor;
      if (this.size > particle.getRadius() && distance < this.size - particle.getRadius() || particle.absorberOrbit !== void 0 && particle.absorberOrbit.length < minOrbitLength) {
        if (options.destroy) {
          particle.destroy();
        } else {
          particle.needsNewPosition = true;
          this.#updateParticlePosition(particle, delta, v);
        }
      } else {
        if (options.destroy) {
          particle.size.value -= sizeFactor;
        }
        this.#updateParticlePosition(particle, delta, v);
      }
      if (this.limit.radius <= minRadius || this.size < this.limit.radius) {
        this.size += sizeFactor;
      }
      if (this.limit.mass <= minMass || this.mass < this.limit.mass) {
        this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
      }
    } else {
      this.#updateParticlePosition(particle, delta, v);
    }
  }
  draw(context) {
    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.arc(originPoint.x, originPoint.y, this.size, minAngle, maxAngle, false);
    context.closePath();
    context.fillStyle = getStyleFromRgb(this.color, this.#container.hdr, this.opacity);
    context.fill();
  }
  resize() {
    const initialPosition = this.#initialPosition;
    this.position = initialPosition && isPointInside(initialPosition, this.#container.canvas.size, Vector.origin) ? initialPosition : this.#calcPosition();
  }
  update(delta) {
    if (this.#firstSpawn) {
      this.#firstSpawn = false;
      this.#currentSpawnDelay = this.#spawnDelay ?? defaultSpawnDelay;
    }
    if (this.#duration !== void 0) {
      this.#currentDuration += delta.value;
      if (this.#currentDuration >= this.#duration) {
        if (!this.#immortal) {
          this.#lifeCount--;
        }
        if (this.#lifeCount > minLifeCount || this.#immortal) {
          this.position = this.#calcPosition();
          this.#spawnDelay = this.#container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / this.#container.retina.reduceFactor : Infinity;
        }
        this.#currentDuration -= this.#duration;
        this.#duration = void 0;
      }
    }
    if (this.#spawnDelay !== void 0) {
      this.#currentSpawnDelay += delta.value;
      if (this.#currentSpawnDelay >= this.#spawnDelay) {
        this.#play();
        this.#currentSpawnDelay -= this.#spawnDelay;
        this.#spawnDelay = void 0;
      }
    }
  }
  #calcPosition() {
    const exactPosition = calcPositionOrRandomFromSizeRanged({
      size: this.#container.canvas.size,
      position: this.options.position
    });
    return Vector.create(exactPosition.x, exactPosition.y);
  }
  #play() {
    if (!((this.#lifeCount > minLifeCount || this.#immortal || !this.options.life.count) && (this.#firstSpawn || this.#currentSpawnDelay >= (this.#spawnDelay ?? defaultSpawnDelay)))) {
      return;
    }
    if (this.#lifeCount > minLifeCount || this.#immortal) {
      this.#prepareToDie();
    }
  }
  #prepareToDie() {
    const duration = this.options.life.duration !== void 0 ? getRangeValue(this.options.life.duration) : void 0, minDuration = 0;
    if ((this.#lifeCount > minLifeCount || this.#immortal) && duration !== void 0 && duration > minDuration) {
      this.#duration = duration * millisecondsToSeconds;
    }
  }
  #updateParticlePosition(particle, delta, v) {
    if (particle.destroyed) {
      return;
    }
    const container = this.#container, canvasSize = container.canvas.size;
    if (particle.needsNewPosition) {
      const newPosition = calcPositionOrRandomFromSize({
        size: canvasSize
      });
      particle.position.setTo(newPosition);
      particle.velocity.setTo(particle.initialVelocity);
      particle.absorberOrbit = void 0;
      particle.needsNewPosition = false;
    }
    if (this.options.orbits) {
      if (particle.absorberOrbit === void 0) {
        particle.absorberOrbit = Vector.origin;
        particle.absorberOrbit.length = getDistance(particle.getPosition(), this.position);
        particle.absorberOrbit.angle = getRandom() * maxAngle;
      }
      if (particle.absorberOrbit.length <= this.size && !this.options.destroy) {
        const minSize = Math.min(canvasSize.width, canvasSize.height), offset = 1, randomOffset = 0.1, randomFactor = 0.2;
        particle.absorberOrbit.length = minSize * (offset + (getRandom() * randomFactor - randomOffset));
      }
      particle.absorberOrbitDirection ??= particle.velocity.x >= minVelocity ? RotateDirection.clockwise : RotateDirection.counterClockwise;
      const orbitRadius = particle.absorberOrbit.length, orbitAngle = particle.absorberOrbit.angle, orbitDirection = particle.absorberOrbitDirection;
      particle.velocity.setTo(Vector.origin);
      const maxSize = particle.size.max, sizeFactor = particle.options.move.size ? particle.getRadius() / maxSize : identity, deltaFactor = delta.factor || identity, baseSpeed = particle.retina.moveSpeed, moveSpeed = baseSpeed * sizeFactor * deltaFactor * half;
      particle.position.x = this.position.x + orbitRadius * Math.cos(orbitAngle);
      particle.position.y = this.position.y + orbitRadius * (orbitDirection === RotateDirection.clockwise ? identity : -identity) * Math.sin(orbitAngle);
      particle.absorberOrbit.length = Math.max(minOrbitLength, particle.absorberOrbit.length - v.length);
      particle.absorberOrbit.angle += moveSpeed * angleIncrementFactor * container.retina.reduceFactor;
    } else {
      particle.velocity.addTo(v);
    }
  }
};
export {
  AbsorberInstance
};
//# sourceMappingURL=AbsorberInstance-ZIXLFMN3.js.map
