import React, { ReactNode } from "react";
import { Container, Logo, Link, ListGroup } from "../";
import { footerInfo } from "../../data/constants";

import styles from "./footer.module.scss";

const Footer = () => {
  const { descr, nav, rights } = footerInfo;

  const logoProps = { type: "white" };

  const footerNavContent: ReactNode[] = nav.map((item, index) => {
    const listProps = {
      type: "regular",
      className: styles.navSectionList,
    };

    const listContent = item.content.map((item, index) => {
      const contentProps = {
        ...item,
        styles: { color: "white" },
      };

      return (
        <ListGroup.Item key={index} className={styles.navSectionItem}>
          <Link {...contentProps} />
        </ListGroup.Item>
      );
    });

    return (
      <div key={index}>
        <p className={styles.navSectionTitle}>{item.title}</p>
        <ListGroup {...listProps}>{listContent}</ListGroup>
      </div>
    );
  });

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.rowInfo}>
            <div className={styles.colLogo}>
              <Logo {...logoProps} />
              <p className={styles.descr}>{descr}</p>
            </div>
            <div className={styles.colNav}>
              <nav className={styles.nav}>{footerNavContent}</nav>
            </div>
          </div>
          <div className={styles.rowRights}>
            <p className={styles.rights}>{rights}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
