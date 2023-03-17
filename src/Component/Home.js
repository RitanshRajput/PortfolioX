import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' ;
import { Carousel } from 'react-responsive-carousel';
import paint from '../Assets/paint.png' ;
import samurai from '../Assets/samurai.png' ;
import tree from '../Assets/tree.png' ;
import underTree from '../Assets/underTree.png' ;
import cool from '../Assets/cool.png'


const Home = () => {
  return (
    <div id='home' className='carousel-container'> 
        <MyCarousel />
        <Myself />
    </div>
  ) 
} ;


// carousel code 
const MyCarousel = () => (
  <Carousel id='carousel'
  autoPlay
  infiniteLoop
  interval={2000}
  showStatus={false}
  showArrows={false}
  showThumbs={false}
  showIndicators={false}
  
  >
<div className='headImage img1'>
<img className='img' style={{maxHeight: '95vh', objectFit: 'contain'}} src={tree} alt="tree" />
 <p>
“The perfect blossom is a rare thing. You could spend your life looking for one and it would not be a wasted life.” </p>
<h5>- Ken Watanabe</h5>
</div>
<div className='headImage img2'>
<img className='img' style={{maxHeight: '95vh', objectFit: 'contain'}} src={samurai} alt="samurai" />
<p>“It is good to face challenges in your youth. He who has never suffered will not sufficiently temper his character.”</p>
<h5>- Yamamoto Tsunetomo</h5>
</div>
<div className='headImage img3'>
<img className='img' style={{maxHeight: '95vh', objectFit: 'contain'}}  src={paint} alt="paint" />
<p>“No one has learned the meaning of life until he has surrendered his ego to the service of his fellow men.”</p>
<h5>- Beran Wolfe</h5>
</div>
<div className='headImage img4'>
<img className='img' style={{maxHeight: '95vh', objectFit: 'contain'}} src={underTree} alt="samurai underTree" />
<p>“A warrior is worthless unless he rises above others and stands strong in the midst of a storm.”</p>
<h5>- Yamamoto Tsunetomo</h5>
</div>
</Carousel>  
) ;


const Myself = () => (
     <div className="myself">
       <div className="details">
        <h2>Who Am I ?</h2>
        <p>Hello, I am Ritansh Singh, currently pursuing engineering in Information technology with an 8.25 cgpa to date.
          My interest is in full-stack development and DevOps as well.
          I am currently learning MERN stack for web development.
          Also, I am learning data structure and algorithms with competitive programming.
          Currently, I am looking for an internship and a full-time position as a software developer.
          I hope you like my presentation, I would appreciate your feedback and love to hear from you.
        </p>
        <div className="skill-container">
        <div className='heading'>Skills </div> 
        <div className='skills'>
        <div className='html'>HTML</div>
        <div className='css'>CSS</div>
        <div className='scss'>SCSS</div>
        <div className='tailwind'>TAILWIND</div>
        <div className='bootstrap'>BOOTSTRAP</div>
        <div className='javascript'>JAVASCRIPT</div>
        <div className='react'>REACT JS</div>
        <div className='cpp'>C++</div>
        </div>
        </div>
       </div>
      <div className="image">
        <img src={cool} alt="boy image" />
      </div>
     </div>
) ;

export default Home ;
