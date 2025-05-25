import "./App.css";
import { useState, useRef } from "react";
import Editor from "./components/jsx/Editor";
import Header from "./components/jsx/Header";
import List from "./components/jsx/List";
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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3); // mockData와 겹치지 않는 id값으로 초기값 설정

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content, // 매개변수로 받아온 content
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };
  const onUpdate = (targetId) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo // 삼항연산자 사용
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
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
