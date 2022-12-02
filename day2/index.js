import { input } from "./data.js"

const tabScore = input.split("\n").map(item => item.split(" "));
const [X, Y, Z] = [1, 2, 3];
const [win, lose, draw] = [6, 0, 3];
const resultPart1 = [
    [["A", "X"], draw],
    [["A", "Y"], win],
    [["A", "Z"], lose],
    [["B", "X"], lose],
    [["B", "Y"], draw],
    [["B", "Z"], win],
    [["C", "X"], win],
    [["C", "Y"], lose],
    [["C", "Z"], draw]
];
const resultPart2 = [
    [["A", "X"], lose + Z],
    [["A", "Y"], draw + X],
    [["A", "Z"], win + Y],
    [["B", "X"], lose + X],
    [["B", "Y"], draw + Y],
    [["B", "Z"], win + Z],
    [["C", "X"], lose + Y],
    [["C", "Y"], draw + Z],
    [["C", "Z"], win + X]
]

const getScore = (part1or2) => {
    let score = 0;
    tabScore.forEach((resultRound) => {
        const [elf, myself] = resultRound;
        resultPart1.forEach((result) => {
            if (result[0][0] === elf && result[0][1] === myself) {
                if (part1or2 === 1) {
                    if (myself === "X") {
                        score += result[1] + X;
                    }
                    if (myself === "Y") {
                        score += result[1] + Y;
                    }
                    if (myself === "Z") {
                        score += result[1] + Z;
                    }
                } else {
                    resultPart2.forEach((result) => {
                        if (result[0][0] === elf && result[0][1] === myself) {
                            score += result[1];
                        }
                    })
                }
            }
        })
    })
    return score;
}

console.log(getScore(1));
console.log(getScore(2));