window.onscroll = function(){myFun()}

var navbar=document.getElementById('navbar');
var topPx=navbar.offsetTop;
function myFun(){
  if(window.pageYOffset>=topPx){
      navbar.classList.add('fixMe');
  }else{
      navbar.classList.remove('fixMe');
  }
}