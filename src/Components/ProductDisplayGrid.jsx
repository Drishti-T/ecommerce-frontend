// import { useEffect, useState } from "react";
// const image = "/images/products/Tshirt-1.png"



// export const ProductDisplayGrid = () => {

//     const [md, setMd] = useState(true)
//     const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowsWidth(window.innerWidth);
//         };

//         window.addEventListener("resize", handleResize);
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     useEffect(() => {
//         if(windowsWidth < 768) {
//             setMd(false)
//         } else {
//             setMd(true)
//         }
//     }, [windowsWidth])


//     return (
//         <div className=" md:h-[400px] grid grid-rows-2 md:grid-cols-1 sm:bg-green-400 md:bg-pink-900 lg:purple-700 md:overflow-hidden">
//             {md ? <div className="md:flex">
//                 <ThreeSection />
//                 <OneSection />
//             </div>
//                 : (
//                     <div>
//                         <OneSection />
//                         <ThreeSection />
//                     </div>
//                 )};

//         </div>
//     );
// };

// const OneSection = () => {
//     return <div className=" w-full bg-blue-500 sm:bg-yellow-500 md:bg-yellow-900 lg:bg-yellow-300 ">
//          <div className="w-full aspect-[4/3.5] bg-pink-300 rounded-2xl overflow-hidden lg:min-w-[400px] lg:max-w-[500px]"><img src={image} className="h-full w-full object-cover  "></img></div>
//     </div>
// }

// const ThreeSection = () => {
//     return <div className=" w-full  md:w-[200px]  bg-pink-500 flex justify-between  gap-2  md:flex-col ">
//         <div className="w-full aspect-square bg-purple-400"><img src={image} className="h-full w-full object-cover"/></div>
//         <div className="w-full aspect-square bg-purple-400"><img src={image} className="h-full w-full object-cover"/></div>
//         <div className="w-full aspect-square bg-purple-400"><img src={image} className="h-full w-full object-cover"/></div>


//     </div>
// }
import product from "../dummyData/productbyId"
import { ProductInfo } from "./ProductInfo"

export const ProductDisplayGrid = ({ thumbnail_Image, display_Images, product }) => {

  return <div>

  </div>
}

{/* <div className="sm:mx-auto lg:mx-0   md:bg-black flex flex-col lg:flex-row lg:gap-8 xl:gap-10 xl:justify-around">
    
    <div className="flex flex-col gap-2 md:flex-row-reverse md:h-[600px] sm:w-[600px] lg:[500px] xl:w-[700px] bg-blue-500 md:bg-pink-400">

      <div className="w-full aspect-[4/3.5] rounded-2xl overflow-hidden h-,"><img src={thumbnail_Image} className="w-full h-full object-cover bg-green-500" /></div>


      <div className="flex gap-2 md:flex-col md:w-[200px]">
        {display_Images.map((image) => (
          <div className="aspect-[4/3.5] md:flex-1  rounded-xl overflow-hidden"><img src={image} className="h-full w-full object-cover" /></div>
        ))}

      </div></div>
      <ProductInfo products={product}></ProductInfo>
  </div> */}


  // <div className="px-4 md:px-2  md:mx-auto xl:bg-pink-300 lg:bg-pink-500 md:bg-blue-300 xl:flex xl:px-28">

  //   <div className="flex flex-col gap-2  md:flex-row-reverse md:h-[450px] sm:w-full lg:[500px] xl:w-[700px] xl:h-[600px]">
  //     <div className="w-full aspect-[4/3.5] rounded-2xl overflow-hidden h-full"><img src={thumbnail_Image} className="w-full h-full object-cover bg-green-500" /></div>
  
  //     <div className="flex gap-2 md:flex-col md:w-[200px] ">
  //       {display_Images.map((image) => (
  //         <div className="aspect-[4/3.5] md:flex-1  rounded-xl overflow-hidden"><img src={image} className="h-full w-full object-cover" /></div>
  //       ))}

  //     </div></div>

  //   <ProductInfo products={product}></ProductInfo>