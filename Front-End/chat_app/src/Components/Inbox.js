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
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      NotificationManager.error("You should Login First","",3000)
      navigate("/login")
    }

  })
  
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
      setMessage("");
      setName("");
      console.log(res);
    }).catch(err=>{
      console.log(err);
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
      </div>
      {/*Recevied Message*/}
      <div>
        <h1 className="display-4">Received Message</h1>
        {response&&<p>{response}</p>}
       {/* {response&&<p>{response}</p>}*/}
        

          </div>
      </div>
  )
}

export default Inbox