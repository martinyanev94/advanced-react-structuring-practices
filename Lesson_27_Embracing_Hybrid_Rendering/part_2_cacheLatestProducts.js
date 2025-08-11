import Redis from 'redis';

const redisClient = Redis.createClient();

export async function getServerSideProps() {
    const cacheKey = 'latestProducts';
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
        return {
            props: {
                latestProducts: JSON.parse(cachedData),
            },
        };
    }

    const res = await fetch('https://api.example.com/latest-products');
    const latestProducts = await res.json();

    // Cache the dynamic data for subsequent requests
    redisClient.setex(cacheKey, 3600, JSON.stringify(latestProducts)); // Cache for 1 hour

    return {
        props: {
            latestProducts,
        },
    };
}
