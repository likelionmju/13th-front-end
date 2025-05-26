import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    // 검색어 없을 때
    if (search === "") {
      return todos; // 전체 Todo 리턴
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
    // filter 메서드 호출
    // 배열의 모든 todo 순회 => 연산 결과 '참'만 필터링

    // toLowerCase(): 소문자로 변환(대소문자 관련 없이 검색 ⭕)

    // includes 메서드 호출
    // 인수(search)가 todo.content에 들어있는지 찾아서 T/F 반환
  };

  const filteredTodos = getFilteredData(); // 컴포넌트가 리렌더링 될 때마다 호출

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
