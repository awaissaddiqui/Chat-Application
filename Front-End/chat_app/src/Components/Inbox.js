import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useLocation, useNavigate } from 'react-router-dom';
import "./style.css"
const Inbox = () => {
  const [name, setName]=useState("");
  const [message, setMessage]=useState("");
  const [response, setResponse]=useState("");
  const [response2, setResponse2]=useState("");
  const [test, setTest]=useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      NotificationManager.error("You should Login First","",3000)
      navigate("/login")
    }
    const test = location.state;
    setTest(test.res.phone);
  },[location.state,navigate,test])
  
  const sendMessage=(e)=>{
    e.preventDefault();
    if(!name || !message){
      NotificationManager.error("Please filled all fields","",3000)
      return;
    }
    const token = localStorage.getItem("token")
    axios.post("http://localhost:3001/user/inbox",{
      name,
      message
    },{
      headers:{
        token:token
      }
    }).then(res=>{
      setResponse(res.data.message);
      setResponse2(res.data.name);
      setMessage("");
      setName("");
      console.log(res);
    }).catch(err=>{
      console.log(err);
      NotificationManager.error("Something went wrong"+err,"",3000)
    })
        
}
  return (
    <div  style={{"marginLeft":"300px","paddingTop":"100px"}}>
      <div>
        <form onSubmit={(e)=>sendMessage(e)}>
    <h1  className="display-4">Send Message</h1>
    <input type="text" id="name1" placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name}/><br></br>
    <input type="text" id="message" placeholder='Your message here' onChange={(e)=>setMessage(e.target.value)} value={message}/><br></br>
    <button type="submit" className="btn btn-success">Send </button>
        </form>
      </div><br></br>
      {/*Recevied Message*/}
      <div>
        <h1 className="display-5">Received Message</h1>
        
        <div id='msgUser'>
        {response2&&<h3 className='text-warning'>{response2}</h3>}
        {test&&<p className='text-white'>{test}</p>}
        {response&&<h5 className="text-info bg-dark">{response}</h5>}
        </div>
          </div>
      </div>
  )
}

export default Inbox