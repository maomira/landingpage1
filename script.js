window.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax .background-image");
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
