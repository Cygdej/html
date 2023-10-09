import React, { ReactNode } from "react";
import { Section, Slider, Comment } from "../";

import { comments } from "../../data/constants";

import styles from "./comments.module.scss";

const Comments = () => {
  const slides: ReactNode[] = comments.slider.map((item, index) => {
    return <Comment key={index} {...item} />;
  });

  const sliderProps = {
    items: slides,
    className: styles.slider,
    slidesCentered: true,
    loop: true,
    spaceBetween: 25,
  };

  const titleProps = {
    ...comments.title,
    linkStyles: {
      color: "orange",
      bgColor: "gray",
    },
  };

  const sectionProps = {
    id: "comments",
    className: styles.comments,
  };

  return (
    <Section {...sectionProps}>
      <Section.Title {...titleProps} />
      <Slider {...sliderProps} />
    </Section>
  );
};

export default Comments;
