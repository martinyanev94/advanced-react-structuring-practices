import React from 'react';

const HomePage = ({ latestProducts }) => {
    return (
        <div>
            <h1>Welcome to Our Store</h1>
            <p>Your one-stop shop for the best products!</p>
            <h2>Latest Products</h2>
            <ul>
                {latestProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    // Fetch static information (like site information)
    const res = await fetch('https://api.example.com/static-info');
    const staticInfo = await res.json();

    return {
        props: {
            latestProducts: staticInfo.latestProducts,
        },
    };
}

export async function getServerSideProps() {
    // Fetch dynamic data (latest products)
    const res = await fetch('https://api.example.com/latest-products');
    const latestProducts = await res.json();

    return {
        props: {
            latestProducts,
        },
    };
}

export default HomePage;
