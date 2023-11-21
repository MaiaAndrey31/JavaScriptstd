const students = [
    { name: 'Andrey', test: 10},
    { name: 'Julia', test: 6},
    { name: 'Amanda', test: 7},
    { name: 'Heloa', test: 7},
    { name: 'Jessica', test: 4},
    { name: 'Silvio', test: 10},
    { name: 'Marisa', test: 9},
    { name: 'Frederico', test: 8},
    { name: 'José', test: 5},
    { name: 'Maria', test: 3}

]


const finalNotice = students.map( std =>{

    
    return {
        name: std.name,
        situation: std.test >=5 ? 'Aprovado' : 'Reprovado'
    }
})
console.log(finalNotice)