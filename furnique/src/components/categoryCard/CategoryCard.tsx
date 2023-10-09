import React from "react";
import { Link } from "../";

import styles from "./categoryCard.module.scss";

interface Props {
  label: string;
  text: string;
  path: string;
  bgColor: string;
  bgImg: string;
}

const CategoryCard = ({ label, path, text, bgColor, bgImg }: Props) => {
  const linkProps = {
    text: text,
    path: path,
    className: styles.link,
    styles: { color: "black", bgColor: "white", border: "blue" },
  };

  return (
    <article className={`${styles.card} ${styles[bgColor]} ${styles[bgImg]}`}>
      <h3 className={styles.title}>{label}</h3>
      <Link {...linkProps} />
    </article>
  );
};

export default CategoryCard;
