import React from 'react';
import './Form.css';
import { useState } from 'react';

const Form = () => {
    // State variables to store form input values
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    // State variable to store the submitted data
    let [data, setData] = useState([]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to handle form submission
    let saveData = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        //email validation
        validateEmail(email) ? setData([...data, { name, email }]) : alert('Invalid Email');
        setName(''); // Resets the name field
        setEmail(''); // Resets the email field
        setPassword(''); // Resets the password field
    };

    return (
        <div className='form-main-container'>
            <div className="form-container">
                <h1>Sign Up</h1>
                <form onSubmit={saveData}>
                    {/* Input for Name */}
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />

                    {/* Input for Email */}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    {/* Input for Password */}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />

                    {/* Submit button */}
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Table to display the submitted data */}
            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Form;
