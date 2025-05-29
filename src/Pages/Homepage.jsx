import { BottomBar } from "../Components/BottomBar"
import { Brands } from "../Components/Brands"
import { BrowseByStyle } from "../Components/BrowseByStyle.jsx"
import { DiscountBar } from "../Components/DiscountBar"
import { Heading } from "../Components/Heading"
import { HeroSection } from "../Components/HeroSection"
import { InfiniteLoop } from "../Components/InfiniteLoop.jsx"
import { NavBar } from "../Components/NavBar"
import { ProductCard } from "../Components/ProductCard"
import { Review } from "../Components/Review.jsx"
import { ScrollingText } from "../Components/ScrollingText .jsx"
import { StayUpToDate } from "../Components/StayUpToDate.jsx"
import { UseRefTesting } from "../Components/UseRefTesting.jsx"
import products from "../dummyData/products.js"

export const Homepage = () => {

    return <div>

        <DiscountBar></DiscountBar>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <div className="flex justify-center">
        <Heading text={"NEW ARRIVALS"}></Heading>
        </div>
        <ProductCard products={products}></ProductCard>
        <BrowseByStyle></BrowseByStyle><br></br>
        <Review></Review>
        {/* <UseRefTesting></UseRefTesting> */}
        <StayUpToDate />
        <BottomBar /> 

    </div>
}
