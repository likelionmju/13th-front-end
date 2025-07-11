import "./App.css";
import { useState } from "react";
import A from "./components/A";
import B from "./components/B";

function App() {
  const [text, setText] = useState("");

  //입력이 바뀌었을 때 실행할 함수
  const handleChange = (e) => {
    setText(e.target.value); // A로부터 입력 받은 값으로 text 업데이트
  };

  return (
    <div>
      <A value={text} onChange={handleChange} />
      <B value={text} />
    </div>
  );
}

export default App;
