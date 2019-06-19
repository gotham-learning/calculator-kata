import { greets, calculator } from '../src/main';

describe('#greets', () => {
  it('greets the person', () => {
    expect(greets('Noptoon')).toBe('Hello, Noptoon')
  });
});

describe('Calculator', () => {
  describe('#plus', () => {
    it('1+1 = 2', () => {
      const plus = new calculator(1, 1)
      expect(plus.displayExpression('+')).toBe('1 + 1 = 2')
      expect(plus.result).toBe(2)
    });
  });
  describe('#multiply', () => {
    it('2*3 = 6', () => {
      const multiply = new calculator(2, 3)
      expect(multiply.displayExpression('*')).toBe('2 * 3 = 6')
    });
  });
  describe('#minus', () => {
    it('3-2 = 1', () => {
      const minus = new calculator(3, 2)
      expect(minus.displayExpression('-')).toBe('3 - 2 = 1')
    });
  });
});


