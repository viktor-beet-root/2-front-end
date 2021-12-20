// const a = {
//     d: 1,
//     f: 2,
//     sum,
// };

// //delete a.d;

// function sum() {
//     return this.d + this.f;
// }

// console.log(a);

// console.log(sum.bind(a)());
// console.log(sum.apply(a));
// console.log(sum.call(a));

const arr = [10, 2, 5, 8, 9];
//const arr1 = Array(100);

arr[arr.length - 1] = 99;
arr[0] = 234;

console.log(arr[arr.length - 1], arr);

//arr.length = 0;

//arr[55] = 6;

arr.push(3);

console.log(arr);
const arr1 = [];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i);
    arr1.push(i);
}

console.log(arr1.pop(), 'pop');

console.log(arr1.shift(), 'shift');

console.log(arr1.unshift(55), 'unshift');

console.log(arr1);

const arr3 = [1, 2, 3, 4, 56];

//delete arr3[2];

arr3.splice(1, 0, 555);
arr3.splice(0, 1, 777, 88, 894);

s(arr3);

function s(data) {
    console.log(data);
}
