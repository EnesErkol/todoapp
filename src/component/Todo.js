import React from "react";
import { Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";




function Todo({ todo, markTodo, removeTodo }) {
  return (
    <div
      className="todo">

      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(todo.id)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(todo.id)}>✕</Button>
      </div>
    </div>
  );
}



export default Todo;
