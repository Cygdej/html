import React, { ReactNode } from "react";
import classNames from "classnames";

import style from "./button.module.scss";

interface Props {
  children: ReactNode | ReactNode[];
  onClickFunc?: Function;
  className?: string;
  onSubmit?: Function;
  styles?: {
    color?: string;
    bgColor?: string;
    size?: string;
    border?: string;
    rounded?: boolean;
    circle?: boolean;
    icon?: boolean;
  };
}

const Button = ({
  children,
  onClickFunc,
  className = "",
  onSubmit,
  styles = {},
}: Props) => {
  const {
    color = "",
    bgColor = "",
    size = "",
    border = "",
    rounded = false,
    circle = false,
    icon = false,
  } = styles;

  const btnClass: string = classNames(style.btn, {
    [className]: className,
    [style[color]]: color,
    [style[`filled${bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}`]]:
      bgColor,
    [style[`border${border.charAt(0).toUpperCase() + border.slice(1)}`]]:
      border,
    [style[size]]: size,
    [style.rounded]: rounded,
    [style.circle]: circle,
    [style.withIcon]: icon,
  });

  return (
    <button
      className={btnClass}
      onClick={() => onClickFunc && onClickFunc()}
      onSubmit={() => onSubmit && onSubmit()}
    >
      {children}
    </button>
  );
};

export default Button;
