import React, { useState } from 'react';

const todo = (props) => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);
    // inputState[0] returns the current state
    // inputState[1] returns a reference to the function that manipulates the state

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {
        //set a new value, so need to override old one
        //note concat returns a new array so it will safely replace the old one
        setTodoList(todoList.concat(todoName));
    }
    return (
        <React.Fragment>
            <input
                type='text'
                placeholder='todo'
                onChange={inputChangeHandler}
                value={todoName}
            />
            <button
                type='button'
                onClick={todoAddHandler}
            > Add
            </button>
            <ul>
                {todoList.map(todo => <li key={todo}> {todo}</li>)}
            </ul>
        </React.Fragment>

    );
};

export default todo;