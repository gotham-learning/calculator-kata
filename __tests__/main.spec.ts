import { plus, minus, multiply } from '../src/main';

describe('Calculator', () => {
  describe('computations', () => {
    describe('#plus', () => {
      describe('creates an object that represents computation which:', () => {
        it('can evaluate results', () => {
          expect(plus(1, 1).eval()).toBe(2)
          expect(plus(10, 0).eval()).toBe(10)
        });

        it('contains left, right operands and operator symbol `+`', () => {
          expect(plus(1, 1)).toMatchObject({ op: '+', left: 1, right: 1 })
          expect(plus(10, 0)).toMatchObject({ op: '+', left: 10, right: 0 })
        });
      })
    });

    describe('#minus', () => {
      describe('creates an object that represents computation which:', () => {
        it('can evaluate results', () => {
          expect(minus(1, 10).eval()).toBe(-9)
          expect(minus(10, 0).eval()).toBe(10)
        });

        it('contains left, right operands and operator symbol `-`', () => {
          expect(minus(1, 10)).toMatchObject({ op: '-', left: 1, right: 10 })
          expect(minus(10, 0)).toMatchObject({ op: '-', left: 10, right: 0 })
        });
      })
    });

    describe('#multiply', () => {
      describe('creates an object that represents computation which:', () => {
        it('can evaluate results', () => {
          expect(multiply(1, 10).eval()).toBe(10)
          expect(multiply(10, 0).eval()).toBe(0)
          expect(multiply(7, 5).eval()).toBe(35)
        });

        it('contains left, right operands and operator symbol `×`', () => {
          expect(multiply(1, 10)).toMatchObject({ op: '×', left: 1, right: 10 })
          expect(multiply(10, 0)).toMatchObject({ op: '×', left: 10, right: 0 })
          expect(multiply(7, 5)).toMatchObject({ op: '×', left: 7, right: 5 })
        });
      })
    });

  })
});


