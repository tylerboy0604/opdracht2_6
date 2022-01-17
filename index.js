let slideIndex = 0;


function slideshowSetUp() {
    document.getElementById('slideshow-next').addEventListener('click', slideshowNext);
    document.getElementById('slideshow-prev').addEventListener('click', slideshowPrev);

}


window.addEventListener('load', slideshowSetUp);


function slideshowNext() { 
    let slides = document.getElementsByClassName('slide');



    slides[slideIndex].classList.remove('visible');
    slideIndex += 1;
    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add('visible');
}






function slideshowPrev() {

}