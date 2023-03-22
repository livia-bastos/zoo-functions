// const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalByLocation = (location) => species.filter((specie) => specie
  .location === location).map((specie) => specie.name);

console.log(animalByLocation('NE'));

const getAnimalMap = (options) => {
  // const getlocation = species.filter((specie) => specie.location === options).location;
  // return { getlocation: animalByLocation(location) };
};

module.exports = getAnimalMap;
