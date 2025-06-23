import { useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

// 초기 데이터
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
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

// 리듀서 함수 정의
function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newTodo, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId); //조건 통과
    default:
      return state;
  } //state = todos 객체
}

function App() {
  const idRef = useRef(3); // mockData와 겹치지 않는 id값으로 초기값 설정
  const [todos, dispatch] = useReducer(todoReducer, mockData); //todos 배열 저장.
  // todoReducer: 상태 변경 로직을 담은 함수/ mockData:초기 상태 값/ todos: 현재 상태/ dispatch: 상태를 업데이트하는 함수
  //dispatch()를 사용해서 action 객체를 보냄.
  // 할 일 추가
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    dispatch({ type: "CREATE", newTodo });
  };

  // 완료 체크 토글
  const onUpdate = (targetId) => {
    dispatch({ type: "UPDATE", targetId });
  };

  // 삭제
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
