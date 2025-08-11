import React, { useEffect, useState } from 'react';

const LazyImage = ({ src, alt }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    imgObserver.disconnect();
                }
            });
        });

        imgObserver.observe(document.getElementById(alt));

        return () => {
            imgObserver.disconnect();
        };
    }, [alt]);

    return (
        <div id={alt} style={{ minHeight: '200px' }}>
            {isVisible ? <img src={src} alt={alt} /> : <div>Loading...</div>}
        </div>
    );
};
