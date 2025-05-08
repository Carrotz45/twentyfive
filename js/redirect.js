const homeButton = document.querySelector(".home_button");
const galleryButton = document.querySelector(".gallery_button");
const aboutMeButton = document.querySelector(".about_button");

homeButton.addEventListener('click', home);
galleryButton.addEventListener('click', gallery);
aboutMeButton.addEventListener('click', aboutMe);

function home(){
    location.href = "../index.html";
    console.log("clicked");
}

function gallery(){
    location.href = "../gallery.html";
    console.log("clicked");
}

function aboutMe(){
    location.href = "../about_me.html";
    console.log("clicked");
}