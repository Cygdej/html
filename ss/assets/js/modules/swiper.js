import Swiper from "swiper";

const ELEMENTS_SELECTOR = {
  slider: "[data-carousel]",
  sliderContainer: "[data-carousel-container]",
  sliderPrevBtn: "[data-carousel-prev]",
  sliderNextBtn: "[data-carousel-next]",
};

export default function () {
  const carousel = $("[data-carousel");

  carousel.each(function (i, el) {
    let obj = $(el),
      type = obj.data("carousel"),
      container = $(ELEMENTS_SELECTOR.sliderContainer, obj),
      prev = $(ELEMENTS_SELECTOR.sliderPrevBtn, obj),
      next = $(ELEMENTS_SELECTOR.sliderNextBtn, obj),
      params = {
        navigation: {
          prevEl: prev,
          nextEl: next,
        },
      },
      paramsCustom = {};

    if (type == "infinity") {
      paramsCustom = {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        breakpoints: {
          375: {
            spaceBetween: 5,
          },
          768: {
            spaceBetween: 20,
          },
          1280: {
            spaceBetween: 30,
          },
        },
      };
    } else if (type == "pagination") {
      paramsCustom = {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          375: {
            spaceBetween: 30,
            slidesPerView: "auto",
          },
          1280: {
            spaceBetween: 32,
            slidesPerView: "4",
          },
        },
      };
    }
    params = $.extend(params, paramsCustom);

    let instance = new Swiper(container, params);
  });
}
