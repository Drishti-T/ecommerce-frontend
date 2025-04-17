import { BottomBar } from "../Components/BottomBar"
import { Brands } from "../Components/Brands"
import { BrowseByStyle } from "../Components/BrowseByStyle.jsx"
import { DiscountBar } from "../Components/DiscountBar"
import { Heading } from "../Components/Heading"
import { HeroSection } from "../Components/HeroSection"
import { NavBar } from "../Components/NavBar"
import { ProductCard } from "../Components/ProductCard"
import { StayUpToDate } from "../Components/StayUpToDate.jsx"
import products from "../dummyData/products.js"
export const Homepage = () => {

    return <div>
        <DiscountBar></DiscountBar>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <Heading text={"NEW ARRIVALS"}></Heading>
        <ProductCard products={products}></ProductCard>
        <BrowseByStyle></BrowseByStyle>
        <StayUpToDate></StayUpToDate>
        <BottomBar></BottomBar>
    </div>
}
