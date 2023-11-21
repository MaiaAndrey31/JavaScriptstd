const list = [
    { name: 'Andrey', vip: true},
    { name: 'Amanda', vip: true},
    { name: 'Silvio', vip: false},
    { name: 'Marisa', vip: false},
    { name: 'Julia', vip: true},
    { name: 'Heloa', vip: true}
]

const vipList = list.map(user =>{
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green',
         
    }
    return newUser
})

console.log(vipList)