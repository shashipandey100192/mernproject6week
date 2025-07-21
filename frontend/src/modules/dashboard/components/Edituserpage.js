import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { apiroot } from '../../../service/Myapi';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

function Edituserpage() {

const {id} = useParams();
const nav = useNavigate();
const {register,handleSubmit,formState: { errors }} = useForm();


  const [user, updateuser] = useState({
        fullname:"",
        email:"",
        pass:"",
        cpass:""
  });


   const updatefield = (e)=>{
        const {name,value} = e.target;
        updateuser((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }



  const singleuser = () => {
    axios.get(`${apiroot}/singleuser/${id}`).then((d) => {
        console.log(d.data);
        updateuser(d.data);
        
    })
  }

  
  useEffect(() => {
    singleuser();
  }, [])


const updateUser = async (e) => {
  await axios.patch(`http://localhost:5500/updateuser/${id}`,e).then((d)=>{
    console.log(d)
    if(d.data.status===376)
        {
          toast.success(d.data.message,{autoClose:2000});
          setTimeout(()=>{
            nav('/dashboard/profile/about');
          },2000);
        }
  })


}




  return (
   <div className='mylogin'>
            <div class="register-container">
                <form class="register-form" onSubmit={handleSubmit(updateUser)}>
                    <h2>Update User Account</h2>
                    <div class="input-group">
                        <label for="name">Full Name</label>
                        <ToastContainer/>
                        <input type="text" {...register("fullname",{required:true})} value={user.fullname} name='fullname' onInput={updatefield}/>
                        {errors.fullname && <p className='text-danger'>full name is required</p>}
                    </div>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" {...register("email",{required:true})} value={user.email} name='email' onInput={updatefield}/>
                         {errors.email && <p className='text-danger'>email is required</p>}
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" {...register("pass",{required:true,maxLength:8,minLength:4})} value={user.pass} name='pass' onInput={updatefield}/>
                        {errors.pass?.type==="required" && <p className='text-danger'>password is required</p>}
                        {errors.pass?.type==="minLength" && <p className='text-warning'>minimun 4 is checector required</p>}
                        {/* {errors.pass?.type==="maxLength" && <p className='text-success'>your password is strong too logn</p>} */}
                        {errors.pass?.type==="maxLength" && "sdkfjskdf"}
                    </div>
                    <div class="input-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" {...register("cpass")}  value={user.cpass} name='cpass' onInput={updatefield}/>
                    </div>
                    <button type="submit">Register</button>
                 
                </form>
            </div>
        </div>
  )
}

export default Edituserpage