class User {
    constructor(name) {
        this.name = name;
    }
}

class ThirdPartyUser {
    getUserData() {
        return { fullName: "John Doe" }; // Different interface
    }
}

class UserAdapter {
    constructor(thirdPartyUser) {
        this.thirdPartyUser = thirdPartyUser;
    }

    getName() {
        // Adapting to the expected interface
        return this.thirdPartyUser.getUserData().fullName;
    }
}

// Usage
const thirdPartyUser = new ThirdPartyUser();
const userAdapter = new UserAdapter(thirdPartyUser);
console.log(userAdapter.getName()); // John Doe
