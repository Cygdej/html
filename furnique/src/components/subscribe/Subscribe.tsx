import React from "react";

import { Container, Form, Button } from "../";
import { subscribe } from "../../data/constants";

import styles from "./subscribe.module.scss";

const Subscribe = () => {
  const allProps = {
    form: {
      className: styles.form,
      action: "",
      method: "POST",
    },

    input: {
      type: "email",
      placeholder: "E.g. youremail@mail.com",
      name: "email",
      className: styles.formControl,
    },

    btn: {
      type: "submit",
      styles: {
        color: "white",
        bgColor: "blue",
        size: "medium",
      },
    },
  };

  return (
    <div className={styles.subscribe}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.text}>{subscribe.title}</p>
          <Form {...allProps.form}>
            <Form.Group>
              <Form.Control {...allProps.input} />
              <Button {...allProps.btn}>Subscribe</Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
