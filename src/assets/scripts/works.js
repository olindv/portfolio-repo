// import "./modules/slider";
import hamburger from './modules/hamburger';
import validation from './modules/validation';
import slider from "./modules/slider";


hamburger().init();
slider().init();


// валидация формы


const form = document.querySelector('.form');
const formButton = document.querySelector('.form__submit');
form.onsubmit = function(e){
  e.preventDefault();
}
formButton.addEventListener('click', function(){
  validation().init(form);
})


