import { useRef } from 'react';
import './Header.scss'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
   const [profile, setProfile] = useState([]);
   const [flName, setFlName] = useState(null);
   const headerNav_Ref = useRef();
   const cNameRef_Ref = useRef();


   const menuToggle = () => {
      headerNav_Ref.current.classList.toggle('header__nav--toggle');
   }

   const redirectNav = () => {
      headerNav_Ref.current.classList.remove('header__nav--toggle');
   }


   useEffect(() => {
      const fetchData = async () => {
         try {

            const response = await axios.get('http://localhost:3001/api/profile');
            setProfile(response.data[0]);

         } catch (error) {
            console.error('Error fetching data:', error.message);
         }
      };
      fetchData()
   }, []);

   useEffect(() => {

      if (profile && profile.companyName) {
         const flLetter = (fullName) => {
            let nameArray = fullName.split(" ");
            let firstName = nameArray[0];
            let lastName = nameArray[nameArray.length - 1];
            let firstLetter_FirstName = firstName.charAt(0);
            let lastLetter_LastName = lastName.charAt(0);
            setFlName(firstLetter_FirstName + lastLetter_LastName);
         }
         flLetter(profile.companyName)
      }

   }, [profile]);



   return (
      // HEADER 
      <header className="header">
         <div className="container">
            <a href="#" className="header__brand">
               <small>{flName}</small>
               <span ref={cNameRef_Ref}>{profile.companyName}</span>
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