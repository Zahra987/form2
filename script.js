const title= document.getElementById('title');
const signin= document.getElementById('signin');
const btn= document.getElementById('btn');
const username= document.getElementById('username');
const age= document.getElementById('age');
const email= document.getElementById('email');
const password= document.getElementById('password');
const confirmpass= document.getElementById('confirmpass');

function hiddenAllOfErr() {
  username.lastElementChild.style.visibility='hidden';
  age.lastElementChild.style.visibility='hidden';
  email.lastElementChild.style.visibility='hidden';
  confirmpass.lastElementChild.style.visibility='hidden';
  password.lastElementChild.style.visibility='hidden';
}

signin.onclick=function(){
  if (signin.innerHTML==='sign in') {
    signin.innerHTML='sign up';
    title.innerHTML='sign in';
    //change content of submit by onclick on signin-signup link
    btn.innerHTML='sign in';
    //hidden age and email and confirm field
    age.style.maxHeight='0';
    email.style.maxHeight='0';
    confirmpass.style.maxHeight='0';
    hiddenAllOfErr();
  }else{
    signin.innerHTML='sign in';
    title.innerHTML='sign up';
    //change content of submit by onclick on signin-signup link
    btn.innerHTML='sign up';
    //visible age and email and confirm field
    age.style.maxHeight='60px';
    email.style.maxHeight='60px';
    confirmpass.style.maxHeight='60px';
    hiddenAllOfErr();
  }
}

function myFormValidation(){
  hiddenAllOfErr();
  if (btn.innerHTML==='sign up') {
    return signupFormValidation();
  }else{
    return signinFormValidation();
  }
}


function signupFormValidation() {
  password.lastElementChild.style.top='230px';
  //validation for username
  if (document.forms['myForm']['fusername'].value.length < 4) {
    username.lastElementChild.style.visibility='visible';
  }
  //validation for age
  if (document.forms['myForm']['fage'].value < 1 || isNaN(document.forms['myForm']['fage'].value) ) {
    age.lastElementChild.style.visibility='visible';
  }
  //validation for email
  var emailValue= document.forms['myForm']['femail'].value;
  if (emailValue.indexOf("@") <= 0) {
    email.lastElementChild.style.visibility='visible';
  }
  if (emailValue.charAt(emailValue.length - 4) != '.' && emailValue.charAt(emailValue.length - 3) != '.' ) {
    email.lastElementChild.style.visibility='visible';
  }
  //validation for password
  if (document.forms['myForm']['fpassword'].value.length < 7) {
    password.lastElementChild.style.visibility='visible';
  }
  //validation for confirm password
  if (document.forms['myForm']['fpassword'].value != document.forms['myForm']['fconfirmpass'].value) {
    confirmpass.lastElementChild.style.visibility='visible';
  }
  if (username.lastElementChild.style.visibility === 'visible' || age.lastElementChild.style.visibility === 'visible' || email.lastElementChild.style.visibility === 'visible' || password.lastElementChild.style.visibility === 'visible' || confirmpass.lastElementChild.style.visibility === 'visible' ) {
    return false;
  }
  return true;
}

function signinFormValidation() {
   password.lastElementChild.style.top='120px';
   //validation for username
   if (document.forms['myForm']['fusername'].value.length < 4) {
     username.lastElementChild.style.visibility='visible';
   }
     //validation for password
   if (document.forms['myForm']['fpassword'].value.length < 7) {
     password.lastElementChild.style.visibility='visible';
   }
   if (username.lastElementChild.style.visibility === 'visible' || password.lastElementChild.style.visibility === 'visible' ) {
    return false;
  }
   return true;
}