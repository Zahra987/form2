var username= document.getElementById('username');
var age= document.getElementById('age');
var email= document.getElementById('email');
var password= document.getElementById('password');
var confirm= document.getElementById('confirm');
var btn= document.getElementById('btn');
var signin= document.getElementById('signin');
var title= document.getElementById('title');

signin.onclick= function () {
  if (signin.innerHTML==='Sign in') {
    confirm.style.maxHeight='0';
    age.style.maxHeight='0';
    email.style.maxHeight='0';
    title.innerHTML='sign in';
    btn.innerHTML='sign in';
    signin.innerHTML='Sign Up';
  }else{
    confirm.style.maxHeight='60px';
    age.style.maxHeight='60px';
    email.style.maxHeight='60px';
    title.innerHTML='sign up';
    btn.innerHTML='sign up';
    signin.innerHTML='Sign in';
  }
  
}
