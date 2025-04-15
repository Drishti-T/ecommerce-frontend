export const StayUpToDate = () => {
    return <div className=" 
    flex flex-col md:flex-row  bg-black rounded-3xl px-6 py-10 gap-8 sm:max-w-[1255px] sm:items-center md:justify-between ">
        <div className="text-white font-integral_cf text-3xl sm:text-4xl md:max-w-[580px] xs:text-center md:text-left">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
        
        <div className="flex flex-col gap-3 xs:items-center">

            <div className="flex items-center gap-4 bg-white rounded-3xl px-4 py-3 xs:w-[350px] ">

                <div className="w-[17px] h-[17px]"><img src="/images/logo/email.svg"></img></div>

                <div className="font-satoshi_medium text-gray-400 text-sm">Enter Your email address
                </div>

            </div>

            <div className="bg-white rounded-3xl px-4 py-3 text-sm font-satoshi_medium text-center xs:w-[350px]">
                Subscribe to Newsletter
            </div>

        </div>
    </div>
}