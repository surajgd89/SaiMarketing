import './About.scss';
import ProfileImg from "../../assets/images/dipak-devre.jpg"
import Reseller from '../../components/Reseller/Reseller';
import { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';


function About() {

   const [profile, setProfile] = useState([]);
   const [brands, setBrands] = useState([]);

   useEffect(() => {
      const initData = async () => {
         try {
            const data = await fetchData();
            setProfile(data.getProfile);
            setBrands(data.getBrands);
         } catch (error) {
            console.log(error)
         }
      };
      initData();

   }, []);



   return (<>
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
      <Reseller brands={brands} profile={profile} />
   </>
   )
}

export default About;