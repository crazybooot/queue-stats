/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);
var isBuffer = __webpack_require__(25);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(12);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(27);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(8);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(8);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var normalizeHeaderName = __webpack_require__(67);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(13);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(13);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(28);
var buildURL = __webpack_require__(30);
var parseHeaders = __webpack_require__(31);
var isURLSameOrigin = __webpack_require__(32);
var createError = __webpack_require__(9);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(33);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(34);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(29);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var settle = __webpack_require__(68);
var buildURL = __webpack_require__(70);
var parseHeaders = __webpack_require__(71);
var isURLSameOrigin = __webpack_require__(72);
var createError = __webpack_require__(14);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(73);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(74);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(69);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  highcharts: 'Chart',
  highstock: 'StockChart',
  highmaps: 'Map',
  'highcharts-renderer': 'Renderer'
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chart_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Chart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_List_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_List_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_List_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Job_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Job_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Job_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Stats_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Stats_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Stats_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Config_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Config_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Config_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetable_2_src_components_Vuetable_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetable_2_src_components_Vuetable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuetable_2_src_components_Vuetable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_VuetablePaginationBootstrap_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_VuetablePaginationBootstrap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_VuetablePaginationBootstrap_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_highcharts__ = __webpack_require__(88);
window.Vue = __webpack_require__(20);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(23);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */










Vue.component('chart', __WEBPACK_IMPORTED_MODULE_0__components_Chart_vue___default.a);
Vue.component('vuetable', __WEBPACK_IMPORTED_MODULE_5_vuetable_2_src_components_Vuetable_vue___default.a);
Vue.component('vuetable-pagination-bootstrap', __WEBPACK_IMPORTED_MODULE_6__components_VuetablePaginationBootstrap_vue___default.a);
Vue.component('job', __WEBPACK_IMPORTED_MODULE_2__components_Job_vue___default.a);
Vue.component('list', __WEBPACK_IMPORTED_MODULE_1__components_List_vue___default.a);
Vue.component('stats', __WEBPACK_IMPORTED_MODULE_3__components_Stats_vue___default.a);
Vue.component('config', __WEBPACK_IMPORTED_MODULE_4__components_Config_vue___default.a);

Vue.use(__WEBPACK_IMPORTED_MODULE_7_vue_highcharts__["a" /* default */]);

var app = new Vue({
  el: '#app'
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.0
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if (inBrowser && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // An asynchronous deferring mechanism.
  // In pre 2.4, we used to use microtasks (Promise/MutationObserver)
  // but microtasks actually has too high a priority and fires in between
  // supposedly sequential events (e.g. #4521, #6690) or even between
  // bubbling of the same event (#6566). Technically setImmediate should be
  // the ideal choice, but it's not available everywhere; and the only polyfill
  // that consistently queues the callback after all DOM events triggered in the
  // same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    timerFunc = function () {
      setImmediate(nextTickHandler);
    };
  } else if (typeof MessageChannel !== 'undefined' && (
    isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === '[object MessageChannelConstructor]'
  )) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = nextTickHandler;
    timerFunc = function () {
      port.postMessage(1);
    };
  } else
  /* istanbul ignore next */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    // use microtask in non-DOM environments, e.g. Weex
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(nextTickHandler);
    };
  } else {
    // fallback to setTimeout
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.functionalOptions = undefined;
  this.functionalScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.children = cloneVNodes(vnode.children);
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if ("development" !== 'production' && props) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if ("development" !== 'production' && inject) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c) && c.length > 0) {
      c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
      // merge adjacent text nodes
      if (isTextNode(c[0]) && isTextNode(last)) {
        res[lastIndex] = createTextVNode(last.text + (c[0]).text);
        c.shift();
      }
      res.push.apply(res, c);
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  // static trees can be rendered once and cached on the contructor options
  // so every instance shares the same cached trees
  var renderFns = this.$options.staticRenderFns;
  var cached = renderFns.cached || (renderFns.cached = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.functionalScopeId = options._scopeId;
        vnode.functionalContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.functionalContext = contextVm;
    vnode.functionalOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        if (slot._rendered) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && cached$$1 !== current) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }

      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.0';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(
            config.ignoredElements.length &&
            config.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(tag)
                : ignore === tag
            })
          ) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.functionalScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.functionalContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (true) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (!el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "type==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "type==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });
      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(21).setImmediate))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(22);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(3)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(26);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(11);
axios.CancelToken = __webpack_require__(40);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(41);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(35);
var dispatchRequest = __webpack_require__(36);
var isAbsoluteURL = __webpack_require__(38);
var combineURLs = __webpack_require__(39);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(37);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(4);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(11);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(43)
/* template */
var __vue_template__ = __webpack_require__(44)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/vue/components/Chart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-181263bb", Component.options)
  } else {
    hotAPI.reload("data-v-181263bb", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            options: {
                title: {
                    text: 'Jobs durations statistics'
                },

                subtitle: {
                    text: 'Jobs durations'
                },

                yAxis: {
                    title: {
                        text: 'Duration in miliseconds'
                    }
                },
                xAxis: {
                    categories: []
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
                series: [{
                    name: 'Handling duration',
                    data: []
                }, {
                    name: 'Waiting duration',
                    data: []
                }],

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }

            }
        };
    },
    created: function created() {
        var _this = this;

        axios.get('jobs-stats/chart').then(function (response) {
            _this.options.series[0].data = response.data.handling_durations;
            _this.options.series[1].data = response.data.waiting_durations;
            _this.options.xAxis.categories = response.data.classes;
        });
    }
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("highcharts", { attrs: { options: _vm.options } })], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-181263bb", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(46)
/* template */
var __vue_template__ = __webpack_require__(47)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/vue/components/List.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-038e4f51", Component.options)
  } else {
    hotAPI.reload("data-v-038e4f51", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            settings: {
                fields: [{
                    name: 'class',
                    title: 'class',
                    sortField: 'jobs_stats_jobs.class',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'connection',
                    title: 'connection',
                    sortField: 'jobs_stats_jobs.connection',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'queue',
                    title: 'queue',
                    sortField: 'queue',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'status',
                    title: 'status',
                    sortField: 'jobs_stats_jobs.status',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'delay',
                    title: 'delay',
                    sortField: 'jobs_stats_jobs.delay',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'tries',
                    title: 'tries',
                    sortField: 'tjobs_stats_jobs.ries',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'timeout',
                    title: 'timeout',
                    sortField: 'jobs_stats_jobs.timeout',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'handling_duration',
                    title: 'handling duration',
                    sortField: 'handling_duration',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'waiting_duration',
                    title: 'waiting duration',
                    sortField: 'waiting_duration',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'attempts_count',
                    title: 'attempts',
                    sortField: 'attempts_count',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'result',
                    title: 'result',
                    sortField: 'jobs_stats_jobs.result',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'created_at',
                    title: 'created at',
                    sortField: 'jobs_stats_jobs.created_at',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }],
                apiUrl: '/jobs-stats/list',
                css: {
                    tableClass: 'table table-responsive table-hover table-bordered',
                    loadingClass: 'loading'
                }
            }
        };
    },

    methods: {
        onPaginationData: function onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },
        onChangePage: function onChangePage(page) {
            this.$refs.vuetable.changePage(page);
        },
        onCellClicked: function onCellClicked(data, field, event) {
            this.$refs.vuetable.toggleDetailRow(data.id);
        }
    }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vuetable", {
        ref: "vuetable",
        attrs: {
          fields: _vm.settings.fields,
          "api-url": _vm.settings.apiUrl,
          css: _vm.settings.css,
          "pagination-path": "",
          "detail-row-component": "job"
        },
        on: {
          "vuetable:cell-clicked": _vm.onCellClicked,
          "vuetable:pagination-data": _vm.onPaginationData
        }
      }),
      _vm._v(" "),
      _c("vuetable-pagination-bootstrap", {
        ref: "pagination",
        on: { "vuetable-pagination:change-page": _vm.onChangePage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-038e4f51", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(49)
/* template */
var __vue_template__ = __webpack_require__(50)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/vue/components/Job.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02986d5a", Component.options)
  } else {
    hotAPI.reload("data-v-02986d5a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        rowData: {
            type: Object,
            required: true
        },
        rowIndex: {
            type: Number
        }
    }
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "table",
      { staticClass: "table table-responsive table-hover table-bordered" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.rowData.attempts, function(attempt) {
            return _c("tr", [
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.attempt_number) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.status) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.handling_duration) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.waiting_duration) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.exception_message) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.exception_call_stack) }
              })
            ])
          })
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("Attempt number")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Handling duration")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Waiting duration")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Exception message")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Call stack")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-02986d5a", module.exports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(52)
/* template */
var __vue_template__ = __webpack_require__(53)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/vue/components/Stats.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e4307fc", Component.options)
  } else {
    hotAPI.reload("data-v-3e4307fc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            success: 0,
            failed: 0,
            unhandled: 0
        };
    },

    computed: {
        successPercent: function successPercent() {
            return this.total / 100 * this.success;
        },
        failedPercent: function failedPercent() {
            return this.total / 100 * this.failed;
        },
        unhandledPercent: function unhandledPercent() {
            return this.total / 100 * this.unhandled;
        },
        total: function total() {
            return this.success + this.failed + this.unhandled;
        }
    },
    created: function created() {
        var _this = this;

        axios.get('jobs-stats/stats').then(function (response) {
            _this.success = parseInt(response.data.success);
            _this.failed = parseInt(response.data.failed);
            _this.unhandled = parseInt(response.data.unhandled);
        });
    }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card mb-3 text-center" }, [
    _c("h3", { staticClass: "card-header" }, [_vm._v("Jobs Stats")]),
    _vm._v(" "),
    _c("div", { staticClass: "card-block" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "card mb-3 text-center" }, [
            _c("h3", { staticClass: "card-header" }, [_vm._v("Success Jobs")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-block" }, [
              _c("p", {
                staticClass: "card-text",
                domProps: { textContent: _vm._s(_vm.success) }
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.successPercent) + "%")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "card mb-3 text-center" }, [
            _c("h3", { staticClass: "card-header" }, [_vm._v("Failed Jobs")]),
            _vm._v(" "),
            _c("div", { staticClass: "card-block" }, [
              _c("p", {
                staticClass: "card-text",
                domProps: { textContent: _vm._s(_vm.failed) }
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.failedPercent) + "%")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "card mb-3 text-center" }, [
            _c("h3", { staticClass: "card-header" }, [
              _vm._v("Unhandled Jobs")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-block" }, [
              _c("p", {
                staticClass: "card-text",
                domProps: { textContent: _vm._s(_vm.unhandled) }
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.unhandledPercent) + "%")])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e4307fc", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(55)
/* template */
var __vue_template__ = __webpack_require__(56)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/vue/components/Config.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-980a5596", Component.options)
  } else {
    hotAPI.reload("data-v-980a5596", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            settings: {
                fields: [{
                    name: 'name',
                    title: 'name',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'driver',
                    title: 'driver',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'queue',
                    title: 'queue',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'retry_after',
                    title: 'retry_after',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }],
                apiUrl: '/jobs-stats/config',
                css: {
                    tableClass: 'table table-responsive table-hover table-bordered',
                    loadingClass: 'loading'
                }
            }
        };
    }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card mb-3 text-center" }, [
    _c("h3", { staticClass: "card-header" }, [_vm._v("Jobs Stats")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-block" },
      [
        _c("vuetable", {
          attrs: {
            fields: _vm.settings.fields,
            "api-url": _vm.settings.apiUrl,
            css: _vm.settings.css,
            "pagination-path": "",
            "data-path": ""
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-980a5596", module.exports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(63)
/* template */
var __vue_template__ = __webpack_require__(82)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8b963980"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vuetable-2/src/components/Vuetable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b963980", Component.options)
  } else {
    hotAPI.reload("data-v-8b963980", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("d10399a0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8b963980\",\"scoped\":true,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Vuetable.vue", function() {
     var newContent = require("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8b963980\",\"scoped\":true,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Vuetable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(undefined);
// imports


// module
exports.push([module.i, "\n[v-cloak][data-v-8b963980] {\n  display: none;\n}\n.vuetable th.sortable[data-v-8b963980]:hover {\n  color: #2185d0;\n  cursor: pointer;\n}\n.vuetable-actions[data-v-8b963980] {\n  width: 15%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.vuetable-pagination[data-v-8b963980] {\n  background: #f9fafb !important;\n}\n.vuetable-pagination-info[data-v-8b963980] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.vuetable-empty-result[data-v-8b963980] {\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(62)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(64);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    fields: {
      type: Array,
      required: true
    },
    loadOnStart: {
      type: Boolean,
      default: true
    },
    apiUrl: {
      type: String,
      default: ''
    },
    httpMethod: {
      type: String,
      default: 'get',
      validator: function validator(value) {
        return ['get', 'post'].indexOf(value) > -1;
      }
    },
    reactiveApiUrl: {
      type: Boolean,
      default: true
    },
    apiMode: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object],
      default: function _default() {
        return null;
      }
    },
    dataTotal: {
      type: Number,
      default: 0
    },
    dataManager: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    dataPath: {
      type: String,
      default: 'data'
    },
    paginationPath: {
      type: [String],
      default: 'links.pagination'
    },
    queryParams: {
      type: Object,
      default: function _default() {
        return {
          sort: 'sort',
          page: 'page',
          perPage: 'per_page'
        };
      }
    },
    appendParams: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    httpOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    perPage: {
      type: Number,
      default: function _default() {
        return 10;
      }
    },
    sortOrder: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    multiSort: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },

    multiSortKey: {
      type: String,
      default: 'alt'
    },

    rowClassCallback: {
      type: [String, Function],
      default: ''
    },
    rowClass: {
      type: [String, Function],
      default: ''
    },
    detailRowComponent: {
      type: String,
      default: ''
    },
    detailRowTransition: {
      type: String,
      default: ''
    },
    trackBy: {
      type: String,
      default: 'id'
    },
    css: {
      type: Object,
      default: function _default() {
        return {
          tableClass: 'ui blue selectable celled stackable attached table',
          loadingClass: 'loading',
          ascendingIcon: 'blue chevron up icon',
          descendingIcon: 'blue chevron down icon',
          detailRowClass: 'vuetable-detail-row',
          handleIcon: 'grey sidebar icon'
        };
      }
    },
    minRows: {
      type: Number,
      default: 0
    },
    silent: {
      type: Boolean,
      default: false
    },
    noDataTemplate: {
      type: String,
      default: function _default() {
        return 'No Data Available';
      }
    }
  },
  data: function data() {
    return {
      eventPrefix: 'vuetable:',
      tableFields: [],
      tableData: null,
      tablePagination: null,
      currentPage: 1,
      selectedTo: [],
      visibleDetailRows: []
    };
  },
  mounted: function mounted() {
    this.normalizeFields();
    this.normalizeSortOrder();
    this.$nextTick(function () {
      this.fireEvent('initialized', this.tableFields);
    });

    if (this.loadOnStart) {
      this.loadData();
    }
  },

  computed: {
    useDetailRow: function useDetailRow() {
      if (this.tableData && this.tableData[0] && this.detailRowComponent !== '' && typeof this.tableData[0][this.trackBy] === 'undefined') {
        this.warn('You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!');
        return false;
      }

      return this.detailRowComponent !== '';
    },
    countVisibleFields: function countVisibleFields() {
      return this.tableFields.filter(function (field) {
        return field.visible;
      }).length;
    },
    countTableData: function countTableData() {
      if (this.tableData === null) {
        return 0;
      }
      return this.tableData.length;
    },
    displayEmptyDataRow: function displayEmptyDataRow() {
      return this.countTableData === 0 && this.noDataTemplate.length > 0;
    },
    lessThanMinRows: function lessThanMinRows() {
      if (this.tableData === null || this.tableData.length === 0) {
        return true;
      }
      return this.tableData.length < this.minRows;
    },
    blankRows: function blankRows() {
      if (this.tableData === null || this.tableData.length === 0) {
        return this.minRows;
      }
      if (this.tableData.length >= this.minRows) {
        return 0;
      }

      return this.minRows - this.tableData.length;
    },
    isApiMode: function isApiMode() {
      return this.apiMode;
    },
    isDataMode: function isDataMode() {
      return !this.apiMode;
    }
  },
  methods: {
    normalizeFields: function normalizeFields() {
      if (typeof this.fields === 'undefined') {
        this.warn('You need to provide "fields" prop.');
        return;
      }

      this.tableFields = [];
      var self = this;
      var obj = void 0;
      this.fields.forEach(function (field, i) {
        if (typeof field === 'string') {
          obj = {
            name: field,
            title: self.setTitle(field),
            titleClass: '',
            dataClass: '',
            callback: null,
            visible: true
          };
        } else {
          obj = {
            name: field.name,
            title: field.title === undefined ? self.setTitle(field.name) : field.title,
            sortField: field.sortField,
            titleClass: field.titleClass === undefined ? '' : field.titleClass,
            dataClass: field.dataClass === undefined ? '' : field.dataClass,
            callback: field.callback === undefined ? '' : field.callback,
            visible: field.visible === undefined ? true : field.visible
          };
        }
        self.tableFields.push(obj);
      });
    },
    setData: function setData(data) {
      this.apiMode = false;
      if (Array.isArray(data)) {
        this.tableData = data;
        return;
      }

      this.fireEvent('loading');

      this.tableData = this.getObjectValue(data, this.dataPath, null);
      this.tablePagination = this.getObjectValue(data, this.paginationPath, null);

      this.$nextTick(function () {
        this.fireEvent('pagination-data', this.tablePagination);
        this.fireEvent('loaded');
      });
    },
    setTitle: function setTitle(str) {
      if (this.isSpecialField(str)) {
        return '';
      }

      return this.titleCase(str);
    },
    renderTitle: function renderTitle(field) {
      var title = typeof field.title === 'undefined' ? field.name.replace('.', ' ') : field.title;

      if (title.length > 0 && this.isInCurrentSortGroup(field)) {
        var style = 'opacity:' + this.sortIconOpacity(field) + ';position:relative;float:right';
        return title + ' ' + this.renderIconTag(['sort-icon', this.sortIcon(field)], 'style="' + style + '"');
      }

      return title;
    },
    renderSequence: function renderSequence(index) {
      return this.tablePagination ? this.tablePagination.from + index : index;
    },
    isSpecialField: function isSpecialField(fieldName) {
      return fieldName.slice(0, 2) === '__';
    },
    titleCase: function titleCase(str) {
      return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    camelCase: function camelCase(str) {
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';

      var self = this;
      return str.split(delimiter).map(function (item) {
        return self.titleCase(item);
      }).join('');
    },
    notIn: function notIn(str, arr) {
      return arr.indexOf(str) === -1;
    },
    loadData: function loadData() {
      var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.loadSuccess;
      var failed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.loadFailed;

      if (this.isDataMode) {
        this.callDataManager();
        return;
      }

      this.fireEvent('loading');

      this.httpOptions['params'] = this.getAllQueryParams();

      _axios2.default[this.httpMethod](this.apiUrl, this.httpOptions).then(success, failed).catch(function () {
        return failed();
      });
    },
    loadSuccess: function loadSuccess(response) {
      this.fireEvent('load-success', response);

      var body = this.transform(response.data);

      this.tableData = this.getObjectValue(body, this.dataPath, null);
      this.tablePagination = this.getObjectValue(body, this.paginationPath, null);

      if (this.tablePagination === null) {
        this.warn('vuetable: pagination-path "' + this.paginationPath + '" not found. ' + 'It looks like the data returned from the sever does not have pagination information ' + "or you may have set it incorrectly.\n" + 'You can explicitly suppress this warning by setting pagination-path="".');
      }

      this.$nextTick(function () {
        this.fireEvent('pagination-data', this.tablePagination);
        this.fireEvent('loaded');
      });
    },
    loadFailed: function loadFailed(response) {
      console.error('load-error', response);
      this.fireEvent('load-error', response);
      this.fireEvent('loaded');
    },
    transform: function transform(data) {
      var func = 'transform';

      if (this.parentFunctionExists(func)) {
        return this.$parent[func].call(this.$parent, data);
      }

      return data;
    },
    parentFunctionExists: function parentFunctionExists(func) {
      return func !== '' && typeof this.$parent[func] === 'function';
    },
    callParentFunction: function callParentFunction(func, args) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (this.parentFunctionExists(func)) {
        return this.$parent[func].call(this.$parent, args);
      }

      return defaultValue;
    },
    fireEvent: function fireEvent(eventName, args) {
      this.$emit(this.eventPrefix + eventName, args);
    },
    warn: function warn(msg) {
      if (!this.silent) {
        console.warn(msg);
      }
    },
    getAllQueryParams: function getAllQueryParams() {
      var params = {};
      params[this.queryParams.sort] = this.getSortParam();
      params[this.queryParams.page] = this.currentPage;
      params[this.queryParams.perPage] = this.perPage;

      for (var x in this.appendParams) {
        params[x] = this.appendParams[x];
      }

      return params;
    },
    getSortParam: function getSortParam() {
      if (!this.sortOrder || this.sortOrder.field == '') {
        return '';
      }

      if (typeof this.$parent['getSortParam'] == 'function') {
        return this.$parent['getSortParam'].call(this.$parent, this.sortOrder);
      }

      return this.getDefaultSortParam();
    },
    getDefaultSortParam: function getDefaultSortParam() {
      var result = '';

      for (var i = 0; i < this.sortOrder.length; i++) {
        var fieldName = typeof this.sortOrder[i].sortField === 'undefined' ? this.sortOrder[i].field : this.sortOrder[i].sortField;

        result += fieldName + '|' + this.sortOrder[i].direction + (i + 1 < this.sortOrder.length ? ',' : '');
      }

      return result;
    },
    extractName: function extractName(string) {
      return string.split(':')[0].trim();
    },
    extractArgs: function extractArgs(string) {
      return string.split(':')[1];
    },
    isSortable: function isSortable(field) {
      return !(typeof field.sortField === 'undefined');
    },
    isInCurrentSortGroup: function isInCurrentSortGroup(field) {
      return this.currentSortOrderPosition(field) !== false;
    },
    currentSortOrderPosition: function currentSortOrderPosition(field) {
      if (!this.isSortable(field)) {
        return false;
      }

      for (var i = 0; i < this.sortOrder.length; i++) {
        if (this.fieldIsInSortOrderPosition(field, i)) {
          return i;
        }
      }

      return false;
    },
    fieldIsInSortOrderPosition: function fieldIsInSortOrderPosition(field, i) {
      return this.sortOrder[i].field === field.name && this.sortOrder[i].sortField === field.sortField;
    },
    orderBy: function orderBy(field, event) {
      if (!this.isSortable(field)) return;

      var key = this.multiSortKey.toLowerCase() + 'Key';

      if (this.multiSort && event[key]) {
        this.multiColumnSort(field);
      } else {
        this.singleColumnSort(field);
      }

      this.currentPage = 1;
      this.loadData();
    },
    multiColumnSort: function multiColumnSort(field) {
      var i = this.currentSortOrderPosition(field);

      if (i === false) {
        this.sortOrder.push({
          field: field.name,
          sortField: field.sortField,
          direction: 'asc'
        });
      } else {
        if (this.sortOrder[i].direction === 'asc') {
          this.sortOrder[i].direction = 'desc';
        } else {
          this.sortOrder.splice(i, 1);
        }
      }
    },
    singleColumnSort: function singleColumnSort(field) {
      if (this.sortOrder.length === 0) {
        this.clearSortOrder();
      }

      this.sortOrder.splice(1);

      if (this.fieldIsInSortOrderPosition(field, 0)) {
        this.sortOrder[0].direction = this.sortOrder[0].direction === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortOrder[0].direction = 'asc';
      }
      this.sortOrder[0].field = field.name;
      this.sortOrder[0].sortField = field.sortField;
    },
    clearSortOrder: function clearSortOrder() {
      this.sortOrder.push({
        field: '',
        sortField: '',
        direction: 'asc'
      });
    },
    sortIcon: function sortIcon(field) {
      var cls = '';
      var i = this.currentSortOrderPosition(field);

      if (i !== false) {
        cls = this.sortOrder[i].direction == 'asc' ? this.css.ascendingIcon : this.css.descendingIcon;
      }

      return cls;
    },
    sortIconOpacity: function sortIconOpacity(field) {
      var max = 1.0,
          min = 0.3,
          step = 0.3;

      var count = this.sortOrder.length;
      var current = this.currentSortOrderPosition(field);

      if (max - count * step < min) {
        step = (max - min) / (count - 1);
      }

      var opacity = max - current * step;

      return opacity;
    },
    hasCallback: function hasCallback(item) {
      return item.callback ? true : false;
    },
    callCallback: function callCallback(field, item) {
      if (!this.hasCallback(field)) return;

      if (typeof field.callback == 'function') {
        return field.callback(this.getObjectValue(item, field.name));
      }

      var args = field.callback.split('|');
      var func = args.shift();

      if (typeof this.$parent[func] === 'function') {
        var value = this.getObjectValue(item, field.name);

        return args.length > 0 ? this.$parent[func].apply(this.$parent, [value].concat(args)) : this.$parent[func].call(this.$parent, value);
      }

      return null;
    },
    getObjectValue: function getObjectValue(object, path, defaultValue) {
      defaultValue = typeof defaultValue === 'undefined' ? null : defaultValue;

      var obj = object;
      if (path.trim() != '') {
        var keys = path.split('.');
        keys.forEach(function (key) {
          if (obj !== null && typeof obj[key] !== 'undefined' && obj[key] !== null) {
            obj = obj[key];
          } else {
            obj = defaultValue;
            return;
          }
        });
      }
      return obj;
    },
    toggleCheckbox: function toggleCheckbox(dataItem, fieldName, event) {
      var isChecked = event.target.checked;
      var idColumn = this.trackBy;

      if (dataItem[idColumn] === undefined) {
        this.warn('__checkbox field: The "' + this.trackBy + '" field does not exist! Make sure the field you specify in "track-by" prop does exist.');
        return;
      }

      var key = dataItem[idColumn];
      if (isChecked) {
        this.selectId(key);
      } else {
        this.unselectId(key);
      }
      this.$emit('vuetable:checkbox-toggled', isChecked, dataItem);
    },
    selectId: function selectId(key) {
      if (!this.isSelectedRow(key)) {
        this.selectedTo.push(key);
      }
    },
    unselectId: function unselectId(key) {
      this.selectedTo = this.selectedTo.filter(function (item) {
        return item !== key;
      });
    },
    isSelectedRow: function isSelectedRow(key) {
      return this.selectedTo.indexOf(key) >= 0;
    },
    rowSelected: function rowSelected(dataItem, fieldName) {
      var idColumn = this.trackBy;
      var key = dataItem[idColumn];

      return this.isSelectedRow(key);
    },
    checkCheckboxesState: function checkCheckboxesState(fieldName) {
      if (!this.tableData) return;

      var self = this;
      var idColumn = this.trackBy;
      var selector = 'th.vuetable-th-checkbox-' + idColumn + ' input[type=checkbox]';
      var els = document.querySelectorAll(selector);

      if (els.forEach === undefined) els.forEach = function (cb) {
        [].forEach.call(els, cb);
      };

      var selected = this.tableData.filter(function (item) {
        return self.selectedTo.indexOf(item[idColumn]) >= 0;
      });

      if (selected.length <= 0) {
        els.forEach(function (el) {
          el.indeterminate = false;
        });
        return false;
      } else if (selected.length < this.perPage) {
          els.forEach(function (el) {
            el.indeterminate = true;
          });
          return true;
        } else {
            els.forEach(function (el) {
              el.indeterminate = false;
            });
            return true;
          }
    },
    toggleAllCheckboxes: function toggleAllCheckboxes(fieldName, event) {
      var self = this;
      var isChecked = event.target.checked;
      var idColumn = this.trackBy;

      if (isChecked) {
        this.tableData.forEach(function (dataItem) {
          self.selectId(dataItem[idColumn]);
        });
      } else {
        this.tableData.forEach(function (dataItem) {
          self.unselectId(dataItem[idColumn]);
        });
      }
      this.$emit('vuetable:checkbox-toggled-all', isChecked);
    },
    gotoPreviousPage: function gotoPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadData();
      }
    },
    gotoNextPage: function gotoNextPage() {
      if (this.currentPage < this.tablePagination.last_page) {
        this.currentPage++;
        this.loadData();
      }
    },
    gotoPage: function gotoPage(page) {
      if (page != this.currentPage && page > 0 && page <= this.tablePagination.last_page) {
        this.currentPage = page;
        this.loadData();
      }
    },
    isVisibleDetailRow: function isVisibleDetailRow(rowId) {
      return this.visibleDetailRows.indexOf(rowId) >= 0;
    },
    showDetailRow: function showDetailRow(rowId) {
      if (!this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.push(rowId);
      }
    },
    hideDetailRow: function hideDetailRow(rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.splice(this.visibleDetailRows.indexOf(rowId), 1);
      }
    },
    toggleDetailRow: function toggleDetailRow(rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.hideDetailRow(rowId);
      } else {
        this.showDetailRow(rowId);
      }
    },
    showField: function showField(index) {
      if (index < 0 || index > this.tableFields.length) return;

      this.tableFields[index].visible = true;
    },
    hideField: function hideField(index) {
      if (index < 0 || index > this.tableFields.length) return;

      this.tableFields[index].visible = false;
    },
    toggleField: function toggleField(index) {
      if (index < 0 || index > this.tableFields.length) return;

      this.tableFields[index].visible = !this.tableFields[index].visible;
    },
    renderIconTag: function renderIconTag(classes) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return typeof this.css.renderIcon === 'undefined' ? '<i class="' + classes.join(' ') + '" ' + options + '></i>' : this.css.renderIcon(classes, options);
    },
    makePagination: function makePagination() {
      var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var currentPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var pagination = {};
      total = total === null ? this.dataTotal : total;
      perPage = perPage === null ? this.perPage : perPage;
      currentPage = currentPage === null ? this.currentPage : currentPage;

      return {
        'total': total,
        'per_page': perPage,
        'current_page': currentPage,
        'last_page': Math.ceil(total / perPage) || 0,
        'next_page_url': '',
        'prev_page_url': '',
        'from': (currentPage - 1) * perPage + 1,
        'to': Math.min(currentPage * perPage, total)
      };
    },
    normalizeSortOrder: function normalizeSortOrder() {
      this.sortOrder.forEach(function (item) {
        item.sortField = item.sortField || item.field;
      });
    },
    callDataManager: function callDataManager() {
      if (this.dataManager === null && this.data === null) return;

      if (Array.isArray(this.data)) {
        console.log('data mode: array');
        this.setData(this.data);
      } else {
        this.normalizeSortOrder();
        this.setData(this.dataManager(this.sortOrder, this.makePagination()));
      }
    },
    onRowClass: function onRowClass(dataItem, index) {
      if (this.rowClassCallback !== '') {
        this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.');
        return;
      }

      if (typeof this.rowClass === 'function') {
        return this.rowClass(dataItem, index);
      }

      return this.rowClass;
    },
    onRowChanged: function onRowChanged(dataItem) {
      this.fireEvent('row-changed', dataItem);
      return true;
    },
    onRowClicked: function onRowClicked(dataItem, event) {
      this.$emit(this.eventPrefix + 'row-clicked', dataItem, event);
      return true;
    },
    onRowDoubleClicked: function onRowDoubleClicked(dataItem, event) {
      this.$emit(this.eventPrefix + 'row-dblclicked', dataItem, event);
    },
    onDetailRowClick: function onDetailRowClick(dataItem, event) {
      this.$emit(this.eventPrefix + 'detail-row-clicked', dataItem, event);
    },
    onCellClicked: function onCellClicked(dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-clicked', dataItem, field, event);
    },
    onCellDoubleClicked: function onCellDoubleClicked(dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-dblclicked', dataItem, field, event);
    },
    changePage: function changePage(page) {
      if (page === 'prev') {
        this.gotoPreviousPage();
      } else if (page === 'next') {
        this.gotoNextPage();
      } else {
        this.gotoPage(page);
      }
    },
    reload: function reload() {
      this.loadData();
    },
    refresh: function refresh() {
      this.currentPage = 1;
      this.loadData();
    },
    resetData: function resetData() {
      this.tableData = null;
      this.tablePagination = null;
      this.fireEvent('data-reset');
    }
  },
  watch: {
    'multiSort': function multiSort(newVal, oldVal) {
      if (newVal === false && this.sortOrder.length > 1) {
        this.sortOrder.splice(1);
        this.loadData();
      }
    },
    'apiUrl': function apiUrl(newVal, oldVal) {
      if (this.reactiveApiUrl && newVal !== oldVal) this.refresh();
    }
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(12);
var Axios = __webpack_require__(66);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(16);
axios.CancelToken = __webpack_require__(80);
axios.isCancel = __webpack_require__(15);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(81);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(1);
var InterceptorManager = __webpack_require__(75);
var dispatchRequest = __webpack_require__(76);
var isAbsoluteURL = __webpack_require__(78);
var combineURLs = __webpack_require__(79);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(14);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(77);
var isCancel = __webpack_require__(15);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(16);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { class: ["vuetable", _vm.css.tableClass] }, [
    _c("thead", [
      _c(
        "tr",
        [
          _vm._l(_vm.tableFields, function(field) {
            return [
              field.visible
                ? [
                    _vm.isSpecialField(field.name)
                      ? [
                          _vm.extractName(field.name) == "__checkbox"
                            ? _c(
                                "th",
                                {
                                  class: [
                                    "vuetable-th-checkbox-" + _vm.trackBy,
                                    field.titleClass
                                  ]
                                },
                                [
                                  _c("input", {
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: _vm.checkCheckboxesState(
                                        field.name
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.toggleAllCheckboxes(
                                          field.name,
                                          $event
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.extractName(field.name) == "__component"
                            ? _c("th", {
                                class: [
                                  "vuetable-th-component-" + _vm.trackBy,
                                  field.titleClass,
                                  { sortable: _vm.isSortable(field) }
                                ],
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field))
                                },
                                on: {
                                  click: function($event) {
                                    _vm.orderBy(field, $event)
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.extractName(field.name) == "__slot"
                            ? _c("th", {
                                class: [
                                  "vuetable-th-slot-" +
                                    _vm.extractArgs(field.name),
                                  field.titleClass,
                                  { sortable: _vm.isSortable(field) }
                                ],
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field))
                                },
                                on: {
                                  click: function($event) {
                                    _vm.orderBy(field, $event)
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.extractName(field.name) == "__sequence"
                            ? _c("th", {
                                class: [
                                  "vuetable-th-sequence",
                                  field.titleClass || ""
                                ],
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field))
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.notIn(_vm.extractName(field.name), [
                            "__sequence",
                            "__checkbox",
                            "__component",
                            "__slot"
                          ])
                            ? _c("th", {
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass || ""
                                ],
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field))
                                }
                              })
                            : _vm._e()
                        ]
                      : [
                          _c("th", {
                            class: [
                              "vuetable-th-" + field.name,
                              field.titleClass,
                              { sortable: _vm.isSortable(field) }
                            ],
                            attrs: { id: "_" + field.name },
                            domProps: {
                              innerHTML: _vm._s(_vm.renderTitle(field))
                            },
                            on: {
                              click: function($event) {
                                _vm.orderBy(field, $event)
                              }
                            }
                          })
                        ]
                  ]
                : _vm._e()
            ]
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "tbody",
      { staticClass: "vuetable-body" },
      [
        _vm._l(_vm.tableData, function(item, index) {
          return [
            _c(
              "tr",
              {
                class: _vm.onRowClass(item, index),
                attrs: { "item-index": index, render: _vm.onRowChanged(item) },
                on: {
                  dblclick: function($event) {
                    _vm.onRowDoubleClicked(item, $event)
                  },
                  click: function($event) {
                    _vm.onRowClicked(item, $event)
                  }
                }
              },
              [
                _vm._l(_vm.tableFields, function(field) {
                  return [
                    field.visible
                      ? [
                          _vm.isSpecialField(field.name)
                            ? [
                                _vm.extractName(field.name) == "__sequence"
                                  ? _c("td", {
                                      class: [
                                        "vuetable-sequence",
                                        field.dataClass
                                      ],
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderSequence(index)
                                        )
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.extractName(field.name) == "__handle"
                                  ? _c("td", {
                                      class: [
                                        "vuetable-handle",
                                        field.dataClass
                                      ],
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderIconTag([
                                            "handle-icon",
                                            _vm.css.handleIcon
                                          ])
                                        )
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.extractName(field.name) == "__checkbox"
                                  ? _c(
                                      "td",
                                      {
                                        class: [
                                          "vuetable-checkboxes",
                                          field.dataClass
                                        ]
                                      },
                                      [
                                        _c("input", {
                                          attrs: { type: "checkbox" },
                                          domProps: {
                                            checked: _vm.rowSelected(
                                              item,
                                              field.name
                                            )
                                          },
                                          on: {
                                            change: function($event) {
                                              _vm.toggleCheckbox(
                                                item,
                                                field.name,
                                                $event
                                              )
                                            }
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.extractName(field.name) === "__component"
                                  ? _c(
                                      "td",
                                      {
                                        class: [
                                          "vuetable-component",
                                          field.dataClass
                                        ]
                                      },
                                      [
                                        _c(_vm.extractArgs(field.name), {
                                          tag: "component",
                                          attrs: {
                                            "row-data": item,
                                            "row-index": index,
                                            "row-field": field.sortField
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.extractName(field.name) === "__slot"
                                  ? _c(
                                      "td",
                                      {
                                        class: [
                                          "vuetable-slot",
                                          field.dataClass
                                        ]
                                      },
                                      [
                                        _vm._t(
                                          _vm.extractArgs(field.name),
                                          null,
                                          {
                                            rowData: item,
                                            rowIndex: index,
                                            rowField: field.sortField
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  : _vm._e()
                              ]
                            : [
                                _vm.hasCallback(field)
                                  ? _c("td", {
                                      class: field.dataClass,
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.callCallback(field, item)
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.onCellClicked(item, field, $event)
                                        },
                                        dblclick: function($event) {
                                          _vm.onCellDoubleClicked(
                                            item,
                                            field,
                                            $event
                                          )
                                        }
                                      }
                                    })
                                  : _c("td", {
                                      class: field.dataClass,
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.getObjectValue(
                                            item,
                                            field.name,
                                            ""
                                          )
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.onCellClicked(item, field, $event)
                                        },
                                        dblclick: function($event) {
                                          _vm.onCellDoubleClicked(
                                            item,
                                            field,
                                            $event
                                          )
                                        }
                                      }
                                    })
                              ]
                        ]
                      : _vm._e()
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _vm.useDetailRow
              ? [
                  _vm.isVisibleDetailRow(item[_vm.trackBy])
                    ? _c(
                        "tr",
                        {
                          class: [_vm.css.detailRowClass],
                          on: {
                            click: function($event) {
                              _vm.onDetailRowClick(item, $event)
                            }
                          }
                        },
                        [
                          _c(
                            "transition",
                            { attrs: { name: _vm.detailRowTransition } },
                            [
                              _c(
                                "td",
                                { attrs: { colspan: _vm.countVisibleFields } },
                                [
                                  _c(_vm.detailRowComponent, {
                                    tag: "component",
                                    attrs: {
                                      "row-data": item,
                                      "row-index": index
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e()
          ]
        }),
        _vm._v(" "),
        _vm.displayEmptyDataRow
          ? [
              _c("tr", [
                _c(
                  "td",
                  {
                    staticClass: "vuetable-empty-result",
                    attrs: { colspan: _vm.countVisibleFields }
                  },
                  [_vm._v(_vm._s(_vm.noDataTemplate))]
                )
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.lessThanMinRows
          ? _vm._l(_vm.blankRows, function(i) {
              return _c(
                "tr",
                { staticClass: "blank-row" },
                [
                  _vm._l(_vm.tableFields, function(field) {
                    return [field.visible ? _c("td", [_vm._v(" ")]) : _vm._e()]
                  })
                ],
                2
              )
            })
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8b963980", module.exports)
  }
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(84)
/* template */
var __vue_template__ = __webpack_require__(87)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/vue/components/VuetablePaginationBootstrap.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71b49be9", Component.options)
  } else {
    hotAPI.reload("data-v-71b49be9", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_VuetablePaginationMixin__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_VuetablePaginationMixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_VuetablePaginationMixin__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_VuetablePaginationMixin___default.a]
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(86)
/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64cbc352", Component.options)
  } else {
    hotAPI.reload("data-v-64cbc352", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    css: {
      type: Object,
      default: function _default() {
        return {
          wrapperClass: 'ui right floated pagination menu',
          activeClass: 'active large',
          disabledClass: 'disabled',
          pageClass: 'item',
          linkClass: 'icon item',
          paginationClass: 'ui bottom attached segment grid',
          paginationInfoClass: 'left floated left aligned six wide column',
          dropdownClass: 'ui search dropdown',
          icons: {
            first: 'angle double left icon',
            prev: 'left chevron icon',
            next: 'right chevron icon',
            last: 'angle double right icon'
          }
        };
      }
    },
    onEachSide: {
      type: Number,
      default: function _default() {
        return 2;
      }
    }
  },
  data: function data() {
    return {
      eventPrefix: 'vuetable-pagination:',
      tablePagination: null
    };
  },
  computed: {
    totalPage: function totalPage() {
      return this.tablePagination === null ? 0 : this.tablePagination.last_page;
    },
    isOnFirstPage: function isOnFirstPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === 1;
    },
    isOnLastPage: function isOnLastPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === this.tablePagination.last_page;
    },
    notEnoughPages: function notEnoughPages() {
      return this.totalPage < this.onEachSide * 2 + 4;
    },
    windowSize: function windowSize() {
      return this.onEachSide * 2 + 1;
    },
    windowStart: function windowStart() {
      if (!this.tablePagination || this.tablePagination.current_page <= this.onEachSide) {
        return 1;
      } else if (this.tablePagination.current_page >= this.totalPage - this.onEachSide) {
        return this.totalPage - this.onEachSide * 2;
      }

      return this.tablePagination.current_page - this.onEachSide;
    }
  },
  methods: {
    loadPage: function loadPage(page) {
      this.$emit(this.eventPrefix + 'change-page', page);
    },
    isCurrentPage: function isCurrentPage(page) {
      return page === this.tablePagination.current_page;
    },
    setPaginationData: function setPaginationData(tablePagination) {
      this.tablePagination = tablePagination;
    },
    resetData: function resetData() {
      this.tablePagination = null;
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "pagination" },
    [
      _c("li", { class: { disabled: _vm.isOnFirstPage } }, [
        _c(
          "a",
          {
            attrs: { href: "" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.loadPage("prev")
              }
            }
          },
          [_c("span", [_vm._v("«")])]
        )
      ]),
      _vm._v(" "),
      _vm.notEnoughPages
        ? _vm._l(_vm.totalPage, function(n) {
            return _c("li", { class: { active: _vm.isCurrentPage(n) } }, [
              _c("a", {
                domProps: { innerHTML: _vm._s(n) },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.loadPage(n)
                  }
                }
              })
            ])
          })
        : _vm._l(_vm.windowSize, function(n) {
            return _c(
              "li",
              { class: { active: _vm.isCurrentPage(_vm.windowStart + n - 1) } },
              [
                _c("a", {
                  domProps: { innerHTML: _vm._s(_vm.windowStart + n - 1) },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.loadPage(_vm.windowStart + n - 1)
                    }
                  }
                })
              ]
            )
          }),
      _vm._v(" "),
      _c("li", { class: { disabled: _vm.isOnLastPage } }, [
        _c(
          "a",
          {
            attrs: { href: "" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.loadPage("next")
              }
            }
          },
          [_c("span", [_vm._v("»")])]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-71b49be9", module.exports)
  }
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructors_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_js__ = __webpack_require__(90);




function install(Vue, options) {
  var Highcharts = (options && options.Highcharts) || __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a;
  Vue.prototype.Highcharts = Highcharts;
  for (var tagName in __WEBPACK_IMPORTED_MODULE_1__constructors_js__["a" /* default */]) {
    var component = Object(__WEBPACK_IMPORTED_MODULE_2__create_js__["a" /* default */])(tagName, Highcharts, Vue);
    component && Vue.component(tagName, component);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (install);


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(K,S){"object"===typeof module&&module.exports?module.exports=K.document?S(K):S:K.Highcharts=S(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,C=a.document,A=a.navigator&&a.navigator.userAgent||"",G=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,F=/(edge|msie|trident)/i.test(A)&&!window.opera,m=!G,g=/Firefox/.test(A),k=g&&4>parseInt(A.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",
version:"5.0.12",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:k,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:F,isWebKit:/AppleWebKit/.test(A),isFirefox:g,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,vml:m,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){var C=[],A=a.charts,G=a.doc,F=a.win;a.error=function(m,g){m=a.isNumber(m)?"Highcharts error #"+
m+": www.highcharts.com/errors/"+m:m;if(g)throw Error(m);F.console&&console.log(m)};a.Fx=function(a,g,k){this.options=g;this.elem=a;this.prop=k};a.Fx.prototype={dSetter:function(){var a=this.paths[0],g=this.paths[1],k=[],q=this.now,v=a.length,u;if(1===q)k=this.toD;else if(v===g.length&&1>q)for(;v--;)u=parseFloat(a[v]),k[v]=isNaN(u)?a[v]:q*parseFloat(g[v]-u)+u;else k=g;this.elem.attr("d",k,null,!0)},update:function(){var a=this.elem,g=this.prop,k=this.now,q=this.options.step;if(this[g+"Setter"])this[g+
"Setter"]();else a.attr?a.element&&a.attr(g,k,null,!0):a.style[g]=k+this.unit;q&&q.call(a,k,this)},run:function(a,g,k){var m=this,v=function(a){return v.stopped?!1:m.step(a)},u;this.startTime=+new Date;this.start=a;this.end=g;this.unit=k;this.now=this.start;this.pos=0;v.elem=this.elem;v.prop=this.prop;v()&&1===C.push(v)&&(v.timerId=setInterval(function(){for(u=0;u<C.length;u++)C[u]()||C.splice(u--,1);C.length||clearInterval(v.timerId)},13))},step:function(m){var g=+new Date,k,q=this.options,v=this.elem,
u=q.complete,h=q.duration,e=q.curAnim;v.attr&&!v.element?m=!1:m||g>=h+this.startTime?(this.now=this.end,this.pos=1,this.update(),k=e[this.prop]=!0,a.objectEach(e,function(a){!0!==a&&(k=!1)}),k&&u&&u.call(v),m=!1):(this.pos=q.easing((g-this.startTime)/h),this.now=this.start+(this.end-this.start)*this.pos,this.update(),m=!0);return m},initPath:function(m,g,k){function q(a){var b,l;for(y=a.length;y--;)b="M"===a[y]||"L"===a[y],l=/[a-zA-Z]/.test(a[y+3]),b&&l&&a.splice(y+1,0,a[y+1],a[y+2],a[y+1],a[y+2])}
function v(a,b){for(;a.length<w;){a[0]=b[w-a.length];var l=a.slice(0,c);[].splice.apply(a,[0,0].concat(l));D&&(l=a.slice(a.length-c),[].splice.apply(a,[a.length,0].concat(l)),y--)}a[0]="M"}function u(a,l){for(var r=(w-a.length)/c;0<r&&r--;)b=a.slice().splice(a.length/H-c,c*H),b[0]=l[w-c-r*c],d&&(b[c-6]=b[c-2],b[c-5]=b[c-1]),[].splice.apply(a,[a.length/H,0].concat(b)),D&&r--}g=g||"";var h,e=m.startX,n=m.endX,d=-1<g.indexOf("C"),c=d?7:3,w,b,y;g=g.split(" ");k=k.slice();var D=m.isArea,H=D?2:1,l;d&&(q(g),
q(k));if(e&&n){for(y=0;y<e.length;y++)if(e[y]===n[0]){h=y;break}else if(e[0]===n[n.length-e.length+y]){h=y;l=!0;break}void 0===h&&(g=[])}g.length&&a.isNumber(h)&&(w=k.length+h*H*c,l?(v(g,k),u(k,g)):(v(k,g),u(g,k)));return[g,k]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,g){var m;a||(a={});for(m in g)a[m]=g[m];return a};a.merge=function(){var m,g=arguments,k,q={},v=
function(g,h){"object"!==typeof g&&(g={});a.objectEach(h,function(e,n){!a.isObject(e,!0)||a.isClass(e)||a.isDOMElement(e)?g[n]=h[n]:g[n]=v(g[n]||{},e)});return g};!0===g[0]&&(q=g[1],g=Array.prototype.slice.call(g,2));k=g.length;for(m=0;m<k;m++)q=v(q,g[m]);return q};a.pInt=function(a,g){return parseInt(a,g||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(m,
g){return!!m&&"object"===typeof m&&(!g||!a.isArray(m))};a.isDOMElement=function(m){return a.isObject(m)&&"number"===typeof m.nodeType};a.isClass=function(m){var g=m&&m.constructor;return!(!a.isObject(m,!0)||a.isDOMElement(m)||!g||!g.name||"Object"===g.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,g){for(var m=a.length;m--;)if(a[m]===g){a.splice(m,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(m,g,k){var q;a.isString(g)?a.defined(k)?
m.setAttribute(g,k):m&&m.getAttribute&&(q=m.getAttribute(g)):a.defined(g)&&a.isObject(g)&&a.objectEach(g,function(a,g){m.setAttribute(g,a)});return q};a.splat=function(m){return a.isArray(m)?m:[m]};a.syncTimeout=function(a,g,k){if(g)return setTimeout(a,g,k);a.call(0,k)};a.pick=function(){var a=arguments,g,k,q=a.length;for(g=0;g<q;g++)if(k=a[g],void 0!==k&&null!==k)return k};a.css=function(m,g){a.isMS&&!a.svg&&g&&void 0!==g.opacity&&(g.filter="alpha(opacity\x3d"+100*g.opacity+")");a.extend(m.style,
g)};a.createElement=function(m,g,k,q,v){m=G.createElement(m);var u=a.css;g&&a.extend(m,g);v&&u(m,{padding:0,border:"none",margin:0});k&&u(m,k);q&&q.appendChild(m);return m};a.extendClass=function(m,g){var k=function(){};k.prototype=new m;a.extend(k.prototype,g);return k};a.pad=function(a,g,k){return Array((g||2)+1-String(a).length).join(k||0)+a};a.relativeLength=function(a,g){return/%$/.test(a)?g*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,g,k){var q=a[g];a[g]=function(){var a=Array.prototype.slice.call(arguments),
g=arguments,h=this;h.proceed=function(){q.apply(h,arguments.length?arguments:g)};a.unshift(q);a=k.apply(this,a);h.proceed=null;return a}};a.getTZOffset=function(m){var g=a.Date;return 6E4*(g.hcGetTimezoneOffset&&g.hcGetTimezoneOffset(m)||g.hcTimezoneOffset||0)};a.dateFormat=function(m,g,k){if(!a.defined(g)||isNaN(g))return a.defaultOptions.lang.invalidDate||"";m=a.pick(m,"%Y-%m-%d %H:%M:%S");var q=a.Date,v=new q(g-a.getTZOffset(g)),u=v[q.hcGetHours](),h=v[q.hcGetDay](),e=v[q.hcGetDate](),n=v[q.hcGetMonth](),
d=v[q.hcGetFullYear](),c=a.defaultOptions.lang,w=c.weekdays,b=c.shortWeekdays,y=a.pad,q=a.extend({a:b?b[h]:w[h].substr(0,3),A:w[h],d:y(e),e:y(e,2," "),w:h,b:c.shortMonths[n],B:c.months[n],m:y(n+1),y:d.toString().substr(2,2),Y:d,H:y(u),k:u,I:y(u%12||12),l:u%12||12,M:y(v[q.hcGetMinutes]()),p:12>u?"AM":"PM",P:12>u?"am":"pm",S:y(v.getSeconds()),L:y(Math.round(g%1E3),3)},a.dateFormats);a.objectEach(q,function(a,b){for(;-1!==m.indexOf("%"+b);)m=m.replace("%"+b,"function"===typeof a?a(g):a)});return k?m.substr(0,
1).toUpperCase()+m.substr(1):m};a.formatSingle=function(m,g){var k=/\.([0-9])/,q=a.defaultOptions.lang;/f$/.test(m)?(k=(k=m.match(k))?k[1]:-1,null!==g&&(g=a.numberFormat(g,k,q.decimalPoint,-1<m.indexOf(",")?q.thousandsSep:""))):g=a.dateFormat(m,g);return g};a.format=function(m,g){for(var k="{",q=!1,v,u,h,e,n=[],d;m;){k=m.indexOf(k);if(-1===k)break;v=m.slice(0,k);if(q){v=v.split(":");u=v.shift().split(".");e=u.length;d=g;for(h=0;h<e;h++)d=d[u[h]];v.length&&(d=a.formatSingle(v.join(":"),d));n.push(d)}else n.push(v);
m=m.slice(k+1);k=(q=!q)?"}":"{"}n.push(m);return n.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(m,g,k,q,v){var u,h=m;k=a.pick(k,1);u=m/k;g||(g=v?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===q&&(1===k?g=a.grep(g,function(a){return 0===a%1}):.1>=k&&(g=[1/k])));for(q=0;q<g.length&&!(h=g[q],v&&h*k>=m||!v&&u<=(g[q]+(g[q+1]||g[q]))/2);q++);return h=a.correctFloat(h*k,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=
function(a,g){var k=a.length,q,m;for(m=0;m<k;m++)a[m].safeI=m;a.sort(function(a,h){q=g(a,h);return 0===q?a.safeI-h.safeI:q});for(m=0;m<k;m++)delete a[m].safeI};a.arrayMin=function(a){for(var g=a.length,k=a[0];g--;)a[g]<k&&(k=a[g]);return k};a.arrayMax=function(a){for(var g=a.length,k=a[0];g--;)a[g]>k&&(k=a[g]);return k};a.destroyObjectProperties=function(m,g){a.objectEach(m,function(a,q){a&&a!==g&&a.destroy&&a.destroy();delete m[q]})};a.discardElement=function(m){var g=a.garbageBin;g||(g=a.createElement("div"));
m&&g.appendChild(m);g.innerHTML=""};a.correctFloat=function(a,g){return parseFloat(a.toPrecision(g||14))};a.setAnimation=function(m,g){g.renderer.globalAnimation=a.pick(m,g.options.chart.animation,!0)};a.animObject=function(m){return a.isObject(m)?a.merge(m):{duration:m?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(m,g,k,q){m=+m||0;g=+g;var v=a.defaultOptions.lang,u=(m.toString().split(".")[1]||"").length,
h,e;-1===g?g=Math.min(u,20):a.isNumber(g)||(g=2);e=(Math.abs(m)+Math.pow(10,-Math.max(g,u)-1)).toFixed(g);u=String(a.pInt(e));h=3<u.length?u.length%3:0;k=a.pick(k,v.decimalPoint);q=a.pick(q,v.thousandsSep);m=(0>m?"-":"")+(h?u.substr(0,h)+q:"");m+=u.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+q);g&&(m+=k+e.slice(-g));return m};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(m,g,k){if("width"===g)return Math.min(m.offsetWidth,m.scrollWidth)-a.getStyle(m,"padding-left")-
a.getStyle(m,"padding-right");if("height"===g)return Math.min(m.offsetHeight,m.scrollHeight)-a.getStyle(m,"padding-top")-a.getStyle(m,"padding-bottom");if(m=F.getComputedStyle(m,void 0))m=m.getPropertyValue(g),a.pick(k,!0)&&(m=a.pInt(m));return m};a.inArray=function(a,g){return g.indexOf?g.indexOf(a):[].indexOf.call(g,a)};a.grep=function(a,g){return[].filter.call(a,g)};a.find=function(a,g){return[].find.call(a,g)};a.map=function(a,g){for(var k=[],q=0,m=a.length;q<m;q++)k[q]=g.call(a[q],a[q],q,a);
return k};a.offset=function(a){var g=G.documentElement;a=a.getBoundingClientRect();return{top:a.top+(F.pageYOffset||g.scrollTop)-(g.clientTop||0),left:a.left+(F.pageXOffset||g.scrollLeft)-(g.clientLeft||0)}};a.stop=function(a,g){for(var k=C.length;k--;)C[k].elem!==a||g&&g!==C[k].prop||(C[k].stopped=!0)};a.each=function(a,g,k){return Array.prototype.forEach.call(a,g,k)};a.objectEach=function(a,g,k){for(var q in a)a.hasOwnProperty(q)&&g.call(k,a[q],q,a)};a.addEvent=function(m,g,k){function q(a){a.target=
a.srcElement||F;k.call(m,a)}var v=m.hcEvents=m.hcEvents||{};m.addEventListener?m.addEventListener(g,k,!1):m.attachEvent&&(m.hcEventsIE||(m.hcEventsIE={}),m.hcEventsIE[k.toString()]=q,m.attachEvent("on"+g,q));v[g]||(v[g]=[]);v[g].push(k);return function(){a.removeEvent(m,g,k)}};a.removeEvent=function(m,g,k){function q(a,d){m.removeEventListener?m.removeEventListener(a,d,!1):m.attachEvent&&(d=m.hcEventsIE[d.toString()],m.detachEvent("on"+a,d))}function v(){var e,d;m.nodeName&&(g?(e={},e[g]=!0):e=h,
a.objectEach(e,function(a,e){if(h[e])for(d=h[e].length;d--;)q(e,h[e][d])}))}var u,h=m.hcEvents,e;h&&(g?(u=h[g]||[],k?(e=a.inArray(k,u),-1<e&&(u.splice(e,1),h[g]=u),q(g,k)):(v(),h[g]=[])):(v(),m.hcEvents={}))};a.fireEvent=function(m,g,k,q){var v;v=m.hcEvents;var u,h;k=k||{};if(G.createEvent&&(m.dispatchEvent||m.fireEvent))v=G.createEvent("Events"),v.initEvent(g,!0,!0),a.extend(v,k),m.dispatchEvent?m.dispatchEvent(v):m.fireEvent(g,v);else if(v)for(v=v[g]||[],u=v.length,k.target||a.extend(k,{preventDefault:function(){k.defaultPrevented=
!0},target:m,type:g}),g=0;g<u;g++)(h=v[g])&&!1===h.call(m,k)&&k.preventDefault();q&&!k.defaultPrevented&&q(k)};a.animate=function(m,g,k){var q,v="",u,h,e;a.isObject(k)||(e=arguments,k={duration:e[2],easing:e[3],complete:e[4]});a.isNumber(k.duration)||(k.duration=400);k.easing="function"===typeof k.easing?k.easing:Math[k.easing]||Math.easeInOutSine;k.curAnim=a.merge(g);a.objectEach(g,function(e,d){a.stop(m,d);h=new a.Fx(m,k,d);u=null;"d"===d?(h.paths=h.initPath(m,m.d,g.d),h.toD=g.d,q=0,u=1):m.attr?
q=m.attr(d):(q=parseFloat(a.getStyle(m,d))||0,"opacity"!==d&&(v="px"));u||(u=e);u&&u.match&&u.match("px")&&(u=u.replace(/px/g,""));h.run(q,u,v)})};a.seriesType=function(m,g,k,q,v){var u=a.getOptions(),h=a.seriesTypes;if(h[m])return a.error(27);u.plotOptions[m]=a.merge(u.plotOptions[g],k);h[m]=a.extendClass(h[g]||function(){},q);h[m].prototype.type=m;v&&(h[m].prototype.pointClass=a.extendClass(a.Point,v));return h[m]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),g=0;return function(){return"highcharts-"+
a+"-"+g++}}();F.jQuery&&(F.jQuery.fn.highcharts=function(){var m=[].slice.call(arguments);if(this[0])return m[0]?(new (a[a.isString(m[0])?m.shift():"Chart"])(this[0],m[0],m[1]),this):A[a.attr(this[0],"data-highcharts-chart")]});G&&!G.defaultView&&(a.getStyle=function(m,g){var k={width:"clientWidth",height:"clientHeight"}[g];if(m.style[g])return a.pInt(m.style[g]);"opacity"===g&&(g="filter");if(k)return m.style.zoom=1,Math.max(m[k]-2*a.getStyle(m,"padding"),0);m=m.currentStyle[g.replace(/\-(\w)/g,
function(a,g){return g.toUpperCase()})];"filter"===g&&(m=m.replace(/alpha\(opacity=([0-9]+)\)/,function(a,g){return g/100}));return""===m?1:a.pInt(m)});Array.prototype.forEach||(a.each=function(a,g,k){for(var q=0,m=a.length;q<m;q++)if(!1===g.call(k,a[q],q,a))return q});Array.prototype.indexOf||(a.inArray=function(a,g){var k,q=0;if(g)for(k=g.length;q<k;q++)if(g[q]===a)return q;return-1});Array.prototype.filter||(a.grep=function(a,g){for(var k=[],q=0,m=a.length;q<m;q++)g(a[q],q)&&k.push(a[q]);return k});
Array.prototype.find||(a.find=function(a,g){var k,q=a.length;for(k=0;k<q;k++)if(g(a[k],k))return a[k]})})(K);(function(a){var C=a.each,A=a.isNumber,G=a.map,F=a.merge,m=a.pInt;a.Color=function(g){if(!(this instanceof a.Color))return new a.Color(g);this.init(g)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[m(a[1]),m(a[2]),m(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[m(a[1]),m(a[2]),m(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(g){var k,q,m,u;if((this.input=g=this.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=G(g.stops,function(h){return new a.Color(h[1])});else if(g&&"#"===g[0]&&(k=g.length,g=parseInt(g.substr(1),16),7===k?q=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===k&&(q=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|g&240,(g&15)<<4|g&15,1])),!q)for(m=this.parsers.length;m--&&
!q;)u=this.parsers[m],(k=u.regex.exec(g))&&(q=u.parse(k));this.rgba=q||[]},get:function(a){var g=this.input,q=this.rgba,m;this.stops?(m=F(g),m.stops=[].concat(m.stops),C(this.stops,function(g,h){m.stops[h]=[m.stops[h][0],g.get(a)]})):m=q&&A(q[0])?"rgb"===a||!a&&1===q[3]?"rgb("+q[0]+","+q[1]+","+q[2]+")":"a"===a?q[3]:"rgba("+q.join(",")+")":g;return m},brighten:function(a){var g,q=this.rgba;if(this.stops)C(this.stops,function(g){g.brighten(a)});else if(A(a)&&0!==a)for(g=0;3>g;g++)q[g]+=m(255*a),0>
q[g]&&(q[g]=0),255<q[g]&&(q[g]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,k){var g,m;a.rgba.length?(g=this.rgba,a=a.rgba,m=1!==a[3]||1!==g[3],a=(m?"rgba(":"rgb(")+Math.round(a[0]+(g[0]-a[0])*(1-k))+","+Math.round(a[1]+(g[1]-a[1])*(1-k))+","+Math.round(a[2]+(g[2]-a[2])*(1-k))+(m?","+(a[3]+(g[3]-a[3])*(1-k)):"")+")"):a=a.input||"none";return a}};a.color=function(g){return new a.Color(g)}})(K);(function(a){var C,A,G=a.addEvent,F=a.animate,m=a.attr,g=a.charts,
k=a.color,q=a.css,v=a.createElement,u=a.defined,h=a.deg2rad,e=a.destroyObjectProperties,n=a.doc,d=a.each,c=a.extend,w=a.erase,b=a.grep,y=a.hasTouch,D=a.inArray,H=a.isArray,l=a.isFirefox,B=a.isMS,r=a.isObject,z=a.isString,M=a.isWebKit,p=a.merge,E=a.noop,I=a.objectEach,L=a.pick,f=a.pInt,t=a.removeEvent,R=a.stop,J=a.svg,N=a.SVG_NS,O=a.symbolSizes,P=a.win;C=a.SVGElement=function(){return this};c(C.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
init:function(a,f){this.element="span"===f?v(f):n.createElementNS(this.SVG_NS,f);this.renderer=a},animate:function(x,f,t){f=a.animObject(L(f,this.renderer.globalAnimation,!0));0!==f.duration?(t&&(f.complete=t),F(this,x,f)):(this.attr(x,null,t),f.step&&f.step.call(this));return this},colorGradient:function(x,f,t){var b=this.renderer,l,c,r,Q,e,h,n,y,E,w,J=[],B;x.radialGradient?c="radialGradient":x.linearGradient&&(c="linearGradient");c&&(r=x[c],e=b.gradients,n=x.stops,w=t.radialReference,H(r)&&(x[c]=
r={x1:r[0],y1:r[1],x2:r[2],y2:r[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===c&&w&&!u(r.gradientUnits)&&(Q=r,r=p(r,b.getRadialAttr(w,Q),{gradientUnits:"userSpaceOnUse"})),I(r,function(a,x){"id"!==x&&J.push(x,a)}),I(n,function(a){J.push(a)}),J=J.join(","),e[J]?w=e[J].attr("id"):(r.id=w=a.uniqueKey(),e[J]=h=b.createElement(c).attr(r).add(b.defs),h.radAttr=Q,h.stops=[],d(n,function(x){0===x[1].indexOf("rgba")?(l=a.color(x[1]),y=l.get("rgb"),E=l.get("a")):(y=x[1],E=1);x=b.createElement("stop").attr({offset:x[0],
"stop-color":y,"stop-opacity":E}).add(h);h.stops.push(x)})),B="url("+b.url+"#"+w+")",t.setAttribute(f,B),t.gradient=J,x.toString=function(){return B})},applyTextOutline:function(x){var f=this.element,t,b,l,c,r;-1!==x.indexOf("contrast")&&(x=x.replace(/contrast/g,this.renderer.getContrast(f.style.fill)));x=x.split(" ");b=x[x.length-1];if((l=x[0])&&"none"!==l&&a.svg){this.fakeTS=!0;x=[].slice.call(f.getElementsByTagName("tspan"));this.ySetter=this.xSetter;l=l.replace(/(^[\d\.]+)(.*?)$/g,function(a,
x,f){return 2*x+f});for(r=x.length;r--;)t=x[r],"highcharts-text-outline"===t.getAttribute("class")&&w(x,f.removeChild(t));c=f.firstChild;d(x,function(a,x){0===x&&(a.setAttribute("x",f.getAttribute("x")),x=f.getAttribute("y"),a.setAttribute("y",x||0),null===x&&f.setAttribute("y",0));a=a.cloneNode(1);m(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":l,"stroke-linejoin":"round"});f.insertBefore(a,c)})}},attr:function(a,f,t,b){var x,l=this.element,c,r=this,d,p;"string"===typeof a&&
void 0!==f&&(x=a,a={},a[x]=f);"string"===typeof a?r=(this[a+"Getter"]||this._defaultGetter).call(this,a,l):(I(a,function(x,f){d=!1;b||R(this,f);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(f)&&(c||(this.symbolAttr(a),c=!0),d=!0);!this.rotation||"x"!==f&&"y"!==f||(this.doTransform=!0);d||(p=this[f+"Setter"]||this._defaultSetter,p.call(this,x,f,l),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(f)&&this.updateShadows(f,x,p))},this),this.afterSetters());
t&&t();return r},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,f,t){for(var x=this.shadows,b=x.length;b--;)t.call(x[b],"height"===a?Math.max(f-(x[b].cutHeight||0),0):"d"===a?this.d:f,a,x[b])},addClass:function(a,f){var x=this.attr("class")||"";-1===x.indexOf(a)&&(f||(a=(x+(x?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==m(this.element,"class").indexOf(a)},removeClass:function(a){m(this.element,
"class",(m(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var x=this;d("x y r start end width height innerR anchorX anchorY".split(" "),function(f){x[f]=L(a[f],x[f])});x.attr({d:x.renderer.symbols[x.symbolName](x.x,x.y,x.width,x.height,x)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,f){var x=this,t={},b;f=f||a.strokeWidth||0;b=Math.round(f)%2/2;a.x=Math.floor(a.x||x.x||0)+b;a.y=Math.floor(a.y||x.y||
0)+b;a.width=Math.floor((a.width||x.width||0)-2*b);a.height=Math.floor((a.height||x.height||0)-2*b);u(a.strokeWidth)&&(a.strokeWidth=f);I(a,function(a,f){x[f]!==a&&(x[f]=t[f]=a)});return t},css:function(a){var x=this.styles,t={},b=this.element,l,r="",d,p=!x,e=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);x&&I(a,function(a,f){a!==x[f]&&(t[f]=a,p=!0)});p&&(x&&(a=c(x,t)),l=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===b.nodeName.toLowerCase()&&f(a.width),this.styles=a,l&&
!J&&this.renderer.forExport&&delete a.width,B&&!J?q(this.element,a):(d=function(a,x){return"-"+x.toLowerCase()},I(a,function(a,x){-1===D(x,e)&&(r+=x.replace(/([A-Z])/g,d)+":"+a+";")}),r&&m(b,"style",r)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,f){var x=this,t=x.element;y&&"click"===a?(t.ontouchstart=function(a){x.touchEventFired=
Date.now();a.preventDefault();f.call(t,a)},t.onclick=function(a){(-1===P.navigator.userAgent.indexOf("Android")||1100<Date.now()-(x.touchEventFired||0))&&f.call(t,a)}):t["on"+a]=f;return this},setRadialReference:function(a){var x=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;x&&x.radAttr&&x.animate(this.renderer.getRadialAttr(a,x.radAttr));return this},translate:function(a,f){return this.attr({translateX:a,translateY:f})},invert:function(a){this.inverted=a;this.updateTransform();
return this},updateTransform:function(){var a=this.translateX||0,f=this.translateY||0,t=this.scaleX,b=this.scaleY,l=this.inverted,c=this.rotation,r=this.element;l&&(a+=this.width,f+=this.height);a=["translate("+a+","+f+")"];l?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+(r.getAttribute("x")||0)+" "+(r.getAttribute("y")||0)+")");(u(t)||u(b))&&a.push("scale("+L(t,1)+" "+L(b,1)+")");a.length&&r.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);
return this},align:function(a,f,t){var x,b,l,c,r={};b=this.renderer;l=b.alignedObjects;var d,p;if(a){if(this.alignOptions=a,this.alignByTranslate=f,!t||z(t))this.alignTo=x=t||"renderer",w(l,this),l.push(this),t=null}else a=this.alignOptions,f=this.alignByTranslate,x=this.alignTo;t=L(t,b[x],b);x=a.align;b=a.verticalAlign;l=(t.x||0)+(a.x||0);c=(t.y||0)+(a.y||0);"right"===x?d=1:"center"===x&&(d=2);d&&(l+=(t.width-(a.width||0))/d);r[f?"translateX":"x"]=Math.round(l);"bottom"===b?p=1:"middle"===b&&(p=
2);p&&(c+=(t.height-(a.height||0))/p);r[f?"translateY":"y"]=Math.round(c);this[this.placed?"animate":"attr"](r);this.placed=!0;this.alignAttr=r;return this},getBBox:function(a,f){var x,t=this.renderer,b,l=this.element,r=this.styles,p,e=this.textStr,n,Q=t.cache,y=t.cacheKeys,E;f=L(f,this.rotation);b=f*h;p=r&&r.fontSize;void 0!==e&&(E=e.toString(),-1===E.indexOf("\x3c")&&(E=E.replace(/[0-9]/g,"0")),E+=["",f||0,p,r&&r.width,r&&r.textOverflow].join());E&&!a&&(x=Q[E]);if(!x){if(l.namespaceURI===this.SVG_NS||
t.forExport){try{(n=this.fakeTS&&function(a){d(l.querySelectorAll(".highcharts-text-outline"),function(x){x.style.display=a})})&&n("none"),x=l.getBBox?c({},l.getBBox()):{width:l.offsetWidth,height:l.offsetHeight},n&&n("")}catch(X){}if(!x||0>x.width)x={width:0,height:0}}else x=this.htmlGetBBox();t.isSVG&&(a=x.width,t=x.height,r&&"11px"===r.fontSize&&17===Math.round(t)&&(x.height=t=14),f&&(x.width=Math.abs(t*Math.sin(b))+Math.abs(a*Math.cos(b)),x.height=Math.abs(t*Math.cos(b))+Math.abs(a*Math.sin(b))));
if(E&&0<x.height){for(;250<y.length;)delete Q[y.shift()];Q[E]||y.push(E);Q[E]=x}}return x},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var x=this;x.animate({opacity:0},{duration:a||150,complete:function(){x.attr({y:-9999})}})},add:function(a){var x=this.renderer,f=this.element,t;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&x.buildText(this);this.added=!0;if(!a||
a.handleZ||this.zIndex)t=this.zIndexSetter();t||(a?a.element:x.box).appendChild(f);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var x=a.parentNode;x&&x.removeChild(a)},destroy:function(){var a=this,f=a.element||{},t=a.renderer.isSVG&&"SPAN"===f.nodeName&&a.parentGroup,b=f.ownerSVGElement;f.onclick=f.onmouseout=f.onmouseover=f.onmousemove=f.point=null;R(a);a.clipPath&&b&&(d(b.querySelectorAll("[clip-path]"),function(x){-1<x.getAttribute("clip-path").indexOf(a.clipPath.element.id+
")")&&x.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(b=0;b<a.stops.length;b++)a.stops[b]=a.stops[b].destroy();a.stops=null}a.safeRemoveChild(f);for(a.destroyShadows();t&&t.div&&0===t.div.childNodes.length;)f=t.parentGroup,a.safeRemoveChild(t.div),delete t.div,t=f;a.alignTo&&w(a.renderer.alignedObjects,a);I(a,function(x,f){delete a[f]});return null},shadow:function(a,f,t){var x=[],b,l,c=this.element,r,d,p,e;if(!a)this.destroyShadows();else if(!this.shadows){d=L(a.width,
3);p=(a.opacity||.15)/d;e=this.parentInverted?"(-1,-1)":"("+L(a.offsetX,1)+", "+L(a.offsetY,1)+")";for(b=1;b<=d;b++)l=c.cloneNode(0),r=2*d+1-2*b,m(l,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":p*b,"stroke-width":r,transform:"translate"+e,fill:"none"}),t&&(m(l,"height",Math.max(m(l,"height")-r,0)),l.cutHeight=r),f?f.element.appendChild(l):c.parentNode.insertBefore(l,c),x.push(l);this.shadows=x}return this},destroyShadows:function(){d(this.shadows||[],function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=L(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,f,t){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");t.setAttribute(f,a);this[f]=a},dashstyleSetter:function(a){var x,t=this["stroke-width"];"inherit"===t&&(t=1);if(a=a&&a.toLowerCase()){a=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(x=a.length;x--;)a[x]=f(a[x])*t;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,f,t){this[f]=
a;t.setAttribute(f,a)},titleSetter:function(a){var f=this.element.getElementsByTagName("title")[0];f||(f=n.createElementNS(this.SVG_NS,"title"),this.element.appendChild(f));f.firstChild&&f.removeChild(f.firstChild);f.appendChild(n.createTextNode(String(L(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,f,t){"string"===typeof a?t.setAttribute(f,a):a&&this.colorGradient(a,f,t)},
visibilitySetter:function(a,f,t){"inherit"===a?t.removeAttribute(f):t.setAttribute(f,a)},zIndexSetter:function(a,t){var x=this.renderer,b=this.parentGroup,l=(b||x).element||x.box,c,r=this.element,d;c=this.added;var p;u(a)&&(r.zIndex=a,a=+a,this[t]===a&&(c=!1),this[t]=a);if(c){(a=this.zIndex)&&b&&(b.handleZ=!0);t=l.childNodes;for(p=0;p<t.length&&!d;p++)b=t[p],c=b.zIndex,b!==r&&(f(c)>a||!u(a)&&u(c)||0>a&&!u(c)&&l!==x.box)&&(l.insertBefore(r,b),d=!0);d||l.appendChild(r)}return d},_defaultSetter:function(a,
f,t){t.setAttribute(f,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=function(a,f){this[f]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,f,t){this[f]=a;this.stroke&&this["stroke-width"]?(C.prototype.fillSetter.call(this,this.stroke,"stroke",t),t.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===f&&0===a&&this.hasStroke&&(t.removeAttribute("stroke"),this.hasStroke=!1)};A=a.SVGRenderer=function(){this.init.apply(this,arguments)};c(A.prototype,{Element:C,SVG_NS:N,init:function(a,f,t,b,c,r){var x;b=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(b));x=b.element;a.appendChild(x);-1===a.innerHTML.indexOf("xmlns")&&m(x,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=x;this.boxWrapper=b;this.alignedObjects=[];this.url=(l||
M)&&n.getElementsByTagName("base").length?P.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 5.0.12"));this.defs=this.createElement("defs").add();this.allowHTML=r;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,t,!1);var d;l&&a.getBoundingClientRect&&(f=function(){q(a,{left:0,top:0});d=a.getBoundingClientRect();
q(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},f(),this.unSubPixelFix=G(P,"resize",f))},getStyle:function(a){return this.style=c({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();e(this.gradients||{});this.gradients=
null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var f=new this.Element;f.init(this,a);return f},draw:E,getRadialAttr:function(a,f){return{cx:a[0]-a[2]/2+f.cx*a[2],cy:a[1]-a[2]/2+f.cy*a[2],r:f.r*a[2]}},getSpanWidth:function(a,f){var t=a.getBBox(!0).width;!J&&this.forExport&&(t=this.measureSpanWidth(f.firstChild.data,a.styles));return t},applyEllipsis:function(a,f,t,b){var x=this.getSpanWidth(a,f),l=x>b,x=t,c,r=0,d=
t.length,p=function(a){f.removeChild(f.firstChild);a&&f.appendChild(n.createTextNode(a))};if(l){for(;r<=d;)c=Math.ceil((r+d)/2),x=t.substring(0,c)+"\u2026",p(x),x=this.getSpanWidth(a,f),r===d?r=d+1:x>b?d=c-1:r=c;0===d&&p("")}return l},buildText:function(a){var t=a.element,x=this,l=x.forExport,c=L(a.textStr,"").toString(),r=-1!==c.indexOf("\x3c"),p=t.childNodes,e,h,E,y,w=m(t,"x"),B=a.styles,g=a.textWidth,I=B&&B.lineHeight,z=B&&B.textOutline,D=B&&"ellipsis"===B.textOverflow,k=B&&"nowrap"===B.whiteSpace,
u=B&&B.fontSize,R,H,v=p.length,B=g&&!a.added&&this.box,M=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:u||x.style.fontSize||12;return I?f(I):x.fontMetrics(b,a.getAttribute("style")?a:t).h};R=[c,D,k,I,z,u,g].join();if(R!==a.textCache){for(a.textCache=R;v--;)t.removeChild(p[v]);r||z||D||g||-1!==c.indexOf(" ")?(e=/<.*class="([^"]+)".*>/,h=/<.*style="([^"]+)".*>/,E=/<.*href="([^"]+)".*>/,B&&B.appendChild(t),c=r?c.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[c],c=b(c,function(a){return""!==a}),d(c,function(f,b){var c,r=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=f.split("|||");d(c,function(f){if(""!==f||1===c.length){var d={},p=n.createElementNS(x.SVG_NS,"tspan"),B,I;e.test(f)&&(B=f.match(e)[1],m(p,"class",B));h.test(f)&&(I=f.match(h)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),m(p,"style",I));E.test(f)&&!l&&(m(p,"onclick",'location.href\x3d"'+f.match(E)[1]+'"'),q(p,{cursor:"pointer"}));f=(f.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==f){p.appendChild(n.createTextNode(f));r?d.dx=0:b&&null!==w&&(d.x=w);m(p,d);t.appendChild(p);!r&&H&&(!J&&l&&q(p,{display:"block"}),m(p,"dy",M(p)));if(g){d=f.replace(/([^\^])-/g,"$1- ").split(" ");B=1<c.length||b||1<d.length&&!k;var z=[],Q,u=M(p),R=a.rotation;for(D&&(y=x.applyEllipsis(a,
p,f,g));!D&&B&&(d.length||z.length);)a.rotation=0,Q=x.getSpanWidth(a,p),f=Q>g,void 0===y&&(y=f),f&&1!==d.length?(p.removeChild(p.firstChild),z.unshift(d.pop())):(d=z,z=[],d.length&&!k&&(p=n.createElementNS(N,"tspan"),m(p,{dy:u,x:w}),I&&m(p,"style",I),t.appendChild(p)),Q>g&&(g=Q)),d.length&&p.appendChild(n.createTextNode(d.join(" ").replace(/- /g,"-")));a.rotation=R}r++}}});H=H||t.childNodes.length}),y&&a.attr("title",a.textStr),B&&B.removeChild(t),z&&a.applyTextOutline&&a.applyTextOutline(z)):t.appendChild(n.createTextNode(c.replace(/&lt;/g,
"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=k(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,f,t,b,l,r,d,e,h){var x=this.label(a,f,t,h,null,null,null,null,"button"),n=0;x.attr(p({padding:8,r:2},l));var E,y,w,J;l=p({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},l);E=l.style;delete l.style;r=p(l,{fill:"#e6e6e6"},r);y=r.style;delete r.style;d=p(l,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},
d);w=d.style;delete d.style;e=p(l,{style:{color:"#cccccc"}},e);J=e.style;delete e.style;G(x.element,B?"mouseover":"mouseenter",function(){3!==n&&x.setState(1)});G(x.element,B?"mouseout":"mouseleave",function(){3!==n&&x.setState(n)});x.setState=function(a){1!==a&&(x.state=n=a);x.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);x.attr([l,r,d,e][a||0]).css([E,y,w,J][a||0])};x.attr(l).css(c({cursor:"default"},
E));return x.on("click",function(a){3!==n&&b.call(x,a)})},crispLine:function(a,f){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-f%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+f%2/2);return a},path:function(a){var f={fill:"none"};H(a)?f.d=a:r(a)&&c(f,a);return this.createElement("path").attr(f)},circle:function(a,f,t){a=r(a)?a:{x:a,y:f,r:t};f=this.createElement("circle");f.xSetter=f.ySetter=function(a,f,t){t.setAttribute("c"+f,a)};return f.attr(a)},arc:function(a,f,t,b,l,c){r(a)?(b=a,f=b.y,t=b.r,a=b.x):
b={innerR:b,start:l,end:c};a=this.symbol("arc",a,f,t,t,b);a.r=t;return a},rect:function(a,f,t,b,l,c){l=r(a)?a.r:l;var x=this.createElement("rect");a=r(a)?a:void 0===a?{}:{x:a,y:f,width:Math.max(t,0),height:Math.max(b,0)};void 0!==c&&(a.strokeWidth=c,a=x.crisp(a));a.fill="none";l&&(a.r=l);x.rSetter=function(a,f,t){m(t,{rx:a,ry:a})};return x.attr(a)},setSize:function(a,f,t){var b=this.alignedObjects,l=b.length;this.width=a;this.height=f;for(this.boxWrapper.animate({width:a,height:f},{step:function(){this.attr({viewBox:"0 0 "+
this.attr("width")+" "+this.attr("height")})},duration:L(t,!0)?void 0:0});l--;)b[l].align()},g:function(a){var f=this.createElement("g");return a?f.attr({"class":"highcharts-"+a}):f},image:function(a,f,t,b,l){var x={preserveAspectRatio:"none"};1<arguments.length&&c(x,{x:f,y:t,width:b,height:l});x=this.createElement("image").attr(x);x.element.setAttributeNS?x.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):x.element.setAttribute("hc-svg-href",a);return x},symbol:function(a,f,t,b,l,
r){var x=this,p,e=/^url\((.*?)\)$/,h=e.test(a),E=!h&&(this.symbols[a]?a:"circle"),y=E&&this.symbols[E],B=u(f)&&y&&y.call(this.symbols,Math.round(f),Math.round(t),b,l,r),w,J;y?(p=this.path(B),p.attr("fill","none"),c(p,{symbolName:E,x:f,y:t,width:b,height:l}),r&&c(p,r)):h&&(w=a.match(e)[1],p=this.image(w),p.imgwidth=L(O[w]&&O[w].width,r&&r.width),p.imgheight=L(O[w]&&O[w].height,r&&r.height),J=function(){p.attr({width:p.width,height:p.height})},d(["width","height"],function(a){p[a+"Setter"]=function(a,
f){var t={},b=this["img"+f],l="width"===f?"translateX":"translateY";this[f]=a;u(b)&&(this.element&&this.element.setAttribute(f,b),this.alignByTranslate||(t[l]=((this[f]||0)-b)/2,this.attr(t)))}}),u(f)&&p.attr({x:f,y:t}),p.isImg=!0,u(p.imgwidth)&&u(p.imgheight)?J():(p.attr({width:0,height:0}),v("img",{onload:function(){var a=g[x.chartIndex];0===this.width&&(q(this,{position:"absolute",top:"-999em"}),n.body.appendChild(this));O[w]={width:this.width,height:this.height};p.imgwidth=this.width;p.imgheight=
this.height;p.element&&J();this.parentNode&&this.parentNode.removeChild(this);x.imgCount--;if(!x.imgCount&&a&&a.onload)a.onload()},src:w}),this.imgCount++));return p},symbols:{circle:function(a,f,t,b){return this.arc(a+t/2,f+b/2,t/2,b/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,f,t,b){return["M",a,f,"L",a+t,f,a+t,f+b,a,f+b,"Z"]},triangle:function(a,f,t,b){return["M",a+t/2,f,"L",a+t,f+b,a,f+b,"Z"]},"triangle-down":function(a,f,t,b){return["M",a,f,"L",a+t,f,a+t/2,f+b,"Z"]},diamond:function(a,
f,t,b){return["M",a+t/2,f,"L",a+t,f+b/2,a+t/2,f+b,a,f+b/2,"Z"]},arc:function(a,f,t,b,l){var c=l.start,x=l.r||t,r=l.r||b||t,p=l.end-.001;t=l.innerR;b=l.open;var d=Math.cos(c),e=Math.sin(c),h=Math.cos(p),p=Math.sin(p);l=l.end-c<Math.PI?0:1;x=["M",a+x*d,f+r*e,"A",x,r,0,l,1,a+x*h,f+r*p];u(t)&&x.push(b?"M":"L",a+t*h,f+t*p,"A",t,t,0,l,0,a+t*d,f+t*e);x.push(b?"":"Z");return x},callout:function(a,f,t,b,l){var c=Math.min(l&&l.r||0,t,b),r=c+6,p=l&&l.anchorX;l=l&&l.anchorY;var d;d=["M",a+c,f,"L",a+t-c,f,"C",
a+t,f,a+t,f,a+t,f+c,"L",a+t,f+b-c,"C",a+t,f+b,a+t,f+b,a+t-c,f+b,"L",a+c,f+b,"C",a,f+b,a,f+b,a,f+b-c,"L",a,f+c,"C",a,f,a,f,a+c,f];p&&p>t?l>f+r&&l<f+b-r?d.splice(13,3,"L",a+t,l-6,a+t+6,l,a+t,l+6,a+t,f+b-c):d.splice(13,3,"L",a+t,b/2,p,l,a+t,b/2,a+t,f+b-c):p&&0>p?l>f+r&&l<f+b-r?d.splice(33,3,"L",a,l+6,a-6,l,a,l-6,a,f+c):d.splice(33,3,"L",a,b/2,p,l,a,b/2,a,f+c):l&&l>b&&p>a+r&&p<a+t-r?d.splice(23,3,"L",p+6,f+b,p,f+b+6,p-6,f+b,a+c,f+b):l&&0>l&&p>a+r&&p<a+t-r&&d.splice(3,3,"L",p-6,f,p,f-6,p+6,f,t-c,f);return d}},
clipRect:function(f,t,b,l){var c=a.uniqueKey(),r=this.createElement("clipPath").attr({id:c}).add(this.defs);f=this.rect(f,t,b,l,0).add(r);f.id=c;f.clipPath=r;f.count=0;return f},text:function(a,f,t,b){var l=!J&&this.forExport,c={};if(b&&(this.allowHTML||!this.forExport))return this.html(a,f,t);c.x=Math.round(f||0);t&&(c.y=Math.round(t));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);l&&a.css({position:"absolute"});b||(a.xSetter=function(a,f,t){var b=t.getElementsByTagName("tspan"),l,c=
t.getAttribute(f),r;for(r=0;r<b.length;r++)l=b[r],l.getAttribute(f)===c&&l.setAttribute(f,a);t.setAttribute(f,a)});return a},fontMetrics:function(a,t){a=a||t&&t.style&&t.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?f(a):/em/.test(a)?parseFloat(a)*(t?this.fontMetrics(null,t.parentNode).f:16):12;t=24>a?a+3:Math.round(1.2*a);return{h:t,b:Math.round(.8*t),f:a}},rotCorr:function(a,f,t){var b=a;f&&t&&(b=Math.max(b*Math.cos(f*h),4));return{x:-a/3*Math.sin(f*h),y:b}},label:function(f,b,
l,r,e,h,n,E,y){var x=this,B=x.g("button"!==y&&"label"),w=B.text=x.text("",0,0,n).attr({zIndex:1}),J,g,I=0,z=3,D=0,q,k,m,R,H,v={},N,M,L=/^url\((.*?)\)$/.test(r),Q=L,V,U,O,P;y&&B.addClass("highcharts-"+y);Q=L;V=function(){return(N||0)%2/2};U=function(){var a=w.element.style,f={};g=(void 0===q||void 0===k||H)&&u(w.textStr)&&w.getBBox();B.width=(q||g.width||0)+2*z+D;B.height=(k||g.height||0)+2*z;M=z+x.fontMetrics(a&&a.fontSize,w).b;Q&&(J||(B.box=J=x.symbols[r]||L?x.symbol(r):x.rect(),J.addClass(("button"===
y?"":"highcharts-label-box")+(y?" highcharts-"+y+"-box":"")),J.add(B),a=V(),f.x=a,f.y=(E?-M:0)+a),f.width=Math.round(B.width),f.height=Math.round(B.height),J.attr(c(f,v)),v={})};O=function(){var a=D+z,f;f=E?0:M;u(q)&&g&&("center"===H||"right"===H)&&(a+={center:.5,right:1}[H]*(q-g.width));if(a!==w.x||f!==w.y)w.attr("x",a),void 0!==f&&w.attr("y",f);w.x=a;w.y=f};P=function(a,f){J?J.attr(a,f):v[a]=f};B.onAdd=function(){w.add(B);B.attr({text:f||0===f?f:"",x:b,y:l});J&&u(e)&&B.attr({anchorX:e,anchorY:h})};
B.widthSetter=function(f){q=a.isNumber(f)?f:null};B.heightSetter=function(a){k=a};B["text-alignSetter"]=function(a){H=a};B.paddingSetter=function(a){u(a)&&a!==z&&(z=B.padding=a,O())};B.paddingLeftSetter=function(a){u(a)&&a!==D&&(D=a,O())};B.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==I&&(I=a,g&&B.attr({x:m}))};B.textSetter=function(a){void 0!==a&&w.textSetter(a);U();O()};B["stroke-widthSetter"]=function(a,f){a&&(Q=!0);N=this["stroke-width"]=a;P(f,a)};B.strokeSetter=B.fillSetter=B.rSetter=
function(a,f){"fill"===f&&a&&(Q=!0);P(f,a)};B.anchorXSetter=function(a,f){e=B.anchorX=a;P(f,Math.round(a)-V()-m)};B.anchorYSetter=function(a,f){h=B.anchorY=a;P(f,a-R)};B.xSetter=function(a){B.x=a;I&&(a-=I*((q||g.width)+2*z));m=Math.round(a);B.attr("translateX",m)};B.ySetter=function(a){R=B.y=Math.round(a);B.attr("translateY",R)};var W=B.css;return c(B,{css:function(a){if(a){var f={};a=p(a);d(B.textProps,function(t){void 0!==a[t]&&(f[t]=a[t],delete a[t])});w.css(f)}return W.call(B,a)},getBBox:function(){return{width:g.width+
2*z,height:g.height+2*z,x:g.x-z,y:g.y-z}},shadow:function(a){a&&(U(),J&&J.shadow(a));return B},destroy:function(){t(B.element,"mouseenter");t(B.element,"mouseleave");w&&(w=w.destroy());J&&(J=J.destroy());C.prototype.destroy.call(B);B=x=U=O=P=null}})}});a.Renderer=A})(K);(function(a){var C=a.attr,A=a.createElement,G=a.css,F=a.defined,m=a.each,g=a.extend,k=a.isFirefox,q=a.isMS,v=a.isWebKit,u=a.pInt,h=a.SVGRenderer,e=a.win,n=a.wrap;g(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=
a&&"SPAN"===c.tagName&&a.width)delete a.width,this.textWidth=c,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=g(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,c=this.element,e=this.translateX||0,b=this.translateY||
0,h=this.x||0,n=this.y||0,g=this.textAlign||"left",l={left:0,center:.5,right:1}[g],B=this.styles;G(c,{marginLeft:e,marginTop:b});this.shadows&&m(this.shadows,function(a){G(a,{marginLeft:e+1,marginTop:b+1})});this.inverted&&m(c.childNodes,function(b){a.invertChild(b,c)});if("SPAN"===c.tagName){var r=this.rotation,z=u(this.textWidth),q=B&&B.whiteSpace,p=[r,g,c.innerHTML,this.textWidth,this.textAlign].join();p!==this.cTT&&(B=a.fontMetrics(c.style.fontSize).b,F(r)&&this.setSpanRotation(r,l,B),G(c,{width:"",
whiteSpace:q||"nowrap"}),c.offsetWidth>z&&/[ \-]/.test(c.textContent||c.innerText)&&G(c,{width:z+"px",display:"block",whiteSpace:q||"normal"}),this.getSpanCorrection(c.offsetWidth,B,l,r,g));G(c,{left:h+(this.xCorr||0)+"px",top:n+(this.yCorr||0)+"px"});v&&(B=c.offsetHeight);this.cTT=p}}else this.alignOnAdd=!0},setSpanRotation:function(a,c,h){var b={},d=q?"-ms-transform":v?"-webkit-transform":k?"MozTransform":e.opera?"-o-transform":"";b[d]=b.transform="rotate("+a+"deg)";b[d+(k?"Origin":"-origin")]=
b.transformOrigin=100*c+"% "+h+"px";G(this.element,b)},getSpanCorrection:function(a,c,e){this.xCorr=-a*e;this.yCorr=-c}});g(h.prototype,{html:function(a,c,e){var b=this.createElement("span"),d=b.element,h=b.renderer,w=h.isSVG,l=function(a,b){m(["opacity","visibility"],function(l){n(a,l+"Setter",function(a,l,c,r){a.call(this,l,c,r);b[c]=l})})};b.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;d.innerHTML=this.textStr=a;b.htmlUpdateTransform()};w&&l(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=
b.rotationSetter=function(a,l){"align"===l&&(l="textAlign");b[l]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(c),y:Math.round(e)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";b.css=b.htmlCss;w&&(b.add=function(a){var c,e=h.box.parentNode,B=[];if(this.parentGroup=a){if(c=a.div,!c){for(;a;)B.push(a),a=a.parentGroup;m(B.reverse(),function(a){var r,p=C(a.element,"class");p&&(p={className:p});c=a.div=a.div||A("div",p,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},c||e);r=c.style;g(a,{on:function(){b.on.apply({element:B[0].div},arguments);return a},translateXSetter:function(b,f){r.left=b+"px";a[f]=b;a.doTransform=!0},translateYSetter:function(b,f){r.top=b+"px";a[f]=b;a.doTransform=!0}});l(a,r)})}}else c=e;c.appendChild(d);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(K);(function(a){var C,A,G=
a.createElement,F=a.css,m=a.defined,g=a.deg2rad,k=a.discardElement,q=a.doc,v=a.each,u=a.erase,h=a.extend;C=a.extendClass;var e=a.isArray,n=a.isNumber,d=a.isObject,c=a.merge;A=a.noop;var w=a.pick,b=a.pInt,y=a.SVGElement,D=a.SVGRenderer,H=a.win;a.svg||(A={docMode8:q&&8===q.documentMode,init:function(a,b){var l=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],c=["position: ","absolute",";"],d="div"===b;("shape"===b||d)&&c.push("left:0;top:0;width:1px;height:1px;");c.push("visibility: ",d?"hidden":"visible");
l.push(' style\x3d"',c.join(""),'"/\x3e');b&&(l=d||"span"===b||"img"===b?l.join(""):a.prepVML(l),this.element=G(l));this.renderer=a},add:function(a){var b=this.renderer,l=this.element,c=b.box,d=a&&a.inverted,c=a?a.element||a:c;a&&(this.parentGroup=a);d&&b.invertChild(l,c);c.appendChild(l);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:y.prototype.htmlUpdateTransform,
setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*g),c=Math.sin(a*g);F(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-c,", M21\x3d",c,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var l=d?Math.cos(d*g):1,r=d?Math.sin(d*g):0,h=w(this.elemHeight,this.element.offsetHeight),n;this.xCorr=0>l&&-a;this.yCorr=0>r&&-h;n=0>l*r;this.xCorr+=r*b*(n?1-c:c);this.yCorr-=l*b*(d?n?c:1-c:1);e&&"left"!==
e&&(this.xCorr-=a*c*(0>l?-1:1),d&&(this.yCorr-=h*c*(0>r?-1:1)),F(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,l=[];b--;)n(a[b])?l[b]=Math.round(10*a[b])-5:"Z"===a[b]?l[b]="x":(l[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(l[b+5]===l[b+7]&&(l[b+7]+=a[b+7]>a[b+5]?1:-1),l[b+6]===l[b+8]&&(l[b+8]+=a[b+8]>a[b+6]?1:-1)));return l.join(" ")||"x"},clip:function(a){var b=this,l;a?(l=a.members,u(l,b),l.push(b),b.destroyClip=function(){u(l,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),
a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:y.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&k(a)},destroy:function(){this.destroyClip&&this.destroyClip();return y.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=H.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,c){var l;a=a.split(/[ ,]/);l=a.length;if(9===l||11===l)a[l-4]=a[l-2]=b(a[l-2])-10*c;return a.join(" ")},shadow:function(a,c,d){var l=[],r,p=this.element,
e=this.renderer,h,n=p.style,f,t=p.path,y,J,g,B;t&&"string"!==typeof t.value&&(t="x");J=t;if(a){g=w(a.width,3);B=(a.opacity||.15)/g;for(r=1;3>=r;r++)y=2*g+1-2*r,d&&(J=this.cutOffPath(t.value,y+.5)),f=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',y,'" filled\x3d"false" path\x3d"',J,'" coordsize\x3d"10 10" style\x3d"',p.style.cssText,'" /\x3e'],h=G(e.prepVML(f),null,{left:b(n.left)+w(a.offsetX,1),top:b(n.top)+w(a.offsetY,1)}),d&&(h.cutOff=y+1),f=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',
B*r,'"/\x3e'],G(e.prepVML(f),null,null,h),c?c.element.appendChild(h):p.parentNode.insertBefore(h,p),l.push(h);this.shadows=l}return this},updateShadows:A,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||G(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var l=this.shadows;
a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(l)for(c=l.length;c--;)l[c].path=l[c].cutOff?this.cutOffPath(a,l[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var l=c.nodeName;"SPAN"===l?c.style.color=a:"IMG"!==l&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){G(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,c)},opacitySetter:A,rotationSetter:function(a,b,c){c=
c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*g)+1)+"px";c.top=Math.round(Math.cos(a*g))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;n(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&v(this.shadows,function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":
0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}},A["stroke-opacitySetter"]=A["fill-opacitySetter"],a.VMLElement=A=C(y,A),A.prototype.ySetter=A.prototype.widthSetter=A.prototype.heightSetter=A.prototype.xSetter,A={Element:A,isIE8:-1<H.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){var l,
d;this.alignedObjects=[];l=this.createElement("div").css({position:"relative"});d=l.element;a.appendChild(l.element);this.isVML=!0;this.box=d;this.boxWrapper=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!q.namespaces.hcv){q.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{q.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(p){q.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,e){var l=this.createElement(),p=d(a);return h(l,{members:[],count:0,left:(p?a.x:a)+1,top:(p?a.y:b)+1,width:(p?a.width:c)-1,height:(p?a.height:e)-1,getCSS:function(a){var b=a.element,c=b.nodeName,f=a.inverted,t=this.top-("shape"===c?b.offsetTop:0),l=this.left,b=l+this.width,p=t+this.height,t={clip:"rect("+Math.round(f?l:t)+"px,"+Math.round(f?p:b)+"px,"+Math.round(f?b:p)+"px,"+Math.round(f?t:l)+"px)"};!f&&a.docMode8&&"DIV"===c&&
h(t,{width:b+"px",height:p+"px"});return t},updateClipping:function(){v(l.members,function(a){a.element&&a.css(l.getCSS(a))})}})},color:function(b,c,d,e){var l=this,p,r=/^rgba/,h,n,f="none";b&&b.linearGradient?n="gradient":b&&b.radialGradient&&(n="pattern");if(n){var t,y,w=b.linearGradient||b.radialGradient,g,q,B,x,D,z="";b=b.stops;var k,m=[],u=function(){h=['\x3cfill colors\x3d"'+m.join(",")+'" opacity\x3d"',B,'" o:opacity2\x3d"',q,'" type\x3d"',n,'" ',z,'focus\x3d"100%" method\x3d"any" /\x3e'];
G(l.prepVML(h),null,null,c)};g=b[0];k=b[b.length-1];0<g[0]&&b.unshift([0,g[1]]);1>k[0]&&b.push([1,k[1]]);v(b,function(f,b){r.test(f[1])?(p=a.color(f[1]),t=p.get("rgb"),y=p.get("a")):(t=f[1],y=1);m.push(100*f[0]+"% "+t);b?(B=y,x=t):(q=y,D=t)});if("fill"===d)if("gradient"===n)d=w.x1||w[0]||0,b=w.y1||w[1]||0,g=w.x2||w[2]||0,w=w.y2||w[3]||0,z='angle\x3d"'+(90-180*Math.atan((w-b)/(g-d))/Math.PI)+'"',u();else{var f=w.r,H=2*f,A=2*f,C=w.cx,F=w.cy,T=c.radialReference,K,f=function(){T&&(K=e.getBBox(),C+=(T[0]-
K.x)/K.width-.5,F+=(T[1]-K.y)/K.height-.5,H*=T[2]/K.width,A*=T[2]/K.height);z='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+H+","+A+'" origin\x3d"0.5,0.5" position\x3d"'+C+","+F+'" color2\x3d"'+D+'" ';u()};e.added?f():e.onAdd=f;f=x}else f=t}else r.test(b)&&"IMG"!==c.tagName?(p=a.color(b),e[d+"-opacitySetter"](p.get("a"),d,c),f=p.get("rgb")):(f=c.getElementsByTagName(d),f.length&&(f[0].opacity=1,f[0].type="solid"),f=b);return f},prepVML:function(a){var b=this.isIE8;a=a.join("");
b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:D.prototype.html,path:function(a){var b={coordsize:"10 10"};e(a)?b.d=a:d(a)&&h(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var l=this.symbol("circle");
d(a)&&(c=a.r,b=a.y,a=a.x);l.isCircle=!0;l.r=c;return l.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,d,e){var l=this.createElement("img").attr({src:a});1<arguments.length&&l.attr({x:b,y:c,width:d,height:e});return l},createElement:function(a){return"rect"===a?this.symbol(a):D.prototype.createElement.call(this,a)},invertChild:function(a,c){var d=this;c=c.style;var l="IMG"===a.tagName&&a.style;
F(a,{flip:"x",left:b(c.width)-(l?b(l.top):1),top:b(c.height)-(l?b(l.left):1),rotation:-90});v(a.childNodes,function(b){d.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var p=e.start,l=e.end,r=e.r||c||d;c=e.innerR;d=Math.cos(p);var h=Math.sin(p),f=Math.cos(l),t=Math.sin(l);if(0===l-p)return["x"];p=["wa",a-r,b-r,a+r,b+r,a+r*d,b+r*h,a+r*f,b+r*t];e.open&&!c&&p.push("e","M",a,b);p.push("at",a-c,b-c,a+c,b+c,a+c*f,b+c*t,a+c*d,b+c*h,"x","e");p.isArc=!0;return p},circle:function(a,b,c,d,e){e&&m(e.r)&&
(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return D.prototype.symbols[m(e)&&e.r?"callout":"square"].call(0,a,b,c,d,e)}}},a.VMLRenderer=C=function(){this.init.apply(this,arguments)},C.prototype=c(D.prototype,A),a.Renderer=C);D.prototype.measureSpanWidth=function(a,b){var c=q.createElement("span");a=q.createTextNode(a);c.appendChild(a);F(c,b);this.box.appendChild(c);b=c.offsetWidth;k(c);return b}})(K);(function(a){function C(){var g=
a.defaultOptions.global,k=q.moment;if(g.timezone){if(k)return function(a){return-k.tz(a,g.timezone).utcOffset()};a.error(25)}return g.useUTC&&g.getTimezoneOffset}function A(){var g=a.defaultOptions.global,u,h=g.useUTC,e=h?"getUTC":"get",n=h?"setUTC":"set";a.Date=u=g.Date||q.Date;u.hcTimezoneOffset=h&&g.timezoneOffset;u.hcGetTimezoneOffset=C();u.hcMakeTime=function(a,c,e,b,n,g){var d;h?(d=u.UTC.apply(0,arguments),d+=m(d)):d=(new u(a,c,k(e,1),k(b,0),k(n,0),k(g,0))).getTime();return d};F("Minutes Hours Day Date Month FullYear".split(" "),
function(a){u["hcGet"+a]=e+a});F("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){u["hcSet"+a]=n+a})}var G=a.color,F=a.each,m=a.getTZOffset,g=a.merge,k=a.pick,q=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},
itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,
animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(q){a.defaultOptions=g(!0,a.defaultOptions,q);A();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;A()})(K);
(function(a){var C=a.correctFloat,A=a.defined,G=a.destroyObjectProperties,F=a.isNumber,m=a.merge,g=a.pick,k=a.deg2rad;a.Tick=function(a,g,k,h){this.axis=a;this.pos=g;this.type=k||"";this.isNewLabel=this.isNew=!0;k||h||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,k=a.options,u=a.chart,h=a.categories,e=a.names,n=this.pos,d=k.labels,c=a.tickPositions,w=n===c[0],b=n===c[c.length-1],e=h?g(h[n],e[n],n):n,h=this.label,c=c.info,y;a.isDatetimeAxis&&c&&(y=k.dateTimeLabelFormats[c.higherRanks[n]||
c.unitName]);this.isFirst=w;this.isLast=b;k=a.labelFormatter.call({axis:a,chart:u,isFirst:w,isLast:b,dateTimeLabelFormat:y,value:a.isLog?C(a.lin2log(e)):e});A(h)?h&&h.attr({text:k}):(this.labelLength=(this.label=h=A(k)&&d.enabled?u.renderer.text(k,0,0,d.useHTML).css(m(d.style)).add(a.labelGroup):null)&&h.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var q=this.axis,m=a.x,h=q.chart.chartWidth,
e=q.chart.spacing,n=g(q.labelLeft,Math.min(q.pos,e[3])),e=g(q.labelRight,Math.max(q.pos+q.len,h-e[1])),d=this.label,c=this.rotation,w={left:0,center:.5,right:1}[q.labelAlign],b=d.getBBox().width,y=q.getSlotWidth(),D=y,H=1,l,B={};if(c)0>c&&m-w*b<n?l=Math.round(m/Math.cos(c*k)-n):0<c&&m+w*b>e&&(l=Math.round((h-m)/Math.cos(c*k)));else if(h=m+(1-w)*b,m-w*b<n?D=a.x+D*(1-w)-n:h>e&&(D=e-a.x+D*w,H=-1),D=Math.min(y,D),D<y&&"center"===q.labelAlign&&(a.x+=H*(y-D-w*(y-Math.min(b,D)))),b>D||q.autoRotation&&(d.styles||
{}).width)l=D;l&&(B.width=l,(q.options.labels.style||{}).textOverflow||(B.textOverflow="ellipsis"),d.css(B))},getPosition:function(a,g,k,h){var e=this.axis,n=e.chart,d=h&&n.oldChartHeight||n.chartHeight;return{x:a?e.translate(g+k,null,null,h)+e.transB:e.left+e.offset+(e.opposite?(h&&n.oldChartWidth||n.chartWidth)-e.right-e.left:0),y:a?d-e.bottom+e.offset-(e.opposite?e.height:0):d-e.translate(g+k,null,null,h)-e.transB}},getLabelPosition:function(a,g,m,h,e,n,d,c){var w=this.axis,b=w.transA,y=w.reversed,
D=w.staggerLines,q=w.tickRotCorr||{x:0,y:0},l=e.y;A(l)||(l=0===w.side?m.rotation?-8:-m.getBBox().height:2===w.side?q.y+8:Math.cos(m.rotation*k)*(q.y-m.getBBox(!1,0).height/2));a=a+e.x+q.x-(n&&h?n*b*(y?-1:1):0);g=g+l-(n&&!h?n*b*(y?1:-1):0);D&&(m=d/(c||1)%D,w.opposite&&(m=D-m-1),g+=w.labelOffset/D*m);return{x:a,y:Math.round(g)}},getMarkPath:function(a,g,k,h,e,n){return n.crispLine(["M",a,g,"L",a+(e?0:-k),g+(e?k:0)],h)},renderGridLine:function(a,g,k){var h=this.axis,e=h.options,n=this.gridLine,d={},
c=this.pos,w=this.type,b=h.tickmarkOffset,y=h.chart.renderer,D=w?w+"Grid":"grid",q=e[D+"LineWidth"],l=e[D+"LineColor"],e=e[D+"LineDashStyle"];n||(d.stroke=l,d["stroke-width"]=q,e&&(d.dashstyle=e),w||(d.zIndex=1),a&&(d.opacity=0),this.gridLine=n=y.path().attr(d).addClass("highcharts-"+(w?w+"-":"")+"grid-line").add(h.gridGroup));if(!a&&n&&(a=h.getPlotLinePath(c+b,n.strokeWidth()*k,a,!0)))n[this.isNew?"attr":"animate"]({d:a,opacity:g})},renderMark:function(a,k,m){var h=this.axis,e=h.options,n=h.chart.renderer,
d=this.type,c=d?d+"Tick":"tick",w=h.tickSize(c),b=this.mark,y=!b,D=a.x;a=a.y;var q=g(e[c+"Width"],!d&&h.isXAxis?1:0),e=e[c+"Color"];w&&(h.opposite&&(w[0]=-w[0]),y&&(this.mark=b=n.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(h.axisGroup),b.attr({stroke:e,"stroke-width":q})),b[y?"attr":"animate"]({d:this.getMarkPath(D,a,w[0],b.strokeWidth()*m,h.horiz,n),opacity:k}))},renderLabel:function(a,k,m,h){var e=this.axis,n=e.horiz,d=e.options,c=this.label,w=d.labels,b=w.step,y=e.tickmarkOffset,D=!0,
q=a.x;a=a.y;c&&F(q)&&(c.xy=a=this.getLabelPosition(q,a,c,n,w,y,h,b),this.isFirst&&!this.isLast&&!g(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!g(d.showLastLabel,1)?D=!1:!n||e.isRadial||w.step||w.rotation||k||0===m||this.handleOverflow(a),b&&h%b&&(D=!1),D&&F(a.y)?(a.opacity=m,c[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(c.attr("y",-9999),this.isNewLabel=!0),this.isNew=!1)},render:function(a,k,m){var h=this.axis,e=h.horiz,n=this.getPosition(e,this.pos,h.tickmarkOffset,k),d=n.x,
c=n.y,h=e&&d===h.pos+h.len||!e&&c===h.pos?-1:1;m=g(m,1);this.isActive=!0;this.renderGridLine(k,m,h);this.renderMark(n,m,h);this.renderLabel(n,k,m,a)},destroy:function(){G(this,this.axis)}}})(K);var S=function(a){var C=a.addEvent,A=a.animObject,G=a.arrayMax,F=a.arrayMin,m=a.color,g=a.correctFloat,k=a.defaultOptions,q=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,h=a.each,e=a.extend,n=a.fireEvent,d=a.format,c=a.getMagnitude,w=a.grep,b=a.inArray,y=a.isArray,D=a.isNumber,H=a.isString,l=a.merge,B=
a.normalizeTickInterval,r=a.objectEach,z=a.pick,M=a.removeEvent,p=a.splat,E=a.syncTimeout,I=a.Tick,L=function(){this.init.apply(this,arguments)};a.extend(L.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,
startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,
formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,t){var f=t.isX,c=this;c.chart=a;c.horiz=
a.inverted&&!c.isZAxis?!f:f;c.isXAxis=f;c.coll=c.coll||(f?"xAxis":"yAxis");c.opposite=t.opposite;c.side=t.side||(c.horiz?c.opposite?0:2:c.opposite?1:3);c.setOptions(t);var d=this.options,e=d.type;c.labelFormatter=d.labels.formatter||c.defaultLabelFormatter;c.userOptions=t;c.minPixelPadding=0;c.reversed=d.reversed;c.visible=!1!==d.visible;c.zoomEnabled=!1!==d.zoomEnabled;c.hasNames="category"===e||!0===d.categories;c.categories=d.categories||c.hasNames;c.names=c.names||[];c.plotLinesAndBandsGroups=
{};c.isLog="logarithmic"===e;c.isDatetimeAxis="datetime"===e;c.positiveValuesOnly=c.isLog&&!c.allowNegativeLog;c.isLinked=q(d.linkedTo);c.ticks={};c.labelEdge=[];c.minorTicks={};c.plotLinesAndBands=[];c.alternateBands={};c.len=0;c.minRange=c.userMinRange=d.minRange||d.maxZoom;c.range=d.range;c.offset=d.offset||0;c.stacks={};c.oldStacks={};c.stacksTouched=0;c.max=null;c.min=null;c.crosshair=z(d.crosshair,p(a.options.tooltip.crosshairs)[f?0:1],!1);t=c.options.events;-1===b(c,a.axes)&&(f?a.axes.splice(a.xAxis.length,
0,c):a.axes.push(c),a[c.coll].push(c));c.series=c.series||[];a.inverted&&!c.isZAxis&&f&&void 0===c.reversed&&(c.reversed=!0);r(t,function(a,f){C(c,f,a)});c.lin2log=d.linearToLogConverter||c.lin2log;c.isLog&&(c.val2lin=c.log2lin,c.lin2val=c.lin2log)},setOptions:function(a){this.options=l(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],l(k[this.coll],a))},
defaultLabelFormatter:function(){var f=this.axis,b=this.value,c=f.categories,p=this.dateTimeLabelFormat,e=k.lang,l=e.numericSymbols,e=e.numericSymbolMagnitude||1E3,r=l&&l.length,x,h=f.options.labels.format,f=f.isLog?Math.abs(b):f.tickInterval;if(h)x=d(h,this);else if(c)x=b;else if(p)x=a.dateFormat(p,b);else if(r&&1E3<=f)for(;r--&&void 0===x;)c=Math.pow(e,r+1),f>=c&&0===10*b%c&&null!==l[r]&&0!==b&&(x=a.numberFormat(b/c,-1)+l[r]);void 0===x&&(x=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,
-1,void 0,""));return x},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();h(a.series,function(f){if(f.visible||!b.options.chart.ignoreHiddenSeries){var c=f.options,t=c.threshold,d;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=t&&(t=null);if(a.isXAxis)c=f.xData,c.length&&(f=F(c),D(f)||f instanceof Date||(c=w(c,function(a){return D(a)}),f=F(c)),a.dataMin=Math.min(z(a.dataMin,c[0]),
f),a.dataMax=Math.max(z(a.dataMax,c[0]),G(c)));else if(f.getExtremes(),d=f.dataMax,f=f.dataMin,q(f)&&q(d)&&(a.dataMin=Math.min(z(a.dataMin,f),f),a.dataMax=Math.max(z(a.dataMax,d),d)),q(t)&&(a.threshold=t),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,d,p,e){var f=this.linkedParent||this,t=1,l=0,r=d?f.oldTransA:f.transA;d=d?f.oldMin:f.min;var h=f.minPixelPadding;p=(f.isOrdinal||f.isBroken||f.isLog&&p)&&f.lin2val;r||(r=f.transA);c&&(t*=-1,l=f.len);f.reversed&&
(t*=-1,l-=t*(f.sector||f.len));b?(a=(a*t+l-h)/r+d,p&&(a=f.lin2val(a))):(p&&(a=f.val2lin(a)),a=t*(a-d)*r+l+t*h+(D(e)?r*e:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,p){var f=this.chart,t=this.left,e=this.top,l,r,h=c&&f.oldChartHeight||f.chartHeight,n=c&&f.oldChartWidth||f.chartWidth,w;l=this.transB;var g=function(a,f,b){if(a<
f||a>b)d?a=Math.min(Math.max(f,a),b):w=!0;return a};p=z(p,this.translate(a,null,null,c));a=c=Math.round(p+l);l=r=Math.round(h-p-l);D(p)?this.horiz?(l=e,r=h-this.bottom,a=c=g(a,t,t+this.width)):(a=t,c=n-this.right,l=r=g(l,e,e+this.height)):w=!0;return w&&!d?null:f.renderer.crispLine(["M",a,l,"L",c,r],b||1)},getLinearTickPositions:function(a,b,c){var f,t=g(Math.floor(b/a)*a);c=g(Math.ceil(c/a)*a);var d=[];if(this.single)return[b];for(b=t;b<=c;){d.push(b);b=g(b+a);if(b===f)break;f=b}return d},getMinorTickPositions:function(){var a=
this,b=a.options,c=a.tickPositions,d=a.minorTickInterval,p=[],e=a.pointRangePadding||0,l=a.min-e,e=a.max+e,x=e-l;if(x&&x/d<a.len/3)if(a.isLog)h(this.paddedTicks,function(b,f,c){f&&p.push.apply(p,a.getLogTickPositions(d,c[f-1],c[f],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)p=p.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),l,e,b.startOfWeek));else for(b=l+(c[0]-l)%d;b<=e&&b!==p[0];b+=d)p.push(b);0!==p.length&&a.trimTicks(p);return p},adjustForMinRange:function(){var a=this.options,
b=this.min,c=this.max,d,p,e,l,x,r,n,w;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(q(a.min)||q(a.max)?this.minRange=null:(h(this.series,function(a){r=a.xData;for(l=n=a.xIncrement?1:r.length-1;0<l;l--)if(x=r[l]-r[l-1],void 0===e||x<e)e=x}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));c-b<this.minRange&&(p=this.dataMax-this.dataMin>=this.minRange,w=this.minRange,d=(w-c+b)/2,d=[b-d,z(a.min,b-d)],p&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(d),c=[b+w,z(a.max,b+w)],
p&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=F(c),c-b<w&&(d[0]=c-w,d[1]=z(a.min,c-w),b=G(d)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:h(this.series,function(b){var f=b.closestPointRange,c=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&q(f)&&c&&(a=q(a)?Math.min(a,f):f)});return a},nameToX:function(a){var f=y(this.categories),c=f?this.categories:this.names,d=a.options.x,p;a.series.requireSorting=!1;q(d)||(d=!1===this.options.uniqueNames?
a.series.autoIncrement():b(a.name,c));-1===d?f||(p=c.length):p=d;void 0!==p&&(this.names[p]=a.name);return p},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,h(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();h(b.points,function(f,c){var t;f.options&&(t=a.nameToX(f),void 0!==t&&t!==f.x&&(f.x=t,b.xData[c]=t))})}))},setAxisTranslation:function(a){var b=this,f=b.max-b.min,c=b.axisPointRange||
0,d,p=0,e=0,l=b.linkedParent,r=!!b.categories,n=b.transA,w=b.isXAxis;if(w||r||c)d=b.getClosest(),l?(p=l.minPointOffset,e=l.pointRangePadding):h(b.series,function(a){var f=r?1:w?z(a.options.pointRange,d,0):b.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,f);b.single||(p=Math.max(p,H(a)?0:f/2),e=Math.max(e,"on"===a?0:f))}),l=b.ordinalSlope&&d?b.ordinalSlope/d:1,b.minPointOffset=p*=l,b.pointRangePadding=e*=l,b.pointRange=Math.min(c,f),w&&(b.closestPointRange=d);a&&(b.oldTransA=n);b.translationSlope=
b.transA=n=b.options.staticScale||b.len/(f+e||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=n*p},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var f=this,d=f.chart,p=f.options,e=f.isLog,l=f.log2lin,r=f.isDatetimeAxis,x=f.isXAxis,w=f.isLinked,y=p.maxPadding,E=p.minPadding,k=p.tickInterval,I=p.tickPixelInterval,m=f.categories,H=f.threshold,u=f.softThreshold,L,v,M,A;r||m||w||this.getTickAmount();M=z(f.userMin,p.min);A=z(f.userMax,p.max);w?(f.linkedParent=d[f.coll][p.linkedTo],
d=f.linkedParent.getExtremes(),f.min=z(d.min,d.dataMin),f.max=z(d.max,d.dataMax),p.type!==f.linkedParent.options.type&&a.error(11,1)):(!u&&q(H)&&(f.dataMin>=H?(L=H,E=0):f.dataMax<=H&&(v=H,y=0)),f.min=z(M,L,f.dataMin),f.max=z(A,v,f.dataMax));e&&(f.positiveValuesOnly&&!b&&0>=Math.min(f.min,z(f.dataMin,f.min))&&a.error(10,1),f.min=g(l(f.min),15),f.max=g(l(f.max),15));f.range&&q(f.max)&&(f.userMin=f.min=M=Math.max(f.min,f.minFromRange()),f.userMax=A=f.max,f.range=null);n(f,"foundExtremes");f.beforePadding&&
f.beforePadding();f.adjustForMinRange();!(m||f.axisPointRange||f.usePercentage||w)&&q(f.min)&&q(f.max)&&(l=f.max-f.min)&&(!q(M)&&E&&(f.min-=l*E),!q(A)&&y&&(f.max+=l*y));D(p.softMin)&&(f.min=Math.min(f.min,p.softMin));D(p.softMax)&&(f.max=Math.max(f.max,p.softMax));D(p.floor)&&(f.min=Math.max(f.min,p.floor));D(p.ceiling)&&(f.max=Math.min(f.max,p.ceiling));u&&q(f.dataMin)&&(H=H||0,!q(M)&&f.min<H&&f.dataMin>=H?f.min=H:!q(A)&&f.max>H&&f.dataMax<=H&&(f.max=H));f.tickInterval=f.min===f.max||void 0===f.min||
void 0===f.max?1:w&&!k&&I===f.linkedParent.options.tickPixelInterval?k=f.linkedParent.tickInterval:z(k,this.tickAmount?(f.max-f.min)/Math.max(this.tickAmount-1,1):void 0,m?1:(f.max-f.min)*I/Math.max(f.len,I));x&&!b&&h(f.series,function(a){a.processData(f.min!==f.oldMin||f.max!==f.oldMax)});f.setAxisTranslation(!0);f.beforeSetTickPositions&&f.beforeSetTickPositions();f.postProcessTickInterval&&(f.tickInterval=f.postProcessTickInterval(f.tickInterval));f.pointRange&&!k&&(f.tickInterval=Math.max(f.pointRange,
f.tickInterval));b=z(p.minTickInterval,f.isDatetimeAxis&&f.closestPointRange);!k&&f.tickInterval<b&&(f.tickInterval=b);r||e||k||(f.tickInterval=B(f.tickInterval,null,c(f.tickInterval),z(p.allowDecimals,!(.5<f.tickInterval&&5>f.tickInterval&&1E3<f.max&&9999>f.max)),!!this.tickAmount));this.tickAmount||(f.tickInterval=f.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,p=a.startOnTick,l=a.endOnTick;this.tickmarkOffset=this.categories&&
"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=this.min===this.max&&q(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,
!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max])))&&(this.tickPositions=b=d);this.paddedTicks=b.slice(0);this.trimTicks(b,p,l);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),c||d||this.adjustTickAmount())},trimTicks:function(a,b,c){var f=a[0],d=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&
-Infinity!==f)this.min=f;else for(;this.min-p>a[0];)a.shift();if(c)this.max=d;else for(;this.max+p<a[a.length-1];)a.pop();0===a.length&&q(f)&&a.push((d+f)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||this.isLog||h(this.chart[this.coll],function(f){var c=f.options,c=[f.horiz?c.left:c.top,c.width,c.height,c.pane].join();f.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=
a.tickPixelInterval;!q(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,p=b&&b.length;if(p<c){for(;b.length<c;)b.push(g(b[b.length-1]+a));this.transA*=(p-1)/(c-1);this.max=b[b.length-1]}else p>c&&(this.tickInterval*=2,this.setTickPositions());
if(q(d)){for(a=c=b.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;h(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=
!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,p){var f=this,l=f.chart;c=z(c,!0);h(f.series,function(a){delete a.kdTree});p=e(p,{min:a,max:b});n(f,"setExtremes",p,function(){f.userMin=a;f.userMax=b;f.eventArgs=p;c&&l.redraw(d)})},zoom:function(a,b){var f=this.dataMin,c=this.dataMax,d=this.options,
p=Math.min(f,z(d.min,f)),d=Math.max(c,z(d.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(q(f)&&(a<p&&(a=p),a>d&&(a=d)),q(c)&&(b<p&&(b=p),b>d&&(b=d))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsets||[0,0,0,0],d=this.horiz,p=z(b.width,a.plotWidth-c[3]+c[1]),l=z(b.height,a.plotHeight-c[0]+c[2]),e=z(b.top,a.plotTop+c[0]),b=z(b.left,a.plotLeft+c[3]),c=/%$/;c.test(l)&&(l=
Math.round(parseFloat(l)/100*a.plotHeight));c.test(e)&&(e=Math.round(parseFloat(e)/100*a.plotHeight+a.plotTop));this.left=b;this.top=e;this.width=p;this.height=l;this.bottom=a.chartHeight-l-e;this.right=a.chartWidth-p-b;this.len=Math.max(d?p:l,0);this.pos=d?b:e},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?g(b(this.min)):this.min,max:a?g(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=
this.isLog,f=this.lin2log,c=b?f(this.min):this.min,b=b?f(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(z(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,f=b[a+"Length"],c=z(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&f)return"inside"===b[a+"Position"]&&(f=-f),[f,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,p=this.len/(((this.categories?1:0)+this.max-this.min)/c),l,e=a.rotation,r=this.labelMetrics(),n,w=Number.MAX_VALUE,g,y=function(a){a/=p||1;a=1<a?Math.ceil(a):1;return a*c};b?(g=!a.staggerLines&&!a.step&&(q(e)?[e]:p<z(a.autoRotationLimit,80)&&a.autoRotation))&&h(g,function(a){var b;if(a===e||a&&-90<=a&&90>=a)n=y(Math.abs(r.h/Math.sin(v*a))),b=n+
Math.abs(a/360),b<w&&(w=b,l=a,d=n)}):a.step||(d=y(r.h));this.autoRotation=g;this.labelRotation=z(l,e);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),p=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/d||!b&&(p&&p-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,p=this.options.labels,e=this.horiz,
r=this.getSlotWidth(),x=Math.max(1,Math.round(r-2*(p.padding||5))),n={},w=this.labelMetrics(),g=p.style&&p.style.textOverflow,y,E=0,k,I;H(p.rotation)||(n.rotation=p.rotation||0);h(c,function(a){(a=d[a])&&a.labelLength>E&&(E=a.labelLength)});this.maxLabelLength=E;if(this.autoRotation)E>x&&E>w.h?n.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(y={width:x+"px"},!g))for(y.textOverflow="clip",k=c.length;!e&&k--;)if(I=c[k],x=d[I].label)x.styles&&"ellipsis"===x.styles.textOverflow?x.css({textOverflow:"clip"}):
d[I].labelLength>r&&x.css({width:r+"px"}),x.getBBox().height>this.len/c.length-(w.h-w.f)&&(x.specCss={textOverflow:"ellipsis"});n.rotation&&(y={width:(E>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},g||(y.textOverflow="ellipsis"));if(this.labelAlign=p.align||this.autoLabelAlign(this.labelRotation))n.align=this.labelAlign;h(c,function(a){var b=(a=d[a])&&a.label;b&&(b.attr(n),y&&b.css(l(y,b.specCss)),delete b.specCss,a.rotation=n.rotation)});this.tickRotCorr=b.rotCorr(w.b,this.labelRotation||
0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,f=this.horiz,c=this.opposite,d=this.options.title,p;this.axisTitle||((p=d.textAlign)||(p=(f?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[d.align]),this.axisTitle=b.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:p}).addClass("highcharts-axis-title").css(d.style).add(this.axisGroup),
this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,p=a.tickPositions,l=a.ticks,e=a.horiz,x=a.side,n=b.inverted&&!a.isZAxis?[1,0,3,2][x]:x,w,g,y=0,E,k=0,I=d.title,D=d.labels,m=0,B=b.axisOffset,b=b.clipOffset,H=[-1,1,1,-1][x],u=d.className,L=a.axisParent,v=this.tickSize("tick");w=a.hasData();a.showAxis=g=w||z(d.showEmpty,!0);a.staggerLines=
a.horiz&&D.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(u||"")).add(L),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(u||"")).add(L),a.labelGroup=c.g("axis-labels").attr({zIndex:D.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(u||"")).add(L));w||a.isLinked?(h(p,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),!1===D.reserveSpace||
0!==x&&2!==x&&{1:"left",3:"right"}[x]!==a.labelAlign&&"center"!==a.labelAlign||h(p,function(a){m=Math.max(l[a].getLabelSize(),m)}),a.staggerLines&&(m*=a.staggerLines,a.labelOffset=m*(a.opposite?-1:1))):r(l,function(a,b){a.destroy();delete l[b]});I&&I.text&&!1!==I.enabled&&(a.addTitle(g),g&&!1!==I.reserveSpace&&(a.titleOffset=y=a.axisTitle.getBBox()[e?"height":"width"],E=I.offset,k=q(E)?0:z(I.margin,e?5:10)));a.renderLine();a.offset=H*z(d.offset,B[x]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===x?
-a.labelMetrics().h:2===x?a.tickRotCorr.y:0;k=Math.abs(m)+k;m&&(k=k-c+H*(e?z(D.y,a.tickRotCorr.y+8*H):D.x));a.axisTitleMargin=z(E,k);B[x]=Math.max(B[x],a.axisTitleMargin+y+H*a.offset,k,w&&p.length&&v?v[0]+H*a.offset:0);p=2*Math.floor(a.axisLine.strokeWidth()/2);0<d.offset&&(p-=2*d.offset);b[n]=Math.max(b[n]||p,p)},getLinePath:function(a){var b=this.chart,c=this.opposite,f=this.offset,d=this.horiz,p=this.left+(c?this.width:0)+f,f=b.chartHeight-this.bottom-(c?this.height:0)+f;c&&(a*=-1);return b.renderer.crispLine(["M",
d?this.left:p,d?f:this.top,"L",d?b.chartWidth-this.right:p,d?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,p=this.options.title,l=a?b:c,e=this.opposite,r=this.offset,h=p.x||0,n=p.y||0,w=this.chart.renderer.fontMetrics(p.style&&
p.style.fontSize,this.axisTitle).f,d={low:l+(a?0:d),middle:l+d/2,high:l+(a?d:0)}[p.align],b=(a?c+this.height:b)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+(2===this.side?w:0);return{x:a?d+h:b+(e?this.width:0)+r+h,y:a?b+n-(e?this.height:0)+r:d+n}},renderMinorTick:function(a){var b=this.chart.hasRendered&&D(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new I(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,f=this.ticks,d=this.chart.hasRendered&&
D(this.oldMin);if(!c||a>=this.min&&a<=this.max)f[a]||(f[a]=new I(this,a)),d&&f[a].isNew&&f[a].render(b,!0,.1),f[a].render(b)},render:function(){var b=this,c=b.chart,d=b.options,p=b.isLog,l=b.lin2log,e=b.isLinked,n=b.tickPositions,x=b.axisTitle,w=b.ticks,g=b.minorTicks,y=b.alternateBands,k=d.stackLabels,m=d.alternateGridColor,q=b.tickmarkOffset,z=b.axisLine,B=b.showAxis,H=A(c.renderer.globalAnimation),u,L;b.labelEdge.length=0;b.overlap=!1;h([w,g,y],function(a){r(a,function(a){a.isActive=!1})});if(b.hasData()||
e)b.minorTickInterval&&!b.categories&&h(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),n.length&&(h(n,function(a,c){b.renderTick(a,c)}),q&&(0===b.min||b.single)&&(w[-1]||(w[-1]=new I(b,-1,null,!0)),w[-1].render(-1))),m&&h(n,function(f,d){L=void 0!==n[d+1]?n[d+1]+q:b.max-q;0===d%2&&f<b.max&&L<=b.max+(c.polar?-q:q)&&(y[f]||(y[f]=new a.PlotLineOrBand(b)),u=f+q,y[f].options={from:p?l(u):u,to:p?l(L):L,color:m},y[f].render(),y[f].isActive=!0)}),b._addedPlotLB||(h((d.plotLines||[]).concat(d.plotBands||
[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);h([w,g,y],function(a){var b,f=[],d=H.duration;r(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,f.push(b))});E(function(){for(b=f.length;b--;)a[f[b]]&&!a[f[b]].isActive&&(a[f[b]].destroy(),delete a[f[b]])},a!==y&&c.hasRendered&&d?d:0)});z&&(z[z.isPlaced?"animate":"attr"]({d:this.getLinePath(z.strokeWidth())}),z.isPlaced=!0,z[B?"show":"hide"](!0));x&&B&&(d=b.getTitlePosition(),D(d.y)?(x[x.isNew?"attr":"animate"](d),x.isNew=!1):
(x.attr("y",-9999),x.isNew=!0));k&&k.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),h(this.plotLinesAndBands,function(a){a.render()}));h(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,f=c.stacks,d=c.plotLinesAndBands,p;a||M(c);r(f,function(a,b){u(a);f[b]=null});h([c.ticks,c.minorTicks,c.alternateBands],function(a){u(a)});if(d)for(a=d.length;a--;)d[a].destroy();h("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
function(a){c[a]&&(c[a]=c[a].destroy())});for(p in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[p]=c.plotLinesAndBandsGroups[p].destroy();r(c,function(a,f){-1===b(f,c.keepProps)&&delete c[f]})},drawCrosshair:function(a,b){var c,f=this.crosshair,d=z(f.snap,!0),p,l=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(q(b)||!d)?(d?q(b)&&(p=this.isXAxis?b.plotX:this.len-b.plotY):p=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),q(p)&&(c=this.getPlotLinePath(b&&(this.isXAxis?
b.x:z(b.stackY,b.y)),null,null,null,p)||null),q(c)?(b=this.categories&&!this.isRadial,l||(this.cross=l=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+f.className).attr({zIndex:z(f.zIndex,2)}).add(),l.attr({stroke:f.color||(b?m("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":z(f.width,1)}),f.dashStyle&&l.attr({dashstyle:f.dashStyle})),l.show().attr({d:c}),b&&!f.width&&l.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):
this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=L}(K);(function(a){var C=a.Axis,A=a.Date,G=a.dateFormat,F=a.defaultOptions,m=a.defined,g=a.each,k=a.extend,q=a.getMagnitude,v=a.getTZOffset,u=a.normalizeTickInterval,h=a.pick,e=a.timeUnits;C.prototype.getTimeTicks=function(a,d,c,w){var b=[],n={},D=F.global.useUTC,q,l=new A(d-Math.max(v(d),v(c))),B=A.hcMakeTime,r=a.unitRange,z=a.count,u;if(m(d)){l[A.hcSetMilliseconds](r>=e.second?0:z*Math.floor(l.getMilliseconds()/
z));if(r>=e.second)l[A.hcSetSeconds](r>=e.minute?0:z*Math.floor(l.getSeconds()/z));if(r>=e.minute)l[A.hcSetMinutes](r>=e.hour?0:z*Math.floor(l[A.hcGetMinutes]()/z));if(r>=e.hour)l[A.hcSetHours](r>=e.day?0:z*Math.floor(l[A.hcGetHours]()/z));if(r>=e.day)l[A.hcSetDate](r>=e.month?1:z*Math.floor(l[A.hcGetDate]()/z));r>=e.month&&(l[A.hcSetMonth](r>=e.year?0:z*Math.floor(l[A.hcGetMonth]()/z)),q=l[A.hcGetFullYear]());if(r>=e.year)l[A.hcSetFullYear](q-q%z);if(r===e.week)l[A.hcSetDate](l[A.hcGetDate]()-l[A.hcGetDay]()+
h(w,1));q=l[A.hcGetFullYear]();w=l[A.hcGetMonth]();var p=l[A.hcGetDate](),E=l[A.hcGetHours]();if(A.hcTimezoneOffset||A.hcGetTimezoneOffset)u=(!D||!!A.hcGetTimezoneOffset)&&(c-d>4*e.month||v(d)!==v(c)),l=l.getTime(),l=new A(l+v(l));D=l.getTime();for(d=1;D<c;)b.push(D),D=r===e.year?B(q+d*z,0):r===e.month?B(q,w+d*z):!u||r!==e.day&&r!==e.week?u&&r===e.hour?B(q,w,p,E+d*z):D+r*z:B(q,w,p+d*z*(r===e.day?1:7)),d++;b.push(D);r<=e.hour&&1E4>b.length&&g(b,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&
(n[a]="day")})}b.info=k(a,{higherRanks:n,totalRange:r*z});return b};C.prototype.normalizeTimeTickInterval=function(a,d){var c=d||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];d=c[c.length-1];var h=e[d[0]],b=d[1],n;for(n=0;n<c.length&&!(d=c[n],h=e[d[0]],b=d[1],c[n+1]&&a<=(h*b[b.length-1]+e[c[n+1][0]])/2);n++);h===e.year&&a<5*h&&(b=[1,2,5]);a=u(a/h,b,
"year"===d[0]?Math.max(q(a/h),1):1);return{unitRange:h,count:a,unitName:d[0]}}})(K);(function(a){var C=a.Axis,A=a.getMagnitude,G=a.map,F=a.normalizeTickInterval,m=a.pick;C.prototype.getLogTickPositions=function(a,k,q,v){var g=this.options,h=this.len,e=this.lin2log,n=this.log2lin,d=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),d=this.getLinearTickPositions(a,k,q);else if(.08<=a)for(var h=Math.floor(k),c,w,b,y,D,g=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];h<q+1&&!D;h++)for(w=
g.length,c=0;c<w&&!D;c++)b=n(e(h)*g[c]),b>k&&(!v||y<=q)&&void 0!==y&&d.push(y),y>q&&(D=!0),y=b;else k=e(k),q=e(q),a=g[v?"minorTickInterval":"tickInterval"],a=m("auto"===a?null:a,this._minorAutoInterval,g.tickPixelInterval/(v?5:1)*(q-k)/((v?h/this.tickPositions.length:h)||1)),a=F(a,null,A(a)),d=G(this.getLinearTickPositions(a,k,q),n),v||(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return d};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,
a)}})(K);(function(a,C){var A=a.arrayMax,G=a.arrayMin,F=a.defined,m=a.destroyObjectProperties,g=a.each,k=a.erase,q=a.merge,v=a.pick;a.PlotLineOrBand=function(a,h){this.axis=a;h&&(this.options=h,this.id=h.id)};a.PlotLineOrBand.prototype={render:function(){var g=this,h=g.axis,e=h.horiz,n=g.options,d=n.label,c=g.label,w=n.to,b=n.from,y=n.value,k=F(b)&&F(w),m=F(y),l=g.svgElem,B=!l,r=[],z=n.color,M=v(n.zIndex,0),p=n.events,r={"class":"highcharts-plot-"+(k?"band ":"line ")+(n.className||"")},E={},I=h.chart.renderer,
L=k?"bands":"lines",f=h.log2lin;h.isLog&&(b=f(b),w=f(w),y=f(y));m?(r={stroke:z,"stroke-width":n.width},n.dashStyle&&(r.dashstyle=n.dashStyle)):k&&(z&&(r.fill=z),n.borderWidth&&(r.stroke=n.borderColor,r["stroke-width"]=n.borderWidth));E.zIndex=M;L+="-"+M;(z=h.plotLinesAndBandsGroups[L])||(h.plotLinesAndBandsGroups[L]=z=I.g("plot-"+L).attr(E).add());B&&(g.svgElem=l=I.path().attr(r).add(z));if(m)r=h.getPlotLinePath(y,l.strokeWidth());else if(k)r=h.getPlotBandPath(b,w,n);else return;B&&r&&r.length?(l.attr({d:r}),
p&&a.objectEach(p,function(a,b){l.on(b,function(a){p[b].apply(g,[a])})})):l&&(r?(l.show(),l.animate({d:r})):(l.hide(),c&&(g.label=c=c.destroy())));d&&F(d.text)&&r&&r.length&&0<h.width&&0<h.height&&!r.flat?(d=q({align:e&&k&&"center",x:e?!k&&4:10,verticalAlign:!e&&k&&"middle",y:e?k?16:10:k?6:-4,rotation:e&&!k&&90},d),this.renderLabel(d,r,k,M)):c&&c.hide();return g},renderLabel:function(a,h,e,n){var d=this.label,c=this.axis.chart.renderer;d||(d={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+
(e?"band":"line")+"-label "+(a.className||"")},d.zIndex=n,this.label=d=c.text(a.text,0,0,a.useHTML).attr(d).add(),d.css(a.style));n=[h[1],h[4],e?h[6]:h[1]];h=[h[2],h[5],e?h[7]:h[2]];e=G(n);c=G(h);d.align(a,!1,{x:e,y:c,width:A(n)-e,height:A(h)-c});d.show()},destroy:function(){k(this.axis.plotLinesAndBands,this);delete this.axis;m(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,h){var e=this.getPlotLinePath(h,null,null,!0),n=this.getPlotLinePath(a,null,null,!0),d=this.horiz,c=1;a=a<this.min&&
h<this.min||a>this.max&&h>this.max;n&&e?(a&&(n.flat=n.toString()===e.toString(),c=0),n.push(d&&e[4]===n[4]?e[4]+c:e[4],d||e[5]!==n[5]?e[5]:e[5]+c,d&&e[1]===n[1]?e[1]+c:e[1],d||e[2]!==n[2]?e[2]:e[2]+c)):n=null;return n},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(g,h){var e=(new a.PlotLineOrBand(this,g)).render(),n=this.userOptions;e&&(h&&(n[h]=n[h]||[],n[h].push(g)),this.plotLinesAndBands.push(e));
return e},removePlotBandOrLine:function(a){for(var h=this.plotLinesAndBands,e=this.options,n=this.userOptions,d=h.length;d--;)h[d].id===a&&h[d].destroy();g([e.plotLines||[],n.plotLines||[],e.plotBands||[],n.plotBands||[]],function(c){for(d=c.length;d--;)c[d].id===a&&k(c,c[d])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,S);(function(a){var C=a.dateFormat,A=a.each,G=a.extend,F=a.format,m=a.isNumber,g=a.map,k=a.merge,q=a.pick,
v=a.splat,u=a.syncTimeout,h=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,h){this.chart=a;this.options=h;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=h.split&&!a.inverted;this.shared=h.shared||this.split},cleanSplit:function(a){A(this.chart.series,function(e){var d=e&&e.tt;d&&(!d.isActive||a?e.tt=d.destroy():d.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,h=this.options;this.label||(this.split?this.label=
a.g("tooltip"):(this.label=a.label("",0,0,h.shape||"callout",null,null,h.useHTML,null,"tooltip").attr({padding:h.padding,r:h.borderRadius}),this.label.attr({fill:h.backgroundColor,"stroke-width":h.borderWidth}).css(h.style).shadow(h.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();k(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,k(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&
(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,h,d,c){var e=this,b=e.now,n=!1!==e.options.animation&&!e.isHidden&&(1<Math.abs(a-b.x)||1<Math.abs(h-b.y)),g=e.followPointer||1<e.len;G(b,{x:n?(2*b.x+a)/3:a,y:n?(b.y+h)/2:h,anchorX:g?void 0:n?(2*b.anchorX+d)/3:d,anchorY:g?void 0:n?(b.anchorY+c)/2:c});e.getLabel().attr(b);n&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,
h,d,c)},32))},hide:function(a){var e=this;clearTimeout(this.hideTimer);a=q(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){e.getLabel()[a?"fadeOut":"hide"]();e.isHidden=!0},a))},getAnchor:function(a,h){var d,c=this.chart,e=c.inverted,b=c.plotTop,n=c.plotLeft,k=0,m=0,l,q;a=v(a);d=a[0].tooltipPos;this.followPointer&&h&&(void 0===h.chartX&&(h=c.pointer.normalize(h)),d=[h.chartX-c.plotLeft,h.chartY-b]);d||(A(a,function(a){l=a.series.yAxis;q=a.series.xAxis;k+=a.plotX+(!e&&q?q.left-
n:0);m+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&l?l.top-b:0)}),k/=a.length,m/=a.length,d=[e?c.plotWidth-m:k,this.shared&&!e&&1<a.length&&h?h.chartY-b:e?c.plotHeight-k:m]);return g(d,Math.round)},getPosition:function(a,h,d){var c=this.chart,e=this.distance,b={},n=d.h||0,g,k=["y",c.chartHeight,h,d.plotY+c.plotTop,c.plotTop,c.plotTop+c.plotHeight],l=["x",c.chartWidth,a,d.plotX+c.plotLeft,c.plotLeft,c.plotLeft+c.plotWidth],m=!this.followPointer&&q(d.ttBelow,!c.inverted===!!d.negative),r=function(a,
c,d,f,p,l){var h=d<f-e,r=f+e+d<c,g=f-e-d;f+=e;if(m&&r)b[a]=f;else if(!m&&h)b[a]=g;else if(h)b[a]=Math.min(l-d,0>g-n?g:g-n);else if(r)b[a]=Math.max(p,f+n+d>c?f:f+n);else return!1},z=function(a,c,d,f){var p;f<e||f>c-e?p=!1:b[a]=f<d/2?1:f>c-d/2?c-d-2:f-d/2;return p},v=function(a){var b=k;k=l;l=b;g=a},p=function(){!1!==r.apply(0,k)?!1!==z.apply(0,l)||g||(v(!0),p()):g?b.x=b.y=0:(v(!0),p())};(c.inverted||1<this.len)&&v();p();return b},defaultFormatter:function(a){var e=this.points||v(this),d;d=[a.tooltipFooterHeaderFormatter(e[0])];
d=d.concat(a.bodyFormatter(e));d.push(a.tooltipFooterHeaderFormatter(e[0],!0));return d},refresh:function(a,h){var d,c=this.options,e,b=a,g,n={},k=[];d=c.formatter||this.defaultFormatter;var n=this.shared,l;clearTimeout(this.hideTimer);this.followPointer=v(b)[0].series.tooltipOptions.followPointer;g=this.getAnchor(b,h);h=g[0];e=g[1];!n||b.series&&b.series.noSharedTooltip?n=b.getLabelConfig():(A(b,function(a){a.setState("hover");k.push(a.getLabelConfig())}),n={x:b[0].category,y:b[0].y},n.points=k,
b=b[0]);this.len=k.length;n=d.call(n,this);l=b.series;this.distance=q(l.tooltipOptions.distance,16);!1===n?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(n,a):(c.style.width||d.css({width:this.chart.spacingBox.width}),d.attr({text:n&&n.join?n.join(""):n}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+q(b.colorIndex,l.colorIndex)),d.attr({stroke:c.borderColor||b.color||l.color||"#666666"}),this.updatePosition({plotX:h,plotY:e,
negative:b.negative,ttBelow:b.ttBelow,h:g[2]||0})),this.isHidden=!1)},renderSplit:function(e,h){var d=this,c=[],g=this.chart,b=g.renderer,n=!0,k=this.options,m,l=this.getLabel();A(e.slice(0,h.length+1),function(a,e){e=h[e-1]||{isHeader:!0,plotX:h[0].plotX};var r=e.series||d,w=r.tt,p=e.series||{},y="highcharts-color-"+q(e.colorIndex,p.colorIndex,"none");w||(r.tt=w=b.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+y).attr({padding:k.padding,r:k.borderRadius,fill:k.backgroundColor,
stroke:e.color||p.color||"#333333","stroke-width":k.borderWidth}).add(l));w.isActive=!0;w.attr({text:a});w.css(k.style);a=w.getBBox();p=a.width+w.strokeWidth();e.isHeader?(m=a.height,p=Math.max(0,Math.min(e.plotX+g.plotLeft-p/2,g.chartWidth-p))):p=e.plotX+g.plotLeft-q(k.distance,16)-p;0>p&&(n=!1);a=(e.series&&e.series.yAxis&&e.series.yAxis.pos)+(e.plotY||0);a-=g.plotTop;c.push({target:e.isHeader?g.plotHeight+m:a,rank:e.isHeader?1:0,size:r.tt.getBBox().height+1,point:e,x:p,tt:w})});this.cleanSplit();
a.distribute(c,g.plotHeight+m);A(c,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:n||b.isHeader?a.x:b.plotX+g.plotLeft+q(k.distance,16),y:a.pos+g.plotTop,anchorX:b.isHeader?b.plotX+g.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+g.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var e=this.chart,d=this.getLabel(),d=(this.options.positioner||this.getPosition).call(this,d.width,d.height,a);this.move(Math.round(d.x),Math.round(d.y||
0),a.plotX+e.plotLeft,a.plotY+e.plotTop)},getDateFormat:function(a,g,d,c){var e=C("%m-%d %H:%M:%S.%L",g),b,n,k={millisecond:15,second:12,minute:9,hour:6,day:3},m="millisecond";for(n in h){if(a===h.week&&+C("%w",g)===d&&"00:00:00.000"===e.substr(6)){n="week";break}if(h[n]>a){n=m;break}if(k[n]&&e.substr(k[n])!=="01-01 00:00:00.000".substr(k[n]))break;"week"!==n&&(m=n)}n&&(b=c[n]);return b},getXDateFormat:function(a,h,d){h=h.dateTimeLabelFormats;var c=d&&d.closestPointRange;return(c?this.getDateFormat(c,
a.x,d.options.startOfWeek,h):h.day)||h.year},tooltipFooterHeaderFormatter:function(a,h){var d=h?"footer":"header";h=a.series;var c=h.tooltipOptions,e=c.xDateFormat,b=h.xAxis,g=b&&"datetime"===b.options.type&&m(a.key),d=c[d+"Format"];g&&!e&&(e=this.getXDateFormat(a,c,b));g&&e&&(d=d.replace("{point.key}","{point.key:"+e+"}"));return F(d,{point:a,series:h})},bodyFormatter:function(a){return g(a,function(a){var d=a.series.tooltipOptions;return(d.pointFormatter||a.point.tooltipFormatter).call(a.point,
d.pointFormat)})}}})(K);(function(a){var C=a.addEvent,A=a.attr,G=a.charts,F=a.color,m=a.css,g=a.defined,k=a.doc,q=a.each,v=a.extend,u=a.fireEvent,h=a.offset,e=a.pick,n=a.removeEvent,d=a.splat,c=a.Tooltip,w=a.win;a.Pointer=function(a,c){this.init(a,c)};a.Pointer.prototype={init:function(a,d){this.options=d;this.chart=a;this.runChartClick=d.chart.events&&!!d.chart.events.click;this.pinchDown=[];this.lastValidTouch={};c&&d.tooltip.enabled&&(a.tooltip=new c(a,d.tooltip),this.followTouchMove=e(d.tooltip.followTouchMove,
!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,d=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=e(c.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&!b||a&&b;this.hasZoom=a||d},normalize:function(a,c){var b,d;a=a||w.event;a.target||(a.target=a.srcElement);d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;c||(this.chartPosition=c=h(this.chart.container));void 0===d.pageX?(b=Math.max(a.x,
a.clientX-c.left),c=a.y):(b=d.pageX-c.left,c=d.pageY-c.top);return v(a,{chartX:Math.round(b),chartY:Math.round(c)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};q(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,c,d){var b=[],l,h,r;q(a,function(a){l=a.noSharedTooltip&&c;h=!c&&a.directTouch;a.visible&&!h&&e(a.options.enableMouseTracking,!0)&&(r=a.searchPoint(d,!l&&0>a.options.findNearestPointBy.indexOf("y")))&&
r.series&&b.push(r)});b.sort(function(a,b){var d=a.distX-b.distX,l=a.dist-b.dist,e=(b.series.group&&b.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==d&&c?d:0!==l?l:0!==e?e:a.series.index>b.series.index?-1:1});if(c&&b[0]&&!b[0].series.noSharedTooltip)for(a=b.length;a--;)(b[a].x!==b[0].x||b[a].series.noSharedTooltip)&&b.splice(a,1);return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=
a.series,d=b.xAxis,b=b.yAxis;if(d&&b)return c?{chartX:d.len+d.pos-a.clientX,chartY:b.len+b.pos-a.plotY}:{chartX:a.clientX+d.pos,chartY:a.plotY+b.pos}},getHoverData:function(b,c,d,e,l,h){var r=b,g=c,r=l?d:[g];e=!(!e||!b);c=g&&!g.stickyTracking;var n=function(a,b){return 0===b},p;e?n=function(a){return a===b}:c?n=function(a){return a.series===g}:r=a.grep(d,function(a){return a.stickyTracking});p=e&&!l?[b]:this.getKDPoints(r,l,h);g=(r=a.find(p,n))&&r.series;e||c||!l||(p=this.getKDPoints(d,l,h));p.sort(function(a,
b){return a.series.index-b.series.index});return{hoverPoint:r,hoverSeries:g,hoverPoints:p}},runPointActions:function(b,c){var d=this.chart,h=d.tooltip,l=h?h.shared:!1,g=c||d.hoverPoint,r=g&&g.series||d.hoverSeries;c=this.getHoverData(g,r,d.series,!!c||r&&r.directTouch&&this.isDirectTouch,l,b);var n,w,g=c.hoverPoint;n=(r=c.hoverSeries)&&r.tooltipOptions.followPointer;w=(l=l&&g&&!g.series.noSharedTooltip)?c.hoverPoints:g?[g]:[];if(g&&(g!==d.hoverPoint||h&&h.isHidden)){q(d.hoverPoints||[],function(b){-1===
a.inArray(b,w)&&b.setState()});q(w||[],function(a){a.setState("hover")});if(d.hoverSeries!==r)r.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");g.firePointEvent("mouseOver");d.hoverPoints=w;d.hoverPoint=g;h&&h.refresh(l?w:g,b)}else n&&h&&!h.isHidden&&(r=h.getAnchor([{}],b),h.updatePosition({plotX:r[0],plotY:r[1]}));this.unDocMouseMove||(this.unDocMouseMove=C(k,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));q(d.axes,function(c){e(c.crosshair.snap,
!0)?a.find(w,function(a){return a.series[c.coll]===c})?c.drawCrosshair(b,g):c.hideCrosshair():c.drawCrosshair(b)})},reset:function(a,c){var b=this.chart,e=b.hoverSeries,l=b.hoverPoint,h=b.hoverPoints,g=b.tooltip,n=g&&g.shared?h:l;a&&n&&q(d(n),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)g&&n&&(g.refresh(n),l&&(l.setState(l.state,!0),q(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,l)})));else{if(l)l.onMouseOut();h&&q(h,function(a){a.setState()});if(e)e.onMouseOut();g&&g.hide(c);
this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());q(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,d;q(b.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&e.group&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(c?b.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=
a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,h=this.zoomHor,g=this.zoomVert,n=b.plotLeft,w=b.plotTop,p=b.plotWidth,k=b.plotHeight,m,q=this.selectionMarker,f=this.mouseDownX,t=this.mouseDownY,v=c.panKey&&a[c.panKey+"Key"];q&&q.touch||(d<n?d=n:d>n+p&&(d=n+p),e<w?e=w:e>w+k&&(e=w+k),this.hasDragged=Math.sqrt(Math.pow(f-d,2)+Math.pow(t-e,2)),10<this.hasDragged&&(m=b.isInsidePlot(f-
n,t-w),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&m&&!v&&!q&&(this.selectionMarker=q=b.renderer.rect(n,w,h?1:p,g?1:k,0).attr({fill:c.selectionMarkerFill||F("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),q&&h&&(d-=f,q.attr({width:Math.abs(d),x:(0<d?0:d)+f})),q&&g&&(d=e-t,q.attr({height:Math.abs(d),y:(0<d?0:d)+t})),m&&!q&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,
xAxis:[],yAxis:[]},h=this.selectionMarker,r=h.attr?h.attr("x"):h.x,n=h.attr?h.attr("y"):h.y,w=h.attr?h.attr("width"):h.width,p=h.attr?h.attr("height"):h.height,k;if(this.hasDragged||d)q(c.axes,function(c){if(c.zoomEnabled&&g(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var l=c.horiz,f="touchend"===a.type?c.minPixelPadding:0,h=c.toValue((l?r:n)+f),l=c.toValue((l?r+w:n+p)-f);e[c.coll].push({axis:c,min:Math.min(h,l),max:Math.max(h,l)});k=!0}}),k&&u(c,"selection",e,function(a){c.zoom(v(a,d?
{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}c&&(m(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;g(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=A(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",v(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(v(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container;c.onmousedown=
function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};C(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&C(k,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&C(k,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();n(b.chart.container,"mouseleave",
b.onContainerMouseLeave);a.chartCount||(n(k,"mouseup",b.onDocumentMouseUp),n(k,"touchend",b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(K);(function(a){var C=a.charts,A=a.each,G=a.extend,F=a.map,m=a.noop,g=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,g,m,u,h,e){this.zoomHor&&this.pinchTranslateDirection(!0,a,g,m,u,h,e);this.zoomVert&&this.pinchTranslateDirection(!1,a,g,m,u,h,e)},pinchTranslateDirection:function(a,g,m,u,h,e,n,d){var c=
this.chart,w=a?"x":"y",b=a?"X":"Y",k="chart"+b,q=a?"width":"height",v=c["plot"+(a?"Left":"Top")],l,B,r=d||1,z=c.inverted,M=c.bounds[a?"h":"v"],p=1===g.length,E=g[0][k],I=m[0][k],L=!p&&g[1][k],f=!p&&m[1][k],t;m=function(){!p&&20<Math.abs(E-L)&&(r=d||Math.abs(I-f)/Math.abs(E-L));B=(v-I)/r+E;l=c["plot"+(a?"Width":"Height")]/r};m();g=B;g<M.min?(g=M.min,t=!0):g+l>M.max&&(g=M.max-l,t=!0);t?(I-=.8*(I-n[w][0]),p||(f-=.8*(f-n[w][1])),m()):n[w]=[I,f];z||(e[w]=B-v,e[q]=l);e=z?1/r:r;h[q]=l;h[w]=g;u[z?a?"scaleY":
"scaleX":"scale"+b]=r;u["translate"+b]=e*v+(I-e*E)},pinch:function(a){var k=this,v=k.chart,u=k.pinchDown,h=a.touches,e=h.length,n=k.lastValidTouch,d=k.hasZoom,c=k.selectionMarker,w={},b=1===e&&(k.inClass(a.target,"highcharts-tracker")&&v.runTrackerClick||k.runChartClick),y={};1<e&&(k.initiated=!0);d&&k.initiated&&!b&&a.preventDefault();F(h,function(a){return k.normalize(a)});"touchstart"===a.type?(A(h,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),n.x=[u[0].chartX,u[1]&&u[1].chartX],n.y=[u[0].chartY,
u[1]&&u[1].chartY],A(v.axes,function(a){if(a.zoomEnabled){var b=v.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(g(a.options.min,a.dataMin)),e=a.toPixels(g(a.options.max,a.dataMax)),h=Math.max(d,e);b.min=Math.min(a.pos,Math.min(d,e)-c);b.max=Math.max(a.pos+a.len,h+c)}}),k.res=!0):k.followTouchMove&&1===e?this.runPointActions(k.normalize(a)):u.length&&(c||(k.selectionMarker=c=G({destroy:m,touch:!0},v.plotBox)),k.pinchTranslate(u,h,w,c,y,n),k.hasPinched=d,k.scaleGroups(w,y),k.res&&(k.res=
!1,this.reset(!1,0)))},touch:function(k,m){var q=this.chart,u,h;if(q.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=q.index;1===k.touches.length?(k=this.normalize(k),(h=q.isInsidePlot(k.chartX-q.plotLeft,k.chartY-q.plotTop))&&!q.openMenu?(m&&this.runPointActions(k),"touchmove"===k.type&&(m=this.pinchDown,u=m[0]?4<=Math.sqrt(Math.pow(m[0].chartX-k.chartX,2)+Math.pow(m[0].chartY-k.chartY,2)):!1),g(u,!0)&&this.pinch(k)):m&&this.reset()):2===k.touches.length&&
this.pinch(k)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(g){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(g)}})})(K);(function(a){var C=a.addEvent,A=a.charts,G=a.css,F=a.doc,m=a.extend,g=a.noop,k=a.Pointer,q=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var h={},e=!!v.PointerEvent,n=function(){var c=[];c.item=function(a){return this[a]};a.objectEach(h,
function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},d=function(c,d,b,e){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!A[a.hoverChartIndex]||(e(c),e=A[a.hoverChartIndex].pointer,e[d]({type:b,target:c.currentTarget,preventDefault:g,touches:n()}))};m(k.prototype,{onContainerPointerDown:function(a){d(a,"onContainerTouchStart","touchstart",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){d(a,
"onContainerTouchMove","touchmove",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY};h[a.pointerId].target||(h[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){d(a,"onDocumentTouchEnd","touchend",function(a){delete h[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,e?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,e?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(F,e?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});
u(k.prototype,"init",function(a,d,b){a.call(this,d,b);this.hasZoom&&G(d.container,{"-ms-touch-action":"none","touch-action":"none"})});u(k.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});u(k.prototype,"destroy",function(a){this.batchMSEvents(q);a.call(this)})}})(K);(function(a){var C=a.addEvent,A=a.css,G=a.discardElement,F=a.defined,m=a.each,g=a.isFirefox,k=a.marginNames,q=a.merge,v=a.pick,u=a.setAnimation,h=a.stableSort,e=a.win,n=a.wrap;
a.Legend=function(a,c){this.init(a,c)};a.Legend.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=q(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=
[]},update:function(a,c){var d=this.chart;this.setOptions(q(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;v(c,!0)&&d.redraw()},colorizeItem:function(d,c){d.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var e=this.options,b=d.legendItem,h=d.legendLine,g=d.legendSymbol,n=this.itemHiddenStyle.color,e=c?e.itemStyle.color:n,l=c?d.color||n:n,k=d.options&&d.options.marker,r={fill:l};b&&b.css({fill:e,color:e});h&&h.attr({stroke:l});g&&(k&&g.isMarker&&(r=d.pointAttribs(),
c||a.objectEach(r,function(a,b){r[b]=n})),g.attr(r))},positionItem:function(a){var c=this.options,d=c.symbolPadding,c=!c.rtl,b=a._legendItemPos,e=b[0],b=b[1],h=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?e:this.legendWidth-e-2*d-4,b);h&&(h.x=e,h.y=b)},destroyItem:function(a){var c=a.checkbox;m(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())});c&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}m(this.getAllItems(),
function(c){m(["legendItem","legendGroup"],a,c)});m("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var c=this.group&&this.group.alignAttr,d,b=this.clipHeight||this.legendHeight,e=this.titleHeight;c&&(d=c.translateY,m(this.allItems,function(h){var g=h.checkbox,l;g&&(l=d+e+g.y+(a||0)+3,A(g,{left:c.translateX+h.checkboxOffset+g.x-20+"px",top:l+"px",display:l>d-6&&l<d+b-6?"":"none"}))}))},renderTitle:function(){var a=this.options,c=this.padding,
e=a.title,b=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(e.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(d){var c=this.options;d.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,d):c.labelFormatter.call(d)})},renderItem:function(a){var c=this.chart,d=c.renderer,b=this.options,e=
"horizontal"===b.layout,h=this.symbolWidth,g=b.symbolPadding,l=this.itemStyle,n=this.itemHiddenStyle,r=this.padding,k=e?v(b.itemDistance,20):0,m=!b.rtl,p=b.width,E=b.itemMarginBottom||0,I=this.itemMarginTop,u=a.legendItem,f=!a.series,t=!f&&a.series.drawLegendSymbol?a.series:a,A=t.options,J=this.createCheckboxForItem&&A&&A.showCheckbox,A=h+g+k+(J?20:0),N=b.useHTML,C=a.options.className;u||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+t.type+"-series highcharts-color-"+a.colorIndex+(C?" "+
C:"")+(f?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=u=d.text("",m?h+g:-g,this.baseline||0,N).css(q(a.visible?l:n)).attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=l.fontSize,this.fontMetrics=d.fontMetrics(h,u),this.baseline=this.fontMetrics.f+3+I,u.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,t.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,u,N),J&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);l.width||u.css({width:(b.itemWidth||c.spacingBox.width)-A});this.setText(a);d=u.getBBox();l=a.checkboxOffset=b.itemWidth||a.legendItemWidth||d.width+A;this.itemHeight=d=Math.round(a.legendItemHeight||d.height||this.symbolHeight);e&&this.itemX-r+l>(p||c.spacingBox.width-2*r-b.x)&&(this.itemX=r,this.itemY+=I+this.lastLineHeight+E,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,l);this.lastItemY=I+this.itemY+E;this.lastLineHeight=Math.max(d,this.lastLineHeight);
a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=l:(this.itemY+=I+d+E,this.lastLineHeight=d);this.offsetWidth=p||Math.max((e?this.itemX-r-k:l)+r,this.offsetWidth)},getAllItems:function(){var a=[];m(this.chart.series,function(c){var d=c&&c.options;c&&v(d.showInLegend,F(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===d.legendType?c.data:c)))});return a},adjustMargins:function(a,c){var d=this.chart,b=this.options,e=b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0);
b.floating||m([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(h,g){h.test(e)&&!F(a[g])&&(d[k[g]]=Math.max(d[k[g]],d.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*b[g%2?"x":"y"]+v(b.margin,12)+c[g]))})},render:function(){var a=this,c=a.chart,e=c.renderer,b=a.group,g,n,k,l,B=a.box,r=a.options,z=a.padding;a.itemX=z;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;b||(a.group=b=e.g("legend").attr({zIndex:7}).add(),a.contentGroup=e.g().attr({zIndex:1}).add(b),a.scrollGroup=
e.g().add(a.contentGroup));a.renderTitle();g=a.getAllItems();h(g,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});r.reversed&&g.reverse();a.allItems=g;a.display=n=!!g.length;a.lastLineHeight=0;m(g,function(b){a.renderItem(b)});k=(r.width||a.offsetWidth)+z;l=a.lastItemY+a.lastLineHeight+a.titleHeight;l=a.handleOverflow(l);l+=z;B||(a.box=B=e.rect().addClass("highcharts-legend-box").attr({r:r.borderRadius}).add(b),B.isNew=!0);B.attr({stroke:r.borderColor,
"stroke-width":r.borderWidth||0,fill:r.backgroundColor||"none"}).shadow(r.shadow);0<k&&0<l&&(B[B.isNew?"attr":"animate"](B.crisp({x:0,y:0,width:k,height:l},B.strokeWidth())),B.isNew=!1);B[n?"show":"hide"]();a.legendWidth=k;a.legendHeight=l;m(g,function(b){a.positionItem(b)});n&&b.align(q(r,{width:k,height:l}),!0,"spacingBox");c.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var c=this,d=this.chart,b=d.renderer,e=this.options,h=e.y,g=this.padding,d=d.spacingBox.height+("top"===e.verticalAlign?
-h:h)-g,h=e.maxHeight,l,n=this.clipRect,r=e.navigation,k=v(r.animation,!0),q=r.arrowSize||12,p=this.nav,E=this.pages,I,u=this.allItems,f=function(a){"number"===typeof a?n.attr({height:a}):n&&(c.clipRect=n.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+g+"px,9999px,"+(g+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(d/=2);h&&(d=Math.min(d,h));E.length=0;a>d&&!1!==r.enabled?(this.clipHeight=l=Math.max(d-20-this.titleHeight-
g,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,m(u,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var f=E.length;if(!f||c-E[f-1]>l&&(I||c)!==E[f-1])E.push(I||c),f++;b===u.length-1&&c+a-E[f-1]>l&&E.push(c);c!==I&&(I=c)}),n||(n=c.clipRect=b.clipRect(0,g,9999,0),c.contentGroup.clip(n)),f(l),p||(this.nav=p=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,q,q).on("click",function(){c.scroll(-1,k)}).add(p),this.pager=b.text("",15,
10).addClass("highcharts-legend-navigation").css(r.style).add(p),this.down=b.symbol("triangle-down",0,0,q,q).on("click",function(){c.scroll(1,k)}).add(p)),c.scroll(0),a=d):p&&(f(),this.nav=p.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var d=this.pages,b=d.length;a=this.currentPage+a;var e=this.clipHeight,h=this.options.navigation,g=this.pager,l=this.padding;a>b&&(a=b);0<a&&(void 0!==c&&u(c,this.chart),this.nav.attr({translateX:l,translateY:e+this.padding+
7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),g.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?h.inactiveColor:h.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?h.inactiveColor:h.activeColor}).css({cursor:a===b?"default":"pointer"}),c=-d[a-1]+this.initialItemY,
this.scrollGroup.animate({translateY:c}),this.currentPage=a,this.positionCheckboxes(c))}};a.LegendSymbolMixin={drawRectangle:function(a,c){var d=a.symbolHeight,b=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-d)/2:0,a.baseline-d+1,b?d:a.symbolWidth,d,v(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,d=c.marker,b=a.symbolWidth,e=a.symbolHeight,h=e/2,g=this.chart.renderer,l=
this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var n;n={"stroke-width":c.lineWidth||0};c.dashStyle&&(n.dashstyle=c.dashStyle);this.legendLine=g.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(n).add(l);d&&!1!==d.enabled&&(c=Math.min(v(d.radius,h),h),0===this.symbol.indexOf("url")&&(d=q(d,{width:e,height:e}),c=0),this.legendSymbol=d=g.symbol(this.symbol,b/2-c,a-c,2*c,2*c,d).addClass("highcharts-point").add(l),d.isMarker=!0)}};(/Trident\/7\.0/.test(e.navigator.userAgent)||g)&&
n(a.Legend.prototype,"positionItem",function(a,c){var d=this,b=function(){c._legendItemPos&&a.call(d,c)};b();setTimeout(b)})})(K);(function(a){var C=a.addEvent,A=a.animate,G=a.animObject,F=a.attr,m=a.doc,g=a.Axis,k=a.createElement,q=a.defaultOptions,v=a.discardElement,u=a.charts,h=a.css,e=a.defined,n=a.each,d=a.extend,c=a.find,w=a.fireEvent,b=a.getStyle,y=a.grep,D=a.isNumber,H=a.isObject,l=a.isString,B=a.Legend,r=a.marginNames,z=a.merge,M=a.objectEach,p=a.Pointer,E=a.pick,I=a.pInt,L=a.removeEvent,
f=a.seriesTypes,t=a.splat,R=a.svg,J=a.syncTimeout,N=a.win,O=a.Renderer,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};d(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(l(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var f,d,e=b.series,p=b.plotOptions||{};b.series=null;f=z(q,b);for(d in f.plotOptions)f.plotOptions[d].tooltip=p[d]&&z(p[d].tooltip)||void 0;f.tooltip.userOptions=
b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;f.series=b.series=e;this.userOptions=b;b=f.chart;d=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=f;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var h=this;h.index=u.length;u.push(h);a.chartCount++;d&&M(d,function(a,b){C(h,b,a)});h.xAxis=[];h.yAxis=[];h.pointCount=h.colorCounter=h.symbolCounter=0;h.firstRender()},initSeries:function(b){var c=this.options.chart;
(c=f[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var f=c?b:a;a=c?a:b;return 0<=f&&f<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,f=this.series,e=this.pointer,p=this.legend,h=this.isDirtyLegend,l,g,r=this.hasCartesianSeries,t=this.isDirtyBox,x,k=this.renderer,m=
k.isHidden(),E=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);m&&this.temporaryDisplay();this.layOutTitles();for(b=f.length;b--;)if(x=f[b],x.options.stacking&&(l=!0,x.isDirty)){g=!0;break}if(g)for(b=f.length;b--;)x=f[b],x.options.stacking&&(x.isDirty=!0);n(f,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),h=!0);a.isDirtyData&&w(a,"updatedData")});h&&p.options.enabled&&(p.render(),this.isDirtyLegend=!1);l&&this.getStacks();r&&n(c,function(a){a.updateNames();
a.setScale()});this.getMargins();r&&(n(c,function(a){a.isDirty&&(t=!0)}),n(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,E.push(function(){w(a,"afterSetExtremes",d(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(t||l)&&a.redraw()}));t&&this.drawChartBox();w(this,"predraw");n(f,function(a){(t||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});e&&e.reset(!0);k.draw();w(this,"redraw");w(this,"render");m&&this.temporaryDisplay(!0);n(E,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var f,d=this.series,e;f=c(this.axes,b)||c(this.series,b);for(e=0;!f&&e<d.length;e++)f=c(d[e].points||[],b);return f},getAxes:function(){var a=this,b=this.options,c=b.xAxis=t(b.xAxis||{}),b=b.yAxis=t(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new g(a,b)})},getSelectedPoints:function(){var a=[];n(this.series,function(b){a=a.concat(y(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return y(this.series,
function(a){return a.selected})},setTitle:function(a,b,c){var f=this,d=f.options,e;e=d.title=z({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=z({style:{color:"#666666"}},d.subtitle,b);n([["title",a,e],["subtitle",b,d]],function(a,b){var c=a[0],d=f[c],e=a[1];a=a[2];d&&e&&(f[c]=d=d.destroy());a&&a.text&&!d&&(f[c]=f.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),f[c].update=function(a){f.setTitle(!b&&a,b&&
a)},f[c].css(a.style))});f.layOutTitles(c)},layOutTitles:function(a){var b=0,c,f=this.renderer,e=this.spacingBox;n(["title","subtitle"],function(a){var c=this[a],p=this.options[a];a="title"===a?-3:p.verticalAlign?0:b+2;var h;c&&(h=p.style.fontSize,h=f.fontMetrics(h,c).b,c.css({width:(p.width||e.width+p.widthAdjust)+"px"}).align(d({y:a+h},p),!1,"spacingBox"),p.floating||p.verticalAlign||(b=Math.ceil(b+c.getBBox(p.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&
c&&(this.isDirtyBox=c,this.hasRendered&&E(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var c=this.options.chart,f=c.width,c=c.height,d=this.renderTo;e(f)||(this.containerWidth=b(d,"width"));e(c)||(this.containerHeight=b(d,"height"));this.chartWidth=Math.max(0,f||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(c,this.chartWidth)||this.containerHeight||400)},temporaryDisplay:function(c){var f=this.renderTo;if(c)for(;f&&f.style;)f.hcOrigStyle&&(a.css(f,f.hcOrigStyle),
delete f.hcOrigStyle),f=f.parentNode;else for(;f&&f.style;)"none"===b(f,"display",!1)&&(f.hcOrigStyle={display:f.style.display,height:f.style.height,overflow:f.style.overflow},c={display:"block",overflow:"hidden"},f!==this.renderTo&&(c.height=0),a.css(f,c),f.style.setProperty&&f.style.setProperty("display","block","important")),f=f.parentNode},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,f=c.chart,e,p;b=this.renderTo;
var h=a.uniqueKey(),g;b||(this.renderTo=b=f.renderTo);l(b)&&(this.renderTo=b=m.getElementById(b));b||a.error(13,!0);e=I(F(b,"data-highcharts-chart"));D(e)&&u[e]&&u[e].hasRendered&&u[e].destroy();F(b,"data-highcharts-chart",this.index);b.innerHTML="";f.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();e=this.chartWidth;p=this.chartHeight;g=d({position:"relative",overflow:"hidden",width:e+"px",height:p+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
f.style);this.container=b=k("div",{id:h},g,b);this._cursor=b.style.cursor;this.renderer=new (a[f.renderer]||O)(b,e,p,null,f.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(f.className);this.renderer.setStyle(f.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,f=this.titleOffset;this.resetMargins();f&&!e(c[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(c,b);
this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&n(a.axes,function(a){a.visible&&a.getOffset()});n(r,function(f,d){e(c[d])||(a[f]+=b[d])});a.setChartSize()},reflow:function(a){var c=this,f=c.options.chart,d=c.renderTo,p=e(f.width),h=f.width||b(d,"width"),f=f.height||b(d,
"height"),d=a?a.target:N;if(!p&&!c.isPrinting&&h&&f&&(d===N||d===m)){if(h!==c.containerWidth||f!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=J(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=h;c.containerHeight=f}},initReflow:function(){var a=this,b;b=C(N,"resize",function(b){a.reflow(b)});C(a,"destroy",b)},setSize:function(b,c,f){var d=this,e=d.renderer;d.isResizing+=1;a.setAnimation(f,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;
void 0!==b&&(d.options.chart.width=b);void 0!==c&&(d.options.chart.height=c);d.getChartSize();b=e.globalAnimation;(b?A:h)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},b);d.setChartSize(!0);e.setSize(d.chartWidth,d.chartHeight,f);n(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(f);d.oldChartHeight=null;w(d,"resize");J(function(){d&&w(d,"endResize",null,function(){--d.isResizing})},G(b).duration)},setChartSize:function(a){function b(a){a=
l[a]||0;return Math.max(m||a,a)/2}var c=this.inverted,f=this.renderer,d=this.chartWidth,e=this.chartHeight,p=this.options.chart,h=this.spacing,l=this.clipOffset,g,r,t,k,m;this.plotLeft=g=Math.round(this.plotLeft);this.plotTop=r=Math.round(this.plotTop);this.plotWidth=t=Math.max(0,Math.round(d-g-this.marginRight));this.plotHeight=k=Math.max(0,Math.round(e-r-this.marginBottom));this.plotSizeX=c?k:t;this.plotSizeY=c?t:k;this.plotBorderWidth=p.plotBorderWidth||0;this.spacingBox=f.spacingBox={x:h[3],y:h[0],
width:d-h[3]-h[1],height:e-h[0]-h[2]};this.plotBox=f.plotBox={x:g,y:r,width:t,height:k};m=2*Math.floor(this.plotBorderWidth/2);c=Math.ceil(b(3));f=Math.ceil(b(0));this.clipBox={x:c,y:f,width:Math.floor(this.plotSizeX-b(1)-c),height:Math.max(0,Math.floor(this.plotSizeY-b(2)-f))};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;n(["margin","spacing"],function(c){var f=b[c],d=H(f)?f:[f,f,f,f];n(["Top","Right","Bottom","Left"],function(f,
e){a[c][e]=E(b[c+f],d[e])})});n(r,function(b,c){a[b]=E(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,f=this.chartHeight,d=this.chartBackground,e=this.plotBackground,p=this.plotBorder,h,l=this.plotBGImage,g=a.backgroundColor,n=a.plotBackgroundColor,r=a.plotBackgroundImage,t,k=this.plotLeft,m=this.plotTop,E=this.plotWidth,w=this.plotHeight,q=this.plotBox,I=this.clipRect,z=this.clipBox,y="animate";
d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),y="attr");h=a.borderWidth||0;t=h+(a.shadow?8:0);g={fill:g||"none"};if(h||d["stroke-width"])g.stroke=a.borderColor,g["stroke-width"]=h;d.attr(g).shadow(a.shadow);d[y]({x:t/2,y:t/2,width:c-t-h%2,height:f-t-h%2,r:a.borderRadius});y="animate";e||(y="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[y](q);e.attr({fill:n||"none"}).shadow(a.plotShadow);r&&(l?l.animate(q):this.plotBGImage=b.image(r,
k,m,E,w).add());I?I.animate({width:z.width,height:z.height}):this.clipRect=b.clipRect(z);y="animate";p||(y="attr",this.plotBorder=p=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());p.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});p[y](p.crisp({x:k,y:m,width:E,height:w},-p.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,p;n(["inverted","angular","polar"],function(h){c=f[b.type||b.defaultSeriesType];
p=b[h]||c&&c.prototype[h];for(e=d&&d.length;!p&&e--;)(c=f[d[e].type])&&c.prototype[h]&&(p=!0);a[h]=p})},linkSeries:function(){var a=this,b=a.series;n(b,function(a){a.linkedSeries.length=0});n(b,function(b){var c=b.options.linkedTo;l(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=E(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){n(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=
this,b=a.options.labels;b.items&&n(b.items,function(c){var f=d(b.style,c.style),e=I(f.left)+a.plotLeft,p=I(f.top)+a.plotTop+12;delete f.left;delete f.top;a.renderer.text(c.html,e,p).attr({zIndex:2}).css(f).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,f,d,e;this.setTitle();this.legend=new B(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;f=this.plotHeight-=21;n(a,function(a){a.setScale()});this.getAxisMargins();d=
1.1<c/this.plotWidth;e=1.05<f/this.plotHeight;if(d||e)n(a,function(a){(a.horiz&&d||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&n(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=z(!0,this.options.credits,a);a.enabled&&!this.credits&&
(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(N.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,f=b.series,d=b.container,e,p=d&&d.parentNode;w(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");
L(b);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=f.length;e--;)f[e]=f[e].destroy();n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",L(d),p&&v(d));M(b,function(a,c){delete b[c]})},isReadyToRender:function(){var a=this;return R||N!=N.top||
"complete"===m.readyState?!0:(m.attachEvent("onreadystatechange",function(){m.detachEvent("onreadystatechange",a.firstRender);"complete"===m.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();w(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();n(b.series||[],function(b){a.initSeries(b)});a.linkSeries();w(a,"beforeRender");p&&(a.pointer=new p(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();
a.temporaryDisplay(!0)}},onload:function(){n([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);w(this,"load");w(this,"render");e(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(K);(function(a){var C,A=a.each,G=a.extend,F=a.erase,m=a.fireEvent,g=a.format,k=a.isArray,q=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,e,g){this.series=a;this.color=a.color;this.applyOptions(e,
g);a.options.colorByPoint?(e=a.options.colors||a.chart.options.colors,this.color=this.color||e[a.colorCounter],e=e.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===e&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=v(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,e){var h=this.series,d=h.options.pointValKey||h.pointValKey;a=C.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;d&&(this.y=
this[d]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!q(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===e&&h.xAxis&&h.xAxis.hasNames&&(this.x=h.xAxis.nameToX(this));void 0===this.x&&h&&(this.x=void 0===e?h.autoIncrement(this):e);return this},optionsToObject:function(a){var e={},h=this.series,d=h.options.keys,c=d||h.pointArrayMap||["y"],g=c.length,b=0,m=0;if(q(a)||null===a)e[c[0]]=a;else if(k(a))for(!d&&a.length>g&&(h=typeof a[0],"string"===h?e.name=a[0]:"number"===
h&&(e.x=a[0]),b++);m<g;)d&&void 0===a[b]||(e[c[m]]=a[b]),b++,m++;else"object"===typeof a&&(e=a,a.dataLabels&&(h._hasPointLabels=!0),a.marker&&(h._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?
" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,e=a.zones,a=a.zoneAxis||"y",g=0,d;for(d=e[g];this[a]>=d.value;)d=e[++g];d&&d.color&&!this.options.color&&(this.color=d.color);return d},destroy:function(){var a=this.series.chart,e=a.hoverPoints,g;a.pointCount--;e&&(this.setState(),F(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);
for(g in this)this[g]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],e,g=6;g--;)e=a[g],this[e]&&(this[e]=this[e].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var e=this.series,h=e.tooltipOptions,d=v(h.valueDecimals,""),
c=h.valuePrefix||"",k=h.valueSuffix||"";A(e.pointArrayMap||["y"],function(b){b="{point."+b;if(c||k)a=a.replace(b+"}",c+b+"}"+k);a=a.replace(b+"}",b+":,."+d+"f}")});return g(a,{point:this,series:this.series})},firePointEvent:function(a,e,g){var d=this,c=this.series.options;(c.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&c.allowPointSelect&&(g=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});m(this,a,e,g)},visible:!0}})(K);
(function(a){var C=a.addEvent,A=a.animObject,G=a.arrayMax,F=a.arrayMin,m=a.correctFloat,g=a.Date,k=a.defaultOptions,q=a.defaultPlotOptions,v=a.defined,u=a.each,h=a.erase,e=a.extend,n=a.fireEvent,d=a.grep,c=a.isArray,w=a.isNumber,b=a.isString,y=a.merge,D=a.objectEach,H=a.pick,l=a.removeEvent,B=a.splat,r=a.SVGElement,z=a.syncTimeout,M=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,
states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},
halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,d,f=a.series,p;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();e(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});d=b.events;D(d,function(a,b){C(c,b,a)});if(d&&
d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();u(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);f.length&&(p=f[f.length-1]);c._i=H(p&&p._i,-1)+1;a.orderSeries(this.insert(f))},insert:function(a){var b=this.options.index,c;if(w(b)){for(c=a.length;c--;)if(b>=H(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return H(c,
a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;u(b.axisTypes||[],function(f){u(d[f],function(a){e=a.options;if(c[f]===e.index||void 0!==c[f]&&c[f]===e.id||void 0===c[f]&&0===e.index)b.insert(a.series),b[f]=a,a.isDirty=!0});b[f]||b.optionalAxis===f||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=w(b)?function(f){var d="y"===f&&c.toYData?c.toYData(a):a[f];c[f+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,
2))};u(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=H(b,a.pointStart,0);this.pointInterval=c=H(this.pointInterval,a.pointInterval,1);d&&(a=new g(b),"day"===d?a=+a[g.hcSetDate](a[g.hcGetDate]()+c):"month"===d?a=+a[g.hcSetMonth](a[g.hcGetMonth]()+c):"year"===d&&(a=+a[g.hcSetFullYear](a[g.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,f=(b.userOptions||{}).plotOptions||
{},e=d[this.type];this.userOptions=a;b=y(e,d.series,a);this.tooltipOptions=y(k.tooltip,k.plotOptions.series&&k.plotOptions.series.tooltip,k.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=H(a.stickyTracking,f[this.type]&&f[this.type].stickyTracking,f.series&&f.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===e.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=
(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&v(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,b,c){var d,f=this.chart,e=this.userOptions,p=a+"Index",h=a+"Counter",l=c?c.length:H(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=H(e[p],e["_"+p]),v(d)||(f.series.length||
(f[h]=0),e["_"+p]=d=f[h]%l,f[h]+=1),c&&(b=c[d]));void 0!==d&&(this[p]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||q[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(d,e,h,l){var f=this,p=f.points,g=p&&p.length||0,r,n=f.options,k=f.chart,m=null,q=f.xAxis,
E=n.turboThreshold,z=this.xData,y=this.yData,I=(r=f.pointArrayMap)&&r.length;d=d||[];r=d.length;e=H(e,!0);if(!1!==l&&r&&g===r&&!f.cropped&&!f.hasGroupedData&&f.visible)u(d,function(a,b){p[b].update&&a!==n.data[b]&&p[b].update(a,!1,null,!1)});else{f.xIncrement=null;f.colorCounter=0;u(this.parallelArrays,function(a){f[a+"Data"].length=0});if(E&&r>E){for(h=0;null===m&&h<r;)m=d[h],h++;if(w(m))for(h=0;h<r;h++)z[h]=this.autoIncrement(),y[h]=d[h];else if(c(m))if(I)for(h=0;h<r;h++)m=d[h],z[h]=m[0],y[h]=m.slice(1,
I+1);else for(h=0;h<r;h++)m=d[h],z[h]=m[0],y[h]=m[1];else a.error(12)}else for(h=0;h<r;h++)void 0!==d[h]&&(m={series:f},f.pointClass.prototype.applyOptions.apply(m,[d[h]]),f.updateParallelArrays(m,h));b(y[0])&&a.error(14,!0);f.data=[];f.options.data=f.userOptions.data=d;for(h=g;h--;)p[h]&&p[h].destroy&&p[h].destroy();q&&(q.minRange=q.userMinRange);f.isDirty=k.isDirtyBox=!0;f.isDirtyData=!!p;h=!1}"point"===n.legendType&&(this.processData(),this.generatePoints());e&&k.redraw(h)},processData:function(b){var c=
this.xData,d=this.yData,e=c.length,f;f=0;var h,p,l=this.xAxis,g,r=this.options;g=r.cropThreshold;var n=this.getExtremesFromAll||r.getExtremesFromAll,k=this.isCartesian,r=l&&l.val2lin,m=l&&l.isLog,q,w;if(k&&!this.isDirty&&!l.isDirty&&!this.yAxis.isDirty&&!b)return!1;l&&(b=l.getExtremes(),q=b.min,w=b.max);if(k&&this.sorted&&!n&&(!g||e>g||this.forceCrop))if(c[e-1]<q||c[0]>w)c=[],d=[];else if(c[0]<q||c[e-1]>w)f=this.cropData(this.xData,this.yData,q,w),c=f.xData,d=f.yData,f=f.start,h=!0;for(g=c.length||
1;--g;)e=m?r(c[g])-r(c[g-1]):c[g]-c[g-1],0<e&&(void 0===p||e<p)?p=e:0>e&&this.requireSorting&&a.error(15);this.cropped=h;this.cropStart=f;this.processedXData=c;this.processedYData=d;this.closestPointRange=p},cropData:function(a,b,c,d){var f=a.length,e=0,h=f,p=H(this.cropShoulder,1),l;for(l=0;l<f;l++)if(a[l]>=c){e=Math.max(0,l-p);break}for(c=l;c<f;c++)if(a[c]>d){h=c+p;break}return{xData:a.slice(e,h),yData:b.slice(e,h),start:e,end:h}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,
d,f=this.processedXData,e=this.processedYData,h=this.pointClass,l=f.length,g=this.cropStart||0,r,n=this.hasGroupedData,a=a.keys,k,m=[],q;c||n||(c=[],c.length=b.length,c=this.data=c);a&&n&&(this.options.keys=!1);for(q=0;q<l;q++)r=g+q,n?(k=(new h).init(this,[f[q]].concat(B(e[q]))),k.dataGroup=this.groupMap[q]):(k=c[r])||void 0===b[r]||(c[r]=k=(new h).init(this,b[r],f[q])),k&&(k.index=r,m[q]=k);this.options.keys=a;if(c&&(l!==(d=c.length)||n))for(q=0;q<d;q++)q!==g||n||(q+=l),c[q]&&(c[q].destroyElements(),
c[q].plotX=void 0);this.data=c;this.points=m},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,e,f=[],h=0;e=this.xAxis.getExtremes();var p=e.min,l=e.max,g,r,n,k;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(k=0;k<e;k++)if(r=d[k],n=a[k],g=(w(n,!0)||c(n))&&(!b.positiveValuesOnly||n.length||0<n),r=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[k]||r)>=p&&(d[k]||r)<=l,g&&r)if(g=n.length)for(;g--;)null!==n[g]&&(f[h++]=n[g]);else f[h++]=n;this.dataMin=
F(f);this.dataMax=G(f)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,f=this.yAxis,e=this.points,h=e.length,l=!!this.modifyValue,g=a.pointPlacement,r="between"===g||w(g),n=a.threshold,k=a.startFromThreshold?n:0,q,z,y,B,u=Number.MAX_VALUE;"between"===g&&(g=.5);w(g)&&(g*=H(a.pointRange||c.pointRange));for(a=0;a<h;a++){var D=e[a],M=D.x,A=D.y;z=D.low;var C=b&&f.stacks[(this.negStacks&&A<(k?0:n)?"-":"")+this.stackKey],
F;f.positiveValuesOnly&&null!==A&&0>=A&&(D.isNull=!0);D.plotX=q=m(Math.min(Math.max(-1E5,c.translate(M,0,0,0,1,g,"flags"===this.type)),1E5));b&&this.visible&&!D.isNull&&C&&C[M]&&(B=this.getStackIndicator(B,M,this.index),F=C[M],A=F.points[B.key],z=A[0],A=A[1],z===k&&B.key===C[M].base&&(z=H(n,f.min)),f.positiveValuesOnly&&0>=z&&(z=null),D.total=D.stackTotal=F.total,D.percentage=F.total&&D.y/F.total*100,D.stackY=A,F.setOffset(this.pointXOffset||0,this.barW||0));D.yBottom=v(z)?f.translate(z,0,1,0,1):
null;l&&(A=this.modifyValue(A,D));D.plotY=z="number"===typeof A&&Infinity!==A?Math.min(Math.max(-1E5,f.translate(A,0,1,0,1)),1E5):void 0;D.isInside=void 0!==z&&0<=z&&z<=f.len&&0<=q&&q<=c.len;D.clientX=r?m(c.translate(M,0,0,0,1,g)):q;D.negative=D.y<(n||0);D.category=d&&void 0!==d[D.x]?d[D.x]:D.x;D.isNull||(void 0!==y&&(u=Math.min(u,Math.abs(q-y))),y=q);D.zone=this.zones.length&&D.getZone()}this.closestPointRangePx=u},getValidPoints:function(a,b){var c=this.chart;return d(a||this.points||[],function(a){return b&&
!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,e=this.clipBox,h=e||b.clipBox,l=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,c.xAxis,c.yAxis].join(),g=b[l],p=b[l+"m"];g||(a&&(h.width=0,b[l+"m"]=p=d.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[l]=g=d.clipRect(h),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=1);!1!==c.clip&&
(this.group.clip(a||e?g:b.clipRect),this.markerGroup.clip(p),this.sharedClipKey=l);a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),0===g.count.length&&l&&b[l]&&(e||(b[l]=b[l].destroy()),b[l+"m"]&&(b[l+"m"]=b[l+"m"].destroy())))},animate:function(a){var b=this.chart,c=A(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();
n(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,d,f,e,h=this.options.marker,l,g,r,n,k=this[this.specialGroup]||this.markerGroup,m=H(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)f=a[d],c=f.plotY,e=f.graphic,l=f.marker||{},g=!!f.marker,r=m&&void 0===l.enabled||l.enabled,n=f.isInside,r&&w(c)&&null!==f.y?(c=H(l.symbol,this.symbol),f.hasImage=0===c.indexOf("url"),r=this.markerAttribs(f,
f.selected&&"select"),e?e[n?"show":"hide"](!0).animate(r):n&&(0<r.width||f.hasImage)&&(f.graphic=e=b.renderer.symbol(c,r.x,r.y,r.width,r.height,g?l:h).add(k)),e&&e.attr(this.pointAttribs(f,f.selected&&"select")),e&&e.addClass(f.getClassName(),!0)):e&&(f.graphic=e.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=H(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],f=H(b&&b.radius,c&&c.radius,f+(c&&c.radiusPlus||0)));a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-
f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},e=this.color,h=d&&d.color,l=a&&a.color,d=H(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;e=h||a||l||e;a=f.fillColor||c.fillColor||e;e=f.lineColor||c.lineColor||e;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=H(b.lineWidth,c.lineWidth,d+H(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,e=b.lineColor||c.lineColor||e);return{stroke:e,"stroke-width":d,
fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(M.navigator.userAgent),d,f,e=a.data||[],g,k;n(a,"destroy");l(a);u(a.axisTypes||[],function(b){(k=a[b])&&k.series&&(h(k.series,a),k.isDirty=k.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(f=e.length;f--;)(g=e[f])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);D(a,function(a,b){a instanceof r&&!a.survive&&(d=c&&"group"===b?"hide":"destroy",a[d]())});b.hoverSeries===a&&(b.hoverSeries=
null);h(b.series,a);b.orderSeries();D(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var d=this,f=d.options,e=f.step,h,l=[],g=[],p;a=a||d.points;(h=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&h&&(e=4-e);!f.connectNulls||b||c||(a=this.getValidPoints(a));u(a,function(h,r){var n=h.plotX,k=h.plotY,m=a[r-1];(h.leftCliff||m&&m.rightCliff)&&!c&&(p=!0);h.isNull&&!v(b)&&0<r?p=!f.connectNulls:h.isNull&&!b?p=!0:(0===r||p?r=["M",h.plotX,h.plotY]:d.getPointSpline?r=d.getPointSpline(a,
h,r):e?(r=1===e?["L",m.plotX,k]:2===e?["L",(m.plotX+n)/2,m.plotY,"L",(m.plotX+n)/2,k]:["L",n,m.plotY],r.push("L",n,k)):r=["L",n,k],g.push(h.x),e&&g.push(h.x),l.push.apply(l,r),p=!1)});l.xMap=g;return d.graphPath=l},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];u(this.zones,function(c,e){d.push(["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+e+" "+(c.className||""),c.color||
a.color,c.dashStyle||b.dashStyle])});u(d,function(f,d){var e=f[0],h=a[e];h?(h.endX=c.xMap,h.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(a.group),h={stroke:f[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?h.dashstyle=f[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[e].attr(h).shadow(2>d&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,
d=this.zones,f,e,h=this.clips||[],l,g=this.graph,r=this.area,n=Math.max(b.chartWidth,b.chartHeight),k=this[(this.zoneAxis||"y")+"Axis"],m,q,w=b.inverted,z,y,B,v,D=!1;d.length&&(g||r)&&k&&void 0!==k.min&&(q=k.reversed,z=k.horiz,g&&g.hide(),r&&r.hide(),m=k.getExtremes(),u(d,function(d,p){f=q?z?b.plotWidth:0:z?0:k.toPixels(m.min);f=Math.min(Math.max(H(e,f),0),n);e=Math.min(Math.max(Math.round(k.toPixels(H(d.value,m.max),!0)),0),n);D&&(f=e=k.toPixels(m.max));y=Math.abs(f-e);B=Math.min(f,e);v=Math.max(f,
e);k.isXAxis?(l={x:w?v:B,y:0,width:y,height:n},z||(l.x=b.plotHeight-l.x)):(l={x:0,y:w?v:B,width:n,height:y},z&&(l.y=b.plotWidth-l.y));w&&c.isVML&&(l=k.isXAxis?{x:0,y:q?B:v,height:l.width,width:b.chartWidth}:{x:l.y-b.plotLeft-b.spacingBox.x,y:0,width:l.height,height:b.chartHeight});h[p]?h[p].animate(l):(h[p]=c.clipRect(l),g&&a["zone-graph-"+p].clip(h[p]),r&&a["zone-area-"+p].clip(h[p]));D=d.value>m.max}),this.clips=h)},invertGroups:function(a){function b(){u(["group","markerGroup"],function(b){c[b]&&
(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=C(d,"resize",b),C(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=this[a],h=!e;h&&(this[a]=e=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||""),
!0);e.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&A(d.animation).duration,e=a.visible?"inherit":"hidden",h=d.zIndex,l=a.hasRendered,g=b.seriesGroup,r=b.inverted;c=a.plotGroup("group","series",e,h,g);a.markerGroup=
a.plotGroup("markerGroup","markers",e,h,g);f&&a.animate(!0);c.inverted=a.isCartesian?r:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(r);!1===d.clip||a.sharedClipKey||l||c.clip(b.clipRect);f&&a.animate();l||(a.animationTimeout=z(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,
c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:H(d&&d.left,a.plotLeft),translateY:H(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,
f,d){var e,h;if(h=c&&c.length)return e=b.kdAxisArray[f%d],c.sort(function(a,b){return a[e]-b[e]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),f+1,d),right:a(c.slice(h+1),f+1,d)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;z(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,l,g){var r=b.point,p=d.kdAxisArray[l%g],n,k,m=r;k=v(a[f])&&v(r[f])?
Math.pow(a[f]-r[f],2):null;n=v(a[e])&&v(r[e])?Math.pow(a[e]-r[e],2):null;n=(k||0)+(n||0);r.dist=v(n)?Math.sqrt(n):Number.MAX_VALUE;r.distX=v(k)?Math.sqrt(k):Number.MAX_VALUE;p=a[p]-r[p];n=0>p?"left":"right";k=0>p?"right":"left";b[n]&&(n=c(a,b[n],l+1,g),m=n[h]<m[h]?n:r);b[k]&&Math.sqrt(p*p)<m[h]&&(a=c(a,b[k],l+1,g),m=a[h]<m[h]?a:m);return m}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||
this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){function C(a,e,g,d,c){var h=a.chart.inverted;this.axis=a;this.isNegative=g;this.options=e;this.x=d;this.total=null;this.points={};this.stack=c;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(h?g?"left":"right":"center"),verticalAlign:e.verticalAlign||(h?"middle":g?"bottom":"top"),y:u(e.y,h?4:g?14:-6),x:u(e.x,h?g?-6:6:0)};this.textAlign=e.textAlign||(h?g?"right":"left":"center")}var A=a.Axis,G=a.Chart,
F=a.correctFloat,m=a.defined,g=a.destroyObjectProperties,k=a.each,q=a.format,v=a.objectEach,u=a.pick;a=a.Series;C.prototype={destroy:function(){g(this,this.axis)},render:function(a){var e=this.options,h=e.format,h=h?q(h,this):e.formatter.call(this);this.label?this.label.attr({text:h,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(h,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,e){var h=this.axis,d=
h.chart,c=d.inverted,g=h.reversed,g=this.isNegative&&!g||!this.isNegative&&g,b=h.translate(h.usePercentage?100:this.total,0,0,0,1),h=h.translate(0),h=Math.abs(b-h);a=d.xAxis[0].translate(this.x)+a;var k=d.plotHeight,c={x:c?g?b:b-h:a,y:c?k-a-e:g?k-b-h:k-b,width:c?h:e,height:c?e:h};if(e=this.label)e.align(this.alignOptions,null,c),c=e.alignAttr,e[!1===this.options.crop||d.isInsidePlot(c.x,c.y)?"show":"hide"](!0)}};G.prototype.getStacks=function(){var a=this;k(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});k(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+u(e.options.stack,""))})};A.prototype.buildStacks=function(){var a=this.series,e,g=u(this.options.reversedStacks,!0),d=a.length,c;if(!this.isXAxis){this.usePercentage=!1;for(c=d;c--;)a[g?c:d-c-1].setStackedPoints();for(c=d;c--;)e=a[g?c:d-c-1],e.setStackCliffs&&e.setStackCliffs();if(this.usePercentage)for(c=0;c<d;c++)a[c].setPercentStacks()}};A.prototype.renderStackTotals=
function(){var a=this.chart,e=a.renderer,g=this.stacks,d=this.stackTotalGroup;d||(this.stackTotalGroup=d=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());d.translate(a.plotLeft,a.plotTop);v(g,function(a){v(a,function(a){a.render(d)})})};A.prototype.resetStacks=function(){var a=this,e=a.stacks;a.isXAxis||v(e,function(e){v(e,function(d,c){d.touched<a.stacksTouched?(d.destroy(),delete e[c]):(d.total=null,d.cum=null)})})};A.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&
(a=this.stacks=this.oldStacks),v(a,function(a){v(a,function(a){a.cum=a.total})}))};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,e=this.processedYData,g=[],d=e.length,c=this.options,k=c.threshold,b=c.startFromThreshold?k:0,q=c.stack,c=c.stacking,v=this.stackKey,H="-"+v,l=this.negStacks,B=this.yAxis,r=B.stacks,z=B.oldStacks,M,p,E,I,A,f,t;B.stacksTouched+=1;for(A=0;A<d;A++)f=a[A],t=e[A],
M=this.getStackIndicator(M,f,this.index),I=M.key,E=(p=l&&t<(b?0:k))?H:v,r[E]||(r[E]={}),r[E][f]||(z[E]&&z[E][f]?(r[E][f]=z[E][f],r[E][f].total=null):r[E][f]=new C(B,B.options.stackLabels,p,f,q)),E=r[E][f],null!==t&&(E.points[I]=E.points[this.index]=[u(E.cum,b)],m(E.cum)||(E.base=I),E.touched=B.stacksTouched,0<M.index&&!1===this.singleStacks&&(E.points[I][0]=E.points[this.index+","+f+",0"][0])),"percent"===c?(p=p?v:H,l&&r[p]&&r[p][f]?(p=r[p][f],E.total=p.total=Math.max(p.total,E.total)+Math.abs(t)||
0):E.total=F(E.total+(Math.abs(t)||0))):E.total=F(E.total+(t||0)),E.cum=u(E.cum,b)+(t||0),null!==t&&(E.points[I].push(E.cum),g[A]=E.cum);"percent"===c&&(B.usePercentage=!0);this.stackedYData=g;B.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,e=a.stackKey,g=a.yAxis.stacks,d=a.processedXData,c;k([e,"-"+e],function(e){for(var b=d.length,h,k;b--;)if(h=d[b],c=a.getStackIndicator(c,h,a.index,e),h=(k=g[e]&&g[e][h])&&k.points[c.key])k=k.total?100/k.total:0,h[0]=F(h[0]*k),h[1]=F(h[1]*k),
a.stackedYData[b]=h[1]})};a.prototype.getStackIndicator=function(a,e,g,d){!m(a)||a.x!==e||d&&a.key!==d?a={x:e,index:0,key:d}:a.index++;a.key=[g,e,a.index].join();return a}})(K);(function(a){var C=a.addEvent,A=a.animate,G=a.Axis,F=a.createElement,m=a.css,g=a.defined,k=a.each,q=a.erase,v=a.extend,u=a.fireEvent,h=a.inArray,e=a.isNumber,n=a.isObject,d=a.isArray,c=a.merge,w=a.objectEach,b=a.pick,y=a.Point,D=a.Series,H=a.seriesTypes,l=a.setAnimation,B=a.splat;v(a.Chart.prototype,{addSeries:function(a,c,
d){var e,h=this;a&&(c=b(c,!0),u(h,"addSeries",{options:a},function(){e=h.initSeries(a);h.isDirtyLegend=!0;h.linkSeries();c&&h.redraw(d)}));return e},addAxis:function(a,d,e,h){var g=d?"xAxis":"yAxis",l=this.options;a=c(a,{index:this[g].length,isX:d});new G(this,a);l[g]=B(l[g]||{});l[g].push(a);b(e,!0)&&this.redraw(h)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,h=function(){d&&m(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};
d||(b.loadingDiv=d=F("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=F("span",{className:"highcharts-loading-inner"},null,d),C(b,"redraw",h));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;m(d,v(e.style,{zIndex:10}));m(b.loadingSpan,e.labelStyle);b.loadingShown||(m(d,{opacity:0,display:""}),A(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;h()},hideLoading:function(){var a=this.options,b=
this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",A(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){m(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
update:function(a,d){var l=this,r={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},n=a.chart,m,q;if(n){c(!0,l.options.chart,n);"className"in n&&l.setClassName(n.className);if("inverted"in n||"polar"in n)l.propFromSeries(),m=!0;"alignTicks"in n&&(m=!0);w(n,function(a,b){-1!==h("chart."+b,l.propsRequireUpdateSeries)&&(q=!0);-1!==h(b,l.propsRequireDirtyBox)&&(l.isDirtyBox=!0)});"style"in n&&l.renderer.setStyle(n.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&c(!0,this.options.plotOptions,
a.plotOptions);w(a,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[r[b]])l[r[b]](a);"chart"!==b&&-1!==h(b,l.propsRequireUpdateSeries)&&(q=!0)});k("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&k(B(a[b]),function(a,c){(c=g(a.id)&&l.get(a.id)||l[b][c])&&c.coll===b&&c.update(a,!1)})});m&&k(l.axes,function(a){a.update({},!1)});q&&k(l.series,function(a){a.update({},!1)});a.loading&&c(!0,l.options.loading,a.loading);m=n&&n.width;
n=n&&n.height;e(m)&&m!==l.chartWidth||e(n)&&n!==l.chartHeight?l.setSize(m,n):b(d,!0)&&l.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});v(y.prototype,{update:function(a,c,d,e){function h(){l.applyOptions(a);null===l.y&&f&&(l.graphic=f.destroy());n(a,!0)&&(f&&f.element&&a&&a.marker&&a.marker.symbol&&(l.graphic=f.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()));r=l.index;g.updateParallelArrays(l,r);p.data[r]=n(p.data[r],!0)||n(a,!0)?l.options:a;g.isDirty=g.isDirtyData=
!0;!g.fixedBox&&g.hasCartesianSeries&&(k.isDirtyBox=!0);"point"===p.legendType&&(k.isDirtyLegend=!0);c&&k.redraw(d)}var l=this,g=l.series,f=l.graphic,r,k=g.chart,p=g.options;c=b(c,!0);!1===e?h():l.firePointEvent("update",{options:a},h)},remove:function(a,b){this.series.removePoint(h(this,this.series.data),a,b)}});v(D.prototype,{addPoint:function(a,c,d,e){var h=this.options,l=this.data,g=this.chart,f=this.xAxis,f=f&&f.hasNames&&f.names,r=h.data,k,p,n=this.xData,m,q;c=b(c,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,
[a]);q=k.x;m=n.length;if(this.requireSorting&&q<n[m-1])for(p=!0;m&&n[m-1]>q;)m--;this.updateParallelArrays(k,"splice",m,0,0);this.updateParallelArrays(k,m);f&&k.name&&(f[q]=k.name);r.splice(m,0,a);p&&(this.data.splice(m,0,null),this.processData());"point"===h.legendType&&this.generatePoints();d&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(k,"shift"),r.shift()));this.isDirtyData=this.isDirty=!0;c&&g.redraw(e)},removePoint:function(a,c,d){var e=this,h=e.data,g=h[a],k=e.points,
f=e.chart,r=function(){k&&k.length===h.length&&k.splice(a,1);h.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(g||{series:e},"splice",a,1);g&&g.destroy();e.isDirty=!0;e.isDirtyData=!0;c&&f.redraw()};l(d,f);c=b(c,!0);g?g.firePointEvent("remove",null,r):r()},remove:function(a,c,d){function e(){h.destroy();l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();b(a,!0)&&l.redraw(c)}var h=this,l=h.chart;!1!==d?u(h,"remove",null,e):e()},update:function(a,d){var e=this,h=e.chart,l=e.userOptions,g=
e.oldType||e.type,r=a.type||l.type||h.options.chart.type,f=H[g].prototype,n=["group","markerGroup","dataLabelsGroup"],m;if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,d);if(r&&r!==g||void 0!==a.zIndex)n.length=0;k(n,function(a){n[a]=e[a];delete e[a]});a=c(l,{animation:!1,index:e.index,pointStart:e.xData[0]},{data:e.options.data},a);e.remove(!1,null,!1);for(m in f)e[m]=void 0;v(e,H[r||g].prototype);k(n,function(a){e[a]=n[a]});e.init(h,a);e.oldType=g;h.linkSeries();b(d,
!0)&&h.redraw(!1)}});v(G.prototype,{update:function(a,d){var e=this.chart;a=e.options[this.coll][this.options.index]=c(this.userOptions,a);this.destroy(!0);this.init(e,v(a,{events:void 0}));e.isDirtyBox=!0;b(d,!0)&&e.redraw()},remove:function(a){for(var c=this.chart,e=this.coll,h=this.series,l=h.length;l--;)h[l]&&h[l].remove(!1);q(c.axes,this);q(c[e],this);d(c.options[e])?c.options[e].splice(this.options.index,1):delete c.options[e];k(c[e],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=
!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var C=a.color,A=a.each,G=a.map,F=a.pick,m=a.Series,g=a.seriesType;g("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var g=[],m=[],v=this.xAxis,u=this.yAxis,h=u.stacks[this.stackKey],e={},n=this.points,d=this.index,c=u.series,w=c.length,b,y=F(u.options.reversedStacks,!0)?1:-1,D;if(this.options.stacking){for(D=
0;D<n.length;D++)e[n[D].x]=n[D];a.objectEach(h,function(a,b){null!==a.total&&m.push(b)});m.sort(function(a,b){return a-b});b=G(c,function(){return this.visible});A(m,function(a,c){var l=0,k,n;if(e[a]&&!e[a].isNull)g.push(e[a]),A([-1,1],function(l){var g=1===l?"rightNull":"leftNull",r=0,q=h[m[c+l]];if(q)for(D=d;0<=D&&D<w;)k=q.points[D],k||(D===d?e[a][g]=!0:b[D]&&(n=h[a].points[D])&&(r-=n[1]-n[0])),D+=y;e[a][1===l?"rightCliff":"leftCliff"]=r});else{for(D=d;0<=D&&D<w;){if(k=h[a].points[D]){l=k[1];break}D+=
y}l=u.translate(l,0,1,0,1);g.push({isNull:!0,plotX:v.translate(a,0,0,0,1),x:a,plotY:l,yBottom:l})}})}return g},getGraphPath:function(a){var g=m.prototype.getGraphPath,k=this.options,u=k.stacking,h=this.yAxis,e,n,d=[],c=[],w=this.index,b,y=h.stacks[this.stackKey],D=k.threshold,A=h.getThreshold(k.threshold),l,k=k.connectNulls||"percent"===u,B=function(e,l,g){var k=a[e];e=u&&y[k.x].points[w];var n=k[g+"Null"]||0;g=k[g+"Cliff"]||0;var r,m,k=!0;g||n?(r=(n?e[0]:e[1])+g,m=e[0]+g,k=!!n):!u&&a[l]&&a[l].isNull&&
(r=m=D);void 0!==r&&(c.push({plotX:b,plotY:null===r?A:h.getThreshold(r),isNull:k,isCliff:!0}),d.push({plotX:b,plotY:null===m?A:h.getThreshold(m),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints());for(e=0;e<a.length;e++)if(n=a[e].isNull,b=F(a[e].rectPlotX,a[e].plotX),l=F(a[e].yBottom,A),!n||k)k||B(e,e-1,"left"),n&&!u&&k||(c.push(a[e]),d.push({x:e,plotX:b,plotY:l})),k||B(e,e+1,"right");e=g.call(this,c,!0,!0);d.reversed=!0;n=g.call(this,d,!0,!0);n.length&&(n[0]="L");n=e.concat(n);g=g.call(this,
c,!1,k);n.xMap=e.xMap;this.areaPath=n;return g},drawGraph:function(){this.areaPath=[];m.prototype.drawGraph.apply(this);var a=this,g=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];A(this.zones,function(h,e){u.push(["zone-area-"+e,"highcharts-area highcharts-zone-area-"+e+" "+h.className,h.color||a.color,h.fillColor||v.fillColor])});A(u,function(h){var e=h[0],k=a[e];k?(k.endX=g.xMap,k.animate({d:g})):(k=a[e]=a.chart.renderer.path(g).addClass(h[1]).attr({fill:F(h[3],
C(h[2]).setOpacity(F(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=g.xMap;k.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,F){var m=G.plotX,g=G.plotY,k=a[F-1];F=a[F+1];var q,v,u,h;if(k&&!k.isNull&&!1!==k.doCurve&&!G.isCliff&&F&&!F.isNull&&!1!==F.doCurve&&!G.isCliff){a=k.plotY;u=F.plotX;F=F.plotY;var e=0;q=(1.5*m+k.plotX)/2.5;v=(1.5*g+a)/2.5;u=(1.5*
m+u)/2.5;h=(1.5*g+F)/2.5;u!==q&&(e=(h-v)*(u-m)/(u-q)+g-h);v+=e;h+=e;v>a&&v>g?(v=Math.max(a,g),h=2*g-v):v<a&&v<g&&(v=Math.min(a,g),h=2*g-v);h>F&&h>g?(h=Math.max(F,g),v=2*g-h):h<F&&h<g&&(h=Math.min(F,g),v=2*g-h);G.rightContX=u;G.rightContY=h}G=["C",C(k.rightContX,k.plotX),C(k.rightContY,k.plotY),C(q,m),C(v,g),m,g];k.rightContX=k.rightContY=null;return G}})})(K);(function(a){var C=a.seriesTypes.area.prototype,A=a.seriesType;A("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,
getGraphPath:C.getGraphPath,setStackCliffs:C.setStackCliffs,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.animObject,A=a.color,G=a.each,F=a.extend,m=a.isNumber,g=a.merge,k=a.pick,q=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},
dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){q.prototype.init.apply(this,arguments);var a=this,e=a.chart;e.hasRendered&&G(e.series,function(e){e.type===a.type&&(e.isDirty=!0)})},getColumnMetrics:function(){var a=this,e=a.options,g=a.xAxis,d=a.yAxis,c=g.reversed,m,b={},q=0;!1===e.grouping?
q=1:G(a.chart.series,function(c){var e=c.options,g=c.yAxis,h;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||d.len!==g.len||d.pos!==g.pos||(e.stacking?(m=c.stackKey,void 0===b[m]&&(b[m]=q++),h=b[m]):!1!==e.grouping&&(h=q++),c.columnIndex=h)});var u=Math.min(Math.abs(g.transA)*(g.ordinalSlope||e.pointRange||g.closestPointRange||g.tickInterval||1),g.len),v=u*e.groupPadding,l=(u-2*v)/(q||1),e=Math.min(e.maxPointWidth||g.len,k(e.pointWidth,l*(1-2*e.pointPadding)));a.columnMetrics=
{width:e,offset:(l-e)/2+(v+((a.columnIndex||0)+(c?1:0))*l-u/2)*(c?-1:1)};return a.columnMetrics},crispCol:function(a,e,g,d){var c=this.chart,h=this.borderWidth,b=-(h%2?.5:0),h=h%2?.5:1;c.inverted&&c.renderer.isVML&&(h+=1);this.options.crisp&&(g=Math.round(a+g)+b,a=Math.round(a)+b,g-=a);d=Math.round(e+d)+h;b=.5>=Math.abs(e)&&.5<d;e=Math.round(e)+h;d-=e;b&&d&&(--e,d+=1);return{x:a,y:e,width:g,height:d}},translate:function(){var a=this,e=a.chart,g=a.options,d=a.dense=2>a.closestPointRange*a.xAxis.transA,
d=a.borderWidth=k(g.borderWidth,d?0:1),c=a.yAxis,m=a.translatedThreshold=c.getThreshold(g.threshold),b=k(g.minPointLength,5),y=a.getColumnMetrics(),u=y.width,v=a.barW=Math.max(u,1+2*d),l=a.pointXOffset=y.offset;e.inverted&&(m-=.5);g.pointPadding&&(v=Math.ceil(v));q.prototype.translate.apply(a);G(a.points,function(d){var g=k(d.yBottom,m),h=999+Math.abs(g),h=Math.min(Math.max(-h,d.plotY),c.len+h),n=d.plotX+l,p=v,q=Math.min(h,g),w,y=Math.max(h,g)-q;Math.abs(y)<b&&b&&(y=b,w=!c.reversed&&!d.negative||
c.reversed&&d.negative,q=Math.abs(q-m)>b?g-b:m-(w?b:0));d.barX=n;d.pointWidth=u;d.tooltipPos=e.inverted?[c.len+c.pos-e.plotLeft-h,a.xAxis.len-n-p/2,y]:[n+p/2,h+c.pos-e.plotTop,y];d.shapeType="rect";d.shapeArgs=a.crispCol.apply(a,d.isNull?[n,m,p,0]:[n,q,p,y])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,e){var h=this.options,d,c=this.pointAttrToOptions||{};
d=c.stroke||"borderColor";var k=c["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a[d]||h[d]||this.color||b,q=a[k]||h[k]||this[k]||0,c=h.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);e&&(a=g(h.states[e],a.options.states&&a.options.states[e]||{}),e=a.brightness,b=a.color||void 0!==e&&A(b).brighten(a.brightness).get()||b,m=a[d]||m,q=a[k]||q,c=a.dashStyle||c);d={fill:b,stroke:m,"stroke-width":q};h.borderRadius&&(d.r=h.borderRadius);c&&(d.dashstyle=
c);return d},drawPoints:function(){var a=this,e=this.chart,k=a.options,d=e.renderer,c=k.animationLimit||250,q;G(a.points,function(b){var h=b.graphic;if(m(b.plotY)&&null!==b.y){q=b.shapeArgs;if(h)h[e.pointCount<c?"animate":"attr"](g(q));else b.graphic=h=d[b.shapeType](q).add(b.group||a.group);h.attr(a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);h.addClass(b.getClassName(),!0)}else h&&(b.graphic=h.destroy())})},animate:function(a){var e=this,g=this.yAxis,
d=e.options,c=this.chart.inverted,h={};u&&(a?(h.scaleY=.001,a=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(d.threshold))),c?h.translateX=a-g.len:h.translateY=a,e.group.attr(h)):(h[c?"translateX":"translateY"]=g.pos,e.group.animate(h,F(C(e.options.animation),{step:function(a,c){e.group.attr({scaleY:Math.max(.001,c.pos)})}})),e.animate=null))},remove:function(){var a=this,e=a.chart;e.hasRendered&&G(e.series,function(e){e.type===a.type&&(e.isDirty=!0)});q.prototype.remove.apply(a,arguments)}})})(K);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(K);(function(a){var C=a.pick,A=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,F=this.chart,m=2*(a.slicedOffset||0),g=F.plotWidth-2*m,F=F.plotHeight-2*m,k=a.center,k=[C(k[0],"50%"),C(k[1],"50%"),a.size||"100%",a.innerSize||0],q=Math.min(g,F),v,u;for(v=0;4>v;++v)u=k[v],a=2>v||2===v&&/%$/.test(u),k[v]=A(u,[g,
F,q,k[2]][v])+(a?m:0);k[3]>k[2]&&(k[3]=k[2]);return k}}})(K);(function(a){var C=a.addEvent,A=a.defined,G=a.each,F=a.extend,m=a.inArray,g=a.noop,k=a.pick,q=a.Point,v=a.Series,u=a.seriesType,h=a.setAnimation;u("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},
borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var e=this,d=e.points,c=e.startAngleRad;a||(G(d,function(a){var b=a.graphic,d=a.shapeArgs;b&&(b.attr({r:a.startR||e.center[3]/2,start:c,end:c}),b.animate({r:d.r,start:d.start,end:d.end},e.options.animation))}),e.animate=null)},
updateTotals:function(){var a,g=0,d=this.points,c=d.length,h,b=this.options.ignoreHiddenPoint;for(a=0;a<c;a++)h=d[a],g+=b&&!h.visible?0:h.isNull?0:h.y;this.total=g;for(a=0;a<c;a++)h=d[a],h.percentage=0<g&&(h.visible||!b)?h.y/g*100:0,h.total=g},generatePoints:function(){v.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var e=0,d=this.options,c=d.slicedOffset,g=c+(d.borderWidth||0),b,h,m,q=d.startAngle||0,l=this.startAngleRad=Math.PI/180*(q-90),q=
(this.endAngleRad=Math.PI/180*(k(d.endAngle,q+360)-90))-l,u=this.points,r,z=d.dataLabels.distance,d=d.ignoreHiddenPoint,v,p=u.length,E;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){m=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+d.labelDistance)};for(v=0;v<p;v++){E=u[v];E.labelDistance=k(E.options.dataLabels&&E.options.dataLabels.distance,z);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,E.labelDistance);b=l+e*q;if(!d||E.visible)e+=
E.percentage/100;h=l+e*q;E.shapeType="arc";E.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*b)/1E3,end:Math.round(1E3*h)/1E3};m=(h+b)/2;m>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);E.slicedTranslation={translateX:Math.round(Math.cos(m)*c),translateY:Math.round(Math.sin(m)*c)};h=Math.cos(m)*a[2]/2;r=Math.sin(m)*a[2]/2;E.tooltipPos=[a[0]+.7*h,a[1]+.7*r];E.half=m<-Math.PI/2||m>Math.PI/2?1:0;E.angle=m;b=Math.min(g,E.labelDistance/5);E.labelPos=[a[0]+h+Math.cos(m)*E.labelDistance,
a[1]+r+Math.sin(m)*E.labelDistance,a[0]+h+Math.cos(m)*b,a[1]+r+Math.sin(m)*b,a[0]+h,a[1]+r,0>E.labelDistance?"center":E.half?"right":"left",m]}},drawGraph:null,drawPoints:function(){var a=this,g=a.chart.renderer,d,c,h,b,k=a.options.shadow;k&&!a.shadowGroup&&(a.shadowGroup=g.g("shadow").add(a.group));G(a.points,function(e){if(!e.isNull){c=e.graphic;b=e.shapeArgs;d=e.getTranslate();var m=e.shadowGroup;k&&!m&&(m=e.shadowGroup=g.g("shadow").add(a.shadowGroup));m&&m.attr(d);h=a.pointAttribs(e,e.selected&&
"select");c?c.setRadialReference(a.center).attr(h).animate(F(b,d)):(e.graphic=c=g[e.shapeType](b).setRadialReference(a.center).attr(d).add(a.group),e.visible||c.attr({visibility:"hidden"}),c.attr(h).attr({"stroke-linejoin":"round"}).shadow(k,m));c.addClass(e.getClassName())}})},searchPoint:g,sortByAngle:function(a,g){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*g})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:g},{init:function(){q.prototype.init.apply(this,
arguments);var a=this,g;a.name=k(a.name,"Slice");g=function(d){a.slice("select"===d.type)};C(a,"select",g);C(a,"unselect",g);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,g){var d=this,c=d.series,e=c.chart,b=c.options.ignoreHiddenPoint;g=k(g,b);a!==d.visible&&(d.visible=d.options.visible=a=void 0===a?!d.visible:a,c.options.data[m(d,c.data)]=d.options,G(["graphic","dataLabel","connector","shadowGroup"],function(b){if(d[b])d[b][a?"show":"hide"](!0)}),d.legendItem&&
e.legend.colorizeItem(d,a),a||"hover"!==d.state||d.setState(""),b&&(c.isDirty=!0),g&&e.redraw())},slice:function(a,g,d){var c=this.series;h(d,c.chart);k(g,!0);this.sliced=this.options.sliced=A(a)?a:!this.sliced;c.options.data[m(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var e=this.shapeArgs;return this.sliced||
!this.visible?[]:this.series.chart.renderer.symbols.arc(e.x,e.y,e.r+a,e.r+a,{innerR:this.shapeArgs.r,start:e.start,end:e.end})}})})(K);(function(a){var C=a.addEvent,A=a.arrayMax,G=a.defined,F=a.each,m=a.extend,g=a.format,k=a.map,q=a.merge,v=a.noop,u=a.pick,h=a.relativeLength,e=a.Series,n=a.seriesTypes,d=a.stableSort;a.distribute=function(a,e){function b(a,b){return a.target-b.target}var c,g=!0,h=a,l=[],m;m=0;for(c=a.length;c--;)m+=a[c].size;if(m>e){d(a,function(a,b){return(b.rank||0)-(a.rank||0)});
for(m=c=0;m<=e;)m+=a[c].size,c++;l=a.splice(c-1,a.length)}d(a,b);for(a=k(a,function(a){return{size:a.size,targets:[a.target]}});g;){for(c=a.length;c--;)g=a[c],m=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,m-g.size/2),e-g.size);c=a.length;for(g=!1;c--;)0<c&&a[c-1].pos+a[c-1].size>a[c].pos&&(a[c-1].size+=a[c].size,a[c-1].targets=a[c-1].targets.concat(a[c].targets),a[c-1].pos+a[c-1].size>e&&(a[c-1].pos=e-a[c-1].size),a.splice(c,1),g=!0)}c=0;F(a,function(a){var b=
0;F(a.targets,function(){h[c].pos=a.pos+b;b+=h[c].size;c++})});h.push.apply(h,l);d(h,b)};e.prototype.drawDataLabels=function(){var c=this,d=c.options,b=d.dataLabels,e=c.points,h,k,l=c.hasRendered||0,m,r,n=u(b.defer,!!d.animation),v=c.chart.renderer;if(b.enabled||c._hasPointLabels)c.dlProcessOptions&&c.dlProcessOptions(b),r=c.plotGroup("dataLabelsGroup","data-labels",n&&!l?"hidden":"visible",b.zIndex||6),n&&(r.attr({opacity:+l}),l||C(c,"afterAnimate",function(){c.visible&&r.show(!0);r[d.animation?
"animate":"attr"]({opacity:1},{duration:200})})),k=b,F(e,function(e){var l,p=e.dataLabel,n,f,t=e.connector,w=!p,z;h=e.dlOptions||e.options&&e.options.dataLabels;if(l=u(h&&h.enabled,k.enabled)&&null!==e.y)b=q(k,h),n=e.getLabelConfig(),m=b.format?g(b.format,n):b.formatter.call(n,b),z=b.style,n=b.rotation,z.color=u(b.color,z.color,c.color,"#000000"),"contrast"===z.color&&(e.contrastColor=v.getContrast(e.color||c.color),z.color=b.inside||0>u(e.labelDistance,b.distance)||d.stacking?e.contrastColor:"#000000"),
d.cursor&&(z.cursor=d.cursor),f={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:n,padding:b.padding,zIndex:1},a.objectEach(f,function(a,b){void 0===a&&delete f[b]});!p||l&&G(m)?l&&G(m)&&(p?f.text=m:(p=e.dataLabel=v[n?"text":"label"](m,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),p.addClass("highcharts-data-label-color-"+e.colorIndex+" "+(b.className||"")+(b.useHTML?"highcharts-tracker":""))),p.attr(f),p.css(z).shadow(b.shadow),p.added||
p.add(r),c.alignDataLabel(e,p,b,null,w)):(e.dataLabel=p=p.destroy(),t&&(e.connector=t.destroy()))})};e.prototype.alignDataLabel=function(a,d,b,e,g){var c=this.chart,h=c.inverted,k=u(a.plotX,-9999),r=u(a.plotY,-9999),n=d.getBBox(),q,p=b.rotation,w=b.align,v=this.visible&&(a.series.forceDL||c.isInsidePlot(k,Math.round(r),h)||e&&c.isInsidePlot(k,h?e.x+1:e.y+e.height-1,h)),y="justify"===u(b.overflow,"justify");if(v&&(q=b.style.fontSize,q=c.renderer.fontMetrics(q,d).b,e=m({x:h?c.plotWidth-r:k,y:Math.round(h?
c.plotHeight-k:r),width:0,height:0},e),m(b,{width:n.width,height:n.height}),p?(y=!1,k=c.renderer.rotCorr(q,p),k={x:e.x+b.x+e.width/2+k.x,y:e.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*e.height},d[g?"attr":"animate"](k).attr({align:w}),r=(p+720)%360,r=180<r&&360>r,"left"===w?k.y-=r?n.height:0:"center"===w?(k.x-=n.width/2,k.y-=n.height/2):"right"===w&&(k.x-=n.width,k.y-=r?0:n.height)):(d.align(b,null,e),k=d.alignAttr),y?a.isLabelJustified=this.justifyDataLabel(d,b,k,n,e,g):u(b.crop,!0)&&(v=c.isInsidePlot(k.x,
k.y)&&c.isInsidePlot(k.x+n.width,k.y+n.height)),b.shape&&!p))d[g?"attr":"animate"]({anchorX:h?c.plotWidth-a.plotY:a.plotX,anchorY:h?c.plotHeight-a.plotX:a.plotY});v||(d.attr({y:-9999}),d.placed=!1)};e.prototype.justifyDataLabel=function(a,d,b,e,g,h){var c=this.chart,k=d.align,m=d.verticalAlign,n,q,p=a.box?0:a.padding||0;n=b.x+p;0>n&&("right"===k?d.align="left":d.x=-n,q=!0);n=b.x+e.width-p;n>c.plotWidth&&("left"===k?d.align="right":d.x=c.plotWidth-n,q=!0);n=b.y+p;0>n&&("bottom"===m?d.verticalAlign=
"top":d.y=-n,q=!0);n=b.y+e.height-p;n>c.plotHeight&&("top"===m?d.verticalAlign="bottom":d.y=c.plotHeight-n,q=!0);q&&(a.placed=!h,a.align(d,null,g));return q};n.pie&&(n.pie.prototype.drawDataLabels=function(){var c=this,d=c.data,b,g=c.chart,h=c.options.dataLabels,k=u(h.connectorPadding,10),l=u(h.connectorWidth,1),m=g.plotWidth,r=g.plotHeight,n,q=c.center,p=q[2]/2,v=q[1],C,L,f,t,K=[[],[]],J,N,O,P,x=[0,0,0,0];c.visible&&(h.enabled||c._hasPointLabels)&&(F(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&
(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),e.prototype.drawDataLabels.apply(c),F(d,function(a){a.dataLabel&&a.visible&&(K[a.half].push(a),a.dataLabel._pos=null)}),F(K,function(d,e){var l,n,u=d.length,w=[],z;if(u)for(c.sortByAngle(d,e-.5),0<c.maxLabelDistance&&(l=Math.max(0,v-p-c.maxLabelDistance),n=Math.min(v+p+c.maxLabelDistance,g.plotHeight),F(d,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,v-p-a.labelDistance),a.bottom=
Math.min(v+p+a.labelDistance,g.plotHeight),z=a.dataLabel.getBBox().height||21,a.positionsIndex=w.push({target:a.labelPos[1]-a.top+z/2,size:z,rank:a.y})-1)}),a.distribute(w,n+z-l)),P=0;P<u;P++)b=d[P],n=b.positionsIndex,f=b.labelPos,C=b.dataLabel,O=!1===b.visible?"hidden":"inherit",l=f[1],w&&G(w[n])?void 0===w[n].pos?O="hidden":(t=w[n].size,N=b.top+w[n].pos):N=l,delete b.positionIndex,J=h.justify?q[0]+(e?-1:1)*(p+b.labelDistance):c.getX(N<b.top+2||N>b.bottom-2?l:N,e,b),C._attr={visibility:O,align:f[6]},
C._pos={x:J+h.x+({left:k,right:-k}[f[6]]||0),y:N+h.y-10},f.x=J,f.y=N,L=C.getBBox().width,l=null,J-L<k?(l=Math.round(L-J+k),x[3]=Math.max(l,x[3])):J+L>m-k&&(l=Math.round(J+L-m+k),x[1]=Math.max(l,x[1])),0>N-t/2?x[0]=Math.max(Math.round(-N+t/2),x[0]):N+t/2>r&&(x[2]=Math.max(Math.round(N+t/2-r),x[2])),C.sideOverflow=l}),0===A(x)||this.verifyDataLabelOverflow(x))&&(this.placeDataLabels(),l&&F(this.points,function(a){var b;n=a.connector;if((C=a.dataLabel)&&C._pos&&a.visible&&0<a.labelDistance){O=C._attr.visibility;
if(b=!n)a.connector=n=g.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),n.attr({"stroke-width":l,stroke:h.connectorColor||a.color||"#666666"});n[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});n.attr("visibility",O)}else n&&(a.connector=n.destroy())}))},n.pie.prototype.connectorPath=function(a){var c=a.x,b=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",c+("left"===a[6]?5:-5),b,"C",c,b,2*a[2]-a[4],2*a[3]-a[5],a[2],
a[3],"L",a[4],a[5]]:["M",c+("left"===a[6]?5:-5),b,"L",a[2],a[3],"L",a[4],a[5]]},n.pie.prototype.placeDataLabels=function(){F(this.points,function(a){var c=a.dataLabel;c&&a.visible&&((a=c._pos)?(c.sideOverflow&&(c._attr.width=c.getBBox().width-c.sideOverflow,c.css({width:c._attr.width+"px",textOverflow:"ellipsis"}),c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](a),c.moved=!0):c&&c.attr({y:-9999}))},this)},n.pie.prototype.alignDataLabel=v,n.pie.prototype.verifyDataLabelOverflow=function(a){var c=
this.center,b=this.options,d=b.center,e=b.minSize||80,g,l=null!==b.size;l||(null!==d[0]?g=Math.max(c[2]-Math.max(a[1],a[3]),e):(g=Math.max(c[2]-a[1]-a[3],e),c[0]+=(a[3]-a[1])/2),null!==d[1]?g=Math.max(Math.min(g,c[2]-Math.max(a[0],a[2])),e):(g=Math.max(Math.min(g,c[2]-a[0]-a[2]),e),c[1]+=(a[0]-a[2])/2),g<c[2]?(c[2]=g,c[3]=Math.min(h(b.innerSize||0,g),g),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});n.column&&(n.column.prototype.alignDataLabel=function(a,d,b,g,h){var c=
this.chart.inverted,l=a.series,k=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,l.yAxis.len)),n=u(b.inside,!!this.options.stacking);k&&(g=q(k),0>g.y&&(g.height+=g.y,g.y=0),k=g.y+g.height-l.yAxis.len,0<k&&(g.height-=k),c&&(g={x:l.yAxis.len-g.y-g.height,y:l.xAxis.len-g.x-g.width,width:g.height,height:g.width}),n||(c?(g.x+=m?0:g.width,g.width=0):(g.y+=m?g.height:0,g.height=0)));b.align=u(b.align,!c||n?"center":m?"right":"left");b.verticalAlign=u(b.verticalAlign,c||n?"middle":m?"top":
"bottom");e.prototype.alignDataLabel.call(this,a,d,b,g,h);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(K);(function(a){var C=a.Chart,A=a.each,G=a.pick,F=a.addEvent;C.prototype.callbacks.push(function(a){function g(){var g=[];A(a.series||[],function(a){var k=a.options.dataLabels,m=a.dataLabelCollections||["dataLabel"];(k.enabled||a._hasPointLabels)&&!k.allowOverlap&&a.visible&&A(m,function(h){A(a.points,function(a){a[h]&&(a[h].labelrank=G(a.labelrank,a.shapeArgs&&
a.shapeArgs.height),g.push(a[h]))})})});a.hideOverlappingLabels(g)}g();F(a,"redraw",g)});C.prototype.hideOverlappingLabels=function(a){var g=a.length,k,m,v,u,h,e,n,d,c,w=function(a,c,d,e,g,h,k,m){return!(g>a+d||g+k<a||h>c+e||h+m<c)};for(m=0;m<g;m++)if(k=a[m])k.oldOpacity=k.opacity,k.newOpacity=1;a.sort(function(a,c){return(c.labelrank||0)-(a.labelrank||0)});for(m=0;m<g;m++)for(v=a[m],k=m+1;k<g;++k)if(u=a[k],v&&u&&v!==u&&v.placed&&u.placed&&0!==v.newOpacity&&0!==u.newOpacity&&(h=v.alignAttr,e=u.alignAttr,
n=v.parentGroup,d=u.parentGroup,c=2*(v.box?0:v.padding),h=w(h.x+n.translateX,h.y+n.translateY,v.width-c,v.height-c,e.x+d.translateX,e.y+d.translateY,u.width-c,u.height-c)))(v.labelrank<u.labelrank?v:u).newOpacity=0;A(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var C=a.addEvent,A=a.Chart,G=a.createElement,F=a.css,m=a.defaultOptions,g=
a.defaultPlotOptions,k=a.each,q=a.extend,v=a.fireEvent,u=a.hasTouch,h=a.inArray,e=a.isObject,n=a.Legend,d=a.merge,c=a.pick,w=a.Point,b=a.Series,y=a.seriesTypes,D=a.svg,H;H=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};k(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||
(k(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(F).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,g=a.chart,h=g.pointer,m=g.renderer,n=g.options.tooltip.snap,f=a.tracker,q,v=function(){if(g.hoverSeries!==a)a.onMouseOver()},w=
"rgba(192,192,192,"+(D?.0001:.002)+")";if(e&&!c)for(q=e+1;q--;)"M"===d[q]&&d.splice(q+1,0,d[q+1]-n,d[q+2],"L"),(q&&"M"===d[q]||q===e)&&d.splice(q,0,"L",d[q-2]+n,d[q-1]);f?f.attr({d:d}):a.graph&&(a.tracker=m.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:w,fill:c?w:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*n),zIndex:2}).add(a.group),k([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",v).on("mouseout",function(a){h.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",v)}))}};y.column&&(y.column.prototype.drawTracker=H.drawTrackerPoint);y.pie&&(y.pie.prototype.drawTracker=H.drawTrackerPoint);y.scatter&&(y.scatter.prototype.drawTracker=H.drawTrackerPoint);q(n.prototype,{setItemEvents:function(a,b,c){var e=this,g=e.chart.renderer.boxWrapper,h="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");g.addClass(h);b.css(e.options.itemHoverStyle)}).on("mouseout",
function(){b.css(d(a.visible?e.itemStyle:e.itemHiddenStyle));g.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});m.legend.itemStyle.cursor="pointer";q(A.prototype,{showResetZoom:function(){var a=this,b=m.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,g="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,g)},zoomOut:function(){var a=this;
v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,d=this.pointer,g=!1,h;!a||a.resetSelection?k(this.axes,function(a){b=a.zoom()}):k(a.xAxis.concat(a.yAxis),function(a){var c=a.axis;d[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(g=!0))});h=this.resetZoomButton;g&&!h?this.showResetZoom():!g&&e(h)&&(this.resetZoomButton=h.destroy());b&&this.redraw(c(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&k(d,function(a){a.setState()});k("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,g=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],f=(b.pointRange||0)/2,l=b.getExtremes(),k=b.toValue(h-g,!0)+f,f=b.toValue(h+b.len-g,!0)-f,m=f<k,h=m?f:k,k=m?k:f,f=Math.min(l.dataMin,b.toValue(b.toPixels(l.min)-b.minPixelPadding)),m=Math.max(l.dataMax,b.toValue(b.toPixels(l.max)+b.minPixelPadding)),n;n=f-h;0<n&&(k+=n,h=f);n=k-m;0<n&&(k=m,h-=n);b.series.length&&h!==l.min&&k!==l.max&&
(b.setExtremes(h,k,!1,!1,{trigger:"pan"}),e=!0);c[d]=g});e&&c.redraw(!1);F(c.container,{cursor:"move"})}});q(w.prototype,{select:function(a,b){var d=this,e=d.series,g=e.chart;a=c(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;e.options.data[h(d,e.data)]=d.options;d.setState(a&&"select");b||k(g.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,e.options.data[h(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},
onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");k(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=d(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,
b){var d=Math.floor(this.plotX),e=this.plotY,h=this.series,l=h.options.states[a]||{},k=g[h.type].marker&&h.options.marker,m=k&&!1===k.enabled,n=k&&k.states&&k.states[a]||{},f=!1===n.enabled,t=h.stateMarkerGraphic,u=this.marker||{},v=h.chart,w=h.halo,y,B=k&&h.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===l.enabled||a&&(f||m&&!1===n.enabled)||a&&u.states&&u.states[a]&&!1===u.states[a].enabled)){B&&(y=h.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(h.pointAttribs(this,a)),y&&this.graphic.animate(y,c(v.options.chart.animation,n.animation,k.animation)),t&&t.hide();else{if(a&&n){k=u.symbol||h.symbol;t&&t.currentSymbol!==k&&(t=t.destroy());if(t)t[b?"animate":"attr"]({x:y.x,y:y.y});else k&&(h.stateMarkerGraphic=t=v.renderer.symbol(k,y.x,y.y,y.width,y.height).add(h.markerGroup),t.currentSymbol=k);t&&t.attr(h.pointAttribs(this,a))}t&&(t[a&&v.isInsidePlot(d,e,v.inverted)?
"show":"hide"](),t.element.point=this)}(d=l.halo)&&d.size?(w||(h.halo=w=v.renderer.path().add((this.graphic||t).parentGroup)),w[b?"animate":"attr"]({d:this.haloPath(d.size)}),w.attr({"class":"highcharts-halo highcharts-color-"+c(this.colorIndex,h.colorIndex)}),w.point=this,w.attr(q({fill:this.color||h.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});q(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
d=b.options,e=b.graph,g=d.states,h=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(k([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!g[a]||!1!==g[a].enabled)&&(a&&(h=g[a].lineWidth||h+(g[a].lineWidthPlus||0)),e&&!e.dashstyle))for(h={"stroke-width":h},e.animate(h,c(b.chart.options.chart.animation,g[a]&&g[a].animation));b["zone-graph-"+d];)b["zone-graph-"+d].attr(h),d+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,g,h=d.options.chart.ignoreHiddenSeries,l=c.visible;g=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!l:a)?"show":"hide";k(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][g]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&k(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});k(c.linkedSeries,function(b){b.setVisible(a,
!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,g)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:H.drawTrackerGraph})})(K);(function(a){var C=a.Chart,A=a.each,G=a.inArray,F=a.isArray,m=a.isObject,g=a.pick,k=a.splat;C.prototype.setResponsive=function(g){var k=this.options.responsive,m=[],h=this.currentResponsive;k&&k.rules&&
A(k.rules,function(e){void 0===e._id&&(e._id=a.uniqueKey());this.matchResponsiveRule(e,m,g)},this);var e=a.merge.apply(0,a.map(m,function(e){return a.find(k.rules,function(a){return a._id===e}).chartOptions})),m=m.toString()||void 0;m!==(h&&h.ruleIds)&&(h&&this.update(h.undoOptions,g),m?(this.currentResponsive={ruleIds:m,mergedOptions:e,undoOptions:this.currentOptions(e)},this.update(e,g)):this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,k){var m=a.condition;(m.callback||
function(){return this.chartWidth<=g(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=g(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=g(m.minWidth,0)&&this.chartHeight>=g(m.minHeight,0)}).call(this)&&k.push(a._id)};C.prototype.currentOptions=function(g){function q(g,e,n,d){var c;a.objectEach(g,function(a,b){if(!d&&-1<G(b,["series","xAxis","yAxis"]))for(g[b]=k(g[b]),n[b]=[],c=0;c<g[b].length;c++)e[b][c]&&(n[b][c]={},q(a[c],e[b][c],n[b][c],d+1));else m(a)?(n[b]=F(a)?[]:{},q(a,e[b]||{},n[b],d+1)):n[b]=
e[b]||null})}var u={};q(g,this.options,u,0);return u}})(K);return K});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clone_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructors_js__ = __webpack_require__(17);



function render(createElement) {
  return createElement('div');
}

function create(tagName, Highcharts, Vue) {
  var Ctor = Highcharts[__WEBPACK_IMPORTED_MODULE_1__constructors_js__["a" /* default */][tagName]];
  if (!Ctor) {
    return Highcharts.win
      ? null
      // When running in server, Highcharts will not be instanced,
      // so there're no constructors in Highcharts,
      // to avoid unmated content during SSR, it returns minimum component.
      : { render: render };
  }
  var isRenderer = tagName === 'highcharts-renderer';
  var component = {
    name: tagName,
    props: isRenderer
      ? {
          width: { type: Number, required: true },
          height: { type: Number, required: true }
        }
      : { options: { type: Object, required: true } },
    methods: {
      _initChart: function() {
        this._renderChart();
        if (isRenderer) {
          this.$watch('width', this._renderChart);
          this.$watch('height', this._renderChart);
        } else {
          this.$watch('options', this._renderChart, { deep: true });
        }
      },
      _renderChart: function() {
        if (isRenderer) {
          this.renderer && this.$el.removeChild(this.renderer.box);
          this.renderer = new Ctor(this.$el, this.width, this.height);
        } else {
          this.chart = new Ctor(this.$el, Object(__WEBPACK_IMPORTED_MODULE_0__clone_js__["a" /* default */])(this.options));
        }
      }
    },
    beforeDestroy: function() {
      if (isRenderer) {
        this.$el.removeChild(this.renderer.box);
        for (var property in this.renderer) {
          delete this.renderer[property];
        }
        this.renderer = null;
      } else {
        this.chart.destroy();
      }
    }
  };
  var isVue1 = /^1\./.test(Vue.version);
  if (isVue1) {
    component.template = '<div></div>';
    component.ready = function() {
      this._initChart();
    };
  } else {
    component.render = render;
    component.mounted = function() {
      this._initChart();
    };
  }
  return component;
}

/* harmony default export */ __webpack_exports__["a"] = (create);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/* istanbul ignore next */
function clone(obj) {
  var copy;
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Array) {
    copy = [];
    for (var i = obj.length - 1; i >= 0; i--) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }
  if (obj instanceof Object) {
    copy = {};
    for (var key in obj) {
      copy[key] = clone(obj[key]);
    }
    return copy;
  }
}


/***/ })
/******/ ]);