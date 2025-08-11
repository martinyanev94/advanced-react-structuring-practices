import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, increment, decrement } from './store'; // Assuming the Redux code is in the store.js

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

export default App;
