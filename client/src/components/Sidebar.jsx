import React from 'react'
import { sidebarItems } from '../utils/data'
import { Link } from 'react-router-dom'

const Sidebar = ({activeMenu}) => {
  return (
    <div className='w-48 px-3 md:px-6 h-screen border-r border-slate-300 pt-4 '>
        <div className='flex flex-col gap-5 mt-16'>
{sidebarItems.map((item)=>(
        <ul key={item.id} className=''>
            <Link to={`${item.path}`} className={`${activeMenu == item.text ? "bg-purple-600 text-gray-300 ": ""} flex items-center gap-3 rounded-md hover:bg-slate-300 transition-colors border border-slate-100 px-4 py-2 drop-shadow-xl shadow-black`}><item.icon size={30}/> {item.text}</Link>
        </ul>
       
       ))}
        </div>
       
    </div>
  )
}

export default Sidebar