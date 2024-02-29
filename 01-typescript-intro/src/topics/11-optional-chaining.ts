export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Rodrigo"
}

const passenger2: Passenger = {
    name: "Rodrigo",
    children: ["holaa"]
}