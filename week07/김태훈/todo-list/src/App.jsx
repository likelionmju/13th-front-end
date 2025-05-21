
import './App.css';
import {React, useState, useRef} from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

// 각각의 TodoItem 객체로 넣음
// App 컴포넌트가 리렌더링 될 때마다 다시 생성될 필요 없기 때문에 외부에 선언
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
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map(
        (todo) => 
          todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
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

export default App
