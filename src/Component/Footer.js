import React from "react";
import {AiFillLinkedin , AiFillGithub, AiFillMail, AiOutlineArrowUp } from 'react-icons/ai'
import thankyou from '../Assets/thankyou.png'

const Footer = () => {

    return (
        <footer>
         <div className="container">
            <div className="arrowUp">
             <a href="#home"> <AiOutlineArrowUp /> </a>              
              <p>Back to Top</p>
            </div>

            <div className="link">
                <div className="msg">Feel Free to Connect with Me:</div>
                <div className="aTags">
                <a title="Linkedin" href="https://linkedin.com/in/ritansh-rajput"><AiFillLinkedin /></a>
                <a title="Github" href="https://github.com/RitanshRajput"><AiFillGithub /></a>
                <a title="Email" href="mailto:ritanshrajput21@gmail.com"><AiFillMail /></a>
                </div>
            </div>
            
         <div className="image">
            <img src={thankyou} alt="thank you image" />
         </div>

        </div>
     </footer>
    );
}

export default Footer ;