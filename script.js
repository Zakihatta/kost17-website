// script.js

// Fungsi untuk membuat header menjadi 'sticky' dengan efek saat di-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

    // Tampilkan tombol setelah scroll 500px ke bawah
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

const myLightbox = GLightbox({
    selector: '.gallery-item',
    touchNavigation: true, // Mengaktifkan swipe di mobile
    loop: true, // Galeri akan berulang dari akhir ke awal
    width: '90vw', // Lebar lightbox 90% dari viewport
    height: '80vh' // Tinggi lightbox 80% dari viewport
});

// Inisialisasi Swiper.js untuk Slider Ulasan
const reviewSwiper = new Swiper('.review-swiper', {
    // Konfigurasi
    direction: 'horizontal',
    loop: true, // Slider akan berulang
    
    // Berapa banyak slide yang terlihat
    slidesPerView: 1, // Default di mobile
    spaceBetween: 30, // Jarak antar slide

    // Konfigurasi pagination dots
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Dots bisa diklik
    },

    // Pengaturan Responsif (Breakpoints)
    // Ini akan mengubah jumlah slide per tampilan di layar besar
    breakpoints: {
        // Saat lebar layar >= 768px (Tablet)
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // Saat lebar layar >= 1024px (Desktop)
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// FUNGSI UNTUK MENU MOBILE (BARU)
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Toggle menu saat tombol diklik
menuToggle.addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
});

// Tutup menu saat link di dalam menu mobile diklik
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});