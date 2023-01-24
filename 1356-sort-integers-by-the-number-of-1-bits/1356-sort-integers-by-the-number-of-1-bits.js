/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
  const count = (x) => {
    const str = x.toString(2)
    let num = 0
    for (const c of str) {
      if (c === '1') {
        num += 1
      }
    }
    return num
  }
  return arr.sort((a, b) => {
    const countA = count(a)
    const countB = count(b)
    return countA === countB ? a - b : countA - countB
  })
}
