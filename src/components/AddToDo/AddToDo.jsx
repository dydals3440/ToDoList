import React, { useState } from 'react';
import './AddToDo.css';
import { v4 as uuidv4 } from 'uuid';

export default function AddToDo({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert('할 일을 입력해주세요!');
      return;
    } else {
      onAdd({ id: uuidv4(), text, status: 'active' });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='text'
        name='text'
        value={text}
        onChange={handleChange}
        placeholder='할 일을 입력해주세요'
      />
      <button>Add</button>
    </form>
  );
}
