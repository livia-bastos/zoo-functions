const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = () => species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});
const countAnimals = (animal) => {

  const handlerElephants = (param) => {
    if (animal === undefined) {
      return animals();
    }
    const elephants = getElephants();
    if (Object.keys(elephants).includes(param)) {
      return elephants[param];
  }
  return computeData(param, elephants);
};
}
module.exports = countAnimals;
