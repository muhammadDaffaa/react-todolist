import React from "react";
import "./styles.css";

import Paper from "./component/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn black-main-color">Add</button>
        <h1 className="header-title">Todo Lists</h1>
        <button className="header-btn red-main-color">Clear</button>
      </section>

      <section className="add">
        <form action="" className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn black-main-color">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning React</span>
        </div>
      </section>
    </Paper>
  );
}
