'use strict';
/**
 * navbar variable
 */

const navToggleBtn = document.querySelector("[links]");
const header = document.querySelector("[navbar]");

navToggleBtn.addEventListener("click", function (){
    header.classList.toggle("active")
})