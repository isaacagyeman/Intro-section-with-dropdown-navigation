var firsttab = document.querySelector('.Features-dropdown'); // This is the Features tab
var secondtab = document.querySelector('.Company-dropdown'); // This is the Company tab
var droplist = document.querySelector('.Features-dropdown-content'); // hidden features tab dropdown menu
var droplist2 = document.querySelector('.dropdown-content-second'); // hidden company tab dropdown menu

//This is the event listerner implementation for the responsive mobile hamburger menu
var menu = document.querySelector('#menu-icon');
var sidebarmenu = document.querySelector('.side-barmenu');
// This is the close icon of the mobile menu
var closemenu = document.querySelector('#menu-icon-close');
menu.addEventListener('click',showmenu);
closemenu.addEventListener('click',hidemenu);

var featureDropdown = document.querySelector('.mobilemenuFeatures-dropdown');
var companyDropdown = document.querySelector('.mobileMenu-company');
// This is the expanded menu
var featureExpanded = document.querySelector('.mobileMenu-features-expanded');
var companyExpanded = document.querySelector('.company-expanded');

var downArrow = document.querySelector('.down-icon').cont;
 
firsttab.addEventListener('mouseover', showel1);
secondtab.addEventListener('mouseover', showel2);

firsttab.addEventListener('mouseout', hideElement1);
secondtab.addEventListener('mouseout',hideElement2);

featureDropdown.addEventListener('click',expandMenu);
companyDropdown.addEventListener('click',expandMenu2);


function showel1(){
    droplist.style.display = 'block';
}
function showel2(){
    droplist2.style.display ='block';
}
function hideElement1(){
    droplist.style.display = 'none';
}
function hideElement2(){
    droplist2.style.display = 'none';
}

function showmenu(){
    sidebarmenu.style.display ='block';
}

function hidemenu(){
    sidebarmenu.style.display = 'none';
}

function expandMenu(){
    featureExpanded.style.display = 'block'; 
}

function expandMenu2(){
    companyExpanded.style.display = 'block';
}


