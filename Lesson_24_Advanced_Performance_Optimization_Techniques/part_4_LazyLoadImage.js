import React, { useRef, useEffect, useState } from 'react';

const LazyLoadImage = ({ src, alt }) => {
    const imgRef = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.unobserve(imgRef.current);
            }
        });
    });

    useEffect(() => {
        observer.observe(imgRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={imgRef}>
            {isIntersecting ? <img src={src} alt={alt} /> : <div>Loading image...</div>}
        </div>
    );
};

const App = () => (
    <div>
        <h1>My Lazy Load Image App</h1>
        <LazyLoadImage src="image1.jpg" alt="Description 1" />
        <LazyLoadImage src="image2.jpg" alt="Description 2" />
    </div>
);

export default App;
