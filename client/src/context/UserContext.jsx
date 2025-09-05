import { useEffect } from "react"
import { AuthContext } from "./useAuth"
import { useState } from "react"
import axios from 'axios'
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

    const login = async (email, password) => {
            try {
                const response = await axios.post('/api/users/login', { email, password });
                const userData = response.data;
                localStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
                navigate('/profile');
            } catch (error) {
                console.error(error.response?.data?.message || 'Login failed');
            }
        };

    const register = async (name, email, password) => {
            try {
                const response = await axios.post('/api/users', { name, email, password });
                const userData = response.data;
                localStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
                navigate('/profile');
            } catch (error) {
                console.error(error.response?.data?.message || 'Registration failed');
            }
        };

    const logout = ()=>{
        localStorage.clear()
        setUser(null)
        navigate('/login')
    }
    const value={user, loading,logout,login,register, navigate}
    return(
        <AuthContext.Provider value={value}>
           {children}
        </AuthContext.Provider>
    )
}