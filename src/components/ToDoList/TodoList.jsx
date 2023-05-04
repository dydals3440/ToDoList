import React, { useState } from 'react';
import './TodoList.css';
import AddToDo from '../AddToDo/AddToDo';

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

  /**
   * AddToDo onAdd 함수로부터 받은 text 값
   */
  const handleAdd = (todo) => {
    // toDo update
    console.log(todo);
    setTodos([...todos, todo]);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      {/* toDo가 추가되면 알려주는 것을 콜백함수로 전달 */}
      <AddToDo onAdd={handleAdd} />
    </>
  );
}
