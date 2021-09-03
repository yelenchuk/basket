
function slider() {
    // Swiper slider
    const swiper = new Swiper(".swiper", {
        pagination: {
            el: '.swiper-pagination',
        },
    });

    let nextBtn = document.querySelector("#nextbtn");
    nextBtn.addEventListener('click', () => {
        swiper.activeIndex++;
        changeButtonText();
        swiper.slideTo(swiper.activeIndex);
        if (swiper.realIndex === swiper.slides.length - 1) {
            window.location.href = "/main.html";
        }
    });

    swiper.on('slideChange', function () {
        changeButtonText();
    });

    function changeButtonText() {
        console.log(swiper.activeIndex, swiper.realIndex);
        if (swiper.activeIndex !== swiper.slides.length - 1) {
            nextBtn.innerHTML = 'Next';
        } else {
            nextBtn.innerHTML = 'Let’s Get Started';
        }
    }
}

export default slider;