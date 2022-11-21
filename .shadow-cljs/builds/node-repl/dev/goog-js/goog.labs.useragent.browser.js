["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/browser.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.labs.userAgent.browser\");\n  goog.module.declareLegacyNamespace();\n  const googArray = goog.require(\"goog.array\");\n  const googObject = goog.require(\"goog.object\");\n  const util = goog.require(\"goog.labs.userAgent.util\");\n  const {compareVersions} = goog.require(\"goog.string.internal\");\n  function useUserAgentBrand() {\n    const userAgentData = util.getUserAgentData();\n    return !!userAgentData && userAgentData.brands.length > 0;\n  }\n  function matchOpera() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Opera\");\n  }\n  function matchIE() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Trident\") || util.matchUserAgent(\"MSIE\");\n  }\n  function matchEdgeHtml() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Edge\");\n  }\n  function matchEdgeChromium() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Edge\");\n    }\n    return util.matchUserAgent(\"Edg/\");\n  }\n  function matchOperaChromium() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Opera\");\n    }\n    return util.matchUserAgent(\"OPR\");\n  }\n  function matchFirefox() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Firefox\");\n    }\n    return util.matchUserAgent(\"Firefox\") || util.matchUserAgent(\"FxiOS\");\n  }\n  function matchSafari() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Safari\");\n    }\n    return util.matchUserAgent(\"Safari\") && !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() || matchEdgeChromium() || matchOperaChromium() || matchFirefox() || isSilk() || util.matchUserAgent(\"Android\"));\n  }\n  function matchCoast() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Coast\");\n  }\n  function matchIosWebview() {\n    return (util.matchUserAgent(\"iPad\") || util.matchUserAgent(\"iPhone\")) && !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() && util.matchUserAgent(\"AppleWebKit\");\n  }\n  function matchChrome() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Chromium\");\n    }\n    return (util.matchUserAgent(\"Chrome\") || util.matchUserAgent(\"CriOS\")) && !matchEdgeHtml();\n  }\n  function matchAndroidBrowser() {\n    return util.matchUserAgent(\"Android\") && !(isChrome() || isFirefox() || isOpera() || isSilk());\n  }\n  const isOpera = matchOpera;\n  const isIE = matchIE;\n  const isEdge = matchEdgeHtml;\n  const isEdgeChromium = matchEdgeChromium;\n  const isOperaChromium = matchOperaChromium;\n  const isFirefox = matchFirefox;\n  const isSafari = matchSafari;\n  const isCoast = matchCoast;\n  const isIosWebview = matchIosWebview;\n  const isChrome = matchChrome;\n  const isAndroidBrowser = matchAndroidBrowser;\n  function isSilk() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Silk\");\n    }\n    return util.matchUserAgent(\"Silk\");\n  }\n  function getVersion() {\n    const userAgentString = util.getUserAgent();\n    if (isIE()) {\n      return getIEVersion(userAgentString);\n    }\n    const versionTuples = util.extractVersionTuples(userAgentString);\n    const versionMap = {};\n    versionTuples.forEach(tuple => {\n      const key = tuple[0];\n      const value = tuple[1];\n      versionMap[key] = value;\n    });\n    const versionMapHasKey = goog.partial(googObject.containsKey, versionMap);\n    function lookUpValueWithKeys(keys) {\n      const key = googArray.find(keys, versionMapHasKey);\n      return versionMap[key] || \"\";\n    }\n    if (isOpera()) {\n      return lookUpValueWithKeys([\"Version\", \"Opera\"]);\n    }\n    if (isEdge()) {\n      return lookUpValueWithKeys([\"Edge\"]);\n    }\n    if (isEdgeChromium()) {\n      return lookUpValueWithKeys([\"Edg\"]);\n    }\n    if (isChrome()) {\n      return lookUpValueWithKeys([\"Chrome\", \"CriOS\", \"HeadlessChrome\"]);\n    }\n    const tuple = versionTuples[2];\n    return tuple && tuple[1] || \"\";\n  }\n  function isVersionOrHigher(version) {\n    return compareVersions(getVersion(), version) >= 0;\n  }\n  function getIEVersion(userAgent) {\n    const rv = /rv: *([\\d\\.]*)/.exec(userAgent);\n    if (rv && rv[1]) {\n      return rv[1];\n    }\n    let version = \"\";\n    const msie = /MSIE +([\\d\\.]+)/.exec(userAgent);\n    if (msie && msie[1]) {\n      const tridentVersion = /Trident\\/(\\d.\\d)/.exec(userAgent);\n      if (msie[1] == \"7.0\") {\n        if (tridentVersion && tridentVersion[1]) {\n          switch(tridentVersion[1]) {\n            case \"4.0\":\n              version = \"8.0\";\n              break;\n            case \"5.0\":\n              version = \"9.0\";\n              break;\n            case \"6.0\":\n              version = \"10.0\";\n              break;\n            case \"7.0\":\n              version = \"11.0\";\n              break;\n          }\n        } else {\n          version = \"7.0\";\n        }\n      } else {\n        version = msie[1];\n      }\n    }\n    return version;\n  }\n  exports = {getVersion, isAndroidBrowser, isChrome, isCoast, isEdge, isEdgeChromium, isFirefox, isIE, isIosWebview, isOpera, isOperaChromium, isSafari, isSilk, isVersionOrHigher,};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Closure user agent detection (Browser).\n * @see <a href=\"http://www.useragentstring.com/\">User agent strings</a>\n * For more information on rendering engine, platform, or device see the other\n * sub-namespaces in goog.labs.userAgent, goog.labs.userAgent.platform,\n * goog.labs.userAgent.device respectively.)\n */\n\ngoog.module('goog.labs.userAgent.browser');\ngoog.module.declareLegacyNamespace();\n\nconst googArray = goog.require('goog.array');\nconst googObject = goog.require('goog.object');\nconst util = goog.require('goog.labs.userAgent.util');\nconst {compareVersions} = goog.require('goog.string.internal');\n\n// TODO(nnaze): Refactor to remove excessive exclusion logic in matching\n// functions.\n\n/**\n * @return {boolean} Whether to use navigator.userAgentData to determine\n * browser's brand.\n */\nfunction useUserAgentBrand() {\n  const userAgentData = util.getUserAgentData();\n  return !!userAgentData && userAgentData.brands.length > 0;\n}\n\n/**\n * @return {boolean} Whether the user's browser is Opera. Note: Chromium based\n *     Opera (Opera 15+) is detected as Chrome to avoid unnecessary special\n *     casing.\n */\nfunction matchOpera() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for non Chromium based Opera.\n    return false;\n  }\n  return util.matchUserAgent('Opera');\n}\n\n/** @return {boolean} Whether the user's browser is IE. */\nfunction matchIE() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for IE.\n    return false;\n  }\n  return util.matchUserAgent('Trident') || util.matchUserAgent('MSIE');\n}\n\n/**\n * @return {boolean} Whether the user's browser is Edge. This refers to\n *     EdgeHTML based Edge.\n */\nfunction matchEdgeHtml() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for non chromium based Edge.\n    return false;\n  }\n  return util.matchUserAgent('Edge');\n}\n\n/** @return {boolean} Whether the user's browser is Chromium based Edge. */\nfunction matchEdgeChromium() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Edge');\n  }\n  return util.matchUserAgent('Edg/');\n}\n\n/** @return {boolean} Whether the user's browser is Chromium based Opera. */\nfunction matchOperaChromium() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Opera');\n  }\n  return util.matchUserAgent('OPR');\n}\n\n/** @return {boolean} Whether the user's browser is Firefox. */\nfunction matchFirefox() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Firefox');\n  }\n  return util.matchUserAgent('Firefox') || util.matchUserAgent('FxiOS');\n}\n\n/** @return {boolean} Whether the user's browser is Safari. */\nfunction matchSafari() {\n  if (useUserAgentBrand()) {\n    // This will always be false before Safari adopt the Client Hint support.\n    return util.matchUserAgentDataBrand('Safari');\n  }\n  return util.matchUserAgent('Safari') &&\n      !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() ||\n        matchEdgeChromium() || matchOperaChromium() || matchFirefox() ||\n        isSilk() || util.matchUserAgent('Android'));\n}\n\n/**\n * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based\n *     iOS browser).\n */\nfunction matchCoast() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for Coast.\n    return false;\n  }\n  return util.matchUserAgent('Coast');\n}\n\n/** @return {boolean} Whether the user's browser is iOS Webview. */\nfunction matchIosWebview() {\n  // iOS Webview does not show up as Chrome or Safari. Also check for Opera's\n  // WebKit-based iOS browser, Coast.\n  return (util.matchUserAgent('iPad') || util.matchUserAgent('iPhone')) &&\n      !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() &&\n      util.matchUserAgent('AppleWebKit');\n}\n\n/**\n * @return {boolean} Whether the user's browser is any Chromium browser. This\n *     returns true for Chrome, Opera 15+, and Edge Chromium.\n */\nfunction matchChrome() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Chromium');\n  }\n  return (util.matchUserAgent('Chrome') || util.matchUserAgent('CriOS')) &&\n      !matchEdgeHtml();\n}\n\n/** @return {boolean} Whether the user's browser is the Android browser. */\nfunction matchAndroidBrowser() {\n  // Android can appear in the user agent string for Chrome on Android.\n  // This is not the Android standalone browser if it does.\n  return util.matchUserAgent('Android') &&\n      !(isChrome() || isFirefox() || isOpera() || isSilk());\n}\n\n/** @return {boolean} Whether the user's browser is Opera. */\nconst isOpera = matchOpera;\n\n/** @return {boolean} Whether the user's browser is IE. */\nconst isIE = matchIE;\n\n/** @return {boolean} Whether the user's browser is EdgeHTML based Edge. */\nconst isEdge = matchEdgeHtml;\n\n/** @return {boolean} Whether the user's browser is Chromium based Edge. */\nconst isEdgeChromium = matchEdgeChromium;\n\n/** @return {boolean} Whether the user's browser is Chromium based Opera. */\nconst isOperaChromium = matchOperaChromium;\n\n/** @return {boolean} Whether the user's browser is Firefox. */\nconst isFirefox = matchFirefox;\n\n/** @return {boolean} Whether the user's browser is Safari. */\nconst isSafari = matchSafari;\n\n/**\n * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based\n *     iOS browser).\n */\nconst isCoast = matchCoast;\n\n/** @return {boolean} Whether the user's browser is iOS Webview. */\nconst isIosWebview = matchIosWebview;\n\n/**\n * @return {boolean} Whether the user's browser is any Chromium based browser (\n *     Chrome, Blink-based Opera (15+) and Edge Chromium).\n */\nconst isChrome = matchChrome;\n\n/** @return {boolean} Whether the user's browser is the Android browser. */\nconst isAndroidBrowser = matchAndroidBrowser;\n\n/**\n * For more information, see:\n * http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html\n * @return {boolean} Whether the user's browser is Silk.\n */\nfunction isSilk() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Silk');\n  }\n  return util.matchUserAgent('Silk');\n}\n\n/**\n * @return {string} The browser version or empty string if version cannot be\n *     determined. Note that for Internet Explorer, this returns the version of\n *     the browser, not the version of the rendering engine. (IE 8 in\n *     compatibility mode will return 8.0 rather than 7.0. To determine the\n *     rendering engine version, look at document.documentMode instead. See\n *     http://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx for more\n *     details.)\n */\nfunction getVersion() {\n  const userAgentString = util.getUserAgent();\n  // Special case IE since IE's version is inside the parenthesis and\n  // without the '/'.\n  if (isIE()) {\n    return getIEVersion(userAgentString);\n  }\n\n  const versionTuples = util.extractVersionTuples(userAgentString);\n\n  // Construct a map for easy lookup.\n  const versionMap = {};\n  versionTuples.forEach((tuple) => {\n    // Note that the tuple is of length three, but we only care about the\n    // first two.\n    const key = tuple[0];\n    const value = tuple[1];\n    versionMap[key] = value;\n  });\n\n  const versionMapHasKey = goog.partial(googObject.containsKey, versionMap);\n\n  // Gives the value with the first key it finds, otherwise empty string.\n  function lookUpValueWithKeys(keys) {\n    const key = googArray.find(keys, versionMapHasKey);\n    return versionMap[key] || '';\n  }\n\n  // Check Opera before Chrome since Opera 15+ has \"Chrome\" in the string.\n  // See\n  // http://my.opera.com/ODIN/blog/2013/07/15/opera-user-agent-strings-opera-15-and-beyond\n  if (isOpera()) {\n    // Opera 10 has Version/10.0 but Opera/9.8, so look for \"Version\" first.\n    // Opera uses 'OPR' for more recent UAs.\n    return lookUpValueWithKeys(['Version', 'Opera']);\n  }\n\n  // Check Edge before Chrome since it has Chrome in the string.\n  if (isEdge()) {\n    return lookUpValueWithKeys(['Edge']);\n  }\n\n  // Check Chromium Edge before Chrome since it has Chrome in the string.\n  if (isEdgeChromium()) {\n    return lookUpValueWithKeys(['Edg']);\n  }\n\n  if (isChrome()) {\n    return lookUpValueWithKeys(['Chrome', 'CriOS', 'HeadlessChrome']);\n  }\n\n  // Usually products browser versions are in the third tuple after \"Mozilla\"\n  // and the engine.\n  const tuple = versionTuples[2];\n  return tuple && tuple[1] || '';\n}\n\n/**\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the browser version is higher or the same as the\n *     given version.\n */\nfunction isVersionOrHigher(version) {\n  return compareVersions(getVersion(), version) >= 0;\n}\n\n/**\n * Determines IE version. More information:\n * http://msdn.microsoft.com/en-us/library/ie/bg182625(v=vs.85).aspx#uaString\n * http://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx\n * http://blogs.msdn.com/b/ie/archive/2010/03/23/introducing-ie9-s-user-agent-string.aspx\n * http://blogs.msdn.com/b/ie/archive/2009/01/09/the-internet-explorer-8-user-agent-string-updated-edition.aspx\n * @param {string} userAgent the User-Agent.\n * @return {string}\n */\nfunction getIEVersion(userAgent) {\n  // IE11 may identify itself as MSIE 9.0 or MSIE 10.0 due to an IE 11 upgrade\n  // bug. Example UA:\n  // Mozilla/5.0 (MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0; rv:11.0)\n  // like Gecko.\n  // See http://www.whatismybrowser.com/developers/unknown-user-agent-fragments.\n  const rv = /rv: *([\\d\\.]*)/.exec(userAgent);\n  if (rv && rv[1]) {\n    return rv[1];\n  }\n\n  let version = '';\n  const msie = /MSIE +([\\d\\.]+)/.exec(userAgent);\n  if (msie && msie[1]) {\n    // IE in compatibility mode usually identifies itself as MSIE 7.0; in this\n    // case, use the Trident version to determine the version of IE. For more\n    // details, see the links above.\n    const tridentVersion = /Trident\\/(\\d.\\d)/.exec(userAgent);\n    if (msie[1] == '7.0') {\n      if (tridentVersion && tridentVersion[1]) {\n        switch (tridentVersion[1]) {\n          case '4.0':\n            version = '8.0';\n            break;\n          case '5.0':\n            version = '9.0';\n            break;\n          case '6.0':\n            version = '10.0';\n            break;\n          case '7.0':\n            version = '11.0';\n            break;\n        }\n      } else {\n        version = '7.0';\n      }\n    } else {\n      version = msie[1];\n    }\n  }\n  return version;\n}\n\nexports = {\n  getVersion,\n  isAndroidBrowser,\n  isChrome,\n  isCoast,\n  isEdge,\n  isEdgeChromium,\n  isFirefox,\n  isIE,\n  isIosWebview,\n  isOpera,\n  isOperaChromium,\n  isSafari,\n  isSilk,\n  isVersionOrHigher,\n};\n","~:compiled-at",1668873222491,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.browser.js\",\n\"lineCount\":1,\n\"mappings\":\";\",\n\"sources\":[],\n\"names\":[]\n}\n"]