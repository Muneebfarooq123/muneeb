  'use strict';
  /**
   * navbar variables
   */

  const menutogglebtn = document.querySelector("[data-navbar-toggle-btn]");
  const navbar = document.querySelector("[data-navbar]");
  /**
   * element toggle function
   */

  const elemToggleFunc = function (elem) (elem.classlist.toggle("Active"));

  menutogglebtn.addEventListener("click". function (elemToggleFunc(navbar) ));


  /**
   * go to top
   */

  const gototop = document.querySelector("[data-go=top]");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 800) {
        gotopbtn.classlist.add("active")
    } else{
        gotopbtn.classlist.remove("active")
    }

  })