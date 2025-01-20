import React from 'react'
import Hero from '../../components/Hero/Hero'
import Benefits from '../../components/Benefits/Benefits'
import Features from '../../components/Features/Features'
import ProductsShowcase from '../../components/ProductsShowcase/ProductsShowcase'

const Home = () => {
    return (
        <div>
            <Hero />
            <Benefits />
            <Features />
            <ProductsShowcase />
        </div>
    )
}

export default Home