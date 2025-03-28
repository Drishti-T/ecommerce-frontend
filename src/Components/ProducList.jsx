import axios from "axios";
import { useEffect } from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {

    const [products , setProducts] = useState([]);
    
    useEffect(() => {
        //simulating a backend call
        axios.get("https://dummyjs/product?limit=5").then((response) => {
            setProducts(response.data.products);
        }).catch((error) => console.error("Error fetching products" , error))
    } , []);
    return <div>

        <div>
            {products.map((product) => {
                <ProductCard key={product.id}product={product} ></ProductCard>
            })}</div>

    </div>
}