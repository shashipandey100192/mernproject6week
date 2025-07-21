import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { apiroot } from '../../../service/Myapi';

function ViewDetailspage() {
    const {id} =useParams() 

  const [user, updateuser] = useState({});

  const singleuser = () => {
    axios.get(`${apiroot}/singleuser/${id}`).then((d) => {
      console.log(d.data);
      updateuser(d.data);
    })
  }

  useEffect(() => {
    singleuser();
  }, [])


  
    return (
   <div className='border p-3 shadow'>
      <h1>user Id: {user._id}</h1>
      <h1>user Id: {user.fullname}</h1>
      <h1>user Id: {user.email}</h1>
      <h1>user Id: {user.pass}</h1>
      <Link to="/dashboard/profile/about" className='btn btn-info'>back</Link>
   </div>
  )
}

export default ViewDetailspage