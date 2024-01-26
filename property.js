const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

// console.log(person)

// dot notation
// dot symbol diye object er property er value access kora
// console.log(person.profession)
const income = person.salary;
// console.log(income)

// bracket Notation 
// third bracket diye access kora
console.log(person['age'])
const boyos = person['age']
console.log(boyos)

// error
// console.log(person.'fav places')
console.log(person['fav places'])

const keyName = 'profession';
console.log(person[keyName])