import React from "react";

const Controller = ({ onClickButton }) => {
  return (
    <section className="controller-box">
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(+1);
        }}
      >
        +1
      </button>
    </section>
  );
};

export default Controller;
