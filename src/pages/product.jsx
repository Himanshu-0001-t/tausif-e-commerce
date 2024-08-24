import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthContext"
import axiosInstance from '../utils/axios';


const ProductDetail = () => {
  const [product, setProduct] = useState([])
  const { user } = useAuth()

  let quantity = 1

  let id = useParams("id")
  let getProduct = async () => {
    let response = await axios.get(`https://e-comm-backend-pkj2.onrender.com/api/product/${id.id}`)
    if (response.data.status === "success") {
      setProduct(response.data.data)
    }
  }

  const hadnleAddToCart = async () => {

    if (!user) {
      return toast.error("Login please")
    }

    const cartData = {
      userId: user,
      product:
      {
        productId: product._id,
        quantity: 1
      }
    }


    try {
      let response = await axiosInstance.post(`/cart/`, cartData)

      if (response.data.status === "success" || response.data.success) {
        toast.success("item add in cart")
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  if (product.length == 0) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold'>Loding....</h1>
      </div>
    )
  }

  return (
    <div className="max-w-4xl lg:h-screen mx-auto p-6 flex items-center justify-center">
      <div className="flex flex-col md:flex-row md:space-x-6 items-center">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-gray-200">{product.name}</h1>
          <p className="text-gray-200 mt-4">{product.description}</p>
          <div className="mt-4">
            <span className="text-lg font-semibold text-gray-200">Rs   {product.price}</span>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500">
              {"★".repeat(4)}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => hadnleAddToCart()}>
              Add to Cart
            </button>
            <Link to="/checkout" state={{ product, quantity }} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              By now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
