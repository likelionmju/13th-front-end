// Viewer.jsx
import React from "react";

const Viewer = ({ count }) => {
  return (
    <div className="viewer">
      <p>현재 카운트 :</p>
      <h2>{count}</h2>
    </div>
  );
};

export default Viewer;
