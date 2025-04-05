$(window).on("load", function () {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".hero").addClass("show");

  $(".fade-item").each(function (i) {
    const $this = $(this);
    setTimeout(function () {
      $this.addClass("show");
    }, i * 800);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
});

