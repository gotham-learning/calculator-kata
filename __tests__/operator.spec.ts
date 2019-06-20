import { plus, minus, multiply, divide } from '../src/operator';

describe('operator', () => {
  describe('#plus', () => {
    describe('creates an object that represents computation which:', () => {
      it('can compute result', () => {
        expect(plus(1, 1).compute()).toBe(2)
        expect(plus(10, 0).compute()).toBe(10)
      });

      it('contains left, right operands and operator symbol `+`', () => {
        expect(plus(1, 1)).toMatchObject({ symbol: '+', left: 1, right: 1 })
        expect(plus(10, 0)).toMatchObject({ symbol: '+', left: 10, right: 0 })
      });
    })
  });

  describe('#minus', () => {
    describe('creates an object that represents computation which:', () => {
      it('can compute result', () => {
        expect(minus(1, 10).compute()).toBe(-9)
        expect(minus(10, 0).compute()).toBe(10)
      });

      it('contains left, right operands and operator symbol `-`', () => {
        expect(minus(1, 10)).toMatchObject({ symbol: '-', left: 1, right: 10 })
        expect(minus(10, 0)).toMatchObject({ symbol: '-', left: 10, right: 0 })
      });
    })
  });

  describe('#multiply', () => {
    describe('creates an object that represents computation which:', () => {
      it('can compute result', () => {
        expect(multiply(1, 10).compute()).toBe(10)
        expect(multiply(10, 0).compute()).toBe(0)
        expect(multiply(7, 5).compute()).toBe(35)
      });

      it('contains left, right operands and operator symbol `×`', () => {
        expect(multiply(1, 10)).toMatchObject({ symbol: '×', left: 1, right: 10 })
        expect(multiply(10, 0)).toMatchObject({ symbol: '×', left: 10, right: 0 })
        expect(multiply(7, 5)).toMatchObject({ symbol: '×', left: 7, right: 5 })
      });
    })
  });

  describe('#divide', () => {
    describe('creates an object that represents computation which:', () => {
      it('can compute result', () => {
        expect(divide(1, 10).compute()).toBe(0.1)
        expect(divide(10, 0).compute()).toBe(Infinity)
      });

      it('contains left, right operands and operator symbol `÷`', () => {
        expect(divide(1, 10)).toMatchObject({ symbol: '÷', left: 1, right: 10 })
        expect(divide(10, 0)).toMatchObject({ symbol: '÷', left: 10, right: 0 })
      });
    })
  });
})


