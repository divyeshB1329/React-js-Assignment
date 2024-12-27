import React, { useState } from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);

  // CSS-in-JS styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      width: '200px',
      margin: '50px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007BFF',
      color: '#fff',
      cursor: 'pointer',
      marginBottom: '20px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    heading: {
      fontSize: '18px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => {
          setCount(++count);
        }}
      >
        Count
      </button>
      <h1 style={styles.heading}>Count value = {count}</h1>
    </div>
  );
};

export default Counter;
