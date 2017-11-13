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
var normalizeHeaderName = __webpack_require__(70);

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
var settle = __webpack_require__(71);
var buildURL = __webpack_require__(73);
var parseHeaders = __webpack_require__(74);
var isURLSameOrigin = __webpack_require__(75);
var createError = __webpack_require__(14);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(76);

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
      var cookies = __webpack_require__(77);

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


var enhanceError = __webpack_require__(72);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Chart_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Chart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Chart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_List_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_List_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_List_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Job_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Job_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Job_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Stats_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Stats_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Stats_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Config_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Config_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Config_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Filter_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Filter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuetable_2_src_components_Vuetable_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuetable_2_src_components_Vuetable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vuetable_2_src_components_Vuetable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_VuetablePaginationBootstrap_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_VuetablePaginationBootstrap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_VuetablePaginationBootstrap_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_highcharts__ = __webpack_require__(91);

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











__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('chart', __WEBPACK_IMPORTED_MODULE_1__components_Chart_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('vuetable', __WEBPACK_IMPORTED_MODULE_7_vuetable_2_src_components_Vuetable_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('vuetable-pagination-bootstrap', __WEBPACK_IMPORTED_MODULE_8__components_VuetablePaginationBootstrap_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('job', __WEBPACK_IMPORTED_MODULE_3__components_Job_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('list', __WEBPACK_IMPORTED_MODULE_2__components_List_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('stats', __WEBPACK_IMPORTED_MODULE_4__components_Stats_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('config', __WEBPACK_IMPORTED_MODULE_5__components_Config_vue___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('filters', __WEBPACK_IMPORTED_MODULE_6__components_Filter_vue___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_9_vue_highcharts__["a" /* default */]);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app'
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.3
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
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
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
  if (key in target && !(key in Object.prototype)) {
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
  } else {
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
    return mergeDataOrFn(parentVal, childVal)
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
  } else if (true) {
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

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
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
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
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
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
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
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
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
  target = undefined;
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
    if (!fn) {
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
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
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
  var nodes;
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
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
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
  var options = this.$options;
  var cached = options.cached || (options.cached = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = options.staticRenderFns[index].call(this._renderProxy, null, this);
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
        on[key] = existing ? [].concat(existing, ours) : ours;
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
        (this.exclude && matches(this.exclude, name)) ||
        (this.include && !matches(this.include, name))
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

Vue$3.version = '2.5.3';

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

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
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

        // destroy old node
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
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
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
var CHECKBOX_RADIO_TOKEN = '__c';

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
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
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
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
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
  target$1 = undefined;
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
    mergeVNodeHook(vnode, 'insert', function () {
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

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
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
  model: directive,
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
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

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
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

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
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
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
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
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
      if (el.tag !== 'template' && !el.slotScope) {
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
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
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
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
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
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
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

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

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

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

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
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
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
 * @author   Feross Aboukhadijeh <https://feross.org>
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
    hotAPI.createRecord("data-v-3bed05c0", Component.options)
  } else {
    hotAPI.reload("data-v-3bed05c0", Component.options)
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
                }, {
                    name: 'Queries duration',
                    data: []
                }, {
                    name: 'Calculated waiting duration',
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

        axios.get('queue-stats/chart').then(function (response) {
            _this.options.series[0].data = response.data.handling_duration;
            _this.options.series[1].data = response.data.waiting_duration;
            _this.options.series[2].data = response.data.queries_duration;
            _this.options.series[3].data = response.data.calculated_waiting_duration;
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
    require("vue-hot-reload-api")      .rerender("data-v-3bed05c0", module.exports)
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
    hotAPI.createRecord("data-v-1d681568", Component.options)
  } else {
    hotAPI.reload("data-v-1d681568", Component.options)
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
                    sortField: 'queue_stats_jobs.class',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'connection',
                    title: 'connection',
                    sortField: 'queue_stats_jobs.connection',
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
                    sortField: 'queue_stats_jobs.status',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'delay',
                    title: 'delay',
                    sortField: 'queue_stats_jobs.delay',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'timeout',
                    title: 'timeout',
                    sortField: 'queue_stats_jobs.timeout',
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
                    name: 'queries_duration',
                    title: 'queries duration',
                    sortField: 'queries_duration',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'attempts_count',
                    title: 'attempts',
                    sortField: 'attempts_count',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'queries_count',
                    title: 'queries',
                    sortField: 'queries_count',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'result',
                    title: 'result',
                    sortField: 'queue_stats_jobs.result',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }, {
                    name: 'created_at',
                    title: 'created at',
                    sortField: 'queue_stats_jobs.created_at',
                    titleClass: 'text-center',
                    dataClass: 'text-center'
                }],
                apiUrl: '/queue-stats/list',
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
    require("vue-hot-reload-api")      .rerender("data-v-1d681568", module.exports)
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
    hotAPI.createRecord("data-v-7de09bff", Component.options)
  } else {
    hotAPI.reload("data-v-7de09bff", Component.options)
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
                domProps: { textContent: _vm._s(attempt.queries_duration) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.queries_count) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.exception_class) }
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "text-center",
                domProps: { textContent: _vm._s(attempt.exception_message) }
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Queries duration")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Queries count")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Exception class")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Exception message")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7de09bff", module.exports)
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
    hotAPI.createRecord("data-v-083a2161", Component.options)
  } else {
    hotAPI.reload("data-v-083a2161", Component.options)
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
            return Math.round(this.total * this.success / 100);
        },
        failedPercent: function failedPercent() {
            return Math.round(this.total * this.failed / 100);
        },
        unhandledPercent: function unhandledPercent() {
            return Math.round(this.total * this.unhandled / 100);
        },
        total: function total() {
            return this.success + this.failed + this.unhandled;
        }
    },
    created: function created() {
        var _this = this;

        axios.get('queue-stats/stats').then(function (response) {
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
    require("vue-hot-reload-api")      .rerender("data-v-083a2161", module.exports)
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
    hotAPI.createRecord("data-v-28e6e870", Component.options)
  } else {
    hotAPI.reload("data-v-28e6e870", Component.options)
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
                apiUrl: '/queue-stats/config',
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
    require("vue-hot-reload-api")      .rerender("data-v-28e6e870", module.exports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(58)
/* template */
var __vue_template__ = __webpack_require__(59)
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
Component.options.__file = "resources/assets/js/vue/components/Filter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca75b4b4", Component.options)
  } else {
    hotAPI.reload("data-v-ca75b4b4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
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
            filter: {
                classname: '',
                queue: '',
                connection: '',
                status: ''
            },
            classnames: [],
            queues: [],
            connections: [],
            statuses: []
        };
    },
    mounted: function mounted() {
        this.getFilters();
    },

    methods: {
        getFilters: function getFilters() {
            var _this = this;

            axios.get('queue-stats/filters').then(function (response) {
                _this.classnames = response.data.classnames;
                _this.queues = response.data.queues;
                _this.connections = response.data.connections;
                _this.statuses = response.data.statuses;
            });
        }
    }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("span", { staticClass: "input-group-addon" }, [_vm._v("Class")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filter.classname,
                expression: "filter.classname"
              }
            ],
            staticClass: "form-control",
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.filter,
                  "classname",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.classnames, function(classname) {
            return _c("option", {
              domProps: { value: classname, textContent: _vm._s(classname) }
            })
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("span", { staticClass: "input-group-addon" }, [_vm._v("Queue")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filter.queue,
                expression: "filter.queue"
              }
            ],
            staticClass: "form-control",
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.filter,
                  "queue",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.queues, function(queue) {
            return _c("option", {
              domProps: { value: queue, textContent: _vm._s(queue) }
            })
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("span", { staticClass: "input-group-addon" }, [
          _vm._v("Connection")
        ]),
        _vm._v(" "),
        _c(
          "select",
          { staticClass: "form-control" },
          [
            _vm._v(
              '\n                    v-model="filter.connection">\n                '
            ),
            _vm._l(_vm.connections, function(connection) {
              return _c("option", {
                domProps: { value: connection, textContent: _vm._s(connection) }
              })
            })
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("span", { staticClass: "input-group-addon" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filter.status,
                expression: "filter.status"
              }
            ],
            staticClass: "form-control",
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.filter,
                  "status",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.statuses, function(status) {
            return _c("option", {
              domProps: { value: status, textContent: _vm._s(status) }
            })
          })
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "input-group" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "button" } },
          [_vm._v("\n                Filter\n            ")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ca75b4b4", module.exports)
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(66)
/* template */
var __vue_template__ = __webpack_require__(85)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15965e3b"
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
    hotAPI.createRecord("data-v-15965e3b", Component.options)
  } else {
    hotAPI.reload("data-v-15965e3b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(64)("c397222a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Vuetable.vue", function() {
     var newContent = require("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Vuetable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)(undefined);
// imports


// module
exports.push([module.i, "\n[v-cloak][data-v-15965e3b] {\n  display: none;\n}\n.vuetable th.sortable[data-v-15965e3b]:hover {\n  color: #2185d0;\n  cursor: pointer;\n}\n.vuetable-body-wrapper[data-v-15965e3b] {\n  position:relative;\n  overflow-y:auto;\n}\n.vuetable-head-wrapper[data-v-15965e3b] {\n  overflow-x: hidden;\n}\n.vuetable-actions[data-v-15965e3b] {\n  width: 15%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.vuetable-pagination[data-v-15965e3b] {\n  background: #f9fafb !important;\n}\n.vuetable-pagination-info[data-v-15965e3b] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.vuetable-empty-result[data-v-15965e3b] {\n  text-align: center;\n}\n.vuetable-clip-text[data-v-15965e3b] {\n  white-space: pre-wrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: block;\n}\n.vuetable-semantic-no-top[data-v-15965e3b] {\n  border-top:none !important;\n  margin-top:0 !important;\n}\n.vuetable-fixed-layout[data-v-15965e3b] {\n  table-layout: fixed;\n}\n.vuetable-gutter-col[data-v-15965e3b] {\n  padding: 0 !important;\n  border-left: none  !important;\n  border-right: none  !important;\n}\n", ""]);

// exports


/***/ }),
/* 63 */
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
/* 64 */
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

var listToStyles = __webpack_require__(65)

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
/* 65 */
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);




/* harmony default export */ __webpack_exports__["default"] = ({
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
    httpFetch: {
      type: Function,
      default: null
    },
    perPage: {
      type: Number,
      default: function _default() {
        return 10;
      }
    },
    initialPage: {
      type: Number,
      default: function _default() {
        return 1;
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
    tableHeight: {
      type: String,
      default: null
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
          ascendingClass: 'sorted-asc',
          descendingClass: 'sorted-desc',
          sortableIcon: '',
          detailRowClass: 'vuetable-detail-row',
          handleIcon: 'grey sidebar icon',
          tableBodyClass: 'vuetable-semantic-no-top vuetable-fixed-layout',
          tableHeaderClass: 'vuetable-fixed-layout'
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
    },
    showSortIcons: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      eventPrefix: 'vuetable:',
      tableFields: [],
      tableData: null,
      tablePagination: null,
      currentPage: this.initialPage,
      selectedTo: [],
      visibleDetailRows: [],
      lastScrollPosition: 0,
      scrollBarWidth: '17px',
      scrollVisible: false
    };
  },
  mounted: function mounted() {
    this.normalizeFields();
    this.normalizeSortOrder();
    if (this.isFixedHeader) {
      this.scrollBarWidth = this.getScrollBarWidth() + 'px';
    }
    this.$nextTick(function () {
      this.fireEvent('initialized', this.tableFields);
    });

    if (this.loadOnStart) {
      this.loadData();
    }
    if (this.isFixedHeader) {
      var elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
      if (elem != null) {
        elem.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  destroyed: function destroyed() {
    var elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
    if (elem != null) {
      elem.removeEventListener('scroll', this.handleScroll);
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
    },
    isFixedHeader: function isFixedHeader() {
      return this.tableHeight != null;
    }
  },
  methods: {
    getScrollBarWidth: function getScrollBarWidth() {
      var outer = document.createElement('div');
      var inner = document.createElement('div');

      outer.style.visibility = 'hidden';
      outer.style.width = '100px';

      inner.style.width = '100%';

      outer.appendChild(inner);
      document.body.appendChild(outer);

      var widthWithoutScrollbar = outer.offsetWidth;

      outer.style.overflow = 'scroll';

      var widthWithScrollbar = inner.offsetWidth;

      document.body.removeChild(outer);

      return widthWithoutScrollbar - widthWithScrollbar;
    },
    handleScroll: function handleScroll(e) {
      var horizontal = e.currentTarget.scrollLeft;
      if (horizontal != this.lastScrollPosition) {
        var header = this.$el.getElementsByClassName('vuetable-head-wrapper')[0];
        if (header != null) {
          header.scrollLeft = horizontal;
        }
        this.lastScrollPosition = horizontal;
      }
    },
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
            width: field.width,
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
    getTitle: function getTitle(field) {
      if (typeof field.title === 'function') return field.title();

      return typeof field.title === 'undefined' ? field.name.replace('.', ' ') : field.title;
    },
    renderTitle: function renderTitle(field) {
      var title = this.getTitle(field);

      if (title.length > 0 && this.isInCurrentSortGroup(field) || this.hasSortableIcon(field)) {
        var style = 'opacity:' + this.sortIconOpacity(field) + ';position:relative;float:right';
        return title + ' ' + this.renderIconTag(['sort-icon', this.sortIcon(field)], 'style="' + style + '"');
      }

      return title;
    },
    renderSequence: function renderSequence(index) {
      return this.tablePagination ? this.tablePagination.from + index : index;
    },
    renderNormalField: function renderNormalField(field, item) {
      return this.hasCallback(field) ? this.callCallback(field, item) : this.getObjectValue(item, field.name, '');
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

      this.fetch(this.apiUrl, this.httpOptions).then(success, failed).catch(function () {
        return failed();
      });
    },
    fetch: function fetch(apiUrl, httpOptions) {
      return this.httpFetch ? this.httpFetch(apiUrl, httpOptions) : __WEBPACK_IMPORTED_MODULE_0_axios___default.a[this.httpMethod](apiUrl, httpOptions);
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
        this.fixHeader();
        this.fireEvent('pagination-data', this.tablePagination);
        this.fireEvent('loaded');
      });
    },
    fixHeader: function fixHeader() {
      if (!this.isFixedHeader) {
        return;
      }

      var elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
      if (elem != null) {
        if (elem.scrollHeight > elem.clientHeight) {
          this.scrollVisible = true;
        } else {
          this.scrollVisible = false;
        }
      }
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
    hasSortableIcon: function hasSortableIcon(field) {
      return this.isSortable(field) && this.css.sortableIcon != '';
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
      var cls = this.css.sortableIcon;
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
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(12);
var Axios = __webpack_require__(69);
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
axios.CancelToken = __webpack_require__(83);
axios.isCancel = __webpack_require__(15);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(84);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(1);
var InterceptorManager = __webpack_require__(78);
var dispatchRequest = __webpack_require__(79);
var isAbsoluteURL = __webpack_require__(81);
var combineURLs = __webpack_require__(82);

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
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(80);
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
/* 80 */
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
/* 81 */
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
/* 82 */
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
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isFixedHeader
    ? _c("div", [
        _c("div", { staticClass: "vuetable-head-wrapper" }, [
          _c(
            "table",
            {
              class: ["vuetable", _vm.css.tableClass, _vm.css.tableHeaderClass]
            },
            [
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
                                              "vuetable-th-checkbox-" +
                                                _vm.trackBy,
                                              field.titleClass
                                            ],
                                            style: { width: field.width }
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
                                            "vuetable-th-component-" +
                                              _vm.trackBy,
                                            field.titleClass,
                                            { sortable: _vm.isSortable(field) }
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
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
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
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
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
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
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
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
                                      style: { width: field.width },
                                      attrs: { id: "_" + field.name },
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderTitle(field)
                                        )
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
                    }),
                    _vm._v(" "),
                    _vm.scrollVisible
                      ? _c("th", {
                          staticClass: "vuetable-gutter-col",
                          style: { width: _vm.scrollBarWidth }
                        })
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "vuetable-body-wrapper",
            style: { height: _vm.tableHeight }
          },
          [
            _c(
              "table",
              {
                class: ["vuetable", _vm.css.tableClass, _vm.css.tableBodyClass]
              },
              [
                _c(
                  "colgroup",
                  [
                    _vm._l(_vm.tableFields, function(field) {
                      return [
                        field.visible
                          ? [
                              [
                                _c("col", {
                                  class: [
                                    "vuetable-th-" + field.name,
                                    field.titleClass
                                  ],
                                  style: { width: field.width },
                                  attrs: { id: "_col_" + field.name }
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
                            attrs: {
                              "item-index": index,
                              render: _vm.onRowChanged(item)
                            },
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
                                            _vm.extractName(field.name) ==
                                            "__sequence"
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
                                            _vm.extractName(field.name) ==
                                            "__handle"
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
                                            _vm.extractName(field.name) ==
                                            "__checkbox"
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
                                                      attrs: {
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: _vm.rowSelected(
                                                          item,
                                                          field.name
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
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
                                            _vm.extractName(field.name) ===
                                            "__component"
                                              ? _c(
                                                  "td",
                                                  {
                                                    class: [
                                                      "vuetable-component",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _c(
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      {
                                                        tag: "component",
                                                        attrs: {
                                                          "row-data": item,
                                                          "row-index": index,
                                                          "row-field":
                                                            field.sortField
                                                        }
                                                      }
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ===
                                            "__slot"
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
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      null,
                                                      {
                                                        rowData: item,
                                                        rowIndex: index,
                                                        rowField:
                                                          field.sortField
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              : _vm._e()
                                          ]
                                        : [
                                            _c("td", {
                                              class: field.dataClass,
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.renderNormalField(
                                                    field,
                                                    item
                                                  )
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.onCellClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
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
                                        {
                                          attrs: {
                                            name: _vm.detailRowTransition
                                          }
                                        },
                                        [
                                          _c(
                                            "td",
                                            {
                                              attrs: {
                                                colspan: _vm.countVisibleFields
                                              }
                                            },
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
                                return [
                                  field.visible
                                    ? _c("td", [_vm._v(" ")])
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        })
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ]
        )
      ])
    : _c("table", { class: ["vuetable", _vm.css.tableClass] }, [
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
                                      ],
                                      style: { width: field.width }
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
                                    style: { width: field.width },
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
                                    style: { width: field.width },
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
                                    style: { width: field.width },
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
                                    style: { width: field.width },
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
                                style: { width: field.width },
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
                    attrs: {
                      "item-index": index,
                      render: _vm.onRowChanged(item)
                    },
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
                                    _vm.extractName(field.name) ===
                                    "__component"
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
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
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
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
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
                                    {
                                      attrs: { colspan: _vm.countVisibleFields }
                                    },
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
                    _c("td", {
                      staticClass: "vuetable-empty-result",
                      attrs: { colspan: _vm.countVisibleFields },
                      domProps: { innerHTML: _vm._s(_vm.noDataTemplate) }
                    })
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
                        return [
                          field.visible ? _c("td", [_vm._v(" ")]) : _vm._e()
                        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-15965e3b", module.exports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(87)
/* template */
var __vue_template__ = __webpack_require__(90)
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
    hotAPI.createRecord("data-v-75f46b8e", Component.options)
  } else {
    hotAPI.reload("data-v-75f46b8e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_VuetablePaginationMixin__ = __webpack_require__(88);
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(89)
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
    hotAPI.createRecord("data-v-5c4c2408", Component.options)
  } else {
    hotAPI.reload("data-v-5c4c2408", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
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
});

/***/ }),
/* 90 */
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
    require("vue-hot-reload-api")      .rerender("data-v-75f46b8e", module.exports)
  }
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constructors_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_js__ = __webpack_require__(93);




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
/* 92 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.2 (2017-10-20)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,N){"object"===typeof module&&module.exports?module.exports=S.document?N(S):N:S.Highcharts=N(S)})("undefined"!==typeof window?window:this,function(S){var N=function(){var a=S.document,E=S.navigator&&S.navigator.userAgent||"",C=a&&a.createElementNS&&!!a.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,G=/(edge|msie|trident)/i.test(E)&&!S.opera,q=/Firefox/.test(E),f=q&&4>parseInt(E.split("Firefox/")[1],10);return S.Highcharts?S.Highcharts.error(16,!0):{product:"Highcharts",
version:"6.0.2",deg2rad:2*Math.PI/360,doc:a,hasBidiBug:f,hasTouch:a&&void 0!==a.documentElement.ontouchstart,isMS:G,isWebKit:/AppleWebKit/.test(E),isFirefox:q,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(E),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:C,win:S,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var E=a.charts,C=a.doc,G=a.win;a.error=function(q,f){q=a.isNumber(q)?"Highcharts error #"+
q+": www.highcharts.com/errors/"+q:q;if(f)throw Error(q);G.console&&console.log(q)};a.Fx=function(a,f,k){this.options=f;this.elem=a;this.prop=k};a.Fx.prototype={dSetter:function(){var a=this.paths[0],f=this.paths[1],k=[],t=this.now,m=a.length,v;if(1===t)k=this.toD;else if(m===f.length&&1>t)for(;m--;)v=parseFloat(a[m]),k[m]=isNaN(v)?a[m]:t*parseFloat(f[m]-v)+v;else k=f;this.elem.attr("d",k,null,!0)},update:function(){var a=this.elem,f=this.prop,k=this.now,t=this.options.step;if(this[f+"Setter"])this[f+
"Setter"]();else a.attr?a.element&&a.attr(f,k,null,!0):a.style[f]=k+this.unit;t&&t.call(a,k,this)},run:function(q,f,k){var t=this,m=t.options,v=function(a){return v.stopped?!1:t.step(a)},u=G.requestAnimationFrame||function(a){setTimeout(a,13)},d=function(){a.timers=a.grep(a.timers,function(a){return a()});a.timers.length&&u(d)};q===f?(delete m.curAnim[this.prop],m.complete&&0===a.keys(m.curAnim).length&&m.complete()):(this.startTime=+new Date,this.start=q,this.end=f,this.unit=k,this.now=this.start,
this.pos=0,v.elem=this.elem,v.prop=this.prop,v()&&1===a.timers.push(v)&&u(d))},step:function(q){var f=+new Date,k,t=this.options,m=this.elem,v=t.complete,u=t.duration,d=t.curAnim;m.attr&&!m.element?q=!1:q||f>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),k=d[this.prop]=!0,a.objectEach(d,function(a){!0!==a&&(k=!1)}),k&&v&&v.call(m),q=!1):(this.pos=t.easing((f-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),q=!0);return q},initPath:function(q,f,k){function t(a){var c,
e;for(b=a.length;b--;)c="M"===a[b]||"L"===a[b],e=/[a-zA-Z]/.test(a[b+3]),c&&e&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+2])}function m(a,d){for(;a.length<e;){a[0]=d[e-a.length];var l=a.slice(0,c);[].splice.apply(a,[0,0].concat(l));z&&(l=a.slice(a.length-c),[].splice.apply(a,[a.length,0].concat(l)),b--)}a[0]="M"}function v(a,b){for(var d=(e-a.length)/c;0<d&&d--;)l=a.slice().splice(a.length/A-c,c*A),l[0]=b[e-c-d*c],n&&(l[c-6]=l[c-2],l[c-5]=l[c-1]),[].splice.apply(a,[a.length/A,0].concat(l)),z&&d--}f=
f||"";var u,d=q.startX,g=q.endX,n=-1<f.indexOf("C"),c=n?7:3,e,l,b;f=f.split(" ");k=k.slice();var z=q.isArea,A=z?2:1,I;n&&(t(f),t(k));if(d&&g){for(b=0;b<d.length;b++)if(d[b]===g[0]){u=b;break}else if(d[0]===g[g.length-d.length+b]){u=b;I=!0;break}void 0===u&&(f=[])}f.length&&a.isNumber(u)&&(e=k.length+u*A*c,I?(m(f,k),v(k,f)):(m(k,f),v(f,k)));return[f,k]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),
null,!0)};a.extend=function(a,f){var k;a||(a={});for(k in f)a[k]=f[k];return a};a.merge=function(){var q,f=arguments,k,t={},m=function(k,u){"object"!==typeof k&&(k={});a.objectEach(u,function(d,g){!a.isObject(d,!0)||a.isClass(d)||a.isDOMElement(d)?k[g]=u[g]:k[g]=m(k[g]||{},d)});return k};!0===f[0]&&(t=f[1],f=Array.prototype.slice.call(f,2));k=f.length;for(q=0;q<k;q++)t=m(t,f[q]);return t};a.pInt=function(a,f){return parseInt(a,f||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=
Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(q,f){return!!q&&"object"===typeof q&&(!f||!a.isArray(q))};a.isDOMElement=function(q){return a.isObject(q)&&"number"===typeof q.nodeType};a.isClass=function(q){var f=q&&q.constructor;return!(!a.isObject(q,!0)||a.isDOMElement(q)||!f||!f.name||"Object"===f.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,f){for(var k=a.length;k--;)if(a[k]===f){a.splice(k,
1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(q,f,k){var t;a.isString(f)?a.defined(k)?q.setAttribute(f,k):q&&q.getAttribute&&(t=q.getAttribute(f)):a.defined(f)&&a.isObject(f)&&a.objectEach(f,function(a,k){q.setAttribute(k,a)});return t};a.splat=function(q){return a.isArray(q)?q:[q]};a.syncTimeout=function(a,f,k){if(f)return setTimeout(a,f,k);a.call(0,k)};a.pick=function(){var a=arguments,f,k,t=a.length;for(f=0;f<t;f++)if(k=a[f],void 0!==k&&null!==k)return k};a.css=
function(q,f){a.isMS&&!a.svg&&f&&void 0!==f.opacity&&(f.filter="alpha(opacity\x3d"+100*f.opacity+")");a.extend(q.style,f)};a.createElement=function(q,f,k,t,m){q=C.createElement(q);var v=a.css;f&&a.extend(q,f);m&&v(q,{padding:0,border:"none",margin:0});k&&v(q,k);t&&t.appendChild(q);return q};a.extendClass=function(q,f){var k=function(){};k.prototype=new q;a.extend(k.prototype,f);return k};a.pad=function(a,f,k){return Array((f||2)+1-String(a).length).join(k||0)+a};a.relativeLength=function(a,f,k){return/%$/.test(a)?
f*parseFloat(a)/100+(k||0):parseFloat(a)};a.wrap=function(a,f,k){var q=a[f];a[f]=function(){var a=Array.prototype.slice.call(arguments),v=arguments,u=this;u.proceed=function(){q.apply(u,arguments.length?arguments:v)};a.unshift(q);a=k.apply(this,a);u.proceed=null;return a}};a.getTZOffset=function(q){var f=a.Date;return 6E4*(f.hcGetTimezoneOffset&&f.hcGetTimezoneOffset(q)||f.hcTimezoneOffset||0)};a.dateFormat=function(q,f,k){if(!a.defined(f)||isNaN(f))return a.defaultOptions.lang.invalidDate||"";q=
a.pick(q,"%Y-%m-%d %H:%M:%S");var t=a.Date,m=new t(f-a.getTZOffset(f)),v=m[t.hcGetHours](),u=m[t.hcGetDay](),d=m[t.hcGetDate](),g=m[t.hcGetMonth](),n=m[t.hcGetFullYear](),c=a.defaultOptions.lang,e=c.weekdays,l=c.shortWeekdays,b=a.pad,t=a.extend({a:l?l[u]:e[u].substr(0,3),A:e[u],d:b(d),e:b(d,2," "),w:u,b:c.shortMonths[g],B:c.months[g],m:b(g+1),y:n.toString().substr(2,2),Y:n,H:b(v),k:v,I:b(v%12||12),l:v%12||12,M:b(m[t.hcGetMinutes]()),p:12>v?"AM":"PM",P:12>v?"am":"pm",S:b(m.getSeconds()),L:b(Math.round(f%
1E3),3)},a.dateFormats);a.objectEach(t,function(a,b){for(;-1!==q.indexOf("%"+b);)q=q.replace("%"+b,"function"===typeof a?a(f):a)});return k?q.substr(0,1).toUpperCase()+q.substr(1):q};a.formatSingle=function(q,f){var k=/\.([0-9])/,t=a.defaultOptions.lang;/f$/.test(q)?(k=(k=q.match(k))?k[1]:-1,null!==f&&(f=a.numberFormat(f,k,t.decimalPoint,-1<q.indexOf(",")?t.thousandsSep:""))):f=a.dateFormat(q,f);return f};a.format=function(q,f){for(var k="{",t=!1,m,v,u,d,g=[],n;q;){k=q.indexOf(k);if(-1===k)break;
m=q.slice(0,k);if(t){m=m.split(":");v=m.shift().split(".");d=v.length;n=f;for(u=0;u<d;u++)n&&(n=n[v[u]]);m.length&&(n=a.formatSingle(m.join(":"),n));g.push(n)}else g.push(m);q=q.slice(k+1);k=(t=!t)?"}":"{"}g.push(q);return g.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(q,f,k,t,m){var v,u=q;k=a.pick(k,1);v=q/k;f||(f=m?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===k?f=a.grep(f,function(a){return 0===a%1}):.1>=
k&&(f=[1/k])));for(t=0;t<f.length&&!(u=f[t],m&&u*k>=q||!m&&v<=(f[t]+(f[t+1]||f[t]))/2);t++);return u=a.correctFloat(u*k,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,f){var k=a.length,q,m;for(m=0;m<k;m++)a[m].safeI=m;a.sort(function(a,m){q=f(a,m);return 0===q?a.safeI-m.safeI:q});for(m=0;m<k;m++)delete a[m].safeI};a.arrayMin=function(a){for(var f=a.length,k=a[0];f--;)a[f]<k&&(k=a[f]);return k};a.arrayMax=function(a){for(var f=a.length,k=a[0];f--;)a[f]>k&&(k=a[f]);return k};a.destroyObjectProperties=
function(q,f){a.objectEach(q,function(a,t){a&&a!==f&&a.destroy&&a.destroy();delete q[t]})};a.discardElement=function(q){var f=a.garbageBin;f||(f=a.createElement("div"));q&&f.appendChild(q);f.innerHTML=""};a.correctFloat=function(a,f){return parseFloat(a.toPrecision(f||14))};a.setAnimation=function(q,f){f.renderer.globalAnimation=a.pick(q,f.options.chart.animation,!0)};a.animObject=function(q){return a.isObject(q)?a.merge(q):{duration:q?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(q,f,k,t){q=+q||0;f=+f;var m=a.defaultOptions.lang,v=(q.toString().split(".")[1]||"").split("e")[0].length,u,d,g=q.toString().split("e");-1===f?f=Math.min(v,20):a.isNumber(f)||(f=2);d=(Math.abs(g[1]?g[0]:q)+Math.pow(10,-Math.max(f,v)-1)).toFixed(f);v=String(a.pInt(d));u=3<v.length?v.length%3:0;k=a.pick(k,m.decimalPoint);t=a.pick(t,m.thousandsSep);q=(0>q?"-":"")+(u?v.substr(0,u)+t:"");q+=v.substr(u).replace(/(\d{3})(?=\d)/g,
"$1"+t);f&&(q+=k+d.slice(-f));g[1]&&(q+="e"+g[1]);return q};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(q,f,k){if("width"===f)return Math.min(q.offsetWidth,q.scrollWidth)-a.getStyle(q,"padding-left")-a.getStyle(q,"padding-right");if("height"===f)return Math.min(q.offsetHeight,q.scrollHeight)-a.getStyle(q,"padding-top")-a.getStyle(q,"padding-bottom");G.getComputedStyle||a.error(27,!0);if(q=G.getComputedStyle(q,void 0))q=q.getPropertyValue(f),a.pick(k,"opacity"!==
f)&&(q=a.pInt(q));return q};a.inArray=function(q,f){return(a.indexOfPolyfill||Array.prototype.indexOf).call(f,q)};a.grep=function(q,f){return(a.filterPolyfill||Array.prototype.filter).call(q,f)};a.find=Array.prototype.find?function(a,f){return a.find(f)}:function(a,f){var k,t=a.length;for(k=0;k<t;k++)if(f(a[k],k))return a[k]};a.map=function(a,f){for(var k=[],t=0,m=a.length;t<m;t++)k[t]=f.call(a[t],a[t],t,a);return k};a.keys=function(q){return(a.keysPolyfill||Object.keys).call(void 0,q)};a.reduce=
function(q,f,k){return(a.reducePolyfill||Array.prototype.reduce).call(q,f,k)};a.offset=function(a){var f=C.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(G.pageYOffset||f.scrollTop)-(f.clientTop||0),left:a.left+(G.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};a.stop=function(q,f){for(var k=a.timers.length;k--;)a.timers[k].elem!==q||f&&f!==a.timers[k].prop||(a.timers[k].stopped=!0)};a.each=function(q,f,k){return(a.forEachPolyfill||Array.prototype.forEach).call(q,
f,k)};a.objectEach=function(a,f,k){for(var t in a)a.hasOwnProperty(t)&&f.call(k,a[t],t,a)};a.addEvent=function(q,f,k){var t=q.hcEvents=q.hcEvents||{},m=q.addEventListener||a.addEventListenerPolyfill;m&&m.call(q,f,k,!1);t[f]||(t[f]=[]);t[f].push(k);return function(){a.removeEvent(q,f,k)}};a.removeEvent=function(q,f,k){function t(d,n){var c=q.removeEventListener||a.removeEventListenerPolyfill;c&&c.call(q,d,n,!1)}function m(){var d,n;q.nodeName&&(f?(d={},d[f]=!0):d=u,a.objectEach(d,function(a,e){if(u[e])for(n=
u[e].length;n--;)t(e,u[e][n])}))}var v,u=q.hcEvents,d;u&&(f?(v=u[f]||[],k?(d=a.inArray(k,v),-1<d&&(v.splice(d,1),u[f]=v),t(f,k)):(m(),u[f]=[])):(m(),q.hcEvents={}))};a.fireEvent=function(q,f,k,t){var m;m=q.hcEvents;var v,u;k=k||{};if(C.createEvent&&(q.dispatchEvent||q.fireEvent))m=C.createEvent("Events"),m.initEvent(f,!0,!0),a.extend(m,k),q.dispatchEvent?q.dispatchEvent(m):q.fireEvent(f,m);else if(m)for(m=m[f]||[],v=m.length,k.target||a.extend(k,{preventDefault:function(){k.defaultPrevented=!0},target:q,
type:f}),f=0;f<v;f++)(u=m[f])&&!1===u.call(q,k)&&k.preventDefault();t&&!k.defaultPrevented&&t(k)};a.animate=function(q,f,k){var t,m="",v,u,d;a.isObject(k)||(d=arguments,k={duration:d[2],easing:d[3],complete:d[4]});a.isNumber(k.duration)||(k.duration=400);k.easing="function"===typeof k.easing?k.easing:Math[k.easing]||Math.easeInOutSine;k.curAnim=a.merge(f);a.objectEach(f,function(d,n){a.stop(q,n);u=new a.Fx(q,k,n);v=null;"d"===n?(u.paths=u.initPath(q,q.d,f.d),u.toD=f.d,t=0,v=1):q.attr?t=q.attr(n):
(t=parseFloat(a.getStyle(q,n))||0,"opacity"!==n&&(m="px"));v||(v=d);v&&v.match&&v.match("px")&&(v=v.replace(/px/g,""));u.run(t,v,m)})};a.seriesType=function(q,f,k,t,m){var v=a.getOptions(),u=a.seriesTypes;v.plotOptions[q]=a.merge(v.plotOptions[f],k);u[q]=a.extendClass(u[f]||function(){},t);u[q].prototype.type=q;m&&(u[q].prototype.pointClass=a.extendClass(a.Point,m));return u[q]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),f=0;return function(){return"highcharts-"+a+"-"+
f++}}();G.jQuery&&(G.jQuery.fn.highcharts=function(){var q=[].slice.call(arguments);if(this[0])return q[0]?(new (a[a.isString(q[0])?q.shift():"Chart"])(this[0],q[0],q[1]),this):E[a.attr(this[0],"data-highcharts-chart")]})})(N);(function(a){var E=a.each,C=a.isNumber,G=a.map,q=a.merge,f=a.pInt;a.Color=function(k){if(!(this instanceof a.Color))return new a.Color(k);this.init(k)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(k){var f,m,v,u;if((this.input=k=this.names[k&&k.toLowerCase?k.toLowerCase():""]||k)&&k.stops)this.stops=G(k.stops,function(d){return new a.Color(d[1])});else if(k&&k.charAt&&"#"===k.charAt()&&(f=k.length,k=parseInt(k.substr(1),
16),7===f?m=[(k&16711680)>>16,(k&65280)>>8,k&255,1]:4===f&&(m=[(k&3840)>>4|(k&3840)>>8,(k&240)>>4|k&240,(k&15)<<4|k&15,1])),!m)for(v=this.parsers.length;v--&&!m;)u=this.parsers[v],(f=u.regex.exec(k))&&(m=u.parse(f));this.rgba=m||[]},get:function(a){var k=this.input,m=this.rgba,f;this.stops?(f=q(k),f.stops=[].concat(f.stops),E(this.stops,function(m,d){f.stops[d]=[f.stops[d][0],m.get(a)]})):f=m&&C(m[0])?"rgb"===a||!a&&1===m[3]?"rgb("+m[0]+","+m[1]+","+m[2]+")":"a"===a?m[3]:"rgba("+m.join(",")+")":k;
return f},brighten:function(a){var k,m=this.rgba;if(this.stops)E(this.stops,function(m){m.brighten(a)});else if(C(a)&&0!==a)for(k=0;3>k;k++)m[k]+=f(255*a),0>m[k]&&(m[k]=0),255<m[k]&&(m[k]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,f){var m=this.rgba,k=a.rgba;k.length&&m&&m.length?(a=1!==k[3]||1!==m[3],f=(a?"rgba(":"rgb(")+Math.round(k[0]+(m[0]-k[0])*(1-f))+","+Math.round(k[1]+(m[1]-k[1])*(1-f))+","+Math.round(k[2]+(m[2]-k[2])*(1-f))+(a?","+(k[3]+(m[3]-
k[3])*(1-f)):"")+")"):f=a.input||"none";return f}};a.color=function(k){return new a.Color(k)}})(N);(function(a){var E,C,G=a.addEvent,q=a.animate,f=a.attr,k=a.charts,t=a.color,m=a.css,v=a.createElement,u=a.defined,d=a.deg2rad,g=a.destroyObjectProperties,n=a.doc,c=a.each,e=a.extend,l=a.erase,b=a.grep,z=a.hasTouch,A=a.inArray,I=a.isArray,r=a.isFirefox,J=a.isMS,w=a.isObject,D=a.isString,M=a.isWebKit,p=a.merge,B=a.noop,H=a.objectEach,F=a.pick,h=a.pInt,x=a.removeEvent,R=a.stop,K=a.svg,P=a.SVG_NS,L=a.symbolSizes,
Q=a.win;E=a.SVGElement=function(){return this};e(E.prototype,{opacity:1,SVG_NS:P,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,h){this.element="span"===h?v(h):n.createElementNS(this.SVG_NS,h);this.renderer=a},animate:function(y,h,x){h=a.animObject(F(h,this.renderer.globalAnimation,!0));0!==h.duration?(x&&(h.complete=x),q(this,y,h)):(this.attr(y,null,x),h.step&&h.step.call(this));return this},
colorGradient:function(y,h,x){var b=this.renderer,e,O,d,l,g,K,n,z,L,r,w=[],m;y.radialGradient?O="radialGradient":y.linearGradient&&(O="linearGradient");O&&(d=y[O],g=b.gradients,n=y.stops,r=x.radialReference,I(d)&&(y[O]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===O&&r&&!u(d.gradientUnits)&&(l=d,d=p(d,b.getRadialAttr(r,l),{gradientUnits:"userSpaceOnUse"})),H(d,function(a,y){"id"!==y&&w.push(y,a)}),H(n,function(a){w.push(a)}),w=w.join(","),g[w]?r=g[w].attr("id"):
(d.id=r=a.uniqueKey(),g[w]=K=b.createElement(O).attr(d).add(b.defs),K.radAttr=l,K.stops=[],c(n,function(y){0===y[1].indexOf("rgba")?(e=a.color(y[1]),z=e.get("rgb"),L=e.get("a")):(z=y[1],L=1);y=b.createElement("stop").attr({offset:y[0],"stop-color":z,"stop-opacity":L}).add(K);K.stops.push(y)})),m="url("+b.url+"#"+r+")",x.setAttribute(h,m),x.gradient=w,y.toString=function(){return m})},applyTextOutline:function(y){var h=this.element,x,b,e,p,d;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,this.renderer.getContrast(h.style.fill)));
y=y.split(" ");b=y[y.length-1];if((e=y[0])&&"none"!==e&&a.svg){this.fakeTS=!0;y=[].slice.call(h.getElementsByTagName("tspan"));this.ySetter=this.xSetter;e=e.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,h){return 2*y+h});for(d=y.length;d--;)x=y[d],"highcharts-text-outline"===x.getAttribute("class")&&l(y,h.removeChild(x));p=h.firstChild;c(y,function(a,y){0===y&&(a.setAttribute("x",h.getAttribute("x")),y=h.getAttribute("y"),a.setAttribute("y",y||0),null===y&&h.setAttribute("y",0));a=a.cloneNode(1);f(a,{"class":"highcharts-text-outline",
fill:b,stroke:b,"stroke-width":e,"stroke-linejoin":"round"});h.insertBefore(a,p)})}},attr:function(a,h,x,b){var y,e=this.element,c,O=this,p,d;"string"===typeof a&&void 0!==h&&(y=a,a={},a[y]=h);"string"===typeof a?O=(this[a+"Getter"]||this._defaultGetter).call(this,a,e):(H(a,function(y,h){p=!1;b||R(this,h);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(h)&&(c||(this.symbolAttr(a),c=!0),p=!0);!this.rotation||"x"!==h&&"y"!==h||(this.doTransform=!0);p||(d=this[h+"Setter"]||
this._defaultSetter,d.call(this,y,h,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h)&&this.updateShadows(h,y,d))},this),this.afterSetters());x&&x();return O},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,h,x){for(var y=this.shadows,b=y.length;b--;)x.call(y[b],"height"===a?Math.max(h-(y[b].cutHeight||0),0):"d"===a?this.d:h,a,y[b])},addClass:function(a,h){var y=this.attr("class")||"";-1===y.indexOf(a)&&
(h||(a=(y+(y?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==A(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=this;c("x y r start end width height innerR anchorX anchorY".split(" "),function(h){y[h]=F(a[h],y[h])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+
this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var y=this,x={},b;h=h||a.strokeWidth||0;b=Math.round(h)%2/2;a.x=Math.floor(a.x||y.x||0)+b;a.y=Math.floor(a.y||y.y||0)+b;a.width=Math.floor((a.width||y.width||0)-2*b);a.height=Math.floor((a.height||y.height||0)-2*b);u(a.strokeWidth)&&(a.strokeWidth=h);H(a,function(a,h){y[h]!==a&&(y[h]=x[h]=a)});return x},css:function(a){var y=this.styles,b={},x=this.element,c,p="",d,l=!y,g=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);
y&&H(a,function(a,h){a!==y[h]&&(b[h]=a,l=!0)});l&&(y&&(a=e(y,b)),c=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===x.nodeName.toLowerCase()&&h(a.width),this.styles=a,c&&!K&&this.renderer.forExport&&delete a.width,J&&!K?m(this.element,a):(d=function(a,y){return"-"+y.toLowerCase()},H(a,function(a,y){-1===A(y,g)&&(p+=y.replace(/([A-Z])/g,d)+":"+a+";")}),p&&f(x,"style",p)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));
return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var y=this,b=y.element;z&&"click"===a?(b.ontouchstart=function(a){y.touchEventFired=Date.now();a.preventDefault();h.call(b,a)},b.onclick=function(a){(-1===Q.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&h.call(b,a)}):b["on"+a]=h;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,
y.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,b=this.scaleX,x=this.scaleY,e=this.inverted,c=this.rotation,p=this.matrix,d=this.element;e&&(a+=this.width,h+=this.height);a=["translate("+a+","+h+")"];u(p)&&a.push("matrix("+p.join(",")+")");e?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+F(this.rotationOriginX,
d.getAttribute("x"),0)+" "+F(this.rotationOriginY,d.getAttribute("y")||0)+")");(u(b)||u(x))&&a.push("scale("+F(b,1)+" "+F(x,1)+")");a.length&&d.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,b){var y,x,e,c,p={};x=this.renderer;e=x.alignedObjects;var d,O;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!b||D(b))this.alignTo=y=b||"renderer",l(e,this),e.push(this),b=null}else a=this.alignOptions,h=this.alignByTranslate,
y=this.alignTo;b=F(b,x[y],x);y=a.align;x=a.verticalAlign;e=(b.x||0)+(a.x||0);c=(b.y||0)+(a.y||0);"right"===y?d=1:"center"===y&&(d=2);d&&(e+=(b.width-(a.width||0))/d);p[h?"translateX":"x"]=Math.round(e);"bottom"===x?O=1:"middle"===x&&(O=2);O&&(c+=(b.height-(a.height||0))/O);p[h?"translateY":"y"]=Math.round(c);this[this.placed?"animate":"attr"](p);this.placed=!0;this.alignAttr=p;return this},getBBox:function(a,h){var y,b=this.renderer,x,p=this.element,l=this.styles,O,g=this.textStr,K,n=b.cache,z=b.cacheKeys,
L;h=F(h,this.rotation);x=h*d;O=l&&l.fontSize;void 0!==g&&(L=g.toString(),-1===L.indexOf("\x3c")&&(L=L.replace(/[0-9]/g,"0")),L+=["",h||0,O,l&&l.width,l&&l.textOverflow].join());L&&!a&&(y=n[L]);if(!y){if(p.namespaceURI===this.SVG_NS||b.forExport){try{(K=this.fakeTS&&function(a){c(p.querySelectorAll(".highcharts-text-outline"),function(h){h.style.display=a})})&&K("none"),y=p.getBBox?e({},p.getBBox()):{width:p.offsetWidth,height:p.offsetHeight},K&&K("")}catch(W){}if(!y||0>y.width)y={width:0,height:0}}else y=
this.htmlGetBBox();b.isSVG&&(a=y.width,b=y.height,l&&"11px"===l.fontSize&&17===Math.round(b)&&(y.height=b=14),h&&(y.width=Math.abs(b*Math.sin(x))+Math.abs(a*Math.cos(x)),y.height=Math.abs(b*Math.cos(x))+Math.abs(a*Math.sin(x))));if(L&&0<y.height){for(;250<z.length;)delete n[z.shift()];n[L]||z.push(L);n[L]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var h=this;h.animate({opacity:0},
{duration:a||150,complete:function(){h.attr({y:-9999})}})},add:function(a){var h=this.renderer,y=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&h.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:h.box).appendChild(y);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var h=a.parentNode;h&&h.removeChild(a)},destroy:function(){var a=this,h=a.element||{},b=a.renderer.isSVG&&"SPAN"===h.nodeName&&
a.parentGroup,x=h.ownerSVGElement;h.onclick=h.onmouseout=h.onmouseover=h.onmousemove=h.point=null;R(a);a.clipPath&&x&&(c(x.querySelectorAll("[clip-path],[CLIP-PATH]"),function(h){h.getAttribute("clip-path").match(RegExp('[("]#'+a.clipPath.element.id+'[)"]'))&&h.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(x=0;x<a.stops.length;x++)a.stops[x]=a.stops[x].destroy();a.stops=null}a.safeRemoveChild(h);for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)h=b.parentGroup,
a.safeRemoveChild(b.div),delete b.div,b=h;a.alignTo&&l(a.renderer.alignedObjects,a);H(a,function(h,y){delete a[y]});return null},shadow:function(a,h,b){var y=[],x,e,c=this.element,p,d,l,g;if(!a)this.destroyShadows();else if(!this.shadows){d=F(a.width,3);l=(a.opacity||.15)/d;g=this.parentInverted?"(-1,-1)":"("+F(a.offsetX,1)+", "+F(a.offsetY,1)+")";for(x=1;x<=d;x++)e=c.cloneNode(0),p=2*d+1-2*x,f(e,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":l*x,"stroke-width":p,transform:"translate"+
g,fill:"none"}),b&&(f(e,"height",Math.max(f(e,"height")-p,0)),e.cutHeight=p),h?h.element.appendChild(e):c.parentNode&&c.parentNode.insertBefore(e,c),y.push(e);this.shadows=y}return this},destroyShadows:function(){c(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=F(this[a],this.element?this.element.getAttribute(a):null,
0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,h,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[h]!==a&&(b.setAttribute(h,a),this[h]=a)},dashstyleSetter:function(a){var b,x=this["stroke-width"];"inherit"===x&&(x=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(b=a.length;b--;)a[b]=h(a[b])*x;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,h,b){this[h]=a;b.setAttribute(h,a)},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=n.createElementNS(this.SVG_NS,"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);
h.appendChild(n.createTextNode(String(F(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,h,b){"string"===typeof a?b.setAttribute(h,a):a&&this.colorGradient(a,h,b)},visibilitySetter:function(a,h,b){"inherit"===a?b.removeAttribute(h):this[h]!==a&&b.setAttribute(h,a);this[h]=a},zIndexSetter:function(a,b){var x=this.renderer,y=this.parentGroup,e=(y||x).element||x.box,c,p=this.element,
d,l,x=e===x.box;c=this.added;var g;u(a)&&(p.zIndex=a,a=+a,this[b]===a&&(c=!1),this[b]=a);if(c){(a=this.zIndex)&&y&&(y.handleZ=!0);b=e.childNodes;for(g=b.length-1;0<=g&&!d;g--)if(y=b[g],c=y.zIndex,l=!u(c),y!==p)if(0>a&&l&&!x&&!g)e.insertBefore(p,b[g]),d=!0;else if(h(c)<=a||l&&(!u(a)||0<=a))e.insertBefore(p,b[g+1]||null),d=!0;d||(e.insertBefore(p,b[x?3:0]||null),d=!0)}return d},_defaultSetter:function(a,h,b){b.setAttribute(h,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=
E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=E.prototype.rotationOriginXSetter=E.prototype.rotationOriginYSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=E.prototype.matrixSetter=function(a,h){this[h]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,h,b){this[h]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===h&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};C=a.SVGRenderer=function(){this.init.apply(this,arguments)};e(C.prototype,{Element:E,SVG_NS:P,init:function(a,h,b,x,e,c){var y;x=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(x));y=x.element;a.appendChild(y);-1===a.innerHTML.indexOf("xmlns")&&f(y,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=y;this.boxWrapper=x;this.alignedObjects=[];this.url=(r||
M)&&n.getElementsByTagName("base").length?Q.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 6.0.2"));this.defs=this.createElement("defs").add();this.allowHTML=c;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(h,b,!1);var p;r&&a.getBoundingClientRect&&(h=function(){m(a,{left:0,top:0});p=a.getBoundingClientRect();
m(a,{left:Math.ceil(p.left)-p.left+"px",top:Math.ceil(p.top)-p.top+"px"})},h(),this.unSubPixelFix=G(Q,"resize",h))},getStyle:function(a){return this.style=e({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();g(this.gradients||{});this.gradients=
null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:B,getRadialAttr:function(a,h){return{cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},getSpanWidth:function(a,h){var b=a.getBBox(!0).width;!K&&this.forExport&&(b=this.measureSpanWidth(h.firstChild.data,a.styles));return b},applyEllipsis:function(a,h,b,x){var e=a.rotation,c=b,y,p=0,d=b.length,l=function(a){h.removeChild(h.firstChild);
a&&h.appendChild(n.createTextNode(a))},g;a.rotation=0;c=this.getSpanWidth(a,h);if(g=c>x){for(;p<=d;)y=Math.ceil((p+d)/2),c=b.substring(0,y)+"\u2026",l(c),c=this.getSpanWidth(a,h),p===d?p=d+1:c>x?d=y-1:p=y;0===d&&l("")}a.rotation=e;return g},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot"},buildText:function(a){var x=a.element,e=this,p=e.forExport,y=F(a.textStr,"").toString(),d=-1!==y.indexOf("\x3c"),l=x.childNodes,g,z,L,r,w=f(x,"x"),B=a.styles,A=a.textWidth,
k=B&&B.lineHeight,u=B&&B.textOutline,D=B&&"ellipsis"===B.textOverflow,R=B&&"nowrap"===B.whiteSpace,I=B&&B.fontSize,J,Q,v=l.length,B=A&&!a.added&&this.box,q=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:I||e.style.fontSize||12;return k?h(k):e.fontMetrics(b,a.getAttribute("style")?a:x).h},t=function(a){H(e.escapes,function(h,b){a=a.replace(new RegExp(h,"g"),b)});return a};J=[y,D,R,k,u,I,A].join();if(J!==a.textCache){for(a.textCache=J;v--;)x.removeChild(l[v]);d||u||D||A||
-1!==y.indexOf(" ")?(g=/<.*class="([^"]+)".*>/,z=/<.*style="([^"]+)".*>/,L=/<.*href="([^"]+)".*>/,B&&B.appendChild(x),y=d?y.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[y],y=b(y,function(a){return""!==a}),c(y,function(h,b){var y,d=0;h=h.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");
y=h.split("|||");c(y,function(h){if(""!==h||1===y.length){var c={},l=n.createElementNS(e.SVG_NS,"tspan"),B,H;g.test(h)&&(B=h.match(g)[1],f(l,"class",B));z.test(h)&&(H=h.match(z)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),f(l,"style",H));L.test(h)&&!p&&(f(l,"onclick",'location.href\x3d"'+h.match(L)[1]+'"'),f(l,"class","highcharts-anchor"),m(l,{cursor:"pointer"}));h=t(h.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==h){l.appendChild(n.createTextNode(h));d?c.dx=0:b&&null!==w&&(c.x=w);f(l,c);x.appendChild(l);
!d&&Q&&(!K&&p&&m(l,{display:"block"}),f(l,"dy",q(l)));if(A){c=h.replace(/([^\^])-/g,"$1- ").split(" ");B=1<y.length||b||1<c.length&&!R;var O=[],k,u=q(l),I=a.rotation;for(D&&(r=e.applyEllipsis(a,l,h,A));!D&&B&&(c.length||O.length);)a.rotation=0,k=e.getSpanWidth(a,l),h=k>A,void 0===r&&(r=h),h&&1!==c.length?(l.removeChild(l.firstChild),O.unshift(c.pop())):(c=O,O=[],c.length&&!R&&(l=n.createElementNS(P,"tspan"),f(l,{dy:u,x:w}),H&&f(l,"style",H),x.appendChild(l)),k>A&&(A=k)),c.length&&l.appendChild(n.createTextNode(c.join(" ").replace(/- /g,
"-")));a.rotation=I}d++}}});Q=Q||x.childNodes.length}),r&&a.attr("title",a.textStr),B&&B.removeChild(x),u&&a.applyTextOutline&&a.applyTextOutline(u)):x.appendChild(n.createTextNode(t(y)))}},getContrast:function(a){a=t(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,b,x,c,d,l,g,K){var y=this.label(a,h,b,K,null,null,null,null,"button"),n=0;y.attr(p({padding:8,r:2},c));var z,L,r,B;c=p({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",
fontWeight:"normal"}},c);z=c.style;delete c.style;d=p(c,{fill:"#e6e6e6"},d);L=d.style;delete d.style;l=p(c,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},l);r=l.style;delete l.style;g=p(c,{style:{color:"#cccccc"}},g);B=g.style;delete g.style;G(y.element,J?"mouseover":"mouseenter",function(){3!==n&&y.setState(1)});G(y.element,J?"mouseout":"mouseleave",function(){3!==n&&y.setState(n)});y.setState=function(a){1!==a&&(y.state=n=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
["normal","hover","pressed","disabled"][a||0]);y.attr([c,d,l,g][a||0]).css([z,L,r,B][a||0])};y.attr(c).css(e({cursor:"default"},z));return y.on("click",function(a){3!==n&&x.call(y,a)})},crispLine:function(a,h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};I(a)?h.d=a:w(a)&&e(h,a);return this.createElement("path").attr(h)},circle:function(a,h,b){a=w(a)?a:{x:a,y:h,r:b};h=this.createElement("circle");h.xSetter=
h.ySetter=function(a,h,b){b.setAttribute("c"+h,a)};return h.attr(a)},arc:function(a,h,b,x,c,e){w(a)?(x=a,h=x.y,b=x.r,a=x.x):x={innerR:x,start:c,end:e};a=this.symbol("arc",a,h,b,b,x);a.r=b;return a},rect:function(a,h,b,x,c,e){c=w(a)?a.r:c;var p=this.createElement("rect");a=w(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(b,0),height:Math.max(x,0)};void 0!==e&&(a.strokeWidth=e,a=p.crisp(a));a.fill="none";c&&(a.r=c);p.rSetter=function(a,h,b){f(b,{rx:a,ry:a})};return p.attr(a)},setSize:function(a,h,b){var x=
this.alignedObjects,c=x.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:F(b,!0)?void 0:0});c--;)x[c].align()},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,b,x,c){var p={preserveAspectRatio:"none"};1<arguments.length&&e(p,{x:h,y:b,width:x,height:c});p=this.createElement("image").attr(p);p.element.setAttributeNS?
p.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):p.element.setAttribute("hc-svg-href",a);return p},symbol:function(a,h,b,x,p,d){var l=this,y,g=/^url\((.*?)\)$/,K=g.test(a),z=!K&&(this.symbols[a]?a:"circle"),r=z&&this.symbols[z],B=u(h)&&r&&r.call(this.symbols,Math.round(h),Math.round(b),x,p,d),w,H;r?(y=this.path(B),y.attr("fill","none"),e(y,{symbolName:z,x:h,y:b,width:x,height:p}),d&&e(y,d)):K&&(w=a.match(g)[1],y=this.image(w),y.imgwidth=F(L[w]&&L[w].width,d&&d.width),y.imgheight=
F(L[w]&&L[w].height,d&&d.height),H=function(){y.attr({width:y.width,height:y.height})},c(["width","height"],function(a){y[a+"Setter"]=function(a,h){var b={},x=this["img"+h],c="width"===h?"translateX":"translateY";this[h]=a;u(x)&&(this.element&&this.element.setAttribute(h,x),this.alignByTranslate||(b[c]=((this[h]||0)-x)/2,this.attr(b)))}}),u(h)&&y.attr({x:h,y:b}),y.isImg=!0,u(y.imgwidth)&&u(y.imgheight)?H():(y.attr({width:0,height:0}),v("img",{onload:function(){var a=k[l.chartIndex];0===this.width&&
(m(this,{position:"absolute",top:"-999em"}),n.body.appendChild(this));L[w]={width:this.width,height:this.height};y.imgwidth=this.width;y.imgheight=this.height;y.element&&H();this.parentNode&&this.parentNode.removeChild(this);l.imgCount--;if(!l.imgCount&&a&&a.onload)a.onload()},src:w}),this.imgCount++));return y},symbols:{circle:function(a,h,b,x){return this.arc(a+b/2,h+x/2,b/2,x/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,h,b,x){return["M",a,h,"L",a+b,h,a+b,h+x,a,h+x,"Z"]},triangle:function(a,
h,b,x){return["M",a+b/2,h,"L",a+b,h+x,a,h+x,"Z"]},"triangle-down":function(a,h,b,x){return["M",a,h,"L",a+b,h,a+b/2,h+x,"Z"]},diamond:function(a,h,b,x){return["M",a+b/2,h,"L",a+b,h+x/2,a+b/2,h+x,a,h+x/2,"Z"]},arc:function(a,h,b,x,c){var e=c.start,p=c.r||b,d=c.r||x||b,l=c.end-.001;b=c.innerR;x=F(c.open,.001>Math.abs(c.end-c.start-2*Math.PI));var y=Math.cos(e),g=Math.sin(e),K=Math.cos(l),l=Math.sin(l);c=.001>c.end-e-Math.PI?0:1;p=["M",a+p*y,h+d*g,"A",p,d,0,c,1,a+p*K,h+d*l];u(b)&&p.push(x?"M":"L",a+b*
K,h+b*l,"A",b,b,0,c,0,a+b*y,h+b*g);p.push(x?"":"Z");return p},callout:function(a,h,b,x,c){var e=Math.min(c&&c.r||0,b,x),p=e+6,d=c&&c.anchorX;c=c&&c.anchorY;var l;l=["M",a+e,h,"L",a+b-e,h,"C",a+b,h,a+b,h,a+b,h+e,"L",a+b,h+x-e,"C",a+b,h+x,a+b,h+x,a+b-e,h+x,"L",a+e,h+x,"C",a,h+x,a,h+x,a,h+x-e,"L",a,h+e,"C",a,h,a,h,a+e,h];d&&d>b?c>h+p&&c<h+x-p?l.splice(13,3,"L",a+b,c-6,a+b+6,c,a+b,c+6,a+b,h+x-e):l.splice(13,3,"L",a+b,x/2,d,c,a+b,x/2,a+b,h+x-e):d&&0>d?c>h+p&&c<h+x-p?l.splice(33,3,"L",a,c+6,a-6,c,a,c-6,
a,h+e):l.splice(33,3,"L",a,x/2,d,c,a,x/2,a,h+e):c&&c>x&&d>a+p&&d<a+b-p?l.splice(23,3,"L",d+6,h+x,d,h+x+6,d-6,h+x,a+e,h+x):c&&0>c&&d>a+p&&d<a+b-p&&l.splice(3,3,"L",d-6,h,d,h-6,d+6,h,b-e,h);return l}},clipRect:function(h,b,x,c){var e=a.uniqueKey(),p=this.createElement("clipPath").attr({id:e}).add(this.defs);h=this.rect(h,b,x,c,0).add(p);h.id=e;h.clipPath=p;h.count=0;return h},text:function(a,h,b,x){var c={};if(x&&(this.allowHTML||!this.forExport))return this.html(a,h,b);c.x=Math.round(h||0);b&&(c.y=
Math.round(b));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);x||(a.xSetter=function(a,h,b){var x=b.getElementsByTagName("tspan"),c,e=b.getAttribute(h),p;for(p=0;p<x.length;p++)c=x[p],c.getAttribute(h)===e&&c.setAttribute(h,a);b.setAttribute(h,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?h(a):/em/.test(a)?parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*
b),f:a}},rotCorr:function(a,h,b){var x=a;h&&b&&(x=Math.max(x*Math.cos(h*d),4));return{x:-a/3*Math.sin(h*d),y:x}},label:function(h,b,d,l,g,K,n,z,L){var y=this,r=y.g("button"!==L&&"label"),w=r.text=y.text("",0,0,n).attr({zIndex:1}),B,H,m=0,A=3,k=0,f,D,I,R,J,Q={},F,v,P=/^url\((.*?)\)$/.test(l),q=P,t,O,M,T;L&&r.addClass("highcharts-"+L);q=P;t=function(){return(F||0)%2/2};O=function(){var a=w.element.style,h={};H=(void 0===f||void 0===D||J)&&u(w.textStr)&&w.getBBox();r.width=(f||H.width||0)+2*A+k;r.height=
(D||H.height||0)+2*A;v=A+y.fontMetrics(a&&a.fontSize,w).b;q&&(B||(r.box=B=y.symbols[l]||P?y.symbol(l):y.rect(),B.addClass(("button"===L?"":"highcharts-label-box")+(L?" highcharts-"+L+"-box":"")),B.add(r),a=t(),h.x=a,h.y=(z?-v:0)+a),h.width=Math.round(r.width),h.height=Math.round(r.height),B.attr(e(h,Q)),Q={})};M=function(){var a=k+A,h;h=z?0:v;u(f)&&H&&("center"===J||"right"===J)&&(a+={center:.5,right:1}[J]*(f-H.width));if(a!==w.x||h!==w.y)w.attr("x",a),void 0!==h&&w.attr("y",h);w.x=a;w.y=h};T=function(a,
h){B?B.attr(a,h):Q[a]=h};r.onAdd=function(){w.add(r);r.attr({text:h||0===h?h:"",x:b,y:d});B&&u(g)&&r.attr({anchorX:g,anchorY:K})};r.widthSetter=function(h){f=a.isNumber(h)?h:null};r.heightSetter=function(a){D=a};r["text-alignSetter"]=function(a){J=a};r.paddingSetter=function(a){u(a)&&a!==A&&(A=r.padding=a,M())};r.paddingLeftSetter=function(a){u(a)&&a!==k&&(k=a,M())};r.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==m&&(m=a,H&&r.attr({x:I}))};r.textSetter=function(a){void 0!==a&&w.textSetter(a);
O();M()};r["stroke-widthSetter"]=function(a,h){a&&(q=!0);F=this["stroke-width"]=a;T(h,a)};r.strokeSetter=r.fillSetter=r.rSetter=function(a,h){"r"!==h&&("fill"===h&&a&&(q=!0),r[h]=a);T(h,a)};r.anchorXSetter=function(a,h){g=r.anchorX=a;T(h,Math.round(a)-t()-I)};r.anchorYSetter=function(a,h){K=r.anchorY=a;T(h,a-R)};r.xSetter=function(a){r.x=a;m&&(a-=m*((f||H.width)+2*A));I=Math.round(a);r.attr("translateX",I)};r.ySetter=function(a){R=r.y=Math.round(a);r.attr("translateY",R)};var U=r.css;return e(r,{css:function(a){if(a){var h=
{};a=p(a);c(r.textProps,function(b){void 0!==a[b]&&(h[b]=a[b],delete a[b])});w.css(h)}return U.call(r,a)},getBBox:function(){return{width:H.width+2*A,height:H.height+2*A,x:H.x-A,y:H.y-A}},shadow:function(a){a&&(O(),B&&B.shadow(a));return r},destroy:function(){x(r.element,"mouseenter");x(r.element,"mouseleave");w&&(w=w.destroy());B&&(B=B.destroy());E.prototype.destroy.call(r);r=y=O=M=T=null}})}});a.Renderer=C})(N);(function(a){var E=a.attr,C=a.createElement,G=a.css,q=a.defined,f=a.each,k=a.extend,
t=a.isFirefox,m=a.isMS,v=a.isWebKit,u=a.pInt,d=a.SVGRenderer,g=a.win,n=a.wrap;k(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=a&&"SPAN"===c.tagName&&a.width)delete a.width,this.textWidth=c,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=k(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=
this.renderer,e=this.element,d=this.translateX||0,b=this.translateY||0,g=this.x||0,n=this.y||0,m=this.textAlign||"left",r={left:0,center:.5,right:1}[m],k=this.styles;G(e,{marginLeft:d,marginTop:b});this.shadows&&f(this.shadows,function(a){G(a,{marginLeft:d+1,marginTop:b+1})});this.inverted&&f(e.childNodes,function(b){a.invertChild(b,e)});if("SPAN"===e.tagName){var w=this.rotation,D=u(this.textWidth),t=k&&k.whiteSpace,p=[w,m,e.innerHTML,this.textWidth,this.textAlign].join();p!==this.cTT&&(k=a.fontMetrics(e.style.fontSize).b,
q(w)&&this.setSpanRotation(w,r,k),G(e,{width:"",whiteSpace:t||"nowrap"}),e.offsetWidth>D&&/[ \-]/.test(e.textContent||e.innerText)&&G(e,{width:D+"px",display:"block",whiteSpace:t||"normal"}),this.getSpanCorrection(e.offsetWidth,k,r,w,m));G(e,{left:g+(this.xCorr||0)+"px",top:n+(this.yCorr||0)+"px"});v&&(k=e.offsetHeight);this.cTT=p}}else this.alignOnAdd=!0},setSpanRotation:function(a,e,d){var b={},c=this.renderer.getTransformKey();b[c]=b.transform="rotate("+a+"deg)";b[c+(t?"Origin":"-origin")]=b.transformOrigin=
100*e+"% "+d+"px";G(this.element,b)},getSpanCorrection:function(a,e,d){this.xCorr=-a*d;this.yCorr=-e}});k(d.prototype,{getTransformKey:function(){return m&&!/Edge/.test(g.navigator.userAgent)?"-ms-transform":v?"-webkit-transform":t?"MozTransform":g.opera?"-o-transform":""},html:function(a,e,d){var b=this.createElement("span"),c=b.element,l=b.renderer,g=l.isSVG,r=function(a,b){f(["opacity","visibility"],function(c){n(a,c+"Setter",function(a,c,e,d){a.call(this,c,e,d);b[e]=c})})};b.textSetter=function(a){a!==
c.innerHTML&&delete this.bBox;c.innerHTML=this.textStr=a;b.htmlUpdateTransform()};g&&r(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=b.rotationSetter=function(a,c){"align"===c&&(c="textAlign");b[c]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(e),y:Math.round(d)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});c.style.whiteSpace="nowrap";b.css=b.htmlCss;g&&(b.add=function(a){var e,d=l.box.parentNode,g=[];if(this.parentGroup=a){if(e=a.div,!e){for(;a;)g.push(a),
a=a.parentGroup;f(g.reverse(),function(a){function c(h,b){a[b]=h;m?p[l.getTransformKey()]="translate("+(a.x||a.translateX)+"px,"+(a.y||a.translateY)+"px)":"translateX"===b?p.left=h+"px":p.top=h+"px";a.doTransform=!0}var p,n=E(a.element,"class");n&&(n={className:n});e=a.div=a.div||C("div",n,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},e||d);p=e.style;k(a,{classSetter:function(a){this.element.setAttribute("class",
a);e.className=a},on:function(){g[0].div&&b.on.apply({element:g[0].div},arguments);return a},translateXSetter:c,translateYSetter:c});r(a,p)})}}else e=d;e.appendChild(c);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(N);(function(a){function E(){var m=a.defaultOptions.global,k=t.moment;if(m.timezone){if(k)return function(a){return-k.tz(a,m.timezone).utcOffset()};a.error(25)}return m.useUTC&&m.getTimezoneOffset}function C(){var m=a.defaultOptions.global,f,u=m.useUTC,d=u?"getUTC":
"get",g=u?"setUTC":"set",n="Minutes Hours Day Date Month FullYear".split(" "),c=n.concat(["Milliseconds","Seconds"]);a.Date=f=m.Date||t.Date;f.hcTimezoneOffset=u&&m.timezoneOffset;f.hcGetTimezoneOffset=E();f.hcMakeTime=function(a,c,b,d,g,n){var e;u?(e=f.UTC.apply(0,arguments),e+=q(e)):e=(new f(a,c,k(b,1),k(d,0),k(g,0),k(n,0))).getTime();return e};for(m=0;m<n.length;m++)f["hcGet"+n[m]]=d+n[m];for(m=0;m<c.length;m++)f["hcSet"+c[m]]=g+c[m]}var G=a.color,q=a.getTZOffset,f=a.merge,k=a.pick,t=a.win;a.defaultOptions=
{colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),
resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",
color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,
y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?
25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",
y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(m){a.defaultOptions=f(!0,a.defaultOptions,m);C();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;C()})(N);(function(a){var E=a.correctFloat,C=a.defined,G=a.destroyObjectProperties,q=a.isNumber,f=a.merge,k=a.pick,t=a.deg2rad;a.Tick=function(a,k,f,d){this.axis=a;this.pos=k;this.type=f||"";this.isNewLabel=this.isNew=!0;
f||d||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,v=a.options,u=a.chart,d=a.categories,g=a.names,n=this.pos,c=v.labels,e=a.tickPositions,l=n===e[0],b=n===e[e.length-1],g=d?k(d[n],g[n],n):n,d=this.label,e=e.info,z;a.isDatetimeAxis&&e&&(z=v.dateTimeLabelFormats[e.higherRanks[n]||e.unitName]);this.isFirst=l;this.isLast=b;v=a.labelFormatter.call({axis:a,chart:u,isFirst:l,isLast:b,dateTimeLabelFormat:z,value:a.isLog?E(a.lin2log(g)):g,pos:n});C(d)?d&&d.attr({text:v}):(this.labelLength=
(this.label=d=C(v)&&c.enabled?u.renderer.text(v,0,0,c.useHTML).css(f(c.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var m=this.axis,f=a.x,d=m.chart.chartWidth,g=m.chart.spacing,n=k(m.labelLeft,Math.min(m.pos,g[3])),g=k(m.labelRight,Math.max(m.pos+m.len,d-g[1])),c=this.label,e=this.rotation,l={left:0,center:.5,right:1}[m.labelAlign],b=c.getBBox().width,
z=m.getSlotWidth(),A=z,I=1,r,J={};if(e)0>e&&f-l*b<n?r=Math.round(f/Math.cos(e*t)-n):0<e&&f+l*b>g&&(r=Math.round((d-f)/Math.cos(e*t)));else if(d=f+(1-l)*b,f-l*b<n?A=a.x+A*(1-l)-n:d>g&&(A=g-a.x+A*l,I=-1),A=Math.min(z,A),A<z&&"center"===m.labelAlign&&(a.x+=I*(z-A-l*(z-Math.min(b,A)))),b>A||m.autoRotation&&(c.styles||{}).width)r=A;r&&(J.width=r,(m.options.labels.style||{}).textOverflow||(J.textOverflow="ellipsis"),c.css(J))},getPosition:function(a,k,f,d){var g=this.axis,n=g.chart,c=d&&n.oldChartHeight||
n.chartHeight;return{x:a?g.translate(k+f,null,null,d)+g.transB:g.left+g.offset+(g.opposite?(d&&n.oldChartWidth||n.chartWidth)-g.right-g.left:0),y:a?c-g.bottom+g.offset-(g.opposite?g.height:0):c-g.translate(k+f,null,null,d)-g.transB}},getLabelPosition:function(a,k,f,d,g,n,c,e){var l=this.axis,b=l.transA,z=l.reversed,A=l.staggerLines,m=l.tickRotCorr||{x:0,y:0},r=g.y;C(r)||(r=0===l.side?f.rotation?-8:-f.getBBox().height:2===l.side?m.y+8:Math.cos(f.rotation*t)*(m.y-f.getBBox(!1,0).height/2));a=a+g.x+
m.x-(n&&d?n*b*(z?-1:1):0);k=k+r-(n&&!d?n*b*(z?1:-1):0);A&&(f=c/(e||1)%A,l.opposite&&(f=A-f-1),k+=l.labelOffset/A*f);return{x:a,y:Math.round(k)}},getMarkPath:function(a,k,f,d,g,n){return n.crispLine(["M",a,k,"L",a+(g?0:-f),k+(g?f:0)],d)},renderGridLine:function(a,k,f){var d=this.axis,g=d.options,n=this.gridLine,c={},e=this.pos,l=this.type,b=d.tickmarkOffset,z=d.chart.renderer,A=l?l+"Grid":"grid",m=g[A+"LineWidth"],r=g[A+"LineColor"],g=g[A+"LineDashStyle"];n||(c.stroke=r,c["stroke-width"]=m,g&&(c.dashstyle=
g),l||(c.zIndex=1),a&&(c.opacity=0),this.gridLine=n=z.path().attr(c).addClass("highcharts-"+(l?l+"-":"")+"grid-line").add(d.gridGroup));if(!a&&n&&(a=d.getPlotLinePath(e+b,n.strokeWidth()*f,a,!0)))n[this.isNew?"attr":"animate"]({d:a,opacity:k})},renderMark:function(a,f,u){var d=this.axis,g=d.options,n=d.chart.renderer,c=this.type,e=c?c+"Tick":"tick",l=d.tickSize(e),b=this.mark,z=!b,A=a.x;a=a.y;var m=k(g[e+"Width"],!c&&d.isXAxis?1:0),g=g[e+"Color"];l&&(d.opposite&&(l[0]=-l[0]),z&&(this.mark=b=n.path().addClass("highcharts-"+
(c?c+"-":"")+"tick").add(d.axisGroup),b.attr({stroke:g,"stroke-width":m})),b[z?"attr":"animate"]({d:this.getMarkPath(A,a,l[0],b.strokeWidth()*u,d.horiz,n),opacity:f}))},renderLabel:function(a,f,u,d){var g=this.axis,n=g.horiz,c=g.options,e=this.label,l=c.labels,b=l.step,z=g.tickmarkOffset,A=!0,m=a.x;a=a.y;e&&q(m)&&(e.xy=a=this.getLabelPosition(m,a,e,n,l,z,d,b),this.isFirst&&!this.isLast&&!k(c.showFirstLabel,1)||this.isLast&&!this.isFirst&&!k(c.showLastLabel,1)?A=!1:!n||g.isRadial||l.step||l.rotation||
f||0===u||this.handleOverflow(a),b&&d%b&&(A=!1),A&&q(a.y)?(a.opacity=u,e[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(e.attr("y",-9999),this.isNewLabel=!0))},render:function(a,f,u){var d=this.axis,g=d.horiz,n=this.getPosition(g,this.pos,d.tickmarkOffset,f),c=n.x,e=n.y,d=g&&c===d.pos+d.len||!g&&e===d.pos?-1:1;u=k(u,1);this.isActive=!0;this.renderGridLine(f,u,d);this.renderMark(n,u,d);this.renderLabel(n,f,u,a);this.isNew=!1},destroy:function(){G(this,this.axis)}}})(N);var V=function(a){var E=
a.addEvent,C=a.animObject,G=a.arrayMax,q=a.arrayMin,f=a.color,k=a.correctFloat,t=a.defaultOptions,m=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,d=a.each,g=a.extend,n=a.fireEvent,c=a.format,e=a.getMagnitude,l=a.grep,b=a.inArray,z=a.isArray,A=a.isNumber,I=a.isString,r=a.merge,J=a.normalizeTickInterval,w=a.objectEach,D=a.pick,M=a.removeEvent,p=a.splat,B=a.syncTimeout,H=a.Tick,F=function(){this.init.apply(this,arguments)};a.extend(F.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",
second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",
lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},
defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,x){var h=x.isX,c=this;c.chart=a;c.horiz=a.inverted&&!c.isZAxis?!h:h;c.isXAxis=h;c.coll=c.coll||(h?"xAxis":"yAxis");c.opposite=x.opposite;c.side=x.side||(c.horiz?c.opposite?0:2:c.opposite?1:3);c.setOptions(x);var e=this.options,d=e.type;c.labelFormatter=e.labels.formatter||
c.defaultLabelFormatter;c.userOptions=x;c.minPixelPadding=0;c.reversed=e.reversed;c.visible=!1!==e.visible;c.zoomEnabled=!1!==e.zoomEnabled;c.hasNames="category"===d||!0===e.categories;c.categories=e.categories||c.hasNames;c.names=c.names||[];c.plotLinesAndBandsGroups={};c.isLog="logarithmic"===d;c.isDatetimeAxis="datetime"===d;c.positiveValuesOnly=c.isLog&&!c.allowNegativeLog;c.isLinked=m(e.linkedTo);c.ticks={};c.labelEdge=[];c.minorTicks={};c.plotLinesAndBands=[];c.alternateBands={};c.len=0;c.minRange=
c.userMinRange=e.minRange||e.maxZoom;c.range=e.range;c.offset=e.offset||0;c.stacks={};c.oldStacks={};c.stacksTouched=0;c.max=null;c.min=null;c.crosshair=D(e.crosshair,p(a.options.tooltip.crosshairs)[h?0:1],!1);x=c.options.events;-1===b(c,a.axes)&&(h?a.axes.splice(a.xAxis.length,0,c):a.axes.push(c),a[c.coll].push(c));c.series=c.series||[];a.inverted&&!c.isZAxis&&h&&void 0===c.reversed&&(c.reversed=!0);w(x,function(a,h){E(c,h,a)});c.lin2log=e.linearToLogConverter||c.lin2log;c.isLog&&(c.val2lin=c.log2lin,
c.lin2val=c.lin2log)},setOptions:function(a){this.options=r(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],r(t[this.coll],a))},defaultLabelFormatter:function(){var h=this.axis,b=this.value,e=h.categories,d=this.dateTimeLabelFormat,p=t.lang,l=p.numericSymbols,p=p.numericSymbolMagnitude||1E3,g=l&&l.length,n,r=h.options.labels.format,h=h.isLog?Math.abs(b):
h.tickInterval;if(r)n=c(r,this);else if(e)n=b;else if(d)n=a.dateFormat(d,b);else if(g&&1E3<=h)for(;g--&&void 0===n;)e=Math.pow(p,g+1),h>=e&&0===10*b%e&&null!==l[g]&&0!==b&&(n=a.numberFormat(b/e,-1)+l[g]);void 0===n&&(n=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return n},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();d(a.series,function(h){if(h.visible||
!b.options.chart.ignoreHiddenSeries){var c=h.options,x=c.threshold,e;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=x&&(x=null);if(a.isXAxis)c=h.xData,c.length&&(h=q(c),A(h)||h instanceof Date||(c=l(c,function(a){return A(a)}),h=q(c)),a.dataMin=Math.min(D(a.dataMin,c[0]),h),a.dataMax=Math.max(D(a.dataMax,c[0]),G(c)));else if(h.getExtremes(),e=h.dataMax,h=h.dataMin,m(h)&&m(e)&&(a.dataMin=Math.min(D(a.dataMin,h),h),a.dataMax=Math.max(D(a.dataMax,e),e)),m(x)&&(a.threshold=x),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=
!1}})},translate:function(a,b,c,e,d,p){var h=this.linkedParent||this,x=1,l=0,g=e?h.oldTransA:h.transA;e=e?h.oldMin:h.min;var n=h.minPixelPadding;d=(h.isOrdinal||h.isBroken||h.isLog&&d)&&h.lin2val;g||(g=h.transA);c&&(x*=-1,l=h.len);h.reversed&&(x*=-1,l-=x*(h.sector||h.len));b?(a=(a*x+l-n)/g+e,d&&(a=h.lin2val(a))):(d&&(a=h.val2lin(a)),a=A(e)?x*(a-e)*g+l+x*n+(A(p)?g*p:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,e,d){var h=this.chart,x=this.left,p=this.top,l,g,n=c&&h.oldChartHeight||h.chartHeight,r=c&&h.oldChartWidth||h.chartWidth,z;l=this.transB;var w=function(a,h,b){if(a<h||a>b)e?a=Math.min(Math.max(h,a),b):z=!0;return a};d=D(d,this.translate(a,null,null,c));a=c=Math.round(d+l);l=g=Math.round(n-d-l);A(d)?this.horiz?(l=p,g=n-this.bottom,a=c=w(a,x,x+this.width)):(a=x,c=r-this.right,l=g=w(l,p,p+this.height)):(z=!0,e=!1);return z&&!e?null:
h.renderer.crispLine(["M",a,l,"L",c,g],b||1)},getLinearTickPositions:function(a,b,c){var h,x=k(Math.floor(b/a)*a);c=k(Math.ceil(c/a)*a);var e=[];if(this.single)return[b];for(b=x;b<=c;){e.push(b);b=k(b+a);if(b===h)break;h=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?D(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,e=a.minorTickInterval,p=[],l=a.pointRangePadding||
0,g=a.min-l,l=a.max+l,n=l-g;if(n&&n/e<a.len/3)if(a.isLog)d(this.paddedTicks,function(h,b,c){b&&p.push.apply(p,a.getLogTickPositions(e,c[b-1],c[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())p=p.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),g,l,b.startOfWeek));else for(b=g+(c[0]-g)%e;b<=l&&b!==p[0];b+=e)p.push(b);0!==p.length&&a.trimTicks(p);return p},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,e,p,l,g,n,r,z,w;this.isXAxis&&void 0===this.minRange&&
!this.isLog&&(m(a.min)||m(a.max)?this.minRange=null:(d(this.series,function(a){r=a.xData;for(g=z=a.xIncrement?1:r.length-1;0<g;g--)if(n=r[g]-r[g-1],void 0===l||n<l)l=n}),this.minRange=Math.min(5*l,this.dataMax-this.dataMin)));c-b<this.minRange&&(p=this.dataMax-this.dataMin>=this.minRange,w=this.minRange,e=(w-c+b)/2,e=[b-e,D(a.min,b-e)],p&&(e[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(e),c=[b+w,D(a.max,b+w)],p&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=q(c),c-b<w&&
(e[0]=c-w,e[1]=D(a.min,c-w),b=G(e)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:d(this.series,function(h){var b=h.closestPointRange,c=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&m(b)&&c&&(a=m(a)?Math.min(a,b):b)});return a},nameToX:function(a){var h=z(this.categories),c=h?this.categories:this.names,e=a.options.x,d;a.series.requireSorting=!1;m(e)||(e=!1===this.options.uniqueNames?a.series.autoIncrement():b(a.name,c));-1===e?h||(d=c.length):d=
e;void 0!==d&&(this.names[d]=a.name);return d},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,d(this.series||[],function(h){h.xIncrement=null;if(!h.points||h.isDirtyData)h.processData(),h.generatePoints();d(h.points,function(b,c){var e;b.options&&(e=a.nameToX(b),void 0!==e&&e!==b.x&&(b.x=e,h.xData[c]=e))})}))},setAxisTranslation:function(a){var h=this,b=h.max-h.min,c=h.axisPointRange||0,e,p=0,l=0,g=h.linkedParent,n=!!h.categories,r=h.transA,
z=h.isXAxis;if(z||n||c)e=h.getClosest(),g?(p=g.minPointOffset,l=g.pointRangePadding):d(h.series,function(a){var b=n?1:z?D(a.options.pointRange,e,0):h.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,b);h.single||(p=Math.max(p,I(a)?0:b/2),l=Math.max(l,"on"===a?0:b))}),g=h.ordinalSlope&&e?h.ordinalSlope/e:1,h.minPointOffset=p*=g,h.pointRangePadding=l*=g,h.pointRange=Math.min(c,b),z&&(h.closestPointRange=e);a&&(h.oldTransA=r);h.translationSlope=h.transA=r=h.options.staticScale||h.len/(b+l||
1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=r*p},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var b=this,c=b.chart,p=b.options,l=b.isLog,g=b.log2lin,r=b.isDatetimeAxis,z=b.isXAxis,w=b.isLinked,B=p.maxPadding,H=p.minPadding,f=p.tickInterval,u=p.tickPixelInterval,I=b.categories,F=b.threshold,q=b.softThreshold,t,v,M,C;r||I||w||this.getTickAmount();M=D(b.userMin,p.min);C=D(b.userMax,p.max);w?(b.linkedParent=c[b.coll][p.linkedTo],c=b.linkedParent.getExtremes(),
b.min=D(c.min,c.dataMin),b.max=D(c.max,c.dataMax),p.type!==b.linkedParent.options.type&&a.error(11,1)):(!q&&m(F)&&(b.dataMin>=F?(t=F,H=0):b.dataMax<=F&&(v=F,B=0)),b.min=D(M,t,b.dataMin),b.max=D(C,v,b.dataMax));l&&(b.positiveValuesOnly&&!h&&0>=Math.min(b.min,D(b.dataMin,b.min))&&a.error(10,1),b.min=k(g(b.min),15),b.max=k(g(b.max),15));b.range&&m(b.max)&&(b.userMin=b.min=M=Math.max(b.dataMin,b.minFromRange()),b.userMax=C=b.max,b.range=null);n(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();
!(I||b.axisPointRange||b.usePercentage||w)&&m(b.min)&&m(b.max)&&(g=b.max-b.min)&&(!m(M)&&H&&(b.min-=g*H),!m(C)&&B&&(b.max+=g*B));A(p.softMin)&&(b.min=Math.min(b.min,p.softMin));A(p.softMax)&&(b.max=Math.max(b.max,p.softMax));A(p.floor)&&(b.min=Math.max(b.min,p.floor));A(p.ceiling)&&(b.max=Math.min(b.max,p.ceiling));q&&m(b.dataMin)&&(F=F||0,!m(M)&&b.min<F&&b.dataMin>=F?b.min=F:!m(C)&&b.max>F&&b.dataMax<=F&&(b.max=F));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:w&&!f&&u===b.linkedParent.options.tickPixelInterval?
f=b.linkedParent.tickInterval:D(f,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,I?1:(b.max-b.min)*u/Math.max(b.len,u));z&&!h&&d(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!f&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));h=D(p.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);
!f&&b.tickInterval<h&&(b.tickInterval=h);r||l||f||(b.tickInterval=J(b.tickInterval,null,e(b.tickInterval),D(p.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var e=a.tickPositioner,p=a.startOnTick,d=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===
this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&m(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):
this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,e&&(e=e.apply(this,[this.min,this.max])))&&(this.tickPositions=b=e);this.paddedTicks=b.slice(0);this.trimTicks(b,p,d);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||e||this.adjustTickAmount())},trimTicks:function(a,b,c){var h=a[0],e=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==h)this.min=h;else for(;this.min-p>a[0];)a.shift();
if(c)this.max=e;else for(;this.max+p<a[a.length-1];)a.pop();0===a.length&&m(h)&&a.push((e+h)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||this.isLog||d(this.chart[this.coll],function(h){var c=h.options,c=[h.horiz?c.left:c.top,c.width,c.height,c.pane].join();h.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!m(a.tickInterval)&&this.len<c&&!this.isRadial&&
!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,e=this.finalTickAmt,p=b&&b.length;if(p<c){for(;b.length<c;)b.push(k(b[b.length-1]+a));this.transA*=(p-1)/(c-1);this.max=b[b.length-1]}else p>c&&(this.tickInterval*=2,this.setTickPositions());if(m(e)){for(a=c=b.length;a--;)(3===e&&1===a%2||2>=e&&0<a&&a<c-1)&&b.splice(a,
1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;d(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=
this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,e,p){var h=this,l=h.chart;c=D(c,!0);d(h.series,function(a){delete a.kdTree});p=g(p,{min:a,max:b});n(h,"setExtremes",p,function(){h.userMin=a;h.userMax=b;h.eventArgs=p;c&&l.redraw(e)})},zoom:function(a,b){var h=this.dataMin,c=this.dataMax,e=this.options,p=Math.min(h,D(e.min,h)),e=Math.max(c,D(e.max,c));if(a!==this.min||
b!==this.max)this.allowZoomOutside||(m(h)&&(a<p&&(a=p),a>e&&(a=e)),m(c)&&(b<p&&(b=p),b>e&&(b=e))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,e=c.offsets||[0,0,0,0],p=this.horiz,d=this.width=Math.round(a.relativeLength(D(c.width,b.plotWidth-e[3]+e[1]),b.plotWidth)),l=this.height=Math.round(a.relativeLength(D(c.height,b.plotHeight-e[0]+e[2]),b.plotHeight)),g=this.top=Math.round(a.relativeLength(D(c.top,
b.plotTop+e[0]),b.plotHeight,b.plotTop)),c=this.left=Math.round(a.relativeLength(D(c.left,b.plotLeft+e[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-l-g;this.right=b.chartWidth-d-c;this.len=Math.max(p?d:l,0);this.pos=p?c:g},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?k(b(this.min)):this.min,max:a?k(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,h=this.lin2log,c=b?
h(this.min):this.min,b=b?h(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(D(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,h=b[a+"Length"],c=D(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&h)return"inside"===b[a+"Position"]&&(h=-h),[h,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,e=c,p=this.len/(((this.categories?1:0)+this.max-this.min)/c),l,g=a.rotation,n=this.labelMetrics(),r,z=Number.MAX_VALUE,w,B=function(a){a/=p||1;a=1<a?Math.ceil(a):1;return a*c};b?(w=!a.staggerLines&&!a.step&&(m(g)?[g]:p<D(a.autoRotationLimit,80)&&a.autoRotation))&&d(w,function(a){var b;if(a===g||a&&-90<=a&&90>=a)r=B(Math.abs(n.h/Math.sin(v*a))),b=r+
Math.abs(a/360),b<z&&(z=b,l=a,e=r)}):a.step||(e=B(n.h));this.autoRotation=w;this.labelRotation=D(l,g);return e},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),p=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/e||!b&&(c.style&&parseInt(c.style.width,10)||p&&p-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,e=this.ticks,
p=this.options.labels,l=this.horiz,g=this.getSlotWidth(),n=Math.max(1,Math.round(g-2*(p.padding||5))),z={},w=this.labelMetrics(),B=p.style&&p.style.textOverflow,H,f=0,k,A;I(p.rotation)||(z.rotation=p.rotation||0);d(c,function(a){(a=e[a])&&a.labelLength>f&&(f=a.labelLength)});this.maxLabelLength=f;if(this.autoRotation)f>n&&f>w.h?z.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(H={width:n+"px"},!B))for(H.textOverflow="clip",k=c.length;!l&&k--;)if(A=c[k],n=e[A].label)n.styles&&"ellipsis"===
n.styles.textOverflow?n.css({textOverflow:"clip"}):e[A].labelLength>g&&n.css({width:g+"px"}),n.getBBox().height>this.len/c.length-(w.h-w.f)&&(n.specCss={textOverflow:"ellipsis"});z.rotation&&(H={width:(f>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},B||(H.textOverflow="ellipsis"));if(this.labelAlign=p.align||this.autoLabelAlign(this.labelRotation))z.align=this.labelAlign;d(c,function(a){var b=(a=e[a])&&a.label;b&&(b.attr(z),H&&b.css(r(H,b.specCss)),delete b.specCss,a.rotation=z.rotation)});
this.tickRotCorr=b.rotCorr(w.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||m(this.min)&&m(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,h=this.horiz,c=this.opposite,e=this.options.title,p;this.axisTitle||((p=e.textAlign)||(p=(h?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[e.align]),this.axisTitle=b.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,
align:p}).addClass("highcharts-axis-title").css(e.style).add(this.axisGroup),this.axisTitle.isNew=!0);e.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new H(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,e=a.options,p=a.tickPositions,l=a.ticks,g=a.horiz,n=a.side,r=b.inverted&&!a.isZAxis?[1,0,3,2][n]:n,z,B,H=0,f,k=0,A=e.title,u=e.labels,F=0,I=b.axisOffset,b=b.clipOffset,
J=[-1,1,1,-1][n],q=e.className,t=a.axisParent,v=this.tickSize("tick");z=a.hasData();a.showAxis=B=z||D(e.showEmpty,!0);a.staggerLines=a.horiz&&u.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:e.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(q||"")).add(t),a.axisGroup=c.g("axis").attr({zIndex:e.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(q||"")).add(t),a.labelGroup=c.g("axis-labels").attr({zIndex:u.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+
"-labels "+(q||"")).add(t));z||a.isLinked?(d(p,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),!1===u.reserveSpace||0!==n&&2!==n&&{1:"left",3:"right"}[n]!==a.labelAlign&&"center"!==a.labelAlign||d(p,function(a){F=Math.max(l[a].getLabelSize(),F)}),a.staggerLines&&(F*=a.staggerLines,a.labelOffset=F*(a.opposite?-1:1))):w(l,function(a,b){a.destroy();delete l[b]});A&&A.text&&!1!==A.enabled&&(a.addTitle(B),B&&!1!==A.reserveSpace&&(a.titleOffset=H=a.axisTitle.getBBox()[g?"height":"width"],f=A.offset,
k=m(f)?0:D(A.margin,g?5:10)));a.renderLine();a.offset=J*D(e.offset,I[n]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===n?-a.labelMetrics().h:2===n?a.tickRotCorr.y:0;k=Math.abs(F)+k;F&&(k=k-c+J*(g?D(u.y,a.tickRotCorr.y+8*J):u.x));a.axisTitleMargin=D(f,k);I[n]=Math.max(I[n],a.axisTitleMargin+H+J*a.offset,k,z&&p.length&&v?v[0]+J*a.offset:0);e=e.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[r]=Math.max(b[r],e)},getLinePath:function(a){var b=this.chart,c=this.opposite,h=this.offset,e=this.horiz,p=
this.left+(c?this.width:0)+h,h=b.chartHeight-this.bottom-(c?this.height:0)+h;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:p,e?h:this.top,"L",e?b.chartWidth-this.right:p,e?h:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,
c=this.top,e=this.len,p=this.options.title,d=a?b:c,l=this.opposite,g=this.offset,n=p.x||0,r=p.y||0,z=this.axisTitle,w=this.chart.renderer.fontMetrics(p.style&&p.style.fontSize,z),z=Math.max(z.getBBox(null,0).height-w.h-1,0),e={low:d+(a?0:e),middle:d+e/2,high:d+(a?e:0)}[p.align],b=(a?c+this.height:b)+(a?1:-1)*(l?-1:1)*this.axisTitleMargin+[-z,z,w.f,-z][this.side];return{x:a?e+n:b+(l?this.width:0)+g+n,y:a?b+r-(l?this.height:0)+g:e+r}},renderMinorTick:function(a){var b=this.chart.hasRendered&&A(this.oldMin),
c=this.minorTicks;c[a]||(c[a]=new H(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,h=this.ticks,e=this.chart.hasRendered&&A(this.oldMin);if(!c||a>=this.min&&a<=this.max)h[a]||(h[a]=new H(this,a)),e&&h[a].isNew&&h[a].render(b,!0,.1),h[a].render(b)},render:function(){var b=this,c=b.chart,e=b.options,p=b.isLog,l=b.lin2log,g=b.isLinked,n=b.tickPositions,r=b.axisTitle,z=b.ticks,f=b.minorTicks,k=b.alternateBands,m=e.stackLabels,
D=e.alternateGridColor,u=b.tickmarkOffset,F=b.axisLine,I=b.showAxis,J=C(c.renderer.globalAnimation),q,t;b.labelEdge.length=0;b.overlap=!1;d([z,f,k],function(a){w(a,function(a){a.isActive=!1})});if(b.hasData()||g)b.minorTickInterval&&!b.categories&&d(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),n.length&&(d(n,function(a,c){b.renderTick(a,c)}),u&&(0===b.min||b.single)&&(z[-1]||(z[-1]=new H(b,-1,null,!0)),z[-1].render(-1))),D&&d(n,function(e,h){t=void 0!==n[h+1]?n[h+1]+u:b.max-u;0===
h%2&&e<b.max&&t<=b.max+(c.polar?-u:u)&&(k[e]||(k[e]=new a.PlotLineOrBand(b)),q=e+u,k[e].options={from:p?l(q):q,to:p?l(t):t,color:D},k[e].render(),k[e].isActive=!0)}),b._addedPlotLB||(d((e.plotLines||[]).concat(e.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);d([z,f,k],function(a){var b,e=[],h=J.duration;w(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,e.push(b))});B(function(){for(b=e.length;b--;)a[e[b]]&&!a[e[b]].isActive&&(a[e[b]].destroy(),delete a[e[b]])},
a!==k&&c.hasRendered&&h?h:0)});F&&(F[F.isPlaced?"animate":"attr"]({d:this.getLinePath(F.strokeWidth())}),F.isPlaced=!0,F[I?"show":"hide"](!0));r&&I&&(e=b.getTitlePosition(),A(e.y)?(r[r.isNew?"attr":"animate"](e),r.isNew=!1):(r.attr("y",-9999),r.isNew=!0));m&&m.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),d(this.plotLinesAndBands,function(a){a.render()}));d(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),
destroy:function(a){var c=this,e=c.stacks,h=c.plotLinesAndBands,p;a||M(c);w(e,function(a,b){u(a);e[b]=null});d([c.ticks,c.minorTicks,c.alternateBands],function(a){u(a)});if(h)for(a=h.length;a--;)h[a].destroy();d("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){c[a]&&(c[a]=c[a].destroy())});for(p in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[p]=c.plotLinesAndBandsGroups[p].destroy();w(c,function(a,e){-1===b(e,c.keepProps)&&delete c[e]})},drawCrosshair:function(a,
b){var c,e=this.crosshair,h=D(e.snap,!0),p,d=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(m(b)||!h)?(h?m(b)&&(p=this.isXAxis?b.plotX:this.len-b.plotY):p=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),m(p)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:D(b.stackY,b.y)),null,null,null,p)||null),m(c)?(b=this.categories&&!this.isRadial,d||(this.cross=d=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+e.className).attr({zIndex:D(e.zIndex,
2)}).add(),d.attr({stroke:e.color||(b?f("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":D(e.width,1)}).css({"pointer-events":"none"}),e.dashStyle&&d.attr({dashstyle:e.dashStyle})),d.show().attr({d:c}),b&&!e.width&&d.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=F}(N);(function(a){var E=a.Axis,C=a.Date,G=a.dateFormat,q=a.defaultOptions,f=a.defined,k=a.each,t=a.extend,
m=a.getMagnitude,v=a.getTZOffset,u=a.normalizeTickInterval,d=a.pick,g=a.timeUnits;E.prototype.getTimeTicks=function(a,c,e,l){var b=[],n={},A=q.global.useUTC,m,r=new C(c-Math.max(v(c),v(e))),u=C.hcMakeTime,w=a.unitRange,D=a.count,M,p;if(f(c)){r[C.hcSetMilliseconds](w>=g.second?0:D*Math.floor(r.getMilliseconds()/D));if(w>=g.second)r[C.hcSetSeconds](w>=g.minute?0:D*Math.floor(r.getSeconds()/D));if(w>=g.minute)r[C.hcSetMinutes](w>=g.hour?0:D*Math.floor(r[C.hcGetMinutes]()/D));if(w>=g.hour)r[C.hcSetHours](w>=
g.day?0:D*Math.floor(r[C.hcGetHours]()/D));if(w>=g.day)r[C.hcSetDate](w>=g.month?1:D*Math.floor(r[C.hcGetDate]()/D));w>=g.month&&(r[C.hcSetMonth](w>=g.year?0:D*Math.floor(r[C.hcGetMonth]()/D)),m=r[C.hcGetFullYear]());if(w>=g.year)r[C.hcSetFullYear](m-m%D);if(w===g.week)r[C.hcSetDate](r[C.hcGetDate]()-r[C.hcGetDay]()+d(l,1));m=r[C.hcGetFullYear]();l=r[C.hcGetMonth]();var B=r[C.hcGetDate](),H=r[C.hcGetHours]();if(C.hcTimezoneOffset||C.hcGetTimezoneOffset)p=(!A||!!C.hcGetTimezoneOffset)&&(e-c>4*g.month||
v(c)!==v(e)),r=r.getTime(),M=v(r),r=new C(r+M);A=r.getTime();for(c=1;A<e;)b.push(A),A=w===g.year?u(m+c*D,0):w===g.month?u(m,l+c*D):!p||w!==g.day&&w!==g.week?p&&w===g.hour?u(m,l,B,H+c*D,0,0,M)-M:A+w*D:u(m,l,B+c*D*(w===g.day?1:7)),c++;b.push(A);w<=g.hour&&1E4>b.length&&k(b,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&(n[a]="day")})}b.info=t(a,{higherRanks:n,totalRange:w*D});return b};E.prototype.normalizeTimeTickInterval=function(a,c){var e=c||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],
["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];c=e[e.length-1];var d=g[c[0]],b=c[1],n;for(n=0;n<e.length&&!(c=e[n],d=g[c[0]],b=c[1],e[n+1]&&a<=(d*b[b.length-1]+g[e[n+1][0]])/2);n++);d===g.year&&a<5*d&&(b=[1,2,5]);a=u(a/d,b,"year"===c[0]?Math.max(m(a/d),1):1);return{unitRange:d,count:a,unitName:c[0]}}})(N);(function(a){var E=a.Axis,C=a.getMagnitude,G=a.map,q=a.normalizeTickInterval,f=a.pick;E.prototype.getLogTickPositions=
function(a,t,m,v){var k=this.options,d=this.len,g=this.lin2log,n=this.log2lin,c=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),c=this.getLinearTickPositions(a,t,m);else if(.08<=a)for(var d=Math.floor(t),e,l,b,z,A,k=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];d<m+1&&!A;d++)for(l=k.length,e=0;e<l&&!A;e++)b=n(g(d)*k[e]),b>t&&(!v||z<=m)&&void 0!==z&&c.push(z),z>m&&(A=!0),z=b;else t=g(t),m=g(m),a=v?this.getMinorTickInterval():k.tickInterval,a=f("auto"===a?null:a,this._minorAutoInterval,
k.tickPixelInterval/(v?5:1)*(m-t)/((v?d/this.tickPositions.length:d)||1)),a=q(a,null,C(a)),c=G(this.getLinearTickPositions(a,t,m),n),v||(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return c};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}})(N);(function(a,E){var C=a.arrayMax,G=a.arrayMin,q=a.defined,f=a.destroyObjectProperties,k=a.each,t=a.erase,m=a.merge,v=a.pick;a.PlotLineOrBand=function(a,d){this.axis=a;d&&(this.options=
d,this.id=d.id)};a.PlotLineOrBand.prototype={render:function(){var f=this,d=f.axis,g=d.horiz,n=f.options,c=n.label,e=f.label,l=n.to,b=n.from,z=n.value,A=q(b)&&q(l),k=q(z),r=f.svgElem,J=!r,w=[],D=n.color,t=v(n.zIndex,0),p=n.events,w={"class":"highcharts-plot-"+(A?"band ":"line ")+(n.className||"")},B={},H=d.chart.renderer,F=A?"bands":"lines",h=d.log2lin;d.isLog&&(b=h(b),l=h(l),z=h(z));k?(w={stroke:D,"stroke-width":n.width},n.dashStyle&&(w.dashstyle=n.dashStyle)):A&&(D&&(w.fill=D),n.borderWidth&&(w.stroke=
n.borderColor,w["stroke-width"]=n.borderWidth));B.zIndex=t;F+="-"+t;(D=d.plotLinesAndBandsGroups[F])||(d.plotLinesAndBandsGroups[F]=D=H.g("plot-"+F).attr(B).add());J&&(f.svgElem=r=H.path().attr(w).add(D));if(k)w=d.getPlotLinePath(z,r.strokeWidth());else if(A)w=d.getPlotBandPath(b,l,n);else return;J&&w&&w.length?(r.attr({d:w}),p&&a.objectEach(p,function(a,b){r.on(b,function(a){p[b].apply(f,[a])})})):r&&(w?(r.show(),r.animate({d:w})):(r.hide(),e&&(f.label=e=e.destroy())));c&&q(c.text)&&w&&w.length&&
0<d.width&&0<d.height&&!w.flat?(c=m({align:g&&A&&"center",x:g?!A&&4:10,verticalAlign:!g&&A&&"middle",y:g?A?16:10:A?6:-4,rotation:g&&!A&&90},c),this.renderLabel(c,w,A,t)):e&&e.hide();return f},renderLabel:function(a,d,g,n){var c=this.label,e=this.axis.chart.renderer;c||(c={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(a.className||"")},c.zIndex=n,this.label=c=e.text(a.text,0,0,a.useHTML).attr(c).add(),c.css(a.style));n=d.xBounds||[d[1],d[4],
g?d[6]:d[1]];d=d.yBounds||[d[2],d[5],g?d[7]:d[2]];g=G(n);e=G(d);c.align(a,!1,{x:g,y:e,width:C(n)-g,height:C(d)-e});c.show()},destroy:function(){t(this.axis.plotLinesAndBands,this);delete this.axis;f(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,d){var g=this.getPlotLinePath(d,null,null,!0),n=this.getPlotLinePath(a,null,null,!0),c=[],e=this.horiz,l=1,b;a=a<this.min&&d<this.min||a>this.max&&d>this.max;if(n&&g)for(a&&(b=n.toString()===g.toString(),l=0),a=0;a<n.length;a+=6)e&&g[a+1]===n[a+
1]?(g[a+1]+=l,g[a+4]+=l):e||g[a+2]!==n[a+2]||(g[a+2]+=l,g[a+5]+=l),c.push("M",n[a+1],n[a+2],"L",n[a+4],n[a+5],g[a+4],g[a+5],g[a+1],g[a+2],"z"),c.flat=b;return c},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(f,d){var g=(new a.PlotLineOrBand(this,f)).render(),n=this.userOptions;g&&(d&&(n[d]=n[d]||[],n[d].push(f)),this.plotLinesAndBands.push(g));return g},removePlotBandOrLine:function(a){for(var d=
this.plotLinesAndBands,g=this.options,n=this.userOptions,c=d.length;c--;)d[c].id===a&&d[c].destroy();k([g.plotLines||[],n.plotLines||[],g.plotBands||[],n.plotBands||[]],function(e){for(c=e.length;c--;)e[c].id===a&&t(e,e[c])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(N,V);(function(a){var E=a.dateFormat,C=a.each,G=a.extend,q=a.format,f=a.isNumber,k=a.map,t=a.merge,m=a.pick,v=a.splat,u=a.syncTimeout,d=a.timeUnits;a.Tooltip=
function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||this.split},cleanSplit:function(a){C(this.chart.series,function(d){var c=d&&d.tt;c&&(!c.isActive||a?d.tt=c.destroy():c.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,d=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,d.shape||
"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();t(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,t(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());
clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,d,c,e){var l=this,b=l.now,g=!1!==l.options.animation&&!l.isHidden&&(1<Math.abs(a-b.x)||1<Math.abs(d-b.y)),n=l.followPointer||1<l.len;G(b,{x:g?(2*b.x+a)/3:a,y:g?(b.y+d)/2:d,anchorX:n?void 0:g?(2*b.anchorX+c)/3:c,anchorY:n?void 0:g?(b.anchorY+e)/2:e});l.getLabel().attr(b);g&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){l&&l.move(a,d,c,e)},32))},hide:function(a){var d=this;clearTimeout(this.hideTimer);
a=m(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){d.getLabel()[a?"fadeOut":"hide"]();d.isHidden=!0},a))},getAnchor:function(a,d){var c,e=this.chart,l=e.inverted,b=e.plotTop,g=e.plotLeft,n=0,f=0,r,m;a=v(a);c=a[0].tooltipPos;this.followPointer&&d&&(void 0===d.chartX&&(d=e.pointer.normalize(d)),c=[d.chartX-e.plotLeft,d.chartY-b]);c||(C(a,function(a){r=a.series.yAxis;m=a.series.xAxis;n+=a.plotX+(!l&&m?m.left-g:0);f+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!l&&r?r.top-
b:0)}),n/=a.length,f/=a.length,c=[l?e.plotWidth-f:n,this.shared&&!l&&1<a.length&&d?d.chartY-b:l?e.plotHeight-n:f]);return k(c,Math.round)},getPosition:function(a,d,c){var e=this.chart,l=this.distance,b={},g=e.inverted&&c.h||0,n,f=["y",e.chartHeight,d,c.plotY+e.plotTop,e.plotTop,e.plotTop+e.plotHeight],r=["x",e.chartWidth,a,c.plotX+e.plotLeft,e.plotLeft,e.plotLeft+e.plotWidth],k=!this.followPointer&&m(c.ttBelow,!e.inverted===!!c.negative),w=function(a,c,e,h,p,d){var n=e<h-l,r=h+l+e<c,z=h-l-e;h+=l;
if(k&&r)b[a]=h;else if(!k&&n)b[a]=z;else if(n)b[a]=Math.min(d-e,0>z-g?z:z-g);else if(r)b[a]=Math.max(p,h+g+e>c?h:h+g);else return!1},D=function(a,c,e,h){var p;h<l||h>c-l?p=!1:b[a]=h<e/2?1:h>c-e/2?c-e-2:h-e/2;return p},t=function(a){var b=f;f=r;r=b;n=a},p=function(){!1!==w.apply(0,f)?!1!==D.apply(0,r)||n||(t(!0),p()):n?b.x=b.y=0:(t(!0),p())};(e.inverted||1<this.len)&&t();p();return b},defaultFormatter:function(a){var d=this.points||v(this),c;c=[a.tooltipFooterHeaderFormatter(d[0])];c=c.concat(a.bodyFormatter(d));
c.push(a.tooltipFooterHeaderFormatter(d[0],!0));return c},refresh:function(a,d){var c,e=this.options,l,b=a,g,n={},f=[];c=e.formatter||this.defaultFormatter;var n=this.shared,r;e.enabled&&(clearTimeout(this.hideTimer),this.followPointer=v(b)[0].series.tooltipOptions.followPointer,g=this.getAnchor(b,d),d=g[0],l=g[1],!n||b.series&&b.series.noSharedTooltip?n=b.getLabelConfig():(C(b,function(a){a.setState("hover");f.push(a.getLabelConfig())}),n={x:b[0].category,y:b[0].y},n.points=f,b=b[0]),this.len=f.length,
n=c.call(n,this),r=b.series,this.distance=m(r.tooltipOptions.distance,16),!1===n?this.hide():(c=this.getLabel(),this.isHidden&&c.attr({opacity:1}).show(),this.split?this.renderSplit(n,v(a)):(e.style.width||c.css({width:this.chart.spacingBox.width}),c.attr({text:n&&n.join?n.join(""):n}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+m(b.colorIndex,r.colorIndex)),c.attr({stroke:e.borderColor||b.color||r.color||"#666666"}),this.updatePosition({plotX:d,plotY:l,negative:b.negative,
ttBelow:b.ttBelow,h:g[2]||0})),this.isHidden=!1))},renderSplit:function(d,n){var c=this,e=[],l=this.chart,b=l.renderer,g=!0,f=this.options,k=0,r=this.getLabel();a.isString(d)&&(d=[!1,d]);C(d.slice(0,n.length+1),function(a,d){if(!1!==a){d=n[d-1]||{isHeader:!0,plotX:n[0].plotX};var z=d.series||c,w=z.tt,p=d.series||{},B="highcharts-color-"+m(d.colorIndex,p.colorIndex,"none");w||(z.tt=w=b.label(null,null,null,"callout",null,null,f.useHTML).addClass("highcharts-tooltip-box "+B).attr({padding:f.padding,
r:f.borderRadius,fill:f.backgroundColor,stroke:f.borderColor||d.color||p.color||"#333333","stroke-width":f.borderWidth}).add(r));w.isActive=!0;w.attr({text:a});w.css(f.style).shadow(f.shadow);a=w.getBBox();p=a.width+w.strokeWidth();d.isHeader?(k=a.height,p=Math.max(0,Math.min(d.plotX+l.plotLeft-p/2,l.chartWidth-p))):p=d.plotX+l.plotLeft-m(f.distance,16)-p;0>p&&(g=!1);a=(d.series&&d.series.yAxis&&d.series.yAxis.pos)+(d.plotY||0);a-=l.plotTop;e.push({target:d.isHeader?l.plotHeight+k:a,rank:d.isHeader?
1:0,size:z.tt.getBBox().height+1,point:d,x:p,tt:w})}});this.cleanSplit();a.distribute(e,l.plotHeight+k);C(e,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:g||b.isHeader?a.x:b.plotX+l.plotLeft+m(f.distance,16),y:a.pos+l.plotTop,anchorX:b.isHeader?b.plotX+l.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+l.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var d=this.chart,c=this.getLabel(),c=(this.options.positioner||this.getPosition).call(this,
c.width,c.height,a);this.move(Math.round(c.x),Math.round(c.y||0),a.plotX+d.plotLeft,a.plotY+d.plotTop)},getDateFormat:function(a,n,c,e){var l=E("%m-%d %H:%M:%S.%L",n),b,g,f={millisecond:15,second:12,minute:9,hour:6,day:3},k="millisecond";for(g in d){if(a===d.week&&+E("%w",n)===c&&"00:00:00.000"===l.substr(6)){g="week";break}if(d[g]>a){g=k;break}if(f[g]&&l.substr(f[g])!=="01-01 00:00:00.000".substr(f[g]))break;"week"!==g&&(k=g)}g&&(b=e[g]);return b},getXDateFormat:function(a,d,c){d=d.dateTimeLabelFormats;
var e=c&&c.closestPointRange;return(e?this.getDateFormat(e,a.x,c.options.startOfWeek,d):d.day)||d.year},tooltipFooterHeaderFormatter:function(a,d){d=d?"footer":"header";var c=a.series,e=c.tooltipOptions,l=e.xDateFormat,b=c.xAxis,g=b&&"datetime"===b.options.type&&f(a.key),n=e[d+"Format"];g&&!l&&(l=this.getXDateFormat(a,e,b));g&&l&&C(a.point&&a.point.tooltipDateKeys||["key"],function(a){n=n.replace("{point."+a+"}","{point."+a+":"+l+"}")});return q(n,{point:a,series:c})},bodyFormatter:function(a){return k(a,
function(a){var c=a.series.tooltipOptions;return(c[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}}})(N);(function(a){var E=a.addEvent,C=a.attr,G=a.charts,q=a.color,f=a.css,k=a.defined,t=a.each,m=a.extend,v=a.find,u=a.fireEvent,d=a.isObject,g=a.offset,n=a.pick,c=a.removeEvent,e=a.splat,l=a.Tooltip;a.Pointer=function(a,c){this.init(a,c)};a.Pointer.prototype={init:function(a,c){this.options=c;this.chart=a;this.runChartClick=
c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};l&&(a.tooltip=new l(a,c.tooltip),this.followTouchMove=n(c.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,e=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(e=n(c.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!b||e&&b;this.zoomVert=e&&!b||a&&b;this.hasZoom=a||e},normalize:function(a,c){var b;b=a.touches?a.touches.length?a.touches.item(0):
a.changedTouches[0]:a;c||(this.chartPosition=c=g(this.chart.container));return m(a,{chartX:Math.round(b.pageX-c.left),chartY:Math.round(b.pageY-c.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,c,e){var b;t(a,function(a){var l=!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(e,l);if((l=d(a,
!0))&&!(l=!d(b,!0)))var l=b.distX-a.distX,g=b.dist-a.dist,n=(a.series.group&&a.series.group.zIndex)-(b.series.group&&b.series.group.zIndex),l=0<(0!==l&&c?l:0!==g?g:0!==n?n:b.series.index>a.series.index?-1:1);l&&(b=a)});return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=a.series,e=b.xAxis,b=b.yAxis;if(e&&b)return c?{chartX:e.len+e.pos-a.clientX,chartY:b.len+b.pos-a.plotY}:{chartX:a.clientX+e.pos,chartY:a.plotY+
b.pos}},getHoverData:function(b,c,e,l,g,f,w){var r,k=[],p=w&&w.isBoosting;l=!(!l||!b);w=c&&!c.stickyTracking?[c]:a.grep(e,function(a){return a.visible&&!(!g&&a.directTouch)&&n(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(r=l?b:this.findNearestKDPoint(w,g,f))&&r.series;r&&(g&&!c.noSharedTooltip?(w=a.grep(e,function(a){return a.visible&&!(!g&&a.directTouch)&&n(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(w,function(a){var b=v(a.points,function(a){return a.x===r.x&&!a.isNull});
d(b)&&(p&&(b=a.getPoint(b)),k.push(b))})):k.push(r));return{hoverPoint:r,hoverSeries:c,hoverPoints:k}},runPointActions:function(b,c){var e=this.chart,d=e.tooltip&&e.tooltip.options.enabled?e.tooltip:void 0,l=d?d.shared:!1,g=c||e.hoverPoint,f=g&&g.series||e.hoverSeries,f=this.getHoverData(g,f,e.series,!!c||f&&f.directTouch&&this.isDirectTouch,l,b,{isBoosting:e.isBoosting}),k,g=f.hoverPoint;k=f.hoverPoints;c=(f=f.hoverSeries)&&f.tooltipOptions.followPointer;l=l&&f&&!f.noSharedTooltip;if(g&&(g!==e.hoverPoint||
d&&d.isHidden)){t(e.hoverPoints||[],function(b){-1===a.inArray(b,k)&&b.setState()});t(k||[],function(a){a.setState("hover")});if(e.hoverSeries!==f)f.onMouseOver();e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");if(!g.series)return;g.firePointEvent("mouseOver");e.hoverPoints=k;e.hoverPoint=g;d&&d.refresh(l?k:g,b)}else c&&d&&!d.isHidden&&(g=d.getAnchor([{}],b),d.updatePosition({plotX:g[0],plotY:g[1]}));this.unDocMouseMove||(this.unDocMouseMove=E(e.container.ownerDocument,"mousemove",function(b){var c=
G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));t(e.axes,function(c){var e=n(c.crosshair.snap,!0),d=e?a.find(k,function(a){return a.series[c.coll]===c}):void 0;d||!e?c.drawCrosshair(b,d):c.hideCrosshair()})},reset:function(a,c){var b=this.chart,d=b.hoverSeries,l=b.hoverPoint,g=b.hoverPoints,n=b.tooltip,f=n&&n.shared?g:l;a&&f&&t(e(f),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)n&&f&&(n.refresh(f),l&&(l.setState(l.state,!0),t(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,
l)})));else{if(l)l.onMouseOut();g&&t(g,function(a){a.setState()});if(d)d.onMouseOut();n&&n.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,e;t(b.series,function(d){e=a||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(e),d.markerGroup&&(d.markerGroup.attr(e),d.markerGroup.clip(c?b.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(e))});
b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,e=a.chartX,d=a.chartY,l=this.zoomHor,g=this.zoomVert,n=b.plotLeft,f=b.plotTop,p=b.plotWidth,k=b.plotHeight,H,m=this.selectionMarker,h=this.mouseDownX,x=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];m&&m.touch||(e<n?e=n:e>n+p&&(e=n+p),d<f?d=f:d>f+k&&(d=f+k),this.hasDragged=
Math.sqrt(Math.pow(h-e,2)+Math.pow(x-d,2)),10<this.hasDragged&&(H=b.isInsidePlot(h-n,x-f),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&H&&!t&&!m&&(this.selectionMarker=m=b.renderer.rect(n,f,l?1:p,g?1:k,0).attr({fill:c.selectionMarkerFill||q("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),m&&l&&(e-=h,m.attr({width:Math.abs(e),x:(0<e?0:e)+h})),m&&g&&(e=d-x,m.attr({height:Math.abs(e),y:(0<e?0:e)+x})),H&&!m&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=
this,c=this.chart,e=this.hasPinched;if(this.selectionMarker){var d={originalEvent:a,xAxis:[],yAxis:[]},l=this.selectionMarker,g=l.attr?l.attr("x"):l.x,n=l.attr?l.attr("y"):l.y,q=l.attr?l.attr("width"):l.width,p=l.attr?l.attr("height"):l.height,B;if(this.hasDragged||e)t(c.axes,function(c){if(c.zoomEnabled&&k(c.min)&&(e||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var l=c.horiz,h="touchend"===a.type?c.minPixelPadding:0,f=c.toValue((l?g:n)+h),l=c.toValue((l?g+q:n+p)-h);d[c.coll].push({axis:c,min:Math.min(f,
l),max:Math.max(f,l)});B=!0}}),B&&u(c,"selection",d,function(a){c.zoom(m(a,e?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();e&&this.scaleGroups()}c&&(f(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},
onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;k(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=
c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=C(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||
!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,e=b.plotLeft,d=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",m(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(m(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-e,a.chartY-d)&&u(b,"click",a)))},setDOMEvents:function(){var b=
this,c=b.chart.container,e=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};E(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&E(e,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&E(e,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b=this,e=this.chart.container.ownerDocument;
b.unDocMouseMove&&b.unDocMouseMove();c(b.chart.container,"mouseleave",b.onContainerMouseLeave);a.chartCount||(c(e,"mouseup",b.onDocumentMouseUp),a.hasTouch&&c(e,"touchend",b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(N);(function(a){var E=a.charts,C=a.each,G=a.extend,q=a.map,f=a.noop,k=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,f,k,q,d,g){this.zoomHor&&this.pinchTranslateDirection(!0,a,f,k,q,d,g);this.zoomVert&&this.pinchTranslateDirection(!1,
a,f,k,q,d,g)},pinchTranslateDirection:function(a,f,k,q,d,g,n,c){var e=this.chart,l=a?"x":"y",b=a?"X":"Y",m="chart"+b,t=a?"width":"height",u=e["plot"+(a?"Left":"Top")],r,v,w=c||1,D=e.inverted,M=e.bounds[a?"h":"v"],p=1===f.length,B=f[0][m],H=k[0][m],F=!p&&f[1][m],h=!p&&k[1][m],x;k=function(){!p&&20<Math.abs(B-F)&&(w=c||Math.abs(H-h)/Math.abs(B-F));v=(u-H)/w+B;r=e["plot"+(a?"Width":"Height")]/w};k();f=v;f<M.min?(f=M.min,x=!0):f+r>M.max&&(f=M.max-r,x=!0);x?(H-=.8*(H-n[l][0]),p||(h-=.8*(h-n[l][1])),k()):
n[l]=[H,h];D||(g[l]=v-u,g[t]=r);g=D?1/w:w;d[t]=r;d[l]=f;q[D?a?"scaleY":"scaleX":"scale"+b]=w;q["translate"+b]=g*u+(H-g*B)},pinch:function(a){var m=this,t=m.chart,u=m.pinchDown,d=a.touches,g=d.length,n=m.lastValidTouch,c=m.hasZoom,e=m.selectionMarker,l={},b=1===g&&(m.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||m.runChartClick),z={};1<g&&(m.initiated=!0);c&&m.initiated&&!b&&a.preventDefault();q(d,function(a){return m.normalize(a)});"touchstart"===a.type?(C(d,function(a,b){u[b]={chartX:a.chartX,
chartY:a.chartY}}),n.x=[u[0].chartX,u[1]&&u[1].chartX],n.y=[u[0].chartY,u[1]&&u[1].chartY],C(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,e=a.toPixels(k(a.options.min,a.dataMin)),d=a.toPixels(k(a.options.max,a.dataMax)),l=Math.max(e,d);b.min=Math.min(a.pos,Math.min(e,d)-c);b.max=Math.max(a.pos+a.len,l+c)}}),m.res=!0):m.followTouchMove&&1===g?this.runPointActions(m.normalize(a)):u.length&&(e||(m.selectionMarker=e=G({destroy:f,touch:!0},t.plotBox)),m.pinchTranslate(u,
d,l,e,z,n),m.hasPinched=c,m.scaleGroups(l,z),m.res&&(m.res=!1,this.reset(!1,0)))},touch:function(f,m){var q=this.chart,t,d;if(q.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=q.index;1===f.touches.length?(f=this.normalize(f),(d=q.isInsidePlot(f.chartX-q.plotLeft,f.chartY-q.plotTop))&&!q.openMenu?(m&&this.runPointActions(f),"touchmove"===f.type&&(m=this.pinchDown,t=m[0]?4<=Math.sqrt(Math.pow(m[0].chartX-f.chartX,2)+Math.pow(m[0].chartY-f.chartY,2)):!1),k(t,
!0)&&this.pinch(f)):m&&this.reset()):2===f.touches.length&&this.pinch(f)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(f){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(f)}})})(N);(function(a){var E=a.addEvent,C=a.charts,G=a.css,q=a.doc,f=a.extend,k=a.noop,t=a.Pointer,m=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var d={},g=!!v.PointerEvent,n=function(){var c=
[];c.item=function(a){return this[a]};a.objectEach(d,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},c=function(c,d,b,g){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!C[a.hoverChartIndex]||(g(c),g=C[a.hoverChartIndex].pointer,g[d]({type:b,target:c.currentTarget,preventDefault:k,touches:n()}))};f(t.prototype,{onContainerPointerDown:function(a){c(a,"onContainerTouchStart","touchstart",function(a){d[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){c(a,"onContainerTouchMove","touchmove",function(a){d[a.pointerId]={pageX:a.pageX,pageY:a.pageY};d[a.pointerId].target||(d[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){c(a,"onDocumentTouchEnd","touchend",function(a){delete d[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,g?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,g?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(q,g?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(t.prototype,"init",function(a,c,b){a.call(this,c,b);this.hasZoom&&G(c.container,{"-ms-touch-action":"none","touch-action":"none"})});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});u(t.prototype,"destroy",function(a){this.batchMSEvents(m);a.call(this)})}})(N);(function(a){var E=a.addEvent,C=a.css,G=a.discardElement,q=a.defined,f=a.each,k=a.isFirefox,t=a.marginNames,m=a.merge,
v=a.pick,u=a.setAnimation,d=a.stableSort,g=a.win,n=a.wrap;a.Legend=function(a,e){this.init(a,e)};a.Legend.prototype={init:function(a,e){this.chart=a;this.setOptions(e);e.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=m(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.itemHeight=
this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=[]},update:function(a,e){var c=this.chart;this.setOptions(m(!0,this.options,a));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;v(e,!0)&&c.redraw()},colorizeItem:function(a,e){a.legendGroup[e?"removeClass":"addClass"]("highcharts-legend-item-hidden");var c=this.options,b=a.legendItem,d=a.legendLine,g=a.legendSymbol,f=this.itemHiddenStyle.color,c=e?c.itemStyle.color:f,n=e?a.color||f:f,k=a.options&&a.options.marker,m={fill:n};b&&b.css({fill:c,
color:c});d&&d.attr({stroke:n});g&&(k&&g.isMarker&&(m=a.pointAttribs(),e||(m.stroke=m.fill=f)),g.attr(m))},positionItem:function(a){var c=this.options,d=c.symbolPadding,c=!c.rtl,b=a._legendItemPos,g=b[0],b=b[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?g:this.legendWidth-g-2*d-4,b);f&&(f.x=g,f.y=b)},destroyItem:function(a){var c=a.checkbox;f(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())});c&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&
(this[a]=this[a].destroy())}f(this.getAllItems(),function(c){f(["legendItem","legendGroup"],a,c)});f("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var c=this.group&&this.group.alignAttr,d,b=this.clipHeight||this.legendHeight,g=this.titleHeight;c&&(d=c.translateY,f(this.allItems,function(e){var l=e.checkbox,f;l&&(f=d+g+l.y+(a||0)+3,C(l,{left:c.translateX+e.checkboxOffset+l.x-20+"px",top:f+"px",display:f>d-6&&f<d+b-6?"":"none"}))}))},
renderTitle:function(){var a=this.options,e=this.padding,d=a.title,b=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,e-3,e-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(c){var e=this.options;c.legendItem.attr({text:e.labelFormat?a.format(e.labelFormat,c):e.labelFormatter.call(c)})},renderItem:function(a){var c=
this.chart,d=c.renderer,b=this.options,g="horizontal"===b.layout,f=this.symbolWidth,n=b.symbolPadding,r=this.itemStyle,k=this.itemHiddenStyle,w=this.padding,q=g?v(b.itemDistance,20):0,t=!b.rtl,p=b.width,B=b.itemMarginBottom||0,H=this.itemMarginTop,F=a.legendItem,h=!a.series,x=!h&&a.series.drawLegendSymbol?a.series:a,u=x.options,K=this.createCheckboxForItem&&u&&u.showCheckbox,u=f+n+q+(K?20:0),P=b.useHTML,L=a.options.className;F||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+x.type+"-series highcharts-color-"+
a.colorIndex+(L?" "+L:"")+(h?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=F=d.text("",t?f+n:-n,this.baseline||0,P).css(m(a.visible?r:k)).attr({align:t?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(f=r.fontSize,this.fontMetrics=d.fontMetrics(f,F),this.baseline=this.fontMetrics.f+3+H,F.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,x.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,F,P),K&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);r.width||F.css({width:(b.itemWidth||b.width||c.spacingBox.width)-u});this.setText(a);d=F.getBBox();r=a.checkboxOffset=b.itemWidth||a.legendItemWidth||d.width+u;this.itemHeight=d=Math.round(a.legendItemHeight||d.height||this.symbolHeight);g&&this.itemX-w+r>(p||c.spacingBox.width-2*w-b.x)&&(this.itemX=w,this.itemY+=H+this.lastLineHeight+B,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,r);this.lastItemY=H+this.itemY+B;this.lastLineHeight=Math.max(d,
this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];g?this.itemX+=r:(this.itemY+=H+d+B,this.lastLineHeight=d);this.offsetWidth=p||Math.max((g?this.itemX-w-(a.checkbox?0:q):r)+w,this.offsetWidth)},getAllItems:function(){var a=[];f(this.chart.series,function(c){var e=c&&c.options;c&&v(e.showInLegend,q(e.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===e.legendType?c.data:c)))});return a},adjustMargins:function(a,e){var c=this.chart,b=this.options,d=b.align.charAt(0)+b.verticalAlign.charAt(0)+
b.layout.charAt(0);b.floating||f([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(g,l){g.test(d)&&!q(a[l])&&(c[t[l]]=Math.max(c[t[l]],c.legend[(l+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][l]*b[l%2?"x":"y"]+v(b.margin,12)+e[l]))})},render:function(){var a=this,e=a.chart,g=e.renderer,b=a.group,n,k,q,r,t=a.box,w=a.options,D=a.padding;a.itemX=D;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;b||(a.group=b=g.g("legend").attr({zIndex:7}).add(),a.contentGroup=g.g().attr({zIndex:1}).add(b),
a.scrollGroup=g.g().add(a.contentGroup));a.renderTitle();n=a.getAllItems();d(n,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});w.reversed&&n.reverse();a.allItems=n;a.display=k=!!n.length;a.lastLineHeight=0;f(n,function(b){a.renderItem(b)});q=(w.width||a.offsetWidth)+D;r=a.lastItemY+a.lastLineHeight+a.titleHeight;r=a.handleOverflow(r);r+=D;t||(a.box=t=g.rect().addClass("highcharts-legend-box").attr({r:w.borderRadius}).add(b),t.isNew=!0);t.attr({stroke:w.borderColor,
"stroke-width":w.borderWidth||0,fill:w.backgroundColor||"none"}).shadow(w.shadow);0<q&&0<r&&(t[t.isNew?"attr":"animate"](t.crisp.call({},{x:0,y:0,width:q,height:r},t.strokeWidth())),t.isNew=!1);t[k?"show":"hide"]();a.legendWidth=q;a.legendHeight=r;f(n,function(b){a.positionItem(b)});k&&b.align(m(w,{width:q,height:r}),!0,"spacingBox");e.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var c=this,d=this.chart,b=d.renderer,g=this.options,n=g.y,k=this.padding,d=d.spacingBox.height+("top"===
g.verticalAlign?-n:n)-k,n=g.maxHeight,r,m=this.clipRect,w=g.navigation,q=v(w.animation,!0),t=w.arrowSize||12,p=this.nav,B=this.pages,H,F=this.allItems,h=function(a){"number"===typeof a?m.attr({height:a}):m&&(c.clipRect=m.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+k+"px,9999px,"+(k+a)+"px,0)":"auto")};"horizontal"!==g.layout||"middle"===g.verticalAlign||g.floating||(d/=2);n&&(d=Math.min(d,n));B.length=0;a>d&&!1!==w.enabled?(this.clipHeight=r=Math.max(d-
20-this.titleHeight-k,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,f(F,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var e=B.length;if(!e||c-B[e-1]>r&&(H||c)!==B[e-1])B.push(H||c),e++;b===F.length-1&&c+a-B[e-1]>r&&B.push(c);c!==H&&(H=c)}),m||(m=c.clipRect=b.clipRect(0,k,9999,0),c.contentGroup.clip(m)),h(r),p||(this.nav=p=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,t,t).on("click",function(){c.scroll(-1,q)}).add(p),this.pager=
b.text("",15,10).addClass("highcharts-legend-navigation").css(w.style).add(p),this.down=b.symbol("triangle-down",0,0,t,t).on("click",function(){c.scroll(1,q)}).add(p)),c.scroll(0),a=d):p&&(h(),this.nav=p.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,e){var c=this.pages,b=c.length;a=this.currentPage+a;var d=this.clipHeight,g=this.options.navigation,n=this.pager,f=this.padding;a>b&&(a=b);0<a&&(void 0!==e&&u(e,this.chart),this.nav.attr({translateX:f,translateY:d+
this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),n.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?g.inactiveColor:g.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?g.inactiveColor:g.activeColor}).css({cursor:a===b?"default":"pointer"}),e=-c[a-
1]+this.initialItemY,this.scrollGroup.animate({translateY:e}),this.currentPage=a,this.positionCheckboxes(e))}};a.LegendSymbolMixin={drawRectangle:function(a,e){var c=a.symbolHeight,b=a.options.squareSymbol;e.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-c)/2:0,a.baseline-c+1,b?c:a.symbolWidth,c,v(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(e.legendGroup)},drawLineMarker:function(a){var c=this.options,d=c.marker,b=a.symbolWidth,g=a.symbolHeight,n=g/2,f=this.chart.renderer,
k=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var q;q={"stroke-width":c.lineWidth||0};c.dashStyle&&(q.dashstyle=c.dashStyle);this.legendLine=f.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(q).add(k);d&&!1!==d.enabled&&(c=Math.min(v(d.radius,n),n),0===this.symbol.indexOf("url")&&(d=m(d,{width:g,height:g}),c=0),this.legendSymbol=d=f.symbol(this.symbol,b/2-c,a-c,2*c,2*c,d).addClass("highcharts-point").add(k),d.isMarker=!0)}};(/Trident\/7\.0/.test(g.navigator.userAgent)||
k)&&n(a.Legend.prototype,"positionItem",function(a,e){var c=this,b=function(){e._legendItemPos&&a.call(c,e)};b();setTimeout(b)})})(N);(function(a){var E=a.addEvent,C=a.animate,G=a.animObject,q=a.attr,f=a.doc,k=a.Axis,t=a.createElement,m=a.defaultOptions,v=a.discardElement,u=a.charts,d=a.css,g=a.defined,n=a.each,c=a.extend,e=a.find,l=a.fireEvent,b=a.grep,z=a.isNumber,A=a.isObject,I=a.isString,r=a.Legend,J=a.marginNames,w=a.merge,D=a.objectEach,M=a.Pointer,p=a.pick,B=a.pInt,H=a.removeEvent,F=a.seriesTypes,
h=a.splat,x=a.svg,R=a.syncTimeout,K=a.win,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};c(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(I(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var e,d,h=b.series,p=b.plotOptions||{};b.series=null;e=w(m,b);for(d in e.plotOptions)e.plotOptions[d].tooltip=p[d]&&w(p[d].tooltip)||void 0;e.tooltip.userOptions=b.chart&&b.chart.forExport&&
b.tooltip.userOptions||b.tooltip;e.series=b.series=h;this.userOptions=b;b=e.chart;d=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=e;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var g=this;g.index=u.length;u.push(g);a.chartCount++;d&&D(d,function(a,b){E(g,b,a)});g.xAxis=[];g.yAxis=[];g.pointCount=g.colorCounter=g.symbolCounter=0;g.firstRender()},initSeries:function(b){var c=this.options.chart;
(c=F[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var e=c?b:a;a=c?a:b;return 0<=e&&e<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var e=this.axes,d=this.series,h=this.pointer,p=this.legend,g=this.isDirtyLegend,f,k,r=this.hasCartesianSeries,B=this.isDirtyBox,m,H=this.renderer,x=
H.isHidden(),w=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);x&&this.temporaryDisplay();this.layOutTitles();for(b=d.length;b--;)if(m=d[b],m.options.stacking&&(f=!0,m.isDirty)){k=!0;break}if(k)for(b=d.length;b--;)m=d[b],m.options.stacking&&(m.isDirty=!0);n(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),g=!0);a.isDirtyData&&l(a,"updatedData")});g&&p.options.enabled&&(p.render(),this.isDirtyLegend=!1);f&&this.getStacks();r&&n(e,function(a){a.updateNames();
a.setScale()});this.getMargins();r&&(n(e,function(a){a.isDirty&&(B=!0)}),n(e,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,w.push(function(){l(a,"afterSetExtremes",c(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(B||f)&&a.redraw()}));B&&this.drawChartBox();l(this,"predraw");n(d,function(a){(B||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});h&&h.reset(!0);H.draw();l(this,"redraw");l(this,"render");x&&this.temporaryDisplay(!0);n(w,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var c,d=this.series,h;c=e(this.axes,b)||e(this.series,b);for(h=0;!c&&h<d.length;h++)c=e(d[h].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=h(b.xAxis||{}),b=b.yAxis=h(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new k(a,b)})},getSelectedPoints:function(){var a=[];n(this.series,function(c){a=a.concat(b(c.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return b(this.series,
function(a){return a.selected})},setTitle:function(a,b,c){var e=this,d=e.options,h;h=d.title=w({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=w({style:{color:"#666666"}},d.subtitle,b);n([["title",a,h],["subtitle",b,d]],function(a,b){var c=a[0],d=e[c],h=a[1];a=a[2];d&&h&&(e[c]=d=d.destroy());a&&!d&&(e[c]=e.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),e[c].update=function(a){e.setTitle(!b&&a,b&&a)},e[c].css(a.style))});
e.layOutTitles(c)},layOutTitles:function(a){var b=0,e,d=this.renderer,h=this.spacingBox;n(["title","subtitle"],function(a){var e=this[a],p=this.options[a];a="title"===a?-3:p.verticalAlign?0:b+2;var g;e&&(g=p.style.fontSize,g=d.fontMetrics(g,e).b,e.css({width:(p.width||h.width+p.widthAdjust)+"px"}).align(c({y:a+g},p),!1,"spacingBox"),p.floating||p.verticalAlign||(b=Math.ceil(b+e.getBBox(p.useHTML).height)))},this);e=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&e&&(this.isDirtyBox=e,this.hasRendered&&
p(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,e=this.renderTo;g(c)||(this.containerWidth=a.getStyle(e,"width"));g(b)||(this.containerHeight=a.getStyle(e,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),
delete c.hcOrigStyle),c.hcOrigDetached&&(f.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){f.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,f.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;
if(c===f.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,e=this.options,d=e.chart,h,p;b=this.renderTo;var g=a.uniqueKey(),l;b||(this.renderTo=b=d.renderTo);I(b)&&(this.renderTo=b=f.getElementById(b));b||a.error(13,!0);h=B(q(b,"data-highcharts-chart"));z(h)&&u[h]&&u[h].hasRendered&&u[h].destroy();q(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();
h=this.chartWidth;p=this.chartHeight;l=c({position:"relative",overflow:"hidden",width:h+"px",height:p+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=t("div",{id:g},l,b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||a.Renderer)(b,h,p,null,d.forExport,e.exporting&&e.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=
this.spacing,c=this.margin,e=this.titleOffset;this.resetMargins();e&&!g(c[0])&&(this.plotTop=Math.max(this.plotTop,e+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&n(a.axes,function(a){a.visible&&
a.getOffset()});n(J,function(e,d){g(c[d])||(a[e]+=b[d])});a.setChartSize()},reflow:function(b){var c=this,e=c.options.chart,d=c.renderTo,h=g(e.width)&&g(e.height),p=e.width||a.getStyle(d,"width"),e=e.height||a.getStyle(d,"height"),d=b?b.target:K;if(!h&&!c.isPrinting&&p&&e&&(d===K||d===f)){if(p!==c.containerWidth||e!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=R(function(){c.container&&c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=p;c.containerHeight=e}},initReflow:function(){var a=
this,b;b=E(K,"resize",function(b){a.reflow(b)});E(a,"destroy",b)},setSize:function(b,c,e){var h=this,p=h.renderer;h.isResizing+=1;a.setAnimation(e,h);h.oldChartHeight=h.chartHeight;h.oldChartWidth=h.chartWidth;void 0!==b&&(h.options.chart.width=b);void 0!==c&&(h.options.chart.height=c);h.getChartSize();b=p.globalAnimation;(b?C:d)(h.container,{width:h.chartWidth+"px",height:h.chartHeight+"px"},b);h.setChartSize(!0);p.setSize(h.chartWidth,h.chartHeight,e);n(h.axes,function(a){a.isDirty=!0;a.setScale()});
h.isDirtyLegend=!0;h.isDirtyBox=!0;h.layOutTitles();h.getMargins();h.redraw(e);h.oldChartHeight=null;l(h,"resize");R(function(){h&&l(h,"endResize",null,function(){--h.isResizing})},G(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,e=this.chartWidth,d=this.chartHeight,h=this.options.chart,p=this.spacing,g=this.clipOffset,l,f,k,r;this.plotLeft=l=Math.round(this.plotLeft);this.plotTop=f=Math.round(this.plotTop);this.plotWidth=k=Math.max(0,Math.round(e-l-this.marginRight));
this.plotHeight=r=Math.max(0,Math.round(d-f-this.marginBottom));this.plotSizeX=b?r:k;this.plotSizeY=b?k:r;this.plotBorderWidth=h.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:p[3],y:p[0],width:e-p[3]-p[1],height:d-p[0]-p[2]};this.plotBox=c.plotBox={x:l,y:f,width:k,height:r};e=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(e,g[3])/2);c=Math.ceil(Math.max(e,g[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(e,g[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(e,g[2])/2-c))};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;n(["margin","spacing"],function(c){var e=b[c],d=A(e)?e:[e,e,e,e];n(["Top","Right","Bottom","Left"],function(e,h){a[c][h]=p(b[c+e],d[h])})});n(J,function(b,c){a[b]=p(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,e=this.chartHeight,d=this.chartBackground,
h=this.plotBackground,p=this.plotBorder,g,l=this.plotBGImage,f=a.backgroundColor,n=a.plotBackgroundColor,k=a.plotBackgroundImage,r,m=this.plotLeft,B=this.plotTop,H=this.plotWidth,x=this.plotHeight,w=this.plotBox,q=this.clipRect,D=this.clipBox,F="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),F="attr");g=a.borderWidth||0;r=g+(a.shadow?8:0);f={fill:f||"none"};if(g||d["stroke-width"])f.stroke=a.borderColor,f["stroke-width"]=g;d.attr(f).shadow(a.shadow);d[F]({x:r/
2,y:r/2,width:c-r-g%2,height:e-r-g%2,r:a.borderRadius});F="animate";h||(F="attr",this.plotBackground=h=b.rect().addClass("highcharts-plot-background").add());h[F](w);h.attr({fill:n||"none"}).shadow(a.plotShadow);k&&(l?l.animate(w):this.plotBGImage=b.image(k,m,B,H,x).add());q?q.animate({width:D.width,height:D.height}):this.clipRect=b.clipRect(D);F="animate";p||(F="attr",this.plotBorder=p=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());p.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
0,fill:"none"});p[F](p.crisp({x:m,y:B,width:H,height:x},-p.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,e=a.options.series,d,h;n(["inverted","angular","polar"],function(p){c=F[b.type||b.defaultSeriesType];h=b[p]||c&&c.prototype[p];for(d=e&&e.length;!h&&d--;)(c=F[e[d].type])&&c.prototype[p]&&(h=!0);a[p]=h})},linkSeries:function(){var a=this,b=a.series;n(b,function(a){a.linkedSeries.length=0});n(b,function(b){var c=b.options.linkedTo;I(c)&&(c=":previous"===
c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=p(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){n(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&n(b.items,function(e){var d=c(b.style,e.style),h=B(d.left)+a.plotLeft,p=B(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(e.html,h,p).attr({zIndex:2}).css(d).add()})},render:function(){var a=
this.axes,b=this.renderer,c=this.options,e,d,h;this.setTitle();this.legend=new r(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;e=this.plotHeight-=21;n(a,function(a){a.setScale()});this.getAxisMargins();d=1.1<c/this.plotWidth;h=1.05<e/this.plotHeight;if(d||h)n(a,function(a){(a.horiz&&d||!a.horiz&&h)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&n(a,function(a){a.visible&&a.render()});this.seriesGroup||
(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=w(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(K.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),
this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,e=b.series,d=b.container,h,p=d&&d.parentNode;l(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");H(b);for(h=c.length;h--;)c[h]=c[h].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(h=e.length;h--;)e[h]=e[h].destroy();n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",H(d),p&&v(d));D(b,function(a,c){delete b[c]})},isReadyToRender:function(){var a=this;return x||K!=K.top||"complete"===f.readyState?!0:(f.attachEvent("onreadystatechange",function(){f.detachEvent("onreadystatechange",a.firstRender);"complete"===f.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();l(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();
a.getAxes();n(b.series||[],function(b){a.initSeries(b)});a.linkSeries();l(a,"beforeRender");M&&(a.pointer=new M(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){n([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);l(this,"load");l(this,"render");g(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(N);(function(a){var E,C=a.each,G=a.extend,q=a.erase,f=a.fireEvent,
k=a.format,t=a.isArray,m=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,g,f){this.series=a;this.color=a.color;this.applyOptions(g,f);a.options.colorByPoint?(g=a.options.colors||a.chart.options.colors,this.color=this.color||g[a.colorCounter],g=g.length,f=a.colorCounter,a.colorCounter++,a.colorCounter===g&&(a.colorCounter=0)):f=a.colorIndex;this.colorIndex=v(this.colorIndex,f);a.chart.pointCount++;return this},applyOptions:function(a,g){var d=this.series,
c=d.options.pointValKey||d.pointValKey;a=E.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;c&&(this.y=this[c]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!m(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===g&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));void 0===this.x&&d&&(this.x=void 0===g?d.autoIncrement(this):g);return this},optionsToObject:function(a){var d={},f=this.series,
c=f.options.keys,e=c||f.pointArrayMap||["y"],l=e.length,b=0,k=0;if(m(a)||null===a)d[e[0]]=a;else if(t(a))for(!c&&a.length>l&&(f=typeof a[0],"string"===f?d.name=a[0]:"number"===f&&(d.x=a[0]),b++);k<l;)c&&void 0===a[b]||(d[e[k]]=a[b]),b++,k++;else"object"===typeof a&&(d=a,a.dataLabels&&(f._hasPointLabels=!0),a.marker&&(f._hasPointMarkers=!0));return d},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?
" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,g=a.zones,a=a.zoneAxis||"y",f=0,c;for(c=g[f];this[a]>=c.value;)c=g[++f];c&&c.color&&!this.options.color&&(this.color=c.color);return c},destroy:function(){var a=this.series.chart,g=a.hoverPoints,f;a.pointCount--;g&&(this.setState(),
q(g,this),g.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(f in this)this[f]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],g,f=6;f--;)g=a[f],this[g]&&(this[g]=this[g].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,
series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,f=d.tooltipOptions,c=v(f.valueDecimals,""),e=f.valuePrefix||"",l=f.valueSuffix||"";C(d.pointArrayMap||["y"],function(b){b="{point."+b;if(e||l)a=a.replace(b+"}",e+b+"}"+l);a=a.replace(b+"}",b+":,."+c+"f}")});return k(a,{point:this,series:this.series})},firePointEvent:function(a,g,n){var c=this,e=this.series.options;(e.point.events[a]||c.options&&c.options.events&&
c.options.events[a])&&this.importEvents();"click"===a&&e.allowPointSelect&&(n=function(a){c.select&&c.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});f(this,a,g,n)},visible:!0}})(N);(function(a){var E=a.addEvent,C=a.animObject,G=a.arrayMax,q=a.arrayMin,f=a.correctFloat,k=a.Date,t=a.defaultOptions,m=a.defaultPlotOptions,v=a.defined,u=a.each,d=a.erase,g=a.extend,n=a.fireEvent,c=a.grep,e=a.isArray,l=a.isNumber,b=a.isString,z=a.merge,A=a.objectEach,I=a.pick,r=a.removeEvent,J=a.splat,w=a.SVGElement,D=
a.syncTimeout,M=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",
textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,e,d=a.series,p;c.chart=
a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();g(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;A(e,function(a,b){E(c,b,a)});if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();u(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);d.length&&(p=d[d.length-1]);c._i=I(p&&p._i,-1)+1;a.orderSeries(this.insert(d))},insert:function(a){var b=
this.options.index,c;if(l(b)){for(c=a.length;c--;)if(b>=I(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return I(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,e=b.chart,d;u(b.axisTypes||[],function(h){u(e[h],function(a){d=a.options;if(c[h]===d.index||void 0!==c[h]&&c[h]===d.id||void 0===c[h]&&0===d.index)b.insert(a.series),b[h]=a,a.isDirty=!0});b[h]||b.optionalAxis===h||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=
a.series,e=arguments,d=l(b)?function(e){var d="y"===e&&c.toYData?c.toYData(a):a[e];c[e+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(e,2))};u(c.parallelArrays,d)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,e=a.pointIntervalUnit,b=I(b,a.pointStart,0);this.pointInterval=c=I(this.pointInterval,a.pointInterval,1);e&&(a=new k(b),"day"===e?a=+a[k.hcSetDate](a[k.hcGetDate]()+c):"month"===e?a=+a[k.hcSetMonth](a[k.hcGetMonth]()+c):"year"===e&&
(a=+a[k.hcSetFullYear](a[k.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,e=c.plotOptions,d=(b.userOptions||{}).plotOptions||{},p=e[this.type];this.userOptions=a;b=z(p,e.series,a);this.tooltipOptions=z(t.tooltip,t.plotOptions.series&&t.plotOptions.series.tooltip,t.plotOptions[this.type].tooltip,c.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=I(a.stickyTracking,d[this.type]&&d[this.type].stickyTracking,
d.series&&d.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===p.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&v(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,
b,c){var e,d=this.chart,p=this.userOptions,g=a+"Index",f=a+"Counter",l=c?c.length:I(d.options.chart[a+"Count"],d[a+"Count"]);b||(e=I(p[g],p["_"+g]),v(e)||(d.series.length||(d[f]=0),p["_"+g]=e=d[f]%l,d[f]+=1),c&&(b=c[e]));void 0!==e&&(this[g]=e);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||m[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},
drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,d,g,f){var h=this,p=h.points,n=p&&p.length||0,k,r=h.options,m=h.chart,w=null,B=h.xAxis,q=r.turboThreshold,H=this.xData,D=this.yData,t=(k=h.pointArrayMap)&&k.length;c=c||[];k=c.length;d=I(d,!0);if(!1!==f&&k&&n===k&&!h.cropped&&!h.hasGroupedData&&h.visible)u(c,function(a,b){p[b].update&&a!==r.data[b]&&p[b].update(a,!1,null,!1)});else{h.xIncrement=null;h.colorCounter=0;u(this.parallelArrays,function(a){h[a+"Data"].length=0});if(q&&
k>q){for(g=0;null===w&&g<k;)w=c[g],g++;if(l(w))for(g=0;g<k;g++)H[g]=this.autoIncrement(),D[g]=c[g];else if(e(w))if(t)for(g=0;g<k;g++)w=c[g],H[g]=w[0],D[g]=w.slice(1,t+1);else for(g=0;g<k;g++)w=c[g],H[g]=w[0],D[g]=w[1];else a.error(12)}else for(g=0;g<k;g++)void 0!==c[g]&&(w={series:h},h.pointClass.prototype.applyOptions.apply(w,[c[g]]),h.updateParallelArrays(w,g));D&&b(D[0])&&a.error(14,!0);h.data=[];h.options.data=h.userOptions.data=c;for(g=n;g--;)p[g]&&p[g].destroy&&p[g].destroy();B&&(B.minRange=
B.userMinRange);h.isDirty=m.isDirtyBox=!0;h.isDirtyData=!!p;g=!1}"point"===r.legendType&&(this.processData(),this.generatePoints());d&&m.redraw(g)},processData:function(b){var c=this.xData,e=this.yData,d=c.length,h;h=0;var p,g,f=this.xAxis,l,n=this.options;l=n.cropThreshold;var k=this.getExtremesFromAll||n.getExtremesFromAll,r=this.isCartesian,n=f&&f.val2lin,m=f&&f.isLog,w,q;if(r&&!this.isDirty&&!f.isDirty&&!this.yAxis.isDirty&&!b)return!1;f&&(b=f.getExtremes(),w=b.min,q=b.max);if(r&&this.sorted&&
!k&&(!l||d>l||this.forceCrop))if(c[d-1]<w||c[0]>q)c=[],e=[];else if(c[0]<w||c[d-1]>q)h=this.cropData(this.xData,this.yData,w,q),c=h.xData,e=h.yData,h=h.start,p=!0;for(l=c.length||1;--l;)d=m?n(c[l])-n(c[l-1]):c[l]-c[l-1],0<d&&(void 0===g||d<g)?g=d:0>d&&this.requireSorting&&a.error(15);this.cropped=p;this.cropStart=h;this.processedXData=c;this.processedYData=e;this.closestPointRange=g},cropData:function(a,b,c,e){var d=a.length,p=0,g=d,f=I(this.cropShoulder,1),l;for(l=0;l<d;l++)if(a[l]>=c){p=Math.max(0,
l-f);break}for(c=l;c<d;c++)if(a[c]>e){g=c+f;break}return{xData:a.slice(p,g),yData:b.slice(p,g),start:p,end:g}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,e,d=this.processedXData,g=this.processedYData,f=this.pointClass,l=d.length,n=this.cropStart||0,k,r=this.hasGroupedData,a=a.keys,m,w=[],q;c||r||(c=[],c.length=b.length,c=this.data=c);a&&r&&(this.options.keys=!1);for(q=0;q<l;q++)k=n+q,r?(m=(new f).init(this,[d[q]].concat(J(g[q]))),m.dataGroup=this.groupMap[q]):(m=c[k])||void 0===
b[k]||(c[k]=m=(new f).init(this,b[k],d[q])),m&&(m.index=k,w[q]=m);this.options.keys=a;if(c&&(l!==(e=c.length)||r))for(q=0;q<e;q++)q!==n||r||(q+=l),c[q]&&(c[q].destroyElements(),c[q].plotX=void 0);this.data=c;this.points=w},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,h=[],g=0;d=this.xAxis.getExtremes();var p=d.min,f=d.max,n,k,r,m;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(m=0;m<d;m++)if(k=c[m],r=a[m],n=(l(r,!0)||e(r))&&(!b.positiveValuesOnly||r.length||0<r),
k=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[m+1]||k)>=p&&(c[m-1]||k)<=f,n&&k)if(n=r.length)for(;n--;)null!==r[n]&&(h[g++]=r[n]);else h[g++]=r;this.dataMin=q(h);this.dataMax=G(h)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,e=c.categories,d=this.yAxis,g=this.points,n=g.length,k=!!this.modifyValue,r=a.pointPlacement,m="between"===r||l(r),w=a.threshold,q=a.startFromThreshold?w:0,D,t,z,
u,A=Number.MAX_VALUE;"between"===r&&(r=.5);l(r)&&(r*=I(a.pointRange||c.pointRange));for(a=0;a<n;a++){var J=g[a],M=J.x,C=J.y;t=J.low;var E=b&&d.stacks[(this.negStacks&&C<(q?0:w)?"-":"")+this.stackKey],G;d.positiveValuesOnly&&null!==C&&0>=C&&(J.isNull=!0);J.plotX=D=f(Math.min(Math.max(-1E5,c.translate(M,0,0,0,1,r,"flags"===this.type)),1E5));b&&this.visible&&!J.isNull&&E&&E[M]&&(u=this.getStackIndicator(u,M,this.index),G=E[M],C=G.points[u.key],t=C[0],C=C[1],t===q&&u.key===E[M].base&&(t=I(w,d.min)),d.positiveValuesOnly&&
0>=t&&(t=null),J.total=J.stackTotal=G.total,J.percentage=G.total&&J.y/G.total*100,J.stackY=C,G.setOffset(this.pointXOffset||0,this.barW||0));J.yBottom=v(t)?d.translate(t,0,1,0,1):null;k&&(C=this.modifyValue(C,J));J.plotY=t="number"===typeof C&&Infinity!==C?Math.min(Math.max(-1E5,d.translate(C,0,1,0,1)),1E5):void 0;J.isInside=void 0!==t&&0<=t&&t<=d.len&&0<=D&&D<=c.len;J.clientX=m?f(c.translate(M,0,0,0,1,r)):D;J.negative=J.y<(w||0);J.category=e&&void 0!==e[J.x]?e[J.x]:J.x;J.isNull||(void 0!==z&&(A=
Math.min(A,Math.abs(D-z))),z=D);J.zone=this.zones.length&&J.getZone()}this.closestPointRangePx=A},getValidPoints:function(a,b){var e=this.chart;return c(a||this.points||[],function(a){return b&&!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,e=b.renderer,d=b.inverted,g=this.clipBox,p=g||b.clipBox,f=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,p.height,c.xAxis,c.yAxis].join(),l=b[f],n=b[f+"m"];l||(a&&(p.width=0,d&&(p.x=
b.plotSizeX),b[f+"m"]=n=e.clipRect(d?b.plotSizeX+99:-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[f]=l=e.clipRect(p),l.count={length:0});a&&!l.count[this.index]&&(l.count[this.index]=!0,l.count.length+=1);!1!==c.clip&&(this.group.clip(a||g?l:b.clipRect),this.markerGroup.clip(n),this.sharedClipKey=f);a||(l.count[this.index]&&(delete l.count[this.index],--l.count.length),0===l.count.length&&f&&b[f]&&(g||(b[f]=b[f].destroy()),b[f+"m"]&&(b[f+"m"]=b[f+"m"].destroy())))},animate:function(a){var b=
this.chart,c=C(this.options.animation),e;a?this.setClip(c):(e=this.sharedClipKey,(a=b[e])&&a.animate({width:b.plotSizeX,x:0},c),b[e+"m"]&&b[e+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();n(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,e,d,g,f=this.options.marker,n,k,r,m,w=this[this.specialGroup]||this.markerGroup,q=I(f.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*f.radius);
if(!1!==f.enabled||this._hasPointMarkers)for(e=0;e<a.length;e++)d=a[e],c=d.plotY,g=d.graphic,n=d.marker||{},k=!!d.marker,r=q&&void 0===n.enabled||n.enabled,m=d.isInside,r&&l(c)&&null!==d.y?(c=I(n.symbol,this.symbol),d.hasImage=0===c.indexOf("url"),r=this.markerAttribs(d,d.selected&&"select"),g?g[m?"show":"hide"](!0).animate(r):m&&(0<r.width||d.hasImage)&&(d.graphic=g=b.renderer.symbol(c,r.x,r.y,r.width,r.height,k?n:f).add(w)),g&&g.attr(this.pointAttribs(d,d.selected&&"select")),g&&g.addClass(d.getClassName(),
!0)):g&&(d.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,e=a.marker||{},d=I(e.radius,c.radius);b&&(c=c.states[b],b=e.states&&e.states[b],d=I(b&&b.radius,c&&c.radius,d+(c&&c.radiusPlus||0)));a.hasImage&&(d=0);a={x:Math.floor(a.plotX)-d,y:a.plotY-d};d&&(a.width=a.height=2*d);return a},pointAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,d=e&&e.marker||{},g=this.color,p=e&&e.color,f=a&&a.color,e=I(d.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=p||a||
f||g;a=d.fillColor||c.fillColor||g;g=d.lineColor||c.lineColor||g;b&&(c=c.states[b],b=d.states&&d.states[b]||{},e=I(b.lineWidth,c.lineWidth,e+I(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":e,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(M.navigator.userAgent),e,h,g=a.data||[],f,l;n(a,"destroy");r(a);u(a.axisTypes||[],function(b){(l=a[b])&&l.series&&(d(l.series,a),l.isDirty=l.forceRedraw=
!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(h=g.length;h--;)(f=g[h])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);A(a,function(a,b){a instanceof w&&!a.survive&&(e=c&&"group"===b?"hide":"destroy",a[e]())});b.hoverSeries===a&&(b.hoverSeries=null);d(b.series,a);b.orderSeries();A(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var e=this,d=e.options,g=d.step,f,p=[],l=[],n;a=a||e.points;(f=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&f&&(g=4-
g);!d.connectNulls||b||c||(a=this.getValidPoints(a));u(a,function(h,f){var k=h.plotX,r=h.plotY,m=a[f-1];(h.leftCliff||m&&m.rightCliff)&&!c&&(n=!0);h.isNull&&!v(b)&&0<f?n=!d.connectNulls:h.isNull&&!b?n=!0:(0===f||n?f=["M",h.plotX,h.plotY]:e.getPointSpline?f=e.getPointSpline(a,h,f):g?(f=1===g?["L",m.plotX,r]:2===g?["L",(m.plotX+k)/2,m.plotY,"L",(m.plotX+k)/2,r]:["L",k,m.plotY],f.push("L",k,r)):f=["L",k,r],l.push(h.x),g&&l.push(h.x),p.push.apply(p,f),n=!1)});p.xMap=l;return e.graphPath=p},drawGraph:function(){var a=
this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),e=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];u(this.zones,function(c,d){e.push(["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});u(e,function(e,d){var h=e[0],g=a[h];g?(g.endX=c.xMap,g.animate({d:c})):c.length&&(a[h]=a.chart.renderer.path(c).addClass(e[1]).attr({zIndex:1}).add(a.group),g={stroke:e[2],"stroke-width":b.lineWidth,
fill:a.fillGraph&&a.color||"none"},e[3]?g.dashstyle=e[3]:"square"!==b.linecap&&(g["stroke-linecap"]=g["stroke-linejoin"]="round"),g=a[h].attr(g).shadow(2>d&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,e=this.zones,d,g,f=this.clips||[],l,n=this.graph,k=this.area,r=Math.max(b.chartWidth,b.chartHeight),m=this[(this.zoneAxis||"y")+"Axis"],w,q,D=b.inverted,t,z,v,J,A=!1;e.length&&(n||k)&&m&&void 0!==m.min&&(q=m.reversed,t=m.horiz,n&&n.hide(),
k&&k.hide(),w=m.getExtremes(),u(e,function(e,h){d=q?t?b.plotWidth:0:t?0:m.toPixels(w.min);d=Math.min(Math.max(I(g,d),0),r);g=Math.min(Math.max(Math.round(m.toPixels(I(e.value,w.max),!0)),0),r);A&&(d=g=m.toPixels(w.max));z=Math.abs(d-g);v=Math.min(d,g);J=Math.max(d,g);m.isXAxis?(l={x:D?J:v,y:0,width:z,height:r},t||(l.x=b.plotHeight-l.x)):(l={x:0,y:D?J:v,width:r,height:z},t&&(l.y=b.plotWidth-l.y));D&&c.isVML&&(l=m.isXAxis?{x:0,y:q?v:J,height:l.width,width:b.chartWidth}:{x:l.y-b.plotLeft-b.spacingBox.x,
y:0,width:l.height,height:b.chartHeight});f[h]?f[h].animate(l):(f[h]=c.clipRect(l),n&&a["zone-graph-"+h].clip(f[h]),k&&a["zone-area-"+h].clip(f[h]));A=e.value>w.max}),this.clips=f)},invertGroups:function(a){function b(){u(["group","markerGroup"],function(b){c[b]&&(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,e=c.chart,d;c.xAxis&&(d=E(e,"resize",b),E(c,"destroy",d),b(a),c.invertGroups=b)},plotGroup:function(a,
b,c,e,d){var h=this[a],g=!h;g&&(this[a]=h=this.chart.renderer.g().attr({zIndex:e||.1}).add(d));h.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(v(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(h.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);h.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return h},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,
c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,e=a.options,d=!!a.animate&&b.renderer.isSVG&&C(e.animation).duration,g=a.visible?"inherit":"hidden",f=e.zIndex,l=a.hasRendered,n=b.seriesGroup,k=b.inverted;c=a.plotGroup("group","series",g,f,n);a.markerGroup=a.plotGroup("markerGroup","markers",g,f,n);d&&a.animate(!0);c.inverted=a.isCartesian?k:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&
a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(k);!1===e.clip||a.sharedClipKey||l||c.clip(b.clipRect);d&&a.animate();l||(a.animationTimeout=D(function(){a.afterAnimate()},d));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,e=this.xAxis,d=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:I(e&&e.left,a.plotLeft),
translateY:I(d&&d.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,e=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:d?e.len-a.chartX+e.pos:a.chartY-e.pos},b)},buildKDTree:function(){function a(c,e,d){var h,g;if(g=c&&c.length)return h=b.kdAxisArray[e%d],c.sort(function(a,b){return a[h]-b[h]}),g=Math.floor(g/2),{point:c[g],left:a(c.slice(0,
g),e+1,d),right:a(c.slice(g+1),e+1,d)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;D(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,h,l){var n=b.point,p=e.kdAxisArray[h%l],k,r,m=n;r=v(a[d])&&v(n[d])?Math.pow(a[d]-n[d],2):null;k=v(a[g])&&v(n[g])?Math.pow(a[g]-n[g],2):null;k=(r||0)+(k||0);n.dist=v(k)?Math.sqrt(k):Number.MAX_VALUE;n.distX=v(r)?
Math.sqrt(r):Number.MAX_VALUE;p=a[p]-n[p];k=0>p?"left":"right";r=0>p?"right":"left";b[k]&&(k=c(a,b[k],h+1,l),m=k[f]<m[f]?k:n);b[r]&&Math.sqrt(p*p)<m[f]&&(a=c(a,b[r],h+1,l),m=a[f]<m[f]?a:m);return m}var e=this,d=this.kdAxisArray[0],g=this.kdAxisArray[1],f=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(N);(function(a){var E=a.Axis,C=a.Chart,G=a.correctFloat,q=a.defined,f=a.destroyObjectProperties,
k=a.each,t=a.format,m=a.objectEach,v=a.pick,u=a.Series;a.StackItem=function(a,g,f,c,e){var d=a.chart.inverted;this.axis=a;this.isNegative=f;this.options=g;this.x=c;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:g.align||(d?f?"left":"right":"center"),verticalAlign:g.verticalAlign||(d?"middle":f?"bottom":"top"),y:v(g.y,d?4:f?14:-6),x:v(g.x,d?f?-6:6:0)};this.textAlign=g.textAlign||(d?f?"right":"left":"center")};a.StackItem.prototype={destroy:function(){f(this,
this.axis)},render:function(a){var d=this.options,f=d.format,f=f?t(f,this):d.formatter.call(this);this.label?this.label.attr({text:f,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(f,null,null,d.useHTML).css(d.style).attr({align:this.textAlign,rotation:d.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,g){var d=this.axis,c=d.chart,e=d.translate(d.usePercentage?100:this.total,0,0,0,1),d=d.translate(0),d=Math.abs(e-d);a=c.xAxis[0].translate(this.x)+a;e=this.getStackBox(c,this,
a,e,g,d);if(g=this.label)g.align(this.alignOptions,null,e),e=g.alignAttr,g[!1===this.options.crop||c.isInsidePlot(e.x,e.y)?"show":"hide"](!0)},getStackBox:function(a,g,f,c,e,l){var b=g.axis.reversed,d=a.inverted;a=a.plotHeight;g=g.isNegative&&!b||!g.isNegative&&b;return{x:d?g?c:c-l:f,y:d?a-f-e:g?a-c-l:a-c,width:d?l:e,height:d?e:l}}};C.prototype.getStacks=function(){var a=this;k(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});k(a.series,function(d){!d.options.stacking||!0!==
d.visible&&!1!==a.options.chart.ignoreHiddenSeries||(d.stackKey=d.type+v(d.options.stack,""))})};E.prototype.buildStacks=function(){var a=this.series,g=v(this.options.reversedStacks,!0),f=a.length,c;if(!this.isXAxis){this.usePercentage=!1;for(c=f;c--;)a[g?c:f-c-1].setStackedPoints();for(c=0;c<f;c++)a[c].modifyStacks()}};E.prototype.renderStackTotals=function(){var a=this.chart,g=a.renderer,f=this.stacks,c=this.stackTotalGroup;c||(this.stackTotalGroup=c=g.g("stack-labels").attr({visibility:"visible",
zIndex:6}).add());c.translate(a.plotLeft,a.plotTop);m(f,function(a){m(a,function(a){a.render(c)})})};E.prototype.resetStacks=function(){var a=this,g=a.stacks;a.isXAxis||m(g,function(d){m(d,function(c,e){c.touched<a.stacksTouched?(c.destroy(),delete d[e]):(c.total=null,c.cum=null)})})};E.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),m(a,function(a){m(a,function(a){a.cum=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&
(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var d=this.processedXData,g=this.processedYData,f=[],c=g.length,e=this.options,l=e.threshold,b=e.startFromThreshold?l:0,k=e.stack,e=e.stacking,m=this.stackKey,t="-"+m,r=this.negStacks,u=this.yAxis,w=u.stacks,D=u.oldStacks,M,p,B,H,F,h,x;u.stacksTouched+=1;for(F=0;F<c;F++)h=d[F],x=g[F],M=this.getStackIndicator(M,h,this.index),H=M.key,B=(p=r&&x<(b?0:l))?t:m,w[B]||(w[B]={}),w[B][h]||(D[B]&&D[B][h]?(w[B][h]=D[B][h],w[B][h].total=null):
w[B][h]=new a.StackItem(u,u.options.stackLabels,p,h,k)),B=w[B][h],null!==x&&(B.points[H]=B.points[this.index]=[v(B.cum,b)],q(B.cum)||(B.base=H),B.touched=u.stacksTouched,0<M.index&&!1===this.singleStacks&&(B.points[H][0]=B.points[this.index+","+h+",0"][0])),"percent"===e?(p=p?m:t,r&&w[p]&&w[p][h]?(p=w[p][h],B.total=p.total=Math.max(p.total,B.total)+Math.abs(x)||0):B.total=G(B.total+(Math.abs(x)||0))):B.total=G(B.total+(x||0)),B.cum=v(B.cum,b)+(x||0),null!==x&&(B.points[H].push(B.cum),f[F]=B.cum);
"percent"===e&&(u.usePercentage=!0);this.stackedYData=f;u.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,g=a.stackKey,f=a.yAxis.stacks,c=a.processedXData,e,l=a.options.stacking;a[l+"Stacker"]&&k([g,"-"+g],function(b){for(var d=c.length,g,k;d--;)if(g=c[d],e=a.getStackIndicator(e,g,a.index,b),k=(g=f[b]&&f[b][g])&&g.points[e.key])a[l+"Stacker"](k,g,d)})};u.prototype.percentStacker=function(a,g,f){g=g.total?100/g.total:0;a[0]=G(a[0]*g);a[1]=G(a[1]*g);this.stackedYData[f]=a[1]};u.prototype.getStackIndicator=
function(a,g,f,c){!q(a)||a.x!==g||c&&a.key!==c?a={x:g,index:0,key:c}:a.index++;a.key=[f,g,a.index].join();return a}})(N);(function(a){var E=a.addEvent,C=a.animate,G=a.Axis,q=a.createElement,f=a.css,k=a.defined,t=a.each,m=a.erase,v=a.extend,u=a.fireEvent,d=a.inArray,g=a.isNumber,n=a.isObject,c=a.isArray,e=a.merge,l=a.objectEach,b=a.pick,z=a.Point,A=a.Series,I=a.seriesTypes,r=a.setAnimation,J=a.splat;v(a.Chart.prototype,{addSeries:function(a,c,e){var d,g=this;a&&(c=b(c,!0),u(g,"addSeries",{options:a},
function(){d=g.initSeries(a);g.isDirtyLegend=!0;g.linkSeries();c&&g.redraw(e)}));return d},addAxis:function(a,c,d,g){var f=c?"xAxis":"yAxis",l=this.options;a=e(a,{index:this[f].length,isX:c});c=new G(this,a);l[f]=J(l[f]||{});l[f].push(a);b(d,!0)&&this.redraw(g);return c},showLoading:function(a){var b=this,c=b.options,e=b.loadingDiv,d=c.loading,g=function(){e&&f(e,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};e||(b.loadingDiv=e=q("div",{className:"highcharts-loading highcharts-loading-hidden"},
null,b.container),b.loadingSpan=q("span",{className:"highcharts-loading-inner"},null,e),E(b,"redraw",g));e.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;f(e,v(d.style,{zIndex:10}));f(b.loadingSpan,d.labelStyle);b.loadingShown||(f(e,{opacity:0,display:""}),C(e,{opacity:d.style.opacity||.5},{duration:d.showDuration||0}));b.loadingShown=!0;g()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",C(b,{opacity:0},
{duration:a.loading.hideDuration||100,complete:function(){f(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
update:function(a,c,f){var p=this,n={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},r=a.chart,m,h,w=[];if(r){e(!0,p.options.chart,r);"className"in r&&p.setClassName(r.className);if("inverted"in r||"polar"in r)p.propFromSeries(),m=!0;"alignTicks"in r&&(m=!0);l(r,function(a,b){-1!==d("chart."+b,p.propsRequireUpdateSeries)&&(h=!0);-1!==d(b,p.propsRequireDirtyBox)&&(p.isDirtyBox=!0)});"style"in r&&p.renderer.setStyle(r.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&e(!0,
this.options.plotOptions,a.plotOptions);l(a,function(a,b){if(p[b]&&"function"===typeof p[b].update)p[b].update(a,!1);else if("function"===typeof p[n[b]])p[n[b]](a);"chart"!==b&&-1!==d(b,p.propsRequireUpdateSeries)&&(h=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(t(J(a[b]),function(a,c){(c=k(a.id)&&p.get(a.id)||p[b][c])&&c.coll===b&&(c.update(a,!1),f&&(c.touched=!0));if(!c&&f)if("series"===b)p.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)p.addAxis(a,
"xAxis"===b,!1).touched=!0}),f&&t(p[b],function(a){a.touched?delete a.touched:w.push(a)}))});t(w,function(a){a.remove(!1)});m&&t(p.axes,function(a){a.update({},!1)});h&&t(p.series,function(a){a.update({},!1)});a.loading&&e(!0,p.options.loading,a.loading);m=r&&r.width;r=r&&r.height;g(m)&&m!==p.chartWidth||g(r)&&r!==p.chartHeight?p.setSize(m,r):b(c,!0)&&p.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});v(z.prototype,{update:function(a,c,e,d){function g(){f.applyOptions(a);null===f.y&&h&&
(f.graphic=h.destroy());n(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(f.graphic=h.destroy()),a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()),f.connector&&(f.connector=f.connector.destroy()));p=f.index;l.updateParallelArrays(f,p);r.data[p]=n(r.data[p],!0)||n(a,!0)?f.options:a;l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(k.isDirtyBox=!0);"point"===r.legendType&&(k.isDirtyLegend=!0);c&&k.redraw(e)}var f=this,l=f.series,h=f.graphic,p,k=l.chart,r=l.options;
c=b(c,!0);!1===d?g():f.firePointEvent("update",{options:a},g)},remove:function(a,b){this.series.removePoint(d(this,this.series.data),a,b)}});v(A.prototype,{addPoint:function(a,c,e,d){var g=this.options,f=this.data,l=this.chart,h=this.xAxis,h=h&&h.hasNames&&h.names,p=g.data,k,r,n=this.xData,m,w;c=b(c,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);w=k.x;m=n.length;if(this.requireSorting&&w<n[m-1])for(r=!0;m&&n[m-1]>w;)m--;this.updateParallelArrays(k,"splice",m,0,0);this.updateParallelArrays(k,
m);h&&k.name&&(h[w]=k.name);p.splice(m,0,a);r&&(this.data.splice(m,0,null),this.processData());"point"===g.legendType&&this.generatePoints();e&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(k,"shift"),p.shift()));this.isDirtyData=this.isDirty=!0;c&&l.redraw(d)},removePoint:function(a,c,e){var d=this,g=d.data,f=g[a],l=d.points,h=d.chart,k=function(){l&&l.length===g.length&&l.splice(a,1);g.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",
a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;c&&h.redraw()};r(e,h);c=b(c,!0);f?f.firePointEvent("remove",null,k):k()},remove:function(a,c,e){function d(){g.destroy();f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();b(a,!0)&&f.redraw(c)}var g=this,f=g.chart;!1!==e?u(g,"remove",null,d):d()},update:function(a,c){var d=this,g=d.chart,f=d.userOptions,l=d.oldType||d.type,k=a.type||f.type||g.options.chart.type,h=I[l].prototype,r,n=["group","markerGroup","dataLabelsGroup"],m=["navigatorSeries","baseSeries"],
w=d.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,c);if(k&&k!==l||void 0!==a.zIndex)n.length=0;d.options.isInternal&&(m.length=0);m=n.concat(m);t(m,function(a){m[a]=d[a];delete d[a]});a=e(f,w,{index:d.index,pointStart:d.xData[0]},{data:d.options.data},a);d.remove(!1,null,!1);for(r in h)d[r]=void 0;v(d,I[k||l].prototype);t(m,function(a){d[a]=m[a]});d.init(g,a);d.oldType=l;g.linkSeries();b(c,!0)&&g.redraw(!1)}});v(G.prototype,{update:function(a,
c){var d=this.chart;a=d.options[this.coll][this.options.index]=e(this.userOptions,a);this.destroy(!0);this.init(d,v(a,{events:void 0}));d.isDirtyBox=!0;b(c,!0)&&d.redraw()},remove:function(a){for(var e=this.chart,d=this.coll,g=this.series,f=g.length;f--;)g[f]&&g[f].remove(!1);m(e.axes,this);m(e[d],this);c(e.options[d])?e.options[d].splice(this.options.index,1):delete e.options[d];t(e[d],function(a,b){a.options.index=b});this.destroy();e.isDirtyBox=!0;b(a,!0)&&e.redraw()},setTitle:function(a,b){this.update({title:a},
b)},setCategories:function(a,b){this.update({categories:a},b)}})})(N);(function(a){var E=a.color,C=a.each,G=a.map,q=a.pick,f=a.Series,k=a.seriesType;k("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(f){var k=[],t=[],u=this.xAxis,d=this.yAxis,g=d.stacks[this.stackKey],n={},c=this.index,e=d.series,l=e.length,b,z=q(d.options.reversedStacks,!0)?1:-1,A;f=f||this.points;if(this.options.stacking){for(A=0;A<f.length;A++)n[f[A].x]=f[A];a.objectEach(g,function(a,b){null!==
a.total&&t.push(b)});t.sort(function(a,b){return a-b});b=G(e,function(){return this.visible});C(t,function(a,e){var f=0,r,m;if(n[a]&&!n[a].isNull)k.push(n[a]),C([-1,1],function(d){var f=1===d?"rightNull":"leftNull",k=0,w=g[t[e+d]];if(w)for(A=c;0<=A&&A<l;)r=w.points[A],r||(A===c?n[a][f]=!0:b[A]&&(m=g[a].points[A])&&(k-=m[1]-m[0])),A+=z;n[a][1===d?"rightCliff":"leftCliff"]=k});else{for(A=c;0<=A&&A<l;){if(r=g[a].points[A]){f=r[1];break}A+=z}f=d.translate(f,0,1,0,1);k.push({isNull:!0,plotX:u.translate(a,
0,0,0,1),x:a,plotY:f,yBottom:f})}})}return k},getGraphPath:function(a){var k=f.prototype.getGraphPath,t=this.options,u=t.stacking,d=this.yAxis,g,n,c=[],e=[],l=this.index,b,z=d.stacks[this.stackKey],A=t.threshold,I=d.getThreshold(t.threshold),r,t=t.connectNulls||"percent"===u,J=function(g,f,k){var r=a[g];g=u&&z[r.x].points[l];var n=r[k+"Null"]||0;k=r[k+"Cliff"]||0;var m,q,r=!0;k||n?(m=(n?g[0]:g[1])+k,q=g[0]+k,r=!!n):!u&&a[f]&&a[f].isNull&&(m=q=A);void 0!==m&&(e.push({plotX:b,plotY:null===m?I:d.getThreshold(m),
isNull:r,isCliff:!0}),c.push({plotX:b,plotY:null===q?I:d.getThreshold(q),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints(a));for(g=0;g<a.length;g++)if(n=a[g].isNull,b=q(a[g].rectPlotX,a[g].plotX),r=q(a[g].yBottom,I),!n||t)t||J(g,g-1,"left"),n&&!u&&t||(e.push(a[g]),c.push({x:g,plotX:b,plotY:r})),t||J(g,g+1,"right");g=k.call(this,e,!0,!0);c.reversed=!0;n=k.call(this,c,!0,!0);n.length&&(n[0]="L");n=g.concat(n);k=k.call(this,e,!1,t);n.xMap=g.xMap;this.areaPath=n;return k},drawGraph:function(){this.areaPath=
[];f.prototype.drawGraph.apply(this);var a=this,k=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];C(this.zones,function(d,g){u.push(["zone-area-"+g,"highcharts-area highcharts-zone-area-"+g+" "+d.className,d.color||a.color,d.fillColor||v.fillColor])});C(u,function(d){var g=d[0],f=a[g];f?(f.endX=k.xMap,f.animate({d:k})):(f=a[g]=a.chart.renderer.path(k).addClass(d[1]).attr({fill:q(d[3],E(d[2]).setOpacity(q(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),f.isArea=
!0);f.startX=k.xMap;f.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(N);(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,q){var f=G.plotX,k=G.plotY,t=a[q-1];q=a[q+1];var m,v,u,d;if(t&&!t.isNull&&!1!==t.doCurve&&!G.isCliff&&q&&!q.isNull&&!1!==q.doCurve&&!G.isCliff){a=t.plotY;u=q.plotX;q=q.plotY;var g=0;m=(1.5*f+t.plotX)/2.5;v=(1.5*k+a)/2.5;u=(1.5*f+u)/2.5;d=(1.5*k+q)/2.5;u!==m&&(g=(d-v)*(u-f)/(u-m)+k-d);v+=g;d+=g;v>a&&v>k?(v=
Math.max(a,k),d=2*k-v):v<a&&v<k&&(v=Math.min(a,k),d=2*k-v);d>q&&d>k?(d=Math.max(q,k),v=2*k-d):d<q&&d<k&&(d=Math.min(q,k),v=2*k-d);G.rightContX=u;G.rightContY=d}G=["C",E(t.rightContX,t.plotX),E(t.rightContY,t.plotY),E(m,f),E(v,k),f,k];t.rightContX=t.rightContY=null;return G}})})(N);(function(a){var E=a.seriesTypes.area.prototype,C=a.seriesType;C("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,getGraphPath:E.getGraphPath,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(N);
(function(a){var E=a.animObject,C=a.color,G=a.each,q=a.extend,f=a.isNumber,k=a.merge,t=a.pick,m=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,
borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){m.prototype.init.apply(this,arguments);var a=this,g=a.chart;g.hasRendered&&G(g.series,function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=this,g=a.options,f=a.xAxis,c=a.yAxis,e=f.reversed,l,b={},k=0;!1===g.grouping?k=1:G(a.chart.series,function(e){var d=e.options,g=e.yAxis,f;e.type!==a.type||!e.visible&&a.chart.options.chart.ignoreHiddenSeries||
c.len!==g.len||c.pos!==g.pos||(d.stacking?(l=e.stackKey,void 0===b[l]&&(b[l]=k++),f=b[l]):!1!==d.grouping&&(f=k++),e.columnIndex=f)});var m=Math.min(Math.abs(f.transA)*(f.ordinalSlope||g.pointRange||f.closestPointRange||f.tickInterval||1),f.len),q=m*g.groupPadding,r=(m-2*q)/(k||1),g=Math.min(g.maxPointWidth||f.len,t(g.pointWidth,r*(1-2*g.pointPadding)));a.columnMetrics={width:g,offset:(r-g)/2+(q+((a.columnIndex||0)+(e?1:0))*r-m/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,g,f,c){var e=
this.chart,d=this.borderWidth,b=-(d%2?.5:0),d=d%2?.5:1;e.inverted&&e.renderer.isVML&&(d+=1);this.options.crisp&&(f=Math.round(a+f)+b,a=Math.round(a)+b,f-=a);c=Math.round(g+c)+d;b=.5>=Math.abs(g)&&.5<c;g=Math.round(g)+d;c-=g;b&&c&&(--g,c+=1);return{x:a,y:g,width:f,height:c}},translate:function(){var a=this,g=a.chart,f=a.options,c=a.dense=2>a.closestPointRange*a.xAxis.transA,c=a.borderWidth=t(f.borderWidth,c?0:1),e=a.yAxis,l=a.translatedThreshold=e.getThreshold(f.threshold),b=t(f.minPointLength,5),
k=a.getColumnMetrics(),q=k.width,u=a.barW=Math.max(q,1+2*c),r=a.pointXOffset=k.offset;g.inverted&&(l-=.5);f.pointPadding&&(u=Math.ceil(u));m.prototype.translate.apply(a);G(a.points,function(c){var d=t(c.yBottom,l),f=999+Math.abs(d),f=Math.min(Math.max(-f,c.plotY),e.len+f),k=c.plotX+r,p=u,n=Math.min(f,d),m,z=Math.max(f,d)-n;b&&Math.abs(z)<b&&(z=b,m=!e.reversed&&!c.negative||e.reversed&&c.negative,0===c.y&&0>=a.dataMax&&(m=!m),n=Math.abs(n-l)>b?d-b:l-(m?b:0));c.barX=k;c.pointWidth=q;c.tooltipPos=g.inverted?
[e.len+e.pos-g.plotLeft-f,a.xAxis.len-k-p/2,z]:[k+p/2,f+e.pos-g.plotTop,z];c.shapeType="rect";c.shapeArgs=a.crispCol.apply(a,c.isNull?[k,l,p,0]:[k,n,p,z])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,g){var d=this.options,c,e=this.pointAttrToOptions||{};c=e.stroke||"borderColor";var f=e["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a&&a[c]||d[c]||
this.color||b,q=a&&a[f]||d[f]||this[f]||0,e=d.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);g&&(a=k(d.states[g],a.options.states&&a.options.states[g]||{}),g=a.brightness,b=a.color||void 0!==g&&C(b).brighten(a.brightness).get()||b,m=a[c]||m,q=a[f]||q,e=a.dashStyle||e);c={fill:b,stroke:m,"stroke-width":q};e&&(c.dashstyle=e);return c},drawPoints:function(){var a=this,g=this.chart,m=a.options,c=g.renderer,e=m.animationLimit||250,l;G(a.points,function(b){var d=
b.graphic;if(f(b.plotY)&&null!==b.y){l=b.shapeArgs;if(d)d[g.pointCount<e?"animate":"attr"](k(l));else b.graphic=d=c[b.shapeType](l).add(b.group||a.group);m.borderRadius&&d.attr({r:m.borderRadius});d.attr(a.pointAttribs(b,b.selected&&"select")).shadow(m.shadow,null,m.stacking&&!m.borderRadius);d.addClass(b.getClassName(),!0)}else d&&(b.graphic=d.destroy())})},animate:function(a){var d=this,f=this.yAxis,c=d.options,e=this.chart.inverted,l={},b=e?"translateX":"translateY",k;u&&(a?(l.scaleY=.001,a=Math.min(f.pos+
f.len,Math.max(f.pos,f.toPixels(c.threshold))),e?l.translateX=a-f.len:l.translateY=a,d.group.attr(l)):(k=d.group.attr(b),d.group.animate({scaleY:1},q(E(d.options.animation),{step:function(a,c){l[b]=k+c.pos*(f.pos-k);d.group.attr(l)}})),d.animate=null))},remove:function(){var a=this,f=a.chart;f.hasRendered&&G(f.series,function(d){d.type===a.type&&(d.isDirty=!0)});m.prototype.remove.apply(a,arguments)}})})(N);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(N);(function(a){var E=a.Series;
a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&
E.prototype.drawGraph.call(this)}})})(N);(function(a){var E=a.deg2rad,C=a.isNumber,G=a.pick,q=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,k=this.chart,t=2*(a.slicedOffset||0),m=k.plotWidth-2*t,k=k.plotHeight-2*t,v=a.center,v=[G(v[0],"50%"),G(v[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(m,k),d,g;for(d=0;4>d;++d)g=v[d],a=2>d||2===d&&/%$/.test(g),v[d]=q(g,[m,k,u,v[2]][d])+(a?t:0);v[3]>v[2]&&(v[3]=v[2]);return v},getStartAndEndRadians:function(a,k){a=C(a)?
a:0;k=C(k)&&k>a&&360>k-a?k:a+360;return{start:E*(a+-90),end:E*(k+-90)}}}})(N);(function(a){var E=a.addEvent,C=a.CenteredSeriesMixin,G=a.defined,q=a.each,f=a.extend,k=C.getStartAndEndRadians,t=a.inArray,m=a.noop,v=a.pick,u=a.Point,d=a.Series,g=a.seriesType,n=a.setAnimation;g("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,
showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,d=c.points,b=c.startAngleRad;a||(q(d,function(a){var e=a.graphic,d=a.shapeArgs;e&&(e.attr({r:a.startR||c.center[3]/2,start:b,end:b}),e.animate({r:d.r,
start:d.start,end:d.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,e=0,d=this.points,b=d.length,f,g=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)f=d[a],e+=g&&!f.visible?0:f.isNull?0:f.y;this.total=e;for(a=0;a<b;a++)f=d[a],f.percentage=0<e&&(f.visible||!g)?f.y/e*100:0,f.total=e},generatePoints:function(){d.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var c=0,d=this.options,b=d.slicedOffset,f=b+(d.borderWidth||0),
g,m,r,n=k(d.startAngle,d.endAngle),q=this.startAngleRad=n.start,n=(this.endAngleRad=n.end)-q,t=this.points,u,p=d.dataLabels.distance,d=d.ignoreHiddenPoint,B,H=t.length,F;a||(this.center=a=this.getCenter());this.getX=function(b,c,e){r=Math.asin(Math.min((b-a[1])/(a[2]/2+e.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(r)*(a[2]/2+e.labelDistance)};for(B=0;B<H;B++){F=t[B];F.labelDistance=v(F.options.dataLabels&&F.options.dataLabels.distance,p);this.maxLabelDistance=Math.max(this.maxLabelDistance||
0,F.labelDistance);g=q+c*n;if(!d||F.visible)c+=F.percentage/100;m=q+c*n;F.shapeType="arc";F.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*g)/1E3,end:Math.round(1E3*m)/1E3};r=(m+g)/2;r>1.5*Math.PI?r-=2*Math.PI:r<-Math.PI/2&&(r+=2*Math.PI);F.slicedTranslation={translateX:Math.round(Math.cos(r)*b),translateY:Math.round(Math.sin(r)*b)};m=Math.cos(r)*a[2]/2;u=Math.sin(r)*a[2]/2;F.tooltipPos=[a[0]+.7*m,a[1]+.7*u];F.half=r<-Math.PI/2||r>Math.PI/2?1:0;F.angle=r;g=Math.min(f,F.labelDistance/
5);F.labelPos=[a[0]+m+Math.cos(r)*F.labelDistance,a[1]+u+Math.sin(r)*F.labelDistance,a[0]+m+Math.cos(r)*g,a[1]+u+Math.sin(r)*g,a[0]+m,a[1]+u,0>F.labelDistance?"center":F.half?"right":"left",r]}},drawGraph:null,drawPoints:function(){var a=this,e=a.chart.renderer,d,b,g,k,m=a.options.shadow;m&&!a.shadowGroup&&(a.shadowGroup=e.g("shadow").add(a.group));q(a.points,function(c){b=c.graphic;if(c.isNull)b&&(c.graphic=b.destroy());else{k=c.shapeArgs;d=c.getTranslate();var l=c.shadowGroup;m&&!l&&(l=c.shadowGroup=
e.g("shadow").add(a.shadowGroup));l&&l.attr(d);g=a.pointAttribs(c,c.selected&&"select");b?b.setRadialReference(a.center).attr(g).animate(f(k,d)):(c.graphic=b=e[c.shapeType](k).setRadialReference(a.center).attr(d).add(a.group),c.visible||b.attr({visibility:"hidden"}),b.attr(g).attr({"stroke-linejoin":"round"}).shadow(m,l));b.addClass(c.getClassName())}})},searchPoint:m,sortByAngle:function(a,e){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,
getCenter:C.getCenter,getSymbol:m},{init:function(){u.prototype.init.apply(this,arguments);var a=this,e;a.name=v(a.name,"Slice");e=function(c){a.slice("select"===c.type)};E(a,"select",e);E(a,"unselect",e);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,e){var c=this,b=c.series,d=b.chart,f=b.options.ignoreHiddenPoint;e=v(e,f);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,b.options.data[t(c,b.data)]=c.options,q(["graphic","dataLabel",
"connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&d.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),f&&(b.isDirty=!0),e&&d.redraw())},slice:function(a,e,d){var b=this.series;n(d,b.chart);v(e,!0);this.sliced=this.options.sliced=G(a)?a:!this.sliced;b.options.data[t(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:
{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r,start:c.start,end:c.end})}})})(N);(function(a){var E=a.addEvent,C=a.arrayMax,G=a.defined,q=a.each,f=a.extend,k=a.format,t=a.map,m=a.merge,v=a.noop,u=a.pick,d=a.relativeLength,g=a.Series,n=a.seriesTypes,c=a.stableSort;a.distribute=function(a,d){function b(a,b){return a.target-b.target}var e,f=!0,g=a,k=[],l;l=
0;for(e=a.length;e--;)l+=a[e].size;if(l>d){c(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(l=e=0;l<=d;)l+=a[e].size,e++;k=a.splice(e-1,a.length)}c(a,b);for(a=t(a,function(a){return{size:a.size,targets:[a.target]}});f;){for(e=a.length;e--;)f=a[e],l=(Math.min.apply(0,f.targets)+Math.max.apply(0,f.targets))/2,f.pos=Math.min(Math.max(0,l-f.size/2),d-f.size);e=a.length;for(f=!1;e--;)0<e&&a[e-1].pos+a[e-1].size>a[e].pos&&(a[e-1].size+=a[e].size,a[e-1].targets=a[e-1].targets.concat(a[e].targets),a[e-
1].pos+a[e-1].size>d&&(a[e-1].pos=d-a[e-1].size),a.splice(e,1),f=!0)}e=0;q(a,function(a){var b=0;q(a.targets,function(){g[e].pos=a.pos+b;b+=g[e].size;e++})});g.push.apply(g,k);c(g,b)};g.prototype.drawDataLabels=function(){var c=this,d=c.options,b=d.dataLabels,f=c.points,g,n,r=c.hasRendered||0,t,w,v=u(b.defer,!!d.animation),C=c.chart.renderer;if(b.enabled||c._hasPointLabels)c.dlProcessOptions&&c.dlProcessOptions(b),w=c.plotGroup("dataLabelsGroup","data-labels",v&&!r?"hidden":"visible",b.zIndex||6),
v&&(w.attr({opacity:+r}),r||E(c,"afterAnimate",function(){c.visible&&w.show(!0);w[d.animation?"animate":"attr"]({opacity:1},{duration:200})})),n=b,q(f,function(e){var f,l=e.dataLabel,r,h,p=e.connector,q=!l,v;g=e.dlOptions||e.options&&e.options.dataLabels;if(f=u(g&&g.enabled,n.enabled)&&!e.isNull)b=m(n,g),r=e.getLabelConfig(),v=b[e.formatPrefix+"Format"]||b.format,t=G(v)?k(v,r):(b[e.formatPrefix+"Formatter"]||b.formatter).call(r,b),v=b.style,r=b.rotation,v.color=u(b.color,v.color,c.color,"#000000"),
"contrast"===v.color&&(e.contrastColor=C.getContrast(e.color||c.color),v.color=b.inside||0>u(e.labelDistance,b.distance)||d.stacking?e.contrastColor:"#000000"),d.cursor&&(v.cursor=d.cursor),h={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:r,padding:b.padding,zIndex:1},a.objectEach(h,function(a,b){void 0===a&&delete h[b]});!l||f&&G(t)?f&&G(t)&&(l?h.text=t:(l=e.dataLabel=C[r?"text":"label"](t,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),
l.addClass("highcharts-data-label-color-"+e.colorIndex+" "+(b.className||"")+(b.useHTML?"highcharts-tracker":""))),l.attr(h),l.css(v).shadow(b.shadow),l.added||l.add(w),c.alignDataLabel(e,l,b,null,q)):(e.dataLabel=l=l.destroy(),p&&(e.connector=p.destroy()))})};g.prototype.alignDataLabel=function(a,c,b,d,g){var e=this.chart,k=e.inverted,l=u(a.plotX,-9999),m=u(a.plotY,-9999),n=c.getBBox(),q,p=b.rotation,t=b.align,v=this.visible&&(a.series.forceDL||e.isInsidePlot(l,Math.round(m),k)||d&&e.isInsidePlot(l,
k?d.x+1:d.y+d.height-1,k)),z="justify"===u(b.overflow,"justify");if(v&&(q=b.style.fontSize,q=e.renderer.fontMetrics(q,c).b,d=f({x:k?this.yAxis.len-m:l,y:Math.round(k?this.xAxis.len-l:m),width:0,height:0},d),f(b,{width:n.width,height:n.height}),p?(z=!1,l=e.renderer.rotCorr(q,p),l={x:d.x+b.x+d.width/2+l.x,y:d.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*d.height},c[g?"attr":"animate"](l).attr({align:t}),m=(p+720)%360,m=180<m&&360>m,"left"===t?l.y-=m?n.height:0:"center"===t?(l.x-=n.width/2,l.y-=
n.height/2):"right"===t&&(l.x-=n.width,l.y-=m?0:n.height)):(c.align(b,null,d),l=c.alignAttr),z?a.isLabelJustified=this.justifyDataLabel(c,b,l,n,d,g):u(b.crop,!0)&&(v=e.isInsidePlot(l.x,l.y)&&e.isInsidePlot(l.x+n.width,l.y+n.height)),b.shape&&!p))c[g?"attr":"animate"]({anchorX:k?e.plotWidth-a.plotY:a.plotX,anchorY:k?e.plotHeight-a.plotX:a.plotY});v||(c.attr({y:-9999}),c.placed=!1)};g.prototype.justifyDataLabel=function(a,c,b,d,f,g){var e=this.chart,k=c.align,l=c.verticalAlign,m,n,p=a.box?0:a.padding||
0;m=b.x+p;0>m&&("right"===k?c.align="left":c.x=-m,n=!0);m=b.x+d.width-p;m>e.plotWidth&&("left"===k?c.align="right":c.x=e.plotWidth-m,n=!0);m=b.y+p;0>m&&("bottom"===l?c.verticalAlign="top":c.y=-m,n=!0);m=b.y+d.height-p;m>e.plotHeight&&("top"===l?c.verticalAlign="bottom":c.y=e.plotHeight-m,n=!0);n&&(a.placed=!g,a.align(c,null,f));return n};n.pie&&(n.pie.prototype.drawDataLabels=function(){var c=this,d=c.data,b,f=c.chart,k=c.options.dataLabels,m=u(k.connectorPadding,10),r=u(k.connectorWidth,1),n=f.plotWidth,
w=f.plotHeight,t,v=c.center,p=v[2]/2,B=v[1],E,F,h,x,N=[[],[]],K,P,L,Q,y=[0,0,0,0];c.visible&&(k.enabled||c._hasPointLabels)&&(q(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),g.prototype.drawDataLabels.apply(c),q(d,function(a){a.dataLabel&&a.visible&&(N[a.half].push(a),a.dataLabel._pos=null)}),q(N,function(e,d){var g,l,r=e.length,t=[],D;if(r)for(c.sortByAngle(e,d-.5),0<c.maxLabelDistance&&
(g=Math.max(0,B-p-c.maxLabelDistance),l=Math.min(B+p+c.maxLabelDistance,f.plotHeight),q(e,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,B-p-a.labelDistance),a.bottom=Math.min(B+p+a.labelDistance,f.plotHeight),D=a.dataLabel.getBBox().height||21,a.positionsIndex=t.push({target:a.labelPos[1]-a.top+D/2,size:D,rank:a.y})-1)}),a.distribute(t,l+D-g)),Q=0;Q<r;Q++)b=e[Q],l=b.positionsIndex,h=b.labelPos,E=b.dataLabel,L=!1===b.visible?"hidden":"inherit",P=g=h[1],t&&G(t[l])&&(void 0===t[l].pos?
L="hidden":(x=t[l].size,P=b.top+t[l].pos)),delete b.positionIndex,K=k.justify?v[0]+(d?-1:1)*(p+b.labelDistance):c.getX(P<b.top+2||P>b.bottom-2?g:P,d,b),E._attr={visibility:L,align:h[6]},E._pos={x:K+k.x+({left:m,right:-m}[h[6]]||0),y:P+k.y-10},h.x=K,h.y=P,u(k.crop,!0)&&(F=E.getBBox().width,g=null,K-F<m?(g=Math.round(F-K+m),y[3]=Math.max(g,y[3])):K+F>n-m&&(g=Math.round(K+F-n+m),y[1]=Math.max(g,y[1])),0>P-x/2?y[0]=Math.max(Math.round(-P+x/2),y[0]):P+x/2>w&&(y[2]=Math.max(Math.round(P+x/2-w),y[2])),E.sideOverflow=
g)}),0===C(y)||this.verifyDataLabelOverflow(y))&&(this.placeDataLabels(),r&&q(this.points,function(a){var b;t=a.connector;if((E=a.dataLabel)&&E._pos&&a.visible&&0<a.labelDistance){L=E._attr.visibility;if(b=!t)a.connector=t=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),t.attr({"stroke-width":r,stroke:k.connectorColor||a.color||"#666666"});t[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});t.attr("visibility",L)}else t&&(a.connector=
t.destroy())}))},n.pie.prototype.connectorPath=function(a){var c=a.x,b=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",c+("left"===a[6]?5:-5),b,"C",c,b,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",c+("left"===a[6]?5:-5),b,"L",a[2],a[3],"L",a[4],a[5]]},n.pie.prototype.placeDataLabels=function(){q(this.points,function(a){var c=a.dataLabel;c&&a.visible&&((a=c._pos)?(c.sideOverflow&&(c._attr.width=c.getBBox().width-c.sideOverflow,c.css({width:c._attr.width+"px",textOverflow:"ellipsis"}),
c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](a),c.moved=!0):c&&c.attr({y:-9999}))},this)},n.pie.prototype.alignDataLabel=v,n.pie.prototype.verifyDataLabelOverflow=function(a){var c=this.center,b=this.options,e=b.center,f=b.minSize||80,g,k=null!==b.size;k||(null!==e[0]?g=Math.max(c[2]-Math.max(a[1],a[3]),f):(g=Math.max(c[2]-a[1]-a[3],f),c[0]+=(a[3]-a[1])/2),null!==e[1]?g=Math.max(Math.min(g,c[2]-Math.max(a[0],a[2])),f):(g=Math.max(Math.min(g,c[2]-a[0]-a[2]),f),c[1]+=(a[0]-a[2])/2),g<
c[2]?(c[2]=g,c[3]=Math.min(d(b.innerSize||0,g),g),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):k=!0);return k});n.column&&(n.column.prototype.alignDataLabel=function(a,c,b,d,f){var e=this.chart.inverted,k=a.series,l=a.dlBox||a.shapeArgs,n=u(a.below,a.plotY>u(this.translatedThreshold,k.yAxis.len)),q=u(b.inside,!!this.options.stacking);l&&(d=m(l),0>d.y&&(d.height+=d.y,d.y=0),l=d.y+d.height-k.yAxis.len,0<l&&(d.height-=l),e&&(d={x:k.yAxis.len-d.y-d.height,y:k.xAxis.len-d.x-d.width,width:d.height,
height:d.width}),q||(e?(d.x+=n?0:d.width,d.width=0):(d.y+=n?d.height:0,d.height=0)));b.align=u(b.align,!e||q?"center":n?"right":"left");b.verticalAlign=u(b.verticalAlign,e||q?"middle":n?"top":"bottom");g.prototype.alignDataLabel.call(this,a,c,b,d,f);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(N);(function(a){var E=a.Chart,C=a.each,G=a.objectEach,q=a.pick,f=a.addEvent;E.prototype.callbacks.push(function(a){f(a,"render",function(){var f=[];C(a.labelCollectors||
[],function(a){f=f.concat(a())});C(a.yAxis||[],function(a){a.options.stackLabels&&!a.options.stackLabels.allowOverlap&&G(a.stacks,function(a){G(a,function(a){f.push(a.label)})})});C(a.series||[],function(a){var k=a.options.dataLabels,m=a.dataLabelCollections||["dataLabel"];(k.enabled||a._hasPointLabels)&&!k.allowOverlap&&a.visible&&C(m,function(d){C(a.points,function(a){a[d]&&(a[d].labelrank=q(a.labelrank,a.shapeArgs&&a.shapeArgs.height),f.push(a[d]))})})});a.hideOverlappingLabels(f)})});E.prototype.hideOverlappingLabels=
function(a){var f=a.length,k,q,u,d,g,n,c,e,l,b=function(a,b,c,d,e,f,g,k){return!(e>a+c||e+g<a||f>b+d||f+k<b)};for(q=0;q<f;q++)if(k=a[q])k.oldOpacity=k.opacity,k.newOpacity=1,k.width||(u=k.getBBox(),k.width=u.width,k.height=u.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(q=0;q<f;q++)for(u=a[q],k=q+1;k<f;++k)if(d=a[k],u&&d&&u!==d&&u.placed&&d.placed&&0!==u.newOpacity&&0!==d.newOpacity&&(g=u.alignAttr,n=d.alignAttr,c=u.parentGroup,e=d.parentGroup,l=2*(u.box?0:u.padding||
0),g=b(g.x+c.translateX,g.y+c.translateY,u.width-l,u.height-l,n.x+e.translateX,n.y+e.translateY,d.width-l,d.height-l)))(u.labelrank<d.labelrank?u:d).newOpacity=0;C(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(N);(function(a){var E=a.addEvent,C=a.Chart,G=a.createElement,q=a.css,f=a.defaultOptions,k=a.defaultPlotOptions,t=a.each,m=a.extend,v=a.fireEvent,
u=a.hasTouch,d=a.inArray,g=a.isObject,n=a.Legend,c=a.merge,e=a.pick,l=a.Point,b=a.Series,z=a.seriesTypes,A=a.svg,I;I=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",
c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(q).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,k=f.renderer,l=f.options.tooltip.snap,h=a.tracker,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},q="rgba(192,192,192,"+(A?.0001:.002)+")";if(e&&!c)for(m=e+1;m--;)"M"===d[m]&&d.splice(m+1,0,d[m+
1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===e)&&d.splice(m,0,"L",d[m-2]+l,d[m-1]);h?h.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:q,fill:c?q:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",n)}))}};z.column&&
(z.column.prototype.drawTracker=I.drawTrackerPoint);z.pie&&(z.pie.prototype.drawTracker=I.drawTrackerPoint);z.scatter&&(z.scatter.prototype.drawTracker=I.drawTrackerPoint);m(n.prototype,{setItemEvents:function(a,b,d){var e=this,f=e.chart.renderer.boxWrapper,g="highcharts-legend-"+(a.series?"point":"series")+"-active";(d?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(g);b.css(e.options.itemHoverStyle)}).on("mouseout",function(){b.css(c(a.visible?e.itemStyle:e.itemHiddenStyle));
f.removeClass(g);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});
f.legend.itemStyle.cursor="pointer";m(C.prototype,{showResetZoom:function(){var a=this,b=f.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,g="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,g)},zoomOut:function(){var a=this;v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,
c=this.pointer,d=!1,f;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom()}),c.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var e=a.axis;c[e.isXAxis?"zoomX":"zoomY"]&&(b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0))});f=this.resetZoomButton;d&&!f?this.showResetZoom():!d&&g(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(e(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:
[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(g-f,!0)+h,h=b.toValue(g+b.len-f,!0)-h,m=h<l,g=m?h:l,l=m?l:h,h=Math.min(k.dataMin,b.toValue(b.toPixels(k.min)-b.minPixelPadding)),m=Math.max(k.dataMax,b.toValue(b.toPixels(k.max)+b.minPixelPadding)),n;n=h-g;0<n&&(l+=n,g=h);n=l-m;0<n&&(l=m,g-=n);b.series.length&&g!==k.min&&l!==k.max&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),e=!0);
c[d]=f});e&&c.redraw(!1);q(c.container,{cursor:"move"})}});m(l.prototype,{select:function(a,b){var c=this,f=c.series,g=f.chart;a=e(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;f.options.data[d(c,f.data)]=c.options;c.setState(a&&"select");b||t(g.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,f.options.data[d(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=
this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,d=c(b.series.options.point,b.options).events;b.events=d;a.objectEach(d,function(a,c){E(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),
d=this.plotY,f=this.series,g=f.options.states[a]||{},l=k[f.type].marker&&f.options.marker,n=l&&!1===l.enabled,r=l&&l.states&&l.states[a]||{},h=!1===r.enabled,q=f.stateMarkerGraphic,t=this.marker||{},u=f.chart,v=f.halo,z,A=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(h||n&&!1===r.enabled)||a&&t.states&&t.states[a]&&!1===t.states[a].enabled)){A&&(z=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(f.pointAttribs(this,a),e(u.options.chart.animation,g.animation)),z&&this.graphic.animate(z,e(u.options.chart.animation,r.animation,l.animation)),q&&q.hide();else{if(a&&r){l=t.symbol||f.symbol;q&&q.currentSymbol!==l&&(q=q.destroy());if(q)q[b?"animate":"attr"]({x:z.x,y:z.y});else l&&(f.stateMarkerGraphic=q=u.renderer.symbol(l,z.x,z.y,z.width,z.height).add(f.markerGroup),q.currentSymbol=l);q&&q.attr(f.pointAttribs(this,
a))}q&&(q[a&&u.isInsidePlot(c,d,u.inverted)?"show":"hide"](),q.element.point=this)}(c=g.halo)&&c.size?(v||(f.halo=v=u.renderer.path().add((this.graphic||q).parentGroup)),v[b?"animate":"attr"]({d:this.haloPath(c.size)}),v.attr({"class":"highcharts-halo highcharts-color-"+e(this.colorIndex,f.colorIndex)}),v.point=this,v.attr(m({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):v&&v.point&&v.point.haloPath&&v.animate({d:v.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});m(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
c=b.options,d=b.graph,f=c.states,g=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(g=f[a].lineWidth||g+(f[a].lineWidthPlus||0)),d&&!d.dashstyle))for(g={"stroke-width":g},d.animate(g,e(b.chart.options.chart.animation,f[a]&&f[a].animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(g),c+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,
!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,f,{redraw:b})},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:I.drawTrackerGraph})})(N);(function(a){var E=a.Chart,C=a.each,G=a.inArray,q=a.isArray,f=a.isObject,k=a.pick,t=a.splat;E.prototype.setResponsive=function(f){var k=this.options.responsive,m=[],d=this.currentResponsive;
k&&k.rules&&C(k.rules,function(d){void 0===d._id&&(d._id=a.uniqueKey());this.matchResponsiveRule(d,m,f)},this);var g=a.merge.apply(0,a.map(m,function(d){return a.find(k.rules,function(a){return a._id===d}).chartOptions})),m=m.toString()||void 0;m!==(d&&d.ruleIds)&&(d&&this.update(d.undoOptions,f),m?(this.currentResponsive={ruleIds:m,mergedOptions:g,undoOptions:this.currentOptions(g)},this.update(g,f)):this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,f){var m=a.condition;
(m.callback||function(){return this.chartWidth<=k(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=k(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=k(m.minWidth,0)&&this.chartHeight>=k(m.minHeight,0)}).call(this)&&f.push(a._id)};E.prototype.currentOptions=function(k){function m(d,g,k,c){var e;a.objectEach(d,function(a,b){if(!c&&-1<G(b,["series","xAxis","yAxis"]))for(d[b]=t(d[b]),k[b]=[],e=0;e<d[b].length;e++)g[b][e]&&(k[b][e]={},m(a[e],g[b][e],k[b][e],c+1));else f(a)?(k[b]=q(a)?[]:{},m(a,g[b]||{},
k[b],c+1)):k[b]=g[b]||null})}var u={};m(k,this.options,u,0);return u}})(N);return N});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clone_js__ = __webpack_require__(94);
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
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
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
  /* istanbul ignore else */
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