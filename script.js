'use strict';

let button = document.querySelector('header > img.but');
let menu = document.querySelector('header > nav.links');

let active = false;

button.addEventListener("click", function() {

    if (!active) {
        menu.classList.add('active');
        active = true;
    } else {
        menu.classList.remove('active');
        active = true;
    }
});