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
    let result = 0;
    const data = await getData("https://adventofcode.com/2022/day/6/input");

    data.split("").forEach((char, index) => {
        let code = data.substr(index, 4);

        let double = code.split("").some((v, i, a) => {
            return a.lastIndexOf(v) != i;
        });

        if (result === 0 && !double) {
            console.log(`Characters processed: ${index + 4} Code: ${code}`);
            result++;
        }
    });

    return data;
}

const exec2 = async () => {
    let result = 0;
    let data = await exec();

    data.split("").forEach((char, index) => {
        let code = data.substr(index, 14);

        let double = code.split("").some((v, i, a) => {
            return a.lastIndexOf(v) != i;
        });

        if (result === 0 && !double) {
            console.log(`Characters processed: ${index + 14} Code: ${code}`);
            result++;
        }
    });
}

run(exec2);	