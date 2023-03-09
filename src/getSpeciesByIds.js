const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const idSpecies = [];
  ids.forEach((id) => {
    const findSpecie = species.find((specie) => specie.id === id);
    idSpecies.push(findSpecie);
  });
  return idSpecies;
};
module.exports = getSpeciesByIds;
