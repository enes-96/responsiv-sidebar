"use strict";
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");
menuBtn.addEventListener("click", function () {
  if (sideBar.style.width == "12vw") {
    sideBar.style.width = "0vw";
  } else {
    sideBar.style.width = "12vw";
  }
});

closeBtn.addEventListener("click", () => {
  sideBar.style.width = "0vw";
});
