
export default function openHamburger(){

    const hamburgerMenuLink = document.querySelector('.popup__order');
    const hamburgerMenu = document.querySelector('.popup__overlay');
    const hamburgerMenuList = document.querySelector('.popup__list').children;
    const body = document.body;
    var isActiveMenu = false;
    var counter = 0;
  
    function animationMenu(){
      if (counter%2 === 0) {
        let elemApperance = hamburgerMenuList[counter];
        elemApperance.classList.toggle('appearance');
      }else{
        let elemTwist = hamburgerMenuList[counter];
        elemTwist.classList.toggle('appearanceLeft');
      }
      counter++;
      if (counter<hamburgerMenuList.length){
        setTimeout(animationMenu, 100);
      }
      if (counter===hamburgerMenuList.length){
        counter=0;
      }
    }
  
    function poppedOverlay() {
      hamburgerMenuLink.classList.toggle('popup__link--active');
      hamburgerMenu.classList.toggle('popup__overlay--active');
      body.classList.toggle('block-scroll');
      animationMenu();
      isActiveMenu = !isActiveMenu;
    }
  
    function initMenu(){
      hamburgerMenuLink.addEventListener('click', poppedOverlay);
      hamburgerMenu.addEventListener('click', function(e){
        if (e.target.className === 'popup__link'){
          poppedOverlay();
        }
      });
      document.addEventListener('keydown', function(e){
        if ((e.keyCode===27)&&(isActiveMenu)){
          poppedOverlay();
        }
      })
    }
    return {init: initMenu};
  }