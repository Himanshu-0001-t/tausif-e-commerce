import React from 'react';

const features = [
    {
        title: 'Free Shipping',
        description: 'Enjoy free shipping on all orders over 2000 Rs.',
        icon: (
            <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h1l2 9h13l2-9h1M3 10h18M5 19a1 1 0 001 1h12a1 1 0 001-1M7 19a1 1 0 100 2 1 1 0 000-2zM17 19a1 1 0 100 2 1 1 0 000-2zM9 10V5a3 3 0 013-3h2a3 3 0 013 3v5"
                />
            </svg>
        ),
    },
    {
        title: '24/7 Support',
        description: 'We are here to help you 24/7 with any questions.',
        icon: (
            <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h18M9 5v6a9 9 0 009 9M21 5a16 16 0 00-12 12.25m-1.536-6.87a4 4 0 11-2.828-2.828m5.656-5.656a4 4 0 11-2.828-2.828"
                />
            </svg>
        ),
    },
    {
        title: 'Secure Payment',
        description: 'Your payment information is safe and secure with us.',
        icon: (
            <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 2 4 2 4s2-2.9 2-4zm0-5c-1.105 0-2 .895-2 2s.895 2 2 2s2-.895 2-2s-.895-2-2-2zm0-6c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10S17.523 0 12 0zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8s8 3.582 8 8s-3.582 8-8 8zm-6-2h12v2H6v-2z"
                />
            </svg>
        ),
    },
    {
        title: 'Easy Returns',
        description: 'Not satisfied? Return your product within 30 days.',
        icon: (
            <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3v6h6M21 21v-6h-6M7 7l-4 4m0 0l4 4m4-4H3m18-4l-4 4m0 0l4 4m-4-4h6M12 12v4m0 4v4m0-4h4m-4 0H8m0-12h8m-4 4H8"
                />
            </svg>
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
