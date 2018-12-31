// Флип-меню

import authDone from './modules/auth'; 

authDone().init();



// Параллакс


const layer = document.querySelector('.parallax__layer--image');

const moveLayers = e => {
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