export const plus = (left: number, right: number) => ({
  op: '+',
  left, right,
  eval: () => left + right
})


export const minus = (left: number, right: number) => ({
  op: '-',
  left, right,
  eval: () => left - right
})


export const multiply = (left: number, right: number) => ({
  op: '×',
  left, right,
  eval: () => left * right
})
