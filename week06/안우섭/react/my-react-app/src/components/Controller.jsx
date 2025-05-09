// Controller.jsx
import React from "react";

const buttons = [-1, -10, -100, +100, +10, +1];

const Controller = ({ onChange }) => {
  return (
    <div className="controller">
      {buttons.map((num) => (
        <button key={num} onClick={() => onChange(num)}>
          {num > 0 ? `+${num}` : num}
        </button>
      ))}
    </div>
  );
};

export default Controller;
