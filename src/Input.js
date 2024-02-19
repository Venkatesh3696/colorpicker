import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  hexValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Color Input</label>
      <input
        autoFocus
        type="text"
        placeholder="Enter color name"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        type="button"
        onClick={() => {
          setIsDarkText(!isDarkText);
        }}
      >
        Toggle text color
      </button>
    </form>
  );
};

export default Input;
