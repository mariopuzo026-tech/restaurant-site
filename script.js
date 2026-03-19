// ===== NAVIGATION =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ===== HERO SLIDER =====
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.dotsContainer = document.querySelector('.slider-dots');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.showSlide(0);
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.startAutoPlay();
    }
    
    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => this.showSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    showSlide(index) {
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;
        
        this.slides.forEach(slide => slide.classList.remove('active'));
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        
        this.slides[index].classList.add('active');
        document.querySelectorAll('.dot')[index].classList.add('active');
        this.currentSlide = index;
    }
    
    prevSlide() {
        this.showSlide(this.currentSlide - 1);
        this.resetAutoPlay();
    }
    
    nextSlide() {
        this.showSlide(this.currentSlide + 1);
        this.resetAutoPlay();
    }
    
    startAutoPlay() {
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    resetAutoPlay() {
        clearInterval(this.slideInterval);
        this.startAutoPlay();
    }
}

// ===== MENU DATA =====
const menuData = [
    {
        id: 1,
        name: 'ხაჭაპური აჭარული',
        category: 'starters',
        description: 'ტრადიციული ქართული ხაჭაპური კვერცხით, კარაქით და ყველით',
        price: '18 ₾',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600'
    },
    {
        id: 2,
        name: 'ოჯახური ხინკალი',
        category: 'main',
        description: '10 ცალი წვნიანი ხინკალი საქონლის ხორცით',
        price: '22 ₾',
        image: 'https://images.unsplash.com/photo-1624371440800-c70f0e1102e0?w=600'
    },
    {
        id: 3,
        name: 'შოთის პური',
        category: 'starters',
        description: 'ტრადიციული ქართული პური, ხრაშუნა ქერქით',
        price: '4 ₾',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600'
    },
    {
        id: 4,
        name: 'ჩაქაფული',
        category: 'main',
        description: 'საქონლის ხორცი ახალი მწვანილით და ქართული სანელებლებით',
        price: '25 ₾',
        image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=600'
    },
    {
        id: 5,
        name: 'ნაპოლეონი',
        category: 'desserts',
        description: 'ტრადიციული ნამცხვარი ნაზი კრემით',
        price: '8 ₾',
        image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=600'
    },
    {
        id: 6,
        name: 'საფერავი',
        category: 'wine',
        description: 'ქართული წითელი მშრალი ღვინო, 0.75ლ',
        price: '35 ₾',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600'
    }
];

// ===== GALLERY DATA =====
const galleryData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
        title: 'რესტორანი'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
        title: 'კერძები'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
        title: 'ინტერიერი'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1552566624-52f8b3ae5fd5?w=600',
        title: 'შეფ-მზარეული'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
        title: 'ღვინის მარანი'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600',
        title: 'ზაფხულის ტერასა'
    }
];

// ===== BLOG DATA =====
const blogData = [
    {
        id: 1,
        title: 'ქართული სამზარეულოს საიდუმლოებები',
        excerpt: 'აღმოაჩინეთ ტრადიციული ქართული კერძების მომზადების საიდუმლოებები ჩვენი შეფ-მზარეულისგან...',
        date: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600'
    },
    {
        id: 2,
        title: 'ღვინის დეგუსტაციის გზამკვლევი',
        excerpt: 'როგორ სწორად დავაგემოვნოთ ღვინო? რას უნდა მივაქციოთ ყურადღება? ყველაფერი ღვინის შესახებ...',
        date: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600'
    },
    {
        id: 3,
        title: 'სეზონური პროდუქტები',
        excerpt: 'ზამთრის სეზონის საუკეთესო პროდუქტები და მათი გამოყენება ქართულ სამზარეულოში...',
        date: '2024-01-05',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600'
    }
];

// ===== RENDER FUNCTIONS =====
function renderMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
                <span class="menu-item-category">${item.category === 'starters' ? 'სასტარტო' : item.category === 'main' ? 'მთავარი' : item.category === 'desserts' ? 'დესერტი' : 'ღვინო'}</span>
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <button class="menu-item-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = galleryData.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

function renderBlog() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = blogData.map(item => `
        <article class="blog-card glass-card">
            <div class="blog-image">
                <img src="${item.image}" alt="${item.title}">
                <div class="blog-date">
                    <i class="far fa-calendar"></i>
                    ${new Date(item.date).toLocaleDateString('ka-GE')}
                </div>
            </div>
            <div class="blog-content">
                <h3>${item.title}</h3>
                <p>${item.excerpt}</p>
                <a href="#" class="read-more">
                    წაიკითხე მეტი
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');
}

// ===== MENU FILTER =====
function initMenuFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ===== STATS COUNTER =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.dataset.target);
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 30);
                
                observer.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
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
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize slider
    if (document.querySelector('.hero-slider')) {
        new HeroSlider();
    }
    
    // Render data
    renderMenu(menuData);
    renderGallery();
    renderBlog();
    
    // Initialize functions
    initMenuFilter();
    initStatsCounter();
    initBackToTop();
    initSmoothScroll();
    
    // Mobile menu close on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});