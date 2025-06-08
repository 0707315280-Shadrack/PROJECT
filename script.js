const testimonials = [
  {
    text: "Participating in the Shadsmart contest motivated me to study harder and discover new learning materials. I gained confidence in my CBC subjects and improved my grades!",
    author: "— Mercy N., Student"
  },
  {
    text: "The Shadsmart contest challenged me to apply my TVET skills in real scenarios. It was exciting, and the resources provided made revision so much easier.",
    author: "— Brian K., TVET Trainee"
  },
  {
    text: "Thanks to the Shadsmart contest, I accessed revision papers and notes that helped me prepare for my exams effectively. I highly recommend it to other students.",
    author: "— Faith O., High School Student"
  },
  {
    text: "Winning a prize in the Shadsmart contest was a great achievement! The platform’s learning materials and supportive community made all the difference.",
    author: "— Kelvin M., Contest Winner"
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