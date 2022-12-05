import { input } from "./data.js"

const rucksacks = input.split("\n");
const priorities = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
    "A": 27,
    "B": 28,
    "C": 29,
    "D": 30,
    "E": 31,
    "F": 32,
    "G": 33,
    "H": 34,
    "I": 35,
    "J": 36,
    "K": 37,
    "L": 38,
    "M": 39,
    "N": 40,
    "O": 41,
    "P": 42,
    "Q": 43,
    "R": 44,
    "S": 45,
    "T": 46,
    "U": 47,
    "V": 48,
    "W": 49,
    "X": 50,
    "Y": 51,
    "Z": 52,
}
let done = false;
let sum = 0;
let index = 0

const sumOfPrioritiesItemsOrBadges = (itemsOrBadges) => {
    sum = 0;
    index = 0;
    for (index; index < rucksacks.length; index++) {
        done = false;
        "badges" === itemsOrBadges ? getSumOfPrioritiesBadges() : getSumOfPrioritiesItems(rucksacks[index]);
    }
    return sum;
}

const getSumOfPrioritiesItems = (rucksack) => {
    const firstCompartiment = rucksack.slice(0, rucksack.length / 2);
    const secondCompartiment = rucksack.slice(rucksack.length / 2, rucksack.length);
    for (let i = 0; i < firstCompartiment.length; i++) {
        if (done === true) {
            break;
        }
        for (let j = 0; j < secondCompartiment.length; j++) {
            if (done === true) {
                break;
            }
            if (firstCompartiment[i] === secondCompartiment[j]) {
                sum += priorities[firstCompartiment[i]];
                done = true;
            }
        }
    }
}

const getSumOfPrioritiesBadges = () => {
    const groupElves = rucksacks.slice(index, index + 3);
    index += 2;
    const firstElf = groupElves[0].split("");
    const secondElf = groupElves[1].split("");
    const thirdElf = groupElves[2].split("");
    for (let j = 0; j < firstElf.length; j++) {
        if (done === true) {
            break;
        }
        for (let k = 0; k < secondElf.length; k++) {
            if (done === true) {
                break;
            }
            for (let l = 0; l < thirdElf.length; l++) {
                if (done === true) {
                    break;
                }
                if (firstElf[j] === secondElf[k] && secondElf[k] === thirdElf[l]) {
                    sum += priorities[firstElf[j]];
                    done = true;
                }
            }
        }
    }
}

console.log(sumOfPrioritiesItemsOrBadges("items"));
console.log(sumOfPrioritiesItemsOrBadges("badges"));