import React, { ReactNode } from "react";
import { Link } from "../";

import styles from "./section.module.scss";

interface Props {
  link?: {
    text: string;
    path: string;
  };
  linkStyles?: {
    color?: string;
    bgColor?: string;
    border?: string;
  };
  mainTitle: string;
  subTitle: string;
  className?: string;
  h1?: boolean;
}

const SectionTitle = ({
  link,
  mainTitle,
  subTitle,
  linkStyles = {},
  className = "",
  h1 = false,
}: Props) => {
  let titleLink: ReactNode | null, title: ReactNode;

  if (link) {
    const linkProps = {
      text: link.text,
      path: link.path,
      className: styles.titleLink,
      styles: linkStyles,
    };

    titleLink = <Link {...linkProps} />;
  } else {
    titleLink = null;
  }

  if (h1) {
    title = (
      <h1 className={`${styles.titleMain} ${styles.titleH1}`}>{mainTitle}</h1>
    );
  } else {
    title = <h2 className={styles.titleMain}>{mainTitle}</h2>;
  }

  return (
    <div className={`${styles.titleWrapper} ${className}`}>
      {titleLink}
      {title}
      <p className={styles.titleSub}>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
