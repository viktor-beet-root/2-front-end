// Не изменяемые примитивные типы
const two = 2;
console.log(2, 2.1, -1, 0, -0, NaN, Infinity, Number.MAX_SAFE_INTEGER);
console.log(0 / 0, Infinity / Infinity, +"df3", Math.sqrt(-1));
console.log(NaN !== NaN, isNaN(NaN), isNaN("dsdfd"));

//const typeBigInt = 2n;
let s = 'asdfdsf';
console.log(s[1])

console.log("df\nsaf 2\"'sdgf' \
 sdfg", 'as"dg"fsdfg dfg', `sd


 "g"f's
 'dfg ${two}`);

let f = "sdfsdfdf";
f = f + 'sdf';
console.log("sdfsdfdf".length);

let d; // undefined
console.log(typeof d, d);

let typeNull = null;
console.log(typeof typeNull, typeNull);

let typeBool = true;
typeBool = false;

const typeSymbol = Symbol('sdf');
const typeSymbol1 = Symbol('sdf');
console.log(typeSymbol === typeSymbol1);

//изменяемые объектные типы
const arr = [1, 543, 6567, 868, 4];

const obj = {
    3: 'sdf',
    adf: 'sdf',
    1: 22
};
arr[0] = 2;
console.log(typeof arr, arr, obj, window, document);

function fe() {

}

console.log(String(false), Number('33'), Boolean([]));

console.log((5).toString(), two.toString(), (15).toString(16));

console.log((15.5844755757).toFixed(2) + '$');

console.log(parseInt("15.5 px"), parseFloat("15.5 px"), parseFloat("$15.5 px"));

console.log('2' + 2);

console.log(false, !!0, !!-0, !!"", !!NaN, !!undefined, !!null);

console.log(2 * "2");

console.log(2 == "2", "as" === "as");
// < > <= >= != !==

let i = 0;

console.log(i++);
console.log(i);

console.log(++i);
console.log(i);

console.log(2 ** 2);

console.log((2 && 0 && 8) || 56, NaN || false);

let h = 0;

//let a = h || 10;
let a = h ?? 10;

console.log(a);

