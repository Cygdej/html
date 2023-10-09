import React, { ReactNode } from "react";
import { Section, ProductCard, ListGroup } from "../";

import { products, shopItems } from "../../data/constants";

import styles from "./products.module.scss";

const Products = () => {
  const cards: ReactNode[] = shopItems.map((item, index) => {
    return (
      <ListGroup.Item className={styles.item} key={index}>
        <ProductCard {...item} />
      </ListGroup.Item>
    );
  });

  const allProps = {
    list: {
      type: "regular",
      className: styles.list,
    },

    title: {
      ...products.title,
      linkStyles: {
        color: "orange",
        bgColor: "gray",
      },
    },

    section: {
      id: "product",
      className: styles.products,
    },
  };

  return (
    <Section {...allProps.section}>
      <Section.Title {...allProps.title} />
      <ListGroup {...allProps.list}>{cards}</ListGroup>
    </Section>
  );
};

export default Products;
