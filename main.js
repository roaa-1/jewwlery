

const customHeader=()=>{
const categoriesSection = document.querySelector(".categories");
const hid = document.querySelector(".hidnav");

window.addEventListener ("scroll", function(e){
if(window.scrollY >= categoriesSection.offsetTop){
  hid.classList.add("header-secroll");
  hid.classList.remove("d-none");

}else{
  hid.classList.remove("header-secroll");
  hid.classList.add("d-none");
}
});
}
const customModel1=()=>{
const modelWeb = document.querySelector(".my-model");
const imageModel = Array.from(document.querySelectorAll(".img-mo"));
const closeBtn = document.querySelector(".close-btn");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const  modelImg = document.querySelector(".img-model");
const imagShow = document.querySelectorAll(".img-show");
let currentIndex = 0;
const hideModel=()=>{
    modelWeb.classList.remove('show');
}
const showModel=()=>{
    modelWeb.classList.add('show');
}
const nextImg=()=>{
  currentIndex++;
  if(currentIndex >= imageModel.length){
    currentIndex=0;
  }
  modelImg.setAttribute("src",imageModel[currentIndex].getAttribute("src"));
}
  const prevImg=()=>{
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = imageModel.length -1;
  }
  modelImg.setAttribute("src",imageModel[currentIndex].getAttribute("src"));
} 
imagShow.forEach((img,index)=>{
  img.addEventListener("click",(e)=>{
    currentIndex = index; 
    modelImg.setAttribute("src", imageModel[currentIndex].getAttribute("src"));
    showModel();
  });
});
closeBtn.addEventListener("click",hideModel);
leftBtn.addEventListener("click",nextImg);
rightBtn.addEventListener("click",prevImg);
document.addEventListener("keydown", function({code}) {
  if (code == 'ArrowRight') {
    nextImg();
  } else if (code == 'ArrowLeft') {
    prevImg();
  }
})
};
const customModel2 = () => {
  const modelWeb = document.querySelector(".my-model1");
  const imageModel1 = Array.from(document.querySelectorAll(".img-mo1")); 
  const closeBtn = modelWeb.querySelector(".close-btn1");
  const leftBtn = modelWeb.querySelector(".left-btn1");
  const rightBtn = modelWeb.querySelector(".right-btn1");
  const modelImg = modelWeb.querySelector(".img-model"); 
  const imagShow1 = document.querySelectorAll(".img-show1"); 

  let currentIndex1 = 0;

  const hideModel = () => {
    modelWeb.classList.remove("show");
  };

  const showModel = () => {
    modelWeb.classList.add("show");
  };



  const nextImg = () => {
    currentIndex1++;
    if (currentIndex1 >= imageModel1.length) {
      currentIndex1 = 0;
    }
    modelImg.setAttribute("src", imageModel1[currentIndex1].getAttribute("src"));
  };

  const prevImg = () => {
    currentIndex1--;
    if (currentIndex1 < 0) {
      currentIndex1 = imageModel1.length - 1;
    }
    modelImg.setAttribute("src", imageModel1[currentIndex1].getAttribute("src"));
  };

  imagShow1.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex1 = index;
      modelImg.setAttribute("src", imageModel1[currentIndex1].getAttribute("src"));
      showModel();
    });
  });

  closeBtn.addEventListener("click", hideModel);
  leftBtn.addEventListener("click", prevImg);
  rightBtn.addEventListener("click", nextImg);

  document.addEventListener("keydown", function ({ code }) {
    if (code === "ArrowRight") {
      nextImg();
    } else if (code === "ArrowLeft") {
      prevImg();
    }
  });
};
customHeader();
customModel1();
customModel2();
