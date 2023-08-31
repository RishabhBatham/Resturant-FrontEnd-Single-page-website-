import React from 'react';
import {images} from '../../constants' ;
import {SubHeading} from '../../components'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the best flavour"/>
      <h1 className='app__header-h1'>The best food in the City</h1>
      <p className='p__opensans2' style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    
      reprehenderit in volup</p>
      <button type='butoon' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
         <img src={images.welcome} alt="header"></img>
    </div>
  </div>
);

export default Header;
