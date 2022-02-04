// export по default может быть только один в файле

const jj = (a, b = 5) => a - b
export default jj

// export нескольких переменных

const ffdf = (f) => 5 + f
const kkff = (a) => 7 + a

export {
  ffdf,
  kkff
}