import { useEffect, useState } from 'react';
import './Map.scss'

function Map({ profile }) {

   const [address, setAddress] = useState([]);


   useEffect(() => {

      if (profile && profile.companyAddress) {
         setAddress(profile.companyAddress)
      }

   }, [profile]);



   return (
      <section className="map">
         {address.length > 0 && (
            <>
               <div className="map__office">
                  <div className="map__head">
                     <i className="fa-regular fa-building"></i> Our Office
                  </div>
                  {address.map((item, index) => (

                     index === 0 && <iframe
                        key={index}
                        src={item.mapUrl}
                        width="100%"
                        title={`Our Office ${index + 1}`}
                        height="450"
                        loading="lazy"
                     ></iframe>
                  ))}
               </div>
               <div className="map__factory">
                  <div className="map__head">
                     <i className="fa-regular fa-temperature-snow"></i> Our Cold Storage
                  </div>
                  {address.map((item, index) => (
                     index === 1 && <iframe
                        key={index}
                        src={item.mapUrl}
                        width="100%"
                        title={`Our Cold Storage ${index + 1}`}
                        height="450"
                        loading="lazy"
                     ></iframe>
                  ))}
               </div>
            </>
         )}
      </section>
   )
}

export default Map