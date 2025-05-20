import { getCurrencySymbol } from "../utils/getCurrencySymbol"

export const ProductInfo = ({ products }) => {
    return <div className="w-full lg:w-fit lg:bg-green-500">

        {products.data.map((product) => (
          
                <div key={product.id} className="min-w-[200px]  flex flex-col  xl:gap-[21px] ">
                    <div className=" w-[250px] xs:w-fit font-integral_cf_bold  text-2xl lg:text-3xl xl:text-4xl">{product.name}

                    </div>
                    <div className="font-satoshi_medium text-sm text-gray-600 lg:text-xl xl:text-2xl">{product.brand}</div>
                    <div className="font-satoshi text-xs flex lg:text-base xl:text-lg">⭐⭐⭐⭐ {product.rating}<div className="text-gray-500">
                        /5</div></div>
                    <div className="font-satoshi_bold  text-2xl lg:text-xl xl:text-3xl">
                        {product.discountPrice ? (
                            <div className="flex gap-2 items-center">
                                {getCurrencySymbol(product.currency)}{product.discountPrice} <div className="text-gray-400 line-through decoration-
                            [0.08rem]">{product.price}</div>
                                <div>{product.discountValue ?
                                    (<div className="font-satoshi_medium text-red-600 text-xs bg-red-100 px-3 py-1.5 rounded-full flex items-cent
                                er justify-center">
                                        -{product.discountValue}%
                                    </div>) :
                                    (<div>
                                    </div>)}
                                </div>
                            </div>
                        ) : (<div>
                            {getCurrencySymbol(product.currency)}{product.price}
                        </div>)}
                    </div>
                    <div className="font-satoshi_medium text-gray-400 text-sm min-w-full max-w-[370px]">{product.description}</div>
                    <hr></hr>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-satoshi text-gray-500">Select Color</div>
                        <div className="flex gap-4">
                            {product.color.map((color_Obj, index) => {
                                const color_Name = Object.keys(color_Obj)[0];
                                const color_Code = color_Obj[color_Name];
                                return (
                                    <button title={color_Name} style={{ backgroundColor: color_Code }} className="w-[40px] h-[40px] rounded-full">

                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <hr></hr>
                    <div className="text-sm font-satoshi text-gray-500 flex flex-col gap-3">
                        <div>
                            Choose Size
                        </div>

                        <div className="flex gap-2">
                            {product.size.map((size, index) => {
                                return (
                                    <button key={index} className="bg-gray-200 rounded-full w-fit px-5 py-2">
                                        {size}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex  flex-col gap-4">
                        <hr></hr>
                        <div className="flex gap-4">
                            <div className="flex gap-4 bg-gray-200 rounded-full px-4 py-2">
                                <button>-</button>
                                <div>1</div>
                                <button>+</button>
                            </div>
                            <button className="text-white text-sm font-satoshi bg-black w-full flex justify-center gap-4 rounded-full px-4 py-2">
                                Add to Cart</button>
                        </div>
                    </div>

                {/* __________________________ */}

                {/* <div className="mt-8 text-gray-500 "> */}
                


                    {/* <div className=" border-b border-gray-300 flex gap-8 h-[50px]"> */}

                        {/* <div className="relative w-fit group hover:text-black h-[50px]"> Product Details */}

                            {/* underline */}
                            {/* <div className="w-full absolute  bottom-0 border-2 border-transparent border-b group-hover:border-black"></div> */}

                        {/* </div> */}

                        {/* <div className="relative group hover:text-black"> Ratings & Reviews */}

                            {/* underline */}
                            {/* <div className="w-full absolute  bottom-0 border-2 border-transparent border-b group-hover:border-black"></div> */}

                        {/* </div> */}

                        {/* <div className="relative group hover:text-black">FAQs */}

                            {/* underline */}
                            {/* <div className="w-full absolute  bottom-0 border-2 border-transparent border-b group-hover:border-black"></div> */}

                        {/* </div> */}

                    {/* </div> */}



                    {/* <hr className=""></hr> */}

                    {/* <div className="flex justify-between">
                        <div className="flex gap-2">
                            <div className="hover:text-black">All reviews</div> */}
                            {/* <div className="hover:text-black">(251)</div>
                        </div> */}

                        {/* <div className="flex gap-2"> */}

                            {/* <div className="bg-gray-200 w-[40px] h-[40px] rounded-full flex justify-center">
                                <div className="flex items-center">C</div></div>
                            <div>Write a Review</div> */}
                        {/* </div>
                    </div>
                </div>
                <hr></hr> */}


            </div>
        ))}
    </div>
}