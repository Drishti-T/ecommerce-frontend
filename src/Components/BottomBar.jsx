import { PayCards } from "./PayCards"

const visa = "/images/logo/visa.svg"
const Mastercard = "/images/logo/mastercard.svg"
const paypal = "/images/logo/paypal.svg"
const applePay = "/images/logo/apple-pay.svg"
const gPay = "/images/logo/g-pay.svg"


export const BottomBar = () => {
    return <div className="bg-[#F0F0F0] p-4 sm:px-28">
        <div className="flex flex-wrap xl:justify-between gap-x-2 xs:gap-x-10   lg:flex-nowrap gap-y-6  items-center lg:items-start  pt-28 sm:pt-28 pb-10 ">

            <div className="w-full lg:w-[300px]  flex flex-col gap-4 ">
                <div className="font-integral_cf text-3xl flex justify ">SHOP.CO</div>
                <div className="font-satoshi text-[0.82rem] text-gray-700 lg:">We have clothes that suits your style and which you're proud to wear. From women to men.</div>
                <div className="flex gap-3 pt-2 lg:pt-6 ">
                    <button><div className="border border-gray-400  bg-white 
                    rounded-full w-[25px] h-[25px] flex justify-center items-center"><img src="/images/logo/icons8-twitter-bird.svg" className="w-[15px] h-[15px]"></img></div></button>
                     <button><div className=" border border-black bg-black rounded-full 
                    w-[25px] h-[25px] flex justify-center items-center"><img src="/images/logo/icons8-facebook-logo.svg" className="w-[15px] h-[15px]"></img></div></button>
                     <button><div className="border border-gray-400  bg-white 
                    rounded-full w-[25px] h-[25px] flex justify-center items-center"><img src="/images/logo/icons8-instagram.svg" className="w-[15px] h-[15px]"></img></div></button>
                     <button><div className=" border border-gray-400  bg-white 
                    rounded-full w-[25px] h-[25px] flex justify-center items-center"><img src="/images/logo/icons8-github-logo.svg" className="w-[15px] h-[15px]"></img></div></button>
                </div>
            </div>

            <div className="w-[150px] flex flex-col gap-3 ">
                <div className="font-satoshi_medium text-xs tracking-[0.2rem] lg:text-sm lg:pt-3">COMPANY</div>
                <div className="text-[0.82rem] text-gray-500 flex flex-col gap-2 lg:text-[0.85rem] lg:gap-4">
                    <div>About</div>
                    <div>Features</div>
                    <div>Works</div>
                    <div>Career</div>
                </div>
            </div>

            <div className="w-[150px] flex flex-col gap-3">
                <div className="font-satoshi_medium text-xs tracking-[0.2rem] lg:text-sm lg:pt-3">HELP</div>
                <div className="text-[0.82rem] text-gray-500 flex flex-col gap-2 lg:text-[0.85rem] lg:gap-4">
                    <div>Customer Support</div>
                    <div>Delivery Details</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                </div>
            </div>

            <div className="w-[150px] flex flex-col gap-3">
                <div className="font-satoshi_medium text-xs tracking-[0.2rem] lg:text-sm lg:pt-3">FAQ</div>
                <div className="text-[0.82rem] lg:text-[0.85rem] text-gray-500 
                flex flex-col gap-2 lg:gap-4">
                    <div>Account</div>
                    <div>Manage Deliveries</div>
                    <div>Orders</div>
                    <div>Payment</div>
                </div>
            </div>

            <div className="w-[160px] flex flex-col gap-3">
                <div className="font-satoshi_medium text-xs tracking-[0.2rem] lg:text-sm lg:pt-3">RESOURCES</div>
                <div className="text-[0.82rem] lg:text-[0.85rem] text-gray-500 
                flex flex-col gap-2 lg:gap-4">
                    <div>Free eBook</div>
                    <div>Development Tutorial</div>
                    <div>How to - Blog</div>
                    <div>Youtube Playlist</div>
                </div>
            </div>
        </div>

        <div className="pb-20 flex flex-col lg:flex-row items-center gap-2 border-t border-gray-300 pt-4 lg:justify-between">
            <div className="text-[0.82rem] text-gray-500">Shop.co C 2000-2025, All Rights Reserved</div>
            <div className="flex gap-4 ">
                <button><PayCards image={visa}></PayCards></button>
                <button><PayCards image={Mastercard}></PayCards></button>
                <button><PayCards image={paypal}></PayCards></button>
                <button><PayCards image={applePay}></PayCards></button>
                <button><PayCards image={gPay}></PayCards></button>

            </div>
        </div>
    </div>
}

{/* <a target="_blank" href="https://icons8.com/icon/62856/github">github logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */ }


{/* <a target="_blank" href="https://icons8.com/icon/87264/facebook-f">Facebook Logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */ }


{/* <a target="_blank" href="https://icons8.com/icon/8824/twitter-bird">Twitter Bird</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */ }



