const testimonials = [
  {
    text: "ShadSmart made it easy to find CBC notes for my grade. Now I feel confident in my exams and revision!",
    author: "— Mr.Thomas, Grade 8"
  },
  {
    text: "The TVET modules and past papers helped me pass my final exams. I recommend ShadSmart to all trainees.",
    author: "— Shadrack M., Electrical Engineering"
  },
  {
    text: "Thanks to ShadSmart, I could access revision resources anytime. My grades improved and I feel ready for the next level.",
    author: "— Faith O., Grade 6"
  },
  {
    text: "Academic coaching from ShadSmart gave me the study skills I needed for TVET success.",
    author: "— Brian O., Hospitality"
  }
];

let currentTestimonial = 0;

function renderTestimonials() {
  const cardsContainer = document.getElementById('testimonials-cards');
  if (!cardsContainer) return;
  cardsContainer.innerHTML = '';

  // Determine how many cards to show based on viewport width
  const cardsToShow = window.innerWidth >= 900 ? 2 : 1;

  for (let i = 0; i < cardsToShow; i++) {
    const idx = (currentTestimonial + i) % testimonials.length;
    const t = testimonials[idx];
    // Alternate card colors for visual interest
    let cardClass = 'testimonial-card';
    if (cardsToShow === 2) {
      cardClass += i === 0 ? ' card-yellow' : ' card-black';
    } else {
      cardClass += ' card-yellow';
    }

    const card = document.createElement('div');
    card.className = cardClass;
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Testimonial by ${t.author}`);

    card.innerHTML = `
      <div class="testimonial-quote">"${t.text}"</div>
      <div class="testimonial-author">${t.author}</div>
    `;
    cardsContainer.appendChild(card);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  renderTestimonials();

  // Re-render testimonials on window resize to adjust cards shown
  window.addEventListener('resize', () => {
    renderTestimonials();
  });

  const leftArrow = document.getElementById('arrow-left');
  const rightArrow = document.getElementById('arrow-right');

  if (leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      renderTestimonials();
    });

    rightArrow.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      renderTestimonials();
    });
  }
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle the clicked item
      if (!isOpen) item.classList.add('open');
    });
  });
});







// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  });
  