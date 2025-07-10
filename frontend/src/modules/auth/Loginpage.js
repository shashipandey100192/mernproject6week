import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
 import { useSelector } from 'react-redux';





function Loginpage() {
  const count = useSelector((state) => state.counter.value);

const [user, setuser]=useState("abc");
const [pass, setpass]=useState("123");
const nav = useNavigate();


  const userfunc=(ele)=>{
      console.log(ele.target.value);
      setuser(ele.target.value);
  }

    const passfunc=(ele)=>{
      console.log(ele.target.value);
      setpass(ele.target.value)
  }

  const login = ()=>{
      if(user==="admin" && pass==="123")
      {
       toast.success("successfully login",{position: "top-left",autoClose: 1000,theme: "dark"});
       setTimeout(()=>{
        nav("/dashboard");
       },1000);
        
      }
      else
      {
         toast.error("Error Login",{position: "top-left",autoClose: 2000,theme: "dark"});
      }
  }

  return (
    <div className='mylogin'>
    <div className="login-container">
    <form className="login-form">
      <h2>Login</h2>
      <ToastContainer/>
      <div className="input-group">
        <label for="email">Email {count}</label>
        <input type="email" id="email" required  onInput={userfunc} value={user}/>
      </div>
      <div className="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" required onInput={passfunc} value={pass}/>
      </div>
      <button type="button" className='btn btn-success' onClick={login}>Login</button>
      <p className="signup-link">Don't have an account? <Link to="registor">Sign up</Link></p>
    </form>
  </div>
  </div>
  )
}

export default Loginpage