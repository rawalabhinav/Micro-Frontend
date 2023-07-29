import React, {useEffect, useState} from "react";
import { getProducts, currency } from "./products";

export default function HomeContent(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <div className="m-10 grid grid-cols-4 gap-10">
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className="flex">
                        <div className="flex-grow font-bold text-base">
                            <a>{product.name}</a>
                        </div>
                        <div className="flex-end text-base">
                            {currency.format(product.price)}
                        </div>
                    </div>
                    <div className="mt-4 text-sm">
                        {product.description}
                    </div>
                </div>
            ))}
        </div>
    );
}