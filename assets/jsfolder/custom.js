$(".app-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 1500,
  stagePadding: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});


  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

