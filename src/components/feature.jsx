import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const features = [
    {
        title: 'Free Shipping',
        description: 'Enjoy free shipping on all orders over 2000 Rs.',
        icon: (
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-5xl">
                <LiaShippingFastSolid color='black' />
            </div>
        ),
    },
    {
        title: '24/7 Support',
        description: 'We are here to help you 24/7 with any questions.',
        icon: (
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-5xl">
                <BiSupport color='black' />
            </div>
        ),
    },
    {
        title: 'Secure Payment',
        description: 'Your payment information is safe and secure with us.',
        icon: (
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-5xl">
                <MdOutlinePayment color='black' />
            </div>
        ),
    },
    {
        title: 'Easy Returns',
        description: 'Not satisfied? Return your product within 30 days.',
        icon: (
            <div className="flex items-center justify-center w-16 h-16 rounded-full text-5xl">
                <TbTruckReturn color='black' />
            </div>
        ),
    },
];


const Features = () => {
    return (
        <div className="bg-white py-16 my-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Why Shop With Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
