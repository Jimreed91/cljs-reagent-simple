["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/asserts/asserts.js"],"~:js","goog.provide(\"goog.asserts\");\ngoog.provide(\"goog.asserts.AssertionError\");\ngoog.require(\"goog.debug.Error\");\ngoog.require(\"goog.dom.NodeType\");\ngoog.asserts.ENABLE_ASSERTS = goog.define(\"goog.asserts.ENABLE_ASSERTS\", goog.DEBUG);\ngoog.asserts.AssertionError = function(messagePattern, messageArgs) {\n  goog.debug.Error.call(this, goog.asserts.subs_(messagePattern, messageArgs));\n  this.messagePattern = messagePattern;\n};\ngoog.inherits(goog.asserts.AssertionError, goog.debug.Error);\ngoog.asserts.AssertionError.prototype.name = \"AssertionError\";\ngoog.asserts.DEFAULT_ERROR_HANDLER = function(e) {\n  throw e;\n};\ngoog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;\ngoog.asserts.subs_ = function(pattern, subs) {\n  var splitParts = pattern.split(\"%s\");\n  var returnString = \"\";\n  var subLast = splitParts.length - 1;\n  for (var i = 0; i < subLast; i++) {\n    var sub = i < subs.length ? subs[i] : \"%s\";\n    returnString += splitParts[i] + sub;\n  }\n  return returnString + splitParts[subLast];\n};\ngoog.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {\n  var message = \"Assertion failed\";\n  if (givenMessage) {\n    message += \": \" + givenMessage;\n    var args = givenArgs;\n  } else if (defaultMessage) {\n    message += \": \" + defaultMessage;\n    args = defaultArgs;\n  }\n  var e = new goog.asserts.AssertionError(\"\" + message, args || []);\n  goog.asserts.errorHandler_(e);\n};\ngoog.asserts.setErrorHandler = function(errorHandler) {\n  if (goog.asserts.ENABLE_ASSERTS) {\n    goog.asserts.errorHandler_ = errorHandler;\n  }\n};\ngoog.asserts.assert = function(condition, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && !condition) {\n    goog.asserts.doAssertFailure_(\"\", null, opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return condition;\n};\ngoog.asserts.assertExists = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && value == null) {\n    goog.asserts.doAssertFailure_(\"Expected to exist: %s.\", [value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.fail = function(opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS) {\n    goog.asserts.errorHandler_(new goog.asserts.AssertionError(\"Failure\" + (opt_message ? \": \" + opt_message : \"\"), Array.prototype.slice.call(arguments, 1)));\n  }\n};\ngoog.asserts.assertNumber = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== \"number\") {\n    goog.asserts.doAssertFailure_(\"Expected number but got %s: %s.\", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.assertString = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== \"string\") {\n    goog.asserts.doAssertFailure_(\"Expected string but got %s: %s.\", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.assertFunction = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== \"function\") {\n    goog.asserts.doAssertFailure_(\"Expected function but got %s: %s.\", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.assertObject = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {\n    goog.asserts.doAssertFailure_(\"Expected object but got %s: %s.\", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.assertArray = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && !Array.isArray(value)) {\n    goog.asserts.doAssertFailure_(\"Expected array but got %s: %s.\", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.assertBoolean = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== \"boolean\") {\n    goog.asserts.doAssertFailure_(\"Expected boolean but got %s: %s.\", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.assertElement = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != goog.dom.NodeType.ELEMENT)) {\n    goog.asserts.doAssertFailure_(\"Expected Element but got %s: %s.\", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {\n    goog.asserts.doAssertFailure_(\"Expected instanceof %s but got %s.\", [goog.asserts.getType_(type), goog.asserts.getType_(value)], opt_message, Array.prototype.slice.call(arguments, 3));\n  }\n  return value;\n};\ngoog.asserts.assertFinite = function(value, opt_message, var_args) {\n  if (goog.asserts.ENABLE_ASSERTS && (typeof value != \"number\" || !isFinite(value))) {\n    goog.asserts.doAssertFailure_(\"Expected %s to be a finite number but it is not.\", [value], opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\ngoog.asserts.getType_ = function(value) {\n  if (value instanceof Function) {\n    return value.displayName || value.name || \"unknown type name\";\n  } else if (value instanceof Object) {\n    return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);\n  } else {\n    return value === null ? \"null\" : typeof value;\n  }\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities to check the preconditions, postconditions and\n * invariants runtime.\n *\n * Methods in this package are given special treatment by the compiler\n * for type-inference. For example, <code>goog.asserts.assert(foo)</code>\n * will make the compiler treat <code>foo</code> as non-nullable. Similarly,\n * <code>goog.asserts.assertNumber(foo)</code> informs the compiler about the\n * type of <code>foo</code>. Where applicable, such assertions are preferable to\n * casts by jsdoc with <code>@type</code>.\n *\n * The compiler has an option to disable asserts. So code like:\n * <code>\n * var x = goog.asserts.assert(foo());\n * goog.asserts.assert(bar());\n * </code>\n * will be transformed into:\n * <code>\n * var x = foo();\n * </code>\n * The compiler will leave in foo() (because its return value is used),\n * but it will remove bar() because it assumes it does not have side-effects.\n *\n * Additionally, note the compiler will consider the type to be \"tightened\" for\n * all statements <em>after</em> the assertion. For example:\n * <code>\n * const /** ?Object &#ast;/ value = foo();\n * goog.asserts.assert(value);\n * // \"value\" is of type {!Object} at this point.\n * </code>\n */\n\ngoog.provide('goog.asserts');\ngoog.provide('goog.asserts.AssertionError');\n\ngoog.require('goog.debug.Error');\ngoog.require('goog.dom.NodeType');\n\n\n/**\n * @define {boolean} Whether to strip out asserts or to leave them in.\n */\ngoog.asserts.ENABLE_ASSERTS =\n    goog.define('goog.asserts.ENABLE_ASSERTS', goog.DEBUG);\n\n\n\n/**\n * Error object for failed assertions.\n * @param {string} messagePattern The pattern that was used to form message.\n * @param {!Array<*>} messageArgs The items to substitute into the pattern.\n * @constructor\n * @extends {goog.debug.Error}\n * @final\n */\ngoog.asserts.AssertionError = function(messagePattern, messageArgs) {\n  'use strict';\n  goog.debug.Error.call(this, goog.asserts.subs_(messagePattern, messageArgs));\n\n  /**\n   * The message pattern used to format the error message. Error handlers can\n   * use this to uniquely identify the assertion.\n   * @type {string}\n   */\n  this.messagePattern = messagePattern;\n};\ngoog.inherits(goog.asserts.AssertionError, goog.debug.Error);\n\n\n/** @override @type {string} */\ngoog.asserts.AssertionError.prototype.name = 'AssertionError';\n\n\n/**\n * The default error handler.\n * @param {!goog.asserts.AssertionError} e The exception to be handled.\n * @return {void}\n */\ngoog.asserts.DEFAULT_ERROR_HANDLER = function(e) {\n  'use strict';\n  throw e;\n};\n\n\n/**\n * The handler responsible for throwing or logging assertion errors.\n * @private {function(!goog.asserts.AssertionError)}\n */\ngoog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;\n\n\n/**\n * Does simple python-style string substitution.\n * subs(\"foo%s hot%s\", \"bar\", \"dog\") becomes \"foobar hotdog\".\n * @param {string} pattern The string containing the pattern.\n * @param {!Array<*>} subs The items to substitute into the pattern.\n * @return {string} A copy of `str` in which each occurrence of\n *     {@code %s} has been replaced an argument from `var_args`.\n * @private\n */\ngoog.asserts.subs_ = function(pattern, subs) {\n  'use strict';\n  var splitParts = pattern.split('%s');\n  var returnString = '';\n\n  // Replace up to the last split part. We are inserting in the\n  // positions between split parts.\n  var subLast = splitParts.length - 1;\n  for (var i = 0; i < subLast; i++) {\n    // keep unsupplied as '%s'\n    var sub = (i < subs.length) ? subs[i] : '%s';\n    returnString += splitParts[i] + sub;\n  }\n  return returnString + splitParts[subLast];\n};\n\n\n/**\n * Throws an exception with the given message and \"Assertion failed\" prefixed\n * onto it.\n * @param {string} defaultMessage The message to use if givenMessage is empty.\n * @param {Array<*>} defaultArgs The substitution arguments for defaultMessage.\n * @param {string|undefined} givenMessage Message supplied by the caller.\n * @param {Array<*>} givenArgs The substitution arguments for givenMessage.\n * @throws {goog.asserts.AssertionError} When the value is not a number.\n * @private\n */\ngoog.asserts.doAssertFailure_ = function(\n    defaultMessage, defaultArgs, givenMessage, givenArgs) {\n  'use strict';\n  var message = 'Assertion failed';\n  if (givenMessage) {\n    message += ': ' + givenMessage;\n    var args = givenArgs;\n  } else if (defaultMessage) {\n    message += ': ' + defaultMessage;\n    args = defaultArgs;\n  }\n  // The '' + works around an Opera 10 bug in the unit tests. Without it,\n  // a stack trace is added to var message above. With this, a stack trace is\n  // not added until this line (it causes the extra garbage to be added after\n  // the assertion message instead of in the middle of it).\n  var e = new goog.asserts.AssertionError('' + message, args || []);\n  goog.asserts.errorHandler_(e);\n};\n\n\n/**\n * Sets a custom error handler that can be used to customize the behavior of\n * assertion failures, for example by turning all assertion failures into log\n * messages.\n * @param {function(!goog.asserts.AssertionError)} errorHandler\n * @return {void}\n */\ngoog.asserts.setErrorHandler = function(errorHandler) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS) {\n    goog.asserts.errorHandler_ = errorHandler;\n  }\n};\n\n\n/**\n * Checks if the condition evaluates to true if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @template T\n * @param {T} condition The condition to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {T} The value of the condition.\n * @throws {goog.asserts.AssertionError} When the condition evaluates to false.\n * @closurePrimitive {asserts.truthy}\n */\ngoog.asserts.assert = function(condition, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && !condition) {\n    goog.asserts.doAssertFailure_(\n        '', null, opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return condition;\n};\n\n\n/**\n * Checks if `value` is `null` or `undefined` if goog.asserts.ENABLE_ASSERTS is\n * true.\n *\n * @param {T} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {R} `value` with its type narrowed to exclude `null` and `undefined`.\n *\n * @template T\n * @template R :=\n *     mapunion(T, (V) =>\n *         cond(eq(V, 'null'),\n *             none(),\n *             cond(eq(V, 'undefined'),\n *                 none(),\n *                 V)))\n *  =:\n *\n * @throws {!goog.asserts.AssertionError} When `value` is `null` or `undefined`.\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertExists = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && value == null) {\n    goog.asserts.doAssertFailure_(\n        'Expected to exist: %s.', [value], opt_message,\n        Array.prototype.slice.call(arguments, 2));\n  }\n  return value;\n};\n\n\n/**\n * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case\n * when we want to add a check in the unreachable area like switch-case\n * statement:\n *\n * <pre>\n *  switch(type) {\n *    case FOO: doSomething(); break;\n *    case BAR: doSomethingElse(); break;\n *    default: goog.asserts.fail('Unrecognized type: ' + type);\n *      // We have only 2 types - \"default:\" section is unreachable code.\n *  }\n * </pre>\n *\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {void}\n * @throws {goog.asserts.AssertionError} Failure.\n * @closurePrimitive {asserts.fail}\n */\ngoog.asserts.fail = function(opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS) {\n    goog.asserts.errorHandler_(new goog.asserts.AssertionError(\n        'Failure' + (opt_message ? ': ' + opt_message : ''),\n        Array.prototype.slice.call(arguments, 1)));\n  }\n};\n\n\n/**\n * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {number} The value, guaranteed to be a number when asserts enabled.\n * @throws {goog.asserts.AssertionError} When the value is not a number.\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertNumber = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== 'number') {\n    goog.asserts.doAssertFailure_(\n        'Expected number but got %s: %s.', [goog.typeOf(value), value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {number} */ (value);\n};\n\n\n/**\n * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {string} The value, guaranteed to be a string when asserts enabled.\n * @throws {goog.asserts.AssertionError} When the value is not a string.\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertString = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== 'string') {\n    goog.asserts.doAssertFailure_(\n        'Expected string but got %s: %s.', [goog.typeOf(value), value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {string} */ (value);\n};\n\n\n/**\n * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {!Function} The value, guaranteed to be a function when asserts\n *     enabled.\n * @throws {goog.asserts.AssertionError} When the value is not a function.\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertFunction = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== 'function') {\n    goog.asserts.doAssertFailure_(\n        'Expected function but got %s: %s.', [goog.typeOf(value), value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {!Function} */ (value);\n};\n\n\n/**\n * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {!Object} The value, guaranteed to be a non-null object.\n * @throws {goog.asserts.AssertionError} When the value is not an object.\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertObject = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {\n    goog.asserts.doAssertFailure_(\n        'Expected object but got %s: %s.', [goog.typeOf(value), value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {!Object} */ (value);\n};\n\n\n/**\n * Checks if the value is an Array if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {!Array<?>} The value, guaranteed to be a non-null array.\n * @throws {goog.asserts.AssertionError} When the value is not an array.\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertArray = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && !Array.isArray(value)) {\n    goog.asserts.doAssertFailure_(\n        'Expected array but got %s: %s.', [goog.typeOf(value), value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {!Array<?>} */ (value);\n};\n\n\n/**\n * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {boolean} The value, guaranteed to be a boolean when asserts are\n *     enabled.\n * @throws {goog.asserts.AssertionError} When the value is not a boolean.\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertBoolean = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && typeof value !== 'boolean') {\n    goog.asserts.doAssertFailure_(\n        'Expected boolean but got %s: %s.', [goog.typeOf(value), value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {boolean} */ (value);\n};\n\n\n/**\n * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @return {!Element} The value, likely to be a DOM Element when asserts are\n *     enabled.\n * @throws {goog.asserts.AssertionError} When the value is not an Element.\n * @closurePrimitive {asserts.matchesReturn}\n * @deprecated Use goog.asserts.dom.assertIsElement instead.\n */\ngoog.asserts.assertElement = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS &&\n      (!goog.isObject(value) ||\n       /** @type {!Node} */ (value).nodeType != goog.dom.NodeType.ELEMENT)) {\n    goog.asserts.doAssertFailure_(\n        'Expected Element but got %s: %s.', [goog.typeOf(value), value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {!Element} */ (value);\n};\n\n\n/**\n * Checks if the value is an instance of the user-defined type if\n * goog.asserts.ENABLE_ASSERTS is true.\n *\n * The compiler may tighten the type returned by this function.\n *\n * Do not use this to ensure a value is an HTMLElement or a subclass! Cross-\n * document DOM inherits from separate - though identical - browser classes, and\n * such a check will unexpectedly fail. Please use the methods in\n * goog.asserts.dom for these purposes.\n *\n * @param {?} value The value to check.\n * @param {function(new: T, ...)} type A user-defined constructor.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @throws {goog.asserts.AssertionError} When the value is not an instance of\n *     type.\n * @return {T}\n * @template T\n * @closurePrimitive {asserts.matchesReturn}\n */\ngoog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {\n    goog.asserts.doAssertFailure_(\n        'Expected instanceof %s but got %s.',\n        [goog.asserts.getType_(type), goog.asserts.getType_(value)],\n        opt_message, Array.prototype.slice.call(arguments, 3));\n  }\n  return value;\n};\n\n\n/**\n * Checks whether the value is a finite number, if goog.asserts.ENABLE_ASSERTS\n * is true.\n *\n * @param {*} value The value to check.\n * @param {string=} opt_message Error message in case of failure.\n * @param {...*} var_args The items to substitute into the failure message.\n * @throws {goog.asserts.AssertionError} When the value is not a number, or is\n *     a non-finite number such as NaN, Infinity or -Infinity.\n * @return {number} The value initially passed in.\n */\ngoog.asserts.assertFinite = function(value, opt_message, var_args) {\n  'use strict';\n  if (goog.asserts.ENABLE_ASSERTS &&\n      (typeof value != 'number' || !isFinite(value))) {\n    goog.asserts.doAssertFailure_(\n        'Expected %s to be a finite number but it is not.', [value],\n        opt_message, Array.prototype.slice.call(arguments, 2));\n  }\n  return /** @type {number} */ (value);\n};\n\n/**\n * Returns the type of a value. If a constructor is passed, and a suitable\n * string cannot be found, 'unknown type name' will be returned.\n * @param {*} value A constructor, object, or primitive.\n * @return {string} The best display name for the value, or 'unknown type name'.\n * @private\n */\ngoog.asserts.getType_ = function(value) {\n  'use strict';\n  if (value instanceof Function) {\n    return value.displayName || value.name || 'unknown type name';\n  } else if (value instanceof Object) {\n    return /** @type {string} */ (value.constructor.displayName) ||\n        value.constructor.name || Object.prototype.toString.call(value);\n  } else {\n    return value === null ? 'null' : typeof value;\n  }\n};\n","~:compiled-at",1668872167160,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.asserts.asserts.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]