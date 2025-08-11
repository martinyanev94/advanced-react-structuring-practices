import React from 'react';
import ReactDOM from 'react-dom';

function ParentComponent() {
    return (
        <div>
            <ChildComponent name="Alice" />
            <ChildComponent name="Bob" />
        </div>
    );
}

function ChildComponent(props) {
    return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(<ParentComponent />, document.getElementById('root'));
