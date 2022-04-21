import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import { Menulist } from './Menulist';

 const Header = () => {
    const [clicked, setClicked] = useState(false);
   const menuList = Menulist.map(({title, url }) =>{
     return(
            <li>
              <NavLink exact to={url} activeClassName="active">{title}</NavLink>
            </li>
          );
    });
        const handleClick = () =>{
          setClicked(!clicked);
        };

    return(
      <nav>
        <div className='logo'>
          <img src='/images/ZJ-Logo.png' />
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={clicked ? "fas fa-times":"fa fa-bars"}></i>
        </div>
      <ul className={clicked ?  "menu-list" : "menu-list close"}>{menuList}</ul>
     </nav>
    )
 }



export default Header