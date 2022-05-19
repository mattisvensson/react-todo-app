import React from 'react';
import Todo from "./Todo";

function TodoList (props) {
    return (
        <>
            {props.todos.length === 0 ? <p className="start">yayy, nothing to do ...</p> : null}
            <ul className='todoList'>
                {props.filteredTodos.map((todo, index) => (
                    <li className={`todoItem ${todo.completed === true ? "completed" : ""}`} key={index}>
                        <Todo mappedTodo={todo} todos={props.todos} setTodos={props.setTodos}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;