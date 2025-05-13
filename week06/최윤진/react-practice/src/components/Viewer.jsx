import React from "react";

const Viewer = ({ count }) => {
  return (
    <section className="viewer-box">
      <p>현재 카운트 :</p>
      <h1>{count}</h1>
    </section>
  );
};

export default Viewer;
