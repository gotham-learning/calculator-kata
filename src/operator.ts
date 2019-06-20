type Operator = (left: number, right: number) => {
  symbol: string,
  left: number,
  right: number,
  compute: () => number
}

type Computation = (left: number, right: number) => number

const operator = (symbol: string, computation: Computation): Operator =>
  (left, right) => ({
    symbol, left, right,
    compute: () => computation(left, right)
  })


// operators definition

export const plus = operator('+', (l, r) => l + r)
export const minus = operator('-', (l, r) => l - r)
export const multiply = operator('×', (l, r) => l * r)
export const divide = operator('÷', (l, r) => l / r)
