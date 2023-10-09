import React, { ReactNode } from "react";

import { Backquote } from "../../assets/icons";

import styles from "./comment.module.scss";

interface Props {
  text: string;
  img: string;
  author: string;
  stars: ReactNode[];
}

const CommentCard = ({ text, img, author, stars }: Props) => {
  return (
    <article className={styles.comment}>
      <span className={styles.icon}>
        <Backquote />
      </span>
      <p className={styles.text}>{text}</p>
      <div className={styles.footer}>
        <div className={styles.person}>
          <span className={styles.personPic}>
            <img className={styles.personImg} src={img} alt="profile" />
          </span>
          <span className={styles.personName}>{author}</span>
        </div>
        <div className={styles.stars}>{stars}</div>
      </div>
    </article>
  );
};

export default CommentCard;
