"use strict";

(function () {
  var car = {
    manufacturer: 'BMW',
    model: 'X5',
    yearOfProd: 2020,
    speedAverage: 100,
    tankVolume: 100,
    fuelAverage100: 10,
    drivers: {
      names: 'Andrey',
      licence: 'Andrey 1'
    },
    carInfo: function carInfo() {
      console.log("Manufacturer:".concat(this.manufacturer, "\nModel: ").concat(this.model, "\nYear of produce: ").concat(this.yearOfProd, "\nAverage speed: ").concat(this.speedAverage, " km/h\nVolume of the tank: ").concat(this.tankVolume, " litres\nFuel average for 100 km: ").concat(this.fuelAverage100, " km/h\n%cDrivers: %c").concat(this.drivers.names), 'font-weight:bold; color:red;font-size:14px;', 'color:white');
    },
    //функция вывода информации по водителю по имени
    showDriver: function showDriver(driverName) {
      if (this.isDriver(driverName)) {
        console.log(this.getName(driverName) + '\n' + 'Licence: ' + this.getLicence(driverName));
      }
    },
    addDriver: function addDriver(driverName) {
      var driverLicence = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      //проверка на правильность ввода имени водителя
      if (this.isDriver(driverName)) {
        //конкатенация строки, добавление водителя
        this.drivers.names = this.drivers.names + ', ' + driverName; //проверка на правильность ввода прав для водителя

        if (this.isLicence(driverLicence)) {
          //конкатенция если есть права
          if (driverLicence) {
            this.drivers.licence = this.drivers.licence + ',' + driverName + ' ' + '1'; //конкатенция если нет прав
          } else {
            this.drivers.licence = this.drivers.licence + ',' + driverName + ' ' + '0';
          }
        }
      }
    },
    refueling: function refueling(fuel) {
      if (typeof fuel === 'number' && fuel > 0) {
        this.tankVolume = this.tankVolume + fuel;
      }
    },
    calculateTrip: function calculateTrip(distance, driverName) {
      if (this.validateTrip(driverName, distance)) {
        return this.getTripTime(distance);
      }
    },
    isDriver: function isDriver(driverName) {
      return typeof driverName === 'string' && driverName !== '';
    },
    isDistance: function isDistance(distance) {
      if (typeof distance === 'number' && distance > 0) return true;
      return console.log('Need distance');
    },
    isLicence: function isLicence(licence) {
      return typeof licence === 'boolean';
    },
    getName: function getName(driverName) {
      var dName = 0;
      var nameRes = '';
      dName = this.drivers.names.indexOf(driverName);
      nameRes = 'Driver: ' + this.drivers.names.slice(dName, dName + driverName.length);
      return nameRes;
    },
    getLicence: function getLicence(driverName) {
      var lName = 0;
      var licenceRes = 0;
      lName = this.drivers.licence.indexOf(driverName);
      licenceRes = this.drivers.licence.slice(lName + driverName.length + 1, lName + driverName.length + 2);
      return +licenceRes;
    },
    validateLicence: function validateLicence(driverName) {
      return this.getLicence(driverName) ? 1 : console.log('Need licence');
    },
    isMaxDistance: function isMaxDistance(distance) {
      if (distance < this.tankVolume / this.fuelAverage100 * 100) return true;
      return console.log('Need refueling a car');
    },
    getTripTime: function getTripTime(distance) {
      var temp = 0;
      var maxTrip = 4;
      temp = distance / this.speedAverage; //проверка и просчет сколько нужно пауз на каждые 4 часа

      if (temp > maxTrip) {
        //цикл на проверку для каждых четырех часов
        for (var i = 1; i < temp; i++) {
          if (i % 4 == 0) {
            ++temp;
          }
        }

        console.log('Need ' + temp + ' hours');
        return temp;
      } else {
        //условие если поездка меньше 4 часов
        console.log('Need ' + temp + ' hours');
        return temp;
      }
    },
    validateTrip: function validateTrip(driverName, distance) {
      return this.isDriver(driverName) && this.isDistance(distance) && this.isMaxDistance(distance) && this.validateLicence(driverName);
    }
  };
  car.carInfo();
  car.calculateTrip(500, 'Andrey');
  car.showDriver('Andrey');
  car.addDriver('asd', 1);
  car.showDriver('asd');
})();