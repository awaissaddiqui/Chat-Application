import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css"
const Login = ()=>{
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const SignIn=(e)=>{
    e.preventDefault();
    // axios call
    axios.post("http://localhost:3001/user/login",{
      email:email,
      password:password
    }).then(res=>{

      console.log(res.response.data)
    }).catch(err=>{
      console.log(err.response.data);
    })
  }
  return (
    <div style={{"marginLeft":"280px", "textAlign":"center"}}>
<form className="htmlForm-horizontal" onSubmit={(e=>SignIn(e))} >
  <fieldset >
    <div id="fieldset2">
    <div id="legend" style={{"color":"green","paddingBottom":"100px"}}>
      <legend className=""><h1>Log in</h1></legend>
    </div>

    <div className="control-group">
      {/*<!-- E-mail -->*/}
      <label className="control-label" htmlFor="email"></label>
      <div className="controls">
        <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="example@gmail.com" className="input-xlarge rounded-pill"/>
        
      </div>
    </div>
  
  <div className="control-group">
      {/*<!-- Password-->*/}
      <label className="control-label" htmlFor="password"></label>
      <div className="controls">
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password'  className="input-xlarge rounded-pill"/>
      </div>
    </div>

    <div className="control-group">
     {/* <!-- Button -->*/}
      <div className="controls">
        <br></br>
        
        <button className="btn btn-success" type='submit' >Login</button>{" "}
        <Link className="btn btn-warning" to="/">Register</Link>


      </div>
    </div>
    </div>
  </fieldset>
</form>
    </div>
  )
}

export default  Login
