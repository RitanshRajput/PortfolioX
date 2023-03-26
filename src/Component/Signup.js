import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="signup">
       <form >
          <h2 className='heading'>Sign up Page</h2>
          <BsPersonCircle className='profile' />
          <div className="content">
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required /> 
            <button  className="signupBtn"> <Link className="signupLink" to={'/'}>Sign Up</Link> </button>
            
            <div className="already">
              <p>Already Signup?</p>
              <button type='button' className='login'> <Link className='loginBtn' to={'/login'} >Login In</Link> </button>
            </div>
          </div>
       </form>
    </div>
  )
}

export default Signup
