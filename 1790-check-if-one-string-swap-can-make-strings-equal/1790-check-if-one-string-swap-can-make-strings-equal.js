/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) =>
  ((a, b, c, d, ...e) => !e.length && a === c && b === d)(
    ...[...s1].reduce(
      (acc, curr, idx) => (curr === s2[idx] ? acc : [curr, ...acc, s2[idx]]),
      [],
    ),
  );