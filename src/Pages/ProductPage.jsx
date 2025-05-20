import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { NavBar } from "../Components/NavBar";
import { ProductDisplay } from "../Components/ProductDisplay";


export const ProductPage = () => {
    const image = "/images/products/Tshirt-1.png";
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const response = await axios(`/api/v1/product/${id}`);
    //             console.log(response)

    //             setProduct(response.data)
    //         } catch (error) {
    //             setError(error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     };
    //     fetchProduct();
    // }, [id]);

    // if (loading) return <div>Loading.....</div>
    // if (error) return <div>{error}</div>
    return <div>
        <NavBar></NavBar>
       <ProductDisplay></ProductDisplay>
      

    </div>
}