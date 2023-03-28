import { useState } from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

function App() {

  return (
      <div className="container-fluid mx-5">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>     
  )
}

export default App
