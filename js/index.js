var menuButton = document.querySelector(".menu_button");
var menu = document.querySelector("nav");

function showMenu(){
    menu.classList.toggle('OnScreen')
}

menuButton.addEventListener('click', showMenu());