// user.js
let users = [];

export function addUser(name) {
    const user = { id: users.length + 1, name };
    users.push(user);
    return user;
}

export function getUsers() {
    return users;
}
// order.js
import { addUser, getUsers } from './user.js';

export function createOrder(userName, item) {
    const user = addUser(userName);
    return `Order created for ${user.name} for item: ${item}`;
}

export function listUsersWithOrders(item) {
    const users = getUsers();
    return users.map(user => `Order for ${user.name} for item: ${item}`).join(', ');
}
