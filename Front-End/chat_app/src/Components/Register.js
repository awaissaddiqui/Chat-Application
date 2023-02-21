import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div style={{"marginLeft":"280px"}}>
{/*
    Registeration htmlForm 
 */}
    <form className="htmlForm-horizontal" action='' method="POST" >
  <fieldset>
    <div id="legend">
      <legend className="">Register</legend>
    </div>
    <div className="control-group" style={{"marginTop":"100px"}}>
      {/*<!-- Username -->*/}
      <label className="control-label"  htmlFor="username"> <h5>Username</h5></label>
      <div className="controls">
        <input type="text" id="username" name="username" placeholder="" className="input-xlarge"/>
      </div>
    </div>
 
    <div className="control-group">
      {/*<!-- E-mail -->*/}
      <label className="control-label" htmlFor="email"><h5>Email </h5></label>
      <div className="controls">
        <input type="text" id="email" name="email" placeholder="example@gmail.com" className="input-xlarge"/>
        
      </div>
    </div>
 
 
     <div className="control-group">
     {/*} <!-- Phone  -->*/}
      <label className="control-label"  htmlFor="phoneNumber"><h5>Phone</h5></label>
      <div className="controls">
        <input type="number" id="phoneNumber" name="phoneNumber" placeholder="0123456789" className="input-xlarge"/>
       
      </div>
    </div> 
  
  <div className="control-group">
      {/*<!-- Password-->*/}
      <label className="control-label" htmlFor="password"><h5>Password</h5></label>
      <div className="controls">
        <input type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
      </div>
    </div>

    <div className="control-group">
     {/* <!-- Button -->*/}
      <div className="controls">
        <br></br>
        <Link className="btn btn-success">Register</Link> {"  "} {"  "}
        <Link className="btn btn-danger" to="/login">Login</Link>

      </div>
    </div>
    
  </fieldset>
</form>
      </div>
  )
}

export default Register