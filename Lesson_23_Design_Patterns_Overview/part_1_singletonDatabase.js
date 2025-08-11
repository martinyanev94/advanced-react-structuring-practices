class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.connection = this.connectToDatabase();
        Database.instance = this;
    }

    connectToDatabase() {
        // Logic to connect to the database
        console.log("Database connected");
    }
}

// Usage
const db1 = new Database(); // Database connected
const db2 = new Database(); // No new connection, uses the existing instance

console.log(db1 === db2); // true
