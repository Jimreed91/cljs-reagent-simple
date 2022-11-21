["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/tags.js"],"~:js","goog.provide(\"goog.dom.tags\");\ngoog.require(\"goog.object\");\ngoog.dom.tags.VOID_TAGS_ = goog.object.createSet(\"area\", \"base\", \"br\", \"col\", \"command\", \"embed\", \"hr\", \"img\", \"input\", \"keygen\", \"link\", \"meta\", \"param\", \"source\", \"track\", \"wbr\");\ngoog.dom.tags.isVoidTag = function(tagName) {\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities for HTML element tag names.\n */\ngoog.provide('goog.dom.tags');\n\ngoog.require('goog.object');\n\n\n/**\n * The void elements specified by\n * http://www.w3.org/TR/html-markup/syntax.html#void-elements.\n * @const @private {!Object<string, boolean>}\n */\ngoog.dom.tags.VOID_TAGS_ = goog.object.createSet(\n    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',\n    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr');\n\n\n/**\n * Checks whether the tag is void (with no contents allowed and no legal end\n * tag), for example 'br'.\n * @param {string} tagName The tag name in lower case.\n * @return {boolean}\n */\ngoog.dom.tags.isVoidTag = function(tagName) {\n  'use strict';\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\n};\n","~:compiled-at",1668873222492,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.tags.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]