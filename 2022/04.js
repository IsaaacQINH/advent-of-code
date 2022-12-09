const { getData } = require("./fetch");
const { run } = require("./run");

const exec = async () => {
    const data = await getData("https://adventofcode.com/2022/day/4/input");
    const lines = data.split("\n");
    lines.pop();
    
    let contained = 0;

    lines.forEach(line => {
        const [first, second] = line.split(",");
        const [fMin, fMax] = first.split("-").map(Number);
        const [sMin, sMax] = second.split("-").map(Number);

        if ((fMin >= sMin && fMax <= sMax) || (sMin >= fMin && sMax <= fMax)) {
            contained++;
        }

        
    });

    console.log("One fully contains the other: " + contained);

    return lines;
}

const exec2 = async () => {
    const lines = await exec();

    let overlap = 0;

    lines.forEach(line => {
        const [first, second] = line.split(",");
        const [fMin, fMax] = first.split("-").map(Number);
        const [sMin, sMax] = second.split("-").map(Number);

        if (!(fMin > sMax) && !(sMin > fMax) && !(fMax < sMin) && !(sMax < fMin)) {
            overlap++;
        }
    });

    console.log("Assignments overlap: " + overlap);
}

run(exec2);	