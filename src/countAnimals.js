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
  const { residents } = species.find((specie) => specie.name === animal.species);
  if (animal.sex === undefined) {
    return residents.length;
  }
  return residents.filter((resident) => resident.sex === animal.sex).length;
};
module.exports = countAnimals;
