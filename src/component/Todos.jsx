import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "helloguys"
    },
    {
      text: "helloguys"
    },
    {
      text: "helloguys"
    },
    {
      text: "helloguys"
    },
    {
      text: "helloguys"
    },
    {
      text: "helloguys"
    },
    {
      text: "helloguys"
    },
    {
      text: "hello"
    },
    {
      text: "helloguys"
    },
    {
      text: "helloguys"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
