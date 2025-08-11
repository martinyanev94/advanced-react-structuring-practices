class UserModel {
    constructor() {
        this.users = [];
    }

    addUser(name) {
        this.users.push({ name });
    }

    getUsers() {
        return this.users;
    }
}

class UserViewModel {
    constructor(model) {
        this.model = model;
        this.users = [];
        this.loadUsers();
    }

    loadUsers() {
        this.users = this.model.getUsers();
    }

    addUser(name) {
        this.model.addUser(name);
        this.loadUsers();
    }
}

class UserView {
    constructor(viewModel) {
        this.viewModel = viewModel;
    }

    render() {
        const users = this.viewModel.users;
        console.log("User List:");
        users.forEach(user => console.log(`- ${user.name}`));
    }

    onUserInput(name) {
        this.viewModel.addUser(name);
        this.render();
    }
}

// Usage
const model = new UserModel();
const viewModel = new UserViewModel(model);
const view = new UserView(viewModel);

view.onUserInput("Alice");
view.onUserInput("Bob");
