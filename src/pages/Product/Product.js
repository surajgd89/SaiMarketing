import './Product.scss'

import Reseller from '../../components/Reseller/Reseller';
import items from './data';
import { brands } from './data';
import ProductItems from './ProductItems';
import { useState } from 'react';

function Product() {

   const [productItems, setProductItems] = useState(items);
   const [productBrands, setProductBrands] = useState(brands);
   const [selectedProduct, setSelectedProduct] = useState("*");




   const handleProductChange = (event) => {
      let selectedValue = event.target.value;
      setSelectedProduct(selectedValue);
   }

   const handleProductClick = (event) => {
      let selectedValue = event.target.dataset.value;
      console.log(selectedValue)
      setSelectedProduct(selectedValue);
   }

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
                  <select className="custom_Select" onChange={handleProductChange}>
                     <option value="*">All</option>
                     {
                        productItems.map((item, index) => {
                           return (
                              <option key={index} value={item.brandName}>{item.brandName}</option>
                           )
                        })
                     }
                  </select>

                  <div className="custom_Filter">
                     <span onClick={(event) => handleProductClick(event)} data-value="*" className={`custom_Filter__btn ${selectedProduct === "*" ? "custom_Filter__btn--active" : ""}`}  ><i className="fa-regular fa-check"></i>All</span>
                     <span onClick={(event) => handleProductClick(event)} data-value="V" className={`custom_Filter__btn ${selectedProduct === "V" ? "custom_Filter__btn--active" : ""}`}><i className="fa-regular fa-check"></i>Veg</span>
                     <span onClick={(event) => handleProductClick(event)} data-value="N" className={`custom_Filter__btn ${selectedProduct === "N" ? "custom_Filter__btn--active" : ""}`}><i className="fa-regular fa-check"></i>Non-Veg</span>
                     <span onClick={(event) => handleProductClick(event)} data-value={Boolean(true)} className="custom_Filter__btn"><i className="fa-regular fa-check"></i>Best Seller</span>
                  </div>

               </div>
               <div className="product__list">
                  <ProductItems productItems={productItems} selectedProduct={selectedProduct} />
               </div>
            </div>
         </section >
         <Reseller productBrands={productBrands} />
      </>
   )
}

export default Product