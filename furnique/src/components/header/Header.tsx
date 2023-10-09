import React, { ReactNode } from "react";
import { Container, Logo, NavBar } from "../";
import { User, Bag } from "../../assets/icons";
import { headerNav } from "../../data/constants";

import styles from "./header.module.scss";

const btns: { content: ReactNode }[] = [
  {
    content: <span className={styles.icon}>{<User />}</span>,
  },
  {
    content: <span className={styles.icon}>{<Bag />}</span>,
  },
];

const Header = () => {
  const logoProps = { type: "default" };

  const navProps = {
    nav: headerNav,
    btns: btns,
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <Logo {...logoProps} />
          </div>
          <div className={styles.colMenu}>
            <NavBar {...navProps} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
