//const { query } = require("express");

window.onload = function () {
    const swiper = new Swiper(".swiper", {
        pagination: {
            el: '.swiper-pagination',
        },
    });

    let nextBtn = document.querySelector("#nextbtn");
    nextBtn.addEventListener('click', () => {
        console.log(swiper.activeIndex, nextBtn);
        swiper.activeIndex++;
        swiper.slideTo(swiper.activeIndex);
        if (swiper.activeIndex == swiper.slides.length - 1) {
            nextBtn.innerHTML = 'Let’s Get Started';
            window.location.href = "/main.html";
        }
    });

};