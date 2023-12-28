import { useEffect, useRef, useState } from "react";

const ProductItems = ({ productItems, selectedProduct }) => {

   const filteredProducts = selectedProduct === '*' ? productItems : productItems.filter(item => item.brandName === selectedProduct || item.foodCategory === selectedProduct || item.bestSeller === true);

   const [price, setPrice] = useState({});
   const refProductSize = useRef(null);


   const updatePrice = (id, amt) => {
      setPrice(prevPrice => ({
         ...prevPrice,
         [id]: amt,
      }));
   };


   const formatWeight = (weight) => {
      if (weight < 1000) {
         return `${weight}gm`;
      } else {
         const kilograms = weight / 1000;
         return `${kilograms}kg`;
      }
   }

   useEffect(() => {


      const triggerClick = () => {
         const elements = document.querySelectorAll('.product__size_item:nth-child(1)');
         console.log(elements)
         elements.forEach(element => {
            element.click();
         });
      };

      triggerClick();

   }, []);


   return (
      <>
         {filteredProducts.map((item) => {
            return (

               <div key={item.id} className={`product__item ${item.foodCategory === "V" ? "product__veg" : ''}  ${item.foodCategory === "N" ? "product__non_veg" : ''}  ${item.bestSeller ? "product__best_seller" : ""}`}  >
                  <a href={item.productLink} target="_blank" className="product__details"><i className="fa-regular fa-arrow-up-right-from-square"></i></a>
                  <div className="product__img">
                     <img src={process.env.PUBLIC_URL + item.productImage} alt="" />
                  </div>
                  <div className="product__title">{item.productName}</div>

                  <div className="product__price">
                     <i className="fa-solid fa-indian-rupee-sign"></i><span>{price[item.id]}</span>
                  </div>

                  <div className="product__size" ref={refProductSize}>
                     {
                        item.availableIn.map((available) => {
                           return (
                              <div key={available.id} className={`product__size_item ${available.price === price[item.id] ? 'product__size_item--active' : ''}`} onClick={(e) =>
                                 updatePrice(item.id, available.price)}>
                                 <span>{formatWeight(available.unit)}</span>
                                 <small>({available.pcs})</small>
                              </div>
                           )
                        })
                     }
                  </div>

                  <div className="product__method">

                     <div className={`product__method_item  ${item.cookType.includes("SF") ? "" : "product__method_item--off"}`}>
                        <i className="fa-light fa-pan-frying"></i>
                        <span>Shallow Fry</span>
                     </div>

                     <div className={`product__method_item  ${item.cookType.includes("DF") ? "" : "product__method_item--off"}`}>
                        <i className="fa-light fa-grill-hot"></i>
                        <span>Deep Fry</span>
                     </div>

                     <div className={`product__method_item  ${item.cookType.includes("AF") ? "" : "product__method_item--off"}`}>
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

export default ProductItems;


