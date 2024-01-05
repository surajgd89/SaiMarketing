
import './Reseller.scss';



function Reseller({ brands }) {


   return (
      <section className="reseller" >
         <div className="container">
            <h1 className="heading">Wholesale, Retail & Distributor</h1>
            <p className="paragraph">
               We help companies innovate faster and build better product, using real user data and rapid iterations. We
               help
               companies innovate faster and build better product, using real user data and rapid iterations.
            </p>
            <div className="reseller__list">
               {brands.map((item) => {
                  return (
                     <span className="reseller__list_item" key={item.id}><img src={process.env.PUBLIC_URL + item.brandLogo} alt={item.brandName} /></span>
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default Reseller

