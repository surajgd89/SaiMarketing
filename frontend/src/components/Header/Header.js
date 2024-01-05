import { useRef } from 'react';
import './Header.scss'
import { NavLink } from "react-router-dom";

function Header() {
   const headerNav_Ref = useRef();

   const menuToggle = () => {
      headerNav_Ref.current.classList.toggle('header__nav--toggle');
   }

   const redirectNav = () => {
      headerNav_Ref.current.classList.remove('header__nav--toggle');
   }


   return (
      // HEADER 
      <header className="header">
         <div className="container">
            <a href="#" className="header__brand">
               <small>SM</small>
               <span>Sai Marketing</span>
            </a>
            <span className="header__toggle" onClick={menuToggle}><i className="fa-regular fa-bars"></i></span>
            <nav className="header__nav" ref={headerNav_Ref}>
               <NavLink to="/" onClick={redirectNav} className={({ isActive }) => isActive ? `header__nav_link header__nav_link--active` : "header__nav_link"}>About</NavLink>
               <NavLink to="product" onClick={redirectNav} className={({ isActive }) => isActive ? `header__nav_link header__nav_link--active` : "header__nav_link"}>Product</NavLink>
               <NavLink to="contact" onClick={redirectNav} className={({ isActive }) => isActive ? `header__nav_link header__nav_link--active` : "header__nav_link"}>Contact</NavLink>
            </nav>
         </div>
      </header >
   )
}

export default Header;