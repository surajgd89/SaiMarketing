import './Product.scss'
import ProductImg from "../../assets/images/Crab-Claw-Amritsari.png"
import Reseller from '../../components/Reseller/Reseller'

function Product() {
   return (
      <>
         <section className="product">
            <div className="container">
               <h1 className="heading">Product Catalogue</h1>
               <p className="paragraph">
                  We help companies innovate faster and build better product, using real user data and rapid iterations. We
                  help
                  companies innovate faster and build better product, using real user data and rapid iterations.
               </p>
               <div className="product__action">
                  <select id="selectProduct" className="custom_Select">
                     <option value="all">All Product</option>
                     <option value="itc">ITC</option>
                     <option value="gadre">Gadre</option>
                     <option value="yummiez">Yummiez</option>
                     <option value="milki_mist">Milki Mist</option>
                     <option value="iskon_balaji">Iskon Balaji</option>
                     <option value="hy_fun">Hy Fun</option>
                     <option value="havmore">Havmore</option>
                     <option value="bangur">Bangur</option>
                     <option value="tasty_Fresh">Tasty Fresh</option>
                     <option value="haldirams">Haldirams</option>
                     <option value="seths">Seths</option>
                     <option value="meatzza">Meatzza</option>
                     <option value="total">Total</option>
                     <option value="amul">Amul</option>
                     <option value="goeld">Goeld</option>
                  </select>
                  <div className="custom_Filter">
                     <span className="custom_Filter__btn custom_Filter__btn--active"><i className="fa-regular fa-check"></i>
                        All</span>
                     <span className="custom_Filter__btn"><i className="fa-regular fa-check"></i>
                        Veg</span>
                     <span className="custom_Filter__btn"><i className="fa-regular fa-check"></i>
                        Non-Veg</span>
                     <span className="custom_Filter__btn"><i className="fa-regular fa-check"></i>
                        Best
                        Seller</span>
                  </div>
               </div>
               <div className="product__list">
                  <div className="product__item product__veg">
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
                  <div className="product__item product__non_veg">
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
                        <div className="product__size_item product__size_item--off">
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
                  <div className="product__item product__best_seller">
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
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item product__size_item--off">
                           <span>250gm</span>
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
                  <div className="product__item">
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
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
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
                  <div className="product__item product__veg">
                     <a href=" #" className="product__details"><i className="fa-regular fa-arrow-up-right-from-square"></i></a>
                     <div className="product__img">
                        <img src={ProductImg} alt="" />
                     </div>
                     <div className="product__title">Crab Claws Amritsari</div>
                     <div className="product__price">
                        <i className="fa-solid fa-indian-rupee-sign"></i><span>250.00</span>
                     </div>
                     <div className="product__size">
                        <div className="product__size_item product__size_item--active">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item product__size_item--off">
                           <span>250gm</span>
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
                  <div className="product__item product__best_seller">
                     <a href=" #" className="product__details"><i className="fa-regular fa-arrow-up-right-from-square"></i></a>
                     <div className="product__img">
                        <img src={ProductImg} alt="" />
                     </div>
                     <div className="product__title">Crab Claws Amritsari</div>
                     <div className="product__price">
                        <i className="fa-solid fa-indian-rupee-sign"></i><span>250.00</span>
                     </div>
                     <div className="product__size">
                        <div className="product__size_item product__size_item--active">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item">
                           <span>250gm</span>
                           <small>(16pcs)</small>
                        </div>
                        <div className="product__size_item product__size_item--off">
                           <span>250gm</span>
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
               </div>
            </div>
         </section>
         <Reseller />
      </>
   )
}

export default Product