import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard";

export const ProductData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError("Ошибка загрузки");
            }
            finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);    
    
    
    return (
        <>
        <section className="loading_error">
            {loading && <h2>Oops! Something went wrong. <br />
            Please check your internet connection and try again.</h2>}
            {loading && <a href="#">Home</a>}
            {loading && <div>Loading...</div>}
            {error && <div>Error loading</div>}
        </section>
        <ProductCard products={products}/>
        </>
    )
}