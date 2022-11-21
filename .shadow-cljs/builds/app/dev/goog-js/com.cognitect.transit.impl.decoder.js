["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/impl/decoder.js"],"~:js","goog.provide(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.require(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.types\");\ngoog.scope(function() {\n  var decoder = com.cognitect.transit.impl.decoder, util = com.cognitect.transit.util, d = com.cognitect.transit.delimiters, caching = com.cognitect.transit.caching, types = com.cognitect.transit.types;\n  decoder.Tag = function Transit$Tag(s) {\n    this.str = s;\n  };\n  decoder.tag = function(s) {\n    return new decoder.Tag(s);\n  };\n  decoder.isTag = function(x) {\n    return x && x instanceof decoder.Tag;\n  };\n  decoder.isGroundHandler = function(handler) {\n    switch(handler) {\n      case \"_\":\n      case \"s\":\n      case \"?\":\n      case \"i\":\n      case \"d\":\n      case \"b\":\n      case \"'\":\n      case \"array\":\n      case \"map\":\n        return true;\n    }\n    return false;\n  };\n  decoder.Decoder = function Transit$Decoder(options) {\n    this.options = options || {};\n    this.handlers = {};\n    for (var h in this.defaults.handlers) {\n      this.handlers[h] = this.defaults.handlers[h];\n    }\n    for (var h in this.options[\"handlers\"]) {\n      if (decoder.isGroundHandler(h)) {\n        throw new Error('Cannot override handler for ground type \"' + h + '\"');\n      }\n      this.handlers[h] = this.options[\"handlers\"][h];\n    }\n    this.preferStrings = this.options[\"preferStrings\"] != null ? this.options[\"preferStrings\"] : this.defaults.preferStrings;\n    this.preferBuffers = this.options[\"preferBuffers\"] != null ? this.options[\"preferBuffers\"] : this.defaults.preferBuffers;\n    this.defaultHandler = this.options[\"defaultHandler\"] || this.defaults.defaultHandler;\n    this.mapBuilder = this.options[\"mapBuilder\"];\n    this.arrayBuilder = this.options[\"arrayBuilder\"];\n  };\n  decoder.Decoder.prototype.defaults = {handlers:{\"_\":function(v, d) {\n    return types.nullValue();\n  }, \"?\":function(v, d) {\n    return types.boolValue(v);\n  }, \"b\":function(v, d) {\n    return types.binary(v, d);\n  }, \"i\":function(v, d) {\n    return types.intValue(v);\n  }, \"n\":function(v, d) {\n    return types.bigInteger(v);\n  }, \"d\":function(v, d) {\n    return types.floatValue(v);\n  }, \"f\":function(v, d) {\n    return types.bigDecimalValue(v);\n  }, \"c\":function(v, d) {\n    return types.charValue(v);\n  }, \":\":function(v, d) {\n    return types.keyword(v);\n  }, \"$\":function(v, d) {\n    return types.symbol(v);\n  }, \"r\":function(v, d) {\n    return types.uri(v);\n  }, \"z\":function(v, d) {\n    return types.specialDouble(v);\n  }, \"'\":function(v, d) {\n    return v;\n  }, \"m\":function(v, d) {\n    return types.date(v);\n  }, \"t\":function(v, d) {\n    return types.verboseDate(v);\n  }, \"u\":function(v, d) {\n    return types.uuid(v);\n  }, \"set\":function(v, d) {\n    return types.set(v);\n  }, \"list\":function(v, d) {\n    return types.list(v);\n  }, \"link\":function(v, d) {\n    return types.link(v);\n  }, \"cmap\":function(v, d) {\n    return types.map(v, false);\n  }}, defaultHandler:function(c, val) {\n    return types.taggedValue(c, val);\n  }, preferStrings:true, preferBuffers:true};\n  decoder.Decoder.prototype.decode = function(node, cache, asMapKey, tagValue) {\n    if (node == null) {\n      return null;\n    }\n    var t = typeof node;\n    switch(t) {\n      case \"string\":\n        return this.decodeString(node, cache, asMapKey, tagValue);\n        break;\n      case \"object\":\n        if (util.isArray(node)) {\n          if (node[0] === \"^ \") {\n            return this.decodeArrayHash(node, cache, asMapKey, tagValue);\n          } else {\n            return this.decodeArray(node, cache, asMapKey, tagValue);\n          }\n        } else {\n          return this.decodeHash(node, cache, asMapKey, tagValue);\n        }\n        break;\n    }\n    return node;\n  };\n  decoder.Decoder.prototype[\"decode\"] = decoder.Decoder.prototype.decode;\n  decoder.Decoder.prototype.decodeString = function(string, cache, asMapKey, tagValue) {\n    if (caching.isCacheable(string, asMapKey)) {\n      var val = this.parseString(string, cache, false);\n      if (cache) {\n        cache.write(val, asMapKey);\n      }\n      return val;\n    } else if (caching.isCacheCode(string)) {\n      return cache.read(string, asMapKey);\n    } else {\n      return this.parseString(string, cache, asMapKey);\n    }\n  };\n  decoder.Decoder.prototype.decodeHash = function(hash, cache, asMapKey, tagValue) {\n    var ks = util.objectKeys(hash), key = ks[0], tag = ks.length == 1 ? this.decode(key, cache, false, false) : null;\n    if (decoder.isTag(tag)) {\n      var val = hash[key], handler = this.handlers[tag.str];\n      if (handler != null) {\n        return handler(this.decode(val, cache, false, true), this);\n      } else {\n        return types.taggedValue(tag.str, this.decode(val, cache, false, false));\n      }\n    } else if (this.mapBuilder) {\n      if (ks.length < types.SMALL_ARRAY_MAP_THRESHOLD * 2 && this.mapBuilder.fromArray) {\n        var nodep = [];\n        for (var i = 0; i < ks.length; i++) {\n          var strKey = ks[i];\n          nodep.push(this.decode(strKey, cache, true, false));\n          nodep.push(this.decode(hash[strKey], cache, false, false));\n        }\n        return this.mapBuilder.fromArray(nodep, hash);\n      } else {\n        var ret = this.mapBuilder.init(hash);\n        for (var i = 0; i < ks.length; i++) {\n          var strKey = ks[i];\n          ret = this.mapBuilder.add(ret, this.decode(strKey, cache, true, false), this.decode(hash[strKey], cache, false, false), hash);\n        }\n        return this.mapBuilder.finalize(ret, hash);\n      }\n    } else {\n      var nodep = [];\n      for (var i = 0; i < ks.length; i++) {\n        var strKey = ks[i];\n        nodep.push(this.decode(strKey, cache, true, false));\n        nodep.push(this.decode(hash[strKey], cache, false, false));\n      }\n      return types.map(nodep, false);\n    }\n  };\n  decoder.Decoder.prototype.decodeArrayHash = function(node, cache, asMapKey, tagValue) {\n    if (this.mapBuilder) {\n      if (node.length < types.SMALL_ARRAY_MAP_THRESHOLD * 2 + 1 && this.mapBuilder.fromArray) {\n        var nodep = [];\n        for (var i = 1; i < node.length; i += 2) {\n          nodep.push(this.decode(node[i], cache, true, false));\n          nodep.push(this.decode(node[i + 1], cache, false, false));\n        }\n        return this.mapBuilder.fromArray(nodep, node);\n      } else {\n        var ret = this.mapBuilder.init(node);\n        for (var i = 1; i < node.length; i += 2) {\n          ret = this.mapBuilder.add(ret, this.decode(node[i], cache, true, false), this.decode(node[i + 1], cache, false, false), node);\n        }\n        return this.mapBuilder.finalize(ret, node);\n      }\n    } else {\n      var nodep = [];\n      for (var i = 1; i < node.length; i += 2) {\n        nodep.push(this.decode(node[i], cache, true, false));\n        nodep.push(this.decode(node[i + 1], cache, false, false));\n      }\n      return types.map(nodep, false);\n    }\n  };\n  decoder.Decoder.prototype.decodeArray = function(node, cache, asMapKey, tagValue) {\n    if (tagValue) {\n      var ret = [];\n      for (var i = 0; i < node.length; i++) {\n        ret.push(this.decode(node[i], cache, asMapKey, false));\n      }\n      return ret;\n    } else {\n      var cacheIdx = cache && cache.idx;\n      if (node.length === 2 && typeof node[0] === \"string\") {\n        var tag = this.decode(node[0], cache, false, false);\n        if (decoder.isTag(tag)) {\n          var val = node[1], handler = this.handlers[tag.str];\n          if (handler != null) {\n            var ret = handler(this.decode(val, cache, asMapKey, true), this);\n            return ret;\n          } else {\n            return types.taggedValue(tag.str, this.decode(val, cache, asMapKey, false));\n          }\n        }\n      }\n      if (cache && cacheIdx != cache.idx) {\n        cache.idx = cacheIdx;\n      }\n      if (this.arrayBuilder) {\n        if (node.length <= 32 && this.arrayBuilder.fromArray) {\n          var arr = [];\n          for (var i = 0; i < node.length; i++) {\n            arr.push(this.decode(node[i], cache, asMapKey, false));\n          }\n          return this.arrayBuilder.fromArray(arr, node);\n        } else {\n          var ret = this.arrayBuilder.init(node);\n          for (var i = 0; i < node.length; i++) {\n            ret = this.arrayBuilder.add(ret, this.decode(node[i], cache, asMapKey, false), node);\n          }\n          return this.arrayBuilder.finalize(ret, node);\n        }\n      } else {\n        var ret = [];\n        for (var i = 0; i < node.length; i++) {\n          ret.push(this.decode(node[i], cache, asMapKey, false));\n        }\n        return ret;\n      }\n    }\n  };\n  decoder.Decoder.prototype.parseString = function(string, cache, asMapKey) {\n    if (string.charAt(0) === d.ESC) {\n      var c = string.charAt(1);\n      if (c === d.ESC || c === d.SUB || c === d.RES) {\n        return string.substring(1);\n      } else if (c === d.TAG) {\n        return decoder.tag(string.substring(2));\n      } else {\n        var handler = this.handlers[c];\n        if (handler == null) {\n          return this.defaultHandler(c, string.substring(2));\n        } else {\n          return handler(string.substring(2), this);\n        }\n      }\n    } else {\n      return string;\n    }\n  };\n  decoder.decoder = function(options) {\n    return new decoder.Decoder(options);\n  };\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.require(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.types\");\n\ngoog.scope(function () {\n\n    var decoder = com.cognitect.transit.impl.decoder,\n        util    = com.cognitect.transit.util,\n        d       = com.cognitect.transit.delimiters,\n        caching = com.cognitect.transit.caching,\n        types   = com.cognitect.transit.types;\n\n    // =========================================================================\n    // Decoder\n\n    /**\n     * @constructor\n     */\n    decoder.Tag = function Transit$Tag(s) {\n        this.str = s;\n    };\n\n    decoder.tag = function (s) {\n        return new decoder.Tag(s);\n    };\n\n    decoder.isTag = function (x) {\n        return x && (x instanceof decoder.Tag);\n    };\n\n    decoder.isGroundHandler = function (handler) {\n        switch (handler) {\n            case \"_\":\n            case \"s\":\n            case \"?\":\n            case \"i\":\n            case \"d\":\n            case \"b\":\n            case \"'\":\n            case \"array\":\n            case \"map\":\n                return true;\n        }\n        return false;\n    };\n\n    /**\n     * A transit decoder\n     * @constructor\n     */\n    decoder.Decoder = function Transit$Decoder(options) {\n        this.options = options || {};\n        this.handlers = {};\n        for (var h in this.defaults.handlers) {\n            this.handlers[h] = this.defaults.handlers[h];\n        }\n        for (var h in this.options[\"handlers\"]) {\n            if (decoder.isGroundHandler(h)) {\n                throw new Error(\"Cannot override handler for ground type \\\"\" + h + \"\\\"\");\n            }\n            this.handlers[h] = this.options[\"handlers\"][h];\n        }\n        this.preferStrings = this.options[\"preferStrings\"] != null ? this.options[\"preferStrings\"] : this.defaults.preferStrings;\n        this.preferBuffers = this.options[\"preferBuffers\"] != null ? this.options[\"preferBuffers\"] : this.defaults.preferBuffers;\n        this.defaultHandler = this.options[\"defaultHandler\"] || this.defaults.defaultHandler;\n        /* NOT PUBLIC */\n        this.mapBuilder = this.options[\"mapBuilder\"];\n        this.arrayBuilder = this.options[\"arrayBuilder\"];\n    };\n\n\n    decoder.Decoder.prototype.defaults = {\n        handlers: {\n            \"_\": function (v, d) {\n                return types.nullValue();\n            },\n            \"?\": function (v, d) {\n                return types.boolValue(v);\n            },\n            \"b\": function (v, d) {\n                return types.binary(v, d);\n            },\n            \"i\": function (v, d) {\n                return types.intValue(v);\n            },\n            \"n\": function (v, d) {\n                return types.bigInteger(v);\n            },\n            \"d\": function (v, d) {\n                return types.floatValue(v);\n            },\n            \"f\": function (v, d) {\n                return types.bigDecimalValue(v);\n            },\n            \"c\": function (v, d) {\n                return types.charValue(v);\n            },\n            \":\": function (v, d) {\n                return types.keyword(v);\n            },\n            \"$\": function (v, d) {\n                return types.symbol(v);\n            },\n            \"r\": function (v, d) {\n                return types.uri(v);\n            },\n            \"z\": function (v, d) {\n                return types.specialDouble(v);\n            },\n\n            // tagged\n            \"'\": function (v, d) {\n                return v;\n            },\n            \"m\": function (v, d) {\n                return types.date(v);\n            },\n            \"t\": function (v, d) {\n                return types.verboseDate(v);\n            },\n            \"u\": function (v, d) {\n                return types.uuid(v);\n            },\n            \"set\": function (v, d) {\n                return types.set(v);\n            },\n            \"list\": function (v, d) {\n                return types.list(v);\n            },\n            \"link\": function (v, d) {\n                return types.link(v);\n            },\n            \"cmap\": function (v, d) {\n                return types.map(v, false);\n            }\n        },\n        defaultHandler: function (c, val) {\n            return types.taggedValue(c, val);\n        },\n        preferStrings: true,\n        preferBuffers: true\n    };\n\n    /**\n     * @param {*} node\n     * @param {*} cache\n     * @param {boolean=} asMapKey\n     * @param {boolean=} tagValue\n     * @returns {*}\n     */\n    decoder.Decoder.prototype.decode = function (node, cache, asMapKey, tagValue) {\n        if (node == null) return null;\n\n        var t = typeof node;\n\n        switch (t) {\n            case \"string\":\n                return this.decodeString(node, cache, asMapKey, tagValue);\n                break;\n            case \"object\":\n                if (util.isArray(node)) {\n                    if (node[0] === \"^ \") {\n                        return this.decodeArrayHash(node, cache, asMapKey, tagValue);\n                    } else {\n                        return this.decodeArray(node, cache, asMapKey, tagValue);\n                    }\n                } else {\n                    return this.decodeHash(node, cache, asMapKey, tagValue);\n                }\n                break;\n        }\n\n        return node;\n    };\n    decoder.Decoder.prototype[\"decode\"] = decoder.Decoder.prototype.decode;\n\n    decoder.Decoder.prototype.decodeString = function (string, cache, asMapKey, tagValue) {\n        if (caching.isCacheable(string, asMapKey)) {\n            var val = this.parseString(string, cache, false);\n            if (cache) {\n                cache.write(val, asMapKey);\n            }\n            return val;\n        } else if (caching.isCacheCode(string)) {\n            return cache.read(string, asMapKey);\n        } else {\n            return this.parseString(string, cache, asMapKey);\n        }\n    };\n\n    decoder.Decoder.prototype.decodeHash = function (hash, cache, asMapKey, tagValue) {\n        var ks = util.objectKeys(hash),\n            key = ks[0],\n            tag = ks.length == 1 ? this.decode(key, cache, false, false) : null;\n\n        if (decoder.isTag(tag)) {\n            var val = hash[key],\n                handler = this.handlers[tag.str];\n            if (handler != null) {\n                return handler(this.decode(val, cache, false, true), this);\n            } else {\n                return types.taggedValue(tag.str, this.decode(val, cache, false, false));\n            }\n        } else if (this.mapBuilder) {\n            if ((ks.length < (types.SMALL_ARRAY_MAP_THRESHOLD * 2)) && this.mapBuilder.fromArray) {\n                var nodep = [];\n                for (var i = 0; i < ks.length; i++) {\n                    var strKey = ks[i];\n                    nodep.push(this.decode(strKey, cache, true, false));\n                    nodep.push(this.decode(hash[strKey], cache, false, false));\n                }\n                return this.mapBuilder.fromArray(nodep, hash);\n            } else {\n                var ret = this.mapBuilder.init(hash);\n                for (var i = 0; i < ks.length; i++) {\n                    var strKey = ks[i];\n                    ret = this.mapBuilder.add(ret,\n                        this.decode(strKey, cache, true, false),\n                        this.decode(hash[strKey], cache, false, false),\n                        hash);\n                }\n                return this.mapBuilder.finalize(ret, hash);\n            }\n        } else {\n            var nodep = [];\n\n            for (var i = 0; i < ks.length; i++) {\n                var strKey = ks[i];\n                nodep.push(this.decode(strKey, cache, true, false));\n                nodep.push(this.decode(hash[strKey], cache, false, false));\n            }\n\n            return types.map(nodep, false);\n        }\n    };\n\n    decoder.Decoder.prototype.decodeArrayHash = function (node, cache, asMapKey, tagValue) {\n        if (this.mapBuilder) {\n            if ((node.length < ((types.SMALL_ARRAY_MAP_THRESHOLD * 2) + 1)) && this.mapBuilder.fromArray) {\n                var nodep = [];\n                for (var i = 1; i < node.length; i += 2) {\n                    nodep.push(this.decode(node[i], cache, true, false));\n                    nodep.push(this.decode(node[i + 1], cache, false, false));\n                }\n                return this.mapBuilder.fromArray(nodep, node);\n            } else {\n                var ret = this.mapBuilder.init(node);\n                for (var i = 1; i < node.length; i += 2) {\n                    ret = this.mapBuilder.add(ret,\n                        this.decode(node[i], cache, true, false),\n                        this.decode(node[i + 1], cache, false, false),\n                        node)\n                }\n                return this.mapBuilder.finalize(ret, node);\n            }\n        } else {\n            var nodep = [];\n\n            // collect keys\n            for (var i = 1; i < node.length; i += 2) {\n                nodep.push(this.decode(node[i], cache, true, false));\n                nodep.push(this.decode(node[i + 1], cache, false, false));\n            }\n\n            return types.map(nodep, false);\n        }\n    };\n\n    decoder.Decoder.prototype.decodeArray = function (node, cache, asMapKey, tagValue) {\n        if (tagValue) {\n            var ret = [];\n            for (var i = 0; i < node.length; i++) {\n                ret.push(this.decode(node[i], cache, asMapKey, false));\n            }\n            return ret;\n        } else {\n            var cacheIdx = cache && cache.idx;\n            // tagged value as 2-array case\n            if ((node.length === 2) &&\n                (typeof node[0] === \"string\")) {\n                var tag = this.decode(node[0], cache, false, false);\n                if (decoder.isTag(tag)) {\n                    var val = node[1],\n                        handler = this.handlers[tag.str];\n                    if (handler != null) {\n                        var ret = handler(this.decode(val, cache, asMapKey, true), this);\n                        return ret;\n                    } else {\n                        return types.taggedValue(tag.str, this.decode(val, cache, asMapKey, false))\n                    }\n                }\n            }\n\n            // rewind cache\n            if (cache && (cacheIdx != cache.idx)) {\n                cache.idx = cacheIdx;\n            }\n\n            if (this.arrayBuilder) {\n                // NOTE: hard coded for ClojureScript for now - David\n                if (node.length <= 32 && this.arrayBuilder.fromArray) {\n                    var arr = [];\n                    for (var i = 0; i < node.length; i++) {\n                        arr.push(this.decode(node[i], cache, asMapKey, false));\n                    }\n                    return this.arrayBuilder.fromArray(arr, node);\n                } else {\n                    var ret = this.arrayBuilder.init(node);\n                    for (var i = 0; i < node.length; i++) {\n                        ret = this.arrayBuilder.add(ret, this.decode(node[i], cache, asMapKey, false), node);\n                    }\n                    return this.arrayBuilder.finalize(ret, node);\n                }\n            } else {\n                var ret = [];\n                for (var i = 0; i < node.length; i++) {\n                    ret.push(this.decode(node[i], cache, asMapKey, false));\n                }\n                return ret;\n            }\n        }\n    };\n\n    decoder.Decoder.prototype.parseString = function (string, cache, asMapKey) {\n        if (string.charAt(0) === d.ESC) {\n            var c = string.charAt(1);\n            if (c === d.ESC || c === d.SUB || c === d.RES) {\n                return string.substring(1);\n            } else if (c === d.TAG) {\n                return decoder.tag(string.substring(2));\n            } else {\n                var handler = this.handlers[c];\n                if (handler == null) {\n                    return this.defaultHandler(c, string.substring(2));\n                } else {\n                    return handler(string.substring(2), this);\n                }\n            }\n        } else {\n            return string;\n        }\n    };\n\n    decoder.decoder = function (options) {\n        return new decoder.Decoder(options);\n    };\n\n});\n","~:compiled-at",1668862146766,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.impl.decoder.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]