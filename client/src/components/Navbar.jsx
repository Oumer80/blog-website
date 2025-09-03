import React from 'react'
import useAuth from '../context/useAuth'
import Profile from './Profile'
import { useState } from 'react';

const Navbar = () => {
   const [open, setOpen] = useState(false);

  const handleProfile=()=>{
    setOpen(!open)
  }
  const {user,logout}=useAuth()
  return (
    <div className='flex items-center justify-between p-4 bg-teal-700 text-gray-100 mb-4'>
      <div className='text-2xl font-bold italic font-mono'>Masho</div>
      <div>e</div>
      <div>
       {!user ? (<div className='flex gap-3'>
        <button className='px-4 py-2 rounded border border-gray-500 '>Login</button>
        <button className='px-4 py-2 rounded bg-to-blue-700 border border-gray-500 '>Join us</button>
       </div>):(<div className='flex gap-3'>
        <div onClick={handleProfile}  className=' cursor-pointer flex items-center justify-center w-10 h-10 rounded-full  bg-purple-800  text-2xl'>{user?.name[0].toUpperCase()}</div>
        <button onClick={logout} className='px-2 py-1 rounded-md hover:bg-red-700 bg-red-500'>Logout</button></div>
       )}
       {open && <Profile/>}
      </div>
    </div>
  )
}

export default Navbar