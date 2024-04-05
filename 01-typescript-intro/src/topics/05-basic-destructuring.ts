interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author:string,
    year:number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 36,
    song: "Duality",
    details: {
        author: "Slipknot",
        year: 2018
    }
}

const { song, songDuration:duration, details } = audioPlayer;
const { author } = details;

// console.log({song, duration, author});

const [,, trunks = 'Not Found'] : string [] = ['Goku', 'Vegeta', 'Trunks'];

console.log({trunks});

export {};