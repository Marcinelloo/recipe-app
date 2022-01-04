import React from "react";
import "./Input.css"
const Input = ({ type, placeholder }) => {
  return <input className="input" type={type} placeholder={placeholder}></input>;
};

export default Input;
