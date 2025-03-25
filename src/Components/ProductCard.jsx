import axios from "axios";



export const ProductCard = ({product}) => {
    return <div>
        <div className="flex flex-col">

            <div>
                <img src={product.image} alt={product.name}></img>
            </div>

            <div>
                <div className="font-satoshi_bold  text-xl ">
                    T-shirt with Tape Details
                </div>
                <div className="flex gap-2 items-center">
                    <div>
                        Stars 
                    </div>
                    <div className="font-satoshi text-sm">
                        4.5/5
                    </div>
                </div>
                <div className="font-satoshi_bold  text-2xl ">
                    $120
                </div>
            </div>
        </div>
    </div>
}