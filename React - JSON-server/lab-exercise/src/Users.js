import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]); // State for user data
  const [name, setName] = useState(""); // Input for name
  const [email, setEmail] = useState(""); // Input for email
  const [id, setId] = useState(0); // ID of user being edited

  const apiUrl = "http://localhost:3000/users";

  // Fetch users (GET)
  const fetchUsers = async () => {
    const response = await axios.get(apiUrl);
    setUsers(response.data);
  };

  // Add a new user (POST)
  const addUser = async () => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Increment the last user's ID or start from 1
    const response = await axios.post(apiUrl, { id: newId, name, email }); // Add `id` explicitly
    setUsers([...users, response.data]); // Update state with the new user
    setName("");
    setEmail("");
  };

  // Edit a user (PUT)
  const updateUser = async () => {
    const response = await axios.put(`${apiUrl}/${id}`, { name, email });
    setUsers(users.map(user => (user.id === id ? response.data : user))); // Update the user in state
    setName("");
    setEmail("");
    setId(0);

  };

  // Update a single field (PATCH)
  const patchUser = async (id) => {
    const response = await axios.patch(`${apiUrl}/${id}`, { name: "Updated Name" });
    setUsers(users.map(user => (user.id === id ? response.data : user)));
  };

  // Delete a user (DELETE)
  const deleteUser = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    setUsers(users.filter(user => user.id !== id)); // Remove user from state
  };


  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateUser();
    } else {
      addUser();
    }
  };

  // Load users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      <h1>User Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <button type="submit">Add</button>
      </form><br /><br />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => {
                  setId(user.id);
                  setName(user.name);
                  setEmail(user.email);
                }}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => patchUser(user.id)}>Patch Name</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
