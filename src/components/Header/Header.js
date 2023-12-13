import './Header.scss'
import { NavLink } from "react-router-dom";

function Header() {
   return (
      // HEADER 
      <header className="header">
         <div className="container">
            <a href="javascript:void(0)" className="header__brand">
               <small>SM</small>
               <span>Sai Marketing</span>
            </a>
            <span className="header__toggle"><i className="fa-regular fa-bars"></i></span>
            <nav className="header__nav">
               <NavLink to="/" className={({ isActive }) => isActive ? `header__nav_link--active` : ""} >About</NavLink>
               <NavLink to="product" className={({ isActive }) => isActive ? `header__nav_link--active` : ""}>Product</NavLink>
               <NavLink to="contact" className={({ isActive }) => isActive ? `header__nav_link--active` : ""}>Contact</NavLink>
            </nav>
         </div>
      </header>
   )
}

export default Header;