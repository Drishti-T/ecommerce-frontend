import { BasicButton } from "./BasicButton";

// with hero section image
// export const HeroSection = () => {
//     return <div>
//         <div className="relative w-full lg:h-screen flex justify-center lg:justify-normal">


//             {/* hero-section bg */}
//             <div className="absolute inset-0 bg-[#F2F0F1] lg:bg-[url('/images/coverphoto.webp')] bg-cover bg-center bg-no-repeat"></div>



//             {/* hero-section text area */}
//             {/* max-w-2xl : Limits the width of the element to 42rem (672px) */}

//             <div className="relative max-w-3xl px-4 md:px-28 pt-16 flex flex-col  ">

//                 <div className="font-integral_cf text-4xl sm:text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE </div>

//                 <div className="text-gray-500 sm:text-base py-8">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. </div>

//                 <div className="  flex w-full justify-center sm:justify-center xs:justify-normal md:justify-normal"><BasicButton
//                     bg={"bg-black"}
//                     textcolor={"text-white"}
//                     py={"py-4"}
//                     px={"xs:px-20"}
//                     w={"w-full xs:w-auto"}
//                 ></BasicButton></div>

//                 <div className=" pt-16 flex flex-wrap justify-center xl:justify-around  lg:flex-nowrap lg:justify-normal gap-5 lg:gap-8 xl:gap-10 md:flex-wrap">

//                     <div className="flex flex-col pr-5 md:pr-8 xl:pr-12 border-r-2 border-gray-300">
//                         <div className="font-satoshi_bold text-2xl sm:text-4xl lg:text-2xl xl:text-4xl">200+</div>
//                         <div className="text-gray-500 text-xs sm:text-xs xl:text-base">International Brands</div>
//                     </div>

//                     <div className="flex flex-col pr-8 border-r-2 border-gray-300">
//                         <div className="text-2xl sm:text-4xl font-satoshi_bold lg:text-2xl xl:text-4xl">2,000+</div>
//                         <div className="text-gray-500 text-xs sm:text-xs xl:text-base">High-Quality Products</div>
//                     </div>

//                     <div className="flex flex-col">
//                         <div className="text-2xl sm:text-4xl font-satoshi_bold lg:text-2xl xl:text-4xl">30,000+</div>
//                         <div className="text-gray-500 text-xs sm:text-xs xl:text-base">Happy Customer</div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//         <div className="bg-blue-600 block lg:hidden flex justify-center bg-[#F2F0F1]">
//             <img src="/images/coverphoto3.webp"></img>
//         </div>
//     </div>
// };
// 
export const HeroSection = () => {
    return <div className=" bg-[#F2F0F1]"> 
    <div className="2xl:max-w-[1660px] 2xl:mx-auto">
    <div className="hero-section-main-div flex flex-col lg:flex items-center  px-4 md:px-28    relative transition-all duration-300 ease-in-out">

        {/* text area */}
        <div className=" flex flex-col gap-4 sm:mt-[100px] 
        mb-[100px] ">
            <div className="font-integral_cf text-4xl sm:text-6xl lg:text-7xl sm:max-w-xl lg:max-w-2xl z-10 transition-all duration-500 ease-in-out max-w-sm">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
            <div className=" font-satoshi text-gray-500 text-xs sm:text-sm tracking-wider  sm:max-w-[530px] max-w-[350px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
            <div className="flex w-full "><BasicButton
                     bg={"bg-black"}
                     textcolor={"text-white"}
                     py={"py-4"}
                    px={"xs:px-20"}
                     w={"w-full sm:w-[auto]"}></BasicButton></div>
            <div className=" flex  flex-col items-center gap-4 hero-section-customerCount">
                <div className="flex gap-4">
                    <div className="w-fit 0 flex  flex-col ">
                        <div className="font-satoshi_bold text-2xl hero-section-text">200+</div>
                        <div className="font-satoshi text-xs tracking-wider text-gray-700 xs:whitespace-nowrap">International Brands</div>
                    </div>

                    <div className="w-px bg-gray-400 mx-auto"></div>

                    <div className="flex  flex-col l">
                        <div className="font-satoshi_bold text-2xl hero-section-text">2000+</div>
                        <div className="font-satoshi text-xs tracking-wider text-gray-700 xs:whitespace-nowrap">Highly-Quality Products</div>
                    </div>
                    <div className="hidden hero-section-hidden-text w-px bg-gray-400 mx-auto"></div>
                </div>



                <div className="">
                    <div className="flex flex-col">
                        <div className="font-satoshi_bold text-2xl hero-section-text">30,000+</div>
                        <div className="font-satoshi text-xs tracking-wider text-gray-700 xs:whitespace-nowrap">Happy Customers</div>
                    </div>
                </div>


            </div>
        </div>


        {/* image */}
        <div className="hero-section-image ">
            <img src="/images/coverphoto3.webp"></img>
        </div>
    </div>
    </div>
    </div>

};
// bg-[#F2F0F1]