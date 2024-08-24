import React from 'react';
import Feature from '../components/feature';
import HeroSection from '../components/hero';
import ProductSection from '../components/productShowCase';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <main>
                <section className="text-center">
                    <h2 className="md:text-4xl text-3xl  font-semibold">Welcome to Our Store</h2>
                    <p className="mt-4 text-sm lg:text-lg">Powering Your Digital World.</p>
                </section>
                <HeroSection />
                <ProductSection />
                <Feature />
            </main>
        </div>
    );
};

export default HomePage;
