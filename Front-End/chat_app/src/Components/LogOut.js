import React, { useEffect } from 'react'
import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css';
import { useNavigate } from 'react-router-dom';
const LogOut = () => {
  const navigation = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      NotificationManager.error("Already Logged out","",3000)
      navigation("/")
    }
    else{
      localStorage.removeItem("token");
      localStorage.removeItem("test");
      NotificationManager.warning("Logged Out Successfuly !","",3000);
      navigation("/")
    }
  })
  return (
    <div>
      
    </div>
  )
}

export default LogOut