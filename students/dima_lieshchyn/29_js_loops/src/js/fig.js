const numFigure = +prompt("Введите число",);
const tempSpace = "*";
const tempSymbol = "#"
let temp = "";
let result = "";

for (let i = 0; i < numFigure; i++) {
    temp = temp + tempSymbol;
    result = result + '\n' + temp;
}
// console.log(result);

let temp1 = "";
let temp2 = numFigure;
let temp3 = numFigure;
for (let k = numFigure; k > 0; k--) {
    for (let l = temp2; l > 0; l--) {
        temp1 = temp1 + tempSpace;
    }
    for (let i = temp3; i >= 0; i++) {
        temp1 = temp1 + tempSymbol;
        // result = result + '\n' + temp;
    }
    temp1 = temp1 + '\n'
    temp2--;
    temp3++;
}
console.log(temp1);

