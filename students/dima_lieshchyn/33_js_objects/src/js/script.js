(function () {
    const car = {
        manufacturer: 'BMW',
        model: 'X5',
        yearOfProd: 2020,
        speedAverage: 100,
        tankVolume: 100,
        fuelAverage100: 10,
        drivers: {
            names: 'Andrey',
            licence: 'Andrey 1',
        },
        carInfo() {
            console.log(`Manufacturer:${this.manufacturer}
Model: ${this.model}
Year of produce: ${this.yearOfProd}
Average speed: ${this.speedAverage} km/h
Volume of the tank: ${this.tankVolume} litres
Fuel average for 100 km: ${this.fuelAverage100} km/h
%cDrivers: %c${this.drivers.names}`, 'font-weight:bold; color:red;font-size:14px;', 'color:white')
        },
        //функция вывода информации по водителю по имени
        showDriver(driverName) {
            if (this.isDriver(driverName)) {
                console.log(this.getName(driverName) + '\n'
                    + 'Licence: ' + this.getLicence(driverName));
            }
        },
        addDriver(driverName, driverLicence = false) {
            //проверка на правильность ввода имени водителя
            if (this.isDriver(driverName)) {
                //конкатенация строки, добавление водителя
                this.drivers.names = this.drivers.names + ', ' + driverName;
                //проверка на правильность ввода прав для водителя
                if (this.isLicence(driverLicence)) {
                    //конкатенция если есть права
                    if (driverLicence) {
                        this.drivers.licence = this.drivers.licence + ',' + driverName + ' ' + '1';
                        //конкатенция если нет прав
                    } else {
                        this.drivers.licence = this.drivers.licence + ',' + driverName + ' ' + '0';
                    }
                }
            }
        },
        refueling(fuel) {
            if (typeof fuel === 'number' && fuel > 0) {
                this.tankVolume = this.tankVolume + fuel;
            }
        },
        calculateTrip(distance, driverName) {
            if (this.validateTrip(driverName, distance)) {
                return this.getTripTime(distance);
            }
        },
        isDriver(driverName) {
            return (typeof driverName === 'string' && driverName !== '');
        },
        isDistance(distance) {
            if (typeof distance === 'number' && distance > 0) return true;
            return console.log('Need distance');
        },
        isLicence(licence) {
            return (typeof licence === 'boolean');
        },
        getName(driverName) {
            let dName = 0;
            let nameRes = '';
            dName = this.drivers.names.indexOf(driverName);
            nameRes = 'Driver: ' + this.drivers.names.slice(dName, dName + driverName.length);
            return nameRes;
        },
        getLicence(driverName) {
            let lName = 0;
            let licenceRes = 0;
            lName = this.drivers.licence.indexOf(driverName);
            licenceRes = this.drivers.licence.slice(lName + driverName.length + 1, lName + driverName.length + 2);
            return +licenceRes;
        },
        validateLicence(driverName) {
            return this.getLicence(driverName) ? 1 : console.log('Need licence');
        },
        isMaxDistance(distance) {
            if (distance < (this.tankVolume / this.fuelAverage100) * 100) return true;
            return console.log('Need refueling a car');
        },
        getTripTime(distance) {
            let temp = 0;
            const maxTrip = 4;
            temp = distance / this.speedAverage;
            //проверка и просчет сколько нужно пауз на каждые 4 часа
            if (temp > maxTrip) {
                //цикл на проверку для каждых четырех часов
                for (let i = 1; i < temp; i++) {
                    if (i % 4 == 0) {
                        ++temp;
                    }
                }
                console.log(('Need ' + temp + ' hours'));
                return temp;
            } else {
                //условие если поездка меньше 4 часов
                console.log(('Need ' + temp + ' hours'));
                return temp;
            }
        },
        validateTrip(driverName, distance) {
            return (this.isDriver(driverName) &&
                this.isDistance(distance) &&
                this.isMaxDistance(distance) &&
                this.validateLicence(driverName))
        }
    }

    car.carInfo();
    car.calculateTrip(500, 'Andrey');
    car.showDriver('Andrey')
    car.addDriver('asd', 1)
    car.showDriver('asd')
})();
