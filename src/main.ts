export const greets = (name: string): string => `Hello, ${name}`
export const plus = (param1: number, param2: number): string => {
  return `${param1} + ${param2} = ${param1 + param2}`
}
export const multiply = (param1: number, param2: number): string => {

  return `${param1} x ${param2} = ${param1 * param2}`
}


export class minus {
  param1: number
  param2: number

  constructor(param1: number, param2: number) {
    this.param1 = param1
    this.param2 = param2
  }

  displayExpression() {
    return `${this.param1} - ${this.param2} = ${this.param1 - this.param2}`
  }
}
