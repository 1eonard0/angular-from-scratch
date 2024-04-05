const skills: string [] = ['Bash', 'Counter', 'Healing', 'true', '123'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: ' Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = "Resistencia";

console.table(strider);

export {};