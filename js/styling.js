    document.addEventListener('DOMContentLoaded', function () {
      const sections = document.querySelectorAll('section');

      function checkScroll() {
        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
          }
        });
      }

      window.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      checkScroll(); // Trigger on page load
    });