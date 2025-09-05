import { useEffect } from "react"
import { AuthContext } from "./useAuth"
import { useState } from "react"
// import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export const UserProvider = ({children})=>{
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const navigate = useNavigate()
   
   useEffect(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        }, []);

    const updateUser=(userData)=>{
        setUser(userData)
    }

    const logout = ()=>{
        localStorage.clear()
        setUser(null)
        navigate('/login')
    }
    const value={user, loading,logout, navigate,updateUser,token}
    return(
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>
    )
}