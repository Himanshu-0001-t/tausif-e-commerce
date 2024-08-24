import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 text-sm lg:text-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">

                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/shop" className="hover:underline">Shop</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl">
                                <i className="fab fa-facebook-f"><FaFacebook /></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl">
                                <i className="fab fa-twitter"><FaXTwitter /></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl">
                                <i className="fab fa-instagram"><FaInstagramSquare /></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl">
                                <i className="fab fa-linkedin-in"><IoLogoLinkedin /></i>
                            </a>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <p className="mb-2">123 E-commerce St, Suite 100</p>
                        <p className="mb-2">City, State, 12345</p>
                        <p className="mb-2">Email: info@example.com</p>
                        <p className="mb-2">Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; 2024 TAUSIF E-Commerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
