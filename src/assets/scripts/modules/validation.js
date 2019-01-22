export default function Validation(){

  function showError(container, errorMessage) {
    container.classList.add('error');
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

  function resetError(container) {
    container.classList.remove('error');
    if (container.lastChild.className == "error-message") {
      container.removeChild(container.lastChild);
    }
  }

  function initValidation(form){
    var elems = form.elements;
    if(elems.name){
      resetError(elems.name.parentNode);
      if (!elems.name.value) {
        showError(elems.name.parentNode, 'Введите имя!');
      }
    }

    if(elems.login){
      resetError(elems.login.parentNode);
      if (!elems.login.value) {
        showError(elems.login.parentNode, 'Введите логин!');
      }
    }

    if(elems.check){
      resetError(elems.check.parentNode);
      if (!elems.check.checked) {
        showError(elems.check.parentNode, 'Возможно Вы spangebob?');
      }
    }

    if(elems.robot){
      resetError(elems.robot[0].parentNode.parentNode);
      if (!elems.robot[0].checked&&!elems.robot[1].checked) {
        showError(elems.robot[0].parentNode.parentNode, 'Нужно выбрать!');
      }
    }

    if (elems.password){
      resetError(elems.password.parentNode);
      if (!elems.password.value) {
        showError(elems.password.parentNode, 'Введите пароль!');
      }
    }

    if(elems.email){
      resetError(elems.email.parentNode);
      if (!elems.email.value) {
        showError(elems.email.parentNode, 'Введите e-mail!');
      }else{
        // eslint-disable-next-line no-useless-escape
        // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(elems.email.value == false) {
          showError(elems.email.parentNode, 'Введите корректный e-mail!');
        }
      }
    }

    if(elems.message){
      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, 'Введите текст!');
      }
    }

  }

  return {
    init: initValidation
  }
}