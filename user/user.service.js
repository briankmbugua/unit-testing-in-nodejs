const UserRepository = require("./user.repository");

class UserService {
    constructor(userRepository) {
        this.UserRepository = userRepository;
    }
    async create(name, email) {
        return this.userRepository.create(name, email);
    }
    getUser(id) {
        return this.UserRepository.getUser(id);
    }
}

module.exports = UserService;