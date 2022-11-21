["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/caching.js"],"~:js","goog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.scope(function() {\n  var caching = com.cognitect.transit.caching, d = com.cognitect.transit.delimiters;\n  caching.MIN_SIZE_CACHEABLE = 3;\n  caching.BASE_CHAR_IDX = 48;\n  caching.CACHE_CODE_DIGITS = 44;\n  caching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS * caching.CACHE_CODE_DIGITS;\n  caching.MAX_CACHE_SIZE = 4096;\n  caching.isCacheable = function(string, asMapKey) {\n    if (string.length > caching.MIN_SIZE_CACHEABLE) {\n      if (asMapKey) {\n        return true;\n      } else {\n        var c0 = string.charAt(0), c1 = string.charAt(1);\n        if (c0 === d.ESC) {\n          return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n        } else {\n          return false;\n        }\n      }\n    } else {\n      return false;\n    }\n  };\n  caching.idxToCode = function(idx) {\n    var hi = Math.floor(idx / caching.CACHE_CODE_DIGITS), lo = idx % caching.CACHE_CODE_DIGITS, loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX);\n    if (hi === 0) {\n      return d.SUB + loc;\n    } else {\n      return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n  };\n  caching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n  };\n  caching.WriteCache.prototype.write = function(string, asMapKey) {\n    if (caching.isCacheable(string, asMapKey)) {\n      if (this.cacheSize === caching.MAX_CACHE_SIZE) {\n        this.clear();\n        this.gen = 0;\n        this.cache = {};\n      } else if (this.idx === caching.MAX_CACHE_ENTRIES) {\n        this.clear();\n      }\n      var entry = this.cache[string];\n      if (entry == null) {\n        this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n        this.idx++;\n        return string;\n      } else if (entry[1] != this.gen) {\n        entry[1] = this.gen;\n        entry[0] = caching.idxToCode(this.idx);\n        this.idx++;\n        return string;\n      } else {\n        return entry[0];\n      }\n    } else {\n      return string;\n    }\n  };\n  caching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n  };\n  caching.writeCache = function() {\n    return new caching.WriteCache();\n  };\n  caching.isCacheCode = function(string) {\n    return string.charAt(0) === d.SUB && string.charAt(1) !== \" \";\n  };\n  caching.codeToIdx = function(code) {\n    if (code.length === 2) {\n      return code.charCodeAt(1) - caching.BASE_CHAR_IDX;\n    } else {\n      var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS, lo = code.charCodeAt(2) - caching.BASE_CHAR_IDX;\n      return hi + lo;\n    }\n  };\n  caching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n  };\n  caching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if (this.idx == caching.MAX_CACHE_ENTRIES) {\n      this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n  };\n  caching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n  };\n  caching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n  };\n  caching.readCache = function() {\n    return new caching.ReadCache();\n  };\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\n\ngoog.scope(function() {\n\nvar caching = com.cognitect.transit.caching,\n    d       = com.cognitect.transit.delimiters;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MIN_SIZE_CACHEABLE = 3;\n\n/**\n * @const\n * @type {number}\n */\ncaching.BASE_CHAR_IDX = 48;\n\n/**\n * @const\n * @type {number}\n */\ncaching.CACHE_CODE_DIGITS = 44;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_SIZE = 4096;\n\ncaching.isCacheable = function(string, asMapKey) {\n    if(string.length > caching.MIN_SIZE_CACHEABLE) {\n        if(asMapKey) {\n            return true;\n        } else {\n            var c0 = string.charAt(0),\n                c1 = string.charAt(1);\n            if(c0 === d.ESC) {\n                return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n            } else {\n                return false;\n            }\n        }\n    } else {\n        return false;\n    }\n};\n\n// =============================================================================\n// WriteCache\n\ncaching.idxToCode = function(idx) {\n    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),\n        lo  = idx % caching.CACHE_CODE_DIGITS,\n        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)\n    if(hi === 0) {\n        return d.SUB + loc;\n    } else {\n        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n};\n\n/**\n * @constructor\n */\ncaching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n};\n\ncaching.WriteCache.prototype.write = function(string, asMapKey) {\n    if(caching.isCacheable(string, asMapKey)) {\n        if(this.cacheSize === caching.MAX_CACHE_SIZE) {\n            this.clear();\n            this.gen = 0;\n            this.cache = {};\n        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {\n            this.clear();\n        }\n        var entry = this.cache[string];\n        if(entry == null) {\n            this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n            this.idx++;\n            return string;\n        } else if(entry[1] != this.gen) {\n            entry[1] = this.gen;\n            entry[0] = caching.idxToCode(this.idx);\n            this.idx++;\n            return string;\n        } else {\n            return entry[0];\n        }\n    } else {\n        return string;\n    }\n};\n\ncaching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n};\n\ncaching.writeCache = function() {\n    return new caching.WriteCache();\n};\n\n// =============================================================================\n// ReadCache\n\ncaching.isCacheCode = function(string) {\n    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== \" \");\n};\n\ncaching.codeToIdx = function(code) {\n    if(code.length === 2) {\n        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        \n    } else {\n        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,\n            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);\n        return hi + lo; \n    }\n};\n\n/**\n * @constructor\n */\ncaching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n};\n\ncaching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if(this.idx == caching.MAX_CACHE_ENTRIES) {\n        this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n};\n\ncaching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n};\n\ncaching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n};\n\ncaching.readCache = function() {\n    return new caching.ReadCache();\n};\n\n});    \n","~:compiled-at",1668873222549,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.caching.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]