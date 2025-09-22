var header = document.querySelector(".header1");
var carouselSection = document.querySelector(".carousel");
var hid = document.querySelector(".hidnav");
window.onscroll = function(e){
if(window.scrollY >= carouselSection.offsetTop){
  header.classList.add('header-secroll');
  hid.classList.add('display1');

}else{
  header.classList.remove('header-secroll');
 hid.classList.remove('display1');
}
}

