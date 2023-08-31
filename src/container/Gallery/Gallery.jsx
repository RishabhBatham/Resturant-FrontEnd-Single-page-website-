import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import{BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import './Gallery.css';


const imagecolection= [images.gallery01,images.gallery02,images.gallery03,images.gallery04]


const Gallery = () => {
  const scrollRef = React.useRef(null)
  const scroll= (direction)=>{
    const{current}=scrollRef
    if(direction==='left'){
      current.scrollLeft-=300;
    }
    else{
      current.scrollLeft+=200;
    }
  }
  
    return(
      <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
          <SubHeading title="instagram"/>
          <h className="headtext__cormorant">Photo Gallery</h>
          <p className='p__opensans'styyle={{margnTop:'2rem'}} > dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat</p>
        <button className='custom__button'>View More</button>
        </div>

       
       <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
           {imagecolection.map((item,index)=>(
            <div className='app__gallery-images_card flex_-center' key={`gallery_image-${index+1}`}>
             <img src={item} alt='gallery'/>
             <BsInstagram className='gallery__image-icon'/>
            </div>
           ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/> 
        </div>
       </div>


      </div>
    );

}
export default Gallery;
