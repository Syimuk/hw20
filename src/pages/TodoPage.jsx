import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearTodos,
} from "../features/todoSlice";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodosPage = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearTodos());
    navigate("/login");
  };

  return (
    <TodoContainer>
      <h2>Todo List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>✔</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearTodos())}>Delete All</button>
      <button onClick={handleLogout}>Logout</button>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 5px;
  }
`;

export default TodosPage;
