import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './Pages/TodoList';
import AddTodo from "./Pages/AddTodo";
import { TodoProvider } from "./Context/TodoContextProvider";




function App() {

  return (
    <TodoProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={AddTodo} />

          <Route exact path="/todolist" component={TodoList} />
        </Switch>
      </Router>
    </TodoProvider>

  );

}

export default App;