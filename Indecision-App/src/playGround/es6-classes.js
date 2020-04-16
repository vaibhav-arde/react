console.log(`Code form playGround/es6-classes.js is running!!`)

class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `${this.name} is ${this.age} ${this.age>1 ? 'years' : 'year'} old.`;
    }
}

const me = new Person('VaibhaV', 33);
console.log(me.getDetails());

const unknmown = new Person('unknmown',1);
console.log(unknmown.getDetails());

const test = new Person();
console.log(test.getDetails());

// SubClass

class Traveller extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    getDetails(){
        let desc = super.getDetails();
        console.log(!!this.location);
        return !!this.location ? desc += ` He is from ${this.location}` : desc
    }
}

const traveller1 = new Traveller('VaibhaV', 33, 'Pune');
console.log(traveller1.getDetails());

const traveller2 = new Traveller(null, null, 'nowhere');
console.log(traveller2.getDetails());