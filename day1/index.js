import { input } from "./data.js"

const getMaxCalories = (str) => {
    let formattedStr = str.split("\n\n").map(item => item.split("\n"));
    formattedStr = formattedStr.map((elf) => elf.map((item) => +item));
    formattedStr = formattedStr.map((elf) => elf.reduce((acc, curr) => acc + curr));
    return Math.max(...formattedStr);
}

const getThirdElves = (str) => {
    let formattedStr = str.split("\n\n").map(item => item.split("\n"));
    formattedStr = formattedStr.map((elf) => elf.map((item) => +item));
    formattedStr = formattedStr.map((elf) => elf.reduce((acc, curr) => acc + curr));
    formattedStr = formattedStr.sort((a, b) => b - a);
    return (formattedStr[0] + formattedStr[1] + formattedStr[2]);
}

console.log(getThirdElves(input));