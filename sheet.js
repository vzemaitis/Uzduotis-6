const people = [
    {
        id: 1,
        name: 'Jonas',
        isMale: true
    },
    {
        id: 2,
        name: 'Petras',
        isMale: true
    },
    {
        id: 3,
        name: 'Paulius',
        isMale: true
    },
    {
        id: 4,
        name: 'Ona',
        isMale: false
    }
];

const filteredGenter = people.filter((gender) => gender.isMale === false);

const mappedList = people.map(person => ({id: person.id, firstName: `${person.name}`, isFemale: person.isMale}))



console.log('-- Sukurti masyvą (Array) --')
console.log(people)
console.log('-- Išfiltruoti masyvą pagal parametrą isMale --')
console.log(filteredGenter)
console.log('-- Panaudoti map ir sukurti naują masyvą --')
console.log(mappedList)