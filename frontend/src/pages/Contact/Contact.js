import './Contact.scss'
import Map from '../../components/Map/Map';

import { useEffect, useState } from 'react';
import { fetchData, sendEmail } from '../../services/api';




function Contact() {

   const [profile, setProfile] = useState([]);

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
   });

   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Validate name
      setErrors((prevErrors) => ({
         ...prevErrors,
         name: formData.name.trim() ? '' : 'Name is required',
      }));

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
         ...prevErrors,
         email: formData.email.trim() && emailRegex.test(formData.email)
            ? ''
            : 'Valid email is required',
      }));

      // Validate mobile number
      const mobileRegex = /^\d{10}$/;
      setErrors((prevErrors) => ({
         ...prevErrors,
         mobile: formData.mobile.trim() && mobileRegex.test(formData.mobile)
            ? ''
            : 'Valid 10-digit mobile number is required',
      }));

      // Validate subject
      setErrors((prevErrors) => ({
         ...prevErrors,
         subject: formData.subject.trim() ? '' : 'Subject is required',
      }));

      // Validate message
      setErrors((prevErrors) => ({
         ...prevErrors,
         message: formData.message.trim() ? '' : 'Message is required',
      }));

      if (!Object.values(errors).some((error) => error)) {
         const postEmail = async () => {
            try {
               await sendEmail(formData);
               setFormData({ name: '', email: '', mobile: '', subject: '', message: '', })
            } catch (error) {
               console.log(error)
            }
         };
         postEmail();

      } else {
         console.log('Form has errors. Please fix them before submitting.');
      }

   };




   useEffect(() => {
      const initData = async () => {
         try {
            const data = await fetchData();
            setProfile(data.getProfile);
         } catch (error) {
            console.log(error)
         }
      };
      initData();

   }, []);



   return (
      <>
         <section className="contact">
            <div className="container">
               <h1 className="heading">{profile.contactTitle}</h1>
               <p className="paragraph">
                  {profile.contactDesc}
               </p>
               <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form_group area-name">
                     <label htmlFor="name" className="form_label">Name</label>
                     <input type="text" id='name' className="form_control" name='name' autoComplete='false' value={formData.name} onChange={handleChange} />
                     <span className="error">{errors.name}</span>
                  </div>
                  <div className="form_group area-email">
                     <label htmlFor="email" className="form_label">Email</label>
                     <input type="text" id='email' className="form_control" name='email' autoComplete='false' value={formData.email} onChange={handleChange} />
                     <span className="error">{errors.email}</span>
                  </div>
                  <div className="form_group area-mobile">
                     <label htmlFor="mobile" className="form_label">Mobile</label>
                     <input type="text" id='mobile' className="form_control" name='mobile' autoComplete='false' value={formData.mobile} onChange={handleChange} />
                     <span className="error">{errors.mobile}</span>
                  </div>
                  <div className="form_group area-subject">
                     <label htmlFor="subject" className="form_label">Subject</label>
                     <input type="text" id="subject" className="form_control" name='subject' autoComplete='false' value={formData.subject} onChange={handleChange} />
                     <span className="error">{errors.subject}</span>
                  </div>
                  <div className="form_group area-message">
                     <label htmlFor="message" className="form_label">Message</label>
                     <textarea id="message" rows="4" className="form_control" name='message' autoComplete='false' value={formData.message} onChange={handleChange}></textarea>
                     <span className="error">{errors.message}</span>
                  </div>
                  <button type="submit" className="btn_send_message area-send"><i className="fa-light fa-paper-plane"></i>Send
                     Message</button>
               </form>
            </div>
         </section>
         <Map profile={profile} />
      </>
   )
}

export default Contact;