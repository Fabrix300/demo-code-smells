class Person {
    id: number;
    name: string;
    typeOfUser: number;

    address?: string;
    zipCode?: number;
    country?: string;
    state?: string;
}

function example(){
    const userAdmin = 1;
    const userSubscriber = 2;
    const userModerator = 3;

    const newPerson: Person = {
        id: 1,
        name: '',
        typeOfUser: userAdmin
    };

    const cliente: [][] = [];
    cliente[0]['id'] = 1;
    cliente[0]['name'] = 'Jorge';
}