// Carousel functionality
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let isAnimating = false;
let carouselInterval;

function showSlide(nextIndex, direction = 1) {
  if (isAnimating || nextIndex === currentSlide) return;
  isAnimating = true;
  const current = slides[currentSlide];
  const next = slides[nextIndex];

  // Remove all animation classes
  slides.forEach(slide => {
    slide.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right', 'active');
  });

  // Animate out current slide
  if (direction === 1) {
    current.classList.add('slide-out-left');
    next.classList.add('slide-in-right');
  } else {
    current.classList.add('slide-out-right');
    next.classList.add('slide-in-left');
  }

  // Activate next slide after animation
  setTimeout(() => {
    slides.forEach((slide, i) => {
      slide.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right', 'active');
      if (i === nextIndex) slide.classList.add('active');
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === nextIndex);
    });
    currentSlide = nextIndex;
    isAnimating = false;
  }, 500);
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next, 1);
}

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 10000);
}

function stopCarousel() {
  clearInterval(carouselInterval);
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    stopCarousel();
    showSlide(i, i > currentSlide ? 1 : -1);
    startCarousel();
  });
});

// Initial state
slides.forEach((slide, i) => {
  slide.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right', 'active');
  if (i === 0) slide.classList.add('active');
});
indicators[0].classList.add('active');
currentSlide = 0;
startCarousel();

// IDEAS HOME horizontal carousel scroll
const ideasHomeCarousel = document.getElementById('ideasHomeCarousel');
const ideasHomePrev = document.getElementById('ideasHomePrev');
const ideasHomeNext = document.getElementById('ideasHomeNext');

if (ideasHomeCarousel && ideasHomePrev && ideasHomeNext) {
  ideasHomePrev.addEventListener('click', () => {
    ideasHomeCarousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
  ideasHomeNext.addEventListener('click', () => {
    ideasHomeCarousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// Shop Now button
const shopNowBtn = document.getElementById('shopNowBtn');
if (shopNowBtn) {
  shopNowBtn.addEventListener('click', function() {
    alert('Redirecting to shop!');
    // You can replace this with actual navigation logic
  });
} 