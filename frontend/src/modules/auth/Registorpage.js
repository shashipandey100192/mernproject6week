import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify';
import { apiroot } from '../../service/Myapi';


function Registorpage() {
    const nav = useNavigate();
const {register,handleSubmit,formState: { errors }} = useForm();
const [a,xyz]=useState("block");

const mysubmit = (d)=>{
    
    axios.post(`${apiroot}/registoruser`,d).then((u)=>{
        console.log(u);
        toast.success("user successfully registor",{autoClose:2000});
        setTimeout(()=>{
             nav("/");
        },2000);

    })
    

}


    return (
        <div className='mylogin'>
            <div class="register-container">
                <form class="register-form" onSubmit={handleSubmit(mysubmit)}>
                    <h2>Create Account</h2>
                    <ToastContainer></ToastContainer>
                    <div class="input-group">
                        <label for="name">Full Name</label>
                        <input type="text" {...register("fullname",{required:true})}/>
                        {errors.fullname && <p className='text-danger'>full name is required</p>}
                    </div>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" {...register("email",{required:true})} />
                         {errors.email && <p className='text-danger'>email is required</p>}
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" {...register("pass",{required:true,maxLength:8,minLength:4})}/>
                        {errors.pass?.type==="required" && <p className='text-danger'>password is required</p>}
                        {errors.pass?.type==="minLength" && <p className='text-warning'>minimun 4 is checector required</p>}
                        {/* {errors.pass?.type==="maxLength" && <p className='text-success'>your password is strong too logn</p>} */}
                        {errors.pass?.type==="maxLength" && "sdkfjskdf"}
                    </div>
                    <div class="input-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" {...register("cpass")} />
                    </div>
                    <button type="submit" style={{display:a}}>Register</button>
                    <p class="login-link">Already have an account? <Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Registorpage