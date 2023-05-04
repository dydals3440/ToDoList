import React, { useState } from 'react';
import './TodoList.css';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: '파이썬 과제 진행',
      status: 'active',
    },
    {
      id: '2',
      text: '프로젝트 진행',
      status: 'active',
    },
  ]);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
