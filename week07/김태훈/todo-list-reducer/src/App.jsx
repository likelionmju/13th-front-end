
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

//------------------------------------------------------------------------------
//Reducer 사용
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.newTodo, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
};
//------------------------------------------------------------------------------



function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    dispatch({ type: "CREATE", newTodo });
  };

  const onUpdate = (targetId) => {
    dispatch({ type: "UPDATE", targetId });
  };

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

export default App
