const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se chamar a função com um parametro especifico, deve retornar o resultado correspondente ao parametro passado', () => {
    {
      const actual = handlerElephants('count');
      const expected = 4;
      expect(actual).toEqual(expected);
    }

    {
      const actual = handlerElephants('names');
      const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('averageAge');
      const expected = 10.5;
      expect(actual).toEqual(expected);
    }
  });
  it('testa resultados para o param', () => {
    {
      const actual = handlerElephants();
      const expected = undefined;
      expect(actual).toEqual(expected);
    }

    {
      const actual = handlerElephants('elephants');
      const expected = null;
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('averageAge');
      const expected = 10.5;
      expect(actual).toEqual(expected);
    }
    // {
    //   const actual = getElephants();
    //   const expected = {
    //     id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
    //     name: 'elephants',
    //     popularity: 5,
    //     location: 'NW',
    //     availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
    //     residents: [
    //       { name: 'Ilana', sex: 'female', age: 11 },
    //       { name: 'Orval', sex: 'male', age: 15 },
    //       { name: 'Bea', sex: 'female', age: 12 },
    //       { name: 'Jefferson', sex: 'male', age: 4 },
    //     ],
    //   };
    //   expect(actual).toEqual(expected);
    // }
  });
});
