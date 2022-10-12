class SortClass {
    temp: number;
    first: number;
    second: number;

    changePlaces(): void {
        this.temp = this.first;
        this.first = this.second;
        this.second = this.temp;
    }

    constructor(first: number, second: number){
        this.first = first;
        this.second = second;
    }
}

function instantiate(){
    const sortClass: SortClass = new SortClass(1,2);
    sortClass.changePlaces();
    console.log(sortClass.first);
    console.log(sortClass.second)
}