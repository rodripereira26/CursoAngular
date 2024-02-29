export class Persona {

    constructor(
        public name: string,
        public address: string = "asdas"
    ) {
    }
}

/* export class Hero extends Persona {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, "xd")
    }
} */

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Persona
    ) {

    }
}

const person = new Persona("Tony Stark", "New York");
const p = new Hero("Ironman", 45, "Tony", person);

console.log(p);