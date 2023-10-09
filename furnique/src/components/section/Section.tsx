import React, { Component, ReactNode } from "react";

import { Container } from "../";
import SectionTitle from "./SectionTitle";

interface Props {
  children: ReactNode[] | ReactNode;
  id: string;
  className?: string;
}

export class Section extends Component<Props> {
  static Title = SectionTitle;

  render() {
    const { children, id, className = "" } = this.props;

    return (
      <section id={id} className={className}>
        <Container>{children}</Container>
      </section>
    );
  }
}

export default Section;
