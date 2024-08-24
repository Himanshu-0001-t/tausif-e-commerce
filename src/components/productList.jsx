import React, { useEffect, useState } from 'react';
import ProductCard from './productCard';
import axios from 'axios';
import ProductSkeleton from './skeleton';
import { toast } from 'react-hot-toast';


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [loding, setLoding] = useState(false)

    const getProducts = async () => {
        try {
            setLoding(true)
            let response = await axios.get("https://e-comm-backend-pkj2.onrender.com/api/products")

            if (response.data.status === "success") {
                setProducts(response.data.data)
            }
        } catch (error) {
            toast.error(error.response.data.error)
        } finally {
            setLoding(false)
        }
    }

    const searchProduct = async () => {
        try {
            setLoding(true)
            let response = await axios.get(`https://e-comm-backend-pkj2.onrender.com/api/products/q/?search=${search}`)

            if (response.data.status === "success") {
                setProducts(response.data.data)
            }

        } catch (error) {
            toast.error(error.response.data.error)
            setProducts([])

        } finally {
            setLoding(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="w-[90%] m-auto md:p-4 mt-10 min-h-screen">
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 my-5'>
                <input type="search" className='p-3 rounded-md w-full md:w-[30%] text-black ' placeholder='search product' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='py-3 px-6 rounded-md bg-indigo-500 font-bold' onClick={() => searchProduct()}>Search</button>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {loding ? <ProductSkeleton /> :
                    products.length > 0 ? products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    )) : <h1 className='text-center block text-3xl font-bold'>Product not found  </h1>
                }
            </div>
        </div>
    );
};

export default ProductList;
