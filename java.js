/* Dark Mode */
function toggleDark() {
    console.log("toggleDark called");
    document.body.classList.toggle("dark-mode");
}
/* Dark Mode */

function changeColor(element) {
    console.log("changeColor called");
    element.classList.toggle("green");
}

function changeColor2(element) {
    console.log("changeColor2 called");
    element.classList.toggle("white");
}

const video = document.querySelector(".video");
video.volume = 0.25;