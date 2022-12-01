import { input } from "./data.js"

const getMaxCalories = (str) => {
    let formattedStr = str.split("\n\n").map(item => item.split("\n"));
    formattedStr = formattedStr.map((elf) => elf.map((item) => +item));
    formattedStr = formattedStr.map((elf) => elf.reduce((acc, curr) => acc + curr));
    return Math.max(...formattedStr);
}

console.log(getMaxCalories(input));