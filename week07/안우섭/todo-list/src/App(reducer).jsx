import "./App.css";
import { useReducer, useRef } from "react";
import Editor from "./components/jsx/Editor";
import Header from "./components/jsx/Header";
import List from "./components/jsx/List";

// 기존에는 useState로 todos를 관리했지만,
// 복잡한 상태 업데이트 로직을 더 명확하게 관리하기 위해 useReducer로 전환
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

// reducer 함수는 상태 변경의 "규칙"을 정의
// action 객체를 보고 type에 따라 상태를 어떻게 바꿀지 결정
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      // 새로운 todo를 현재 목록 맨 앞에 추가
      return [action.newTodo, ...state];
    case "UPDATE":
      // 특정 id의 todo의 isDone 값을 반전시킴
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      // 특정 id를 가진 todo를 제외하고 반환
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  // useState 대신 useReducer를 사용하여 todos 상태를 관리
  // dispatch 함수는 상태를 변경하는 action을 reducer에게 전달
  const [todos, dispatch] = useReducer(reducer, mockData);

  // 새로운 todo에 고유 id를 부여하기 위한 ref
  const idRef = useRef(3);

  // dispatch를 이용한 액션 전송 방식으로 수정됨
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    // 기존: setTodos([...])
    // 변경: dispatch({ type: "CREATE", newTodo })
    dispatch({ type: "CREATE", newTodo });
  };

  const onUpdate = (targetId) => {
    // 기존: setTodos(...)로 직접 상태 수정
    // 변경: dispatch로 업데이트 액션 전달
    dispatch({ type: "UPDATE", targetId });
  };

  const onDelete = (targetId) => {
    // 기존: setTodos(todos.filter(...))
    // 변경: dispatch로 삭제 액션 전달
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
