["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/math/coordinate.js"],"~:js","goog.provide(\"goog.math.Coordinate\");\ngoog.require(\"goog.math\");\ngoog.math.Coordinate = function(opt_x, opt_y) {\n  this.x = opt_x !== undefined ? opt_x : 0;\n  this.y = opt_y !== undefined ? opt_y : 0;\n};\ngoog.math.Coordinate.prototype.clone = function() {\n  return new goog.math.Coordinate(this.x, this.y);\n};\nif (goog.DEBUG) {\n  goog.math.Coordinate.prototype.toString = function() {\n    return \"(\" + this.x + \", \" + this.y + \")\";\n  };\n}\ngoog.math.Coordinate.prototype.equals = function(other) {\n  return other instanceof goog.math.Coordinate && goog.math.Coordinate.equals(this, other);\n};\ngoog.math.Coordinate.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.x == b.x && a.y == b.y;\n};\ngoog.math.Coordinate.distance = function(a, b) {\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return Math.sqrt(dx * dx + dy * dy);\n};\ngoog.math.Coordinate.magnitude = function(a) {\n  return Math.sqrt(a.x * a.x + a.y * a.y);\n};\ngoog.math.Coordinate.azimuth = function(a) {\n  return goog.math.angle(0, 0, a.x, a.y);\n};\ngoog.math.Coordinate.squaredDistance = function(a, b) {\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return dx * dx + dy * dy;\n};\ngoog.math.Coordinate.difference = function(a, b) {\n  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);\n};\ngoog.math.Coordinate.sum = function(a, b) {\n  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);\n};\ngoog.math.Coordinate.prototype.ceil = function() {\n  this.x = Math.ceil(this.x);\n  this.y = Math.ceil(this.y);\n  return this;\n};\ngoog.math.Coordinate.prototype.floor = function() {\n  this.x = Math.floor(this.x);\n  this.y = Math.floor(this.y);\n  return this;\n};\ngoog.math.Coordinate.prototype.round = function() {\n  this.x = Math.round(this.x);\n  this.y = Math.round(this.y);\n  return this;\n};\ngoog.math.Coordinate.prototype.translate = function(tx, opt_ty) {\n  if (tx instanceof goog.math.Coordinate) {\n    this.x += tx.x;\n    this.y += tx.y;\n  } else {\n    this.x += Number(tx);\n    if (typeof opt_ty === \"number\") {\n      this.y += opt_ty;\n    }\n  }\n  return this;\n};\ngoog.math.Coordinate.prototype.scale = function(sx, opt_sy) {\n  var sy = typeof opt_sy === \"number\" ? opt_sy : sx;\n  this.x *= sx;\n  this.y *= sy;\n  return this;\n};\ngoog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {\n  var center = opt_center || new goog.math.Coordinate(0, 0);\n  var x = this.x;\n  var y = this.y;\n  var cos = Math.cos(radians);\n  var sin = Math.sin(radians);\n  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;\n  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;\n};\ngoog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {\n  this.rotateRadians(goog.math.toRadians(degrees), opt_center);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A utility class for representing two-dimensional positions.\n */\n\n\ngoog.provide('goog.math.Coordinate');\n\ngoog.require('goog.math');\n\n\n\n/**\n * Class for representing coordinates and positions.\n * @param {number=} opt_x Left, defaults to 0.\n * @param {number=} opt_y Top, defaults to 0.\n * @struct\n * @constructor\n */\ngoog.math.Coordinate = function(opt_x, opt_y) {\n  'use strict';\n  /**\n   * X-value\n   * @type {number}\n   */\n  this.x = (opt_x !== undefined) ? opt_x : 0;\n\n  /**\n   * Y-value\n   * @type {number}\n   */\n  this.y = (opt_y !== undefined) ? opt_y : 0;\n};\n\n\n/**\n * Returns a new copy of the coordinate.\n * @return {!goog.math.Coordinate} A clone of this coordinate.\n */\ngoog.math.Coordinate.prototype.clone = function() {\n  'use strict';\n  return new goog.math.Coordinate(this.x, this.y);\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a nice string representing the coordinate.\n   * @return {string} In the form (50, 73).\n   * @override\n   */\n  goog.math.Coordinate.prototype.toString = function() {\n    'use strict';\n    return '(' + this.x + ', ' + this.y + ')';\n  };\n}\n\n\n/**\n * Returns whether the specified value is equal to this coordinate.\n * @param {*} other Some other value.\n * @return {boolean} Whether the specified value is equal to this coordinate.\n */\ngoog.math.Coordinate.prototype.equals = function(other) {\n  'use strict';\n  return other instanceof goog.math.Coordinate &&\n      goog.math.Coordinate.equals(this, other);\n};\n\n\n/**\n * Compares coordinates for equality.\n * @param {goog.math.Coordinate} a A Coordinate.\n * @param {goog.math.Coordinate} b A Coordinate.\n * @return {boolean} True iff the coordinates are equal, or if both are null.\n */\ngoog.math.Coordinate.equals = function(a, b) {\n  'use strict';\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.x == b.x && a.y == b.y;\n};\n\n\n/**\n * Returns the distance between two coordinates.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {number} The distance between `a` and `b`.\n */\ngoog.math.Coordinate.distance = function(a, b) {\n  'use strict';\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return Math.sqrt(dx * dx + dy * dy);\n};\n\n\n/**\n * Returns the magnitude of a coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @return {number} The distance between the origin and `a`.\n */\ngoog.math.Coordinate.magnitude = function(a) {\n  'use strict';\n  return Math.sqrt(a.x * a.x + a.y * a.y);\n};\n\n\n/**\n * Returns the angle from the origin to a coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @return {number} The angle, in degrees, clockwise from the positive X\n *     axis to `a`.\n */\ngoog.math.Coordinate.azimuth = function(a) {\n  'use strict';\n  return goog.math.angle(0, 0, a.x, a.y);\n};\n\n\n/**\n * Returns the squared distance between two coordinates. Squared distances can\n * be used for comparisons when the actual value is not required.\n *\n * Performance note: eliminating the square root is an optimization often used\n * in lower-level languages, but the speed difference is not nearly as\n * pronounced in JavaScript (only a few percent.)\n *\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {number} The squared distance between `a` and `b`.\n */\ngoog.math.Coordinate.squaredDistance = function(a, b) {\n  'use strict';\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return dx * dx + dy * dy;\n};\n\n\n/**\n * Returns the difference between two coordinates as a new\n * goog.math.Coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {!goog.math.Coordinate} A Coordinate representing the difference\n *     between `a` and `b`.\n */\ngoog.math.Coordinate.difference = function(a, b) {\n  'use strict';\n  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);\n};\n\n\n/**\n * Returns the sum of two coordinates as a new goog.math.Coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two\n *     coordinates.\n */\ngoog.math.Coordinate.sum = function(a, b) {\n  'use strict';\n  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);\n};\n\n\n/**\n * Rounds the x and y fields to the next larger integer values.\n * @return {!goog.math.Coordinate} This coordinate with ceil'd fields.\n */\ngoog.math.Coordinate.prototype.ceil = function() {\n  'use strict';\n  this.x = Math.ceil(this.x);\n  this.y = Math.ceil(this.y);\n  return this;\n};\n\n\n/**\n * Rounds the x and y fields to the next smaller integer values.\n * @return {!goog.math.Coordinate} This coordinate with floored fields.\n */\ngoog.math.Coordinate.prototype.floor = function() {\n  'use strict';\n  this.x = Math.floor(this.x);\n  this.y = Math.floor(this.y);\n  return this;\n};\n\n\n/**\n * Rounds the x and y fields to the nearest integer values.\n * @return {!goog.math.Coordinate} This coordinate with rounded fields.\n */\ngoog.math.Coordinate.prototype.round = function() {\n  'use strict';\n  this.x = Math.round(this.x);\n  this.y = Math.round(this.y);\n  return this;\n};\n\n\n/**\n * Translates this box by the given offsets. If a `goog.math.Coordinate`\n * is given, then the x and y values are translated by the coordinate's x and y.\n * Otherwise, x and y are translated by `tx` and `opt_ty`\n * respectively.\n * @param {number|goog.math.Coordinate} tx The value to translate x by or the\n *     the coordinate to translate this coordinate by.\n * @param {number=} opt_ty The value to translate y by.\n * @return {!goog.math.Coordinate} This coordinate after translating.\n */\ngoog.math.Coordinate.prototype.translate = function(tx, opt_ty) {\n  'use strict';\n  if (tx instanceof goog.math.Coordinate) {\n    this.x += tx.x;\n    this.y += tx.y;\n  } else {\n    this.x += Number(tx);\n    if (typeof opt_ty === 'number') {\n      this.y += opt_ty;\n    }\n  }\n  return this;\n};\n\n\n/**\n * Scales this coordinate by the given scale factors. The x and y values are\n * scaled by `sx` and `opt_sy` respectively.  If `opt_sy`\n * is not given, then `sx` is used for both x and y.\n * @param {number} sx The scale factor to use for the x dimension.\n * @param {number=} opt_sy The scale factor to use for the y dimension.\n * @return {!goog.math.Coordinate} This coordinate after scaling.\n */\ngoog.math.Coordinate.prototype.scale = function(sx, opt_sy) {\n  'use strict';\n  var sy = (typeof opt_sy === 'number') ? opt_sy : sx;\n  this.x *= sx;\n  this.y *= sy;\n  return this;\n};\n\n\n/**\n * Rotates this coordinate clockwise about the origin (or, optionally, the given\n * center) by the given angle, in radians.\n * @param {number} radians The angle by which to rotate this coordinate\n *     clockwise about the given center, in radians.\n * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults\n *     to (0, 0) if not given.\n */\ngoog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {\n  'use strict';\n  var center = opt_center || new goog.math.Coordinate(0, 0);\n\n  var x = this.x;\n  var y = this.y;\n  var cos = Math.cos(radians);\n  var sin = Math.sin(radians);\n\n  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;\n  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;\n};\n\n\n/**\n * Rotates this coordinate clockwise about the origin (or, optionally, the given\n * center) by the given angle, in degrees.\n * @param {number} degrees The angle by which to rotate this coordinate\n *     clockwise about the given center, in degrees.\n * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults\n *     to (0, 0) if not given.\n */\ngoog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {\n  'use strict';\n  this.rotateRadians(goog.math.toRadians(degrees), opt_center);\n};\n","~:compiled-at",1668862146562,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.math.coordinate.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]