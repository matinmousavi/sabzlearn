import React from "react";
import "./Input.css";

const Input = ({ element, type, className, placeholder }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const renderInput = () => {
    return element === "input" ? (
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
    );
  };
  return <>{renderInput()}</>;
};

export default Input;
