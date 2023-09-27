import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const Swiper = new Swiper('.swiper', {
    slidesPerView: 4,


    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});