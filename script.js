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






const testimonials = [
    {
      text: `"Participating in the Shadsmart contest motivated me to study harder and discover new learning materials. I gained confidence in my CBC subjects and improved my grades!"`,
      author: "— Mercy N., Student"
    },
    {
      text: `"The Shadsmart contest challenged me to apply my TVET skills in real scenarios. It was exciting, and the resources provided made revision so much easier."`,
      author: "— Brian K., TVET Trainee"
    },
    {
      text: `"Thanks to the Shadsmart contest, I accessed revision papers and notes that helped me prepare for my exams effectively. I highly recommend it to other students."`,
      author: "— Faith O., High School Student"
    },
    {
      text: `"Winning a prize in the Shadsmart contest was a great achievement! The platform’s learning materials and supportive community made all the difference."`,
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
  
  
  const faqData = [
    {
      q: "How do I book a ShadSmart mentorship session?",
      a: "You can book a session through your ShadSmart dashboard. Simply log in, select your preferred mentor, and choose a time slot that works for you."
    },
    {
      q: "Are online sessions available?",
      a: "Yes, ShadSmart offers both online and in-person sessions for maximum flexibility and convenience."
    },
    {
      q: "What's the difference between CBC and TVET guidance?",
      a: "CBC guidance focuses on Competency-Based Curriculum for school learners, while TVET guidance is tailored for technical and vocational education and training."
    },
    {
      q: "Do I need a subscription to access resources?",
      a: "Many resources are free, but a subscription unlocks premium mentorship, workshops, and advanced study materials."
    },
    {
      q: "Can I switch mentors if I don’t feel the right connection?",
      a: "Absolutely. ShadSmart encourages you to find the best fit—just contact support or use the switch option in your dashboard."
    },
    {
      q: "Is my information and session history kept confidential?",
      a: "Yes, your privacy is our top priority. All information and session history are securely stored and never shared without your consent."
    }
  ];
  
  const faqList = document.getElementById('faq-list');
  
  faqData.forEach((item, idx) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
  
    const questionBtn = document.createElement('button');
    questionBtn.className = 'faq-question';
    questionBtn.type = 'button';
    questionBtn.setAttribute('aria-expanded', 'false');
    questionBtn.setAttribute('aria-controls', `faq-answer-${idx}`);
    questionBtn.innerHTML = `
      <span>${item.q}</span>
      <span class="faq-icon" aria-hidden="true">+</span>
    `;
  
    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-answer';
    answerDiv.id = `faq-answer-${idx}`;
    answerDiv.style.display = 'none';
    answerDiv.textContent = item.a;
  
    questionBtn.addEventListener('click', () => {
      const open = faqItem.classList.toggle('open');
      answerDiv.style.display = open ? 'block' : 'none';
      questionBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  
    faqItem.appendChild(questionBtn);
    faqItem.appendChild(answerDiv);
    faqList.appendChild(faqItem);
  });
  
  
  
  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  