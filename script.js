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