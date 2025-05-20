import { useState } from "react";
import product from "../dummyData/productbyId"
import { ProductDisplayGrid } from "./ProductDisplayGrid"

export const ProductDisplay = () => {
    const singleProduct = product.data[0]; // data is an array we cant do product.data.display_Images
    const images = singleProduct?.display_Images || [];
    console.log(images)

    const [selectedImage, setSelectedImage] = useState(images[0] || null); // if i want an image to be pre-selected then use (image[0])
    const [selectedImageIndex, setSelectedImageIndex] = useState(images[0] || null); // if i want an image to be pre-selected then use (image[0])



    // ipad => 810w (md: 768px) / (lg:1024px)
    // lg =?> px-28
    // lg => row / row-reverse
    return <div className="px-4 lg:px-28 md:flex justify-center  lg:justify-start">
        <div className="flex flex-col lg:flex-row">
            <div className="flex md:h-[500px] md:w-fit">

                {/* _______________________ left images ______________________________________________ */}

                <div className="flex flex-col gap-2 h-full  w-full  md:flex-row-reverse">


                    {/* 1 image (thumbnail image) */}
                    <div className="w-full  flex justify-center items-center">
                        {/* lg:w-[calc(100%-200px)] =  The element will take up the full width of its parent, minus 200 pixels. */}

                        {selectedImage && (
                            <div className="w-full h-full rounded-2xl overflow-hidden"><img src={selectedImage} className="w-full h-full object-contain rounded-2xl scale-[1.06]" /></div>
                            // max-w-md =>this image will never be wider then 448px (md > 448px)
                        )}
                    </div>


                    {/* 3 images  */}
                    <div className="flex
              md:flex-col
              lg:flex-col
             
              md:max-w-[150px] 
              gap-2
              rounded-[16px]">

                        {images.map((image, index) => {
                            return <img
                                key={index}
                                src={image}
                                style={{ borderRadius: "16px" }}
                                alt={`thumb-${index}`} // thumb-0 , thumb-1 , thumb-2
                                onClick={() => { setSelectedImageIndex(index); setSelectedImage(image) }} // on click the state gets updated
                                className={`h-full] flex-1 w-full object-cover rounded-[16px]  ${(selectedImageIndex === index) ? "border-2  border-gray-500" : "border border-transparent"}`}></img>

                            // setSelectedImage(index) instead of (image) cuz if in case 2 images are similar both the images will have black border
                            // instead we are here using index to track the images instead of images itself
                        })}
                    </div>

                </div>
            </div>
            {/* _______________________ Right details _______________________________________________*/}

            <div className="md:flex-1 flex flex-col gap-4 md:bg-green-300">
                <div>{singleProduct.name}</div>
                <div>{singleProduct.rating}</div>
                <div>{singleProduct.price}</div>
                <div className="max-w-xl lg:w-full lg:max-w-full">{singleProduct.description}</div>
                <hr></hr>
               
                <hr></hr>
                <div>SIZE</div>
                <hr></hr>
                <div>ADD to cart</div>

            </div>
        </div>
    </div>
}

// px-4 sm:mx-auto  lg:mx-0 lg:px-28 

//  <ProductDisplayGrid display_Images={singleProduct.display_Images} thumbnail_Image={singleProduct.image} product={product}></ProductDisplayGrid>


