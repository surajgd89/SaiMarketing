import './Contact.scss'
import Map from '../../components/Map/Map'

function Contact() {
   return (
      <>
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
         <Map />
      </>
   )
}

export default Contact