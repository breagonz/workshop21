// defines constructor 'Car'. creates a new object with the properties: make, model, and year.

class car {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

// Add a method called getDescription to the Car prototype
//  return a string containing information about the car.

    getDescription(){
        return this.make + ' ' + this.model + ' ' + this.year;
    }
}

// Define ElectricCar function as a subclass of Car. 
// Include additional property called range that represents the range of the electric car in miles.

class electricCar extends car {
    constructor (make, model, year, range){
        super (make, model, year);
        this.range = range;
    }
// ElectricCar prototype override the getDescription method of the Car prototype 
// with a new implementation that includes information about the range of the electric car.

    getDescription() {
        return `${super.getDescription()} and has a range of ${this.range}.`;
    }
}

// Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300,

var tesla = new electricCar ('Tesla', 'Model S', '2019', 300)
console.log(tesla.getDescription());