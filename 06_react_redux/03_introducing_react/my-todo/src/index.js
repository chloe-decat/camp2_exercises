import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";


var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <p>BIENVENUE SUR LA TODO DE CHLOE!</p>
        <TodoList/>
    </div>,
    destination
);
