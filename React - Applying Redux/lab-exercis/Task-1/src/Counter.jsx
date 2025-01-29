import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector((state) => state.counter); // Access state
    const dispatch = useDispatch(); // Dispatch actions

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} style={{ margin: '5px', padding: '10px' }}>
                Increment
            </button>
            <button onClick={decrement} style={{ margin: '5px', padding: '10px' }}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;
