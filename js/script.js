let a = document.querySelector("#NavLinks");
function hideMenu() {
    a.style.right = "-220px"
}
function showMenu() {
    a.style.right = "0"
}


let typed = new Typed(".auto-type", {
    strings: ["To Your Fashion!", "To Your Attitude", "To Your Look"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// swiper js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

AOS.init();


