import { input } from "./data.js"

const pairs = input.split("\n");

const sumOfPairsFullIncludeOrOverlap = (type) => {
    let sum = 0;
    pairs.forEach((pair) => {
        let [firstElf, secondElf] = pair.split(",");
        firstElf = firstElf.split("-").map((item) => +item);
        secondElf = secondElf.split("-").map((item) => +item);
        if (firstElf[0] <= secondElf[0] && firstElf[1] >= secondElf[1]) {
            sum += 1;
        } else if (firstElf[0] >= secondElf[0] && firstElf[1] <= secondElf[1]) {
            sum += 1;
        } else if (2 === type) {
            if (firstElf[0] <= secondElf[0] && secondElf[1] >= secondElf[0]) {
                sum += 1;
            } else if (firstElf[0] >= secondElf[1] && secondElf[1] <= secondElf[1]) {
                sum += 1;
            }
        }
    })
    return sum
}

console.log(sumOfPairsFullIncludeOrOverlap(1));
console.log(sumOfPairsFullIncludeOrOverlap(2));