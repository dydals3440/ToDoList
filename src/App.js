import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/ToDoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['All', 'Active', 'Completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
