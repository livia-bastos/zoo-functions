const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const hours = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: species.filter((specie) => specie.availability.includes('Tuesday'))
      .map((specie) => specie.name),
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: species.filter((specie) => specie.availability.includes('Wednesday'))
      .map((specie) => specie.name),
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: species.filter((specie) => specie.availability.includes('Thursday'))
      .map((specie) => specie.name),
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: species.filter((specie) => specie.availability.includes('Friday'))
      .map((specie) => specie.name),
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: species.filter((specie) => specie.availability.includes('Saturday'))
      .map((specie) => specie.name),
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: species.filter((specie) => specie.availability.includes('Sunday'))
      .map((specie) => specie.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};
const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return hours;
  }
  if (hours[scheduleTarget]) {
    return { [scheduleTarget]: hours[scheduleTarget] };
  }
  const animal = species.find((specie) => specie.name === scheduleTarget);
  if (animal) {
    const { availability } = species.find((specie) => specie.name === scheduleTarget);
    return availability;
  }

  return hours;
};

module.exports = getSchedule;
console.log(getSchedule('Monday'));
