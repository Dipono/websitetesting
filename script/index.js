let error_icon_hidden = document.getElementById('icon-error');
let outputEmail = document.getElementById('error-message');
let inputField = document.getElementById("email");

error_icon_hidden.hidden = true;

function sendEmail(){
  error_icon_hidden.hidden = true;
  outputEmail.innerHTML = ''
  inputField.style.removeProperty('border')

  let email = document.getElementById('email').value;
  if(!email){
    error_icon_hidden.hidden = false;
    outputEmail.innerHTML= 'Enter Email';
    inputField.style.border = "red solid 2px";
    return
  }

  const regEx = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
  if (!regEx.test(email)){
    error_icon_hidden.hidden = false;
    outputEmail.innerHTML = 'Please provide a valid Email';
    inputField.style.border = "red solid 2px";

    return
  }
}