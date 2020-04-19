console.log(`Running from src/playGround/binding.js`)

const details ={
    name: 'VaibhaV',
    getName(){
        return this.name
    }
}

console.log(details.getName())

const getName = details.getName.bind({name:'Sheetal'})
console.log(getName())