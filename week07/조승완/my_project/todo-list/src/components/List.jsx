import { useState, useEffect } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("")

    const onChangeContent = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos
        }
        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase())
        })
    }

    const filteredTodos = getFilteredData()
    
    return (
        <>
        <div className="List">
        <h4>Todo List 🌱</h4>
        <input 
            value={search}
            onChange={onChangeContent}
            placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return <TodoItem key = {todo.id} {...todo} onUpdate = {onUpdate} onDelete = {onDelete}/>
            })}
        </div>
        </div>
        </>
  );
};

export default List;