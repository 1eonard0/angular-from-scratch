function addNumbers(a:number, b:number):number {
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

const multiply = (firstNumber: number, secondNumber?: number, base: number = 2) => {
    return firstNumber * base;
}

// const result = addNumbers(1, 2);
// const result2 = addNumbersArrow(2, 3);
// const multiplyResult = multiply(5);

// console.log({result, result2, multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp: function (): void {
        console.log(`Puntos de vida ${this.hp}`);
    }
};

healCharacter(strider, 1000);

strider.showHp();

export {};