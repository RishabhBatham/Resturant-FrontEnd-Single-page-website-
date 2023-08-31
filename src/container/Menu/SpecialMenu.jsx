import React from 'react';
import {SubHeading,MenuItem} from '../../components'
import {images,data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  
  <div className="app__specialMenu flex__center section__padding">

   <div className="app__specialMenu-title">
    <SubHeading title="menu that makes your crave for more" />
    <h1 className="headtext__cormorant">Todays's Special</h1>
    </div>  
    <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu-snacks flex__center'>
         <p className='app__specialMenu_heading'>Snacks</p>
         <div className='app__specialMenu_menu-items'>
       {data.wines.map((wine,index)=>(
       <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags}/>
        ))}
       </div>  
        </div>


        <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu"/>
       </div>



        
       <div className='app__specialMenu-menu-snacks flex__center'>
         <p className='app__specialMenu_heading'>Meals</p>
         <div className='app__specialMenu_menu-items'>
       {data.cocktails.map((cocktail,index)=>(
        <MenuItem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
       ))}
       </div> 
        </div>
       
    </div>
    
    
     
  </div>
);

export default SpecialMenu;
