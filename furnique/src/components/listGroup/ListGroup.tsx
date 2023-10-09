import React, { ReactNode, Component } from "react";

import ListItem from "./ListItem";
import List from "./List";

interface GroupProps {
  type: string;
  children: ReactNode[];
  className?: string;
}

class ListGroup extends Component<GroupProps> {
  static Item = ListItem;

  render() {
    const { type, children, className = "" } = this.props;

    return (
      <List type={type} className={className}>
        {children}
      </List>
    );
  }
}

export default ListGroup;
