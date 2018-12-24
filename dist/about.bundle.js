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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\n//Секция - яндекс карты\n\nymaps.ready(init);\nfunction init() {\n    var myMap = new ymaps.Map('map', {\n        center: [55.76, 37.64],\n        zoom: 10\n    });\n    myMap.behaviors.disable(['scrollZoom']);\n\n    var coords = [[56.00, 37.20]];\n\n    for (var i = 0; i < coords.length; i++) {\n\n        var myPlacemarkWithContent = new ymaps.Placemark(coords[i], {\n            hintContent: 'Здесь проживает Sponge Bob!',\n            balloonContent: 'Квадратные штаны !'\n        }, {\n            iconLayout: 'default#image',\n            iconImageHref: './assets/images/icons/map_marker.svg',\n            iconImageSize: [60, 60],\n            iconImageOffset: [-24, -24],\n            iconContentOffset: [15, 15]\n\n        });\n\n        myMap.geoObjects.add(myPlacemarkWithContent);\n    }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJ5bWFwcyIsInJlYWR5IiwiaW5pdCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImJlaGF2aW9ycyIsImRpc2FibGUiLCJjb29yZHMiLCJpIiwibGVuZ3RoIiwibXlQbGFjZW1hcmtXaXRoQ29udGVudCIsIlBsYWNlbWFyayIsImhpbnRDb250ZW50IiwiYmFsbG9vbkNvbnRlbnQiLCJpY29uTGF5b3V0IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJpY29uQ29udGVudE9mZnNldCIsImdlb09iamVjdHMiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBR0E7O0FBRUFBLE1BQU1DLEtBQU4sQ0FBWUMsSUFBWjtBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFDWixRQUFJQyxRQUFRLElBQUlILE1BQU1JLEdBQVYsQ0FBYyxLQUFkLEVBQXFCO0FBQzdCQyxnQkFBUSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBRHFCO0FBRTdCQyxjQUFNO0FBRnVCLEtBQXJCLENBQVo7QUFJQUgsVUFBTUksU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0IsQ0FBQyxZQUFELENBQXhCOztBQUVBLFFBQUlDLFNBQVMsQ0FBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQUYsQ0FBYjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBRUQsT0FBT0UsTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDOztBQUVsQyxZQUFJRSx5QkFBeUIsSUFBSVosTUFBTWEsU0FBVixDQUFvQkosT0FBT0MsQ0FBUCxDQUFwQixFQUErQjtBQUN4REkseUJBQWEsNkJBRDJDO0FBRXhEQyw0QkFBZ0I7QUFGd0MsU0FBL0IsRUFHMUI7QUFDQ0Msd0JBQVksZUFEYjtBQUVDQywyQkFBZSxzQ0FGaEI7QUFHQ0MsMkJBQWUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUhoQjtBQUlDQyw2QkFBaUIsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FKbEI7QUFLQ0MsK0JBQW1CLENBQUMsRUFBRCxFQUFLLEVBQUw7O0FBTHBCLFNBSDBCLENBQTdCOztBQVlBakIsY0FBTWtCLFVBQU4sQ0FDQ0MsR0FERCxDQUNLVixzQkFETDtBQUVIO0FBQ0oiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvZXhhbXBsZVwiO1xyXG5cclxuXHJcbi8v0KHQtdC60YbQuNGPIC0g0Y/QvdC00LXQutGBINC60LDRgNGC0YtcclxuXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgICAgIGNlbnRlcjogWzU1Ljc2LCAzNy42NF0sXHJcbiAgICAgICAgem9vbTogMTBcclxuICAgIH0pO1xyXG4gICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoWydzY3JvbGxab29tJ10pO1xyXG4gICAgXHJcbiAgICB2YXIgY29vcmRzID0gWyBbNTYuMDAsIDM3LjIwXSBdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpPGNvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBteVBsYWNlbWFya1dpdGhDb250ZW50ID0gbmV3IHltYXBzLlBsYWNlbWFyayhjb29yZHNbaV0sIHtcclxuICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQl9C00LXRgdGMINC/0YDQvtC20LjQstCw0LXRgiBTcG9uZ2UgQm9iIScsXHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0JrQstCw0LTRgNCw0YLQvdGL0LUg0YjRgtCw0L3RiyAhJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4vYXNzZXRzL2ltYWdlcy9pY29ucy9tYXBfbWFya2VyLnN2ZycsXHJcbiAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs2MCwgNjBdLFxyXG4gICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjQsIC0yNF0sXHJcbiAgICAgICAgICAgIGljb25Db250ZW50T2Zmc2V0OiBbMTUsIDE1XSxcclxuICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcmtXaXRoQ29udGVudCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/example.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/example.js\n");

/***/ })

/******/ });