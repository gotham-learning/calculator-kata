import { calculator, convertMinusToPlus } from '../src/calculator';

describe('#Calculator', () => {
  it('split command', () => {
    expect(convertMinusToPlus('1+2 - 3 - 4')).toBe('1+2+-3+-4')
  })
  it('Calculate Plus', () => {
    expect(calculator('1+2+3+4')).toBe('1+2+3+4=10')
  });
  it('Calculator Minus', () => {
    expect(calculator('3-4')).toBe('3-4=-1')
  });
  it('Calculator multiply', () => {
    expect(calculator('3*4')).toBe('3*4=12')
  });
  it('Calculator divide', () => {
    expect(calculator('12/4')).toBe('12/4=3')
  });

});
