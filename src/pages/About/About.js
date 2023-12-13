import './About.scss'

import ProfileImg from "../../assets/images/dipak-devre.jpg"

function About() {
   return (
      //  ABOUT 
      <section className="about">
         <div className="container">
            <h1 className="heading">About Us</h1>
            <p className="paragraph">
               We help companies innovate faster and build better products, using real user data and rapid iterations. We
               help
               companies innovate faster and build better products, using real user data and rapid iterations.
            </p>
            <div className="about__profile">
               <img className="about__pic" src={ProfileImg} alt="dipak-devre" />
               <h3 className="about__name">Mr. Dipak Devre</h3>
               <h4 className="about__designation">Founder - Sai Marketing</h4>
               <p className="paragraph">
                  To become best dealership in town by implementing effective communication & strong review mechanism
                  towards
                  sustained
                  business growth.
                  To become best dealership in town by implementing effective communication & strong review mechanism
                  towards
                  sustained
                  business growth.
               </p>
            </div>
         </div>
      </section>
   )
}

export default About;