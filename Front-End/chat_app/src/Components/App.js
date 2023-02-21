import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inbox from './Inbox'
import Login from './Login'
import LogOut from './LogOut'
import Register from './Register'
import "./style.css"

const App = () => {
  return (
    <div>
        <Router>
        <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/Login">Sign In</Link>
                </li>
                <li>
                    <Link to="/LogOut">LogOut</Link>
                </li>
            </ul>
        </div>
    </div>

          <Routes>
            <Route path='/' element={<Inbox/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<LogOut/>}/>
          </Routes>
          </Router>      
    </div>
  )
}

export default App