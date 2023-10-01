import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});