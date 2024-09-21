let cards = document.querySelectorAll(".card");
let mobile = document.querySelectorAll(".mobile");
const slider = document.querySelector(".slider-container");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 17,
      loop: true,
      slideClass: "card",
      slidesOffsetBefore: 16,
      // slidesOffsetAfter: 67,
      // centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      mousewheel: {
        enabled: true,
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
    // console.log(slider.classList);
  }
}
//  swiper-container-initialized
mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

let toogle = document.querySelector(".viewmore");
let but = document.querySelector(".icon-text");
let strelochka = document.querySelector(".icon-button");
let mass = [];
console.log(mass);
toogle.addEventListener("click", () => {
  if (window.innerWidth >= 768) {
    if (but.textContent == "Показать всё") {
      but.textContent = "Скрыть";
      strelochka.style.webkitTransform = "rotate(180deg)";
      console.log(getComputedStyle(mobile[8]).display);

      for (let i = 0; i < mobile.length; i++) {
        if (getComputedStyle(mobile[i]).display == "none") {
          mobile[i].style.display = "flex";
          mass.push(i);
        }
      }
    }
  } else if (but.textContent == "Скрыть") {
    but.textContent = "Показать всё";
    strelochka.style.webkitTransform = "rotate(0deg)";

    for (let i = 0; i < mass.length; i++) {
      mobile[mass[i]].style.display = "none";
      console.log(mass[i]);
    }
  }
});

// попытка
