import React from 'react';

const ShoppingList = ({ items, addItem }) => {
    const handleAddItem = () => {
        const newItem = prompt("Enter a new item:");
        if (newItem) {
            addItem(newItem);
        }
    };

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ShoppingList;
