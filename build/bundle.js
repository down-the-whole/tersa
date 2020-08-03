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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cli/index.ts":
/*!**************************!*\
  !*** ./src/cli/index.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ \"@babel/runtime/helpers/newArrowCheck\");\n/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yargs */ \"yargs\");\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chokidar */ \"chokidar\");\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chokidar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _compiler_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compiler/index.ts */ \"./src/compiler/index.ts\");\n\n\nvar _this = undefined;\n\nprocess.env.NODE_PATH = `${process.env.NODE_PATH}:${__dirname}/..`;\n\n__webpack_require__(/*! module */ \"module\").Module._initPaths();\n\n\n\n\n\n\nconst yargsOptions = {\n  srcDir: {\n    demandOption: true,\n    type: 'string'\n  },\n  destDir: {\n    demandOption: true,\n    type: 'string'\n  },\n  entrypoint: {\n    demandOption: true,\n    type: 'string,'\n  }\n};\nconst argv = yargs__WEBPACK_IMPORTED_MODULE_3___default.a.command('watch', 'build and watch for changes', yargsOptions).command('build', 'build from srcDir', yargsOptions).demandCommand().help().argv;\nconst src = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(argv.srcDir);\nconst dest = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(argv.destDir);\nlet childProc;\n\nconst sleep = function sleep(ms) {\n  var _this2 = this;\n\n  _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);\n\n  return new Promise(function (resolve) {\n    _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);\n\n    return setTimeout(resolve, ms);\n  }.bind(this));\n}.bind(undefined);\n\nconst start = function start() {\n  _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);\n\n  const process = Object(child_process__WEBPACK_IMPORTED_MODULE_2__[\"exec\"])(`node ${argv.entrypoint}`);\n  process.stderr.on('data', console.log);\n  process.stdin.on('data', console.log);\n  process.stdout.on('data', console.log);\n  return process;\n}.bind(undefined);\n\nconst build = async function build() {\n  _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);\n\n  console.log(`building ${src}`);\n  await Object(_compiler_index_ts__WEBPACK_IMPORTED_MODULE_5__[\"transform\"])(src, dest);\n  childProc = start();\n}.bind(undefined);\n\nconst watch = async function watch() {\n  var _this3 = this;\n\n  _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);\n\n  console.log(`watching & building ${src}`);\n  await build();\n  const watcher = chokidar__WEBPACK_IMPORTED_MODULE_4___default.a.watch(src, {\n    ignored: /(^|[\\/\\\\])\\../,\n    persistent: true\n  });\n  watcher.on('change', async function (path) {\n    _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this3);\n\n    await build();\n    childProc.kill('SIGINT');\n    await sleep(50);\n    childProc = start();\n  }.bind(this));\n}.bind(undefined);\n\nif (argv._[0] === 'build') {\n  build();\n} else if (argv._[0] === 'watch') {\n  watch();\n}\n\n//# sourceURL=webpack:///./src/cli/index.ts?");

/***/ }),

/***/ "./src/compiler/index.ts":
/*!*******************************!*\
  !*** ./src/compiler/index.ts ***!
  \*******************************/
/*! exports provided: transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transform\", function() { return transform; });\n/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ \"@babel/runtime/helpers/newArrowCheck\");\n/* harmony import */ var _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/core */ \"@babel/core\");\n/* harmony import */ var _babel_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recursive_readdir__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recursive-readdir */ \"recursive-readdir\");\n/* harmony import */ var recursive_readdir__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recursive_readdir__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n__webpack_require__(/*! @babel/preset-env */ \"@babel/preset-env\");\n\n__webpack_require__(/*! @babel/plugin-transform-runtime */ \"@babel/plugin-transform-runtime\");\n\n__webpack_require__(/*! @babel/plugin-syntax-dynamic-import */ \"@babel/plugin-syntax-dynamic-import\");\n\n__webpack_require__(/*! @babel/plugin-transform-arrow-functions */ \"@babel/plugin-transform-arrow-functions\");\n\n__webpack_require__(/*! @babel/plugin-transform-typescript */ \"@babel/plugin-transform-typescript\");\n\nconst fsExtra = fs_extra__WEBPACK_IMPORTED_MODULE_2___default.a;\nconst fileMatch = /(.ts|.js|.mjs)$/;\nconst cwd = process.cwd();\nconst recursiveAsync = Object(util__WEBPACK_IMPORTED_MODULE_3__[\"promisify\"])(recursive_readdir__WEBPACK_IMPORTED_MODULE_6___default.a);\nconst readFileAsync = Object(util__WEBPACK_IMPORTED_MODULE_3__[\"promisify\"])(fs__WEBPACK_IMPORTED_MODULE_1__[\"readFile\"]); // const writeFileAsync = promisify(writeFile)\n\nconst DefaultBabelOptions = {\n  presets: [['@babel/preset-env', {\n    // 'loose': true,\n    // 'debug': true,\n    'targets': {\n      'node': 'current'\n    }\n  }] // '@babel/preset-typescript'\n  ],\n  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import', ['@babel/plugin-transform-arrow-functions', {\n    spec: true\n  }], '@babel/plugin-transform-typescript']\n};\n\nconst transform = async function transform(srcDir, destDir) {\n  var _this2 = this;\n\n  _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this);\n\n  const workingDir = path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(srcDir);\n  const destination = path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(destDir);\n  const files = await recursiveAsync(workingDir); // console.log(files)\n\n  files.forEach(async function (file) {\n    _babel_runtime_helpers_newArrowCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _this2);\n\n    const pathArray = file.split(workingDir)[1].split(path__WEBPACK_IMPORTED_MODULE_4___default.a.sep);\n    const fileName = pathArray[pathArray.length - 1];\n    const match = fileMatch.exec(fileName);\n\n    if (match) {\n      const raw = await readFileAsync(file);\n      pathArray.shift();\n      const fileName = pathArray.join('/').replace(fileMatch, '.js');\n      const babelOptions = {\n        filename: `${destination}/${fileName}`,\n        ...DefaultBabelOptions\n      }; // console.log(babelOptions)\n\n      const content = await _babel_core__WEBPACK_IMPORTED_MODULE_5__[\"transformAsync\"](raw, babelOptions); // console.log(content)\n      // console.log(content.options.plugins)\n\n      content.code = content.code.replace('index.mjs', 'index.js');\n      await fsExtra.outputFile(content.options.filename, content.code);\n    }\n  }.bind(this));\n}.bind(undefined);\n\n\n\n//# sourceURL=webpack:///./src/compiler/index.ts?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/cli/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/cli/index.ts */\"./src/cli/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/cli/index.ts?");

/***/ }),

/***/ "@babel/core":
/*!******************************!*\
  !*** external "@babel/core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/core\");\n\n//# sourceURL=webpack:///external_%22@babel/core%22?");

/***/ }),

/***/ "@babel/plugin-syntax-dynamic-import":
/*!******************************************************!*\
  !*** external "@babel/plugin-syntax-dynamic-import" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/plugin-syntax-dynamic-import\");\n\n//# sourceURL=webpack:///external_%22@babel/plugin-syntax-dynamic-import%22?");

/***/ }),

/***/ "@babel/plugin-transform-arrow-functions":
/*!**********************************************************!*\
  !*** external "@babel/plugin-transform-arrow-functions" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/plugin-transform-arrow-functions\");\n\n//# sourceURL=webpack:///external_%22@babel/plugin-transform-arrow-functions%22?");

/***/ }),

/***/ "@babel/plugin-transform-runtime":
/*!**************************************************!*\
  !*** external "@babel/plugin-transform-runtime" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/plugin-transform-runtime\");\n\n//# sourceURL=webpack:///external_%22@babel/plugin-transform-runtime%22?");

/***/ }),

/***/ "@babel/plugin-transform-typescript":
/*!*****************************************************!*\
  !*** external "@babel/plugin-transform-typescript" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/plugin-transform-typescript\");\n\n//# sourceURL=webpack:///external_%22@babel/plugin-transform-typescript%22?");

/***/ }),

/***/ "@babel/preset-env":
/*!************************************!*\
  !*** external "@babel/preset-env" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/preset-env\");\n\n//# sourceURL=webpack:///external_%22@babel/preset-env%22?");

/***/ }),

/***/ "@babel/runtime/helpers/newArrowCheck":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/newArrowCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/newArrowCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/newArrowCheck%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "chokidar":
/*!***************************!*\
  !*** external "chokidar" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chokidar\");\n\n//# sourceURL=webpack:///external_%22chokidar%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs-extra\");\n\n//# sourceURL=webpack:///external_%22fs-extra%22?");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"module\");\n\n//# sourceURL=webpack:///external_%22module%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "recursive-readdir":
/*!************************************!*\
  !*** external "recursive-readdir" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recursive-readdir\");\n\n//# sourceURL=webpack:///external_%22recursive-readdir%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yargs\");\n\n//# sourceURL=webpack:///external_%22yargs%22?");

/***/ })

/******/ });