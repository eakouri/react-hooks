import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todo = (props) => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);
    // inputState[0] returns the current state
    // inputState[1] returns a reference to the function that manipulates the state

    //function will execute when function runs for the first time
    useEffect(() => {
        //adding it in callback function passed to useEffect() so we don't cause side-effects in the render cycle and avoid bad performance and
        //unexpected results in the UI
       axios.get('https://hooks-b95c8.firebaseio.com/todos.json').then(result => {
           console.log(result);
           const todoData = result.data;
           const todos = [];
           for (const key in todoData) {
               todos.push({id: key, name: todoData[key].name})
           }
           setTodoList(todos);
       });
       return () => {
           console.log('cleanup');
       }
    }, [todoName]);
    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {
        //set a new value, so need to override old one
        //note concat returns a new array so it will safely replace the old one
        setTodoList(todoList.concat(todoName));
        axios
            .post('https://hooks-b95c8.firebaseio.com/todos.json', { name: todoName })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
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
                type='button'
                onClick={todoAddHandler}
            > Add
            </button>
            <ul>
                {todoList.map(todo => <li key={todo.id}> {todo.name}</li>)}
            </ul>
        </React.Fragment>

    );
};

export default todo;