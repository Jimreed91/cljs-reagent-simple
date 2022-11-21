["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/math/box.js"],"~:js","goog.provide(\"goog.math.Box\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.math.Coordinate\");\ngoog.math.Box = function(top, right, bottom, left) {\n  this.top = top;\n  this.right = right;\n  this.bottom = bottom;\n  this.left = left;\n};\ngoog.math.Box.boundingBox = function(var_args) {\n  var box = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);\n  for (var i = 1; i < arguments.length; i++) {\n    box.expandToIncludeCoordinate(arguments[i]);\n  }\n  return box;\n};\ngoog.math.Box.prototype.getWidth = function() {\n  return this.right - this.left;\n};\ngoog.math.Box.prototype.getHeight = function() {\n  return this.bottom - this.top;\n};\ngoog.math.Box.prototype.clone = function() {\n  return new goog.math.Box(this.top, this.right, this.bottom, this.left);\n};\nif (goog.DEBUG) {\n  goog.math.Box.prototype.toString = function() {\n    return \"(\" + this.top + \"t, \" + this.right + \"r, \" + this.bottom + \"b, \" + this.left + \"l)\";\n  };\n}\ngoog.math.Box.prototype.contains = function(other) {\n  return goog.math.Box.contains(this, other);\n};\ngoog.math.Box.prototype.expand = function(top, opt_right, opt_bottom, opt_left) {\n  if (goog.isObject(top)) {\n    this.top -= top.top;\n    this.right += top.right;\n    this.bottom += top.bottom;\n    this.left -= top.left;\n  } else {\n    this.top -= top;\n    this.right += Number(opt_right);\n    this.bottom += Number(opt_bottom);\n    this.left -= Number(opt_left);\n  }\n  return this;\n};\ngoog.math.Box.prototype.expandToInclude = function(box) {\n  this.left = Math.min(this.left, box.left);\n  this.top = Math.min(this.top, box.top);\n  this.right = Math.max(this.right, box.right);\n  this.bottom = Math.max(this.bottom, box.bottom);\n};\ngoog.math.Box.prototype.expandToIncludeCoordinate = function(coord) {\n  this.top = Math.min(this.top, coord.y);\n  this.right = Math.max(this.right, coord.x);\n  this.bottom = Math.max(this.bottom, coord.y);\n  this.left = Math.min(this.left, coord.x);\n};\ngoog.math.Box.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left;\n};\ngoog.math.Box.contains = function(box, other) {\n  if (!box || !other) {\n    return false;\n  }\n  if (other instanceof goog.math.Box) {\n    return other.left >= box.left && other.right <= box.right && other.top >= box.top && other.bottom <= box.bottom;\n  }\n  return other.x >= box.left && other.x <= box.right && other.y >= box.top && other.y <= box.bottom;\n};\ngoog.math.Box.relativePositionX = function(box, coord) {\n  if (coord.x < box.left) {\n    return coord.x - box.left;\n  } else if (coord.x > box.right) {\n    return coord.x - box.right;\n  }\n  return 0;\n};\ngoog.math.Box.relativePositionY = function(box, coord) {\n  if (coord.y < box.top) {\n    return coord.y - box.top;\n  } else if (coord.y > box.bottom) {\n    return coord.y - box.bottom;\n  }\n  return 0;\n};\ngoog.math.Box.distance = function(box, coord) {\n  var x = goog.math.Box.relativePositionX(box, coord);\n  var y = goog.math.Box.relativePositionY(box, coord);\n  return Math.sqrt(x * x + y * y);\n};\ngoog.math.Box.intersects = function(a, b) {\n  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom;\n};\ngoog.math.Box.intersectsWithPadding = function(a, b, padding) {\n  return a.left <= b.right + padding && b.left <= a.right + padding && a.top <= b.bottom + padding && b.top <= a.bottom + padding;\n};\ngoog.math.Box.prototype.ceil = function() {\n  this.top = Math.ceil(this.top);\n  this.right = Math.ceil(this.right);\n  this.bottom = Math.ceil(this.bottom);\n  this.left = Math.ceil(this.left);\n  return this;\n};\ngoog.math.Box.prototype.floor = function() {\n  this.top = Math.floor(this.top);\n  this.right = Math.floor(this.right);\n  this.bottom = Math.floor(this.bottom);\n  this.left = Math.floor(this.left);\n  return this;\n};\ngoog.math.Box.prototype.round = function() {\n  this.top = Math.round(this.top);\n  this.right = Math.round(this.right);\n  this.bottom = Math.round(this.bottom);\n  this.left = Math.round(this.left);\n  return this;\n};\ngoog.math.Box.prototype.translate = function(tx, opt_ty) {\n  if (tx instanceof goog.math.Coordinate) {\n    this.left += tx.x;\n    this.right += tx.x;\n    this.top += tx.y;\n    this.bottom += tx.y;\n  } else {\n    goog.asserts.assertNumber(tx);\n    this.left += tx;\n    this.right += tx;\n    if (typeof opt_ty === \"number\") {\n      this.top += opt_ty;\n      this.bottom += opt_ty;\n    }\n  }\n  return this;\n};\ngoog.math.Box.prototype.scale = function(sx, opt_sy) {\n  var sy = typeof opt_sy === \"number\" ? opt_sy : sx;\n  this.left *= sx;\n  this.right *= sx;\n  this.top *= sy;\n  this.bottom *= sy;\n  return this;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A utility class for representing a numeric box.\n */\n\n\ngoog.provide('goog.math.Box');\n\ngoog.require('goog.asserts');\ngoog.require('goog.math.Coordinate');\n\n\n\n/**\n * Class for representing a box. A box is specified as a top, right, bottom,\n * and left. A box is useful for representing margins and padding.\n *\n * This class assumes 'screen coordinates': larger Y coordinates are further\n * from the top of the screen.\n *\n * @param {number} top Top.\n * @param {number} right Right.\n * @param {number} bottom Bottom.\n * @param {number} left Left.\n * @struct\n * @constructor\n */\ngoog.math.Box = function(top, right, bottom, left) {\n  'use strict';\n  /**\n   * Top\n   * @type {number}\n   */\n  this.top = top;\n\n  /**\n   * Right\n   * @type {number}\n   */\n  this.right = right;\n\n  /**\n   * Bottom\n   * @type {number}\n   */\n  this.bottom = bottom;\n\n  /**\n   * Left\n   * @type {number}\n   */\n  this.left = left;\n};\n\n\n/**\n * Creates a Box by bounding a collection of goog.math.Coordinate objects\n * @param {...goog.math.Coordinate} var_args Coordinates to be included inside\n *     the box.\n * @return {!goog.math.Box} A Box containing all the specified Coordinates.\n */\ngoog.math.Box.boundingBox = function(var_args) {\n  'use strict';\n  var box = new goog.math.Box(\n      arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);\n  for (var i = 1; i < arguments.length; i++) {\n    box.expandToIncludeCoordinate(arguments[i]);\n  }\n  return box;\n};\n\n\n/**\n * @return {number} width The width of this Box.\n */\ngoog.math.Box.prototype.getWidth = function() {\n  'use strict';\n  return this.right - this.left;\n};\n\n\n/**\n * @return {number} height The height of this Box.\n */\ngoog.math.Box.prototype.getHeight = function() {\n  'use strict';\n  return this.bottom - this.top;\n};\n\n\n/**\n * Creates a copy of the box with the same dimensions.\n * @return {!goog.math.Box} A clone of this Box.\n */\ngoog.math.Box.prototype.clone = function() {\n  'use strict';\n  return new goog.math.Box(this.top, this.right, this.bottom, this.left);\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a nice string representing the box.\n   * @return {string} In the form (50t, 73r, 24b, 13l).\n   * @override\n   */\n  goog.math.Box.prototype.toString = function() {\n    'use strict';\n    return '(' + this.top + 't, ' + this.right + 'r, ' + this.bottom + 'b, ' +\n        this.left + 'l)';\n  };\n}\n\n\n/**\n * Returns whether the box contains a coordinate or another box.\n *\n * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.\n * @return {boolean} Whether the box contains the coordinate or other box.\n */\ngoog.math.Box.prototype.contains = function(other) {\n  'use strict';\n  return goog.math.Box.contains(this, other);\n};\n\n\n/**\n * Expands box with the given margins.\n *\n * @param {number|goog.math.Box} top Top margin or box with all margins.\n * @param {number=} opt_right Right margin.\n * @param {number=} opt_bottom Bottom margin.\n * @param {number=} opt_left Left margin.\n * @return {!goog.math.Box} A reference to this Box.\n */\ngoog.math.Box.prototype.expand = function(\n    top, opt_right, opt_bottom, opt_left) {\n  'use strict';\n  if (goog.isObject(top)) {\n    this.top -= top.top;\n    this.right += top.right;\n    this.bottom += top.bottom;\n    this.left -= top.left;\n  } else {\n    this.top -= /** @type {number} */ (top);\n    this.right += Number(opt_right);\n    this.bottom += Number(opt_bottom);\n    this.left -= Number(opt_left);\n  }\n\n  return this;\n};\n\n\n/**\n * Expand this box to include another box.\n * NOTE(user): This is used in code that needs to be very fast, please don't\n * add functionality to this function at the expense of speed (variable\n * arguments, accepting multiple argument types, etc).\n * @param {goog.math.Box} box The box to include in this one.\n */\ngoog.math.Box.prototype.expandToInclude = function(box) {\n  'use strict';\n  this.left = Math.min(this.left, box.left);\n  this.top = Math.min(this.top, box.top);\n  this.right = Math.max(this.right, box.right);\n  this.bottom = Math.max(this.bottom, box.bottom);\n};\n\n\n/**\n * Expand this box to include the coordinate.\n * @param {!goog.math.Coordinate} coord The coordinate to be included\n *     inside the box.\n */\ngoog.math.Box.prototype.expandToIncludeCoordinate = function(coord) {\n  'use strict';\n  this.top = Math.min(this.top, coord.y);\n  this.right = Math.max(this.right, coord.x);\n  this.bottom = Math.max(this.bottom, coord.y);\n  this.left = Math.min(this.left, coord.x);\n};\n\n\n/**\n * Compares boxes for equality.\n * @param {goog.math.Box} a A Box.\n * @param {goog.math.Box} b A Box.\n * @return {boolean} True iff the boxes are equal, or if both are null.\n */\ngoog.math.Box.equals = function(a, b) {\n  'use strict';\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.top == b.top && a.right == b.right && a.bottom == b.bottom &&\n      a.left == b.left;\n};\n\n\n/**\n * Returns whether a box contains a coordinate or another box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate|goog.math.Box} other A Coordinate or a Box.\n * @return {boolean} Whether the box contains the coordinate or other box.\n */\ngoog.math.Box.contains = function(box, other) {\n  'use strict';\n  if (!box || !other) {\n    return false;\n  }\n\n  if (other instanceof goog.math.Box) {\n    return other.left >= box.left && other.right <= box.right &&\n        other.top >= box.top && other.bottom <= box.bottom;\n  }\n\n  // other is a Coordinate.\n  return other.x >= box.left && other.x <= box.right && other.y >= box.top &&\n      other.y <= box.bottom;\n};\n\n\n/**\n * Returns the relative x position of a coordinate compared to a box.  Returns\n * zero if the coordinate is inside the box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate} coord A Coordinate.\n * @return {number} The x position of `coord` relative to the nearest\n *     side of `box`, or zero if `coord` is inside `box`.\n */\ngoog.math.Box.relativePositionX = function(box, coord) {\n  'use strict';\n  if (coord.x < box.left) {\n    return coord.x - box.left;\n  } else if (coord.x > box.right) {\n    return coord.x - box.right;\n  }\n  return 0;\n};\n\n\n/**\n * Returns the relative y position of a coordinate compared to a box.  Returns\n * zero if the coordinate is inside the box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate} coord A Coordinate.\n * @return {number} The y position of `coord` relative to the nearest\n *     side of `box`, or zero if `coord` is inside `box`.\n */\ngoog.math.Box.relativePositionY = function(box, coord) {\n  'use strict';\n  if (coord.y < box.top) {\n    return coord.y - box.top;\n  } else if (coord.y > box.bottom) {\n    return coord.y - box.bottom;\n  }\n  return 0;\n};\n\n\n/**\n * Returns the distance between a coordinate and the nearest corner/side of a\n * box. Returns zero if the coordinate is inside the box.\n *\n * @param {goog.math.Box} box A Box.\n * @param {goog.math.Coordinate} coord A Coordinate.\n * @return {number} The distance between `coord` and the nearest\n *     corner/side of `box`, or zero if `coord` is inside\n *     `box`.\n */\ngoog.math.Box.distance = function(box, coord) {\n  'use strict';\n  var x = goog.math.Box.relativePositionX(box, coord);\n  var y = goog.math.Box.relativePositionY(box, coord);\n  return Math.sqrt(x * x + y * y);\n};\n\n\n/**\n * Returns whether two boxes intersect.\n *\n * @param {goog.math.Box} a A Box.\n * @param {goog.math.Box} b A second Box.\n * @return {boolean} Whether the boxes intersect.\n */\ngoog.math.Box.intersects = function(a, b) {\n  'use strict';\n  return (\n      a.left <= b.right && b.left <= a.right && a.top <= b.bottom &&\n      b.top <= a.bottom);\n};\n\n\n/**\n * Returns whether two boxes would intersect with additional padding.\n *\n * @param {goog.math.Box} a A Box.\n * @param {goog.math.Box} b A second Box.\n * @param {number} padding The additional padding.\n * @return {boolean} Whether the boxes intersect.\n */\ngoog.math.Box.intersectsWithPadding = function(a, b, padding) {\n  'use strict';\n  return (\n      a.left <= b.right + padding && b.left <= a.right + padding &&\n      a.top <= b.bottom + padding && b.top <= a.bottom + padding);\n};\n\n\n/**\n * Rounds the fields to the next larger integer values.\n *\n * @return {!goog.math.Box} This box with ceil'd fields.\n */\ngoog.math.Box.prototype.ceil = function() {\n  'use strict';\n  this.top = Math.ceil(this.top);\n  this.right = Math.ceil(this.right);\n  this.bottom = Math.ceil(this.bottom);\n  this.left = Math.ceil(this.left);\n  return this;\n};\n\n\n/**\n * Rounds the fields to the next smaller integer values.\n *\n * @return {!goog.math.Box} This box with floored fields.\n */\ngoog.math.Box.prototype.floor = function() {\n  'use strict';\n  this.top = Math.floor(this.top);\n  this.right = Math.floor(this.right);\n  this.bottom = Math.floor(this.bottom);\n  this.left = Math.floor(this.left);\n  return this;\n};\n\n\n/**\n * Rounds the fields to nearest integer values.\n *\n * @return {!goog.math.Box} This box with rounded fields.\n */\ngoog.math.Box.prototype.round = function() {\n  'use strict';\n  this.top = Math.round(this.top);\n  this.right = Math.round(this.right);\n  this.bottom = Math.round(this.bottom);\n  this.left = Math.round(this.left);\n  return this;\n};\n\n\n/**\n * Translates this box by the given offsets. If a `goog.math.Coordinate`\n * is given, then the left and right values are translated by the coordinate's\n * x value and the top and bottom values are translated by the coordinate's y\n * value.  Otherwise, `tx` and `opt_ty` are used to translate the x\n * and y dimension values.\n *\n * @param {number|goog.math.Coordinate} tx The value to translate the x\n *     dimension values by or the coordinate to translate this box by.\n * @param {number=} opt_ty The value to translate y dimension values by.\n * @return {!goog.math.Box} This box after translating.\n */\ngoog.math.Box.prototype.translate = function(tx, opt_ty) {\n  'use strict';\n  if (tx instanceof goog.math.Coordinate) {\n    this.left += tx.x;\n    this.right += tx.x;\n    this.top += tx.y;\n    this.bottom += tx.y;\n  } else {\n    goog.asserts.assertNumber(tx);\n    this.left += tx;\n    this.right += tx;\n    if (typeof opt_ty === 'number') {\n      this.top += opt_ty;\n      this.bottom += opt_ty;\n    }\n  }\n  return this;\n};\n\n\n/**\n * Scales this coordinate by the given scale factors. The x and y dimension\n * values are scaled by `sx` and `opt_sy` respectively.\n * If `opt_sy` is not given, then `sx` is used for both x and y.\n *\n * @param {number} sx The scale factor to use for the x dimension.\n * @param {number=} opt_sy The scale factor to use for the y dimension.\n * @return {!goog.math.Box} This box after scaling.\n */\ngoog.math.Box.prototype.scale = function(sx, opt_sy) {\n  'use strict';\n  var sy = (typeof opt_sy === 'number') ? opt_sy : sx;\n  this.left *= sx;\n  this.right *= sx;\n  this.top *= sy;\n  this.bottom *= sy;\n  return this;\n};\n","~:compiled-at",1668872167509,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.math.box.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]