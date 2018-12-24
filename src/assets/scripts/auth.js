const buttonAuth = document.querySelector('.button__auth');
const auth = document.querySelector('.auth');
buttonAuth.addEventListener('click', function(){
  auth.classList.add('is-flipped');
  buttonAuth.style.visibility = 'hidden';
})
document.addEventListener('click', function(e){
    if (!e.target.closest('.wrapper-auth')&&!e.target.closest('.button__auth')){
      auth.classList.remove('is-flipped');
      buttonAuth.style.visibility = 'visible';
    }
})