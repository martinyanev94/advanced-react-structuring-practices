class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.chatRoom = this;
    }

    send(message, from, to) {
        if (to) {
            this.users[to].receive(message, from);
        } else {
            for (let user of Object.values(this.users)) {
                if (user.name !== from) {
                    user.receive(message, from);
                }
            }
        }
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }

    send(message, to) {
        this.chatRoom.send(message, this.name, to);
    }

    receive(message, from) {
        console.log(`${from} to ${this.name}: ${message}`);
    }
}

// Usage
const chatRoom = new ChatRoom();

const alice = new User("Alice");
const bob = new User("Bob");
const charlie = new User("Charlie");

chatRoom.register(alice);
chatRoom.register(bob);
chatRoom.register(charlie);

alice.send("Hi Bob", "Bob");
bob.send("Hey Alice");
charlie.send("Hello everyone");
