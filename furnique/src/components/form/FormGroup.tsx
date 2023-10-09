import React, { ReactNode } from "react";

import styles from "./form.module.scss";

interface Props {
  children: ReactNode[] | ReactNode;
  className?: string;
}

const FormGroup = ({ className = "", children }: Props) => {
  return (
    <div className={`${className} ${styles.groupWithBtn}`}>{children}</div>
  );
};

export default FormGroup;
