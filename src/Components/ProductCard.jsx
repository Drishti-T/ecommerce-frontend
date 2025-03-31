
import { getCurrencySymbol } from "../utils/getCurrencySymbol";
import { ChevronLeft, ChevronRight } from "lucide-react";


export const ProductCard = ({products}) => {    
    return (
        <div className="overflow-x-auto scrollbar-hide scroll-smooth">
                <div className="flex flex-row gap-4 ">
                    {products.data.map((product) => (                        
                        <div key={product.id} className="min-w-[200px]">
                            <img src={product.image}></img>
                            <div className="font-satoshi_bold  text-base">{product.name}</div>
                            <div className="font-satoshi_medium text-sm text-gray-600">{product.brand}</div>
                            <div className="font-satoshi text-xs flex">⭐⭐⭐⭐ {product.rating}<div className="text-gray-500">/5</div></div>
                            <div className="font-satoshi_bold  text-lg">
                                {product.discountPrice ? (
                                    <div className="flex gap-2 items-center">
                                        {getCurrencySymbol(product.currency)}{product.discountPrice} <div className="text-gray-400 line-through decoration-[0.08rem]">{product.price}</div>
                                        <div>{product.discountValue ? 
                                        (<div className="font-satoshi_medium text-red-600 text-xs bg-red-100 px-3 py-1.5 rounded-full flex items-center justify-center">
                                            -{product.discountValue}%
                                        </div>) : 
                                        (<div>                                            
                                        </div>)}
                                        </div>
                                    </div>
                                ): (<div>
                                    {getCurrencySymbol(product.currency)}{product.price}
                                    </div>)}</div>
                        </div>
                    ))}
                </div>
                </div>
            );
}
