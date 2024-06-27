/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
const pascalTriangle = (lineNumber) => {
  const row = [1];

  for (let k = 1; k <= lineNumber; k++) {
    row[k] = (row[k - 1] * (lineNumber - k + 1)) / k;
  }

  return row;
};

module.exports = pascalTriangle;
