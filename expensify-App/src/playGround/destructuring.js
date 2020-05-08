console.log('destructuring.js');

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

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(`Publisher name is ${publisherName}`)