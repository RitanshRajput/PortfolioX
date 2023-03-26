import React  from "react";
import { Link } from "react-router-dom";
import {  AiOutlineCloseCircle} from 'react-icons/ai' ;
import { BsFillSunFill } from 'react-icons/bs' ;
import { RiApps2Fill } from 'react-icons/ri' ;

const Header = ({menuOpen, setMenuOpen}) =>{


    return( 
   <>
       <SidePanel setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
       <div id="header" >
         <div className="left">
           <RiApps2Fill className="menu" onClick={()=> setMenuOpen(!menuOpen) } />
           <Link className="heading" to={'/'}><h2 >Ritansh.</h2></Link>
         </div>
         <BsFillSunFill className="setting" />
      </div>
   </>      
    ) ;
} ;


const SidePanel = ({menuOpen, setMenuOpen}) => (
   <>
    <div className={`sidePanel ${menuOpen ? "sidePanelComes" : "" }`}>
      <div className="header">
      <h3 className="heading" > Ritansh. </h3>
      <AiOutlineCloseCircle  onClick={()=> setMenuOpen(!menuOpen) } />
      </div>

      <div className="ProjectContainer">
         <h3 className="title">Minor Projects </h3>
         <div className="linkContainer">
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/'} >Home</Link>
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'./calculator'} >Calculator</Link>
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/todo'} >Todo App</Link>
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/'} >Calculator</Link>
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/'} >Calculator</Link>
         </div>
      </div>
      <div className="login">
        <button onClick={()=> setMenuOpen(false)} className="login"><Link className="login-link" to={'./login'}>Log In</Link></button>
        <button onClick={()=> setMenuOpen(false)} className="signup"><Link className="login-link" to={'./signup'}>Sign Up</Link></button>
      </div>
   </div> 
   </>
) ;

export default Header 