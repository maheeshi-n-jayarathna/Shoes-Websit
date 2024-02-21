// script.js
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    updateButtonColor();
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    updateButtonColor();
}

document.querySelectorAll('.featured-image-1').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 => {
    image_2.addEventListener('click', () => {
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
    image_3.addEventListener('click', () => {
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});

document.querySelectorAll('.featured-image-4').forEach(image_4 => {
    image_4.addEventListener('click', () => {
        var src = image_4.getAttribute('src');
        document.querySelector('.big-image-4').src = src;
    });
});

function updateButtonColor() {
    var activeSlide = document.querySelector('.slide-container.active');
    console.log(activeSlide)
    if (activeSlide) {
        var addToCartBtn = activeSlide.querySelector('a');
        if (addToCartBtn) {
            var primaryColor = window.getComputedStyle(addToCartBtn).getPropertyValue('border-top-color');
            document.getElementById('prev').style.color = '#fff';
            document.getElementById('prev').style.backgroundColor = primaryColor;
            document.getElementById('next').style.color = '#fff';
            document.getElementById('next').style.backgroundColor = primaryColor;

        }
    }
}

updateButtonColor();
