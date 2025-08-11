import React, { useState } from 'react';
import ShoppingList from './ShoppingList'; // A presentational component

const ShoppingListContainer = () => {
    const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return <ShoppingList items={items} addItem={addItem} />;
};

export default ShoppingListContainer;
