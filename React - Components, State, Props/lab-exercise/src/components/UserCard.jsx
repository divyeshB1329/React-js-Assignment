import React from 'react'
import './usercard.css'

const UserCard = ({name, age, location}) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default UserCard
