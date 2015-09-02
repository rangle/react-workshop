// import 'bootstrap-sass';
// import './app.scss';

import React from "react";
import Header from "./components/header/header";
import Todo from "./components/todo/todo";

React.render(
  <div>
    <Header title="Todo App"/>
    <Todo />
  </div>,
  document.getElementById('main')
);