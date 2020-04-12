// All arrow functions are anonymous
// arrow function implicitly return, hence no need to write return.

// Regular function below
function square(x){
    return x * x
}

console.log(square(6));

// arrow function as below:
const squareArrow = x => x * x;
console.log(squareArrow(7));

// Arrow function challenge
const name = "VaibhaV Arde"
const firstWord = name => name.split(" ")[0];
console.log(firstWord(name));

// ===============================================
/* argument object - no longer bound with arrow functions */
const add = function(a, b){
    console.log(arguments);
    return a + b;
}
console.log(add(2, 3))
// But same not possible in arrwo function as below:
const addArrow = (a, b) => {
    // console.log(arguments); //this is not possible here in arrow function
    return a+ b;
}
console.log(addArrow(2, 3))
// ===============================================

/* this keyword - no longer bound with arrow functions */

// regular function:
const user = {
    name: 'VaibhaV',
    cities: ['Pune', 'London', 'Edinburgh'],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);

        // const that = this;
        // this.cities.forEach(function(city){
        //     console.log(`${that.name} lived in city : ${city} `);
        // });

        this.cities.forEach((city) => console.log(`${this.name} lived in city : ${city} `))
    }
}
user.printPlacesLived();

// using Arrow function:
const userArrow = {
    name: 'VaibhaV',
    cities: ['Pune', 'London', 'Edinburgh'],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => console.log(`${this.name} lived in city : ${city} `))
    },
    useMap(){
        return this.cities.map((city)=> `${this.name} once lived in ${city}`)
    }
}
userArrow.printPlacesLived();
console.log(userArrow.useMap());

// Challenge:
const multiplier = {
    numArray: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numArray.map(num => num * this.multiplyBy);
    }
}
console.log(multiplier.multiply());