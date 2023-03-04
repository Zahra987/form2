var title= document.getElementById('title');
var signin= document.getElementById('signin');
var btn= document.getElementById('btn');
var username= document.getElementById('username');
var age= document.getElementById('age');
var email= document.getElementById('email');
var password= document.getElementById('password');
var confirm= document.getElementById('confirm');

signin.onclick=function(){
  if (signin.innerHTML==='sign in') {
    signin.innerHTML='sign up';
    title.innerHTML='sign in';
    //change content of submit by onclick on signin-signup link
    btn.innerHTML='sign in';
    //hidden age and email and confirm field
    age.style.maxHeight='0';
    email.style.maxHeight='0';
    confirm.style.maxHeight='0';
    //hidden all errors 
    username.lastElementChild.style.visibility='hidden';
    age.lastElementChild.style.visibility='hidden';
    email.lastElementChild.style.visibility='hidden';
    confirm.lastElementChild.style.visibility='hidden';
    password.lastElementChild.style.visibility='hidden';
  }else{
    signin.innerHTML='sign in';
    title.innerHTML='sign up';
    //change content of submit by onclick on signin-signup link
    btn.innerHTML='sign up';
    //visible age and email and confirm field
    age.style.maxHeight='60px';
    email.style.maxHeight='60px';
    confirm.style.maxHeight='60px';
    //hidden all errors 
    username.lastElementChild.style.visibility='hidden';
    age.lastElementChild.style.visibility='hidden';
    email.lastElementChild.style.visibility='hidden';
    confirm.lastElementChild.style.visibility='hidden';
    password.lastElementChild.style.visibility='hidden';
  }
}
//validation function
btn.onclick=function(){
  //hidden all error when onclick on submit
  username.lastElementChild.style.visibility='hidden';
  age.lastElementChild.style.visibility='hidden';
  email.lastElementChild.style.visibility='hidden';
  password.lastElementChild.style.visibility='hidden';
  confirm.lastElementChild.style.visibility='hidden';
  //...............................submit is sign up.................................
  if (btn.innerHTML==='sign up') {
    // change position of password error box
    password.lastElementChild.style.top='230px';
    //validation for username
  if (username.children[1].value.length < 3) {
    username.lastElementChild.style.visibility='visible';
    return false;
  }else{
    username.lastElementChild.style.visibility='hidden';
  }
  //validation for age
  var dateString = age.children[1].value;
  var parts = dateString.split("-");
  var now = new Date();
  var birthday = new Date(now.getFullYear(),parts[1]-1,parts[2]);
  var ageResult = now.getFullYear()-parts[0];
  if (ageResult < 18) {
    age.lastElementChild.style.visibility='visible';
    return false;
  }else{
    age.lastElementChild.style.visibility='hidden';
  }
  //validation for email
  var pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  var regexResult = pattern.test(email.children[1].value);
  if (!regexResult) {
    email.lastElementChild.style.visibility='visible';
    return false;
  }else{
    email.lastElementChild.style.visibility='hidden';
  }
  //validation for password
  if (password.children[1].value.length < 8) {
    password.lastElementChild.style.visibility='visible';
    return false;
  }else{
    password.lastElementChild.style.visibility='hidden';
  }
  //validation for confirm password
  if (password.children[1].value != confirm.children[1].value) {
    confirm.lastElementChild.style.visibility='visible';
    return false;
  }else{
    confirm.lastElementChild.style.visibility='hidden';
  }
  return true;
  //.........................submit is sign in..............................
  }else{
    // change position of password error box
    password.lastElementChild.style.top='120px';
    //validation for username
    if (username.children[1].value.length < 3) {
      username.lastElementChild.style.visibility='visible';
      return false;
    }else{
      username.lastElementChild.style.visibility='hidden';
    }
      //validation for password
    if (password.children[1].value.length < 8) {
      password.lastElementChild.style.visibility='visible';
      return false;
    }else{
      password.lastElementChild.style.visibility='hidden';
    }
    return true;
  }
}