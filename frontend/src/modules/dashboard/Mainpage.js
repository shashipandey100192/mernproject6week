import React from 'react'
import Myimg from "../shares/images/ipl.png"; 
import { FcHome,FcEndCall } from "react-icons/fc";
const Abc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhE6BR-rfQWZ_lpTkxrjLc70wncjrIps1_Q&s";


function Mainpage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1>this is main page</h1>
               
                <img src="abc.png" alt='xuysejfkhs' width={200}/>

                <img src={Myimg} alt='xuysejfkhs' width={200}/>
                <img src={Abc} alt='sdfsdf' width={200}/>
                <hr/>
                 <FcHome/>
                 <h1> <FcEndCall/></h1>

            </div>
        </div>
    </div>
  )
}

export default Mainpage