import { greets, plus } from '../src/main';

describe('#greets', () => {
  it('greets the person', () => {
    expect(greets('Noptoon')).toBe('Hello, Noptoon')
  });
});

describe('#plus', () => {
  it('1+1 = 2', () => {
    expect(plus(1, 1)).toBe(2)
  });
});
