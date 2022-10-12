class User {
    id: number;
    name: string;
    money: number;
    numberOfAccounts: number;

    constructor (
        id: number,
        name: string,
        money: number,
        numberOfAccounts: number
    ){
        this.id = id;
        this.name = name;
        this.money = money;
        this.numberOfAccounts = numberOfAccounts;
    }
}

class Account {
    id: number;
    money: number;

    constructor(id: number, money: number){
        this.id = id;
        this.money = money;
    }
}

const newUser: User = {
    id: 10,
    name: 'George',
    money: 10000,
    numberOfAccounts: 5
}

function manageUserMoney(user: User){
    let arrayOfAccounts: number[] = [];
    for (let i = 0; i < user.numberOfAccounts; i++) {
        arrayOfAccounts.push(0);
    }
    let arrayOfAccountsClasses: Account[] = [];
    for (let i = 0; i < user.numberOfAccounts; i++) {
        arrayOfAccountsClasses.push(new Account(i, 0));
    }
    switch (user.name) {
        case 'Charles':
            user.money = 0;
            break;
        case 'George':
            user.money = 100;
            break;
        default:
            user.money = 200;
            break;
    }
}