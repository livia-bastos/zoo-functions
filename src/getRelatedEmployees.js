const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => {
  const comandado = employees.filter((employee) => employee.managers.includes(id));
  if (comandado.length === 0) {
    return false;
  }
  return true;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const comandado = employees.filter((employee) => employee.managers.includes(managerId));
  return comandado.map((peao) => `${peao.firstName} ${peao.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
