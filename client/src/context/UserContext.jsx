import { useEffect } from "react"
import { AuthContext } from "./useAuth"
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export const UserProvider = ({children})=>{
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
       const checkAuth =async ()=>{
        const storedUser = JSON.parse(localStorage.getItem('token'))
       if(storedUser){
        const response = await axios.get('https://glorious-robot-r4pj9x7gx6wq3r9g-8080.app.github.dev/api/users/profile')
        setUser(response.data)
        setLoading(false)
       }
       }
       checkAuth()
    },[]);
    const updateUser=(userData)=>{
        setUser(userData)
    }

    const logout = ()=>{
        localStorage.clear()
        setUser(null)
        navigate('/login')
    }
    const value={user, loading,logout, navigate,updateUser}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}