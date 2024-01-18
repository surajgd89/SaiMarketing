import './Product.scss'
import { useEffect, useState } from 'react';
import Reseller from '../../components/Reseller/Reseller';
import ProductItems from './ProductItems';
import Select from 'react-select';
import { getProfile, getProducts, getBrands } from '../../services/api';



function Product() {

   const [products, setProducts] = useState([]);
   const [filterd_Products, setFilterd_Products] = useState([]);
   const [brands, setBrands] = useState([]);
   const [profile, setProfile] = useState([]);

   const [selected_Product, setSelected_Product] = useState({ label: 'All', value: 'All' });
   const [selected_Filter, setSelected_Filter] = useState('A');
   const [product_Options, setProduct_Options] = useState([]);


   useEffect(() => {
      const fetchProfile = async () => {
         try {
            const data = await getProfile();
            setProfile(data);
         } catch (error) {
            console.log(error)
         }
      };

      const fetchProducts = async () => {
         try {
            const data = await getProducts();
            setProducts(data);
         } catch (error) {
            console.log(error)
         }
      };

      const fetchBrands = async () => {
         try {
            const data = await getBrands();
            setBrands(data);
         } catch (error) {
            console.log(error)
         }
      };

      fetchProfile();
      fetchProducts();
      fetchBrands();

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
               <h1 className="heading">{profile.productsTitle}</h1>

               <p className="paragraph">
                  {profile.productsDesc}
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
         <Reseller brands={brands} profile={profile} />
      </>
   )
}

export default Product