/*
TIPOS DE DADOS

1. Strings -> Textos
2. Numbers -> Numeros
3. Boolean -> Booleano (true or false) 
4. Object -> Objetos 
5. Null & Undefined 

*/


// STRINGS
const texto1 = "TEXTOS COM ASPAS DUPLAS"

const texto2 ='TEXTOS COM ASPAS SIMPLES'

const texto3 =`TEXTOS COM AS CRASES` // => Template Literals / Template Strings


console.log(texto1)
console.log(texto2)
console.log(texto3)


// Template Literals / Template Strings

const age= 38

const myString = `Minha idade é ${age}`

console.log(myString)

// NUMBERS

const number1 = 32


// Boolean values True or False



// Object

const person = {
    name:'Andrey',
    age: 38,
    gender: 'Masculino',
    address: {
        street: 'Estrada Santa Monica',
        number: 1510,
        city: 'Suzano',
        state: 'SP'

    }
}

console.log(person.address.city)

