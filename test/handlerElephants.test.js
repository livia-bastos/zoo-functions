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

    {
      const actual = handlerElephants(1);
      const expected = 'Parâmetro inválido, é necessário uma string';
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
    {
      const actual = handlerElephants('name');
      const expected = 'elephants';
      expect(actual).toEqual(expected);
    }
  });
});
