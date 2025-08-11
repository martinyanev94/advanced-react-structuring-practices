const AuthMixin = {
  authenticate() {
    console.log("Authenticating user...");
  },
  logout() {
    console.log("User logged out.");
  }
};
class AdminUser {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(AdminUser.prototype, AuthMixin);

class RegularUser {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(RegularUser.prototype, AuthMixin);

const admin = new AdminUser("Eve");
const regular = new RegularUser("Frank");

admin.authenticate(); // Outputs: Authenticating user...
regular.logout(); // Outputs: User logged out.
