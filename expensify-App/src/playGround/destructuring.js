console.log('destructuring.js');

// ES6 Object destructuring

const person = {
    name: 'VaibhaV',
    age: 33,
    location: {
        city: 'London',
        temp: 20
    }
}

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}'s old.`)

const { city, temp: temperature } = person.location;
console.log(`Temprature in ${city} is ${temperature} degree.}`)

const book = {
    title: 'Death',
    author: 'Sadhaguru',
    publisher: {
        name: 'Isha'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`Publisher name is ${publisherName}`)

// ES6 Array destructuring

const address = ['101 B wing', 'Pune', 'Maharashtra', '412101'];

const [add, yourCity, yourState, pin, country='India'] = address;
console.log(`You are in ${yourCity} ${yourState}, ${country}`)

const item = ['Coffee(Hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mPrice] = item;

console.log(`A medium ${itemName} costs ${mPrice}`);
