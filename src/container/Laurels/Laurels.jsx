import React from 'react';
import {SubHeading} from '../../components'
import {images,data} from '../../constants'
import './Laurels.css';
const AwardsCard=({imgUrl,title,subtitle})=>(
 <div className='app__laurels_awards-card'>
  <img src={imgUrl} alt='award'/>
  <div className='app__laurels_awards-card_content'>
    <p className='p__cormorant' style={{color:"var(--color-red)"}}>{title}</p>
    <p className='p__cormorant'>{subtitle}</p>

  </div>
 </div>
)

const Laurels = () => (
  <div className='app__bg  app__wrapper section__padding' id='awards'>
  <div className='app__wrapper_info'>
  <SubHeading title="Awards and Recorgnisation"/>
  <h1 className='headtext__cormorant'>Our laurels</h1>
  <div className='app__laurels_awards'>
    {data.awards.map((award)=>
    <AwardsCard key={award.title} title={award.title} imgUrl={award.imgUrl} subtitle={award.subtitle}/>
    )}
  </div>
  </div>
  <div className='app__wrapper_img'>
    <img src={images.laurels} alt="laurels" />
  </div>
  </div>
);

export default Laurels;
