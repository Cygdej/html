import React, { ReactNode, useState } from "react";
import { ListGroup, Link, Button } from "../";

import styles from "./navBar.module.scss";

interface Props {
  nav: { path: string; text: string }[];
  btns: { content: ReactNode }[];
}

const NavBar = ({ nav, btns }: Props) => {
  const [menuOpen, openMenu] = useState<boolean>(false);

  const handleClick = () => {
    openMenu((open) => !open);
  };

  const allProps = {
    nav: {
      className: styles.nav,

      type: "regular",
    },
    btns: {
      type: "regular",

      className: styles.btns,
    },
  };

  const navLinks: ReactNode[] = nav.map((item, index) => {
    const linkProps = {
      ...item,
      onClickFunc: handleClick,
      styles: { color: "black" },
    };

    return (
      <ListGroup.Item key={index}>
        <Link {...linkProps} />
      </ListGroup.Item>
    );
  });

  const btnsContent: ReactNode[] = btns.map(({ content }, index) => {
    return (
      <ListGroup.Item key={index}>
        <Button {...{ styles: { color: "black" } }}>{content}</Button>
      </ListGroup.Item>
    );
  });

  if (menuOpen) {
    window.document.body.style.overflow = "hidden";
  } else {
    window.document.body.style.overflow = "visible";
  }

  return (
    <>
      <Button
        className={`${styles.btn}${menuOpen ? " " + styles.btnOpen : ""}`}
        onClickFunc={handleClick}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </Button>
      <div
        className={`${styles.container}${
          menuOpen ? " " + styles.containerOpen : ""
        }`}
      >
        <nav className={styles.nav}>
          <ListGroup {...allProps.nav}>{navLinks}</ListGroup>
        </nav>
        <ListGroup {...allProps.btns}>{btnsContent}</ListGroup>
      </div>
    </>
  );
};

export default NavBar;
