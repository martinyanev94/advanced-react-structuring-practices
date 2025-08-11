import React, { Suspense } from 'react';

// Importing components dynamically
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
    return (
        <div>
            <h1>Welcome to My App!</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}

export default App;
