const LoadingSpinner = () => (
    <div className="spinner">
        <style jsx>{`
            .spinner {
                border: 4px solid rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                border-top: 4px solid #ffffff;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);

const HomePage = ({ latestProducts, isLoading }) => {
    return (
        <div>
            <h1>Welcome to Our Store</h1>
            <p>Your one-stop shop for the best products!</p>
            <h2>Latest Products</h2>
            {isLoading ? <LoadingSpinner /> : (
                <ul>
                    {latestProducts.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
