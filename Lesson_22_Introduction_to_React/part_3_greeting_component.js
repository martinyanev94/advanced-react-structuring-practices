import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(<Greeting name="Alice" />, document.getElementById('root'));
