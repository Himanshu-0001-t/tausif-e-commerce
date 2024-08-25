import React from 'react';
import { Link } from "react-router-dom"

function OrderSuccess() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md text-center">
                <div className="mb-4">
                    <svg
                        className="w-16 h-16 text-green-500 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7 12h.01M21 12h-2a9 9 0 10-18 0h2m2 0a7 7 0 1114 0z"
                        ></path>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
                <p className="text-gray-600 mb-6">Thank you for your purchase. Your order number is <span className="font-semibold text-gray-800">#123456789</span>.</p>
                <Link to="/shop"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"

                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}

export default OrderSuccess;
