import React from "react";

function Viewer({ count }) {
  return (
    <section
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <p>현재 카운트 :</p>
      <h2>{count}</h2>
    </section>
  );
}

export default Viewer;
