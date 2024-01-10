import './Product.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Reseller from '../../components/Reseller/Reseller';
import ProductItems from './ProductItems';
import Select from 'react-select';


function Product() {

   const [products, setProducts] = useState([]);
   const [filterd_Products, setFilterd_Products] = useState([]);
   const [brands, setBrands] = useState([]);

   const [selected_Product, setSelected_Product] = useState({ label: 'All', value: 'All' });
   const [selected_Filter, setSelected_Filter] = useState('A');
   const [product_Options, setProduct_Options] = useState([]);





   useEffect(() => {
      const fetchData = async () => {
         try {
            const products_Response = await axios.get('http://localhost:3001/api/products');
            const brands_Response = await axios.get('http://localhost:3001/api/brands');

            setProducts(products_Response.data);
            setBrands(brands_Response.data);

         } catch (error) {
            console.error('Error fetching data:', error.message);
         }
      };
      fetchData()
   }, []);


   useEffect(() => {
      const arry = products.map((item) => item.brandName);
      const new_arry = [...new Set(arry)];
      const options = [
         { label: 'All', value: 'All' },
         ...new_arry.map((value) => ({ label: value, value: value })),
      ];
      setProduct_Options(options)
   }, [products]);


   const product_Change = (selected_Product) => {
      setSelected_Product(selected_Product);
   };


   useEffect(() => {

      console.log(selected_Product.value)

      setFilterd_Products(products.filter((item) => {
         if (selected_Product.value === "All") {
            return products
         } else {
            return selected_Product.value === item.brandName
         }
      }))

   }, [products, selected_Product]);




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
                  <Select
                     className="custom_Select"
                     defaultValue={selected_Product}
                     onChange={product_Change}
                     options={product_Options}
                  />
                  <div className="custom_Filter">
                     <div onClick={() => setSelected_Filter("A")} className={`custom_Filter__btn ${selected_Filter === "A" ? "custom_Filter__btn--active" : ""}`}  ><i className="fa-solid fa-check-double"></i>All</div>
                     <div onClick={() => setSelected_Filter("V")} className={`custom_Filter__btn ${selected_Filter === "V" ? "custom_Filter__btn--active" : ""}`}><i className="fa-solid fa-circle-small veg"></i>Veg</div>
                     <div onClick={() => setSelected_Filter("N")} className={`custom_Filter__btn ${selected_Filter === "N" ? "custom_Filter__btn--active" : ""}`}><i className="fa-solid fa-circle-small non-veg"></i>Non-Veg</div>
                     <div onClick={() => setSelected_Filter("Y")} className={`custom_Filter__btn ${selected_Filter === "Y" ? "custom_Filter__btn--active" : ""}`}><i className="fa-solid fa-hashtag"></i>Best Seller</div>
                  </div>
               </div>

               <div className="product__list">
                  <ProductItems filterd_Products={filterd_Products} selected_Product={selected_Product.value} selected_Filter={selected_Filter} />
               </div>

            </div>
         </section >
         <Reseller brands={brands} />
      </>
   )
}

export default Product