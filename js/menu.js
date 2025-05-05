const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector("nav");

menuButton.addEventListener('click', showMenu);

function showMenu(){
    menu.classList.toggle('OnScreen')
}