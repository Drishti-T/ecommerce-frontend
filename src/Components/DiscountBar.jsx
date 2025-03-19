import { useState } from "react"
import { Link } from "react-router-dom"

export const DiscountBar = () => {

    const [visible, setVisible] = useState(true); // initially visible

    // if visible is false return null
    if (!visible) return null;

    // if visible is true then return this below
    return <div className="w-screen flex bg-black text-white py-2 text-xs text-center justify-center items-center">
        <div className="font-satoshi">
            Sign up and get 20% off to your first order. <Link className="underline underline-offset-4">Sign Up now</Link>
        </div>
        <button className="absolute hidden sm:block sm:right-4 lg:right-40 cursor-pointer text-xl" onClick={() => {
            setVisible(false) //onclick hidden
        }}>×</button>
    </div>
}

