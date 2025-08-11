import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function NameForm() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <form>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Your name is: {name}</p>
        </form>
    );
}

ReactDOM.render(<NameForm />, document.getElementById('root'));
