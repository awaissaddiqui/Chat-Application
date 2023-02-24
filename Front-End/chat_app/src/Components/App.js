import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inbox from './Inbox'
import Login from './Login'
import LogOut from './LogOut'
import Register from './Register'
import Error from './Error'
import "./style.css"
import  {NotificationContainer} from "react-notifications"

const App = () => {
  return (
    <div>
        <Router>
            <NotificationContainer/>
        <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    <Link to="/inbox">Inbox</Link>
                </li>
                <li>
                    <Link to="/">Sign up</Link>
                </li>
                <li>
                    <Link to="/Login">Log in</Link>
                </li>
                <li>
                    <Link to="/LogOut">LogOut</Link>
                </li>
            </ul>
        </div>
    </div>

          <Routes>
            <Route path='/inbox' element={<Inbox/>}/>
            <Route path='/' element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<LogOut/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
          </Router>      
    </div>
  )
}

export default App