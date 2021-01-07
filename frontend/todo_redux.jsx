import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore
    window.store = store
    window.receiveTodo = receiveTodo
    window.receiveTodos = receiveTodos
    const root = document.getElementById("root");
    ReactDOM.render(<h1 store={configureStore}/>,root)
});


