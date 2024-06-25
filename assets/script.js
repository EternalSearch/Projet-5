const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]
const nbSlides = slides.length; 
let dotsDiv = document.querySelector(".dots"); 
for (i = 0; i < nbSlides; i++) {
    if (i == 0) {
        dotsDiv.innerHTML = "<div class='dot dot_selected'></div>";
    } else {
        dotsDiv.innerHTML += "<div class='dot'></div>";
    }
}
let dotNumber = 0; 
let bannerImage = document.querySelector(".banner-img"); 
let bannerText = document.querySelector("#banner p");
function slideChangePlus() { 
    if (dotNumber < nbSlides - 1) { 
        dotNumber++;
        document.querySelector(".dot_selected").classList.remove("dot_selected");
       
        document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
  
        bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
       
        bannerText.innerHTML = slides[dotNumber].tagLine;
        
    } else { 
        dotNumber = 0;
        document.querySelector(".dot_selected").classList.remove("dot_selected");
        document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
        bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
        bannerText.innerHTML = slides[dotNumber].tagLine;
    }
}
function slideChangeMinus() {
    if (dotNumber > 0) {
        dotNumber--;
        document.querySelector(".dot_selected").classList.remove("dot_selected");
        document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
        bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
        bannerText.innerHTML = slides[dotNumber].tagLine;
    } else {
        dotNumber = nbSlides - 1;
        document.querySelector(".dot_selected").classList.remove("dot_selected");
        document.querySelectorAll(".dot")[dotNumber].classList.add("dot_selected");
        bannerImage.src = "./assets/images/slideshow/" + slides[dotNumber].image;
        bannerText.innerHTML = slides[dotNumber].tagLine;
    }
}
let leftArrow = document.querySelector(".arrow_left"); 
let rightArrow = document.querySelector(".arrow_right"); 
rightArrow.addEventListener("click", slideChangePlus); 
leftArrow.addEventListener("click", slideChangeMinus);