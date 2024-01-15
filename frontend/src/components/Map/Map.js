import { useEffect, useState } from 'react';
import './Map.scss'

function Map({ profile }) {

   const [address, setAddress] = useState([]);
   const [mapURL1, setMapURL1] = useState();
   const [mapURL2, setMapURL2] = useState();



   useEffect(() => {

      if (profile && profile.companyAddress) {
         setAddress(profile.companyAddress)
      }

      if (address) {
         address.map((item) => {
            setMapURL1(item.mapUrl)
            setMapURL2(item.mapUrl)
         })


      }

   }, [profile]);


   return (
      <section className="map">
         <div className="map__office">
            <div className="map__head"><i className="fa-regular fa-building"></i> Our Office</div>
            <iframe
               src={mapURL1}
               width="100%" height="450" allowfullscreen="no" loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <div className="map__factory">
            <div className="map__head"> <i className="fa-regular fa-temperature-snow"></i> Our Cold Storage</div>
            <iframe
               src={mapURL2}
               width="100%" height="450" allowfullscreen="no" loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </section>
   )
}

export default Map