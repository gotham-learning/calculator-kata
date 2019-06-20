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

export class multiply {
  param1: number
  param2: number

  constructor(param1: number, param2: number) {
    this.param1 = param1
    this.param2 = param2
  }

  displayExpression() {
    return `${this.param1} x ${this.param2} = ${this.param1 * this.param2}`
  }
}

export class plus {
  param1: number
  param2: number

  constructor(param1: number, param2: number) {
    this.param1 = param1
    this.param2 = param2
  }

  displayExpression() {
    return `${this.param1} + ${this.param2} = ${this.param1 + this.param2}`
  }
}

export class calculator {
  param1: number
  param2: number
  result: number

  constructor(param1: number, param2: number) {
    this.param1 = param1
    this.param2 = param2
  }

  displayExpression(operator: string) {
    switch (operator) {
      case '+':
        this.result = this.param1 + this.param2
        return `${this.param1} ${operator} ${this.param2} = ${this.param1 + this.param2}`
      case '-':
        this.result = this.param1 - this.param2
        return `${this.param1} ${operator} ${this.param2} = ${this.param1 - this.param2}`
      case '*':
        this.result = this.param1 * this.param2
        return `${this.param1} ${operator} ${this.param2} = ${this.param1 * this.param2}`
      default:
        return ''
    }

  }

}
