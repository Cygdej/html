import React, { ReactNode } from "react";

import { Section, Slider, ListGroup, Form, Button } from "../";

import { hero, brands } from "../../data/constants";

import styles from "./hero.module.scss";

const Hero = () => {
  const listContent: ReactNode[] = brands.map((item, index) => {
    return (
      <ListGroup.Item key={index} className={styles.brand}>
        <img className={styles.brandImg} src={item} alt="logo" />
      </ListGroup.Item>
    );
  });

  const sliderContent: ReactNode[] = hero.slider.map((item, index) => {
    return (
      <img className={styles.img} src={item.src} alt="gallery" key={index} />
    );
  });

  const allProps = {
    section: {
      id: "hero",
      className: styles.section,
    },

    form: {
      className: styles.form,
      action: "",
      method: "POST",
    },

    input: {
      type: "text",
      placeholder: "Search your property...",
      name: "search",
      className: styles.control,
      styles: { bgColor: "gray" },
    },

    list: {
      type: "regular",
      className: styles.brands,
    },

    btn: {
      type: "submit",
      className: styles.btn,
      styles: {
        color: "white",
        bgColor: "orange",
        size: "medium",
      },
    },

    slider: {
      className: styles.slider,
      items: sliderContent,
      spaceBetween: 20,
    },
  };

  return (
    <Section {...allProps.section}>
      <Section.Title {...hero.title} h1={true} />
      <Form {...allProps.form}>
        <Form.Group className={`${styles.formGroup}`}>
          <Form.Control {...allProps.input} />
          <Button {...allProps.btn}>Search</Button>
        </Form.Group>
      </Form>
      <Slider {...allProps.slider} />
      <ListGroup {...allProps.list}>{listContent}</ListGroup>
    </Section>
  );
};

export default Hero;
