// import { useState, useRef } from "react";
// import "./Editor.css";

// const Editor = ({ onCreate }) => {
//   const [content, setContent] = useState("");
//   const contentRef = useRef();

//   const onChangeContent = (e) => {
//     // 입력창에서 내욜 바뀔 때 실행
//     setContent(e.target.value); // e.target은 input 요소 그 자체, e.target.value는 실제 입력값
//   }; // setContent는 useState로 선언한 content 값을 바꿈

//   const onKeyDown = (e) => {
//     // enter 눌렀을 때
//     if (e.keyCode === 13) {
//       // 13은 enter
//       onSubmit(); // 현재 입력한 로직을 todo로 추가
//     }
//   };

//   const onSubmit = () => {
//     // 작성한 내용을 app에 전달하여 새로운 할 일 추가
//     if (content === "") {
//       // 입력 안하고 추가하려는 경우 방지
//       contentRef.current.focus(); // 자동 커서 이동
//       return;
//     }
//     onCreate(content); // App 컴포넌트 상태(todos)에 추가
//     setContent(""); // 입력창 초기화
//   };

//   return (
//     <div className="Editor">
//       <input
//         ref={contentRef} // focus에서 사용
//         value={content} // 현재 입력값 보여줌
//         onKeyDown={onKeyDown} // enter 누르면 추가
//         onChange={onChangeContent} // 입력값을 content 상태로 업데이트
//         placeholder="새로운 Todo..."
//       />
//       <button onClick={onSubmit}>추가</button>
//     </div>
//   );
// };

// export default Editor;

import { useReducer, useRef } from "react";
import "./Editor.css";

function inputReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return action.payload; // 새로 입력한 텍스트
    case "CLEAR": // 추가 누르고 입력창 초기화
      return "";
    default:
      return state;
  }
}

const Editor = ({ onCreate }) => {
  const inputRef = useRef();

  const [content, dispatch] = useReducer(inputReducer, "");

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };

  const handleSubmit = () => {
    if (content.trim() === "") {
      inputRef.current.focus();
      return;
    }

    onCreate(content);
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        placeholder="새로운 Todo..."
      />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default Editor;
