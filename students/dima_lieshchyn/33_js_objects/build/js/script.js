"use strict";

(function () {
  var car = {
    manufacturer: 'BMW',
    model: 'X5',
    yearOfProd: 2020,
    speedAverage: 50,
    tankVolume: 45,
    fuelAverage100: 15,
    drivers: {
      names: 'Andrey',
      licence: 'Andrey 0'
    },
    carInfo: function carInfo() {
      console.log("Manufacturer:".concat(this.manufacturer, "\nModel: ").concat(this.model, "\nYear of produce: ").concat(this.yearOfProd, "\nAverage speed: ").concat(this.speedAverage, " km/h\nVolume of the tank: ").concat(this.tankVolume, " litres\nFuel average for 100 km: ").concat(this.fuelAverage100, " km/h\nDrivers: ").concat(this.drivers.names));
    },
    showDriver: function showDriver(driverName) {
      var dName = 0;
      var lName = 0;
      var nameRes = '';
      var licenceRes = 0;

      if (typeof driverName === 'string' && driverName !== '') {
        dName = this.drivers.names.indexOf(driverName);
        nameRes = 'Driver: ' + this.drivers.names.slice(dName, dName + driverName.length);
        console.log(nameRes);
        lName = this.drivers.licence.indexOf(driverName);
        licenceRes = this.drivers.licence.slice(lName + driverName.length + 1, lName + driverName.length + 2);
        console.log('Licence: ' + licenceRes);
        return licenceRes;
      }
    },
    addDriver: function addDriver(driverName, driverLicence) {
      if (typeof driverName === 'string' && driverName !== '') {
        this.drivers.names = this.drivers.names + ', ' + driverName;

        if (typeof driverLicence === 'boolean') {
          if (driverLicence) {
            this.drivers.licence = this.drivers.licence + ',' + driverName + ' ' + '1';
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
    calculateTrip: function calculateTrip(driverName) {
      if (typeof driverName === 'string' && driverName !== '') {
        if (this.showDriver()) {} else {
          console.log('Need licence');
        }
      }
    }
  };
  car.carInfo();
  car.addDriver('Kolya', false);
  car.showDriver('Kolya');
  car.carInfo();
  car.calculateTrip('Kolya');
})();