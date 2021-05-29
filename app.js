const slides = document.querySelectorAll(".slide");
const carousel= document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

const SLIDES_COUNT = slides.length;

let current_slide = 0;

left.addEventListener("click", () => {
    current_slide++;
    if(current_slide > SLIDES_COUNT - 1){
        current_slide = 0;
    }

    updateCarousel();
});



right.addEventListener("click", () => {
     current_slide--;
     if(current_slide < 0 ){
         current_slide = SLIDES_COUNT - 1;
     }

     updateCarousel();
});

function updateCarousel(){
    carousel.style.transform = `translateX(${-current_slide * slides[0].offsetwidth}px)`;
}