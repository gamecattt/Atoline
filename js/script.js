// call popup
const callBtn = document.querySelector("header .top .call"),
    overlay = document.querySelector(".overlay"),
    popup = document.querySelector(".pop-up"),
    popupClose = document.querySelector(".pop-up .title a");

callBtn.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "block";
    popup.style.display = "block";
});

popupClose.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
});

overlay.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
});

// catalog dropdown
const catalogBtn = document.querySelector("header nav > a:first-child");
catalogBtn.addEventListener("click", function (e) {
    e.preventDefault();
    catalogBtn.classList.toggle("active");
});

const catalogDropdown = document.querySelector(".drop-down-list");
document.addEventListener("click", function (event) {
    const isClickInside = catalogDropdown.contains(event.target) || catalogBtn.contains(event.target);
    if (!isClickInside) {
        header.classList.remove("mobile");
        catalogBtn.classList.remove("active");
    }
});

// header menu
const menuBtn = document.querySelector("header nav .menu"),
    header = document.querySelector("header");
menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    header.classList.add("mobile");
});

const menuClose = document.querySelector("header .close");
menuClose.addEventListener("click", function (e) {
    e.preventDefault();
    header.classList.remove("mobile");
    catalogBtn.classList.remove("active");
});

// sliders
const productsSlider = new Swiper(".products .slider", {
    width: 600,
    spaceBetween: 30,
    navigation: {
        nextEl: ".products .slider-next",
        prevEl: ".products .slider-prev",
    },
});

const objectsSlider = new Swiper(".objects .slider", {
    width: 600,
    spaceBetween: 30,
    navigation: {
        nextEl: ".objects .slider-next",
        prevEl: ".objects .slider-prev",
    },
});

const staffSlider = new Swiper(".staff .slider", {
    width: 400,
    spaceBetween: 40,
    navigation: {
        nextEl: ".staff .slider .next-arr",
        prevEl: ".staff .slider .prev-arr",
    },
});

const thumbsSlider = new Swiper(".product-card-slider .thumbs", {
    spaceBetween: 5,
    slidesPerView: 3,
    freeMode: true,
    autoHeight: true,
    watchSlidesProgress: true,
    direction: "vertical",
    navigation: {
        nextEl: ".product-card-slider .thumbs-wrapper a.next",
        prevEl: ".product-card-slider .thumbs-wrapper a.prev",
    },
    breakpoints: {
        1500: {
            slidesPerView: 5,
        },
    },
});

const mainImgSlider = new Swiper(".product-card-slider .main-img", {
    slidesPerView: 1,
    thumbs: {
        swiper: thumbsSlider,
    },
});

const productItemSliders = document.querySelectorAll(".products-list__item .images");
productItemSliders.forEach(function (productItemSlider) {
    new Swiper(productItemSlider, {
        slidesPerView: 1,
        pagination: {
            el: productItemSlider.querySelector(".swiper-pagination"),
        },
        navigation: {
            nextEl: productItemSlider.querySelector(".next-arr"),
            prevEl: productItemSlider.querySelector(".prev-arr"),
        },
    });
});

// selects
const customSelects = document.querySelectorAll(".cart-items_item select");
customSelects.forEach(function (customSelect) {
    new CustomSelect({
        elem: customSelect,
    });
});
