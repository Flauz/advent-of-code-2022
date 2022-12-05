import { input } from "./data.js"

const pairs = input.split("\n");

const sumOfPairs = () => {
    let sum = 0;
    pairs.forEach((pair) => {
        let [firstElf, secondElf] = pair.split(",");
        firstElf = firstElf.split("-");
        secondElf = secondElf.split("-");
        firstElf = firstElf.map((item) => +item);
        secondElf = secondElf.map((item) => +item);
        if (firstElf[0] <= secondElf[0] && firstElf[1] >= secondElf[1]) {
            sum += 1;
        } else if (firstElf[0] >= secondElf[0] && firstElf[1] <= secondElf[1]) {
            sum += 1;
        }
    })
    return sum
}

console.log(sumOfPairs());