const second_swiper = new Swiper('.collection-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
        0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        }
    }
});