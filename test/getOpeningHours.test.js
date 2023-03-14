const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se chama a funcao retorna um quadro de dias e horarios', () => {
    {
      const actual = getOpeningHours();
      const expected = {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      };
      expect(actual).toEqual(expected);
    }
    {
      const actual = getOpeningHours('sunday', '11:11-AM');
      const expected = 'The zoo is open';
      expect(actual).toEqual(expected);
    }
    {
      const actual = getOpeningHours('sunday', '09:20-PM');
      const expected = 'The zoo is closed';
      expect(actual).toEqual(expected);
    }
    expect(() => { getOpeningHours('qualquercoisa'); }).toThrow(/^The day must be valid. Example: Monday$/);
  });
});
