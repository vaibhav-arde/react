"use strict";

// All arrow functions are anonymous
// arrow function implicitly return, hence no need to write return.

// Regular function below
function square(x) {
    return x * x;
}

console.log(square(6));

// arrow function as below:
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(7));

// Arrow function challenge
var name = "VaibhaV Arde";
var firstWord = function firstWord(name) {
    return name.split(" ")[0];
};
console.log(firstWord(name));

// ===============================================
/* argument object - no longer bound with arrow functions */
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(2, 3));
// But same not possible in arrwo function as below:
var addArrow = function addArrow(a, b) {
    // console.log(arguments); //this is not possible here in arrow function
    return a + b;
};
console.log(addArrow(2, 3));
// ===============================================

/* this keyword - no longer bound with arrow functions */

// regular function:
var user = {
    name: 'VaibhaV',
    cities: ['Pune', 'London', 'Edinburgh'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        // const that = this;
        // this.cities.forEach(function(city){
        //     console.log(`${that.name} lived in city : ${city} `);
        // });

        this.cities.forEach(function (city) {
            return console.log(_this.name + " lived in city : " + city + " ");
        });
    }
};
user.printPlacesLived();

// using Arrow function:
var userArrow = {
    name: 'VaibhaV',
    cities: ['Pune', 'London', 'Edinburgh'],
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            return console.log(_this2.name + " lived in city : " + city + " ");
        });
    },
    useMap: function useMap() {
        var _this3 = this;

        return this.cities.map(function (city) {
            return _this3.name + " once lived in " + city;
        });
    }
};
userArrow.printPlacesLived();
console.log(userArrow.useMap());

// Challenge:
var multiplier = {
    numArray: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this4 = this;

        return this.numArray.map(function (num) {
            return num * _this4.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
