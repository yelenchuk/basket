const { query } = require("express");

window.onload = function () {
    let swiper = new Swiper(".swiper", {
        pagination: {
            el: '.swiper-pagination',
        },
    });
    console.log(swiper.activeIndex);

    const nextBtn = document.getElementById("nextbtn");
    console.log(nextBtn);
};