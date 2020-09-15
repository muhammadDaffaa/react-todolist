import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("isi valuenya");
    } else {
      alert(value);
      setValue("");
    }

    addTodo(value);
  };

  return (
    <section className="add">
      <form action="" className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn black-main-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.prototype = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
