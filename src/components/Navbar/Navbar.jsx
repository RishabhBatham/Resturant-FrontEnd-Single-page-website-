import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.css';
import { icons } from 'react-icons';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'

const Navbar = () => {


const [toggleMenu,setToggleMenu]= React.useState(false);


return(
  <nav className='app__navbar'>
 <div className='app__navbar-logo'>
  <img src={images.foodicon} alt="logo"/>
 </div>
 <ul className='app__navbar-links'>
   <li className='p__opensans'><a href='#home'>Home</a></li>
   <li className='p__opensans'><a href='#home'>Abou</a></li>
   <li className='p__opensans'><a href='#home'>Menu</a></li>
   <li className='p__opensans'><a href='#home'>Awards</a></li>
   <li className='p__opensans'><a href='#home'>Contact</a></li>
 </ul>
 <div className="app__navbar-login">
  <a href="#login" className='p__opensans'>Login/Register</a>
  <div/>
  <a href='/' className='p__opensans'>Book Table</a>
 </div>
 <div className='app__navbar-smallscreen'>
  <GiHamburgerMenu color='#fff'fontSize={27} onClick={()=>{setToggleMenu(true)}} />
  
 {toggleMenu && (
  <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
  <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{setToggleMenu(false)}}/>
<ul className='app__navbar-smallscreen_links'>
 <li className='p__opensans2'><a href='#home'>Home</a></li>
 <li className='p__opensans2'><a href='#home'>Abou</a></li>
 <li className='p__opensans2'><a href='#home'>Menu</a></li>
 <li className='p__opensans2'><a href='#home'>Awards</a></li>
 <li className='p__opensans2'><a href='#home'>Contact</a></li>
</ul>
</div>
 )}

 </div>

</nav>
)
};

export default Navbar;
