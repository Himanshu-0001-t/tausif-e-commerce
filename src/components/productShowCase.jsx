import React, { useEffect, useState } from 'react';
import axios from "axios"
import ProductCard from './productCard';
import ProductSkeleton from './skeleton';
import { toast } from 'react-hot-toast';

const ProductSection = () => {
    const [products, setproducts] = useState([])
    const [loding, setLoding] = useState(false)

    const getProduct = async () => {
        try {
            setLoding(true)
            let response = await axios.get("https://gadgetstore-34q8n2kx.b4a.run/api/product?limit=10")

            if (response.data.status === "success") {
                setproducts(response.data.data)
            }

        } catch (error) {
            toast.error(error.response.data.error)
        } finally {
            setLoding(false)
        }
    }
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="md:p-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {loding ? <ProductSkeleton /> :
                    products.map((product) => {
                        return <ProductCard product={product} key={product._id} />
                    })
                }
            </div>
        </div>
    );
};

export default ProductSection;
