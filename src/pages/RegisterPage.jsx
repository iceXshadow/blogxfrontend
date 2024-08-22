import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../api';
import toast, { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    const response = await fetch(API_BASE_URL+'/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-type': 'application/json'}

    });

    if(response.status === 200) {
      toast.success('Registration successfull.', {
        position: 'bottom-center',
        style: {
          border: '1px solid #22c55e',
          // padding: '16px',
          color: '#fff',
        },
      });
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      toast.error('Registration failed.', {
        position: 'bottom-center',
        style: {
          border: '1px solid #ef4444',
          // padding: '16px',
          color: '#fff',
        },
      });
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  }
  return (
    <div className='common-flex min-w-screen mt-40'>
      <Toaster 
        position = "bottom-center"
        toastOptions={{
        style: {
          background: '#1c1f26',
          color: '#fff',
          fontFamily: "Outfit"
        },
        duration: 3000
      }}/>
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