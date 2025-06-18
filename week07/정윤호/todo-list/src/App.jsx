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

// useReducer에 사용될 reducer 함수 정의 (useReducer는 상태와 상태 변경 로직(함수)을 분리해서 관리 할 수 있게 해주는 HOOK)
function todoReducer(state, action) { //dispatch : 상태를 변경하고 싶을 때 호출하는 함수 

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
  const [todos, dispatch] = useReducer(todoReducer, mockData); // useReducer로 상태 및 dispatch 함수 생성
  {/*toos : 현재 상태 값, dispatch : 상태를 바꿀 때 사용하는 함수, todoReducer : 상태를 변경하는 방법을 정의한 함수 */}
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    dispatch({ type: "CREATE", newTodo }); //액션 객체를 보내면, reducer가 이 액션을 보고 새로운 상태를 만들어줍니다.

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