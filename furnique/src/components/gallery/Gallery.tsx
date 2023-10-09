import React, { ReactNode } from "react";
import { ListGroup, CategoryCard, Section, Tabs } from "../";

import { categories, gallery } from "../../data/constants";

import styles from "./gallery.module.scss";

const Gallery = () => {
  const categoriesList: ReactNode[] = categories.map((item, index) => {
    return (
      <ListGroup.Item key={index}>
        <CategoryCard key={index} {...item} />
      </ListGroup.Item>
    );
  });

  const tabsContent: { value: string; item: ReactNode }[] =
    gallery.tabs.imgs.map((item, index) => {
      return {
        value: item.id,
        item: (
          <picture key={index} className={styles.pic}>
            <img
              data-content={item.id}
              className={styles.img}
              src={item.src}
              alt="furniture"
            />
          </picture>
        ),
      };
    });

  const allProps = {
    title: {
      ...gallery.title,
      linkStyles: { color: "orange", bgColor: "gray" },
    },

    list: {
      type: "regular",
      className: styles.categoryList,
    },

    tabs: {
      btns: gallery.tabs.btns,
      content: tabsContent,
      className: styles.tabs,
    },

    section: {
      id: "gallery",
      className: styles.gallery,
    },
  };

  return (
    <Section {...allProps.section}>
      <ListGroup {...allProps.list}>{categoriesList}</ListGroup>
      <Section.Title {...allProps.title} />
      <Tabs {...allProps.tabs} />
    </Section>
  );
};

export default Gallery;
