import React from 'react';

function Todo (props) {

    const deleteHandler = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.mappedTodo.id))
    }

    const completeHandler = () => {
        props.setTodos(props.todos.map((el) => {
            if (el.id === props.mappedTodo.id) {
                return {
                    ...props.mappedTodo, completed: !props.mappedTodo.completed
                }
            }
            return el;
        }))
    }

    return ( 
        <>
            <label className="container">
                <input type="checkbox" defaultChecked={props.mappedTodo.completed === true ? "abc" : ""} onClick={completeHandler}></input>
                <span className="checkmark"></span>
            </label>
            <p className="content">{props.mappedTodo.text}</p>
            <button className="delete" onClick={deleteHandler}>
                <img src='../images/trash.png' alt="trashcan icon"/>
            </button>
        </>
    );
}

export default Todo;