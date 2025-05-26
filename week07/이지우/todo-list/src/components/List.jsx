// import "./List.css";
// import TodoItem from "./TodoItem";
// import { useState } from "react";

// const List = ({ todos, onUpdate, onDelete }) => {
//   // todos: 현재 등록된 전체 할 일 목록, onUpdate: 체크박스 클릭했을 때 완료 상태 바꾸는 함수
//   const [search, setSearch] = useState(""); // 검색어 저장 상태 변수, 검색어 바꿀 수 있는 함수

//   const onChangeSearch = (e) => {
//     // 검색창에 글자 입력할 때 실행
//     setSearch(e.target.value); // 입력값을 search 상태에 실시간 저장
//   };

//   const getFilteredData = () => {
//     // 검색어에 따라 필터링된 할 일 목록 반환
//     if (search === "") {
//       // 비어있으면 todo 그대로 보여줌
//       return todos;
//     }
//     return todos.filter(
//       (
//         todo // 조건에 맞는 항목만 추리기
//       ) => todo.content.toLowerCase().includes(search.toLowerCase()) // 소문자 변환 후 포함되어 있는지 확인
//     );
//   };

//   const filteredTodos = getFilteredData(); // 실행 결과 저장, 화면에 실제로 보여줄 할 일 목록

//   return (
//     <div className="List">
//       <h4>Todo List 🌱</h4>
//       <input
//         value={search} // 현재 검색어 상태를 input 박스에 반영
//         onChange={onChangeSearch} // search 상태 업데이트
//         placeholder="검색어를 입력하세요"
//       />
//       <div className="todos_wrapper">
//         {filteredTodos.map((todo) => {
//           // 배열 반복하면서 todo를 todoitem 컴포넌트로 변환해 화면에 보여줌
//           return (
//             <TodoItem
//               key={todo.id}
//               {...todo}
//               onUpdate={onUpdate}
//               onDelete={onDelete}
//             />
//           ); // 할 일 렌더링
//         })}
//       </div>
//     </div>
//   );
// };

// export default List;

import "./List.css";
import TodoItem from "./TodoItem";
import { useReducer } from "react";

// 📌 reducer 정의
const initialState = {
  search: "",
};

function listReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

const List = ({ todos, onUpdate, onDelete }) => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const handleSearchChange = (e) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  const getFilteredData = () => {
    if (state.search.trim() === "") return todos;

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(state.search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={state.search}
        onChange={handleSearchChange}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
