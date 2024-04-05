export class Person {
    // public name: string;
    // private address: string;

    constructor(public name: string, private address: string = 'No Address'){
        // this.name = 'Robert';
        // this.address = 'El mas allá';
    }
}

// export class Hero extends Person {

//     constructor(public alterEgo: string, public age: number, public realName: string){
//         super(realName)
//     }
// }

export class Hero {

    constructor(public alterEgo: string, public age: number, public realName: string, public person: Person){
    }
}

const person = new Person('Tony', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', person);

console.log(ironman);