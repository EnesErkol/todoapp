import React, { useContext } from 'react';
import "../App.css";
import { Card, Button } from 'react-bootstrap';
import Todo from '../component/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from '../Context/TodoContextProvider';
import { useHistory } from "react-router-dom";



function TodoList() {
  const {
    removeTodo,
    todos,
    markTodo } = useContext(TodoContext);

  const history = useHistory();

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>


        <div>
          {todos.map((todo, index) => (

            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />

              </Card.Body>

            </Card>

          ))}

        </div>
        <Button variant="primary mb-3" type="submit" onClick={() => history.push('/')}>
          Back
        </Button>
      </div>
    </div>




  );




}
export default TodoList;