document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector(".hero");

  hero.style.opacity = 0;
  hero.style.transform = "translateY(-20px)";
  hero.style.transition = "all 1.2s ease";

  setTimeout(() => {
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 150);


  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {

    reveals.forEach(section => {

      const windowHeight = window.innerHeight;
      const revealTop = section.getBoundingClientRect().top;

      if (revealTop < windowHeight - 80) {
        section.classList.add("active");
      }

    });

  }

  window.addEventListener("scroll", revealOnScroll);

});