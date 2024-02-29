function addNumbers(a: number, b: number) {
    return a + b
}

const addNumbersA = (a: number, b: number) => a + b

const result: number = addNumbers(5,5);

interface Character{
    name: string;
    hp: number;
    showHp: () => void
}

console.log(result + addNumbersA(1,3));

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Puntos: ${this.hp}`);
    }

}

strider.showHp();
healCharacter(strider, 20);
strider.showHp();