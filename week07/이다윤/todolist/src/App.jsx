import "./App.css";
import { useReducer, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

// 초기 데이터 정의
const mockData = [
  {
    id: 0, // 각각의 item들 구별
    isDone: false, // 체크박스 체크유무
    content: "React 공부하기", // Todo 내용
    date: new Date().getTime(), // Todo 생성 날짜
  },
  {
    id: 1,
    isDone: false,
    content: "기깔나게 자기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "푸짐하게 먹기",
    date: new Date().getTime(),
  },
];

// 상태(state)를 관리하는 리듀서 함수 정의
const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": //새로운 Todo 추가
      return [action.newTodo, ...state];
    case "UPDATE": //완료 여부 토글
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE": // 삭제
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, mockData); 
  // 상태와 디스패치 함수 생성
  const idRef = useRef(3); // 다음에 추가될 todo의 id

  // 새로운 Todo 추가 함수
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newTodo: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  // 완료 여부 토글 함수
  const onUpdate = (targetId) => {
    dispatch({ type: "UPDATE", targetId });
  };

  // 삭제 함수
  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
