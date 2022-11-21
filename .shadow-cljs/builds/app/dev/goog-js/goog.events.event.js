["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/event.js"],"~:js","goog.provide(\"goog.events.Event\");\ngoog.require(\"goog.Disposable\");\ngoog.require(\"goog.events.EventId\");\ngoog.events.Event = function(type, opt_target) {\n  this.type = type instanceof goog.events.EventId ? String(type) : type;\n  this.target = opt_target;\n  this.currentTarget = this.target;\n  this.propagationStopped_ = false;\n  this.defaultPrevented = false;\n};\ngoog.events.Event.prototype.hasPropagationStopped = function() {\n  return this.propagationStopped_;\n};\ngoog.events.Event.prototype.stopPropagation = function() {\n  this.propagationStopped_ = true;\n};\ngoog.events.Event.prototype.preventDefault = function() {\n  this.defaultPrevented = true;\n};\ngoog.events.Event.stopPropagation = function(e) {\n  e.stopPropagation();\n};\ngoog.events.Event.preventDefault = function(e) {\n  e.preventDefault();\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A base class for event objects.\n */\n\n\ngoog.provide('goog.events.Event');\n\n/**\n * goog.events.Event no longer depends on goog.Disposable. Keep requiring\n * goog.Disposable here to not break projects which assume this dependency.\n * @suppress {extraRequire}\n */\ngoog.require('goog.Disposable');\ngoog.require('goog.events.EventId');\n\n\n/**\n * A base class for event objects, so that they can support preventDefault and\n * stopPropagation.\n *\n * @param {string|!goog.events.EventId} type Event Type.\n * @param {Object=} opt_target Reference to the object that is the target of\n *     this event. It has to implement the `EventTarget` interface\n *     declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.\n * @constructor\n */\ngoog.events.Event = function(type, opt_target) {\n  'use strict';\n  /**\n   * Event type.\n   * @type {string}\n   */\n  this.type = type instanceof goog.events.EventId ? String(type) : type;\n\n  /**\n   * TODO(tbreisacher): The type should probably be\n   * EventTarget|goog.events.EventTarget.\n   *\n   * Target of the event.\n   * @type {Object|undefined}\n   */\n  this.target = opt_target;\n\n  /**\n   * Object that had the listener attached.\n   * @type {Object|undefined}\n   */\n  this.currentTarget = this.target;\n\n  /**\n   * Whether to cancel the event in internal capture/bubble processing for IE.\n   * @type {boolean}\n   * @private\n   */\n  this.propagationStopped_ = false;\n\n  /**\n   * Whether the default action has been prevented.\n   * This is a property to match the W3C specification at\n   * {@link http://www.w3.org/TR/DOM-Level-3-Events/\n   * #events-event-type-defaultPrevented}.\n   * Must be treated as read-only outside the class.\n   * @type {boolean}\n   */\n  this.defaultPrevented = false;\n};\n\n/**\n * @return {boolean} true iff internal propagation has been stopped.\n */\ngoog.events.Event.prototype.hasPropagationStopped = function() {\n  'use strict';\n  return this.propagationStopped_;\n};\n\n/**\n * Stops event propagation.\n * @return {void}\n */\ngoog.events.Event.prototype.stopPropagation = function() {\n  'use strict';\n  this.propagationStopped_ = true;\n};\n\n\n/**\n * Prevents the default action, for example a link redirecting to a url.\n * @return {void}\n */\ngoog.events.Event.prototype.preventDefault = function() {\n  'use strict';\n  this.defaultPrevented = true;\n};\n\n\n/**\n * Stops the propagation of the event. It is equivalent to\n * `e.stopPropagation()`, but can be used as the callback argument of\n * {@link goog.events.listen} without declaring another function.\n * @param {!goog.events.Event} e An event.\n * @return {void}\n */\ngoog.events.Event.stopPropagation = function(e) {\n  'use strict';\n  e.stopPropagation();\n};\n\n\n/**\n * Prevents the default action. It is equivalent to\n * `e.preventDefault()`, but can be used as the callback argument of\n * {@link goog.events.listen} without declaring another function.\n * @param {!goog.events.Event} e An event.\n * @return {void}\n */\ngoog.events.Event.preventDefault = function(e) {\n  'use strict';\n  e.preventDefault();\n};\n","~:compiled-at",1668862146700,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.event.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]