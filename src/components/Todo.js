import React, { useState } from 'react';

const todo = (props) => {
    const inputState = useState('');
    // inputState[0] returns the current state
    // inputState[1] returns a reference to the function that manipulates the state

    const inputChangeHandler = (event) => {
        inputState[1](event.target.value);
    };

    return (
        <React.Fragment>
            <input
                type='text'
                placeholder='todo'
                onChange={inputChangeHandler}
                value={inputState[0]}
            />
            <button
                type='button'> Add </button>
            <ul>

            </ul>
        </React.Fragment>

    );
};

export default todo;