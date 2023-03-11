const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const deMenor = entrants.filter((entrant) => entrant.age < 18).length;
  const deMaior = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const velhos = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child: deMenor,
    adult: deMaior,
    senior: velhos,
  };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }

  const somaAdulto = data.prices.adult * countEntrants(entrants).adult;
  const somachild = data.prices.child * countEntrants(entrants).child;
  const somaSenior = data.prices.senior * countEntrants(entrants).senior;

  return (somaAdulto + somaSenior + somachild);
};

module.exports = { calculateEntry, countEntrants };
