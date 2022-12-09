const { run } = require("../run");
const { getData } = require("../fetch");

const exec = async () => {
    const data = await getData("https://adventofcode.com/2022/day/1/input");
    const lines = data.split('\n');

    let elves = [];
    let sum = 0;
    let counter = 0;

    lines.forEach(line => {
        if (line !== "") {
            sum += Number(line);
        } else {
            elves[counter] = sum;
            sum = 0;
            counter++;
        }
    });

    console.log(`Max calories: ${Math.max(...elves)}`);
    return elves;
}

const exec2 = async () => {
    const elves = await exec();

    let max = 0;
    let sumThree = 0;

    for (let index = 0; index < 3; index++) {
        max = Math.max(...elves);
        sumThree += max;
        elves.splice(elves.indexOf(max), 1)
    }

    console.log(`Total calories of max 3: ${sumThree}`);
}

run(exec2);	