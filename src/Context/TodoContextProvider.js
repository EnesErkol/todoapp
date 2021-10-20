import { createContext, useState } from 'react';

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);
    const addTodo = text => {
        const newTodos = [...todos, { text, id: Math.random() * 1000 }];
        setTodos(newTodos);
    };

    const markTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {

                return { ...todo, isDone: todo.isDone ? false : true }


            }
        });
        setTodos(newTodos);
    };



    const removeTodo = id => {
        const newTodos = todos.filter(todo => {

            return todo.id !== id
        });

        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                addTodo,
                removeTodo,
                todos,
                markTodo

            }}

        >
            {children}
        </TodoContext.Provider>
    )





}