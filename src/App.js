import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoGroup from './components/TodoGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoGroup />
      </header>
    </div>
  );
}

export default App;
