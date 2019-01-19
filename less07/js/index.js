"use strict";
const modal = document.querySelector(".modal-container");
const btn = document.querySelectorAll("button");

btn.forEach(el => {
  el.addEventListener("click", () => modal.classList.toggle("block"));
});
