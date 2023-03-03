import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css"
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from "react-notifications"
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SignIn = (e) => {
    e.preventDefault();
    //console.log(e);

    //Form Validation

    const token = localStorage.getItem("token");
    if (password.length < 3) {
      NotificationManager.warning("Password must be at least 3 characters", "", 3000);
      return;
    }
    // To check whether the user is already logged in or not

    // axios call
    axios.post("https://newchatbot.herokuapp.com/user/login", {
      email: email,
      password: password
    }).then(res => {
      const token2 = localStorage.setItem("token", res.headers.token);
      localStorage.setItem("test", JSON.stringify(res.data));
      if (token2 === token) {
        NotificationManager.warning("You are already logged in", "", 3000);
        return;
      }
      NotificationManager.success(`${res.data.name} is successfully Logged in`, "", 4000);
      //console.log(res);
      // Res to send to inbox
      navigate("/inbox")
      //navigate({state:{res:res.data}})

      // console.log(res.data)
    }).catch(err => {

      if (!email || !password) {
        NotificationManager.warning(err.response.data, "", 3000)
      }
      NotificationManager.error(err.response.data, "", 3000)
      //console.log(err.response.data);
    })

  }
  return (
    <div style={{ "marginLeft": "280px", "textAlign": "center" }}>
      <form className="htmlForm-horizontal" onSubmit={(e => SignIn(e))} >
        <fieldset >
          <div id="fieldset2">
            <div id="legend" style={{ "color": "green", "paddingBottom": "100px" }}>
              <legend className=""><h1>Log in</h1></legend>
            </div>

            <div className="control-group">
              {/*<!-- E-mail -->*/}
              <label className="control-label" htmlFor="email"></label>
              <div className="controls">
                <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="example@gmail.com" className="input-xlarge rounded-pill" />

              </div>
            </div>

            <div className="control-group">
              {/*<!-- Password-->*/}
              <label className="control-label" htmlFor="password"></label>
              <div className="controls">
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' className="input-xlarge rounded-pill" />
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

export default Login
