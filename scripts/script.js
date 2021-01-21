/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

"use strict" ;

console.log('Im begging you please work');

var menuButton = document.querySelector('#nav-button') ;

var navBar = document.querySelector('#nav-bar');

function toggleMenu() {
    navBar.classList.toggle('togglenav');
}

menuButton.addEventListener('click', toggleMenu);