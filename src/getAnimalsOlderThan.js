const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimal = species.find(({ name }) => name === animal);
  return findAnimal.residents.every((resident) => resident.age >= age);
};
module.exports = getAnimalsOlderThan;
