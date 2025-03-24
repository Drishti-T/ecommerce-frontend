import { BasicButton } from "./BasicButton"

export const HeroSection = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row flex-wrap lg:flex-nowrap px-4 sm:px-28 bg-[#F2F0F1] lg:bg-[url('/images/coverphoto.webp')]  bg-cover md:bg-contain bg-center bg-no-repeat h-fit gap-2 md:justify-between justify-center pt-20">

            {/* left */}
            <div className="w-full flex flex-col flex-1 ">
                <div className="font-integral_cf text-4xl sm:text-6xl">FIND CLOTHES <br></br>THAT MATCHES <br></br>YOUR STYLE </div>

                <div className="text-gray-500 sm:text-lg py-8">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style </div>

                <div className="  flex w-full justify-center sm:justify-center xs:justify-normal md:justify-normal"><BasicButton 
                bg={"bg-black"} 
                textcolor={"text-white"} 
                py={"py-4"}
                px={"xs:px-20"}
                w={"w-full xs:w-auto"}
                ></BasicButton></div>


                <div className=" pt-16 flex flex-wrap justify-center xl:justify-around  lg:flex-nowrap gap-5 lg:gap-8">

                    <div className=" flex flex-col pr-5 md:pr-8 border-r-2 border-gray-300">
                        <div className="font-satoshi_bold text-2xl sm:text-4xl">200+</div>
                        <div className="text-gray-500 text-xs sm:text-xs">International Brands</div>
                    </div>

                    <div className="border-styling flex flex-col lg:pr-8 lg:border-r-2 lg:border-gray-300">
                        <div className="text-2xl sm:text-4xl font-satoshi_bold">2,000+</div>
                        <div className="text-gray-500 text-xs sm:text-xs">High-Quality Products</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-2xl sm:text-4xl font-satoshi_bold ">30,000+</div>
                        <div className="text-gray-500 text-xs sm:text-xs">Happy Customer</div>
                    </div>
                </div>
            </div>


            {/* right */}
            <div className="flex-1">
                
            </div>
        </div>

    );
};




