import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='container-fluid signup'>
        <Link to='/'><button className='bubble'>Login</button></Link>
        <div className='signupmain'>
            <div className='signupmain-1'>
              <p className='para'>Unlimited movies, TV shows and more</p>
              <p>Starts at ₹149. Cancel at any time.</p>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <form action="">
                <input type="text" placeholder='emailadress' className='username1'/><br /><br />
                <input type="password" placeholder='createpassword'className='username1' /><br /><br />
                <input type="password" placeholder='confirmpassword'className='username1'/>
              </form>
             <Link to='/'> <button>Getstarted</button></Link>
            </div>
        </div>
    </div>

  )
}

export default Signup
