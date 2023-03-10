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
};
module.exports = countAnimals;
