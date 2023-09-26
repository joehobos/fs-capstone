import React from 'react'
import { useState } from 'react'
import '../index.css'

export default function Login() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
  return (
    <div>
        <div>
            <input value={userName} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'/>
            <small>This is an error placeholder</small>
            <button>Login</button>
        </div>
    </div>
  )
}
