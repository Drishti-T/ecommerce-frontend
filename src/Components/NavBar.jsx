import { useEffect, useState } from "react"

export const NavBar = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 640) // width less than sm

    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })

    return <div className="w-screen bg-white flex  px-4 sm:px-20 py-4 justify-between  ">

        {/* left */}
        <div className="flex gap-6 items-center ">

            {isMobile && (
                <div className="h-6 w-6">
                    <img
                        src="/svg/menu_lines.svg"
                        alt="hamburger_menu"
                        className="h-full w-full"
                    />
                </div>
            )}

            <div className="font-integral_cf text-3xl pb-2 ">
                SHOP.CO
            </div>

        </div>

        {/* right */}
        <div className="flex items-center gap-4">

            {isMobile && (
                <div className="h-5 w-5 ">
                    <img src="/svg/search.svg" alt="search" className="scale-110"></img>
                </div>

            )}


            <div className="h-5 w-5 ">
                <img src="/svg/cart.svg" alt="cart" className="h-full w-full"></img>
            </div>
            <div className="h-5 w-5">
                <img src="/svg/profile.svg" alt="profile" className="h-full w-full"></img>
            </div>
        </div>

    </div>
}