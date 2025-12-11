"use strict";


//function for opening/closing nav-menu
//elements
const openBtn = document.getElementById("open-menu");


//eventlisteners
openBtn.addEventListener('click', toggleMenu);

// display/hide the navigationmenu
function toggleMenu() {
   const navMenuEl = document.getElementById("main-nav");

   let style = window.getComputedStyle(navMenuEl)

    //check if the menu is open or closed
   if (style.display === "none") {
       navMenuEl.style.display = "block";
   } else {
       navMenuEl.style.display = "none";
   }
}