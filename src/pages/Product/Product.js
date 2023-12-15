import './Product.scss'

import Reseller from '../../components/Reseller/Reseller';
import ProductData from './ProductData';
import ProductCard from './ProductCard';
import { useState } from 'react';

function Product() {

   const [productItem, setProductItem] = useState(ProductData);

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
                  <ProductCard productItem={productItem} />
               </div>
            </div>
         </section>
         <Reseller />
      </>
   )
}

export default Product