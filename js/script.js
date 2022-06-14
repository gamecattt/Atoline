document.querySelector("header .top .call").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".pop-up").style.display = "block";
});

document.querySelector(".pop-up .title a").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".pop-up").style.display = "none";
});

document.querySelector(".overlay").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".pop-up").style.display = "none";
});

let catalog_btn = document.querySelector("header .nav-container > a:first-child");
catalog_btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (catalog_btn.classList.contains("active")) {
        catalog_btn.classList.remove("active");
    } else {
        catalog_btn.classList.add("active");
    }
});

// slider
const swiper = new Swiper("section.products .slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".products .slider-next",
        prevEl: ".products .slider-prev",
    },
});
