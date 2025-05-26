import './App.css';
import { useRef, useReducer } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

const mockData = [
  { id: 0,
    isDone: false, 
    content: "React 공부하기",
    date: new Date().getTime() },
  { id: 1, 
    isDone: false, 
    content: "기깔나게 자기", 
    date: new Date().getTime() },
  { id: 2, 
    isDone: false, 
    content: "푸짐하게 먹기", 
    date: new Date().getTime() },
];

// reducer 함수
function todoReducer(state, action) {
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
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, mockData);
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

export default App;