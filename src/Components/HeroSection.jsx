import { BasicButton } from "./BasicButton"

export const HeroSection = () => {
    return (
        <div className="w-full  flex flex-col sm:flex-row flex-wrap lg:flex-nowrap px-4 sm:px-28 bg-[#F2F0F1] h-fit gap-2 sm:justify-between justify-center pt-20">

            {/* left */}
            <div className="w-full flex flex-col">
                <div className="font-integral_cf text-4xl sm:text-6xl">FIND CLOTHES <br></br>THAT MATCHES <br></br>YOUR STYLE </div>

                <div className="text-gray-500 sm:text-lg py-8">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style </div>

                <div><BasicButton bg={"bg-black"} textcolor={"text-white"}></BasicButton></div>

                <div className="pt-16 flex flex-wrap justify-center sm:justify-around sm:flex-nowrap sm:justify-normal gap-5 sm:gap-10">

                    <div className="flex flex-col pr-5 sm:pr-10 border-r-2 border-gray-300">
                        <div className="font-satoshi_bold text-2xl sm:text-5xl">200+</div>
                        <div className="text-gray-500 text-xs sm:text-sm">International Brands</div>
                    </div>

                    <div className=" flex flex-col  sm:pr-10 sm:border-r-2 sm:border-gray-300">
                        <div className="text-2xl sm:bg-green-400 sm:text-5xl font-satoshi_bold">2,000+</div>
                        <div className="text-gray-500 text-xs sm:text-sm">High-Quality Products</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-2xl sm:text-5xl font-satoshi_bold ">30,000+</div>
                        <div className="text-gray-500 text-xs sm:text-sm">Happy Customer</div>
                    </div>
                </div>
            </div>


            {/* right */}
            <div>
                <img src="/images/calvinXJennie.webp"></img>
            </div>
        </div>

    );
};




// return 

//         {/* left */}
//         

//         {/* right */}
//             <div className="w-fit h-auto overflow-hidden bg-purple-400">
//             <img src="/images/calvinXJennie.webp" className="w-full h-auto object-cover"></img>
//             </div>

//     </div>