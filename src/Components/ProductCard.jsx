
import { getCurrencySymbol } from "../utils/getCurrencySymbol";


export const ProductCard = ({products}) => {

    
    return (
                <div className="flex flex-row gap-4">
                    {products.data.map((product) => (

                        
                        <div key={product.id}>
                            <img src={product.image}></img>
                            <div className="font-satoshi_bold  text-base">{product.name}</div>
                            <div className="font-satoshi_medium text-sm">{product.brand}</div>
                            <div className="font-satoshi text-xs flex">⭐⭐⭐⭐ {product.rating}<div className="text-gray-500">/5</div></div>
                            <div className="font-satoshi_bold  text-lg">{getCurrencySymbol(product.currency)}{product.price}</div>
                        </div>
                    ))}
                </div>
            );
}
