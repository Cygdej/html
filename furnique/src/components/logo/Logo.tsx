import React from "react";
import logoWhite from "../../assets/img/logo/logoWhite.svg";
import logoDefault from "../../assets/img/logo/logoDefault.svg";

import styles from "./logo.module.scss";

interface Props {
  type: string;
}

const Logo = ({ type }: Props) => {
  let logo: string;

  switch (type) {
    case "default":
      logo = logoDefault;
      break;

    case "white":
      logo = logoWhite;
      break;

    default:
      logo = "";
  }

  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" className={styles.img} />
    </div>
  );
};

export default Logo;
