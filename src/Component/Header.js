import React  from "react";
import { Link } from "react-router-dom";
import { AiFillSetting} from 'react-icons/ai' ;
import { RiApps2Fill } from 'react-icons/ri' ;

const Header = () =>{

    return(
      <div id="header">
         <div className="left">
           <RiApps2Fill className="menu" />
           <h2 className="heading">Ritansh.</h2>
         </div>
         <AiFillSetting  className="setting" />
      </div>
    ) ;
} ;


const SidePanel = () => (
   <>
    <div className="sidePanel">
      <h3 className="heading"> Ritansh. </h3>

      <div className="accordianContainer">
         <button className="accordian">Minor Projects</button>
         <Link to={'/'} >Calculator</Link>
         <Link to={'/'} >Calculator</Link>
         <Link to={'/'} >Calculator</Link>
         <Link to={'/'} >Calculator</Link>
         <Link to={'/'} >Calculator</Link>
      </div>
   </div> 
   </>
) ;

export default Header 