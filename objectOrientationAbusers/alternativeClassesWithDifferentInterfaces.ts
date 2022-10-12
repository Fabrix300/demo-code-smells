class Car {
    id: number;
    vehicleCode: string;

    joinIdV (): string {
        return this.id + "" + this.vehicleCode
    }
}

class Bike {
    id: number;
    vehicleCode: string;

    joinIV ():string {
        return this.id + "" + this.vehicleCode
    }
}