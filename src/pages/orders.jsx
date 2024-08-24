import React, { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthContext"
import axiosInstance from '../utils/axios';
import { toast } from 'react-hot-toast';

const UserOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    const getOrders = async () => {
        try {
            let resposne = await axiosInstance.get(`/orders/${user}`)

            if (resposne.data.status === "success") {
                setOrders(resposne.data.data)
            } else {
                setOrders([])
            }
        } catch (error) {
            toast.error(error.resposne.data.error)
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div className=" mx-auto p-6 sm:p-8 w-screen max-w-5xl h-screen mt-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Orders</h1>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                {orders.length > 0 ? <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">payment method</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order._id}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.paymentInfo.method}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.totalPrice}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <h1 className='text-lg text-center font-bold my-5'>No order found</h1>}
            </div>
        </div>
    );
};

export default UserOrders;
