const { getData } = require("../fetch");
const { run } = require("../run");

const horizontalize = (array, interval) => {
    let horizontal = [];

    for (let i = 0; i < 9; i++) {
        let row = [];
        array.forEach(line => {
            let crate = line.slice(i * interval + i, (i + 1) * interval + (i + 1)).replaceAll(" ", "");
            if(crate.match(/\[\w\]/g)) {
                row.unshift(crate);
            }
        });
        horizontal.push(row);
    }

    return horizontal;
}

const exec = async () => {
    let result = "";
    const data = await getData("https://adventofcode.com/2022/day/5/input");
    const actions = data.split("\n").slice(10);
    actions.pop();
    
    const stack = horizontalize(data.split("\n\n")[0].split("\n"), 3);
    
    actions.forEach(action => {
        let [count, from, to] = [...action.matchAll(/\d+/g)].map(Number);
        for (let i = 0; i < count; i++) {
            let crate = stack[from - 1].pop();
            stack[to - 1].push(crate);
        }
    });

    stack.forEach(row => {
        result += row.pop() + " "; 
    });

    console.log(result + "\n 1   2   3   4   5   6   7   8   9\n");

    return data;
}

const exec2 = async () => {
    let result = "";
    let data = await exec();
    const actions = data.split("\n").slice(10);
    actions.pop();

    const stack = horizontalize(data.split("\n\n")[0].split("\n"), 3);
    
    actions.forEach(action => {
        let [count, from, to] = [...action.matchAll(/\d+/g)].map(Number);
        let crates = stack[from - 1].splice(stack[from - 1].length - count);
        stack[to - 1] = stack[to - 1].concat(crates);
    });

    stack.forEach(row => {
        result += row.pop() + " "; 
    });

    console.log(result + "\n 1   2   3   4   5   6   7   8   9\n");
}

run(exec2);	