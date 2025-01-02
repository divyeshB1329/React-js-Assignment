import React, { useState } from "react";

function Counter() {
    // State to hold the counter value
    const [count, setCount] = useState(0);

    // Increment the counter
    const increment = () => {
        setCount(count + 1);
    };

    // Decrement the counter
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div >
            <h1>&nbsp;&nbsp;Counter</h1><br /><br /><br />
            <p >&nbsp;&nbsp;&nbsp;&nbsp;Count: {count}</p><br /><br /><br />
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={increment}>Increment</button>
            &nbsp;&nbsp;<button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
