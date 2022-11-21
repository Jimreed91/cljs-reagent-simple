["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/handlers.js"],"~:js","goog.provide(\"com.cognitect.transit.handlers\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.types\");\ngoog.require(\"goog.math.Long\");\ngoog.scope(function() {\n  var handlers = com.cognitect.transit.handlers, util = com.cognitect.transit.util, types = com.cognitect.transit.types, Long = goog.math.Long;\n  handlers.ctorGuid = 0;\n  handlers.ctorGuidProperty = \"transit$guid$\" + util.randomUUID();\n  handlers.typeTag = function(ctor) {\n    if (ctor == null) {\n      return \"null\";\n    } else if (ctor === String) {\n      return \"string\";\n    } else if (ctor === Boolean) {\n      return \"boolean\";\n    } else if (ctor === Number) {\n      return \"number\";\n    } else if (ctor === Array) {\n      return \"array\";\n    } else if (ctor === Object) {\n      return \"map\";\n    } else {\n      var tag = ctor[handlers.ctorGuidProperty];\n      if (tag == null) {\n        if (typeof Object.defineProperty != \"undefined\") {\n          tag = ++handlers.ctorGuid;\n          Object.defineProperty(ctor, handlers.ctorGuidProperty, {value:tag, enumerable:false});\n        } else {\n          ctor[handlers.ctorGuidProperty] = tag = ++handlers.ctorGuid;\n        }\n      }\n      return tag;\n    }\n  };\n  handlers.constructor = function(x) {\n    if (x == null) {\n      return null;\n    } else {\n      return x.constructor;\n    }\n  };\n  handlers.padZeros = function(n, m) {\n    var s = n.toString();\n    for (var i = s.length; i < m; i++) {\n      s = \"0\" + s;\n    }\n    return s;\n  };\n  handlers.stringableKeys = function(m) {\n    var stringable = false, ks = util.objectKeys(m);\n    for (var i = 0; i < ks.length; i++) {\n    }\n    return true;\n  };\n  handlers.NilHandler = function Transit$NilHandler() {\n  };\n  handlers.NilHandler.prototype.tag = function(v) {\n    return \"_\";\n  };\n  handlers.NilHandler.prototype.rep = function(v) {\n    return null;\n  };\n  handlers.NilHandler.prototype.stringRep = function(v) {\n    return \"null\";\n  };\n  handlers.StringHandler = function Transit$StringHandler() {\n  };\n  handlers.StringHandler.prototype.tag = function(v) {\n    return \"s\";\n  };\n  handlers.StringHandler.prototype.rep = function(v) {\n    return v;\n  };\n  handlers.StringHandler.prototype.stringRep = function(v) {\n    return v;\n  };\n  handlers.NumberHandler = function Transit$NumberHandler() {\n  };\n  handlers.NumberHandler.prototype.tag = function(v) {\n    return \"i\";\n  };\n  handlers.NumberHandler.prototype.rep = function(v) {\n    return v;\n  };\n  handlers.NumberHandler.prototype.stringRep = function(v) {\n    return v.toString();\n  };\n  handlers.IntegerHandler = function Transit$IntegerHandler() {\n  };\n  handlers.IntegerHandler.prototype.tag = function(v) {\n    return \"i\";\n  };\n  handlers.IntegerHandler.prototype.rep = function(v) {\n    return v.toString();\n  };\n  handlers.IntegerHandler.prototype.stringRep = function(v) {\n    return v.toString();\n  };\n  handlers.BooleanHandler = function Transit$BooleanHandler() {\n  };\n  handlers.BooleanHandler.prototype.tag = function(v) {\n    return \"?\";\n  };\n  handlers.BooleanHandler.prototype.rep = function(v) {\n    return v;\n  };\n  handlers.BooleanHandler.prototype.stringRep = function(v) {\n    return v.toString();\n  };\n  handlers.ArrayHandler = function Transit$ArrayHandler() {\n  };\n  handlers.ArrayHandler.prototype.tag = function(v) {\n    return \"array\";\n  };\n  handlers.ArrayHandler.prototype.rep = function(v) {\n    return v;\n  };\n  handlers.ArrayHandler.prototype.stringRep = function(v) {\n    return null;\n  };\n  handlers.MapHandler = function Transit$MapHandler() {\n  };\n  handlers.MapHandler.prototype.tag = function(v) {\n    return \"map\";\n  };\n  handlers.MapHandler.prototype.rep = function(v) {\n    return v;\n  };\n  handlers.MapHandler.prototype.stringRep = function(v) {\n    return null;\n  };\n  handlers.VerboseDateHandler = function Transit$VerboseDateHandler() {\n  };\n  handlers.VerboseDateHandler.prototype.tag = function(v) {\n    return \"t\";\n  };\n  handlers.VerboseDateHandler.prototype.rep = function(v) {\n    return v.getUTCFullYear() + \"-\" + handlers.padZeros(v.getUTCMonth() + 1, 2) + \"-\" + handlers.padZeros(v.getUTCDate(), 2) + \"T\" + handlers.padZeros(v.getUTCHours(), 2) + \":\" + handlers.padZeros(v.getUTCMinutes(), 2) + \":\" + handlers.padZeros(v.getUTCSeconds(), 2) + \".\" + handlers.padZeros(v.getUTCMilliseconds(), 3) + \"Z\";\n  };\n  handlers.VerboseDateHandler.prototype.stringRep = function(v, h) {\n    return h.rep(v);\n  };\n  handlers.DateHandler = function Transit$DateHandler() {\n  };\n  handlers.DateHandler.prototype.tag = function(v) {\n    return \"m\";\n  };\n  handlers.DateHandler.prototype.rep = function(v) {\n    return v.valueOf();\n  };\n  handlers.DateHandler.prototype.stringRep = function(v) {\n    return v.valueOf().toString();\n  };\n  handlers.DateHandler.prototype.getVerboseHandler = function(v) {\n    return new handlers.VerboseDateHandler();\n  };\n  handlers.UUIDHandler = function Transit$UUIDHandler() {\n  };\n  handlers.UUIDHandler.prototype.tag = function(v) {\n    return \"u\";\n  };\n  handlers.UUIDHandler.prototype.rep = function(v) {\n    return v.toString();\n  };\n  handlers.UUIDHandler.prototype.stringRep = function(v) {\n    return v.toString();\n  };\n  handlers.KeywordHandler = function Transit$KeywordHandler() {\n  };\n  handlers.KeywordHandler.prototype.tag = function(v) {\n    return \":\";\n  };\n  handlers.KeywordHandler.prototype.rep = function(v) {\n    return v._name;\n  };\n  handlers.KeywordHandler.prototype.stringRep = function(v, h) {\n    return h.rep(v);\n  };\n  handlers.SymbolHandler = function Transit$SymbolHandler() {\n  };\n  handlers.SymbolHandler.prototype.tag = function(v) {\n    return \"$\";\n  };\n  handlers.SymbolHandler.prototype.rep = function(v) {\n    return v._name;\n  };\n  handlers.SymbolHandler.prototype.stringRep = function(v, h) {\n    return h.rep(v);\n  };\n  handlers.TaggedHandler = function Transit$TaggedHandler() {\n  };\n  handlers.TaggedHandler.prototype.tag = function(v) {\n    return v.tag;\n  };\n  handlers.TaggedHandler.prototype.rep = function(v) {\n    return v.rep;\n  };\n  handlers.TaggedHandler.prototype.stringRep = function(v, h) {\n    return null;\n  };\n  handlers.TransitSetHandler = function Transit$TransitSetHandler() {\n  };\n  handlers.TransitSetHandler.prototype.tag = function(v) {\n    return \"set\";\n  };\n  handlers.TransitSetHandler.prototype.rep = function(v) {\n    var arr = [];\n    v.forEach(function(key, set) {\n      arr.push(key);\n    });\n    return types.taggedValue(\"array\", arr);\n  };\n  handlers.TransitSetHandler.prototype.stringRep = function(v, h) {\n    return null;\n  };\n  handlers.TransitArrayMapHandler = function Transit$ArrayMapHandler() {\n  };\n  handlers.TransitArrayMapHandler.prototype.tag = function(v) {\n    return \"map\";\n  };\n  handlers.TransitArrayMapHandler.prototype.rep = function(v) {\n    return v;\n  };\n  handlers.TransitArrayMapHandler.prototype.stringRep = function(v, h) {\n    return null;\n  };\n  handlers.TransitMapHandler = function Transit$MapHandler() {\n  };\n  handlers.TransitMapHandler.prototype.tag = function(v) {\n    return \"map\";\n  };\n  handlers.TransitMapHandler.prototype.rep = function(v) {\n    return v;\n  };\n  handlers.TransitMapHandler.prototype.stringRep = function(v, h) {\n    return null;\n  };\n  handlers.BufferHandler = function Transit$BufferHandler() {\n  };\n  handlers.BufferHandler.prototype.tag = function(v) {\n    return \"b\";\n  };\n  handlers.BufferHandler.prototype.rep = function(v) {\n    return v.toString(\"base64\");\n  };\n  handlers.BufferHandler.prototype.stringRep = function(v, h) {\n    return null;\n  };\n  handlers.Uint8ArrayHandler = function Transit$Uint8ArrayHandler() {\n  };\n  handlers.Uint8ArrayHandler.prototype.tag = function(v) {\n    return \"b\";\n  };\n  handlers.Uint8ArrayHandler.prototype.rep = function(v) {\n    return util.Uint8ToBase64(v);\n  };\n  handlers.Uint8ArrayHandler.prototype.stringRep = function(v, h) {\n    return null;\n  };\n  handlers.defaultHandlers = function(hs) {\n    hs.set(null, new handlers.NilHandler());\n    hs.set(String, new handlers.StringHandler());\n    hs.set(Number, new handlers.NumberHandler());\n    hs.set(Long, new handlers.IntegerHandler());\n    hs.set(Boolean, new handlers.BooleanHandler());\n    hs.set(Array, new handlers.ArrayHandler());\n    hs.set(Object, new handlers.MapHandler());\n    hs.set(Date, new handlers.DateHandler());\n    hs.set(types.UUID, new handlers.UUIDHandler());\n    hs.set(types.Keyword, new handlers.KeywordHandler());\n    hs.set(types.Symbol, new handlers.SymbolHandler());\n    hs.set(types.TaggedValue, new handlers.TaggedHandler());\n    hs.set(types.TransitSet, new handlers.TransitSetHandler());\n    hs.set(types.TransitArrayMap, new handlers.TransitArrayMapHandler());\n    hs.set(types.TransitMap, new handlers.TransitMapHandler());\n    if (typeof goog.global.Buffer != \"undefined\") {\n      hs.set(goog.global.Buffer, new handlers.BufferHandler());\n    }\n    if (typeof Uint8Array != \"undefined\") {\n      hs.set(Uint8Array, new handlers.Uint8ArrayHandler());\n    }\n    return hs;\n  };\n  handlers.Handlers = function Transit$Handlers() {\n    this.handlers = {};\n    handlers.defaultHandlers(this);\n  };\n  handlers.Handlers.prototype.get = function(ctor) {\n    var h = null;\n    if (typeof ctor === \"string\") {\n      h = this.handlers[ctor];\n    } else {\n      h = this.handlers[handlers.typeTag(ctor)];\n    }\n    if (h != null) {\n      return h;\n    } else {\n      return this.handlers[\"default\"];\n    }\n  };\n  handlers.Handlers.prototype[\"get\"] = handlers.Handlers.prototype.get;\n  handlers.validTag = function(tag) {\n    switch(tag) {\n      case \"null\":\n      case \"string\":\n      case \"boolean\":\n      case \"number\":\n      case \"array\":\n      case \"map\":\n        return false;\n        break;\n    }\n    return true;\n  };\n  handlers.Handlers.prototype.set = function(ctor, handler) {\n    if (typeof ctor === \"string\" && handlers.validTag(ctor)) {\n      this.handlers[ctor] = handler;\n    } else {\n      this.handlers[handlers.typeTag(ctor)] = handler;\n    }\n  };\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.handlers\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.types\");\ngoog.require(\"goog.math.Long\");\n\ngoog.scope(function () {\n\n    var handlers = com.cognitect.transit.handlers,\n        util     = com.cognitect.transit.util,\n        types    = com.cognitect.transit.types,\n        Long     = goog.math.Long;\n\n    handlers.ctorGuid = 0;\n\n    /**\n     * @const\n     * @type {string}\n     */\n    handlers.ctorGuidProperty = \"transit$guid$\" + util.randomUUID();\n\n    handlers.typeTag = function (ctor) {\n        if (ctor == null) {\n            return \"null\";\n        } else if (ctor === String) {\n            return \"string\";\n        } else if (ctor === Boolean) {\n            return \"boolean\";\n        } else if (ctor === Number) {\n            return \"number\";\n        } else if (ctor === Array) {\n            return \"array\";\n        } else if (ctor === Object) {\n            return \"map\";\n        } else {\n            var tag = ctor[handlers.ctorGuidProperty];\n            if (tag == null) {\n                if (typeof Object.defineProperty != \"undefined\") {\n                    tag = ++handlers.ctorGuid;\n                    Object.defineProperty(ctor, handlers.ctorGuidProperty, {\n                        value: tag,\n                        enumerable: false\n                    });\n                } else {\n                    ctor[handlers.ctorGuidProperty] = tag = ++handlers.ctorGuid;\n                }\n            }\n            return tag;\n        }\n    };\n\n    handlers.constructor = function (x) {\n        if (x == null) {\n            return null;\n        } else {\n            return x.constructor;\n        }\n    };\n\n    handlers.padZeros = function (n, m) {\n        var s = n.toString();\n        for (var i = s.length; i < m; i++) {\n            s = \"0\" + s;\n        }\n        return s;\n    };\n\n    handlers.stringableKeys = function (m) {\n        var stringable = false,\n            ks = util.objectKeys(m);\n\n        for (var i = 0; i < ks.length; i++) {\n        }\n\n        return true;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.NilHandler = function Transit$NilHandler() {\n    };\n    handlers.NilHandler.prototype.tag = function (v) {\n        return \"_\";\n    };\n    handlers.NilHandler.prototype.rep = function (v) {\n        return null;\n    };\n    handlers.NilHandler.prototype.stringRep = function (v) {\n        return \"null\";\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.StringHandler = function Transit$StringHandler() {\n    };\n    handlers.StringHandler.prototype.tag = function (v) {\n        return \"s\";\n    };\n    handlers.StringHandler.prototype.rep = function (v) {\n        return v;\n    };\n    handlers.StringHandler.prototype.stringRep = function (v) {\n        return v;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.NumberHandler = function Transit$NumberHandler() {\n    };\n    handlers.NumberHandler.prototype.tag = function (v) {\n        return \"i\";\n    };\n    handlers.NumberHandler.prototype.rep = function (v) {\n        return v;\n    };\n    handlers.NumberHandler.prototype.stringRep = function (v) {\n        return v.toString();\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.IntegerHandler = function Transit$IntegerHandler() {\n    };\n    handlers.IntegerHandler.prototype.tag = function (v) {\n        return \"i\";\n    };\n    handlers.IntegerHandler.prototype.rep = function (v) {\n        return v.toString();\n    };\n    handlers.IntegerHandler.prototype.stringRep = function (v) {\n        return v.toString();\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.BooleanHandler = function Transit$BooleanHandler() {\n    };\n    handlers.BooleanHandler.prototype.tag = function (v) {\n        return \"?\";\n    };\n    handlers.BooleanHandler.prototype.rep = function (v) {\n        return v;\n    };\n    handlers.BooleanHandler.prototype.stringRep = function (v) {\n        return v.toString();\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.ArrayHandler = function Transit$ArrayHandler() {\n    };\n    handlers.ArrayHandler.prototype.tag = function (v) {\n        return \"array\";\n    };\n    handlers.ArrayHandler.prototype.rep = function (v) {\n        return v;\n    };\n    handlers.ArrayHandler.prototype.stringRep = function (v) {\n        return null;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.MapHandler = function Transit$MapHandler() {\n    };\n    handlers.MapHandler.prototype.tag = function (v) {\n        return \"map\";\n    };\n    handlers.MapHandler.prototype.rep = function (v) {\n        return v;\n    };\n    handlers.MapHandler.prototype.stringRep = function (v) {\n        return null;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.VerboseDateHandler = function Transit$VerboseDateHandler() {\n    };\n    handlers.VerboseDateHandler.prototype.tag = function (v) {\n        return \"t\";\n    };\n    handlers.VerboseDateHandler.prototype.rep = function (v) {\n        return v.getUTCFullYear() + \"-\" + handlers.padZeros(v.getUTCMonth() + 1, 2) + \"-\" +\n            handlers.padZeros(v.getUTCDate(), 2) + \"T\" + handlers.padZeros(v.getUTCHours(), 2) + \":\" +\n            handlers.padZeros(v.getUTCMinutes(), 2) + \":\" + handlers.padZeros(v.getUTCSeconds(), 2) + \".\" +\n            handlers.padZeros(v.getUTCMilliseconds(), 3) + \"Z\";\n    };\n    handlers.VerboseDateHandler.prototype.stringRep = function (v, h) {\n        return h.rep(v);\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.DateHandler = function Transit$DateHandler() {\n    };\n    handlers.DateHandler.prototype.tag = function (v) {\n        return \"m\";\n    };\n    handlers.DateHandler.prototype.rep = function (v) {\n        return v.valueOf();\n    };\n    handlers.DateHandler.prototype.stringRep = function (v) {\n        return v.valueOf().toString();\n    };\n    handlers.DateHandler.prototype.getVerboseHandler = function (v) {\n        return new handlers.VerboseDateHandler();\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.UUIDHandler = function Transit$UUIDHandler() {\n    };\n    handlers.UUIDHandler.prototype.tag = function (v) {\n        return \"u\";\n    };\n    handlers.UUIDHandler.prototype.rep = function (v) {\n        return v.toString();\n    };\n    handlers.UUIDHandler.prototype.stringRep = function (v) {\n        return v.toString();\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.KeywordHandler = function Transit$KeywordHandler() {\n    };\n    handlers.KeywordHandler.prototype.tag = function (v) {\n        return \":\";\n    };\n    handlers.KeywordHandler.prototype.rep = function (v) {\n        return v._name;\n    }; // NOTE: should be fqn\n    handlers.KeywordHandler.prototype.stringRep = function (v, h) {\n        return h.rep(v);\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.SymbolHandler = function Transit$SymbolHandler() {\n    };\n    handlers.SymbolHandler.prototype.tag = function (v) {\n        return \"$\";\n    };\n    handlers.SymbolHandler.prototype.rep = function (v) {\n        return v._name;\n    }; // NOTE: should be str\n    handlers.SymbolHandler.prototype.stringRep = function (v, h) {\n        return h.rep(v);\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.TaggedHandler = function Transit$TaggedHandler() {\n    };\n    handlers.TaggedHandler.prototype.tag = function (v) {\n        return v.tag;\n    };\n    handlers.TaggedHandler.prototype.rep = function (v) {\n        return v.rep;\n    };\n    handlers.TaggedHandler.prototype.stringRep = function (v, h) {\n        return null;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.TransitSetHandler = function Transit$TransitSetHandler() {\n    };\n    handlers.TransitSetHandler.prototype.tag = function (v) {\n        return \"set\";\n    };\n    handlers.TransitSetHandler.prototype.rep = function (v) {\n        var arr = [];\n        v.forEach(function (key, set) {\n            arr.push(key);\n        });\n        return types.taggedValue(\"array\", arr);\n    };\n    handlers.TransitSetHandler.prototype.stringRep = function (v, h) {\n        return null;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.TransitArrayMapHandler = function Transit$ArrayMapHandler() {\n    };\n    handlers.TransitArrayMapHandler.prototype.tag = function (v) {\n        return \"map\";\n    };\n    handlers.TransitArrayMapHandler.prototype.rep = function (v) {\n        return v;\n    };\n    handlers.TransitArrayMapHandler.prototype.stringRep = function (v, h) {\n        return null;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.TransitMapHandler = function Transit$MapHandler() {\n    };\n    handlers.TransitMapHandler.prototype.tag = function (v) {\n        return \"map\";\n    };\n    handlers.TransitMapHandler.prototype.rep = function (v) {\n        return v;\n    };\n    handlers.TransitMapHandler.prototype.stringRep = function (v, h) {\n        return null;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.BufferHandler = function Transit$BufferHandler() {\n    };\n    handlers.BufferHandler.prototype.tag = function (v) {\n        return \"b\";\n    };\n    handlers.BufferHandler.prototype.rep = function (v) {\n        return v.toString(\"base64\");\n    };\n    handlers.BufferHandler.prototype.stringRep = function (v, h) {\n        return null;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.Uint8ArrayHandler = function Transit$Uint8ArrayHandler() {\n    };\n    handlers.Uint8ArrayHandler.prototype.tag = function (v) {\n        return \"b\";\n    };\n    handlers.Uint8ArrayHandler.prototype.rep = function (v) {\n        return util.Uint8ToBase64(v);\n    };\n    handlers.Uint8ArrayHandler.prototype.stringRep = function (v, h) {\n        return null;\n    };\n\n    handlers.defaultHandlers = function (hs) {\n        hs.set(null, new handlers.NilHandler());\n        hs.set(String, new handlers.StringHandler());\n        hs.set(Number, new handlers.NumberHandler());\n        hs.set(Long, new handlers.IntegerHandler());\n        hs.set(Boolean, new handlers.BooleanHandler());\n        hs.set(Array, new handlers.ArrayHandler());\n        hs.set(Object, new handlers.MapHandler());\n        hs.set(Date, new handlers.DateHandler());\n        hs.set(types.UUID, new handlers.UUIDHandler());\n        hs.set(types.Keyword, new handlers.KeywordHandler());\n        hs.set(types.Symbol, new handlers.SymbolHandler());\n        hs.set(types.TaggedValue, new handlers.TaggedHandler());\n        hs.set(types.TransitSet, new handlers.TransitSetHandler());\n        hs.set(types.TransitArrayMap, new handlers.TransitArrayMapHandler());\n        hs.set(types.TransitMap, new handlers.TransitMapHandler());\n\n        if (typeof goog.global.Buffer != \"undefined\") {\n            hs.set(goog.global.Buffer, new handlers.BufferHandler());\n        }\n\n        if (typeof Uint8Array != \"undefined\") {\n            hs.set(Uint8Array, new handlers.Uint8ArrayHandler());\n        }\n\n        return hs;\n    };\n\n    /**\n     * @constructor\n     */\n    handlers.Handlers = function Transit$Handlers() {\n        this.handlers = {};\n        handlers.defaultHandlers(this);\n    };\n\n    handlers.Handlers.prototype.get = function (ctor) {\n        var h = null;\n        if (typeof ctor === \"string\") {\n            h = this.handlers[ctor];\n        } else {\n            h = this.handlers[handlers.typeTag(ctor)];\n        }\n        if (h != null) {\n            return h;\n        } else {\n            return this.handlers[\"default\"];\n        }\n    };\n    handlers.Handlers.prototype[\"get\"] = handlers.Handlers.prototype.get;\n\n    handlers.validTag = function (tag) {\n        switch (tag) {\n            case \"null\":\n            case \"string\":\n            case \"boolean\":\n            case \"number\":\n            case \"array\":\n            case \"map\":\n                return false;\n                break;\n        }\n        return true;\n    };\n\n    handlers.Handlers.prototype.set = function (ctor, handler) {\n        if (typeof ctor === \"string\" && handlers.validTag(ctor)) {\n            this.handlers[ctor] = handler;\n        } else {\n            this.handlers[handlers.typeTag(ctor)] = handler;\n        }\n    };\n\n});    \n","~:compiled-at",1668873222593,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.handlers.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]