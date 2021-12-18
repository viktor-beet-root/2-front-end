"use strict";

var obj = {
  user: 'Viktor',
  age: 15,
  'sdjfj sjdhf': 123,
  skillList: {
    css: 5
  }
};
var d = 2;
console.log(JSON.parse(JSON.stringify(obj)));
var obj1 = {};
console.log(Object.assign({
  a: 5
}, obj, {
  b: 3
}));
obj1.www = 'google.com';
console.log(obj1);
console.log(obj);
obj.age = obj.age + 1;
obj.address = 'Rivne, dsfds'; // console.log(obj.user, obj['age'], obj['sdjfj sjdhf']);
// console.log(obj.asdfdsf);
// console.table(obj);
// console.dir(console);

for (var key in obj) {
  console.log("".concat(key, " => ").concat(obj[key]));
}

var car = {
  model: 'BMW',
  vladelec: 'Viktor',
  driver: 'Kolya',
  isRun: false,
  // setRun: function () {
  //     this.isRun = !this.isRun;
  // },
  setRun: function setRun() {
    this.isRun = !this.isRun;
    return this;
  },
  getInfoCar: function getInfoCar() {
    var isRunMessage = this.isRun ? 'run' : 'not run';
    console.log("Model: ".concat(this.model, ", \n        Vladelec: ").concat(this.vladelec, ",\n        Driver: ").concat(this.driver, ",\n        Is run: ").concat(isRunMessage));
    return this;
  },
  getDriver: function getDriver() {
    console.log(this.driver);
    return this;
  }
};
console.log(car.isRun);
car.setRun();
console.log(car.isRun);
console.log(car.getInfoCar().getDriver().setRun());
var car1 = {
  model: 'BMW',
  vladelec: 'Viktor',
  driver: 'Kolya',
  isRun: false,
  setRun: setRun,
  getInfoCar: getInfoCar,
  getDriver: getDriver
};
var car2 = {
  model: 'Lexus',
  vladelec: 'Vasya',
  driver: 'Petya',
  isRun: false,
  setRun: setRun,
  getInfoCar: getInfoCar,
  getDriver: getDriver
};
car2.setRun();
car2.getInfoCar();
car1.setRun();
car1.getInfoCar();
console.log(setRun);

function setRun() {
  this.isRun = !this.isRun;
  return this;
}

function getInfoCar() {
  var isRunMessage = this.isRun ? 'run' : 'not run';
  console.log("Model: ".concat(this.model, ", \n    Vladelec: ").concat(this.vladelec, ",\n    Driver: ").concat(this.driver, ",\n    Is run: ").concat(isRunMessage));
  return this;
}

function getDriver(a) {
  console.log(this.driver, a);
  return this;
}

var car3 = {
  model: 'Mersedes',
  vladelec: 'Ron',
  driver: 'Ron',
  isRun: false
};
getDriver.call(car3, 1);
getDriver.apply(car3, ['asdf']);
var ddd = getDriver.bind(car3);
console.log('==========');
ddd();