import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login (e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-type': 'application/json'},
      credentials: 'include',
    })

    if(response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
    } else {
      alert('wrong credentials');
    }
  }

  if(redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='common-flex min-w-screen mt-40'>

      <div className='w-full lg:w-1/2 p-10'>

        <form action="" className="flex flex-col gap-3 w-full" onSubmit={login}>
          
          <input 
            className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="text" 
            name="username" 
            placeholder="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)} />
          
          <input 
            className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="password" 
            name="password" 
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)} />
          
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-purple-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
        
        </form>
      
      </div>
    
    </div>
  )
}

export default LoginPage