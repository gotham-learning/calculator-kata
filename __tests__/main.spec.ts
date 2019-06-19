import { greets, plus, multiply } from '../src/main';

describe('#greets', () => {
  it('greets the person', () => {
    expect(greets('Noptoon')).toBe('Hello, Noptoon')
  });
});


describe('Calculator', () => {
  describe('#plus', () => {
    it('1+1 = 2', () => {
      expect(plus(1, 1)).toBe('1 + 1 = 2')
    });
  });
  describe('#multiply', () => {
    it('2*3 = 6', () => {
      expect(multiply(2, 3)).toBe(6)
    });
  });



});


