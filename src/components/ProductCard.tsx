import { useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
};

type Products = {
    products: Product[];
};

export const ProductCard = ({ products }: Products) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    // console.log(selectedProduct)

    return (
        <section className="cardProduct">
            {products.map(product => (
                <div className="product_card" key={product.id}>
                        <img className="product_image" src={product.image} alt="" />
                    <a className="product_title">{product.title}</a>
                    <div className="rating_price">
                        <p>⭐{product.rating.rate}</p>
                        <p>${product.price}</p>
                    </div>
                    <button
                    onClick={() => setSelectedProduct(product)} className="buy_btn">Buy Now</button>
                </div>
            ))}
        </section>
    );
};