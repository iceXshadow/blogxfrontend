import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-type': 'application/json'}

    });

    if(response.status === 200) {
      alert('Registration successful');
      navigate('/');
    } else {
      alert('Registration failed');
    }
  }
  return (
    <div className='common-flex min-w-screen mt-40'>
      <div className='w-full lg:w-1/2 p-10'>
        <form action="" className="flex flex-col gap-3 w-full" onSubmit={register}>
          <input 
            className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="text" 
            name="username" 
            placeholder="input username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}/>
          <input 
            className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="password" 
            name="password" 
            placeholder="input password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button type='submits' className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150">Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage