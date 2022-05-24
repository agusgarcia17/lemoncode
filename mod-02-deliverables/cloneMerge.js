//Clone Merge

const person = {
    name : 'Agus',
    lastname: 'Garcia', 
    age : 30
}

const target = {
    name : 'Sofia',
    lastname: 'Ramirez',
    country: 'Argentina',
    age : 28
}


function clone(source) {
    return {...source};
}
    
console.log('clone: ', clone(person))

function merge(source, target) {

    let newPerson = {...target, ...source}
    return newPerson; 
}

console.log('merge: ', merge(person, target))