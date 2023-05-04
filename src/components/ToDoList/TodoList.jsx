import React, { useState } from 'react';
import './TodoList.css';
import AddToDo from '../AddToDo/AddToDo';
import ToDo from '../ToDo/ToDo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: '파이썬 과제 진행',
      status: 'Active',
    },
    {
      id: '2',
      text: '프로젝트 진행',
      status: 'Completed',
    },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);

  function getFilteredItems(todos, filter) {
    if (filter === 'All') {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  }

  return (
    <>
      <ul>
        {filtered.map((item) => (
          <ToDo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      {/* toDo가 추가되면 알려주는 것을 콜백함수로 전달 */}
      <AddToDo onAdd={handleAdd} />
    </>
  );
}
