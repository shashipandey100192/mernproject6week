import React, { useEffect, useState } from 'react'
import { apiroot } from '../../../service/Myapi'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';

function Aboutpage() {
  const [user, updateuser] = useState([]);

  const getallusers = () => {
    axios.get(`${apiroot}/alluser`).then((d) => {
      console.log(d.data);
      updateuser(d.data);
    })
  }

  useEffect(() => {
    getallusers();
  }, [])

const deleteuser = (id)=>
{
  axios.delete(`${apiroot}/deletedata/${id}`).then((d)=>{
    console.log(d);
    const b = d.data.status;
        if(b===370)
        {
          toast.success("this data is removed",{autoClose:2000});
           setTimeout(()=>{
            getallusers();
           },2000);
        }
      
   
  })

}




  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 mt-3'>
          <h4>List Of Users: - </h4>
          <ToastContainer></ToastContainer>
          <table class="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Mongodb Id</th>
                <th scope="col">Fullname</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {user.map((d) => {
                return (
                  <tr>
                    <th scope="row">{d._id}</th>
                    <td>{d.fullname}</td>
                    <td>{d.email}</td>
                    <td>
                        <Link to={`viewdetails/`+d._id} className='btn btn-info btn-sm ms-2'>View</Link>
                        <Link to={`edituser/`+d._id} className='btn btn-warning btn-sm ms-2'>Edit</Link>
                        <button className='btn btn-danger btn-sm ms-2' onClick={()=>deleteuser(d._id)}>Del</button>
                      
                       </td>
                  </tr>
                )
              })}




            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Aboutpage