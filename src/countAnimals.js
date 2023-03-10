const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = () => species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});
const countAnimals = (animal) => {
  if (animal === undefined) {
    return animals();
  }
  if (animal.sex === undefined) {
    const a = animals();
    return a[animal.species];
  }
  console.log(animal.species);
  const { residents } = species.find((specie) => specie.name === animal.species);
  return residents.filter((resident) => resident.sex === animal.sex).length;
};
console.log(countAnimals({ species: 'lions', sex: 'male' }));
module.exports = countAnimals;
