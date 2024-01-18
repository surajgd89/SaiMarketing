
import './Reseller.scss';

function Reseller({ brands, profile }) {

   return (
      <section className="reseller" >
         <div className="container">
            <h1 className="heading">{profile.resellersTitle}</h1>
            <p className="paragraph">
               {profile.resellersDesc}
            </p>
            <div className="reseller__list">
               {brands.map((item, index) => {
                  return (
                     <span className="reseller__list_item" key={index}><img src={process.env.PUBLIC_URL + item.brandLogo} alt={item.brandName} /></span>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
export default Reseller

