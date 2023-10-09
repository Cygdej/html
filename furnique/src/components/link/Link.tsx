import React from "react";
import classNames from "classnames";

import style from "./link.module.scss";

interface Props {
  path: string;
  className?: string;
  text: string;
  onClickFunc?: Function;
  styles?: {
    color?: string;
    bgColor?: string;
    border?: string;
  };
}

const Link = ({
  path,
  className = "",
  text,
  styles = {},
  onClickFunc = () => {},
}: Props) => {
  const { color = "", bgColor = "", border = "" } = styles;

  const linkClass: string = classNames(style.link, {
    [className]: className,
    [style[color]]: color,
    [style[`filled${bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}`]]:
      bgColor,
    [style[`border${border.charAt(0).toUpperCase() + border.slice(1)}`]]:
      border,
  });

  return (
    <a
      href={path}
      className={linkClass}
      onClick={() => {
        onClickFunc();
      }}
    >
      {text}
    </a>
  );
};

export default Link;
