["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit.js"],"~:js","goog.provide(\"com.cognitect.transit\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.impl.reader\");\ngoog.require(\"com.cognitect.transit.impl.writer\");\ngoog.require(\"com.cognitect.transit.types\");\ngoog.require(\"com.cognitect.transit.eq\");\ngoog.require(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.caching\");\nvar TRANSIT_DEV = true;\nvar TRANSIT_NODE_TARGET = false;\nvar TRANSIT_BROWSER_TARGET = false;\nvar TRANSIT_BROWSER_AMD_TARGET = false;\ngoog.scope(function() {\n  var transit = com.cognitect.transit;\n  var util = com.cognitect.transit.util, reader = com.cognitect.transit.impl.reader, writer = com.cognitect.transit.impl.writer, decoder = com.cognitect.transit.impl.decoder, types = com.cognitect.transit.types, eq = com.cognitect.transit.eq, caching = com.cognitect.transit.caching;\n  transit.MapLike;\n  transit.SetLike;\n  transit.reader = function(type, opts) {\n    if (type === \"json\" || type === \"json-verbose\" || type == null) {\n      type = \"json\";\n      var unmarshaller = new reader.JSONUnmarshaller(opts);\n      return new reader.Reader(unmarshaller, opts);\n    } else {\n      throw new Error(\"Cannot create reader of type \" + type);\n    }\n  };\n  transit.writer = function(type, opts) {\n    if (type === \"json\" || type === \"json-verbose\" || type == null) {\n      if (type === \"json-verbose\") {\n        if (opts == null) {\n          opts = {};\n        }\n        opts[\"verbose\"] = true;\n      }\n      var marshaller = new writer.JSONMarshaller(opts);\n      return new writer.Writer(marshaller, opts);\n    } else {\n      var err = new Error('Type must be \"json\"');\n      err.data = {type:type};\n      throw err;\n    }\n  };\n  transit.makeWriteHandler = function(obj) {\n    var Handler = function() {\n    };\n    Handler.prototype.tag = obj[\"tag\"];\n    Handler.prototype.rep = obj[\"rep\"];\n    Handler.prototype.stringRep = obj[\"stringRep\"];\n    Handler.prototype.getVerboseHandler = obj[\"getVerboseHandler\"];\n    return new Handler();\n  };\n  transit.makeBuilder = function(obj) {\n    var Builder = function() {\n    };\n    Builder.prototype.init = obj[\"init\"];\n    Builder.prototype.add = obj[\"add\"];\n    Builder.prototype.finalize = obj[\"finalize\"];\n    Builder.prototype.fromArray = obj[\"fromArray\"];\n    return new Builder();\n  };\n  transit.date = types.date;\n  transit.integer = types.intValue;\n  transit.isInteger = types.isInteger;\n  transit.uuid = types.uuid;\n  transit.isUUID = types.isUUID;\n  transit.bigInt = types.bigInteger;\n  transit.isBigInt = types.isBigInteger;\n  transit.bigDec = types.bigDecimalValue;\n  transit.isBigDec = types.isBigDecimal;\n  transit.keyword = types.keyword;\n  transit.isKeyword = types.isKeyword;\n  transit.symbol = types.symbol;\n  transit.isSymbol = types.isSymbol;\n  transit.binary = types.binary;\n  transit.isBinary = types.isBinary;\n  transit.uri = types.uri;\n  transit.isURI = types.isURI;\n  transit.map = types.map;\n  transit.isMap = types.isMap;\n  transit.set = types.set;\n  transit.isSet = types.isSet;\n  transit.list = types.list;\n  transit.isList = types.isList;\n  transit.quoted = types.quoted;\n  transit.isQuoted = types.isQuoted;\n  transit.tagged = types.taggedValue;\n  transit.isTaggedValue = types.isTaggedValue;\n  transit.link = types.link;\n  transit.isLink = types.isLink;\n  transit.hash = eq.hashCode;\n  transit.hashMapLike = eq.hashMapLike;\n  transit.hashArrayLike = eq.hashArrayLike;\n  transit.equals = eq.equals;\n  transit.extendToEQ = eq.extendToEQ;\n  transit.mapToObject = function(m) {\n    var ret = {};\n    m.forEach(function(v, k) {\n      if (typeof k !== \"string\") {\n        throw Error(\"Cannot convert map with non-string keys\");\n      } else {\n        ret[k] = v;\n      }\n    });\n    return ret;\n  };\n  transit.objectToMap = function(obj) {\n    var ret = transit.map();\n    for (var p in obj) {\n      if (obj.hasOwnProperty(p)) {\n        ret.set(p, obj[p]);\n      }\n    }\n    return ret;\n  };\n  transit.decoder = decoder.decoder;\n  transit.readCache = caching.readCache;\n  transit.writeCache = caching.writeCache;\n  transit.UUIDfromString = types.UUIDfromString;\n  transit.randomUUID = util.randomUUID;\n  transit.stringableKeys = writer.stringableKeys;\n  if (TRANSIT_BROWSER_TARGET) {\n    goog.exportSymbol(\"transit.reader\", transit.reader);\n    goog.exportSymbol(\"transit.writer\", transit.writer);\n    goog.exportSymbol(\"transit.makeBuilder\", transit.makeBuilder);\n    goog.exportSymbol(\"transit.makeWriteHandler\", transit.makeWriteHandler);\n    goog.exportSymbol(\"transit.date\", types.date);\n    goog.exportSymbol(\"transit.integer\", types.intValue);\n    goog.exportSymbol(\"transit.isInteger\", types.isInteger);\n    goog.exportSymbol(\"transit.uuid\", types.uuid);\n    goog.exportSymbol(\"transit.isUUID\", types.isUUID);\n    goog.exportSymbol(\"transit.bigInt\", types.bigInteger);\n    goog.exportSymbol(\"transit.isBigInt\", types.isBigInteger);\n    goog.exportSymbol(\"transit.bigDec\", types.bigDecimalValue);\n    goog.exportSymbol(\"transit.isBigDec\", types.isBigDecimal);\n    goog.exportSymbol(\"transit.keyword\", types.keyword);\n    goog.exportSymbol(\"transit.isKeyword\", types.isKeyword);\n    goog.exportSymbol(\"transit.symbol\", types.symbol);\n    goog.exportSymbol(\"transit.isSymbol\", types.isSymbol);\n    goog.exportSymbol(\"transit.binary\", types.binary);\n    goog.exportSymbol(\"transit.isBinary\", types.isBinary);\n    goog.exportSymbol(\"transit.uri\", types.uri);\n    goog.exportSymbol(\"transit.isURI\", types.isURI);\n    goog.exportSymbol(\"transit.map\", types.map);\n    goog.exportSymbol(\"transit.isMap\", types.isMap);\n    goog.exportSymbol(\"transit.set\", types.set);\n    goog.exportSymbol(\"transit.isSet\", types.isSet);\n    goog.exportSymbol(\"transit.list\", types.list);\n    goog.exportSymbol(\"transit.isList\", types.isList);\n    goog.exportSymbol(\"transit.quoted\", types.quoted);\n    goog.exportSymbol(\"transit.isQuoted\", types.isQuoted);\n    goog.exportSymbol(\"transit.tagged\", types.taggedValue);\n    goog.exportSymbol(\"transit.isTaggedValue\", types.isTaggedValue);\n    goog.exportSymbol(\"transit.link\", types.link);\n    goog.exportSymbol(\"transit.isLink\", types.isLink);\n    goog.exportSymbol(\"transit.hash\", eq.hashCode);\n    goog.exportSymbol(\"transit.hashMapLike\", eq.hashMapLike);\n    goog.exportSymbol(\"transit.hashArrayLike\", eq.hashArrayLike);\n    goog.exportSymbol(\"transit.equals\", eq.equals);\n    goog.exportSymbol(\"transit.extendToEQ\", eq.extendToEQ);\n    goog.exportSymbol(\"transit.mapToObject\", transit.mapToObject);\n    goog.exportSymbol(\"transit.objectToMap\", transit.objectToMap);\n    goog.exportSymbol(\"transit.decoder\", decoder.decoder);\n    goog.exportSymbol(\"transit.UUIDfromString\", types.UUIDfromString);\n    goog.exportSymbol(\"transit.randomUUID\", util.randomUUID);\n    goog.exportSymbol(\"transit.stringableKeys\", writer.stringableKeys);\n    goog.exportSymbol(\"transit.readCache\", caching.readCache);\n    goog.exportSymbol(\"transit.writeCache\", caching.writeCache);\n  }\n  if (TRANSIT_NODE_TARGET) {\n    module.exports = {reader:transit.reader, writer:transit.writer, makeBuilder:transit.makeBuilder, makeWriteHandler:transit.makeWriteHandler, date:types.date, integer:types.intValue, isInteger:types.isInteger, uuid:types.uuid, isUUID:types.isUUID, bigInt:types.bigInteger, isBigInt:types.isBigInteger, bigDec:types.bigDecimalValue, isBigDec:types.isBigDecimal, keyword:types.keyword, isKeyword:types.isKeyword, symbol:types.symbol, isSymbol:types.isSymbol, binary:types.binary, isBinary:types.isBinary, \n    uri:types.uri, isURI:types.isURI, map:types.map, isMap:types.isMap, set:types.set, isSet:types.isSet, list:types.list, isList:types.isList, quoted:types.quoted, isQuoted:types.isQuoted, tagged:types.taggedValue, isTaggedValue:types.isTaggedValue, link:types.link, isLink:types.isLink, hash:eq.hashCode, hashArrayLike:eq.hashArrayLike, hashMapLike:eq.hashMapLike, equals:eq.equals, extendToEQ:eq.extendToEQ, mapToObject:transit.mapToObject, objectToMap:transit.objectToMap, decoder:decoder.decoder, \n    UUIDfromString:types.UUIDfromString, randomUUID:util.randomUUID, stringableKeys:writer.stringableKeys, readCache:caching.readCache, writeCache:caching.writeCache};\n  }\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n\"use strict\";\n\ngoog.provide(\"com.cognitect.transit\");\ngoog.require(\"com.cognitect.transit.util\");\ngoog.require(\"com.cognitect.transit.impl.reader\");\ngoog.require(\"com.cognitect.transit.impl.writer\");\ngoog.require(\"com.cognitect.transit.types\");\ngoog.require(\"com.cognitect.transit.eq\");\ngoog.require(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.caching\");\n\n/** @define {boolean} */\nvar TRANSIT_DEV = true;\n\n/** @define {boolean} */\nvar TRANSIT_NODE_TARGET = false;\n\n/** @define {boolean} */\nvar TRANSIT_BROWSER_TARGET = false;\n\n/** @define {boolean} */\nvar TRANSIT_BROWSER_AMD_TARGET = false;\n\ngoog.scope(function() {\n\n    /**\n     * @class transit\n     */\n    var transit = com.cognitect.transit;\n\n    var util    = com.cognitect.transit.util,\n        reader  = com.cognitect.transit.impl.reader,\n        writer  = com.cognitect.transit.impl.writer,\n        decoder = com.cognitect.transit.impl.decoder,\n        types   = com.cognitect.transit.types,\n        eq      = com.cognitect.transit.eq,\n        caching = com.cognitect.transit.caching;\n\n    /**\n     * @typedef {Map|com.cognitect.transit.types.TransitArrayMap|com.cognitect.transit.types.TransitMap}\n     */\n    transit.MapLike;\n\n    /**\n     * @typedef {Set|com.cognitect.transit.types.TransitSet}\n     */\n    transit.SetLike;\n\n    /**\n     * Create a transit reader instance.\n     * @method transit.reader\n     * @param {string=} type\n     *     type of reader to construct.  Default to \"json\". For verbose mode\n     *     supply \"json-verbose\".\n     * @param {Object=} opts\n     *     reader options. A JavaScript object to customize the writer Valid\n     *     entries include \"defaultHandler\", and \"handler\". \"defaultHandler\"\n     *     should be JavaScript function taking two arguments, the first is the\n     *     tag, the second the value. \"handlers\" should be an object of tags to\n     *     handle. The values are functions that will receive the value of matched\n     *     tag. \"preferBuffers\" may be supplied to customize binary\n     *     decoding. If available binary data will read as Node.js Buffers,\n     *     If Buffer is not available or \"prefersBuffers\" is set to false\n     *     data will be read as Uint8Array. If neither Buffer nor Uint8Array is\n     *     available - defaults to tagged value that simply wraps the\n     *     base64 encoded string.\n     * @return {com.cognitect.transit.impl.reader.Reader} A transit reader.\n     * @example\n     *     var r = transit.reader(\"json\", {\n     *         handlers: {\n     *            \"point\": function(v) { return new Point(v[0], v[1]); }\n     *         }\n     *     });\n     */\n    transit.reader = function(type, opts) {\n        if(type === \"json\" || type === \"json-verbose\" || type == null) {\n            type = \"json\";\n            var unmarshaller = new reader.JSONUnmarshaller(opts);\n            return new reader.Reader(unmarshaller, opts);\n        } else {\n            throw new Error(\"Cannot create reader of type \" + type);\n        }\n    };\n\n    /**\n     * Create a transit writer instance.\n     * @method transit.writer\n     * @param {string=} type\n     *     type of writer to construct. Defaults to \"json\". For verbose mode\n     *     supply \"json-verbose\".\n     * @param {Object=} opts\n     *     writer options. A JavaScript object to customize the writer.\n     *     \"handlers\" options, a transit.map of JavaScript constructor and\n     *     transit writer handler instance entries. \"handlerForForeign\" option,\n     *     for dealing with values from other JavaScript contexts. This function\n     *     will be passed the unmatchable value and the installed handlers. The\n     *     function should return the correct handler. Note if this function is\n     *     provided, special handling for Objects will also be\n     *     auto-installed to catch plain Objects from the foreign context.\n     * @return {com.cognitect.transit.impl.writer.Writer} A transit writer.\n     * @example\n     *     var r = transit.writer(\"json\", {\n     *         handlers: transit.map([\n     *            Point, PointHandler\n     *         ])\n     *     });\n     */\n    transit.writer = function(type, opts) {\n        if(type === \"json\" || type === \"json-verbose\" || type == null) {\n            if(type === \"json-verbose\") {\n                if(opts == null) opts = {};\n                opts[\"verbose\"] = true;\n            }\n            var marshaller = new writer.JSONMarshaller(opts);\n            return new writer.Writer(marshaller, opts);\n        } else {\n            var err = new Error(\"Type must be \\\"json\\\"\");\n            err.data = {type: type};\n            throw err;\n        }\n    };\n\n    /**\n     * Create a transit writer handler.\n     * @method transit.makeWriteHandler\n     * @param {Object} obj\n     *    An object containing 3 functions, tag, rep and stringRep. \"tag\" should\n     *    return a string representing the tag to be written on the wire. \"rep\"\n     *    should return the representation on the wire. \"stringRep\" is should\n     *    return the string representation of the value. Optional\n     *    \"getVerboseHandler\" should return a handler for writing verbose output.\n     * @return {Object} A transit write handler.\n     * @example\n     *     var PointHandler = transit.makeWriteHandler({\n     *          tag: function(p) { return \"point\"; },\n     *          rep: function(p) { return [p.x, p.y]; },\n     *          stringRep: function(p) { return null; }\n     *     });\n     */\n    transit.makeWriteHandler = function(obj) {\n        /** @constructor */\n        var Handler = function(){};\n        Handler.prototype.tag = obj[\"tag\"];\n        Handler.prototype.rep = obj[\"rep\"];\n        Handler.prototype.stringRep = obj[\"stringRep\"];\n        Handler.prototype.getVerboseHandler = obj[\"getVerboseHandler\"];\n        return new Handler();\n    };\n\n    transit.makeBuilder = function(obj) {\n        /** @constructor */\n        var Builder = function(){};\n        Builder.prototype.init = obj[\"init\"];\n        Builder.prototype.add = obj[\"add\"];\n        Builder.prototype.finalize = obj[\"finalize\"];\n        Builder.prototype.fromArray = obj[\"fromArray\"];\n        return new Builder();\n    };\n\n    /**\n     * Create a transit date.\n     * @method transit.date\n     * @param {number|string} x\n     *     A number or string representing milliseconds since epoch.\n     * @return {Date} A JavaScript Date.\n     */\n    transit.date = types.date;\n\n    /**\n     * Create an integer. If given a transit integer or a JavaScript\n     *     number will simply return that value. Given a string will\n     *     return a JavaScript number if the string represents an integer\n     *     value in the 53bit range and a transit integer otherwise.\n     * @method transit.integer\n     * @param {number|string} s\n     *     A value representing an integer.\n     * @return {number|goog.math.Long} A JavaScript number or transit integer.\n     */\n    transit.integer = types.intValue;\n\n    /**\n     * Test if an object is a transit integer. Will return true if argument\n     * is a 64 bit integer or a JavaScript number that has an interpretation as\n     * an integer value, i.e. parseFloat(n) === parseInt(n)\n     * @method transit.isInteger\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if the value is a transit integer, false otherwise.\n     */\n    transit.isInteger = types.isInteger;\n\n    /**\n     * Create transit UUID from a string\n     * @method transit.uuid\n     * @param {string} s\n     *     A string.\n     * @return {com.cognitect.transit.types.UUID} A transit UUID.\n     */\n    transit.uuid = types.uuid;\n\n    /**\n     * Test if an object is a transit UUID.\n     * @method transit.isUUID\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if the vlaue is a transit UUID instance, false otherwise.\n     */\n    transit.isUUID = types.isUUID;\n\n    /**\n     * Create a transit big integer.\n     * @method transit.bigInt\n     * @param {string} s\n     *     A string representing an arbitrary size integer value.\n     * @return {com.cognitect.transit.types.TaggedValue} A transit big integer.\n     */\n    transit.bigInt =  types.bigInteger;\n\n    /**\n     * Test if an object is a transit big integer.\n     * @method transit.isBigInt\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit big integer, false otherwise.\n     */\n    transit.isBigInt = types.isBigInteger;\n\n    /**\n     * Create a transit big decimal.\n     * @method transit.bigDec\n     * @param {string} s\n     *     A string representing an arbitrary precisions decimal value.\n     * @return {com.cognitect.transit.types.TaggedValue} A transit big decimal.\n     */\n    transit.bigDec =  types.bigDecimalValue;\n\n    /**\n     * Test if an object is a transit big decimal.\n     * @method transit.isBigDec\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit big decimal, false otherwise.\n     */\n    transit.isBigDec = types.isBigDecimal;\n\n    /**\n     * Create transit keyword.\n     * @method transit.keyword\n     * @param {string} name A string.\n     * @return {com.cognitect.transit.types.Keyword} A transit keyword.\n     * @example\n     *     transit.keyword(\"foo\");\n     */\n    transit.keyword = types.keyword;\n\n    /**\n     * Test if an object is a transit keyword.\n     * @method transit.isKeyword\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit keyword, false otherwise.\n     */\n    transit.isKeyword = types.isKeyword;\n\n    /**\n     * Create a transit symbol.\n     * @method transit.symbol\n     * @param {string} name\n     *     A string.\n     * @return {com.cognitect.transit.types.Symbol} A transit symbol instance.\n     * @example\n     *     transit.symbol(\"foo\");\n     */\n    transit.symbol = types.symbol;\n\n    /**\n     * Test if an object is a transit symbol\n     * @method transit.isSymbol\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit symbol, false otherwise.\n     */\n    transit.isSymbol = types.isSymbol;\n\n    /**\n     * Create transit binary blob.\n     * @method transit.binary\n     * @param {string} s\n     *     A base64 encoded string.\n     * @param {*=} decoder\n     *     A Transit compliant decoder\n     * @return {com.cognitect.transit.types.TaggedValue|Uint8Array} A transit binary blob instance.\n     */\n    transit.binary = types.binary;\n\n    /**\n     * Test if an object is a transit binary blob.\n     * @method transit.isBinary\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {Boolean} true if x is a binary value, false otheriwse.\n     */\n    transit.isBinary = types.isBinary;\n\n    /**\n     * Create a transit URI.\n     * @method transit.uri\n     * @param {string} s\n     *     A string representing a valid URI.\n     * @return {com.cognitect.transit.types.TaggedValue} A transit URI.\n     */\n    transit.uri = types.uri;\n\n    /**\n     * Test if an object is a transit URI.\n     * @method transit.isURI\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {Boolean} true if x is a transit symbol, false otherwise.\n     */\n    transit.isURI = types.isURI;\n\n    /**\n     * Create a transit hash map. Transit maps satisfy the current version\n     *     of the ECMAScript 6 Map specification.\n     * @method transit.map\n     * @param {Array=} xs\n     *     A JavaScript array of alternating key value pairs.\n     * @return {com.cognitect.transit.MapLike} A transit map.\n     * @example\n     *     transit.map([new Date(), \"foo\", [1,2], 3]);\n     */\n    transit.map = types.map;\n\n    /**\n     * Test if an object is a transit map.\n     * @method transit.isMap\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit map, false otherwise.\n     */\n    transit.isMap = types.isMap;\n\n    /**\n     * Create a transit set. Transit sets satisfy the current version of the\n     *     of the ECMAScript 6 Set specification.\n     * @method transit.set\n     * @param {Array=} xs\n     *     A JavaScript array of values.\n     * @return {com.cognitect.transit.SetLike} A transit set.\n     * @example\n     *     transit.set([\"foo\", [1,2], 3, {bar: \"baz\"}]);\n     */\n    transit.set = types.set;\n\n    /**\n     * Test if an object is a transit set.\n     * @method transit.isSet\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit set, false otherwise.\n     */\n    transit.isSet = types.isSet;\n\n    /**\n     * Create a transit list.\n     * @method transit.list\n     * @param {Array} xs\n     *     A JavaScript array.\n     * @return {com.cognitect.transit.types.TaggedValue} A transit list.\n     */\n    transit.list = types.list;\n\n    /**\n     * Test if an object is a transit list.\n     * @method transit.isList\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit list, false otherwise.\n     */\n    transit.isList = types.isList;\n\n    /**\n     * Create a transit quoted value.\n     * @method transit.quoted\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {com.cognitect.transit.types.TaggedValue} A transit quoted value.\n     */\n    transit.quoted = types.quoted;\n\n    /**\n     * Test if an object is a transit quoted value.\n     * @method transit.isQuoted\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit value, false otherwise.\n     */\n    transit.isQuoted = types.isQuoted;\n\n    /**\n     * Create a transit tagged value.\n     * @method transit.tagged\n     * @param {string} tag A tag.\n     * @param {*} value\n     *     A JavaScrpt array, object, or string.\n     * @return {com.cognitect.transit.types.TaggedValue} A transit tagged value.\n     * @example\n     *     transit.tagged(\"point\", new Point(1,2));\n     */\n    transit.tagged = types.taggedValue;\n\n    /**\n     * Test if an object is a transit tagged value.\n     * @method transit.isTaggedValue\n     * @param {*} x\n     *     Any JavaScript value.\n     * @return {boolean} true if x is a transit value, false otherwise.\n     */\n    transit.isTaggedValue =  types.isTaggedValue;\n\n    /**\n     * Create a transit link.\n     * @method transit.link\n     * @param {com.cognitect.transit.MapLike} m\n     *     A transit map which must contain at a minimum the following keys:\n     *     href, rel. It may optionally include name, render, and prompt. href\n     *     must be a transit.uri, all other values are strings, and render must\n     *     be either \"image\" or \"link\".\n     * @return {Object} A transit link.\n     */\n    transit.link = types.link;\n\n    /**\n     * Test if an object is a transit link.\n     * @method transit.isLink\n     * @param {*} x\n     *     Any JavaScript object.\n     * @return {boolean} true if x is a transit link, false otherwise.\n     */\n    transit.isLink = types.isLink;\n\n    /**\n     * Compute the hashCode for any JavaScript object that has been\n     *    extend to transit's equality and hashing protocol. JavaScript\n     *    primitives and transit value are already extended to this protocol.\n     *    Custom types may be extended to the protocol via transit.extenToEQ.\n     * @method transit.hash\n     * @param {*} x\n     *    Any JavaScript object that has been extended to transit's equality\n     *    and hashing protocol.\n     * @return {number} Returns JavaScript number - semantically a 32bit integer.\n     */\n    transit.hash = eq.hashCode;\n\n    /**\n     * Compute the hashCode for JavaScript map-like types - either a JavaScript\n     *    object or a JavaScript object that implements ES6 Map forEach.\n     * @method transit.hashMapLike\n     * @param {Object|com.cognitect.transit.MapLike} x\n     *    A plain JavaScript Object or Object that implements ES6 Map forEach.\n     * @return {number} Returns JavaScript number - semantically a 32bit integer.\n     */\n    transit.hashMapLike = eq.hashMapLike;\n\n    /**\n     * Compute the hashCode for JavaScript array-like types - either a JavaScript\n     *    array or a JavaScript object that implements Array forEach.\n     * @method transit.hashArrayLike\n     * @param {Object} x\n     *    A JavaScript Array or Object that implements Array forEach.\n     * @return {number} Returns JavaScript number - semantically a 32bit integer.\n     */\n    transit.hashArrayLike = eq.hashArrayLike;\n\n    /**\n     * Test whether two JavaScript objects represent equal values. The\n     *    objects to be tested should be extended to transit's equality\n     *    and hasing protocol. JavaScript natives and transit value have\n     *    already been extended to the protocol, including objects and\n     *    arrays.  Also transit maps and JavaScript objects may be\n     *    compared for equality. Custom types may be extended via\n     *    transit.extendToEQ.\n     * @param {*} x\n     *     A JavaScript object\n     * @param {*} y\n     *     A JavaScript object\n     * @return {Boolean} true if the x and y are equal, false otherwise.\n     */\n    transit.equals = eq.equals;\n\n    /**\n     * Extend an object to hashing and equality required by\n     *     transit maps and sets. Only required for custom\n     *     types, JavaScript primitive types and transit\n     *     types are handled.\n     * @method transit.extendToEQ\n     * @param {*} x\n     *     A JavaScript object, will be mutated.\n     * @param {{hashCode: function(), equals: function(*,*):boolean}}\n     *     A JavaScript object supplying `hashCode` and `equals`\n     *     implementations\n     * @return {*} x\n     * @example\n     *     transit.extendToEq(Point.protototype, {\n     *         hashCode: function() {\n     *             var bits = (this.x | 0) ^ ((this.y | 0) * 31);\n     *             return bits ^ (bits >>> 32);\n     *         },\n     *         equals: function(other) {\n     *             return this.x == other.x && this.y == other.y;\n     *         }\n     *     });\n     */\n    transit.extendToEQ = eq.extendToEQ;\n\n    /**\n     * Convert a transit map instance into a JavaScript Object.\n     * Throws if the map has keys which have no string representation.\n     * @method transit.mapToObject\n     * @param {com.cognitect.transit.MapLike} m\n     *     a transit map\n     * @return {Object} a JavaScript Object\n     */\n    transit.mapToObject = function(m) {\n        var ret = {};\n        m.forEach(function(v, k) {\n            if(typeof k !== \"string\") {\n                throw Error(\"Cannot convert map with non-string keys\");\n            } else {\n                ret[k] = v;\n            }\n        });\n        return ret;\n    };\n\n    /**\n     * Convert a POJO into a transit map.\n     * @method transit.objectToMap\n     * @param {Object} obj\n     *     a JavaScript Object\n     * @return {com.cognitect.transit.MapLike} a transit map\n     */\n    transit.objectToMap = function(obj) {\n        var ret = transit.map();\n        for(var p in obj) {\n            if(obj.hasOwnProperty(p)) {\n                ret.set(p, obj[p]);\n            }\n        }\n        return ret;\n    };\n\n    /**\n     * Construct a Transit JSON decoder.\n     * @method transit.decoder\n     * @param {Object} opts\n     *     options to the decoder. Can include map of\n     *     handlers.\n     * @return {com.cognitect.transit.impl.decoder.Decoder} a Transit JSON decoder\n     * @example\n     *     var decoder = transit.decoder();\n     *     var x = decoder.decode(json, transit.readCache());\n     */\n    transit.decoder = decoder.decoder;\n\n    /**\n     * Construct a Transit read cache\n     * @method transit.readCache\n     * @return {com.cognitect.transit.caching.ReadCache} a Transit read cache\n     */\n    transit.readCache = caching.readCache;\n\n    /**\n     * Construct a Transit write cache\n     * @method transit.writeCache\n     * @return {com.cognitect.transit.caching.WriteCache} a Transit write cache\n     */\n    transit.writeCache = caching.writeCache;\n\n    transit.UUIDfromString = types.UUIDfromString;\n    transit.randomUUID = util.randomUUID;\n    transit.stringableKeys = writer.stringableKeys;\n\n    if(TRANSIT_BROWSER_TARGET) {\n        goog.exportSymbol(\"transit.reader\",         transit.reader);\n        goog.exportSymbol(\"transit.writer\",         transit.writer);\n        goog.exportSymbol(\"transit.makeBuilder\",    transit.makeBuilder);\n        goog.exportSymbol(\"transit.makeWriteHandler\", transit.makeWriteHandler);\n        goog.exportSymbol(\"transit.date\",           types.date);\n        goog.exportSymbol(\"transit.integer\",        types.intValue);\n        goog.exportSymbol(\"transit.isInteger\",      types.isInteger);\n        goog.exportSymbol(\"transit.uuid\",           types.uuid);\n        goog.exportSymbol(\"transit.isUUID\",         types.isUUID);\n        goog.exportSymbol(\"transit.bigInt\",         types.bigInteger);\n        goog.exportSymbol(\"transit.isBigInt\",       types.isBigInteger);\n        goog.exportSymbol(\"transit.bigDec\",         types.bigDecimalValue);\n        goog.exportSymbol(\"transit.isBigDec\",       types.isBigDecimal);\n        goog.exportSymbol(\"transit.keyword\",        types.keyword);\n        goog.exportSymbol(\"transit.isKeyword\",      types.isKeyword);\n        goog.exportSymbol(\"transit.symbol\",         types.symbol);\n        goog.exportSymbol(\"transit.isSymbol\",       types.isSymbol);\n        goog.exportSymbol(\"transit.binary\",         types.binary);\n        goog.exportSymbol(\"transit.isBinary\",       types.isBinary);\n        goog.exportSymbol(\"transit.uri\",            types.uri);\n        goog.exportSymbol(\"transit.isURI\",          types.isURI);\n        goog.exportSymbol(\"transit.map\",            types.map);\n        goog.exportSymbol(\"transit.isMap\",          types.isMap);\n        goog.exportSymbol(\"transit.set\",            types.set);\n        goog.exportSymbol(\"transit.isSet\",          types.isSet);\n        goog.exportSymbol(\"transit.list\",           types.list);\n        goog.exportSymbol(\"transit.isList\",         types.isList);\n        goog.exportSymbol(\"transit.quoted\",         types.quoted);\n        goog.exportSymbol(\"transit.isQuoted\",       types.isQuoted);\n        goog.exportSymbol(\"transit.tagged\",         types.taggedValue);\n        goog.exportSymbol(\"transit.isTaggedValue\",  types.isTaggedValue);\n        goog.exportSymbol(\"transit.link\",           types.link);\n        goog.exportSymbol(\"transit.isLink\",         types.isLink);\n        goog.exportSymbol(\"transit.hash\",           eq.hashCode);\n        goog.exportSymbol(\"transit.hashMapLike\",    eq.hashMapLike);\n        goog.exportSymbol(\"transit.hashArrayLike\",  eq.hashArrayLike);\n        goog.exportSymbol(\"transit.equals\",         eq.equals);\n        goog.exportSymbol(\"transit.extendToEQ\",     eq.extendToEQ);\n        goog.exportSymbol(\"transit.mapToObject\",    transit.mapToObject);\n        goog.exportSymbol(\"transit.objectToMap\",    transit.objectToMap);\n        goog.exportSymbol(\"transit.decoder\",        decoder.decoder);\n        goog.exportSymbol(\"transit.UUIDfromString\", types.UUIDfromString);\n        goog.exportSymbol(\"transit.randomUUID\",     util.randomUUID);\n        goog.exportSymbol(\"transit.stringableKeys\", writer.stringableKeys);\n        goog.exportSymbol(\"transit.readCache\",      caching.readCache);\n        goog.exportSymbol(\"transit.writeCache\",     caching.writeCache);\n    }\n\n    if(TRANSIT_NODE_TARGET) {\n        module.exports = {\n            reader:         transit.reader,\n            writer:         transit.writer,\n            makeBuilder:    transit.makeBuilder,\n            makeWriteHandler: transit.makeWriteHandler,\n            date:           types.date,\n            integer:        types.intValue,\n            isInteger:      types.isInteger,\n            uuid:           types.uuid,\n            isUUID:         types.isUUID,\n            bigInt:         types.bigInteger,\n            isBigInt:       types.isBigInteger,\n            bigDec:         types.bigDecimalValue,\n            isBigDec:       types.isBigDecimal,\n            keyword:        types.keyword,\n            isKeyword:      types.isKeyword,\n            symbol:         types.symbol,\n            isSymbol:       types.isSymbol,\n            binary:         types.binary,\n            isBinary:       types.isBinary,\n            uri:            types.uri,\n            isURI:          types.isURI,\n            map:            types.map,\n            isMap:          types.isMap,\n            set:            types.set,\n            isSet:          types.isSet,\n            list:           types.list,\n            isList:         types.isList,\n            quoted:         types.quoted,\n            isQuoted:       types.isQuoted,\n            tagged:         types.taggedValue,\n            isTaggedValue:  types.isTaggedValue,\n            link:           types.link,\n            isLink:         types.isLink,\n            hash:           eq.hashCode,\n            hashArrayLike:  eq.hashArrayLike,\n            hashMapLike:    eq.hashMapLike,\n            equals:         eq.equals,\n            extendToEQ:     eq.extendToEQ,\n            mapToObject:    transit.mapToObject,\n            objectToMap:    transit.objectToMap,\n            decoder:        decoder.decoder,\n            UUIDfromString: types.UUIDfromString,\n            randomUUID:     util.randomUUID,\n            stringableKeys: writer.stringableKeys,\n            readCache:      caching.readCache,\n            writeCache:     caching.writeCache\n        };\n    }\n});\n","~:compiled-at",1668873222609,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]