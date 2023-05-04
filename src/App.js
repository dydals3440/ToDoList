import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/ToDoList/TodoList';

const filters = ['All', 'Active', 'Completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
