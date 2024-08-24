import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast"
import { HiMiniPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useAuth } from "../context/AuthContext"

const CartPage = () => {
    const [cartItems, setCartItems] = useState([])
    const { user } = useAuth()

    const getCartItem = async () => {
        try {
            let resposne = await axios.get(`https://e-comm-backend-pkj2.onrender.com/api/cart/${user}`, { withCredentials: true })

            if (resposne.data.status === "success") {
                setCartItems(resposne.data.data.cart.products)
            } else {
                toast.error(resposne.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateCartQuantity = async (productId, quantity) => {
        let data = {
            userId: user,
            productId,
            quantity
        }

        try {
            let response = await axios.patch("https://e-comm-backend-pkj2.onrender.com/api/cart/update", data, { withCredentials: true })
            if (response.data.status === "success") {
                toast.success("item quantity updated")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const incrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
        updateCartQuantity(cartItems[index].productId._id, cartItems[index].quantity)
    };

    const decrementQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            setCartItems(updatedCartItems);
            updateCartQuantity(cartItems[index].productId._id, cartItems[index].quantity)
        }
    };

    const deleteCartItem = async (productId) => {
        const data = {
            userId: user,
            productId
        }

        try {
            let response = await axios.post("https://e-comm-backend-pkj2.onrender.com/api/cart/remove", data, { withCredentials: true })
            if (response.data.status === "success") {
                toast.success(response.data.message)
                getCartItem()
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCartItem()
    }, [])

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    };

    {
        return cartItems.length > 0 ? <div className="max-w-4xl mx-auto min-h-screen p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6" > Shopping Cart</h1 >
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cartItems.map((item, index) => {
                            return <tr key={item._id}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 h-32 w-32">
                                    <span className="px-4 py-4 block whitespace-nowrap text-sm font-medium text-gray-900">{item.productId.name}</span>
                                    <img src={item.productId.image} alt={item.productId.name} className='h-full' />
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 items-center">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => decrementQuantity(index)}
                                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded text-black text-lg"
                                        >
                                            <HiMinus />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => incrementQuantity(index)}
                                            className="p-2 bg-gray-200 hover:bg-gray-300 rounded text-black text-lg"
                                        >
                                            <HiMiniPlus />
                                        </button>
                                    </div>

                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 items-center">₹  {item.productId.price}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 items-center">₹  {(item.quantity * item.productId.price).toFixed(2)}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-2xl text-gray-500 text-center hover:cursor-pointer"><MdDelete color='red' onClick={() => deleteCartItem(item.productId._id)} /></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div className="flex justify-between items-center p-4 border-t border-gray-200">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-semibold">${calculateTotal()}</span>
                </div>
                <div className="p-4" >
                    <Link to="/checkout" state={{ cartItems }} className="w-full block bg-blue-500 text-white text-center p-3 rounded-lg hover:bg-blue-600" >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div >
            : <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <svg
                        className="w-24 h-24 text-gray-400 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h18M9 3v4h6V3M3 7l1.5 13.5a2 2 0 002 1.5h11a2 2 0 002-1.5L21 7H3z"
                        />
                    </svg>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/shop" className="block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
                        Start Shopping
                    </Link>
                </div>
            </div>
    }
};

export default CartPage;
