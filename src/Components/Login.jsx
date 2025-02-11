import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container-fluid login'>
  
      <div className='loginmain'>
        <div className='loginmain-1 p-5'>
        <h3>Login</h3>
        <form action="">
            
            <input type="text" placeholder='enter username' className='username'/><br /><br />
            <input type="password" placeholder='enter passsword' className='username'  />
          
        </form>
        <br />
        <Link to='/dashboard'><button>Login</button></Link><br /><br />
        <Link to='/forgot' className='text'>Forgot password</Link><br /><br />
        <p>new to netflix? <Link to='/signup' className='text'>Signup now.</Link></p>
        <p >This page is protected by Google reCAPTCHA <br></br>to ensure you're not a bot.</p>
       </div>
      </div>
    </div>
  )
}

export default Login
