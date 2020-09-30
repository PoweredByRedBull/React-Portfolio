import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const BUTTON_STYLES = ["btn-primary", "btn-secondary"];

export const Button = ({ children, type, onClick, buttonStyle, to }) => {
  const checkButtonStyle = BUTTON_STYLES.includes(buttonStyle)
    ? buttonStyle
    : BUTTON_STYLES[0];

  return (
    <Link to={to}>
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
