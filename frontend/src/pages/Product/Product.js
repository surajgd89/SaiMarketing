import './Product.scss'

import Reseller from '../../components/Reseller/Reseller';
import products_data from './data';
import { brands_data } from './data';
import ProductItems from './ProductItems';
import { useEffect, useState } from 'react';

function Product() {

   const [products, setProducts] = useState(products_data);
   const [brands, setBrands] = useState(brands_data);

   const [selected_Product, setSelected_Product] = useState("All");

   const [selected_Filter, setSelected_Filter] = useState("A");

   const [filtered_Brands, setFiltered_Brands] = useState([]);

   const [filtered_Products, setFiltered_Products] = useState(products_data);


   const brand_Product_Change = (event) => {
      let selected = event.target.value;
      setSelected_Product(selected);

      let filtered = selected === "All" ? products : products.filter(item => {
         return item.brandName === selected;
      });

      setFiltered_Products(filtered);
   }

   const brand_Filter_Change = (event) => {
      let selected = event.currentTarget.dataset.value;
      setSelected_Filter(selected);
   }


   useEffect(() => {

      let filtered = [];
      let brands_Arry = new Set();

      products.forEach(item => {
         if (!brands_Arry.has(item.brandName)) {
            brands_Arry.add(item.brandName);
            filtered.push(item.brandName);
         }
      });

      setFiltered_Brands(filtered);

      console.log(selected_Product);

   }, [selected_Product, selected_Filter]);


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

                  <select className="custom_Select" onChange={brand_Product_Change}>
                     <option value="All">All</option>
                     {filtered_Brands.map((item, index) => {
                        return (
                           <option key={index} value={item}>
                              {item}
                           </option>
                        )
                     })}
                  </select>

                  <div className="custom_Filter">
                     <div onClick={(event) => brand_Filter_Change(event)} data-value="A" className={`custom_Filter__btn ${selected_Filter === "A" ? "custom_Filter__btn--active" : ""}`}  ><i className="fa-solid fa-check-double"></i>All</div>
                     <div onClick={(event) => brand_Filter_Change(event)} data-value="V" className={`custom_Filter__btn ${selected_Filter === "V" ? "custom_Filter__btn--active" : ""}`}><i class="fa-solid fa-circle-small veg"></i>Veg</div>
                     <div onClick={(event) => brand_Filter_Change(event)} data-value="N" className={`custom_Filter__btn ${selected_Filter === "N" ? "custom_Filter__btn--active" : ""}`}><i class="fa-solid fa-circle-small non-veg"></i>Non-Veg</div>
                     <div onClick={(event) => brand_Filter_Change(event)} data-value="Y" className={`custom_Filter__btn ${selected_Filter === "Y" ? "custom_Filter__btn--active" : ""}`}><i className="fa-solid fa-hashtag"></i>Best Seller</div>
                  </div>

               </div>

               <div className="product__list">
                  <ProductItems filtered_Products={filtered_Products} selected_Product={selected_Product} selected_Filter={selected_Filter} />
               </div>

            </div>
         </section >
         <Reseller brands={brands} />
      </>
   )
}

export default Product