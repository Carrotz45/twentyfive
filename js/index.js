var menuButton = document.getElementById("menu_button");
var menu = document.getElementById("nav");

function showMenu(){
    menu.classList.toggle('OnScreen')
}

menuButton.addEventListener('click', showMenu());