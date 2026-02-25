window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#001a4d'; // Darker navy on scroll
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = '#002366'; // Original navy
        nav.style.boxShadow = 'none';
    }
};
