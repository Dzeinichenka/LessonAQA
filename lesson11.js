// Домашние электроприборы. Определить иерархию электроприборов.
// Включить некоторые в розетку. Посчитать потребляемую мощность.
// Провести сортировку приборов в квартире на основе одного из
// параметров. Найти прибор в квартире, соответствующий заданному
// диапазону параметров.

class House {
    constructor() {
      this.devices = []  
    }

    addDevice(device) {
        this.devices.push(device);
    }

    getTotalSumPower() {
        return this.devices.map(obj => obj.power)
            .reduce((a, b) => a + b);

    }

    getSortPower() {
        return this.devices.sort((a, b) => b.power - a.power);
    }

    filterDeviceEnabled() {
        return this.devices.filter(name => {
            if(name.enabled) {
                return name;
            }
        })
    }
}

class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}

class stateOfDevice extends Device {
    constructor(name, power, enabled) {
        super(name, power);
        this.enabled = enabled;
    }
}

const house = new House();
house.addDevice(new Device('computer', 450));
house.addDevice(new Device('tv', 200));
house.addDevice(new Device('blender', 145));
house.addDevice(new Device('toaster', 20));

house.addDevice(new stateOfDevice('fridge', 110, 'yes'));
house.addDevice(new stateOfDevice('teapot', 36));
house.addDevice(new stateOfDevice('freezer', 207));
house.addDevice(new stateOfDevice('coffeeMachine', 201, 'yes'));

console.log(house);
console.log(house.getTotalSumPower());
console.log(house.getSortPower());
console.log(house.filterDeviceEnabled());



