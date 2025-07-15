import React, { useEffect, useState } from 'react'
import { apiroot } from '../../../service/Myapi'
import axios from 'axios'

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



  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fullname</th>
                <th scope="col">Email</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {user.map((d) => {
                return (
                  <tr>
                    <th scope="row">{d._id}</th>
                    <td>{d.fullname}</td>
                    <td>{d.email}</td>
                    <td>@mdo</td>
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