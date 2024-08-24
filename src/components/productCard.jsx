import React from 'react';
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    let quantity = 1
    return (
        <div className="max-w-md rounded bg-white text-black">
            <div className="bg-white rounded-lg overflow-hidden ">
                <div className="relative pb-40">
                    <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt={product.name} className="absolute h-full w-full object-contain" />
                    </Link>
                </div>
                <div className="p-3 ">
                    <h3 className="text-base font-semibold mb-1">{product.name}</h3>
                    <p className="text-gray-700 text-sm mb-2">{product.description.substring(0, 60) + "..."}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-bold text-lg">{product.price}</span>
                        <Link to="/checkout" state={{ product, quantity }} className="bg-blue-500 text-white  px-3 py-1.5 rounded hover:bg-blue-600 transition-colors duration-300">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ProductCard;
