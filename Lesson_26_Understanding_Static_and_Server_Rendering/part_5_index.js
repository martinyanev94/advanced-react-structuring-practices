import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';

ReactDOM.hydrate(
    <MyApp />,
    document.getElementById('root')
);
