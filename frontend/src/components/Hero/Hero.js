import './Hero.scss'
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/api';

function Hero() {
   const [profile, setProfile] = useState([]);
   const [services, setServices] = useState([]);
   const [shortURL, setShortURL] = useState([]);


   useEffect(() => {
      const fetchProfile = async () => {
         try {
            const data = await getProfile();
            setProfile(data);
         } catch (error) {
            console.log(error)
         }
      };
      fetchProfile();
   }, []);
   useEffect(() => {
      if (profile && profile.companyServices) {
         setServices(profile.companyServices);
      }

      if (profile && profile.companyAddress) {
         setShortURL(profile.companyAddress[0].shortUrl);
      }

   }, [profile]);

   const renderStars = (rating) => {
      const maxStars = 5;
      const fullStars = Math.min(Math.floor(rating), maxStars);
      const hasHalfStar = rating % 1 !== 0;

      const stars = [];

      for (let i = 0; i < fullStars; i++) {
         stars.push(<i className="fa-solid fa-star" key={i}></i>);
      }

      if (hasHalfStar && fullStars < maxStars) {
         stars.push(<i className="fa-solid fa-star-half-stroke" key={fullStars}></i>);
      }

      const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
      for (let i = 0; i < emptyStars; i++) {
         stars.push(<i className="fa-regular fa-star" key={fullStars + i + (hasHalfStar ? 1 : 0)}></i>);
      }

      return stars;
   };

   return (
      // HERO 
      <section className="hero">
         <div className="hero__info">
            <small className="hero__label">Welcome to</small>
            <h1 className="hero__title">{profile.companyName}</h1>
            <div className="hero__rating">
               <span className="hero__rating_icon">
                  {renderStars(profile.companyRating)}
               </span>
               <span className="hero__rating_txt">{profile.companyRating} / 5</span>
            </div>
            <div className="hero__tags">
               {
                  services.map((item) => {
                     return (
                        <span className="hero__tags_item" key={item}>{item}</span>
                     )
                  })
               }

            </div>
         </div>
         <div className="hero__contact">
            <div className="hero__contact_action">
               <a href={`mailto:${profile.companyEmail}`} className="hero__contact_link">
                  <i className="fa-light fa-envelope"></i>
                  <span>{profile.companyEmail}</span>
               </a>
               <a href={`tel:${profile.companyMobile}`} className="hero__contact_link">
                  <i className="fa-light fa-phone"></i>
                  <span>{profile.companyMobile}</span>
               </a>
               <a href={shortURL} target='_blank' rel="noreferrer" className="hero__contact_link">
                  <i className="fa-light fa-map-marker-alt"></i>
                  <span>{profile.companyLocation}</span>
               </a>
            </div>
         </div>
      </section >
   )
}

export default Hero