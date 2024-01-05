import './Contact.scss'
import Map from '../../components/Map/Map';

import axios from 'axios';
import { useState } from 'react';

function Contact() {

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });

   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios.post('http://localhost:3001/send-email', formData);
         console.log('Email sent successfully!');
      } catch (error) {
         console.error('Error sending email:', error);
      }
   };

   return (
      <>
         <section className="contact">
            <div className="container">
               <h1 className="heading">Get In Touch</h1>
               <p className="paragraph">
                  We help companies innovate faster and build better products, using real user data and rapid iterations.
               </p>
               <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form_group area-name">
                     <label htmlFor="name" className="form_label">Name</label>
                     <input type="text" id='name' className="form_control" name='name' value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form_group area-email">
                     <label htmlFor="email" className="form_label">Email</label>
                     <input type="text" id='email' className="form_control" name='email' value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="form_group area-mobile">
                     <label htmlFor="mobile" className="form_label">Mobile</label>
                     <input type="text" id='mobile' className="form_control" name='mobile' value={formData.mobile} onChange={handleChange} />
                  </div>
                  <div className="form_group area-subject">
                     <label htmlFor="subject" className="form_label">Subject</label>
                     <input type="text" id="subject" className="form_control" name='subject' value={formData.subject} onChange={handleChange} />
                  </div>
                  <div className="form_group area-message">
                     <label htmlFor="message" className="form_label">Message</label>
                     <textarea id="message" rows="4" className="form_control" name='message' value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="btn_send_message area-send"><i className="fa-light fa-paper-plane"></i>Send
                     Message</button>
               </form>
            </div>
         </section>
         <Map />
      </>
   )
}

export default Contact