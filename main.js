/* Hero Section */
const words = [
    "GAME",
    "WEBSITE",
    "MUSIC",
    "ANIMATION",
    "DESIGN",
    "COMIC",
    "ADVERTISING",
    "FILM",
    "MUSIC VIDEO",
    "EVENT"
  ];
     
  const dynamicWord = document.getElementById("dynamic-word");
  let index = 0;

  function updateWord() {
    dynamicWord.textContent = words[index];
    index = (index + 1) % words.length;
  }

  setInterval(updateWord, 1000);

/* Our Projects */
class ProjectCarousel {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 5;
        this.cards = document.querySelectorAll('.project-card');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
                
        this.init();
    }
            
    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
                
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
                
        // Auto-play
        this.startAutoPlay();
                
        // Pause on hover
        const carousel = document.querySelector('.carousel-container');
        carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
            
    updateCarousel() {
        this.cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next', 'hidden');
                    
            if (index === this.currentSlide) {
                card.classList.add('active');
            } else if (index === (this.currentSlide - 1 + this.totalSlides) % this.totalSlides) {
                card.classList.add('prev');
            } else if (index === (this.currentSlide + 1) % this.totalSlides) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden');
            }
        });
                
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
            
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
            
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }
            
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
            
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }
            
    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectCarousel();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});


// Meet The Teams
function goToStudio(studioName) {
    // Navigate to the respective studio HTML page
    const studioPages = {
        'flui-media': 'https://promedui.com/fashion-lifestyle_flui/',
        'icon': 'https://promedui.com/ip-medcon_icon/',
        'kuls-creative': 'https://promedui.com/adv_kuls/',
        'mosaic': 'https://promedui.com/ott-mi_mosaic/',
        'mvp-esports': 'https://promedui.com/esports_mvp/',
        'vote': 'https://promedui.com/digjur_vote/',
        'pixel-pals': 'https://promedui.com/animation-design_pixelpals/',
        'pojok-komik': 'https://promedui.com/comic-cartoon_pojokomik/',
        'orang-film': 'https://promedui.com/film_orangfilm/',
        'ox-lab': 'https://promedui.com/game_ox-laboratory/',
        'spice-studio': 'https://promedui.com/hci-ct_spice/',
        'wire-studio': 'https://promedui.com/music_wire/'
    };
            
    if (studioPages[studioName]) {
        window.location.href = studioPages[studioName];
    }
}