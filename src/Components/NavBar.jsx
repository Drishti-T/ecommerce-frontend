export const NavBar = () => {
    return <div className="w-screen bg-white flex  px-4 sm:px-20 py-4 justify-between  ">

        {/* left */}
        <div className="flex gap-6 items-center ">

            <div className="h-6 w-6 ">

                <img src="/svg/menu_lines.svg" alt="menu" className=" sm:hidden h-full w-full "></img>

            </div>

            <div className="font-integral_cf text-3xl pb-2 ">
                SHOP.CO
            </div>
           
        </div>

        {/* right */}
        <div className="flex items-center gap-4">

            <div className="h-5 w-5 ">
                <img src="/svg/search.svg" alt="search" className="scale-110 sm:hidden"></img>
            </div>
            <div className="h-5 w-5 ">
                <img src="/svg/cart.svg" alt="cart" className="h-full w-full"></img>
            </div>
            <div className="h-5 w-5">
                <img src="/svg/profile.svg" alt="profile" className="h-full w-full"></img>
            </div>
        </div>

    </div>
}