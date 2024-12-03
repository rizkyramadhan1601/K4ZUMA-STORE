const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

// Event Listener untuk menampilkan/menyembunyikan menu
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});