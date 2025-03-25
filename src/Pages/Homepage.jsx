import { BottomBar } from "../Components/BottomBar"
import { Brands } from "../Components/Brands"
import { DiscountBar } from "../Components/DiscountBar"
import { Heading } from "../Components/Heading"
import { Hero } from "../Components/Hero"
import { HeroSection } from "../Components/HeroSection"
import { NavBar } from "../Components/NavBar"
import { ProductCard } from "../Components/ProductCard"
export const Homepage = () => {

    return <div>
        <DiscountBar></DiscountBar>
        <NavBar></NavBar>
        <Hero></Hero>
        <Brands></Brands>
        <Heading text={"NEW ARRIVALS"}></Heading>
        {/* <ProductCard></ProductCard> */}
        <BottomBar></BottomBar>
    </div>
}