import React, { ReactNode } from "react";

import { Backquote } from "../../assets/icons";

import styles from "./comment.module.scss";

interface Props {
  text: string;
  img: string;
  author: string;
  stars: ReactNode[];
  position: string;
  productImg: string;
}

const Reviewcard = ({
  text,
  img,
  author,
  stars,
  position,
  productImg,
}: Props) => {
  return (
    <article className={styles.review}>
      <span className={`${styles.icon} ${styles.reviewIcon}`}>
        <Backquote />
      </span>
      <div className={styles.header}>
        <div className={styles.person}>
          <span className={styles.personPic}>
            <img className={styles.personImg} src={img} alt="profile" />
          </span>
          <div className={styles.personInfo}>
            <span className={styles.personName}>{author}</span>
            <span className={styles.personPosition}>{position}</span>
          </div>
        </div>
      </div>
      <p className={`${styles.text} ${styles.reviewText}`}>{text}</p>
      <div className={styles.stars}>{stars}</div>
      <picture className={styles.productPic}>
        <img className={styles.productImg} src={productImg} alt="product" />
      </picture>
    </article>
  );
};

export default Reviewcard;
