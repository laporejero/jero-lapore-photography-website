let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

// Next/Prev controls
document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

// Auto slideshow (optional, every 5s)
function autoShow() {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoShow, 5000);
}

// Init
showSlide(slideIndex);
autoShow();