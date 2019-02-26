import React, { useState } from 'react';

const todo = (props) => {
    const [todoName, setTodoName] = useState('');
    // inputState[0] returns the current state
    // inputState[1] returns a reference to the function that manipulates the state

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    };

    return (
        <React.Fragment>
            <input
                type='text'
                placeholder='todo'
                onChange={inputChangeHandler}
                value={todoName}
            />
            <button
                type='button'> Add </button>
            <ul>

            </ul>
        </React.Fragment>

    );
};

export default todo;