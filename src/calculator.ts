export const convertMinusToPlus = (command: string): string => {
  return command
    .replace(/ /g, '')
    .replace(/-/g, '+-')
}



export const calculator = (command: string): string => {
  const newCommnad = convertMinusToPlus(command)

  let xx
  if (newCommnad.indexOf('+') !== -1) {
    xx = plus(newCommnad)
  } else if (command.indexOf('-') !== -1) {
    xx = plus(newCommnad)
  } else if (command.indexOf('*') !== -1) {
    xx = multiply(command)
  } else if (command.indexOf('/') !== -1) {
    xx = divide(command)
  }

  return `${command}=${xx}`
}

const plus = (command: string): number => {
  const list = command.split('+')
  let resultPlus = 0

  list.forEach(element => {
    resultPlus = resultPlus + parseFloat(element)
  });
  return resultPlus
}
// const minus = (command: string): number => {
//   const list = command.split('-')
//   let resultPlus = 0
//   list.forEach((element, index) => {
//     if (index > 0) {
//       resultPlus = resultPlus - parseFloat(element)
//     } else {
//       resultPlus = parseFloat(element)
//     }
//   });
//   return resultPlus
// }


const multiply = (command: string): number => {
  const list = command.split('*')
  let resultPlus = 1
  list.forEach((element) => {
    resultPlus = resultPlus * parseFloat(element)
  });
  return resultPlus
}



const divide = (command: string): number => {
  const list = command.split('/')
  let resultPlus = 0
  list.forEach((element, index) => {
    if (index > 0) {
      resultPlus = resultPlus / parseFloat(element)
    } else {
      resultPlus = parseFloat(element)
    }
  });
  return resultPlus
}


