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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar buttonAuth = document.querySelector('.button__auth');\nvar auth = document.querySelector('.auth');\nbuttonAuth.addEventListener('click', function () {\n  auth.classList.add('is-flipped');\n  buttonAuth.style.visibility = 'hidden';\n});\ndocument.addEventListener('click', function (e) {\n  if (!e.target.closest('.wrapper-auth') && !e.target.closest('.button__auth')) {\n    auth.classList.remove('is-flipped');\n    buttonAuth.style.visibility = 'visible';\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImJ1dHRvbkF1dGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhdXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwidmlzaWJpbGl0eSIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxJQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQUYsV0FBV0ksZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVTtBQUM3Q0QsT0FBS0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0FBQ0FOLGFBQVdPLEtBQVgsQ0FBaUJDLFVBQWpCLEdBQThCLFFBQTlCO0FBQ0QsQ0FIRDtBQUlBUCxTQUFTRyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTSyxDQUFULEVBQVc7QUFDMUMsTUFBSSxDQUFDQSxFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsZUFBakIsQ0FBRCxJQUFvQyxDQUFDRixFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsZUFBakIsQ0FBekMsRUFBMkU7QUFDekVSLFNBQUtFLFNBQUwsQ0FBZU8sTUFBZixDQUFzQixZQUF0QjtBQUNBWixlQUFXTyxLQUFYLENBQWlCQyxVQUFqQixHQUE4QixTQUE5QjtBQUNEO0FBQ0osQ0FMRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX2F1dGgnKTtcclxuY29uc3QgYXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoJyk7XHJcbmJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gIGF1dGguY2xhc3NMaXN0LmFkZCgnaXMtZmxpcHBlZCcpO1xyXG4gIGJ1dHRvbkF1dGguc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG59KVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcud3JhcHBlci1hdXRoJykmJiFlLnRhcmdldC5jbG9zZXN0KCcuYnV0dG9uX19hdXRoJykpe1xyXG4gICAgICBhdXRoLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZsaXBwZWQnKTtcclxuICAgICAgYnV0dG9uQXV0aC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });