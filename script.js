const testimonials = [
  {
    text: `"Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!"`,
    author: "— Anna R., 32"
  },
  {
    text: `"I was struggling with stress and anxiety, but the mindfulness programs at Solus have helped me find balance. I finally feel confident prioritizing my mental well-being."`,
    author: "— Mark S., 41"
  },
  {
    text: `"The support and guidance I received changed my life. ShadSmart’s approach is compassionate and effective."`,
    author: "— Leah T., 28"
  },
  {
    text: `"Thanks to ShadSmart, I’ve developed skills that help me manage daily challenges with confidence and calm."`,
    author: "— David W., 35"
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
  