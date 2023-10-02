import ScrollReveal from 'scrollreveal';


function scrollRevealFunc() {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
    });


    ScrollReveal().reveal(`.header, .partners`, {
        origin: 'top',
    });

    ScrollReveal().reveal(`.discover__picture-hint, .discover__title`, {
        origin: 'left',
    });

    ScrollReveal().reveal(`.discover__picture-scroll, .discover__text `, {
        origin: 'right',
    });

    ScrollReveal().reveal(` .discover__picture-img `, {
        origin: 'bottom',
    });
}
export default scrollRevealFunc;
