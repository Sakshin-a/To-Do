import React, { useEffect, useState } from 'react'

export default function Register() {

const[username, setUserName] = useState("");
const [password, setPassword] = useState("");

const handleRegister = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/register`,{
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
};



  return (
    <div>
      <form onSubmit={handleRegister}>
        <h1>Register here!</h1>
        <br/>
        <input placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
        <br/>
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
