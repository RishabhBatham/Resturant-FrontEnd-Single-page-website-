import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chefs words"/>
      <h1 className='headtext__cormorant'>what inspires us</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__cormorant'>provident non ipsa molestiae. Ab 
          dolor ipsum est assumenda voluptatem et perspiciatis cupiditate id
           voluptas natus quo mollitia obcaecati qui animi molestiae.
           
           explicabo sit consectetur dolores in necessitatibus Quis qui maiores Quis. Qui consequatur labore et
            doloribus facilis aut atque harum est sequi delectus.</p>
        </div>
        <div className='app__chef_sign'>
           <p className="p__cormorant2 app_chef_sign-text">Rish</p>
           <p className='p__cormorant2 app_chef_sign-text'> Chef and Founder</p> 
           <img className='app__chef_sign-image' src={images.sign} alt="sign"/>
        </div>

      </div>
    </div>
  </div>
);

export default Chef;
