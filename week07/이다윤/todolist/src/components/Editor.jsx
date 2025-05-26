import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
    const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) =>{
    if(e.keyCode === 13){
        onSubmit();
    }
  };
  const onSubmit = () => {
    onCreate(content); // onCreate 함수에 인수로 content(= input 태그에 입력한 값) 전달
  };

  return (
    <div className="Editor">
      <input
        value={content} // input 태그에 입력하는 값이 content에 보관
        onKeyDown = {onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
