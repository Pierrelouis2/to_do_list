import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ToDoList from './components/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='todo-app'>  
    <ToDoList />
  </div>
  
);
