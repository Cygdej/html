import React, { ReactNode, useState } from "react";

import Btns from "./TabsButtons";
import Content from "./TabsContent";

import styles from "./tabs.module.scss";

interface Props {
  className?: string;
  btns: { text: string; id: string; icon: ReactNode }[];
  content: { value: string; item: ReactNode }[];
}

const Tabs = ({ btns, content, className = "" }: Props) => {
  const [visibleContent, changeContent] = useState<ReactNode[]>(
    content.map((item) => item.item)
  );

  const filterContent = (id: string) => {
    let newContent: ReactNode[];

    if (id === "all") {
      newContent = content.map((item) => item.item);
    } else {
      newContent = content.map((item) => {
        return item.value === id ? item.item : null;
      });
    }

    changeContent(newContent);
  };

  return (
    <div className={`${className} ${styles.tabs}`}>
      <Btns btns={btns} onClick={filterContent} />
      <Content content={visibleContent} />
    </div>
  );
};

export default Tabs;
