export const StayUpToDate = () => {
    return <div className={`mb-10 px-4 lg:px-28 `}>
        <div className=" 
    flex flex-col lg:flex-row  bg-black rounded-3xl px-6 py-10  xl:py-12 gap-8 sm:max-w-[1255px] sm:items-center lg:justify-between lg:max-w-full">
            <div className="text-white font-integral_cf text-2xl sm:text-2xl lg:text-3xl  xl:text-5xl lg:max-w-full 
              xs:text-center lg:text-left">STAY UPTO DATE ABOUT OUR LATEST OFFERS </div>

            <div className="flex flex-col gap-3 xs:items-center ">

                <div className="flex items-center gap-4 bg-white rounded-3xl px-4 py-3 xs:w-[350px] ">

                    <div className="w-[17px] h-[17px]"><img src="/images/logo/email.svg"></img></div>

                    <div className="font-satoshi_medium text-gray-400 text-sm ">Enter Your email address
                    </div>

                </div>

                 <button><div className="bg-white rounded-3xl px-4 py-3 text-sm font-satoshi_medium text-center 
                xs:w-[350px]">
                    Subscribe to Newsletter
                </div></button>

            </div>
        </div>
    </div>
}