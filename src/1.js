var multiple = function (val, A, B) {
  if (val % A === 0 && val % B === 0) {
    return true
  } else {
    return false
  }
}
var run = function (A, B) {
  const AB = 1 * A * B
  let max = ''
  if (A === B) {
    return A
  } else {
    max = A >= B ? A : B
    const limit = AB - max
    for (let i = 0; i <= limit; i++) {
      if (multiple(max + i, A, B) === true) {
        return i
      }
    }
  }
}
const A = 1
const B = 1
run(A, B)
