import { BottomBar } from "../Components/BottomBar"
import { Brands } from "../Components/Brands"
import { DiscountBar } from "../Components/DiscountBar"
import { Heading } from "../Components/Heading"
import { HeroSection } from "../Components/HeroSection"
import { NavBar } from "../Components/NavBar"
import { ProductCard } from "../Components/ProductCard"
import products from "../testingFiles/products.js"
export const Homepage = () => {

    return <div>
        <DiscountBar></DiscountBar>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <Heading text={"NEW ARRIVALS"}></Heading>
        <ProductCard products={products}></ProductCard>
        <BottomBar></BottomBar>
    </div>
}


