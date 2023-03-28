import { useState } from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Todos from './pages/Todos'
import { isUserLoggedIn } from './utils/auth'

function App() {

  return (
      <div className="container-fluid mx-5">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/todos" element={<Todos/>}/>
        </Routes>
      </div>     
  )
}

export default App
