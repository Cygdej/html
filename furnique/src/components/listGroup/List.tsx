import React, { ReactNode } from "react";

interface ListProps {
  type: string;
  children: ReactNode[];
  className?: string;
}

const List = ({ type, children, className = "" }: ListProps) => {
  return type === "regular" ? (
    <ul className={className}>{children}</ul>
  ) : (
    <ol className={className}> {children}</ol>
  );
};

export default List;
