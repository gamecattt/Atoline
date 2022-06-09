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

let catalog_btn = document.querySelector("header nav > a:first-child");
catalog_btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (catalog_btn.classList.contains("active")) {
        catalog_btn.classList.remove("active");
    } else {
        catalog_btn.classList.add("active");
    }
});
