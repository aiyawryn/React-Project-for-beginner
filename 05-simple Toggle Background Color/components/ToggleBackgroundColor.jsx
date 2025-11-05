import React, { useState } from "react";

export const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "1b1b1b" : "white");
  };

  return (
    <div
      className="app-container"
      style={{ backgroundColor, color: textColor }}
    >
      <button
        className="theme-toggle-button"
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section className="center-text">
        Welcome To A <br />
        Real World...
      </section>
    </div>
  );
};
