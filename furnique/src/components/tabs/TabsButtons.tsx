import React, { ReactNode } from "react";
import { Button, ListGroup } from "../";

import styles from "./tabs.module.scss";

interface BtnsProps {
  btns: { text: string; id: string; icon: ReactNode }[];
  onClick: Function;
}

const Btns = ({ btns, onClick }: BtnsProps) => {
  const listProps = {
    type: "regular",
    className: styles.btns,
  };

  const listContent: ReactNode[] = btns.map((item, index) => {
    const btnProps = {
      className: styles.btn,

      onClickFunc: () => {
        onClick(item.id);
      },

      styles: {
        color: "black",
        bgColor: "white",
        rounded: true,
        border: "gray",
        icon: true,
      },
    };

    return (
      <ListGroup.Item key={index}>
        <Button {...btnProps}>
          <span className={styles.icon}>{item.icon}</span>
          {item.text}
        </Button>
      </ListGroup.Item>
    );
  });

  return <ListGroup {...listProps}>{listContent}</ListGroup>;
};

export default Btns;
