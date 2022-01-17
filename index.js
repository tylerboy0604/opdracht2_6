
function slideshowSetUp() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);

}


window.addEventListener('load', slideshowSetUp);


function slideshowNext() { 
    let slides = document.getElementsByClassName('slide');
}