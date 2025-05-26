// 입력 필드 컴포넌트

import React from "react";

function InputComponent({ value, onChange }) {
  // 부모 컴포넌트로부터 value와 onChange props를 전달받는다.
  return (
    <div>
      <input
        type="text"
        placeholder="여기에 입력하세요"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputComponent;
