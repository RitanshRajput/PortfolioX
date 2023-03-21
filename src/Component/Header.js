import React  from "react";
import { Link } from "react-router-dom";
import { AiFillSetting, AiOutlineCloseCircle} from 'react-icons/ai' ;
import { RiApps2Fill } from 'react-icons/ri' ;

const Header = ({menuOpen, setMenuOpen}) =>{

    const homebutton = ()=> {
      
    } ;

    return( 
   <>
       <SidePanel setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
       <div id="header" >
         <div className="left">
           <RiApps2Fill className="menu" onClick={()=> setMenuOpen(!menuOpen) } />
           <a href="#home" className="heading"> <h2 onClick={homebutton}>Ritansh.</h2> </a>
          
         </div>
         <AiFillSetting  className="setting" />
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
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/calculator'} >Calculator</Link>
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/'} >Calculator</Link>
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/'} >Calculator</Link>
         <Link onClick={()=> setMenuOpen(false)} className="link" to={'/'} >Calculator</Link>
         </div>
      </div>
      <div className="login">
         <button className="login">Log In</button>
         <button className="signup">Sign Up</button>
      </div>
   </div> 
   </>
) ;

export default Header 