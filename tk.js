const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}


const sr = ScrollReveal ({
    distance: '50px',
    duration: 1800,
    delay: 250,
    reset: true,
}); 

sr.reveal('.hero-text h1, .about-text h2',{origin: 'top'});
sr.reveal('.about-text p, .pengajar-center h5, .kartu-tutor, .end-icons',{origin: 'bottom'});
sr.reveal('.hero-text p, .pengajar-center h2, .footer',{origin: 'left'});
sr.reveal('.about-img, .about-img2',{origin: 'right'});



