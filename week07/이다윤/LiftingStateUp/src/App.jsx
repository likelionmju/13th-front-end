// 상태 관리의 중심 컴포넌트

import React, { useState } from "react";
// React를 불러오고 useState 훅을 가져온다. 상태 관리를 위해 필요
import InputComponent from "./components/InputComponent";
import DisplayComponent from "./components/DisplayComponent";

function App() {
  const [text, setText] = useState("");
  // text라는 상태를 정의하고, 초기값은 빈 문자열
  // setText는 text 값을 변경하는 함수

  const handleChange = (e) => {
    setText(e.target.value);
    // 입력창에서 값이 바뀔 때마다 해당 값을 상태로 업데이트한다.
  };

  return (
    <div>
      <h1>🧪 상태 올리기 예제</h1>
      <InputComponent value={text} onChange={handleChange} />
      {/* 입력 컴포넌트에 현재 상태 값과 상태를 변경하는 핸들러를 props로 전달 */}
      <DisplayComponent value={text} />
      {/* 출력 컴포넌트에 현재 상태 값을 props로 전달 */}
    </div>
  );
}

export default App;
