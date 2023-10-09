import React, { ReactNode } from "react";
// import { renderToStaticMarkup } from "react-dom/server";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "./swiper.scss";

interface Props {
  items: ReactNode[];
  className?: string;
  slidesCentered?: boolean;
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  navigation?:
    | {
        prev: { className: string; btn: ReactNode };
        next: { className: string; btn: ReactNode };
        className: string;
      }
    | undefined;
}

const Slider = ({
  items,
  className = "",
  slidesCentered = false,
  loop = false,
  spaceBetween = 25,
  slidesPerView = "auto",
  navigation = undefined,
}: Props) => {
  const slides: ReactNode[] = items.map((slide, index) => {
    return <SwiperSlide key={index}>{slide}</SwiperSlide>;
  });

  let customProps = {};

  if (navigation) {
    customProps = {
      modules: [Navigation],
      navigation: {
        prevEl: "." + navigation!.prev.className,
        nextEl: "." + navigation!.next.className,
      },
    };
  }

  return (
    <div className={className}>
      <Swiper
        {...customProps}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={slidesCentered}
        loop={loop}
      >
        {slides}
        {slides}

        {navigation && (
          <div className={navigation.className}>
            {navigation.prev.btn}
            {navigation.next.btn}
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
