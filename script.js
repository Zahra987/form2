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
    btn.innerHTML='sign in';
  }else{
    signin.innerHTML='sign in';
    title.innerHTML='sign up';
    btn.innerHTML='sign up';
  }
  
}