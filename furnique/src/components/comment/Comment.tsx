import React, { ReactNode } from "react";

import Reviewcard from "./Reviewcard";
import CommentCard from "./CommentCard";

import starFull from "../../assets/img/stars/starFull.svg";
import starHalf from "../../assets/img/stars/starHalf.svg";

import styles from "./comment.module.scss";

interface Props {
  text: string;
  img: string;
  author: string;
  stars: number;
  position?: string;
  productImg?: string;
  type?: string;
}

const Comment = ({
  text,
  img,
  author,
  stars,
  position = "",
  productImg = "",
  type = "default",
}: Props) => {
  let allStars: ReactNode[] = [];

  for (let i = 0; i < Math.floor(stars / 1); i++) {
    allStars.push(
      <span key={i + 1} className={styles.star}>
        <img src={starFull} alt="star" className={styles.starImg} />
      </span>
    );
  }

  if (stars % 1 === 0.5) {
    allStars.push(
      <span key={stars % 1} className={styles.star}>
        <img src={starHalf} alt="star" className={styles.starImg} />
      </span>
    );
  }

  const cardProps = {
    text: text,
    img: img,
    author: author,
    stars: allStars,
  };

  return type === "default" ? (
    <CommentCard {...cardProps} />
  ) : (
    <Reviewcard {...cardProps} position={position} productImg={productImg} />
  );
};

export default Comment;
