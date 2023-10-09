import React, { ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
  className?: string;
}

const ListItem = ({ children, className = "" }: ItemProps) => {
  return <li className={className}>{children}</li>;
};

export default ListItem;
