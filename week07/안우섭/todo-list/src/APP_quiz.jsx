import React, { useState } from "react";

// 형제 A: 입력 컴포넌트
function InputComponent({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="여기에 입력하세요"
    />
  );
}

// 형제 B: 출력 컴포넌트
function DisplayComponent({ value }) {
  return <p>입력된 값: {value}</p>;
}

// 부모 컴포넌트: 상태 관리
function ParentComponent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>상태 끌어올리기 예제</h1>
      <InputComponent value={inputValue} onChange={setInputValue} />
      <DisplayComponent value={inputValue} />
    </div>
  );
}

export default ParentComponent;
