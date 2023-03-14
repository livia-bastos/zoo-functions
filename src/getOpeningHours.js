const { hours } = require('../data/zoo_data');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayError = 'The day must be valid. Example: Monday';

// se coloca uma string no segundo paramentro, lança um erro
const isStringRepresentNumber = (string, what) => {
  if (!/^\d+$/.test(string)) {
    throw new Error(`The ${what} should represent a number`);
  }
};

const validateAbbreviation = (abbreviation) => {
  if (!['AM', 'PM'].includes(abbreviation)) {
    throw new Error('The abbreviation must be \'AM\' or \'PM\'');
  }
};

const validateHour = (hour) => {
  // depois do number tem que ter um -
  const [number, abbreviation] = hour.toUpperCase().split('-');
  // depois da hora separa o minuto por :
  const [dataHours, dataMinutes] = number.split(':');
  isStringRepresentNumber(dataHours, 'hour');
  isStringRepresentNumber(dataMinutes, 'minutes');
  validateAbbreviation(abbreviation);
  // os numeros das horas tem que estar em 0 e 12 e dos minutos tem ques estar entre 0 e 59 se não estiverem lança um erro
  switch (false) {
  case Number(dataHours) >= 0 && Number(dataHours) <= 12:
    throw new Error('The hour must be between 0 and 12');
  case Number(dataMinutes) >= 0 && Number(dataMinutes) <= 59:
    throw new Error('The minutes must be between 0 and 59');
  default:
    return null;
  }
};
// se o dia passado não estiver na const weekdays (exemplo: 'qualquercoisa') ele envia um erro
const validateDay = (day) => {
  if (!weekDays.includes(day)) {
    throw new Error(dayError);
  }
};

const empty = (one, two) => !one && !two;

const fix12 = (hour, open, close) => ({
  h: (hour === 12) ? 0 : hour,
  o: (open === 12) ? 0 : open,
  c: (close === 12) ? 0 : close,
});
// se manda as horas ou minutos com 00, ele converte para 12
const openOrClosed = (period, hour, open, close) => {
  const { o, c, h } = fix12(hour, open, close);
  return (period === 'AM' && h >= o) || (period === 'PM' && h < c);
};

const getOpeningHours = (day, dataHour) => {
  // se parametro está vazio ele retorna const hours
  if (empty(day, dataHour)) return hours;
  // cria variavel que recebe string e coloca primeira letra maiuscula e o restante minuscula
  const adjustedDay = `${day[0].toUpperCase()}${day.slice(1).toLowerCase()}`;
  // se não for dia da semana, lança um erro
  validateDay(adjustedDay);

  validateHour(dataHour);
  const { open, close } = hours[adjustedDay];
  if (empty(close, open)) return 'The zoo is closed';
  // se recebe as letras pm minusculas, converte para maiusculas
  const period = dataHour.split('-')[1].toUpperCase();
  const hour = Number(dataHour.split(':')[0]);
  let message = 'The zoo is ';
  message += openOrClosed(period, hour, open, close) ? 'open' : 'closed';
  return message;
};
// console.log(getOpeningHours('Friday', '12:12-pos'));
module.exports = getOpeningHours;
