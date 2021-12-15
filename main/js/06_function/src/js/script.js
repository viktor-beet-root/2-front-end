function foo(message) {
    console.log(message);
}

function bar(func) {
    console.log(func);

    if (typeof func === 'function') return func('asdf sf asdfasdfsdf dsf');
}

bar(foo);

let a = 1;

function test() {
    let b = 0;
    return function (text) {
        let rez = text !== undefined ? text + ': ' + ++b : ++b;

        return rez;
    }
}


const d = test();
const b = test();
const ff = test();

console.log(ff('sdfsdf'));
console.log(ff());

console.log('==========');
console.log(b());
console.log(b());
console.log(b());

console.log('==========');
console.log(d());
console.log(d('sdgfsdf'));
console.log(d());
console.log(d());
console.log(d());
console.log(d());



function userName(userNameText) {

    return function (text) {
        return text + ' ' + userNameText
    }
}

const ddd = userName('Viktor')
const ddd1 = userName('Viktsdfdfs')
const ddd4 = userName('sdfsdfsdf')

console.log(ddd('Privet'))
console.log(ddd('Poka'))
console.log(ddd1('Hi'))
console.log(ddd1('Privet'))
console.log(ddd4('Privet'))
console.log(ddd4('Privet'))

function func(n) {
    if (n === 1) return n;
    return n * func(n - 1);
}

console.log(func(5));
