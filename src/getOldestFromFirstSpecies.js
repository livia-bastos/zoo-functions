const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const idEmployee = employees.find((employee) => employee.id === id);
  const idAnimal = idEmployee.responsibleFor[0];
  const { residents } = species.find((specie) => specie.id === idAnimal);
  const findOlderAnimal = residents.sort((a, b) => b.age - a.age);
  return Object.values(findOlderAnimal[0]);
};

module.exports = getOldestFromFirstSpecies;
