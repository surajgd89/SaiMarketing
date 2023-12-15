

import ProductImg from '../../assets/images/Crab-Claw-Amritsari.png'

const ProductCard = ({ productItem }) => {
   return (
      <>
         {productItem.map((item) => {
            return (
               <div className="product__item product__veg" >
                  <a href="#" className="product__details"><i className="fa-regular fa-arrow-up-right-from-square"></i></a>
                  <div className="product__img">
                     <img src={ProductImg} alt="" />
                  </div>
                  <div className="product__title">Crab Claws Amritsari</div>
                  <div className="product__price">
                     <i className="fa-solid fa-indian-rupee-sign"></i><span>250.00</span>
                  </div>
                  <div className="product__size">
                     <div className="product__size_item product__size_item--active">
                        <span>1kg</span>
                        <small>(16pcs)</small>
                     </div>
                     <div className="product__size_item">
                        <span>750gm</span>
                        <small>(16pcs)</small>
                     </div>
                     <div className="product__size_item">
                        <span>500gm</span>
                        <small>(16pcs)</small>
                     </div>
                     <div className="product__size_item">
                        <span>250gm</span>
                        <small>(16pcs)</small>
                     </div>
                     <div className="product__size_item">
                        <span>125gm</span>
                        <small>(16pcs)</small>
                     </div>
                  </div>
                  <div className="product__method">
                     <div className="product__method_item">
                        <i className="fa-light fa-pan-frying"></i>
                        <span>Shallow Fry</span>
                     </div>
                     <div className="product__method_item">
                        <i className="fa-light fa-grill-hot"></i>
                        <span>Deep Fry</span>
                     </div>
                     <div className="product__method_item product__method_item--off">
                        <i className="fa-light fa-microwave"></i>
                        <span>Air Fry</span>
                     </div>
                  </div>
               </div>
            );
         })}
      </>
   );
};

export default ProductCard;


