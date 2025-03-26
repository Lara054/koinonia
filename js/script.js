$(window).on("load", function () {
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
  
