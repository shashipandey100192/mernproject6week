import React from 'react'
import Sidebarpage from '../shares/Sidebarpage'
import Headerpage from '../shares/Headerpage'
import { Outlet } from 'react-router-dom'

function Profilepage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col g-0'>
                <Headerpage/>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2'>
                <Sidebarpage/>
            </div>
            <div className='col-md-10'>
               <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Profilepage