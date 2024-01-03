const brands = [
   {
      id: 1,
      brandName: "ITC",
      brandLogo: "/images/brands/itc.png",
   }, ,

   {
      id: 2,
      brandName: "Gadre",
      brandLogo: "/images/brands/gadre.png",
   },

   {
      id: 3,
      brandName: "Godrej",
      brandLogo: "/images/brands/godrej.png",
   },

   {
      id: 4,
      brandName: "Milki Mist",
      brandLogo: "/images/brands/milki-mist.png",
   },

   {
      id: 5,
      brandName: "Iscon Balaji",
      brandLogo: "/images/brands/iscon-balaji.png",
   },

   {
      id: 6,
      brandName: "Havmore",
      brandLogo: "/images/brands/havmore.png",
   },

   {
      id: 7,
      brandName: "Hy Fun",
      brandLogo: "/images/brands/hy-fun.png",
   },

   {
      id: 8,
      brandName: "Bangur",
      brandLogo: "/images/brands/bangur.png",
   },

   {
      id: 9,
      brandName: "Tasty Fresh",
      brandLogo: "/images/brands/tasty-fresh.png",
   },

   {
      id: 10,
      brandName: "Haldirams",
      brandLogo: "/images/brands/haldirams.png",
   },

   {
      id: 11,
      brandName: "Seths",
      brandLogo: "/images/brands/seths.png",
   },

   {
      id: 12,
      brandName: "Meatzza",
      brandLogo: "/images/brands/meatzza.png",
   },

   {
      id: 13,
      brandName: "Total",
      brandLogo: "/images/brands/total.png",
   },

   {
      id: 14,
      brandName: "Amul",
      brandLogo: "/images/brands/amul.png",
   },

   {
      id: 15,
      brandName: "Goeld",
      brandLogo: "/images/brands/goeld.png",
   },

]

const items = [
   {
      id: 1,
      productName: "Crab Claws Amritsari - ITC1",
      brandName: "ITC",
      productImage: "/images/products/Crab-Claw-Amritsari.png",
      productLink: "https://gadre.co.in/product/surimi-crab-claw-amritsari/",
      bestSeller: "Y",
      foodCategory: "V",
      availableIn: [
         {
            id: 1,
            unit: 150,
            pcs: 20,
            price: 100,

         },
         {
            id: 2,
            unit: 250,
            pcs: 40,
            price: 200,

         },

         {
            id: 3,
            unit: 1000,
            pcs: 60,
            price: 300,

         }
      ],
      cookType: ["SF", "DF", "AF"],
   },

   {
      id: 2,
      productName: "Crab Claws Amritsari - ITC2",
      brandName: "ITC",
      productImage: "/images/products/Crab-Claw-Amritsari.png",
      productLink: "https://gadre.co.in/product/surimi-crab-claw-amritsari/",
      bestSeller: "Y",
      foodCategory: "V",
      availableIn: [
         {
            id: 1,
            unit: 150,
            pcs: 20,
            price: 100,

         },
         {
            id: 2,
            unit: 250,
            pcs: 40,
            price: 200,

         }


      ],
      cookType: ["SF", "DF", "AF"],
   },

   {
      id: 3,
      productName: "Crab Claws Amritsari - Gadre1",
      brandName: "Gadre",
      productImage: "/images/products/Crab-Claw-Amritsari.png",
      productLink: "https://gadre.co.in/product/surimi-crab-claw-amritsari/2",
      bestSeller: "N",
      foodCategory: "N",
      availableIn: [
         {
            id: 1,
            unit: 150,
            pcs: 20,
            price: 400,

         },
         {
            id: 2,
            unit: 250,
            pcs: 40,
            price: 500,

         }
      ],
      cookType: ["SF", "DF"],
   },

   {
      id: 4,
      productName: "Crab Claws Amritsari - Gadre2",
      brandName: "Gadre",
      productImage: "/images/products/Crab-Claw-Amritsari.png",
      productLink: "https://gadre.co.in/product/surimi-crab-claw-amritsari/2",
      bestSeller: "N",
      foodCategory: "N",
      availableIn: [
         {
            id: 1,
            unit: 150,
            pcs: 20,
            price: 400,

         }
      ],
      cookType: ["SF", "DF"],
   }

];

export { brands };
export default items;


