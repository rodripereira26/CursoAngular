function classDecorator(constructor: any) {
    return class extends constructor {
        newProperty = "New Property";
        hello = "override";
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = "AAA12345";

    print() {
        console.log("HOLAAAA");
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);