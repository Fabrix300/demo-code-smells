class Engineer {
    name: string;
    task: Task;
}

class Task {
    name:string;
}

function seedInfo() {
    // Así por cada uno
    const civilEngineerTask: Task = { name: 'build' };
    const civilEngineer: Engineer = { name: 'civil', task: civilEngineerTask };
}