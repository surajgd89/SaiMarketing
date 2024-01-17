import './Footer.scss'
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/api';

function Footer() {

   const [profile, setProfile] = useState([]);

   const [workingDays, setWorkingDays] = useState();
   const [workingTime, setWorkingTime] = useState();
   const [weekOff, setWeekOff] = useState();

   const [facebookURL, setFacebookURL] = useState();
   const [twitterURL, setTwitterURL] = useState();
   const [linkedInURL, setLinkedInURL] = useState();
   const [whatsAppURL, setWhatsAppURL] = useState();

   const [address, setAddress] = useState();


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
      if (profile && profile.businessHrs) {
         setWorkingDays(profile.businessHrs.workingDays)
         setWorkingTime(profile.businessHrs.workingTime)
         setWeekOff(profile.businessHrs.weekOff)
      }

      if (profile && profile.companyAddress) {
         setAddress(profile.companyAddress[0].address)
      }

      if (profile && profile.companySocial) {


         profile.companySocial.map((item) => {
            if (item.networkName === "Facebook") {
               setFacebookURL(item.url)
            }

            if (item.networkName === "Twitter") {
               setTwitterURL(item.url)
            }

            if (item.networkName === "LinkedIn") {
               setLinkedInURL(item.url)
            }

            if (item.networkName === "WhatsApp") {
               setWhatsAppURL(item.url)
            }

            return false
         })

      }

   }, [profile]);

   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__area">
               <div className="footer__about ">
                  <h3 className="footer__head">About {profile.companyName}</h3>
                  <p className="footer__para">{profile.aboutDesc}</p>
               </div>
               <div className="footer__address ">
                  <h3 className="footer__head">Address</h3>
                  <p className="footer__para">{address}</p>
                  <p className="footer__para">GSTIN - {profile.companyGSTIN}</p>
                  <div className="footer__social">

                     <a href={facebookURL} target='_blank' rel="noreferrer" className="footer__social_link">
                        <i className="fa-brands fa-facebook-square"></i>
                     </a>
                     <a href={twitterURL} target='_blank' rel="noreferrer" className="footer__social_link">
                        <i className="fa-brands fa-twitter-square"></i>
                     </a>
                     <a href={linkedInURL} target='_blank' rel="noreferrer" className="footer__social_link">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href={whatsAppURL} target='_blank' rel="noreferrer" className="footer__social_link">
                        <i className="fa-brands fa-whatsapp-square"></i>
                     </a>

                  </div>
               </div>
               <div className="footer__bizhrs ">
                  <h3 className="footer__head">Business Hrs</h3>
                  <p className="footer__para">
                     {workingDays}
                     <small>{`(${workingTime})`}</small>
                  </p>
                  <p className="footer__para">
                     {weekOff}
                     <small>Closed</small>
                  </p>
               </div>
            </div>
            <div className="footer__copy ">
               Copyright © 2023. {profile.companyName}. All rights reserved.
            </div>
         </div >
      </footer >
   )
}

export default Footer