import React, { useState, useMemo, useCallback } from 'react';

const ExpensiveComputation = ({ num }) => {
    const compute = (number) => {
        // Simulate an expensive computation
        let result = 0;
        for (let i = 0; i < number; i++) {
            result += i;
        }
        return result;
    };

    const memoizedValue = useMemo(() => compute(num), [num]);

    return <div>Computed Value: {memoizedValue}</div>;
};

const App = () => {
    const [inputValue, setInputValue] = useState(0);
    const handleChange = useCallback((e) => {
        setInputValue(Number(e.target.value));
    }, []);

    return (
        <div>
            <input type="number" onChange={handleChange} />
            <ExpensiveComputation num={inputValue} />
        </div>
    );
};

export default App;
