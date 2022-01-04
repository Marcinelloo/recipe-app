import React from "react";
import "./Button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const styleHolder = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const sizeHolder = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Button
      onClick={onClick}
      type={type}
      className={`btn ${styleHolder} ${sizeHolder}`}
    >
      {children}
    </Button>
  );
};

export default Button;
