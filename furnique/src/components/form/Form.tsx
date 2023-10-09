import React, { ReactNode, Component } from "react";

import FormGroup from "./FormGroup";
import FormControl from "./FormControl";

import styles from "./form.module.scss";

interface Props {
  children: ReactNode[] | ReactNode;
  className?: string;
  action: string;
  method: string;
}

class Form extends Component<Props> {
  state = {
    value: {},
  };

  updateValue = (e: any) => {
    console.log(0);
  };

  static Group = FormGroup;
  static Control = FormControl;

  render() {
    const { className = "", children, action, method } = this.props;

    return (
      <form action={action} method={method} className={`${className}`}>
        {children}
      </form>
    );
  }
}

export default Form;
