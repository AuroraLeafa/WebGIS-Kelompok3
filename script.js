const nav = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 200) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
};
