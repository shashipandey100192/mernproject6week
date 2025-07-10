import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
    return (
        <div className='mylogin'>
            <div class="error-container">
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/">Go Back Home</Link>
            </div>
        </div>
    )
}

export default Errorpage