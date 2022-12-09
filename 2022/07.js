const { getData } = require("./fetch");
const { run } = require("./run");

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
    let cwd = "~";
    const data = await getData("https://adventofcode.com/2022/day/7/input");

    const commands = [...data.matchAll(/\$ cd.*/g)];

    commands.forEach(cmd => {
        let args = cmd[0].split(" ");

        if (args[1] === "cd") {
            if (args[2] === "..") {
                cwd = cwd.slice(0, cwd.lastIndexOf("/"));
            } else if (args[2] !== "/"){
                cwd += "/" + args[2];
            }
        }

        console.log(cwd);
    })

    return data;
}

const exec2 = async () => {
    let result = 0;
    let data = await exec();
}

run(exec2);	