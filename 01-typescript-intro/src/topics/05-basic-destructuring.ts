interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "tuvieja",
        year: 2024
    }
}


const { song, details:songDetails } = audioPlayer;
const { author } = songDetails;

const dbz: string[] = ["kokun", "vejita", "trunk"];



console.log("Song: ", dbz.find((c: string) => c === "trunk") || "nada");
export {};