import React from 'react';
import useFormInput from './useFormInput'; // Assuming the hook is in useFormInput.js

const FormComponent = () => {
    const name = useFormInput('');
    const email = useFormInput('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name.value}, Email: ${email.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" {...name} />
            </label>
            <label>
                Email:
                <input type="email" {...email} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
