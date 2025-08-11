// user.js
const privateData = { username: "Charlie", password: "topsecret" };

export const getUsername = () => privateData.username;

export const isAuthenticated = () => !!privateData.username;
// main.js
import { getUsername, isAuthenticated } from './user.js';

console.log(getUsername()); // Outputs: Charlie
console.log(isAuthenticated()); // Outputs: true
