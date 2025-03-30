import { BottomBar } from "../Components/BottomBar"
import { Brands } from "../Components/Brands"
import { DiscountBar } from "../Components/DiscountBar"
import { Heading } from "../Components/Heading"
import { Hero } from "../Components/Hero"
import { NavBar } from "../Components/NavBar"
import { ProductCard } from "../Components/ProductCard"
export const Homepage = () => {

    return <div>
        <DiscountBar></DiscountBar>
        <NavBar></NavBar>
        <Hero></Hero>
        <Brands></Brands>
        <Heading text={"NEW ARRIVALS"}></Heading>
        <ProductCard product={product}></ProductCard>
        <BottomBar></BottomBar>
    </div>
}


// example of the product object please check the api & db schema for what to add here 
const product = {
    "name" : "T-shirt with Tape Details",
    "image" : "/images/products/Frame32.png",
    "price" : "", 
}