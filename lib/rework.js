
/**
 * Module dependencies.
 */

var Batch = require('batch'),
    css = require('css');

/**
 * Expose `rework`.
 */

exports = module.exports = rework;

/**
 * Initialize a new stylesheet `Rework` with `str`.
 *
 * @param {String} str
 * @return {Rework}
 * @api public
 */

function rework(str) {
  return new Rework(css.parse(str));
}

/**
 * Initialize a new stylesheet `Rework` with `obj`.
 *
 * @param {Object} obj
 * @api private
 */

function Rework(obj) {
  this.obj = obj;
  this.tasks = new Batch();
}

/**
 * Use the given plugin `fn(style, rework)`.
 *
 * @param {Function} fn
 * @return {Rework}
 * @api public
 */

Rework.prototype.use = function(fn){
  this.tasks.push(fn);
  return this;
};

/**
 * Specify global vendor `prefixes`,
 * explicit ones may still be passed
 * to most plugins.
 *
 * @param {Array} prefixes
 * @return {Rework}
 * @api public
 */

Rework.prototype.vendors = function(prefixes){
  this.prefixes = prefixes;
  return this;
};

/**
 * Process the stylesheet.
 *
 * @return {String}
 * @api public
 */

Rework.prototype.end = function(callback){
  this.tasks.end(callback);
  return this;
};

/**
 * Expose plugins.
 */

exports.prefix = require('./plugins/prefix');
exports.prefixValue = require('./plugins/prefix-value');
exports.prefixSelectors = require('./plugins/prefix-selectors');
exports.keyframes = require('./plugins/keyframes');
exports.opacity = require('./plugins/opacity');
exports.at2x = require('./plugins/at2x');
