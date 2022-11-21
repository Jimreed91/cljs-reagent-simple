["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/internal.js"],"~:js","goog.provide(\"goog.string.internal\");\ngoog.string.internal.startsWith = function(str, prefix) {\n  return str.lastIndexOf(prefix, 0) == 0;\n};\ngoog.string.internal.endsWith = function(str, suffix) {\n  const l = str.length - suffix.length;\n  return l >= 0 && str.indexOf(suffix, l) == l;\n};\ngoog.string.internal.caseInsensitiveStartsWith = function(str, prefix) {\n  return goog.string.internal.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0;\n};\ngoog.string.internal.caseInsensitiveEndsWith = function(str, suffix) {\n  return goog.string.internal.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0;\n};\ngoog.string.internal.caseInsensitiveEquals = function(str1, str2) {\n  return str1.toLowerCase() == str2.toLowerCase();\n};\ngoog.string.internal.isEmptyOrWhitespace = function(str) {\n  return /^[\\s\\xa0]*$/.test(str);\n};\ngoog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(str) {\n  return str.trim();\n} : function(str) {\n  return /^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(str)[1];\n};\ngoog.string.internal.caseInsensitiveCompare = function(str1, str2) {\n  const test1 = String(str1).toLowerCase();\n  const test2 = String(str2).toLowerCase();\n  if (test1 < test2) {\n    return -1;\n  } else if (test1 == test2) {\n    return 0;\n  } else {\n    return 1;\n  }\n};\ngoog.string.internal.newLineToBr = function(str, opt_xml) {\n  return str.replace(/(\\r\\n|\\r|\\n)/g, opt_xml ? \"\\x3cbr /\\x3e\" : \"\\x3cbr\\x3e\");\n};\ngoog.string.internal.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {\n  if (opt_isLikelyToContainHtmlChars) {\n    str = str.replace(goog.string.internal.AMP_RE_, \"\\x26amp;\").replace(goog.string.internal.LT_RE_, \"\\x26lt;\").replace(goog.string.internal.GT_RE_, \"\\x26gt;\").replace(goog.string.internal.QUOT_RE_, \"\\x26quot;\").replace(goog.string.internal.SINGLE_QUOTE_RE_, \"\\x26#39;\").replace(goog.string.internal.NULL_RE_, \"\\x26#0;\");\n    return str;\n  } else {\n    if (!goog.string.internal.ALL_RE_.test(str)) {\n      return str;\n    }\n    if (str.indexOf(\"\\x26\") != -1) {\n      str = str.replace(goog.string.internal.AMP_RE_, \"\\x26amp;\");\n    }\n    if (str.indexOf(\"\\x3c\") != -1) {\n      str = str.replace(goog.string.internal.LT_RE_, \"\\x26lt;\");\n    }\n    if (str.indexOf(\"\\x3e\") != -1) {\n      str = str.replace(goog.string.internal.GT_RE_, \"\\x26gt;\");\n    }\n    if (str.indexOf('\"') != -1) {\n      str = str.replace(goog.string.internal.QUOT_RE_, \"\\x26quot;\");\n    }\n    if (str.indexOf(\"'\") != -1) {\n      str = str.replace(goog.string.internal.SINGLE_QUOTE_RE_, \"\\x26#39;\");\n    }\n    if (str.indexOf(\"\\x00\") != -1) {\n      str = str.replace(goog.string.internal.NULL_RE_, \"\\x26#0;\");\n    }\n    return str;\n  }\n};\ngoog.string.internal.AMP_RE_ = /&/g;\ngoog.string.internal.LT_RE_ = /</g;\ngoog.string.internal.GT_RE_ = />/g;\ngoog.string.internal.QUOT_RE_ = /\"/g;\ngoog.string.internal.SINGLE_QUOTE_RE_ = /'/g;\ngoog.string.internal.NULL_RE_ = /\\x00/g;\ngoog.string.internal.ALL_RE_ = /[\\x00&<>\"']/;\ngoog.string.internal.whitespaceEscape = function(str, opt_xml) {\n  return goog.string.internal.newLineToBr(str.replace(/  /g, \" \\x26#160;\"), opt_xml);\n};\ngoog.string.internal.contains = function(str, subString) {\n  return str.indexOf(subString) != -1;\n};\ngoog.string.internal.caseInsensitiveContains = function(str, subString) {\n  return goog.string.internal.contains(str.toLowerCase(), subString.toLowerCase());\n};\ngoog.string.internal.compareVersions = function(version1, version2) {\n  let order = 0;\n  const v1Subs = goog.string.internal.trim(String(version1)).split(\".\");\n  const v2Subs = goog.string.internal.trim(String(version2)).split(\".\");\n  const subCount = Math.max(v1Subs.length, v2Subs.length);\n  for (let subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {\n    let v1Sub = v1Subs[subIdx] || \"\";\n    let v2Sub = v2Subs[subIdx] || \"\";\n    do {\n      const v1Comp = /(\\d*)(\\D*)(.*)/.exec(v1Sub) || [\"\", \"\", \"\", \"\"];\n      const v2Comp = /(\\d*)(\\D*)(.*)/.exec(v2Sub) || [\"\", \"\", \"\", \"\"];\n      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {\n        break;\n      }\n      const v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);\n      const v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);\n      order = goog.string.internal.compareElements_(v1CompNum, v2CompNum) || goog.string.internal.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.internal.compareElements_(v1Comp[2], v2Comp[2]);\n      v1Sub = v1Comp[3];\n      v2Sub = v2Comp[3];\n    } while (order == 0);\n  }\n  return order;\n};\ngoog.string.internal.compareElements_ = function(left, right) {\n  if (left < right) {\n    return -1;\n  } else if (left > right) {\n    return 1;\n  }\n  return 0;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview String functions called from Closure packages that couldn't\n * depend on each other. Outside Closure, use goog.string function which\n * delegate to these.\n */\n\n\ngoog.provide('goog.string.internal');\n\n\n/**\n * Fast prefix-checker.\n * @param {string} str The string to check.\n * @param {string} prefix A string to look for at the start of `str`.\n * @return {boolean} True if `str` begins with `prefix`.\n * @see goog.string.startsWith\n */\ngoog.string.internal.startsWith = function(str, prefix) {\n  'use strict';\n  return str.lastIndexOf(prefix, 0) == 0;\n};\n\n\n/**\n * Fast suffix-checker.\n * @param {string} str The string to check.\n * @param {string} suffix A string to look for at the end of `str`.\n * @return {boolean} True if `str` ends with `suffix`.\n * @see goog.string.endsWith\n */\ngoog.string.internal.endsWith = function(str, suffix) {\n  'use strict';\n  const l = str.length - suffix.length;\n  return l >= 0 && str.indexOf(suffix, l) == l;\n};\n\n\n/**\n * Case-insensitive prefix-checker.\n * @param {string} str The string to check.\n * @param {string} prefix  A string to look for at the end of `str`.\n * @return {boolean} True if `str` begins with `prefix` (ignoring\n *     case).\n * @see goog.string.caseInsensitiveStartsWith\n */\ngoog.string.internal.caseInsensitiveStartsWith = function(str, prefix) {\n  'use strict';\n  return goog.string.internal.caseInsensitiveCompare(\n             prefix, str.substr(0, prefix.length)) == 0;\n};\n\n\n/**\n * Case-insensitive suffix-checker.\n * @param {string} str The string to check.\n * @param {string} suffix A string to look for at the end of `str`.\n * @return {boolean} True if `str` ends with `suffix` (ignoring\n *     case).\n * @see goog.string.caseInsensitiveEndsWith\n */\ngoog.string.internal.caseInsensitiveEndsWith = function(str, suffix) {\n  'use strict';\n  return (\n      goog.string.internal.caseInsensitiveCompare(\n          suffix, str.substr(str.length - suffix.length, suffix.length)) == 0);\n};\n\n\n/**\n * Case-insensitive equality checker.\n * @param {string} str1 First string to check.\n * @param {string} str2 Second string to check.\n * @return {boolean} True if `str1` and `str2` are the same string,\n *     ignoring case.\n * @see goog.string.caseInsensitiveEquals\n */\ngoog.string.internal.caseInsensitiveEquals = function(str1, str2) {\n  'use strict';\n  return str1.toLowerCase() == str2.toLowerCase();\n};\n\n\n/**\n * Checks if a string is empty or contains only whitespaces.\n * @param {string} str The string to check.\n * @return {boolean} Whether `str` is empty or whitespace only.\n * @see goog.string.isEmptyOrWhitespace\n */\ngoog.string.internal.isEmptyOrWhitespace = function(str) {\n  'use strict';\n  // testing length == 0 first is actually slower in all browsers (about the\n  // same in Opera).\n  // Since IE doesn't include non-breaking-space (0xa0) in their \\s character\n  // class (as required by section 7.2 of the ECMAScript spec), we explicitly\n  // include it in the regexp to enforce consistent cross-browser behavior.\n  return /^[\\s\\xa0]*$/.test(str);\n};\n\n\n/**\n * Trims white spaces to the left and right of a string.\n * @param {string} str The string to trim.\n * @return {string} A trimmed copy of `str`.\n */\ngoog.string.internal.trim =\n    (goog.TRUSTED_SITE && String.prototype.trim) ? function(str) {\n      'use strict';\n      return str.trim();\n    } : function(str) {\n      'use strict';\n      // Since IE doesn't include non-breaking-space (0xa0) in their \\s\n      // character class (as required by section 7.2 of the ECMAScript spec),\n      // we explicitly include it in the regexp to enforce consistent\n      // cross-browser behavior.\n      // NOTE: We don't use String#replace because it might have side effects\n      // causing this function to not compile to 0 bytes.\n      return /^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(str)[1];\n    };\n\n\n/**\n * A string comparator that ignores case.\n * -1 = str1 less than str2\n *  0 = str1 equals str2\n *  1 = str1 greater than str2\n *\n * @param {string} str1 The string to compare.\n * @param {string} str2 The string to compare `str1` to.\n * @return {number} The comparator result, as described above.\n * @see goog.string.caseInsensitiveCompare\n */\ngoog.string.internal.caseInsensitiveCompare = function(str1, str2) {\n  'use strict';\n  const test1 = String(str1).toLowerCase();\n  const test2 = String(str2).toLowerCase();\n\n  if (test1 < test2) {\n    return -1;\n  } else if (test1 == test2) {\n    return 0;\n  } else {\n    return 1;\n  }\n};\n\n\n/**\n * Converts \\n to <br>s or <br />s.\n * @param {string} str The string in which to convert newlines.\n * @param {boolean=} opt_xml Whether to use XML compatible tags.\n * @return {string} A copy of `str` with converted newlines.\n * @see goog.string.newLineToBr\n */\ngoog.string.internal.newLineToBr = function(str, opt_xml) {\n  'use strict';\n  return str.replace(/(\\r\\n|\\r|\\n)/g, opt_xml ? '<br />' : '<br>');\n};\n\n\n/**\n * Escapes double quote '\"' and single quote '\\'' characters in addition to\n * '&', '<', and '>' so that a string can be included in an HTML tag attribute\n * value within double or single quotes.\n * @param {string} str string to be escaped.\n * @param {boolean=} opt_isLikelyToContainHtmlChars\n * @return {string} An escaped copy of `str`.\n * @see goog.string.htmlEscape\n */\ngoog.string.internal.htmlEscape = function(\n    str, opt_isLikelyToContainHtmlChars) {\n  'use strict';\n  if (opt_isLikelyToContainHtmlChars) {\n    str = str.replace(goog.string.internal.AMP_RE_, '&amp;')\n              .replace(goog.string.internal.LT_RE_, '&lt;')\n              .replace(goog.string.internal.GT_RE_, '&gt;')\n              .replace(goog.string.internal.QUOT_RE_, '&quot;')\n              .replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;')\n              .replace(goog.string.internal.NULL_RE_, '&#0;');\n    return str;\n\n  } else {\n    // quick test helps in the case when there are no chars to replace, in\n    // worst case this makes barely a difference to the time taken\n    if (!goog.string.internal.ALL_RE_.test(str)) return str;\n\n    // str.indexOf is faster than regex.test in this case\n    if (str.indexOf('&') != -1) {\n      str = str.replace(goog.string.internal.AMP_RE_, '&amp;');\n    }\n    if (str.indexOf('<') != -1) {\n      str = str.replace(goog.string.internal.LT_RE_, '&lt;');\n    }\n    if (str.indexOf('>') != -1) {\n      str = str.replace(goog.string.internal.GT_RE_, '&gt;');\n    }\n    if (str.indexOf('\"') != -1) {\n      str = str.replace(goog.string.internal.QUOT_RE_, '&quot;');\n    }\n    if (str.indexOf('\\'') != -1) {\n      str = str.replace(goog.string.internal.SINGLE_QUOTE_RE_, '&#39;');\n    }\n    if (str.indexOf('\\x00') != -1) {\n      str = str.replace(goog.string.internal.NULL_RE_, '&#0;');\n    }\n    return str;\n  }\n};\n\n\n/**\n * Regular expression that matches an ampersand, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.AMP_RE_ = /&/g;\n\n\n/**\n * Regular expression that matches a less than sign, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.LT_RE_ = /</g;\n\n\n/**\n * Regular expression that matches a greater than sign, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.GT_RE_ = />/g;\n\n\n/**\n * Regular expression that matches a double quote, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.QUOT_RE_ = /\"/g;\n\n\n/**\n * Regular expression that matches a single quote, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.SINGLE_QUOTE_RE_ = /'/g;\n\n\n/**\n * Regular expression that matches null character, for use in escaping.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.NULL_RE_ = /\\x00/g;\n\n\n/**\n * Regular expression that matches any character that needs to be escaped.\n * @const {!RegExp}\n * @private\n */\ngoog.string.internal.ALL_RE_ = /[\\x00&<>\"']/;\n\n\n/**\n * Do escaping of whitespace to preserve spatial formatting. We use character\n * entity #160 to make it safer for xml.\n * @param {string} str The string in which to escape whitespace.\n * @param {boolean=} opt_xml Whether to use XML compatible tags.\n * @return {string} An escaped copy of `str`.\n * @see goog.string.whitespaceEscape\n */\ngoog.string.internal.whitespaceEscape = function(str, opt_xml) {\n  'use strict';\n  // This doesn't use goog.string.preserveSpaces for backwards compatibility.\n  return goog.string.internal.newLineToBr(\n      str.replace(/  /g, ' &#160;'), opt_xml);\n};\n\n\n/**\n * Determines whether a string contains a substring.\n * @param {string} str The string to search.\n * @param {string} subString The substring to search for.\n * @return {boolean} Whether `str` contains `subString`.\n * @see goog.string.contains\n */\ngoog.string.internal.contains = function(str, subString) {\n  'use strict';\n  return str.indexOf(subString) != -1;\n};\n\n\n/**\n * Determines whether a string contains a substring, ignoring case.\n * @param {string} str The string to search.\n * @param {string} subString The substring to search for.\n * @return {boolean} Whether `str` contains `subString`.\n * @see goog.string.caseInsensitiveContains\n */\ngoog.string.internal.caseInsensitiveContains = function(str, subString) {\n  'use strict';\n  return goog.string.internal.contains(\n      str.toLowerCase(), subString.toLowerCase());\n};\n\n\n/**\n * Compares two version numbers.\n *\n * @param {string|number} version1 Version of first item.\n * @param {string|number} version2 Version of second item.\n *\n * @return {number}  1 if `version1` is higher.\n *                   0 if arguments are equal.\n *                  -1 if `version2` is higher.\n * @see goog.string.compareVersions\n */\ngoog.string.internal.compareVersions = function(version1, version2) {\n  'use strict';\n  let order = 0;\n  // Trim leading and trailing whitespace and split the versions into\n  // subversions.\n  const v1Subs = goog.string.internal.trim(String(version1)).split('.');\n  const v2Subs = goog.string.internal.trim(String(version2)).split('.');\n  const subCount = Math.max(v1Subs.length, v2Subs.length);\n\n  // Iterate over the subversions, as long as they appear to be equivalent.\n  for (let subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {\n    let v1Sub = v1Subs[subIdx] || '';\n    let v2Sub = v2Subs[subIdx] || '';\n\n    do {\n      // Split the subversions into pairs of numbers and qualifiers (like 'b').\n      // Two different RegExp objects are use to make it clear the code\n      // is side-effect free\n      const v1Comp = /(\\d*)(\\D*)(.*)/.exec(v1Sub) || ['', '', '', ''];\n      const v2Comp = /(\\d*)(\\D*)(.*)/.exec(v2Sub) || ['', '', '', ''];\n      // Break if there are no more matches.\n      if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {\n        break;\n      }\n\n      // Parse the numeric part of the subversion. A missing number is\n      // equivalent to 0.\n      const v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);\n      const v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);\n\n      // Compare the subversion components. The number has the highest\n      // precedence. Next, if the numbers are equal, a subversion without any\n      // qualifier is always higher than a subversion with any qualifier. Next,\n      // the qualifiers are compared as strings.\n      order = goog.string.internal.compareElements_(v1CompNum, v2CompNum) ||\n          goog.string.internal.compareElements_(\n              v1Comp[2].length == 0, v2Comp[2].length == 0) ||\n          goog.string.internal.compareElements_(v1Comp[2], v2Comp[2]);\n      // Stop as soon as an inequality is discovered.\n\n      v1Sub = v1Comp[3];\n      v2Sub = v2Comp[3];\n    } while (order == 0);\n  }\n\n  return order;\n};\n\n\n/**\n * Compares elements of a version number.\n *\n * @param {string|number|boolean} left An element from a version number.\n * @param {string|number|boolean} right An element from a version number.\n *\n * @return {number}  1 if `left` is higher.\n *                   0 if arguments are equal.\n *                  -1 if `right` is higher.\n * @private\n */\ngoog.string.internal.compareElements_ = function(left, right) {\n  'use strict';\n  if (left < right) {\n    return -1;\n  } else if (left > right) {\n    return 1;\n  }\n  return 0;\n};\n","~:compiled-at",1668862146370,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.internal.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]