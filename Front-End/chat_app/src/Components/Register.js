import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./style.css"
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from "react-notifications"
const Register = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const [password,setPassword]=useState("");
  const navigation = useNavigate();
  const signUp =(e)=>{
    e.preventDefault();
  //Form  Validation
  if(name.length<3){
    NotificationManager.warning("Name must be at least 3 characters","",3000);
    return;
  }
  else if(phone.length<11){
    NotificationManager.warning("Phone number must be at least 11 digits","",3000);
    return;
  }
  else if(password.length<3){
    NotificationManager.warning("Password must be at least 3 characters","",3000);
    return;
  }
  // Axios Call
    axios.post("https://newchatbot.herokuapp.com/user/register",{
      name:name,
      email:email,
      phone:phone,
      password:password
    }).then(res=>{
      NotificationManager.success(`${res.data.name} is successfully register`)
      navigation("/inbox")
     // console.log(res);
    }).catch(err=>{
      if(!name || !email || !phone || !password){
        NotificationManager.warning(err.response.data,"",3000)
      }
      NotificationManager.error(err.response.data,"",3000)
       //console.log(err.response.data);
    })
  }
  return (
    <div style={{"marginLeft":"280px", "textAlign":"center"}}>
{/*
    Registeration htmlForm 
 */}
    <form className="htmlForm-horizontal" onSubmit={(e)=>signUp(e)}  >
  <fieldset >
    <div id="fieldset">
    <div id="legend" style={{"color":"green","paddingBottom":"100px"}}>
      <legend className=""><h1>Sign up</h1></legend>
    </div>
    <div className="control-group">
      {/*<!-- Username -->*/}
      <label className="control-label"  htmlFor="username"> </label>
      <div className="controls">
        <input type="text" id="username" onChange={(e)=>setName(e.target.value)} value={name} name="username" placeholder="Enter your name" className="input-xlarge rounded-pill"/>
      </div>
    </div>
 
    <div className="control-group">
      {/*<!-- E-mail -->*/}
      <label className="control-label" htmlFor="email"></label>
      <div className="controls">
        <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="example@gmail.com" className="input-xlarge rounded-pill"/>
        
      </div>
    </div>
 
 
     <div className="control-group">
     {/*} <!-- Phone  -->*/}
      <label className="control-label"  htmlFor="phoneNumber"></label>
      <div className="controls">
        <input type="number" id="phoneNumber" name="phoneNumber" onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="0123456789" className="input-xlarge rounded-pill"/>
       
      </div>
    </div> 
  
  <div className="control-group">
      {/*<!-- Password-->*/}
      <label className="control-label" htmlFor="password"></label>
      <div className="controls">
        <input type="password" id="password" name="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}  className="input-xlarge rounded-pill"/>
      </div>
    </div>

    <div className="control-group">
     {/* <!-- Button -->*/}
      <div className="controls">
        <br></br>
        <button type='submit' className="btn btn-success">Register</button> {" "}
        <Link className="btn btn-warning" to="/login">Login</Link>

      </div>
    </div>
    </div>
  </fieldset>
</form>
      </div>
  )
}

export default Register