console.log(`Running from person.js`)

export const isAdult = (age, allowedAge) => age >= allowedAge;

export const canDrink = (age, allowedAge) => age >= allowedAge;

const isSenior = (age, seniorAge)  => age >= seniorAge;

export default isSenior;

// export {isAdult, canDrink, isSenior as default};