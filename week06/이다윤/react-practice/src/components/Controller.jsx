import React from "react";

function Controller({ onChange }) {
  const buttons = [-100, -10, -1, +1, +10, +100];

  return (
    <section>
      {buttons.map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          //   /style={{ margin: "5px", padding: "10px" }}
        >
          {num > 0 ? `+${num}` : num}
        </button>
      ))}
    </section>
  );
}

export default Controller;
