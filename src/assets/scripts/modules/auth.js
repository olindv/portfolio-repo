
export default function authDone() {
    const buttonAuth = document.querySelector('.button__auth');
    const auth = document.querySelector('.auth');
  
    function flippedMenu(){
      buttonAuth.addEventListener('click', function(e){
        e.preventDefault();
        auth.classList.add('is-flipped');
        buttonAuth.classList.add('button__auth--visibility-hidden');
      })
      document.addEventListener('click',function(e){
        if (!e.target.closest('.wrapper__auth')&&!e.target.closest('.button__auth')){
          auth.classList.remove('is-flipped');
          buttonAuth.classList.remove('button__auth--visibility-hidden');
        }
      })
    }
  
    return {
      init: flippedMenu
    }
  }