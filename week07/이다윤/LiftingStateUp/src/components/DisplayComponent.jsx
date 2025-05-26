// 텍스트 표시 컴포넌트

import React from "react";

function DisplayComponent({ value }) {
  // 부모 컴포넌트로부터 value를 props로 전달받는다.
  return (
    <div>
      <p>입력한 값: {value}</p>
    </div>
  );
}

export default DisplayComponent;
