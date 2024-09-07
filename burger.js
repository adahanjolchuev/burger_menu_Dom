let burger = document.querySelector(".burger");
let burgerTwo = document.querySelector(".burger-two");
let burgerThree = document.querySelector(".burger-three");
let divv = document.querySelector(".divv");
let menu = document.querySelector(".menu");
let homeClick = document.querySelector(".homeClick");
let aboutClick = document.querySelector(".aboutClick");
let ProductClick = document.querySelector(".ProductClick");
let teamClick  = document.querySelector(".teamClick");
let nav = document.querySelector("nav");
let li = document.querySelectorAll("li");


let homeOne = document.querySelector("#home");
let aboutOne = document.querySelector("#about");
let productOne = document.querySelector("#product");
let teamOne = document.querySelector("#team");

let boolean = false;

divv.addEventListener("click", () => {
  burgerBtn();
});

function burgerBtn() {
  boolean = !boolean;
  for (let i of li) {
    i.addEventListener("click", () => {
      boolean = false;
      menu.style.transform = boolean ? "translateX(0)" : "translateX(100%)";
    });
  }
  burger.style.transform = boolean
    ? "rotate(-45deg)"
    : "rotate(0) translate(0)";
  burger.style.top = boolean ? "50%" : "";

  (burgerTwo.style.transform = boolean ? "scale(0)" : "scale(1)"),
    "translateX(-50% , 50%)";
  burgerTwo.style.bottom = "30px";

  burgerThree.style.transform = boolean ? "rotate(45deg)" : "rotate(0)";
  burgerThree.style.bottom = boolean ? "37%" : "";

  menu.style.transform = boolean ? "translateX(0)" : "translateX(100%)";
}

homeClick.addEventListener("click", () => {
  homeOne.style.display = "flex";
  teamOne.style.display = "none";
  aboutOne.style.display = "none";
  productOne.style.display = "none";  
});

aboutClick.addEventListener("click", () => {
  homeOne.style.display = "none";
  teamOne.style.display = "none";
  aboutOne.style.display = "flex";
  productOne.style.display = "none";
});

ProductClick.addEventListener("click", () => {
  homeOne.style.display = "none";
  teamOne.style.display = "none";
  aboutOne.style.display = "none";
  productOne.style.display = "flex";
});

teamClick.addEventListener("click", () => {
  homeOne.style.display = "none";
  teamOne.style.display = "flex";
  aboutOne.style.display = "none";
  productOne.style.display = "none";
});
