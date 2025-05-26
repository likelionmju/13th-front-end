// import "./App.css";
// import Editor from "./components/Editor";
// import Header from "./components/Header";
// import List from "./components/List";
// import { useState, useRef } from "react";

// const mockData = [
//   {
//     id: 0, // 각각의 item들 구별
//     isDone: false, // 체크박스 체크유무
//     content: "React 공부하기", // Todo 내용
//     date: new Date().getTime(), // Todo 생성 날짜
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "기깔나게 자기",
//     date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "푸짐하게 먹기",
//     date: new Date().getTime(),
//   },
// ];

// function App() {
//   const [todos, setTodos] = useState(mockData); // 여러 개의 todo 데이터 보관 위해 초기값으로 빈 배열
//   const idRef = useRef(3); // 새 todo 생성될 때 id 생성, 초기값은 3
//   const onCreate = (content) => {
//     // 할 일 입력 후 추가했을 때 실행
//     const newTodo = {
//       id: idRef.current++, // current++로 매번 1씩 증가
//       isDone: false, // 처음은 완료 상태가 아니므로 false
//       content: content, // 사용자가 입력한 할 일 내용
//       date: new Date().getTime(), // 생성된 시간 밀리초로 저장
//     };

//     setTodos([newTodo, ...todos]); // 현재 상태인 todos를 새로운 배열로 업데이트
//   };

//   const onUpdate = (targetId) => {
//     // todo id 받아서 isDone값 반전
//     setTodos(
//       todos.map(
//         (
//           todo // 순회하며 isDone만 바꾼 새 배열 생성
//         ) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo) // 만약 순회 중인 todo의 id가 우리가 클릭한 targetId와 같다면
//       )
//     );
//   };

//   const onDelete = (targetId) => {
//     setTodos(todos.filter((todo) => todo.id !== targetId));
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Editor onCreate={onCreate} />
//       <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useReducer, useRef } from "react";

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

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.newTodo].concat(state); // 기존 투두에 newTodo 붙임

    case "UPDATE":
      const newList = [];
      for (let i = 0; i < state.length; i++) {
        const todo = state[i];
        if (todo.id === action.targetId) {
          const newTodo = Object.assign({}, todo); // 기존 todo를 복사해 새 객체 만듬
          newTodo.isDone = !todo.isDone;
          newList.push(newTodo);
        } else {
          newList.push(todo);
        }
      }
      return newList;

    case "DELETE":
      const deleteList = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.targetId) {
          deleteList.push(state[i]);
        }
      }
      return deleteList;

    default:
      return state;
  }
}

function App() {
  const idRef = useRef(3);
  const [todos, dispatch] = useReducer(todoReducer, mockData);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    idRef.current += 1;

    dispatch({ type: "CREATE", newTodo: newTodo });
  };

  const onUpdate = (targetId) => {
    dispatch({ type: "UPDATE", targetId: targetId });
  };

  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId: targetId });
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
