import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css' ;
import paint from '../Assets/paint.png' ;
import samurai from '../Assets/samurai.png' ;
import tree from '../Assets/tree.png' ;
import underTree from '../Assets/underTree.png' ;

const Home = () => {
  return (
    <div id='home'> 
         <Carousel
   autoPlay
   infiniteLoop
   interval={2000}
   showStatus={false}
   showArrows={false}
   showThumbs={false}
   >
    <div className='headImage img1'>
        <img src={tree} alt="tree" />
        <p>“The perfect blossom is a rare thing. You could spend your life looking for one and it would not be a wasted life.” </p>
        <h5>- Ken Watanabe</h5>
    </div>
    <div className='headImage img2'>
        <img src={samurai} alt="samurai" />
        <p>“It is good to face challenges in your youth. He who has never suffered will not sufficiently temper his character.”</p>
        <h5>- Yamamoto Tsunetomo</h5>
    </div>
    <div className='headImage img3'>
        <img src={paint} alt="paint" />
        <p>“No one has learned the meaning of life until he has surrendered his ego to the service of his fellow men.”</p>
        <h5>- Beran Wolfe</h5>
    </div>
    <div className='headImage img4'>
        <img src={underTree} alt="samurai underTree" />
        <p>“A warrior is worthless unless he rises above others and stands strong in the midst of a storm.”</p>
        <h5>- Yamamoto Tsunetomo</h5>
    </div>
   </Carousel>  
    </div>
  ) 
} ;


export default Home ;
