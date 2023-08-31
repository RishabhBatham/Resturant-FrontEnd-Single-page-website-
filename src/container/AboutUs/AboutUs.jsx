import React from 'react';
import './AboutUs.css'
import images from '../../constants/images'

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">

     

    <div className='app__aboutus-content_plate flex__center'>
        <img src={images.foodplate} alt="food" className='food__plate'/>
        <img className='G__img' src={images.G} alt="cir"/>
      </div>



    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img'/>
        <p className='p__opensans'>dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit anim id est laborum.cillum dolore eu fugiat nulla pariatur. Excepteur sint cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proidenoccaecat cupidatat non proiden</p>
         <button type='button' className='custom__button'>Know more</button>
      </div>



     
    </div>
  </div>
);

export default AboutUs;
