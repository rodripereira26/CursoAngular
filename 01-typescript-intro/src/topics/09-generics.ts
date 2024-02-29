export function whatsMyType<T>(argument: T): T {
    return argument;
}

const stringg = whatsMyType("hola mundo");

const intt = whatsMyType(100);

console.log(stringg);