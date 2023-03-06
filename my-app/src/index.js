import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './Todo';
import PersonProfile from './pass-props'

const person={name:'Vishnu', url: 'https://i.imgur.com/7vQD0fPs.jpg'};
const size= 20;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoList />
    <PersonProfile person={person}
        size={size} />
  </React.StrictMode>
);

reportWebVitals();
