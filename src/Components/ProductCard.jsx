
import { useEffect, useState } from "react";
import { getCurrencySymbol } from "../utils/getCurrencySymbol";
import { div } from "framer-motion/client";

export const ProductCard = ({ products }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // the state is set to true 
    // if the (screen < 768px) then the buttons won't render
    // md(larger screen) : min width = 768 < ....lg (larger screen)

    const [visibleCount, setVisibleCount] = useState(4) // for pagination on lg screens

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        // cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleViewMore() {
        setVisibleCount(prev => prev + 4);
    }

    //determine how many products to show to based on screen size 
    const productShow = isMobile ? products.data : products.data.slice(0, visibleCount);
    return (
        <div className=" transition-all duration-500 ease-in-out overflow-x-auto scrollbar-hide scroll-smooth lg:px-28 px-4">
            <div className={`flex flex-row gap-4 lg:grid lg:grid-cols-4 lg:gap-4`}>

                {productShow.map((product) => (

                    <div key={product.id} className="transition-all duration-500 ease-in-out min-w-[150px] lg:min-w-[150px]">
                        <img src={product.image}></img>
                        <div className="font-satoshi_bold text-base">{product.name}</div>
                        <div className="font-satoshi_medium text-sm text-gray-600">
                            {product.brand}</div>
                        <div className="font-satoshi text-xs flex">
                            ⭐⭐⭐⭐
                            {product.rating}
                            <div className="text-gray-500">/5</div></div>
                        <div className="font-satoshi_bold  text-xs lg:text-lg">
                            {product.discountPrice ? (
                                <div className="flex gap-2 items-center">
                                    {getCurrencySymbol(product.currency)}{product.discountPrice} <div className="text-gray-400 
                                    line-through decoration-[0.08rem] ">{product.price}</div>
                                    <div>{product.discountValue ?
                                        (<div className="font-satoshi_medium text-red-600  text-xs lg:text-sm bg-red-100 px-3 py-1.5 rounded-full flex items-center justify-center">
                                            -{product.discountValue}%
                                        </div>) :
                                        (<div>
                                        </div>)}
                                    </div>
                                </div>
                            ) : (<div>
                                {getCurrencySymbol(product.currency)}{product.price}
                            </div>)}</div>
                    </div>
                ))}

            </div>
            {/* view more button */}

            {!isMobile && (
                // logical AND (&&) for conditional rendering
                // A && B => renders B if A is true, otherwise nothing.
                <button onClick={handleViewMore}>ViewMore</button>
            )}

        </div>
    );
}
