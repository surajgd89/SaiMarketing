import './About.scss';
import ProfileImg from "../../assets/images/dipak-devre.jpg"
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/helpers';


function About() {

   const [profile, setProfile] = useState([]);

   useEffect(() => {
      setProfile(getProfile);
   }, []);



   return (
      <section className="about">
         <div className="container">
            <h1 className="heading">{profile.aboutTitle}</h1>
            <p className="paragraph">
               {profile.aboutDesc}
            </p>
            <div className="about__profile">
               <img className="about__pic" src={ProfileImg} alt="dipak-devre" />
               <h3 className="about__name">{profile.ownerName}</h3>
               <h4 className="about__designation">{profile.ownerDesg + ` - ` + profile.companyName}</h4>
               <p className="paragraph">
                  {profile.ownerAbout}
               </p>
            </div>
         </div>
      </section>
   )
}

export default About;