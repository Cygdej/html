import React, { ReactNode } from "react";
import { ListGroup } from "../";

import styles from "./tabs.module.scss";

interface ContentProps {
  content: ReactNode[];
}

const Content = ({ content }: ContentProps) => {
  const listProps = {
    type: "regular",
    className: styles.content,
  };

  const listContent: ReactNode[] = content.map((item, index) => {
    return item && <ListGroup.Item key={index}>{item}</ListGroup.Item>;
  });

  return <ListGroup {...listProps}>{listContent}</ListGroup>;
};

export default Content;
