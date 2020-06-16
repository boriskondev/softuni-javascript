// Works fine, but 50/100 in Judge.

class Company {
    constructor() {
        this.departments = [];
    }

    _validate(data) {
        if (data === "" || data === undefined || data === null) {
            throw new Error("Invalid input!");
        }
    }

    addEmployee(username, salary, position, department) {
        this._validate(username);
        this._validate(salary);
        this._validate(position);
        this._validate(department);

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].push({
                username: username,
                salary: salary,
                position: position
            })
            return `New employee is hired. Name: ${username}. Position: ${position}`

        } else {
            this.departments[department] = [];
            this.departments[department].push({
                username: username,
                salary: salary,
                position: position
            })
            return `New employee is hired. Name: ${username}. Position: ${position}`
        }
    }

    bestDepartment() {
        let bestDepartment = ""
        let bestAverageSalary = 0;
        let currentSalary = 0;
        let employeesCount = 0;
        for (let [department, employees] of Object.entries(this.departments)) {
            let currentDepartment = department;
            for (let [employee, property] of Object.entries(employees)) {
                currentSalary += property.salary
                employeesCount ++
            }
            let currentAverageSalary = currentSalary / employeesCount;
            if (currentAverageSalary > bestAverageSalary) {
                bestAverageSalary = currentAverageSalary;
                bestDepartment = currentDepartment;
            }
            currentSalary = 0;
            employeesCount = 0;
        }
        let result = []
        result.push(`Best Department is: ${bestDepartment}`);
        result.push(`Average salary: ${bestAverageSalary.toFixed(2)}`);
        let sortedDepartment = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
        sortedDepartment.forEach(x => result.push(`${x.username} ${x.salary} ${x.position}`));
        return result.join("\n")
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
