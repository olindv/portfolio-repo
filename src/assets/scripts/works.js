import "./modules/slider";


import hamburger from './modules/hamburger';


hamburger().init();


// валидация формы

import validation from './modules/validation';

const form = document.querySelector('.form');
const formButton = document.querySelector('.form__submit');
form.onsubmit = function(e){
  e.preventDefault();
}
formButton.addEventListener('click', function(){
  validation().init(form);
})
