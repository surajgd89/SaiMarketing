import './Product.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Reseller from '../../components/Reseller/Reseller';
import ProductItems from './ProductItems';





function Product() {

   const [products, setProducts] = useState([]);
   const [brands, setBrands] = useState([]);

   const [selected_Product, setSelected_Product] = useState("All");

   const [selected_Filter, setSelected_Filter] = useState("A");

   const [filtered_Products, setFiltered_Products] = useState([]);
   const [filtered_Brands, setFiltered_Brands] = useState([]);


   const brand_Product_Change = (selected) => {
      setSelected_Product(selected);

      let filtered = selected === "All" ? products : products.filter(item => {
         return item.brandName === selected;
      });

      console.log(filtered)

      setFiltered_Products(filtered);
   }

   const brand_Filter_Change = (selected) => {
      setSelected_Filter(selected);
   }


   useEffect(() => {
      const brands_Arry = Array.from(new Set(products.map(item => item.brandName)));
      setFiltered_Brands(brands_Arry);
   }, [products]);

   useEffect(() => {

      const fetchProducts = async () => {
         try {
            const response = await axios.get('http://localhost:3001/api/products');
            setProducts(response.data);
         } catch (error) {
            console.error('Error fetching products:', error.message);
         }
      };

      const fetchBrands = async () => {
         try {
            const response = await axios.get('http://localhost:3001/api/brands');
            setBrands(response.data);
         } catch (error) {
            console.error('Error fetching brands:', error.message);
         }
      };

      fetchProducts();
      fetchBrands()
   }, []);


   useEffect(() => {
      brand_Product_Change("All");
   }, [products]);







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

                  <select className="custom_Select" value={selected_Product} onChange={(event) => brand_Product_Change(event.target.value)}>
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
                     <div onClick={(event) => brand_Filter_Change("A")} className={`custom_Filter__btn ${selected_Filter === "A" ? "custom_Filter__btn--active" : ""}`}  ><i className="fa-solid fa-check-double"></i>All</div>
                     <div onClick={(event) => brand_Filter_Change("V")} className={`custom_Filter__btn ${selected_Filter === "V" ? "custom_Filter__btn--active" : ""}`}><i className="fa-solid fa-circle-small veg"></i>Veg</div>
                     <div onClick={(event) => brand_Filter_Change("N")} className={`custom_Filter__btn ${selected_Filter === "N" ? "custom_Filter__btn--active" : ""}`}><i className="fa-solid fa-circle-small non-veg"></i>Non-Veg</div>
                     <div onClick={(event) => brand_Filter_Change("Y")} className={`custom_Filter__btn ${selected_Filter === "Y" ? "custom_Filter__btn--active" : ""}`}><i className="fa-solid fa-hashtag"></i>Best Seller</div>
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