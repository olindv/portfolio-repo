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
eval("\n\nvar _auth = __webpack_require__(/*! ./modules/auth */ \"./src/assets/scripts/modules/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _auth2.default)().init();\n\n// Параллакс\n\n\n// Флип-меню\n\nvar layer = document.querySelector('.parallax__layer--image');\n\nvar moveLayers = function moveLayers(e) {\n  var initialX = window.innerWidth / 2 - e.pageX;\n  var initialY = window.innerHeight / 2 - e.pageY;\n\n  var divider = layer.dataset.speed;\n  var positionX = initialX * divider;\n  var positionY = initialY * divider;\n  var bottomPosition = window.innerHeight / 2 * divider;\n  var image = layer.firstElementChild;\n\n  layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n  image.style.bottom = '-' + bottomPosition + 'px';\n};\n\nwindow.addEventListener('mousemove', moveLayers);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImluaXQiLCJsYXllciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vdmVMYXllcnMiLCJpbml0aWFsWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJlIiwicGFnZVgiLCJpbml0aWFsWSIsImlubmVySGVpZ2h0IiwicGFnZVkiLCJkaXZpZGVyIiwiZGF0YXNldCIsInNwZWVkIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwiYm90dG9tUG9zaXRpb24iLCJpbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJib3R0b20iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUVBOzs7Ozs7QUFFQSxzQkFBV0EsSUFBWDs7QUFJQTs7O0FBUkE7O0FBV0EsSUFBTUMsUUFBUUMsU0FBU0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBZDs7QUFFQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsSUFBSztBQUN0QixNQUFNQyxXQUFZQyxPQUFPQyxVQUFQLEdBQW9CLENBQXJCLEdBQTBCQyxFQUFFQyxLQUE3QztBQUNBLE1BQU1DLFdBQVlKLE9BQU9LLFdBQVAsR0FBcUIsQ0FBdEIsR0FBMkJILEVBQUVJLEtBQTlDOztBQUVBLE1BQU1DLFVBQVVaLE1BQU1hLE9BQU4sQ0FBY0MsS0FBOUI7QUFDQSxNQUFNQyxZQUFZWCxXQUFXUSxPQUE3QjtBQUNBLE1BQU1JLFlBQVlQLFdBQVdHLE9BQTdCO0FBQ0EsTUFBTUssaUJBQWtCWixPQUFPSyxXQUFQLEdBQXFCLENBQXRCLEdBQTJCRSxPQUFsRDtBQUNBLE1BQU1NLFFBQVFsQixNQUFNbUIsaUJBQXBCOztBQUdBbkIsUUFBTW9CLEtBQU4sQ0FBWUMsU0FBWixrQkFBcUNOLFNBQXJDLFlBQXFEQyxTQUFyRDtBQUNBRSxRQUFNRSxLQUFOLENBQVlFLE1BQVosU0FBeUJMLGNBQXpCO0FBQ0QsQ0FiRDs7QUFlQVosT0FBT2tCLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDcEIsVUFBckMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCk0LvQuNC/LdC80LXQvdGOXHJcblxyXG5pbXBvcnQgYXV0aERvbmUgZnJvbSAnLi9tb2R1bGVzL2F1dGgnOyBcclxuXHJcbmF1dGhEb25lKCkuaW5pdCgpO1xyXG5cclxuXHJcblxyXG4vLyDQn9Cw0YDQsNC70LvQsNC60YFcclxuXHJcblxyXG5jb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheF9fbGF5ZXItLWltYWdlJyk7XHJcblxyXG5jb25zdCBtb3ZlTGF5ZXJzID0gZSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIGUucGFnZVg7XHJcbiAgY29uc3QgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBlLnBhZ2VZO1xyXG5cclxuICBjb25zdCBkaXZpZGVyID0gbGF5ZXIuZGF0YXNldC5zcGVlZDtcclxuICBjb25zdCBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXI7XHJcbiAgY29uc3QgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xyXG4gIGNvbnN0IGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcjtcclxuICBjb25zdCBpbWFnZSA9IGxheWVyLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHJcbiAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcclxuICBpbWFnZS5zdHlsZS5ib3R0b20gPSBgLSR7Ym90dG9tUG9zaXRpb259cHhgO1xyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/auth.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/auth.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = authDone;\nfunction authDone() {\n  var buttonAuth = document.querySelector('.button__auth');\n  var auth = document.querySelector('.auth');\n\n  function flippedMenu() {\n    buttonAuth.addEventListener('click', function (e) {\n      e.preventDefault();\n      auth.classList.add('is-flipped');\n      buttonAuth.classList.add('button__auth--visibility-hidden');\n    });\n    document.addEventListener('click', function (e) {\n      if (!e.target.closest('.wrapper__auth') && !e.target.closest('.button__auth')) {\n        auth.classList.remove('is-flipped');\n        buttonAuth.classList.remove('button__auth--visibility-hidden');\n      }\n    });\n  }\n\n  return {\n    init: flippedMenu\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hdXRoLmpzP2UzMTQiXSwibmFtZXMiOlsiYXV0aERvbmUiLCJidXR0b25BdXRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXV0aCIsImZsaXBwZWRNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFDd0JBLFE7QUFBVCxTQUFTQSxRQUFULEdBQW9CO0FBQy9CLE1BQU1DLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxNQUFNQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWI7O0FBRUEsV0FBU0UsV0FBVCxHQUFzQjtBQUNwQkosZUFBV0ssZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzlDQSxRQUFFQyxjQUFGO0FBQ0FKLFdBQUtLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtBQUNBVCxpQkFBV1EsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsaUNBQXpCO0FBQ0QsS0FKRDtBQUtBUixhQUFTSSxnQkFBVCxDQUEwQixPQUExQixFQUFrQyxVQUFTQyxDQUFULEVBQVc7QUFDM0MsVUFBSSxDQUFDQSxFQUFFSSxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsZ0JBQWpCLENBQUQsSUFBcUMsQ0FBQ0wsRUFBRUksTUFBRixDQUFTQyxPQUFULENBQWlCLGVBQWpCLENBQTFDLEVBQTRFO0FBQzFFUixhQUFLSyxTQUFMLENBQWVJLE1BQWYsQ0FBc0IsWUFBdEI7QUFDQVosbUJBQVdRLFNBQVgsQ0FBcUJJLE1BQXJCLENBQTRCLGlDQUE1QjtBQUNEO0FBQ0YsS0FMRDtBQU1EOztBQUVELFNBQU87QUFDTEMsVUFBTVQ7QUFERCxHQUFQO0FBR0QiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhEb25lKCkge1xyXG4gICAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX2F1dGgnKTtcclxuICAgIGNvbnN0IGF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aCcpO1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gZmxpcHBlZE1lbnUoKXtcclxuICAgICAgYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhdXRoLmNsYXNzTGlzdC5hZGQoJ2lzLWZsaXBwZWQnKTtcclxuICAgICAgICBidXR0b25BdXRoLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9fYXV0aC0tdmlzaWJpbGl0eS1oaWRkZW4nKTtcclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLndyYXBwZXJfX2F1dGgnKSYmIWUudGFyZ2V0LmNsb3Nlc3QoJy5idXR0b25fX2F1dGgnKSl7XHJcbiAgICAgICAgICBhdXRoLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZsaXBwZWQnKTtcclxuICAgICAgICAgIGJ1dHRvbkF1dGguY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX19hdXRoLS12aXNpYmlsaXR5LWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGluaXQ6IGZsaXBwZWRNZW51XHJcbiAgICB9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/auth.js\n");

/***/ })

/******/ });