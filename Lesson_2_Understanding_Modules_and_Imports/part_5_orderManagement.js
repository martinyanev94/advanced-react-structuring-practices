// app.js
import { createOrder, listUsersWithOrders } from './order.js';

console.log(createOrder('Alice', 'Laptop')); // Order created for Alice for item: Laptop
console.log(listUsersWithOrders('Laptop')); // Order for Alice for item: Laptop
