const Employee = require("./employee");


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.type = 'intern'
    }

    getRole() {
        return 'intern';
    }
}

module.exports = Intern;