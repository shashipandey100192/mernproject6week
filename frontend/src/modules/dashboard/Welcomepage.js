import React from 'react'
import { Link } from 'react-router-dom';
import { myapplist } from '../shares/Myappmenu';

function Welcomepage() {
  return (
    <div className='container'>
        <div className='row'>
        {/* <Link to="profile" className='col-md-3 text-center border c-flex m-2 rounded'>
            <div className='card userlogin'></div>
            <h5 className='mt-2'>user Login</h5>
        </Link> */}
        {myapplist.map((d)=>{
            return(
                <Link to={d.approut} className='col-md-3 text-center border c-flex m-2 rounded'>
                   
            <div className='card userlogin'>
                 <img src={d.appicons} alt='appiconsiamge' className="profilepic"/>
            </div>
            <h5 className='mt-2'>{d.appname}</h5>
        </Link>

            )
        })}
       

    </div>
    </div>
  )
}

export default Welcomepage