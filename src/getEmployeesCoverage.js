const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');
const getSpeciesByIds = require('./getSpeciesByIds');

const formataFuncao = (employee) => {
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  const responsibleFor = getSpeciesByIds(...employee.responsibleFor);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: responsibleFor.map((specie) => specie.name),
    locations: responsibleFor.map((specie) => specie.location),
  };
};

const getEmployeesCoverage = (nameorid) => {
  if (nameorid === undefined) {
    return employees.map((colaborador) => formataFuncao(colaborador));
  }
  let employee = {};
  if (nameorid.name) {
    employee = getEmployeeByName(nameorid.name);
  }
  if (nameorid.id) {
    employee = employees.find((pessoa) => pessoa.id === nameorid.id);
  }
  return formataFuncao(employee);
};

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
