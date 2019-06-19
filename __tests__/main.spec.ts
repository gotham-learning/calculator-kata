import { greets, plus, multiply, minus } from '../src/main';

describe('#greets', () => {
  it('greets the person', () => {
    expect(greets('Noptoon')).toBe('Hello, Noptoon')
  });
});


describe('Calculator', () => {
  describe('#plus', () => {
    it('1+1 = 2', () => {
      const pplus = new plus(1, 1)
      expect(pplus.displayExpression()).toBe('1 + 1 = 2')
    });
  });
  describe('#multiply', () => {
    it('2*3 = 6', () => {
      const mmultiply = new multiply(2, 3)
      expect(mmultiply.displayExpression()).toBe('2 x 3 = 6')
    });
  });
  describe('#minus', () => {
    it('3-2 = 1', () => {
      const mminus = new minus(3, 2)
      expect(mminus.displayExpression()).toBe('3 - 2 = 1')
    });
  });
});


