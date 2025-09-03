import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
    </Routes>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App