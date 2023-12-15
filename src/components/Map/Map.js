import './Map.scss'

function Map() {
   return (
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
   )
}

export default Map