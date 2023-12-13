
import './Reseller.scss';

import itc from "../../assets/images/itc.png";
import gadre from "../../assets/images/gadre.png";
import godrej from "../../assets/images/godrej.png";
import milkimist from "../../assets/images/milki-mist.png";
import isconbalaji from "../../assets/images/iscon-balaji.png";
import havmore from "../../assets/images/havmore.png";
import hyfun from "../../assets/images/hy-fun.png";
import bangur from "../../assets/images/bangur.png";
import tastyfresh from "../../assets/images/tasty-fresh.png";
import haldirams from "../../assets/images/haldirams.png";
import seths from "../../assets/images/seths.png";
import meatzza from "../../assets/images/meatzza.png";
import total from "../../assets/images/total.png";
import amul from "../../assets/images/amul.png";
import goeld from "../../assets/images/goeld.png";

function Reseller() {
   return (
      <section className="reseller">
         <div className="container">
            <h1 className="heading">Wholesale, Retail & Distributor</h1>
            <p className="paragraph">
               We help companies innovate faster and build better product, using real user data and rapid iterations. We
               help
               companies innovate faster and build better product, using real user data and rapid iterations.
            </p>
            <div className="reseller__list">
               <span className="reseller__list_item"><img src={itc} alt="itc" /></span>
               <span className="reseller__list_item"><img src={gadre} alt="gadre" /></span>
               <span className="reseller__list_item"><img src={godrej} alt="godrej" /></span>
               <span className="reseller__list_item"><img src={milkimist} alt="milkimist" /></span>
               <span className="reseller__list_item"><img src={isconbalaji} alt="isconbalaji" /></span>
               <span className="reseller__list_item"><img src={havmore} alt="havmore" /></span>
               <span className="reseller__list_item"><img src={hyfun} alt="hyfun" /></span>
               <span className="reseller__list_item"><img src={bangur} alt="bangur" /></span>
               <span className="reseller__list_item"><img src={tastyfresh} alt="tastyfresh" /></span>
               <span className="reseller__list_item"><img src={haldirams} alt="haldirams" /></span>
               <span className="reseller__list_item"><img src={seths} alt="seths" /></span>
               <span className="reseller__list_item"><img src={meatzza} alt="meatzza" /></span>
               <span className="reseller__list_item"><img src={total} alt="total" /></span>
               <span className="reseller__list_item"><img src={amul} alt="amul" /></span>
               <span className="reseller__list_item"><img src={goeld} alt="goeld" /></span>
            </div>
         </div>
      </section>
   )
}

export default Reseller

