const { getData } = require("../fetch");
const { run } = require("../run");

String.prototype.removeDuplicate = function() {
    const arr = this.split("");
    const arr2 = [];
    
    arr.forEach((el, i) => {
     if (!arr2.includes(el)) {
        arr2.push(el);
       }
     });
     return arr2.join("").replace(",", "").replace("", " ");
}

const alphabetPosition = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let code = text.charCodeAt(i);
      if (code > 64 && code < 91) result += (code - 38) + " ";
      if (code > 96 && code < 123) result += (code - 96) + " "; 
    }  
    return result.slice(0, result.length - 1);
}

const exec = async () => {
    const data = await getData("https://adventofcode.com/2022/day/3/input");
    const lines = data.split("\n");
    lines.pop();

    let sum = 0;

    lines.forEach(line => {
        let [left, right] = [line.slice(0, line.length / 2).removeDuplicate(), line.slice(line.length / 2)];

        left.removeDuplicate().split("").forEach((char) => {
            let has = right.indexOf(char);
            sum += has !== -1 ? Number(alphabetPosition(char)) : 0;
        });
    });

    console.log("Compartments checked: " + sum);
    return lines;
}

const exec2 = async () => {
    const lines = await exec();

    let sum = 0;
    
    for (let i = 0; i < lines.length; i += 3) {
        lines[i].removeDuplicate().split("").forEach((char) => {
            if (
                lines[i+1].indexOf(char) !== -1 &&
                lines[i+2].indexOf(char) !== -1
            ) {
                sum += Number(alphabetPosition(char));
            }
        });
    }

    console.log("Team priorities checked: " + sum);
}

run(exec2);	