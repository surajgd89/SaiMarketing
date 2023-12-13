import './Contact.scss'

function Contact() {
   return (
      <>
         {/* CONTACT */}
         <section className="contact">
            <div className="container">
               <h1 className="heading">Get In Touch</h1>
               <p className="paragraph">
                  We help companies innovate faster and build better products, using real user data and rapid iterations.
               </p>
               <form action="" className="contact__form">
                  <div className="form_group area-name">
                     <label for="" className="form_label">Name</label>
                     <input type="text" className="form_control" />
                  </div>
                  <div className="form_group area-email">
                     <label for="" className="form_label">Email</label>
                     <input type="text" className="form_control" />
                  </div>
                  <div className="form_group area-mobile">
                     <label for="" className="form_label">Mobile</label>
                     <input type="text" className="form_control" />
                  </div>
                  <div className="form_group area-subject">
                     <label for="" className="form_label">Subject</label>
                     <input type="text" className="form_control" />
                  </div>
                  <div className="form_group area-message">
                     <label for="" className="form_label">Message</label>
                     <textarea id="" rows="4" className="form_control"></textarea>
                  </div>
                  <button type="submit" className="btn_send_message area-send"><i className="fa-light fa-paper-plane"></i>Send
                     Message</button>
               </form>
            </div>
         </section>
         {/* MAP */}
         <section className="map">
            <div className="map__office">
               <div className="map__head"><i className="fa-regular fa-building"></i> Our Office</div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2447597147684!2d72.83786907583581!3d18.964794955453044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5ceab18ef1%3A0x3a8bd57ee6c4e017!2sSai%20Marketing%20Office!5e0!3m2!1sen!2sin!4v1700565918728!5m2!1sen!2sin"
                  width="100%" height="450" allowfullscreen="no" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="map__factory">
               <div className="map__head"> <i className="fa-regular fa-temperature-snow"></i> Our Cold Storage</div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2447597147684!2d72.83786907583581!3d18.964794955453044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5ceab18ef1%3A0x3a8bd57ee6c4e017!2sSai%20Marketing%20Office!5e0!3m2!1sen!2sin!4v1700565918728!5m2!1sen!2sin"
                  width="100%" height="450" allowfullscreen="no" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </section>
      </>
   )
}

export default Contact