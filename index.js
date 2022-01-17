
function slideshowSetUp() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);

}


window.addEventListener('load', slideshowSetUp);


function slideshowNext() { 
    let slides = document.getElementsByClassName('slide');
    slides[0].style.opacity = 0;
    slides[1].style.opacity = 1;
}