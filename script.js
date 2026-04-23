// Smooth scroll
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Button click demo
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Welcome 🚀");
  });
});