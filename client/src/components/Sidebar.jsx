import React from 'react'
import { sidebarItems } from '../utils/data'
import useAuth from '../context/useAuth';


const Sidebar = ({activeMenu}) => {
const {navigate,logout}= useAuth();


    const handlePath = (route)=>{
        if(route === '/login'){
            logout();
            return;
        }else{
            navigate(route)
        }
    }
    
  return (
    <div className='w-56 px-3 md:px-6 h-screen border-r border-slate-300 pt-4 '>
        <div className='flex flex-col gap-5 mt-16'>
{sidebarItems.map((item)=>(
        <ul key={item.id} className=''>
            <li onClick={()=>handlePath(item.path)} className={`${activeMenu == item.text ? "bg-purple-600 hover:bg-purple-800  text-gray-300 ": ""} flex items-center gap-3 rounded-md hover:bg-slate-100 transition-colors border border-slate-100 px-4 py-2 font-semibold drop-shadow-xl shadow-black`}><item.icon size={30}/> {item.text}</li>
        </ul>
       
       ))}
        </div>
       
    </div>
  )
}

export default Sidebar