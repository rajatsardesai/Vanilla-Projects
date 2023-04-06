/* Code for slider */

const slides = document.querySelectorAll('.slides');
let counter = 0;

// Iterating through slides to add absolute left values
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Go to previous slide
const goPrev = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = slides.length - 1;
    }
    slideImages();
};

// Go to next slide
const goNext = () => {
    if (counter < (slides.length - 1)) {
        counter++;
    } else {
        counter = 0;
    }
    slideImages();
};

// Iterating through slides to add translateX values
const slideImages = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};