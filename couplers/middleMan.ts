class Person {
    department: Department;

    constructor(dpt: Department){
        this.department = dpt;
    }

    getManager(): string {
        return this.department.getManager();
    }
}
 
class Department {
    manager: string;

    constructor(manager: string){
        this.manager = manager;
    }
    getManager() : string{
        return this.manager;
    }
 }

function program () {
    const dept: Department = new Department('George')
    const person: Person = new Person(dept);
    const newPerson = person.getManager();
}