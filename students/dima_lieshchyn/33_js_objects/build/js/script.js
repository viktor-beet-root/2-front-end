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
      //воспомагательные переменные
      var dName = 0;
      var lName = 0;
      var nameRes = '';
      var licenceRes = 0; //проверка на правильность ввода имени водителя

      if (typeof driverName === 'string' && driverName !== '') {
        //запись индекса начала имени в строке имен
        dName = this.drivers.names.indexOf(driverName); //итоговая запись имени путём вырезания из строки

        nameRes = 'Driver: ' + this.drivers.names.slice(dName, dName + driverName.length); //запись индекса начала лицензии прав в строке licence

        lName = this.drivers.licence.indexOf(driverName); //итоговая запись лицензии на вождение путём вырезания из строки

        licenceRes = 'Licence: ' + this.drivers.licence.slice(lName + driverName.length + 1, lName + driverName.length + 2); //вывод информации

        console.log(nameRes + '\n' + licenceRes); //возврат для дальнешего использования

        return licenceRes;
      }
    },
    addDriver: function addDriver(driverName) {
      var driverLicence = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      //проверка на правильность ввода имени водителя
      if (typeof driverName === 'string' && driverName !== '') {
        //конкатенация строки, добавление водителя
        this.drivers.names = this.drivers.names + ', ' + driverName; //проверка на правильность ввода прав для водителя

        if (typeof driverLicence === 'boolean') {
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
      //переменная для записи результата
      var hoursTrip = 0; //константа значения максимальной безпрерывной поездки

      var maxTrip = 4; //константа максимальной дистанции на полном баке

      var maxTripKm = this.tankVolume / this.fuelAverage100 * 100; //проверка на правильность ввода имени водителя

      if (typeof driverName === 'string' && driverName !== '') {
        //если у водителя права
        if (this.showDriver(driverName)) {
          //проверка на правильность ввода дистанции
          if (typeof distance === 'number' && distance > 0) {
            //если дистанция меньше чем дистанция максимальной поездки на полном баке
            if (distance < maxTripKm) {
              //просчет колличества часов на поездку
              hoursTrip = distance / this.speedAverage; //проверка и просчет сколько нужно пауз на каждые 4 часа

              if (hoursTrip > maxTrip) {
                //цикл на проверку для каждых четырех часов
                for (var i = 1; i < hoursTrip; i++) {
                  if (i % 4 == 0) {
                    ++hoursTrip;
                  }
                }

                console.log('Need ' + hoursTrip + ' hours');
                return hoursTrip;
              } else {
                //условие если поездка меньше 4 часов
                console.log('Need ' + hoursTrip + ' hours');
                return hoursTrip;
              }
            } else {
              //ошибка если нехватит топлива на поездку
              console.log('Need refueling a car');
            }
          } else {
            //ошибка неправильный ввод дистанции
            console.log('Need distance');
          }
        } else {
          //ошибка, у водителя нет прав
          console.log('Need licence');
        }
      }
    }
  };
  car.carInfo();
  car.calculateTrip(800, 'Andrey');
})();