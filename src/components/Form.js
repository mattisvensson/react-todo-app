import React from 'react';

function Form (props) {

    const inputTextHandler = (e) => {
            props.setInputText (e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (props.inputText) {
            props.setTodos([
                ...props.todos, {text: props.inputText, completed: false, id: Math.random() * 1000}
            ])
            props.setInputText("");
        }
    }

    return ( 
        <form>
            <input onChange={inputTextHandler} value={props.inputText} type="text" className="todoInput"/>
            <button onClick={submitTodoHandler} type="submit" className="todoButton">Add</button>
        </form>
    );
}

export default Form ;