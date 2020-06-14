class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        this.departments.push({
            name: department,
            employees: []
        })

        this.departments
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
console.log(c.departments.employees)
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical desiner", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());
