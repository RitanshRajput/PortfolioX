import React from "react";
import { Link } from "react-router-dom";

const Login =() => {

    return(
        <div className="login">
            <form >
               <h2 className="heading">Welcome Back</h2>
               <div className="content">
               <input type="email" placeholder="Email" required  />
               <input type="password" placeholder="Password" required />

               <button type="button" className="forget">Forgot Password?</button>
               <button type="button" className="loginBtn"> <Link className="loginLink" to={'/'}>Log In</Link> </button>

             <div className="newUser">
             <p>New User?</p>
             <button type="button" className="signup"  > <Link className="signupBtn" to={'/signup'}>Sign up</Link> </button>
             </div>  
               </div>
            </form>
        </div>
    );
}

export default Login ;