["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/impl/writer.js"],"~:js","goog.provide(\"com.cognitect.transit.impl.writer\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.handlers\");\ngoog.require(\"com.cognitect.transit.types\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.require(\"goog.math.Long\");\ngoog.scope(function() {\n  var writer = com.cognitect.transit.impl.writer, util = com.cognitect.transit.util, caching = com.cognitect.transit.caching, handlers = com.cognitect.transit.handlers, types = com.cognitect.transit.types, d = com.cognitect.transit.delimiters, Long = goog.math.Long;\n  writer.escape = function(string) {\n    if (string.length > 0) {\n      var c = string.charAt(0);\n      if (c === d.ESC || c === d.SUB || c === d.RES) {\n        return d.ESC + string;\n      } else {\n        return string;\n      }\n    } else {\n      return string;\n    }\n  };\n  writer.JSONMarshaller = function Transit$JSONMarshaller(opts) {\n    this.opts = opts || {};\n    this.preferStrings = this.opts[\"preferStrings\"] != null ? this.opts[\"preferStrings\"] : true;\n    this.objectBuilder = this.opts[\"objectBuilder\"] || null;\n    this.transform = this.opts[\"transform\"] || null;\n    this.handlers = new handlers.Handlers();\n    var optsHandlers = this.opts[\"handlers\"];\n    if (optsHandlers) {\n      if (util.isArray(optsHandlers) || !optsHandlers.forEach) {\n        throw new Error('transit writer \"handlers\" option must be a map');\n      }\n      var self = this;\n      optsHandlers.forEach(function(v, k) {\n        if (k !== undefined) {\n          self.handlers.set(k, v);\n        } else {\n          throw new Error(\"Cannot create handler for JavaScript undefined\");\n        }\n      });\n    }\n    this.handlerForForeign = this.opts[\"handlerForForeign\"];\n    this.unpack = this.opts[\"unpack\"] || function(x) {\n      if (types.isArrayMap(x) && x.backingMap === null) {\n        return x._entries;\n      } else {\n        return false;\n      }\n    };\n    this.verbose = this.opts && this.opts[\"verbose\"] || false;\n  };\n  writer.JSONMarshaller.prototype.handler = function(obj) {\n    var h = this.handlers.get(handlers.constructor(obj));\n    if (h != null) {\n      return h;\n    } else {\n      var tag = obj && obj[\"transitTag\"];\n      if (tag) {\n        return this.handlers.get(tag);\n      } else {\n        return null;\n      }\n    }\n  };\n  writer.JSONMarshaller.prototype.registerHandler = function(ctor, handler) {\n    this.handlers.set(ctor, handler);\n  };\n  writer.JSONMarshaller.prototype.emitNil = function(asMapKey, cache) {\n    if (asMapKey) {\n      return this.emitString(d.ESC, \"_\", \"\", asMapKey, cache);\n    } else {\n      return null;\n    }\n  };\n  writer.JSONMarshaller.prototype.emitString = function(prefix, tag, s, asMapKey, cache) {\n    var string = prefix + tag + s;\n    if (cache) {\n      return cache.write(string, asMapKey);\n    } else {\n      return string;\n    }\n  };\n  writer.JSONMarshaller.prototype.emitBoolean = function(b, asMapKey, cache) {\n    if (asMapKey) {\n      var s = b.toString();\n      return this.emitString(d.ESC, \"?\", s[0], asMapKey, cache);\n    } else {\n      return b;\n    }\n  };\n  writer.JSONMarshaller.prototype.emitInteger = function(i, asMapKey, cache) {\n    if (i === Infinity) {\n      return this.emitString(d.ESC, \"z\", \"INF\", asMapKey, cache);\n    } else if (i === -Infinity) {\n      return this.emitString(d.ESC, \"z\", \"-INF\", asMapKey, cache);\n    } else if (isNaN(i)) {\n      return this.emitString(d.ESC, \"z\", \"NaN\", asMapKey, cache);\n    } else if (asMapKey || typeof i === \"string\" || i instanceof Long) {\n      return this.emitString(d.ESC, \"i\", i.toString(), asMapKey, cache);\n    } else {\n      return i;\n    }\n  };\n  writer.JSONMarshaller.prototype.emitDouble = function(d, asMapKey, cache) {\n    if (asMapKey) {\n      return this.emitString(d.ESC, \"d\", d, asMapKey, cache);\n    } else {\n      return d;\n    }\n  };\n  writer.JSONMarshaller.prototype.emitBinary = function(b, asMapKey, cache) {\n    return this.emitString(d.ESC, \"b\", b, asMapKey, cache);\n  };\n  writer.JSONMarshaller.prototype.emitQuoted = function(em, obj, cache) {\n    if (em.verbose) {\n      var ret = {}, k = this.emitString(d.ESC_TAG, \"'\", \"\", true, cache);\n      ret[k] = writer.marshal(this, obj, false, cache);\n      return ret;\n    } else {\n      return [this.emitString(d.ESC_TAG, \"'\", \"\", true, cache), writer.marshal(this, obj, false, cache)];\n    }\n  };\n  writer.emitObjects = function(em, iterable, cache) {\n    var ret = [];\n    if (util.isArray(iterable)) {\n      for (var i = 0; i < iterable.length; i++) {\n        ret.push(writer.marshal(em, iterable[i], false, cache));\n      }\n    } else {\n      iterable.forEach(function(v, i) {\n        ret.push(writer.marshal(em, v, false, cache));\n      });\n    }\n    return ret;\n  };\n  writer.emitArray = function(em, iterable, skip, cache) {\n    return writer.emitObjects(em, iterable, cache);\n  };\n  writer.isStringableKey = function(em, k) {\n    if (typeof k !== \"string\") {\n      var h = em.handler(k);\n      return h && h.tag(k).length === 1;\n    } else {\n      return true;\n    }\n  };\n  writer.stringableKeys = function(em, obj) {\n    var arr = em.unpack(obj), stringableKeys = true;\n    if (arr) {\n      for (var i = 0; i < arr.length; i += 2) {\n        stringableKeys = writer.isStringableKey(em, arr[i]);\n        if (!stringableKeys) {\n          break;\n        }\n      }\n      return stringableKeys;\n    } else if (obj.keys) {\n      var iter = obj.keys(), step = null;\n      if (iter.next) {\n        step = iter.next();\n        while (!step.done) {\n          stringableKeys = writer.isStringableKey(em, step.value);\n          if (!stringableKeys) {\n            break;\n          }\n          step = iter.next();\n        }\n        return stringableKeys;\n      }\n    }\n    if (obj.forEach) {\n      obj.forEach(function(v, k) {\n        stringableKeys = stringableKeys && writer.isStringableKey(em, k);\n      });\n      return stringableKeys;\n    } else {\n      throw new Error(\"Cannot walk keys of object type \" + handlers.constructor(obj).name);\n    }\n  };\n  writer.isForeignObject = function(x) {\n    if (x.constructor[\"transit$isObject\"]) {\n      return true;\n    }\n    var ret = x.constructor.toString();\n    ret = ret.substr(\"function \".length);\n    ret = ret.substr(0, ret.indexOf(\"(\"));\n    var isObject = ret == \"Object\";\n    if (typeof Object.defineProperty != \"undefined\") {\n      Object.defineProperty(x.constructor, \"transit$isObject\", {value:isObject, enumerable:false});\n    } else {\n      x.constructor[\"transit$isObject\"] = isObject;\n    }\n    return isObject;\n  };\n  writer.emitMap = function(em, obj, skip, cache) {\n    var arr = null, rep = null, tag = null, ks = null, i = 0;\n    if (obj.constructor === Object || obj.forEach != null || em.handlerForForeign && writer.isForeignObject(obj)) {\n      if (em.verbose) {\n        if (obj.forEach != null) {\n          if (writer.stringableKeys(em, obj)) {\n            var ret = {};\n            obj.forEach(function(v, k) {\n              ret[writer.marshal(em, k, true, false)] = writer.marshal(em, v, false, cache);\n            });\n            return ret;\n          } else {\n            arr = em.unpack(obj);\n            rep = [];\n            tag = em.emitString(d.ESC_TAG, \"cmap\", \"\", true, cache);\n            if (arr) {\n              for (; i < arr.length; i += 2) {\n                rep.push(writer.marshal(em, arr[i], false, false));\n                rep.push(writer.marshal(em, arr[i + 1], false, cache));\n              }\n            } else {\n              obj.forEach(function(v, k) {\n                rep.push(writer.marshal(em, k, false, false));\n                rep.push(writer.marshal(em, v, false, cache));\n              });\n            }\n            ret = {};\n            ret[tag] = rep;\n            return ret;\n          }\n        } else {\n          ks = util.objectKeys(obj);\n          ret = {};\n          for (; i < ks.length; i++) {\n            ret[writer.marshal(em, ks[i], true, false)] = writer.marshal(em, obj[ks[i]], false, cache);\n          }\n          return ret;\n        }\n      } else {\n        if (obj.forEach != null) {\n          if (writer.stringableKeys(em, obj)) {\n            arr = em.unpack(obj);\n            ret = [\"^ \"];\n            if (arr) {\n              for (; i < arr.length; i += 2) {\n                ret.push(writer.marshal(em, arr[i], true, cache));\n                ret.push(writer.marshal(em, arr[i + 1], false, cache));\n              }\n            } else {\n              obj.forEach(function(v, k) {\n                ret.push(writer.marshal(em, k, true, cache));\n                ret.push(writer.marshal(em, v, false, cache));\n              });\n            }\n            return ret;\n          } else {\n            arr = em.unpack(obj);\n            rep = [];\n            tag = em.emitString(d.ESC_TAG, \"cmap\", \"\", true, cache);\n            if (arr) {\n              for (; i < arr.length; i += 2) {\n                rep.push(writer.marshal(em, arr[i], false, cache));\n                rep.push(writer.marshal(em, arr[i + 1], false, cache));\n              }\n            } else {\n              obj.forEach(function(v, k) {\n                rep.push(writer.marshal(em, k, false, cache));\n                rep.push(writer.marshal(em, v, false, cache));\n              });\n            }\n            return [tag, rep];\n          }\n        } else {\n          ret = [\"^ \"];\n          ks = util.objectKeys(obj);\n          for (; i < ks.length; i++) {\n            ret.push(writer.marshal(em, ks[i], true, cache));\n            ret.push(writer.marshal(em, obj[ks[i]], false, cache));\n          }\n          return ret;\n        }\n      }\n    } else if (em.objectBuilder != null) {\n      return em.objectBuilder(obj, function(k) {\n        return writer.marshal(em, k, true, cache);\n      }, function(v) {\n        return writer.marshal(em, v, false, cache);\n      });\n    } else {\n      var name = handlers.constructor(obj).name, err = new Error(\"Cannot write \" + name);\n      err.data = {obj:obj, type:name};\n      throw err;\n    }\n  };\n  writer.emitTaggedMap = function(em, tag, rep, skip, cache) {\n    if (em.verbose) {\n      var ret = {};\n      ret[em.emitString(d.ESC_TAG, tag, \"\", true, cache)] = writer.marshal(em, rep, false, cache);\n      return ret;\n    } else {\n      return [em.emitString(d.ESC_TAG, tag, \"\", true, cache), writer.marshal(em, rep, false, cache)];\n    }\n  };\n  writer.emitEncoded = function(em, h, tag, rep, obj, asMapKey, cache) {\n    if (tag.length === 1) {\n      if (typeof rep === \"string\") {\n        return em.emitString(d.ESC, tag, rep, asMapKey, cache);\n      } else if (asMapKey || em.preferStrings) {\n        var vh = em.verbose && h.getVerboseHandler();\n        if (vh) {\n          tag = vh.tag(obj);\n          rep = vh.stringRep(obj, vh);\n        } else {\n          rep = h.stringRep(obj, h);\n        }\n        if (rep !== null) {\n          return em.emitString(d.ESC, tag, rep, asMapKey, cache);\n        } else {\n          var err = new Error('Tag \"' + tag + '\" cannot be encoded as string');\n          err.data = {tag:tag, rep:rep, obj:obj};\n          throw err;\n        }\n      } else {\n        return writer.emitTaggedMap(em, tag, rep, asMapKey, cache);\n      }\n    } else {\n      return writer.emitTaggedMap(em, tag, rep, asMapKey, cache);\n    }\n  };\n  writer.marshal = function(em, obj, asMapKey, cache) {\n    if (em.transform !== null) {\n      obj = em.transform(obj);\n    }\n    var h = em.handler(obj) || (em.handlerForForeign ? em.handlerForForeign(obj, em.handlers) : null), tag = h ? h.tag(obj) : null, rep = h ? h.rep(obj) : null;\n    if (h != null && tag != null) {\n      switch(tag) {\n        case \"_\":\n          return em.emitNil(asMapKey, cache);\n          break;\n        case \"s\":\n          return em.emitString(\"\", \"\", writer.escape(rep), asMapKey, cache);\n          break;\n        case \"?\":\n          return em.emitBoolean(rep, asMapKey, cache);\n          break;\n        case \"i\":\n          return em.emitInteger(rep, asMapKey, cache);\n          break;\n        case \"d\":\n          return em.emitDouble(rep, asMapKey, cache);\n          break;\n        case \"b\":\n          return em.emitBinary(rep, asMapKey, cache);\n          break;\n        case \"'\":\n          return em.emitQuoted(em, rep, cache);\n          break;\n        case \"array\":\n          return writer.emitArray(em, rep, asMapKey, cache);\n          break;\n        case \"map\":\n          return writer.emitMap(em, rep, asMapKey, cache);\n          break;\n        default:\n          return writer.emitEncoded(em, h, tag, rep, obj, asMapKey, cache);\n          break;\n      }\n    } else {\n      var name = handlers.constructor(obj).name, err = new Error(\"Cannot write \" + name);\n      err.data = {obj:obj, type:name};\n      throw err;\n    }\n  };\n  writer.maybeQuoted = function(em, obj) {\n    var h = em.handler(obj) || (em.handlerForForeign ? em.handlerForForeign(obj, em.handlers) : null);\n    if (h != null) {\n      if (h.tag(obj).length === 1) {\n        return types.quoted(obj);\n      } else {\n        return obj;\n      }\n    } else {\n      var name = handlers.constructor(obj).name, err = new Error(\"Cannot write \" + name);\n      err.data = {obj:obj, type:name};\n      throw err;\n    }\n  };\n  writer.marshalTop = function(em, obj, asMapKey, cache) {\n    return JSON.stringify(writer.marshal(em, writer.maybeQuoted(em, obj), asMapKey, cache));\n  };\n  writer.Writer = function Transit$Writer(marshaller, options) {\n    this._marshaller = marshaller;\n    this.options = options || {};\n    if (this.options[\"cache\"] === false) {\n      this.cache = null;\n    } else {\n      this.cache = this.options[\"cache\"] ? this.options[\"cache\"] : new caching.WriteCache();\n    }\n  };\n  writer.Writer.prototype.marshaller = function() {\n    return this._marshaller;\n  };\n  writer.Writer.prototype[\"marshaller\"] = writer.Writer.prototype.marshaller;\n  writer.Writer.prototype.write = function(obj, opts) {\n    var ret = null, ropts = opts || {}, asMapKey = ropts[\"asMapKey\"] || false, cache = this._marshaller.verbose ? false : this.cache;\n    if (ropts[\"marshalTop\"] === false) {\n      ret = writer.marshal(this._marshaller, obj, asMapKey, cache);\n    } else {\n      ret = writer.marshalTop(this._marshaller, obj, asMapKey, cache);\n    }\n    if (this.cache != null) {\n      this.cache.clear();\n    }\n    return ret;\n  };\n  writer.Writer.prototype[\"write\"] = writer.Writer.prototype.write;\n  writer.Writer.prototype.register = function(type, handler) {\n    this._marshaller.registerHandler(type, handler);\n  };\n  writer.Writer.prototype[\"register\"] = writer.Writer.prototype.register;\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.impl.writer\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.handlers\");\ngoog.require(\"com.cognitect.transit.types\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.require(\"goog.math.Long\");\n\ngoog.scope(function () {\n\n    var writer   = com.cognitect.transit.impl.writer,\n        util     = com.cognitect.transit.util,\n        caching  = com.cognitect.transit.caching,\n        handlers = com.cognitect.transit.handlers,\n        types    = com.cognitect.transit.types,\n        d        = com.cognitect.transit.delimiters,\n        Long     = goog.math.Long;\n\n    writer.escape = function (string) {\n        if (string.length > 0) {\n            var c = string.charAt(0);\n            if (c === d.ESC || c === d.SUB || c === d.RES) {\n                return d.ESC + string;\n            } else {\n                return string;\n            }\n        } else {\n            return string;\n        }\n    };\n\n    /**\n     * @constructor\n     */\n    writer.JSONMarshaller = function Transit$JSONMarshaller(opts) {\n        this.opts = opts || {};\n        this.preferStrings = this.opts[\"preferStrings\"] != null ? this.opts[\"preferStrings\"] : true;\n\n        this.objectBuilder = this.opts[\"objectBuilder\"] || null;\n        this.transform = this.opts[\"transform\"] || null;\n\n        this.handlers = new handlers.Handlers();\n\n        var optsHandlers = this.opts[\"handlers\"];\n        if (optsHandlers) {\n            if (util.isArray(optsHandlers) || !optsHandlers.forEach) {\n                throw new Error(\"transit writer \\\"handlers\\\" option must be a map\");\n            }\n            var self = this;\n            optsHandlers.forEach(function (v, k) {\n                if (k !== undefined) {\n                    self.handlers.set(k, v);\n                } else {\n                    throw new Error(\"Cannot create handler for JavaScript undefined\");\n                }\n            });\n        }\n\n        // Multiple JS context helper\n        this.handlerForForeign = this.opts[\"handlerForForeign\"];\n\n        this.unpack = this.opts[\"unpack\"] || function (x) {\n                if (types.isArrayMap(x) && x.backingMap === null) {\n                    return x._entries;\n                } else {\n                    return false;\n                }\n            };\n\n        this.verbose = (this.opts && this.opts[\"verbose\"]) || false;\n    };\n\n    writer.JSONMarshaller.prototype.handler = function (obj) {\n        var h = this.handlers.get(handlers.constructor(obj));\n\n        if (h != null) {\n            return h;\n        } else {\n            var tag = obj && obj[\"transitTag\"];\n            if (tag) {\n                return this.handlers.get(tag)\n            } else {\n                return null;\n            }\n        }\n    };\n\n    writer.JSONMarshaller.prototype.registerHandler = function (ctor, handler) {\n        this.handlers.set(ctor, handler);\n    };\n\n    writer.JSONMarshaller.prototype.emitNil = function (asMapKey, cache) {\n        if (asMapKey) {\n            return this.emitString(d.ESC, \"_\", \"\", asMapKey, cache);\n        } else {\n            return null;\n        }\n    };\n\n    writer.JSONMarshaller.prototype.emitString = function (prefix, tag, s, asMapKey, cache) {\n        var string = prefix + tag + s;\n        if (cache) {\n            return cache.write(string, asMapKey);\n        } else {\n            return string;\n        }\n    };\n\n    writer.JSONMarshaller.prototype.emitBoolean = function (b, asMapKey, cache) {\n        if (asMapKey) {\n            var s = b.toString();\n            return this.emitString(d.ESC, \"?\", s[0], asMapKey, cache);\n        } else {\n            return b;\n        }\n    };\n\n    writer.JSONMarshaller.prototype.emitInteger = function (i, asMapKey, cache) {\n        if (i === Infinity) {\n            return this.emitString(d.ESC, \"z\", \"INF\", asMapKey, cache);\n        } else if (i === -Infinity) {\n            return this.emitString(d.ESC, \"z\", \"-INF\", asMapKey, cache);\n        } else if (isNaN(i)) {\n            return this.emitString(d.ESC, \"z\", \"NaN\", asMapKey, cache);\n        } else if (asMapKey || (typeof i === \"string\") || (i instanceof Long)) {\n            return this.emitString(d.ESC, \"i\", i.toString(), asMapKey, cache);\n        } else {\n            return i;\n        }\n    };\n\n    writer.JSONMarshaller.prototype.emitDouble = function (d, asMapKey, cache) {\n        if (asMapKey) {\n            return this.emitString(d.ESC, \"d\", d, asMapKey, cache);\n        } else {\n            return d;\n        }\n    };\n\n    writer.JSONMarshaller.prototype.emitBinary = function (b, asMapKey, cache) {\n        return this.emitString(d.ESC, \"b\", b, asMapKey, cache);\n    };\n\n    writer.JSONMarshaller.prototype.emitQuoted = function (em, obj, cache) {\n        if (em.verbose) {\n            var ret = {},\n                k = this.emitString(d.ESC_TAG, \"'\", \"\", true, cache);\n            ret[k] = writer.marshal(this, obj, false, cache);\n            return ret;\n        } else {\n            return [this.emitString(d.ESC_TAG, \"'\", \"\", true, cache), writer.marshal(this, obj, false, cache)];\n        }\n    };\n\n    writer.emitObjects = function (em, iterable, cache) {\n        var ret = [];\n        if (util.isArray(iterable)) {\n            for (var i = 0; i < iterable.length; i++) {\n                ret.push(writer.marshal(em, iterable[i], false, cache));\n            }\n        } else {\n            iterable.forEach(function (v, i) {\n                ret.push(writer.marshal(em, v, false, cache));\n            });\n        }\n        return ret;\n    };\n\n    writer.emitArray = function (em, iterable, skip, cache) {\n        return writer.emitObjects(em, iterable, cache);\n    };\n\n    writer.isStringableKey = function (em, k) {\n        if (typeof k !== \"string\") {\n            var h = em.handler(k);\n            return h && h.tag(k).length === 1;\n        } else {\n            return true;\n        }\n    };\n\n    /**\n     * Returns true if map-like obj parameter has only stringable keys -\n     * strings, symbols or keywords. If false, obj is a cmap value.\n     * @param em\n     * @param obj\n     * @returns {boolean}\n     */\n    writer.stringableKeys = function (em, obj) {\n        var arr = em.unpack(obj),\n            stringableKeys = true;\n\n        if (arr) {\n            for (var i = 0; i < arr.length; i += 2) {\n                stringableKeys = writer.isStringableKey(em, arr[i]);\n                if (!stringableKeys) {\n                    break;\n                }\n            }\n            return stringableKeys;\n        } else if (obj.keys) {\n            var iter = obj.keys(),\n                step = null;\n\n            if (iter.next) {\n                step = iter.next();\n                while (!step.done) {\n                    stringableKeys = writer.isStringableKey(em, step.value);\n                    if (!stringableKeys) {\n                        break;\n                    }\n                    step = iter.next();\n                }\n                return stringableKeys;\n            }\n        }\n\n        if (obj.forEach) {\n            obj.forEach(function (v, k) {\n                stringableKeys = stringableKeys && writer.isStringableKey(em, k);\n            });\n            return stringableKeys;\n        } else {\n            throw new Error(\"Cannot walk keys of object type \" + handlers.constructor(obj).name);\n        }\n    };\n\n    /**\n     * Returns true if x is an Object instance from a different JavaScript\n     * context.\n     * @param x\n     * @returns {boolean}\n     */\n    writer.isForeignObject = function (x) {\n        if (x.constructor[\"transit$isObject\"]) {\n            return true;\n        }\n\n        var ret = x.constructor.toString();\n\n        ret = ret.substr('function '.length);\n        ret = ret.substr(0, ret.indexOf('('));\n        var isObject = ret == \"Object\";\n\n        if (typeof Object.defineProperty != \"undefined\") {\n            Object.defineProperty(x.constructor, \"transit$isObject\", {\n                value: isObject,\n                enumerable: false\n            });\n        } else {\n            x.constructor[\"transit$isObject\"] = isObject;\n        }\n\n        return isObject;\n    };\n\n    writer.emitMap = function (em, obj, skip, cache) {\n        var arr = null, rep = null, tag = null, ks = null, i = 0;\n\n        if ((obj.constructor === Object) ||\n            (obj.forEach != null) ||\n            (em.handlerForForeign && writer.isForeignObject(obj))) {\n            if (em.verbose) {\n                if (obj.forEach != null) {\n                    if (writer.stringableKeys(em, obj)) {\n                        var ret = {};\n                        obj.forEach(function (v, k) {\n                            ret[writer.marshal(em, k, true, false)] = writer.marshal(em, v, false, cache);\n                        });\n                        return ret;\n                    } else {\n                        arr = em.unpack(obj);\n                        rep = [];\n                        tag = em.emitString(d.ESC_TAG, \"cmap\", \"\", true, cache);\n                        if (arr) {\n                            for (; i < arr.length; i += 2) {\n                                rep.push(writer.marshal(em, arr[i], false, false));\n                                rep.push(writer.marshal(em, arr[i + 1], false, cache));\n                            }\n                        } else {\n                            obj.forEach(function (v, k) {\n                                rep.push(writer.marshal(em, k, false, false));\n                                rep.push(writer.marshal(em, v, false, cache));\n                            });\n                        }\n                        ret = {};\n                        ret[tag] = rep;\n                        return ret;\n                    }\n                } else {\n                    ks = util.objectKeys(obj);\n                    ret = {};\n                    for (; i < ks.length; i++) {\n                        ret[writer.marshal(em, ks[i], true, false)] = writer.marshal(em, obj[ks[i]], false, cache);\n                    }\n                    return ret;\n                }\n            } else {\n                if (obj.forEach != null) {\n                    if (writer.stringableKeys(em, obj)) {\n                        arr = em.unpack(obj);\n                        ret = [\"^ \"];\n                        if (arr) {\n                            for (; i < arr.length; i += 2) {\n                                ret.push(writer.marshal(em, arr[i], true, cache));\n                                ret.push(writer.marshal(em, arr[i + 1], false, cache));\n                            }\n                        } else {\n                            obj.forEach(function (v, k) {\n                                ret.push(writer.marshal(em, k, true, cache));\n                                ret.push(writer.marshal(em, v, false, cache));\n                            });\n                        }\n                        return ret;\n                    } else {\n                        arr = em.unpack(obj);\n                        rep = [];\n                        tag = em.emitString(d.ESC_TAG, \"cmap\", \"\", true, cache);\n                        if (arr) {\n                            for (; i < arr.length; i += 2) {\n                                rep.push(writer.marshal(em, arr[i], false, cache));\n                                rep.push(writer.marshal(em, arr[i + 1], false, cache));\n                            }\n                        } else {\n                            obj.forEach(function (v, k) {\n                                rep.push(writer.marshal(em, k, false, cache));\n                                rep.push(writer.marshal(em, v, false, cache));\n                            });\n                        }\n                        return [tag, rep];\n                    }\n                } else {\n                    ret = [\"^ \"];\n                    ks = util.objectKeys(obj);\n                    for (; i < ks.length; i++) {\n                        ret.push(writer.marshal(em, ks[i], true, cache));\n                        ret.push(writer.marshal(em, obj[ks[i]], false, cache));\n                    }\n                    return ret;\n                }\n            }\n        } else if (em.objectBuilder != null) {\n            return em.objectBuilder(obj, function (k) {\n                    return writer.marshal(em, k, true, cache);\n                },\n                function (v) {\n                    return writer.marshal(em, v, false, cache);\n                });\n        } else {\n            var name = handlers.constructor(obj).name,\n                err = new Error(\"Cannot write \" + name);\n            err.data = {obj: obj, type: name};\n            throw err;\n        }\n    };\n\n    writer.emitTaggedMap = function (em, tag, rep, skip, cache) {\n        if (em.verbose) {\n            var ret = {};\n            ret[em.emitString(d.ESC_TAG, tag, \"\", true, cache)] = writer.marshal(em, rep, false, cache);\n            return ret;\n        } else {\n            return [em.emitString(d.ESC_TAG, tag, \"\", true, cache), writer.marshal(em, rep, false, cache)];\n        }\n    };\n\n    writer.emitEncoded = function (em, h, tag, rep, obj, asMapKey, cache) {\n        if (tag.length === 1) {\n            if (typeof rep === \"string\") {\n                return em.emitString(d.ESC, tag, rep, asMapKey, cache);\n            } else if (asMapKey || em.preferStrings) {\n                var vh = em.verbose && h.getVerboseHandler();\n                if (vh) {\n                    tag = vh.tag(obj);\n                    rep = vh.stringRep(obj, vh);\n                } else {\n                    rep = h.stringRep(obj, h);\n                }\n                if (rep !== null) {\n                    return em.emitString(d.ESC, tag, rep, asMapKey, cache);\n                } else {\n                    var err = new Error(\"Tag \\\"\" + tag + \"\\\" cannot be encoded as string\");\n                    err.data = {tag: tag, rep: rep, obj: obj};\n                    throw err;\n                }\n            } else {\n                return writer.emitTaggedMap(em, tag, rep, asMapKey, cache);\n            }\n        } else {\n            return writer.emitTaggedMap(em, tag, rep, asMapKey, cache);\n        }\n    };\n\n    writer.marshal = function (em, obj, asMapKey, cache) {\n        if(em.transform !== null) {\n            obj = em.transform(obj);\n        }\n\n        var h = em.handler(obj) || (em.handlerForForeign ? em.handlerForForeign(obj, em.handlers) : null),\n            tag = h ? h.tag(obj) : null,\n            rep = h ? h.rep(obj) : null;\n\n        if (h != null && tag != null) {\n            switch (tag) {\n                case \"_\":\n                    return em.emitNil(asMapKey, cache);\n                    break;\n                case \"s\":\n                    return em.emitString(\"\", \"\", writer.escape(rep), asMapKey, cache);\n                    break;\n                case \"?\":\n                    return em.emitBoolean(rep, asMapKey, cache);\n                    break;\n                case \"i\":\n                    return em.emitInteger(rep, asMapKey, cache);\n                    break;\n                case \"d\":\n                    return em.emitDouble(rep, asMapKey, cache);\n                    break;\n                case \"b\":\n                    return em.emitBinary(rep, asMapKey, cache);\n                    break;\n                case \"'\":\n                    return em.emitQuoted(em, rep, cache);\n                    break;\n                case \"array\":\n                    return writer.emitArray(em, rep, asMapKey, cache);\n                    break;\n                case \"map\":\n                    return writer.emitMap(em, rep, asMapKey, cache);\n                    break;\n                default:\n                    return writer.emitEncoded(em, h, tag, rep, obj, asMapKey, cache);\n                    break;\n            }\n        } else {\n            var name = handlers.constructor(obj).name,\n                err = new Error(\"Cannot write \" + name);\n            err.data = {obj: obj, type: name};\n            throw err;\n        }\n    };\n\n    writer.maybeQuoted = function (em, obj) {\n        var h = em.handler(obj) || (em.handlerForForeign ? em.handlerForForeign(obj, em.handlers) : null);\n\n        if (h != null) {\n            if (h.tag(obj).length === 1) {\n                return types.quoted(obj);\n            } else {\n                return obj;\n            }\n        } else {\n            var name = handlers.constructor(obj).name,\n                err = new Error(\"Cannot write \" + name);\n            err.data = {obj: obj, type: name};\n            throw err;\n        }\n    };\n\n    writer.marshalTop = function (em, obj, asMapKey, cache) {\n        return JSON.stringify(writer.marshal(em, writer.maybeQuoted(em, obj), asMapKey, cache));\n    };\n\n    /**\n     * @constructor\n     */\n    writer.Writer = function Transit$Writer(marshaller, options) {\n        this._marshaller = marshaller;\n        this.options = options || {};\n        if (this.options[\"cache\"] === false) {\n            this.cache = null;\n        } else {\n            this.cache = this.options[\"cache\"] ? this.options[\"cache\"] : new caching.WriteCache();\n        }\n    };\n\n    writer.Writer.prototype.marshaller = function () {\n        return this._marshaller;\n    };\n    writer.Writer.prototype[\"marshaller\"] = writer.Writer.prototype.marshaller;\n\n    writer.Writer.prototype.write = function (obj, opts) {\n        var ret = null,\n            ropts = opts || {},\n            asMapKey = ropts[\"asMapKey\"] || false,\n            cache = this._marshaller.verbose ? false : this.cache;\n\n        if (ropts[\"marshalTop\"] === false) {\n            ret = writer.marshal(this._marshaller, obj, asMapKey, cache)\n        } else {\n            ret = writer.marshalTop(this._marshaller, obj, asMapKey, cache)\n        }\n        if (this.cache != null) {\n            this.cache.clear();\n        }\n        return ret;\n    };\n    writer.Writer.prototype[\"write\"] = writer.Writer.prototype.write;\n\n    writer.Writer.prototype.register = function (type, handler) {\n        this._marshaller.registerHandler(type, handler);\n    };\n    writer.Writer.prototype[\"register\"] = writer.Writer.prototype.register;\n\n});\n","~:compiled-at",1668873222604,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.impl.writer.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]