import ScrollReveal from 'scrollreveal';

ScrollReveal({
    distance: '80px',
    duration: 2000,
});

function scrollRevealFunc() {
    ScrollReveal().reveal(`.header, .partners`, {
        distance: '0px',
        opacity: 0,
    });

    ScrollReveal().reveal(`.discover__picture-hint`, {
        origin: 'top',
    });

    ScrollReveal().reveal(`.discover__desc`, {
        origin: 'left',
    });

    ScrollReveal().reveal(
        `.discover__picture-img`,
        {
            origin: 'right',
        }
    );

    ScrollReveal().reveal(`.discover__picture-scroll`, {
        origin: 'bottom',
    });
}
export default scrollRevealFunc;
