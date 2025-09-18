document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.arrow.prev');
    const nextButton = document.querySelector('.arrow.next');
    const currentSlide = document.querySelector('.current');
    const totalSlides = document.querySelector('.total');
    
    let current = 2;
    const total = 2;
    
    const updateSlideNumber = () => {
        currentSlide.textContent = current;
        totalSlides.textContent = total;
    };
    
    prevButton.addEventListener('click', () => {
        current = current === 1 ? total : current - 1;
        updateSlideNumber();
    });
    
    nextButton.addEventListener('click', () => {
        current = current === total ? 1 : current + 1;
        updateSlideNumber();
    });
});

// FAQ Functionality
document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faqItem => {
            faqItem.classList.remove('active');
            const icon = faqItem.querySelector('i');
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            const icon = header.querySelector('i');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    });
});

// Testimonial Slider
const testimonialSlider = {
    currentSlide: 0,
    slides: document.querySelectorAll('.testimonial-card'),
    
    init() {
        const prevBtn = document.querySelector('.nav-arrow.prev');
        const nextBtn = document.querySelector('.nav-arrow.next');
        
        prevBtn.addEventListener('click', () => this.navigate('prev'));
        nextBtn.addEventListener('click', () => this.navigate('next'));
    },
    
    navigate(direction) {
        if (direction === 'next') {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        } else {
            this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
        }
        
        this.updateSlider();
    },
    
    updateSlider() {
        this.slides.forEach((slide, index) => {
            if (index === this.currentSlide) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
};

// Initialize the testimonial slider
document.addEventListener('DOMContentLoaded', () => {
    testimonialSlider.init();
});
