// Флип-меню

import authDone from './modules/flip'; 

authDone().init();

// Параллакс


const layer = document.querySelector('.parallax__layer--image');

const moveLayers = e => {
  if(window.innerWidth < 769) {
    return
  }
  const initialX = (window.innerWidth / 2) - e.pageX;
  const initialY = (window.innerHeight / 2) - e.pageY;

  const divider = layer.dataset.speed;
  const positionX = initialX * divider;
  const positionY = initialY * divider;
  const bottomPosition = (window.innerHeight / 2) * divider;
  const image = layer.firstElementChild;


  layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
  image.style.bottom = `-${bottomPosition}px`;
};

window.addEventListener('mousemove', moveLayers)

// валидация формы

import validation from './modules/validation';

const form = document.querySelector('.form');
const formButton = document.querySelector('.form__submit');

 
form.onsubmit = function(e){
  e.preventDefault();
  let form = e.target;
  let formData = new FormData();
  formData.append('name', form.elements.login.value);
  formData.append('password', form.elements.password.value);

  let sendAjax = function (url, data) {
    return new Promise(function(resolve){
      let xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.responseType= 'json';
      xhr.setRequestHeader('X-Requesteed-With', 'XMLHttpRequest');
      xhr.addEventListener('load', ()=>{
        resolve(xhr.response);
      })
      xhr.send(data);
    })
  }

  sendAjax('https://webdev-api.loftschool.com/login', formData)
  .then(function(response){
    localStorage.setItem('token', response.token);
    document.location.replace("https://olindv.github.io/admin"); 
    // document.location.replace("http://localhost:8080/admin"); 
  })

};

formButton.addEventListener('click', function(){
  validation().init(form);
});



