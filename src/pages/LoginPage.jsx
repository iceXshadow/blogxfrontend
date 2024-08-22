import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { API_BASE_URL } from '../api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        toast.success('Logged in Successfully.', {
          position: 'bottom-center',
          style: {
            border: '1px solid #3b82f6',
            // padding: '16px',
            color: '#fff',
          },
          iconTheme: {
            primary: '#22c55e',
            secondary: '#f3f7fb',
          },
        });
        console.log('Token:', userInfo.token);
        setTimeout(() => {
          setRedirect(true);
        }, 1000); // Delay of 2 seconds before redirecting
      });
    } else {
      toast.error("Wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='common-flex min-w-screen mt-40'>
      <Toaster 
        position='bottom-center'
        toastOptions={{
          style: {
            background: '#1c1f26',
            color: '#fff',
            fontFamily: "Outfit"
          },
          duration: 3000
      }}/>
      <div className='w-full lg:w-1/2 p-10'>
        <form action="" className="flex flex-col gap-3 w-full" onSubmit={login}>
          <input
            className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-purple-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;