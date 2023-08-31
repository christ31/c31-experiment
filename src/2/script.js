var c31Window = document.getElementById("c31-window");

function hideWindow() {
  if(c31Window.classList.contains("hide")){
    c31Window.classList.remove("translate-y-[90%]");
    c31Window.classList.remove("hide");
  } else {
    c31Window.classList.add("translate-y-[90%]")
    c31Window.classList.add("hide");
  }
}

// ! Header for Mobile
const goBack = document.getElementById("header-go-back");
var viewportWidth = window.innerWidth; 
var viewportHeight = window.innerHeight;

if(viewportWidth<500){
  goBack.innerText = "<<";
} 

addEventListener("resize", (event) => {
  viewportWidth = window.innerWidth; 

  if(viewportWidth<500){
    goBack.innerText = "<<";
  } else {
    goBack.innerText = "<< Go Back";
  }
});