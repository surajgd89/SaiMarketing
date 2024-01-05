import './Footer.scss'

function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__area">
               <div className="footer__about ">
                  <h3 className="footer__head">About Sai Marketing</h3>
                  <p className="footer__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, earum
                     similique quasi vel
                     molestiae
                     veniam facere enim explicabo mollitia perspiciatis, laboriosam dolore. Eaque sed eveniet, soluta
                     asperiores
                     quidem adipisci vero.</p>
               </div>
               <div className="footer__address ">
                  <h3 className="footer__head">Address</h3>
                  <p className="footer__para">Plot No. 71, Manohar Building,<br /> H. K. Marg, Mazgaon, (Near Hamja Tower)<br />
                     Mumbai - 400010</p>
                  <p className="footer__para">GSTIN - 27ALGPD5253P1ZR</p>
                  <div className="footer__social">
                     <a href="#" className="footer__social_link">
                        <i className="fa-brands fa-facebook-square"></i>
                     </a>
                     <a href="#" className="footer__social_link">
                        <i className="fa-brands fa-twitter-square"></i>
                     </a>
                     <a href="#" className="footer__social_link">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#" className="footer__social_link">
                        <i className="fa-brands fa-whatsapp-square"></i>
                     </a>
                  </div>
               </div>
               <div className="footer__bizhrs ">
                  <h3 className="footer__head">Business Hrs</h3>
                  <p className="footer__para">
                     Monday - Saturday
                     <small>(09:00 am - 07:00 pm)</small>
                  </p>
                  <p className="footer__para">
                     Sunday
                     <small>Closed</small>
                  </p>
               </div>
            </div>
            <div className="footer__copy ">
               Copyright © 2023. Sai Marketing. All rights reserved.
            </div>
         </div >
      </footer >
   )
}

export default Footer