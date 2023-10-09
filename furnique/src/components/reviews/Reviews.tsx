import React, { ReactNode } from "react";
import { Section, Slider, Comment, Button } from "../";
import { Arrow } from "../../assets/icons";

import { reviews } from "../../data/constants";

import styles from "./reviews.module.scss";

const Reviews = () => {
  const slides: ReactNode[] = reviews.slider.map((item, index) => {
    return <Comment key={index} {...item} type="review" />;
  });

  const sliderBtns = {
    prev: {
      className: styles.btnPrev,
      btn: (
        <Button
          className={`${styles.btn} ${styles.btnPrev}`}
          styles={{
            color: "black",
            bgColor: "white",
            border: "gray",
            circle: true,
          }}
        >
          <span className={styles.btnIcon}>
            <Arrow />
          </span>
        </Button>
      ),
    },
    next: {
      className: styles.btnNext,
      btn: (
        <Button
          className={`${styles.btn} ${styles.btnNext}`}
          styles={{
            color: "black",
            bgColor: "white",
            border: "gray",
            circle: true,
          }}
        >
          <span className={styles.btnIcon}>
            <Arrow />
          </span>
        </Button>
      ),
    },
    className: styles.btns,
  };

  const allProps = {
    section: {
      id: "reviews",
      className: styles.section,
    },

    title: {
      ...reviews.title,
      linkStyles: {
        color: "blue",
        bgColor: "gray",
      },
      className: styles.title,
    },

    slider: {
      items: slides,
      className: styles.slider,
      slidesPerView: 1,
      navigation: sliderBtns,
    },
  };

  return (
    <Section {...allProps.section}>
      <div className={styles.wrapper}>
        <Slider {...allProps.slider} />
        <Section.Title {...allProps.title} />
      </div>
    </Section>
  );
};

export default Reviews;
