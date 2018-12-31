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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _hamburger = __webpack_require__(/*! ./modules/hamburger */ \"./src/assets/scripts/modules/hamburger.js\");\n\nvar _hamburger2 = _interopRequireDefault(_hamburger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _hamburger2.default)().init();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImluaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBLDJCQUFZQSxJQUFaIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGFtYnVyZ2VyIGZyb20gJy4vbW9kdWxlcy9oYW1idXJnZXInO1xyXG5cclxuaGFtYnVyZ2VyKCkuaW5pdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/hamburger.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/hamburger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = openHamburger;\nfunction openHamburger() {\n\n  var hamburgerMenuLink = document.querySelector('.popup__order');\n  var hamburgerMenu = document.querySelector('.popup__overlay');\n  var hamburgerMenuList = document.querySelector('.popup__list').children;\n  var body = document.body;\n  var isActiveMenu = false;\n  var counter = 0;\n\n  function animationMenu() {\n    if (counter % 2 === 0) {\n      var elemApperance = hamburgerMenuList[counter];\n      elemApperance.classList.toggle('appearance');\n    } else {\n      var elemTwist = hamburgerMenuList[counter];\n      elemTwist.classList.toggle('appearanceLeft');\n    }\n    counter++;\n    if (counter < hamburgerMenuList.length) {\n      setTimeout(animationMenu, 100);\n    }\n    if (counter === hamburgerMenuList.length) {\n      counter = 0;\n    }\n  }\n\n  function poppedOverlay() {\n    hamburgerMenuLink.classList.toggle('popup__link--active');\n    hamburgerMenu.classList.toggle('popup__overlay--active');\n    body.classList.toggle('block-scroll');\n    animationMenu();\n    isActiveMenu = !isActiveMenu;\n  }\n\n  function initMenu() {\n    hamburgerMenuLink.addEventListener('click', poppedOverlay);\n    hamburgerMenu.addEventListener('click', function (e) {\n      if (e.target.className === 'popup__link') {\n        poppedOverlay();\n      }\n    });\n    document.addEventListener('keydown', function (e) {\n      if (e.keyCode === 27 && isActiveMenu) {\n        poppedOverlay();\n      }\n    });\n  }\n  return { init: initMenu };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanM/ZTQ5ZCJdLCJuYW1lcyI6WyJvcGVuSGFtYnVyZ2VyIiwiaGFtYnVyZ2VyTWVudUxpbmsiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW1idXJnZXJNZW51IiwiaGFtYnVyZ2VyTWVudUxpc3QiLCJjaGlsZHJlbiIsImJvZHkiLCJpc0FjdGl2ZU1lbnUiLCJjb3VudGVyIiwiYW5pbWF0aW9uTWVudSIsImVsZW1BcHBlcmFuY2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJlbGVtVHdpc3QiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwicG9wcGVkT3ZlcmxheSIsImluaXRNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJrZXlDb2RlIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQ3dCQSxhO0FBQVQsU0FBU0EsYUFBVCxHQUF3Qjs7QUFFbkMsTUFBTUMsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQTFCO0FBQ0EsTUFBTUMsZ0JBQWdCRixTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBLE1BQU1FLG9CQUFvQkgsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0csUUFBakU7QUFDQSxNQUFNQyxPQUFPTCxTQUFTSyxJQUF0QjtBQUNBLE1BQUlDLGVBQWUsS0FBbkI7QUFDQSxNQUFJQyxVQUFVLENBQWQ7O0FBRUEsV0FBU0MsYUFBVCxHQUF3QjtBQUN0QixRQUFJRCxVQUFRLENBQVIsS0FBYyxDQUFsQixFQUFxQjtBQUNuQixVQUFJRSxnQkFBZ0JOLGtCQUFrQkksT0FBbEIsQ0FBcEI7QUFDQUUsb0JBQWNDLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFlBQS9CO0FBQ0QsS0FIRCxNQUdLO0FBQ0gsVUFBSUMsWUFBWVQsa0JBQWtCSSxPQUFsQixDQUFoQjtBQUNBSyxnQkFBVUYsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsZ0JBQTNCO0FBQ0Q7QUFDREo7QUFDQSxRQUFJQSxVQUFRSixrQkFBa0JVLE1BQTlCLEVBQXFDO0FBQ25DQyxpQkFBV04sYUFBWCxFQUEwQixHQUExQjtBQUNEO0FBQ0QsUUFBSUQsWUFBVUosa0JBQWtCVSxNQUFoQyxFQUF1QztBQUNyQ04sZ0JBQVEsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU1EsYUFBVCxHQUF5QjtBQUN2QmhCLHNCQUFrQlcsU0FBbEIsQ0FBNEJDLE1BQTVCLENBQW1DLHFCQUFuQztBQUNBVCxrQkFBY1EsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0Isd0JBQS9CO0FBQ0FOLFNBQUtLLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixjQUF0QjtBQUNBSDtBQUNBRixtQkFBZSxDQUFDQSxZQUFoQjtBQUNEOztBQUVELFdBQVNVLFFBQVQsR0FBbUI7QUFDakJqQixzQkFBa0JrQixnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNENGLGFBQTVDO0FBQ0FiLGtCQUFjZSxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFTQyxDQUFULEVBQVc7QUFDakQsVUFBSUEsRUFBRUMsTUFBRixDQUFTQyxTQUFULEtBQXVCLGFBQTNCLEVBQXlDO0FBQ3ZDTDtBQUNEO0FBQ0YsS0FKRDtBQUtBZixhQUFTaUIsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzlDLFVBQUtBLEVBQUVHLE9BQUYsS0FBWSxFQUFiLElBQW1CZixZQUF2QixFQUFxQztBQUNuQ1M7QUFDRDtBQUNGLEtBSkQ7QUFLRDtBQUNELFNBQU8sRUFBQ08sTUFBTU4sUUFBUCxFQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9oYW1idXJnZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlbkhhbWJ1cmdlcigpe1xyXG5cclxuICAgIGNvbnN0IGhhbWJ1cmdlck1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19vcmRlcicpO1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fb3ZlcmxheScpO1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyTWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2xpc3QnKS5jaGlsZHJlbjtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgdmFyIGlzQWN0aXZlTWVudSA9IGZhbHNlO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gYW5pbWF0aW9uTWVudSgpe1xyXG4gICAgICBpZiAoY291bnRlciUyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IGVsZW1BcHBlcmFuY2UgPSBoYW1idXJnZXJNZW51TGlzdFtjb3VudGVyXTtcclxuICAgICAgICBlbGVtQXBwZXJhbmNlLmNsYXNzTGlzdC50b2dnbGUoJ2FwcGVhcmFuY2UnKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbGV0IGVsZW1Ud2lzdCA9IGhhbWJ1cmdlck1lbnVMaXN0W2NvdW50ZXJdO1xyXG4gICAgICAgIGVsZW1Ud2lzdC5jbGFzc0xpc3QudG9nZ2xlKCdhcHBlYXJhbmNlTGVmdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvdW50ZXIrKztcclxuICAgICAgaWYgKGNvdW50ZXI8aGFtYnVyZ2VyTWVudUxpc3QubGVuZ3RoKXtcclxuICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGlvbk1lbnUsIDEwMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvdW50ZXI9PT1oYW1idXJnZXJNZW51TGlzdC5sZW5ndGgpe1xyXG4gICAgICAgIGNvdW50ZXI9MDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcG9wcGVkT3ZlcmxheSgpIHtcclxuICAgICAgaGFtYnVyZ2VyTWVudUxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgncG9wdXBfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3BvcHVwX19vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdibG9jay1zY3JvbGwnKTtcclxuICAgICAgYW5pbWF0aW9uTWVudSgpO1xyXG4gICAgICBpc0FjdGl2ZU1lbnUgPSAhaXNBY3RpdmVNZW51O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaW5pdE1lbnUoKXtcclxuICAgICAgaGFtYnVyZ2VyTWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3BwZWRPdmVybGF5KTtcclxuICAgICAgaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwb3B1cF9fbGluaycpe1xyXG4gICAgICAgICAgcG9wcGVkT3ZlcmxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZiAoKGUua2V5Q29kZT09PTI3KSYmKGlzQWN0aXZlTWVudSkpe1xyXG4gICAgICAgICAgcG9wcGVkT3ZlcmxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7aW5pdDogaW5pdE1lbnV9O1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/hamburger.js\n");

/***/ })

/******/ });