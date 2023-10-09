import style from "./form.module.scss";
import classNames from "classnames";

interface Props {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
  styles?: { bgColor?: string };
}

const FormControl = ({
  className = "",
  type,
  placeholder,
  name,
  styles = {},
}: Props) => {
  const { bgColor = "white" } = styles;

  const inputclass = classNames(style.controlInput, {
    [style[`controlInput${bgColor}`]]: bgColor,
  });

  return (
    <div className={`${className}`}>
      <input
        className={inputclass}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default FormControl;
