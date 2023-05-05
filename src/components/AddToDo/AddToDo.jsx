import React, { useState } from 'react';
import styles from './AddToDo.module.css';
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='할 일을 입력해주세요'
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
