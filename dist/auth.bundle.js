!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelector(".button__auth"),t=document.querySelector(".auth"),n=document.querySelector(".form__btn--main");return{init:function(){e.addEventListener("click",function(n){n.preventDefault(),t.classList.add("is-flipped"),e.classList.add("button__auth--visibility-hidden")}),document.addEventListener("click",function(n){n.target.closest(".wrapper__auth")||n.target.closest(".button__auth")||(t.classList.remove("is-flipped"),e.classList.remove("button__auth--visibility-hidden"))}),n.addEventListener("click",function(n){n.preventDefault(),t.classList.remove("is-flipped"),e.classList.remove("button__auth--visibility-hidden")})}}}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(e,t){e.classList.add("error");var n=document.createElement("span");n.className="error-message",n.innerHTML=t,e.appendChild(n)}function t(e){e.classList.remove("error"),"error-message"==e.lastChild.className&&e.removeChild(e.lastChild)}return{init:function(n){var o=n.elements;o.name&&(t(o.name.parentNode),o.name.value||e(o.name.parentNode,"Введите имя!"));o.login&&(t(o.login.parentNode),o.login.value||e(o.login.parentNode,"Введите логин!"));o.check&&(t(o.check.parentNode),o.check.checked||e(o.check.parentNode,"Возможно Вы spangebob?"));o.robot&&(t(o.robot[0].parentNode.parentNode),o.robot[0].checked||o.robot[1].checked||e(o.robot[0].parentNode.parentNode,"Нужно выбрать!"));o.password&&(t(o.password.parentNode),o.password.value||e(o.password.parentNode,"Введите пароль!"));o.email&&(t(o.email.parentNode),o.email.value?0==o.email.value&&e(o.email.parentNode,"Введите корректный e-mail!"):e(o.email.parentNode,"Введите e-mail!"));o.message&&(t(o.message.parentNode),o.message.value||e(o.message.parentNode,"Введите текст!"))}}}},9:function(e,t,n){"use strict";var o=a(n(10)),r=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}(0,o.default)().init();var i=document.querySelector(".parallax__layer--image");window.addEventListener("mousemove",function(e){if(!(window.innerWidth<769)){var t=window.innerWidth/2-e.pageX,n=window.innerHeight/2-e.pageY,o=i.dataset.speed,r=t*o,a=n*o,s=window.innerHeight/2*o,u=i.firstElementChild;i.style.transform="translate("+r+"px, "+a+"px)",u.style.bottom="-"+s+"px"}});var s=document.querySelector(".form"),u=document.querySelector(".form__submit");s.onsubmit=function(e){e.preventDefault();var t=e.target,n=new FormData;n.append("name",t.elements.login.value),n.append("password",t.elements.password.value);var o,r;(o="https://webdev-api.loftschool.com/login",r=n,new Promise(function(e){var t=new XMLHttpRequest;t.open("POST",o),t.responseType="json",t.setRequestHeader("X-Requesteed-With","XMLHttpRequest"),t.addEventListener("load",function(){e(t.response)}),t.send(r)})).then(function(e){localStorage.setItem("token",e.token),document.location.replace("https://olindv.github.io/admin")})},u.addEventListener("click",function(){(0,r.default)().init(s)})}});