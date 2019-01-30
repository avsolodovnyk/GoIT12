"use strict";
const cont = document.querySelector(".cont");
const block = document.querySelector(".block");

cont.addEventListener("click", () => block.classList.toggle("transform"));
