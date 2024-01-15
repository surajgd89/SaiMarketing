import './About.scss';
import ProfileImg from "../../assets/images/dipak-devre.jpg"
import { useEffect, useState } from 'react';
import axios from 'axios';

function About() {

   const [profile, setProfile] = useState([]);

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