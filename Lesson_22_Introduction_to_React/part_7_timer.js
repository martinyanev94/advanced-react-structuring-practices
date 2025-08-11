import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return <div>Elapsed time: {seconds} seconds</div>;
}

ReactDOM.render(<Timer />, document.getElementById('root'));
