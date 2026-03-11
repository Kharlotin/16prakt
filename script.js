var slides;
var current = 0;
var timer = null;

window.onload = function(){

    slides = document.getElementsByClassName("slide");

};

/* ПОКАЗ СЛАЙДА */
function showSlide(index){

    slides[current].style.display = "none";

    current = index;

    if(current >= slides.length){
        current = 0;
    }

    if(current < 0){
        current = slides.length - 1;
    }

    slides[current].style.display = "block";
}

/* АВТОСЛАЙДЕР */
function startSlideshow(){

    stopSlideshow();   // защита от повторного запуска

    timer = setInterval(function(){

        showSlide(current + 1);

    }, 2000);
}

/* ОСТАНОВКА */
function stopSlideshow(){

    clearInterval(timer);

}

/* СЛЕДУЮЩАЯ */
function nextSlideManual(){

    stopSlideshow();
    showSlide(current + 1);

}

/* ПРЕДЫДУЩАЯ */
function prevSlide(){

    stopSlideshow();
    showSlide(current - 1);

}