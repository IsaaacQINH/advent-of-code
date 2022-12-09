const { getData } = require("./fetch");
const { run } = require("./run");

const RULES = {
    x: {
        a: 4,
        b: 1,
        c: 7
    },
    y: {
        a: 8,
        b: 5,
        c: 2
    },
    z: {
        a: 3,
        b: 9,
        c: 6
    }
}

const STRATEGY = {
    a: {
        x: 3,
        y: 4,
        z: 8
    },
    b: {
        x: 1,
        y: 5,
        z: 9
    },
    c: {
        x: 2,
        y: 6,
        z: 7
    }
}

const exec = async () => {
    let data = await getData("https://adventofcode.com/2022/day/2/input");
    let score = 0;
    
    const lines = data.toLowerCase().split('\n');
    lines.pop();
    
    lines.forEach(line => {
        let round = line.split(" ");
        score += RULES[round[1]][round[0]];
    });

    console.log("Your tournament score is: " + score);
    return lines;
}

const exec2 = async () => {
    const lines = await exec();
    let score = 0;

    lines.forEach(line => {
        let round = line.split(" ");
        score += STRATEGY[round[0]][round[1]];
    });

    console.log("With given strategy your score is: " + score);
}

run(exec2);	