import React, { useReducer } from "react";
import "./Input.css";

const initialState = {
  value: "",
  isValid: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    }
    default: {
      return state;
    }
  }
};
const Input = ({ element, type, className, placeholder }) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const handleChange = (event) => {
    const { type, value } = event.target;
    if (type === "password") {
      dispatch({
        type: "CHANGE",
        value: value,
        isValid: value.length > 6 ? true : false,
      });
    } else {
      dispatch({
        type: "CHANGE",
        value: value,
        isValid: value.length >= 4 ? true : false,
      });
    }
  };

  const renderInput = () => {
    return element === "input" ? (
      <input
        type={type}
        className={`${className} ${
          state.value && (state.isValid ? "success" : "error")
        }`}
        placeholder={placeholder}
        value={state.value}
        onChange={handleChange}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        className={className}
        value={state.value}
        onChange={handleChange}
      />
    );
  };
  return <>{renderInput()}</>;
};

export default Input;
