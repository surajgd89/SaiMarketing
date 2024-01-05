import './Hero.scss'

function Hero() {
   return (
      // HERO 
      <section className="hero">
         <div className="hero__info">
            <small className="hero__label">Welcome to</small>
            <h1 className="hero__title">Sai Marketing</h1>
            <div className="hero__rating">
               <span className="hero__rating_icon">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
               </span>
               <span className="hero__rating_txt">4.5 / 5</span>
            </div>
            <div className="hero__tags">
               <span className="hero__tags_item">Cold Storage Services</span>
               <span className="hero__tags_item">Frozen Food Product Distributors</span>
               <span className="hero__tags_item">HORECA Distributor</span>
            </div>
         </div>
         <div className="hero__contact">
            <div className="hero__contact_action">
               <a href="mailto:sairam.sr389@gmail.com" className="hero__contact_link">
                  <i className="fa-light fa-envelope"></i>
                  <span>sairam.sr389@gmail.com</span>
               </a>
               <a href="tel:+919324206327" className="hero__contact_link">
                  <i className="fa-light fa-phone"></i>
                  <span>+91 9324206327</span>
               </a>
               <a href="https://maps.app.goo.gl/5WCviWKSQe7GWZ136" className="hero__contact_link">
                  <i className="fa-light fa-map-marker-alt"></i>
                  <span>Mazgaon, Mumbai</span>
               </a>
            </div>
         </div>
      </section>
   )
}

export default Hero