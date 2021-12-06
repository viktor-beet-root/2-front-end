"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Не изменяемые примитивные типы
var two = 2;
console.log(2, 2.1, -1, 0, -0, NaN, Infinity, Number.MAX_SAFE_INTEGER);
console.log(0 / 0, Infinity / Infinity, +"df3", Math.sqrt(-1));
console.log(NaN !== NaN, isNaN(NaN), isNaN("dsdfd")); //const typeBigInt = 2n;

var s = 'asdfdsf';
console.log(s[1]);
console.log("df\nsaf 2\"'sdgf' \
 sdfg", 'as"dg"fsdfg dfg', "sd\n\n\n \"g\"f's\n 'dfg ".concat(two));
var f = "sdfsdfdf";
f = f + 'sdf';
console.log("sdfsdfdf".length);
var d; // undefined

console.log(_typeof(d), d);
var typeNull = null;
console.log(_typeof(typeNull), typeNull);
var typeBool = true;
typeBool = false;
var typeSymbol = Symbol('sdf');
var typeSymbol1 = Symbol('sdf');
console.log(typeSymbol === typeSymbol1); //изменяемые объектные типы

var arr = [1, 543, 6567, 868, 4];
var obj = {
  3: 'sdf',
  adf: 'sdf',
  1: 22
};
arr[0] = 2;
console.log(_typeof(arr), arr, obj, window, document);

function fe() {}

console.log(String(false), Number('33'), Boolean([]));
console.log(5 .toString(), two.toString(), 15 .toString(16));
console.log(15.5844755757.toFixed(2) + '$');
console.log(parseInt("15.5 px"), parseFloat("15.5 px"), parseFloat("$15.5 px"));
console.log('2' + 2);
console.log(false, !!0, !!-0, !!"", !!NaN, !!undefined, !!null);
console.log(2 * "2");
console.log(2 == "2", "as" === "as"); // < > <= >= != !==

var i = 0;
console.log(i++);
console.log(i);
console.log(++i);
console.log(i);
console.log(Math.pow(2, 2));
console.log(2 && 0 && 8 || 56, NaN || false);
var h = 0; //let a = h || 10;

var a = h !== null && h !== void 0 ? h : 10;
console.log(a);