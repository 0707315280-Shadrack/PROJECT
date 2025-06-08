
const testimonials = [
  {
    text: `"ShadSmart made it so easy to find the right mentorship for me. The sessions have truly transformed my mindset, and I feel more in control of my learning than ever before!"`,
    author: "— Anna R., 19",
    bg: "#FFF7E0",
    color: "#183a37"
  },
  {
    text: `"I was struggling with revision and motivation, but the ShadSmart study groups and resources have helped me regain balance. I finally feel confident about my education!"`,
    author: "— Mark S., 22",
    bg: "#183a37",
    color: "#fff"
  },
  {
    text: `"The CBC resources are so practical and easy to follow. I improved my grades and even enjoyed the process!"`,
    author: "— Faith K., 17",
    bg: "#FFD600",
    color: "#183a37"
  },
  {
    text: `"The TVET guides and webinars opened new career paths for me. ShadSmart is a game-changer!"`,
    author: "— Brian O., 24",
    bg: "#f8f8f6",
    color: "#183a37"
  }
];


let current = 0;

function renderTestimonials() {
  const cards = [];
  // Show two cards side by side on large, stacked on smaller screens
  for (let i = 0; i < 2; i++) {
    const idx = (current + i) % testimonials.length;
    const t = testimonials[idx];
    cards.push(`
      <article class="testimonial-card" tabindex="0">
        <p>${t.text}</p>
        <footer class="testimonial-author">${t.author}</footer>
      </article>
    `);
  }
  document.getElementById('testimonials-cards').innerHTML = cards.join('');
}

renderTestimonials();

document.getElementById('arrow-left').addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  renderTestimonials();
});

document.getElementById('arrow-right').addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  renderTestimonials();
};

















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
  