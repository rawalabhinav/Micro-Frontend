import React, { useEffect, useState } from "react";

import {getProductById, currency} from "home/products"

export default function PDPContent(){
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (id){
            getProductById().then((product) => {
                setProduct(product);
            });
        }       
        else {
            setProduct(null);
        }
    },[id]);

    if (!product){
        return null;
    }

    return (
        <div className="grid grid-col-2 gap-5">
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div> 
                <div className="flex">
                    <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
                    <div className="font-bold text-3xl flex-end">
                        {currency.format(product.price)}
                    </div>
                    <div className="mt-10">{product.description}</div>
                    <div className="mt-10">{product.longDescription}</div>
                </div>
            </div>
        </div>
    );
}