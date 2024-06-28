/**
 * use recursion, it is simpler but less efficient
 * @param {number} lineNumber - zero based.
 * @param {number[]} result
 * @param {number} flag - indicates when to stop
 * @returns {number[]}
 */
// const pascalTriangle = (lineNumber, result = [], flag = lineNumber) => {
//     const rowPosition = result.length
//     result[rowPosition] = rowPosition < 1
//         ? 1 // default value if results is empty
//         : (result[rowPosition - 1] * (lineNumber - rowPosition + 1)) / rowPosition // use of binomial coefficient method
//
//     if (flag > 0) return pascalTriangle(n, result, flag - 1)
//     return result
// }

/**
 * method I learned at school xd
 * @param {number} lineNumber - zero based
 * @returns {number[]}
 */
// const pascalTriangle = (lineNumber) => {
//     const results = []
//
//     /**
//      * 
//      * @param {number} numberOfFactorial
//      * @returns {number}
//      */
//     const factorial = (numberOfFactorial) => {
//         let resultFactorial = 1
//
//         for (let index = 1; index <= numberOfFactorial; index++) {
//             resultFactorial *= index
//         }
//
//         return resultFactorial
//     }
//
//     /**
//      * 
//      * @param {number} n - elements
//      * @param {number} r - consecutive integer factors decreasing from n
//      * @returns {number}
//      */
//     const combinatorics = (n, r) => (factorial(n) / (factorial(r) * factorial(n - r)))
//
//     for (let index = 0; index <= lineNumber; index++) {
//         results.push(combinatorics(lineNumber, index))
//     }
//
//     return results
// }

/**
 * most efficient method
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    const results = [];
    let rowPosition = 0 // counter

    while (rowPosition <= lineNumber) {
        const value = results.length < 1
            ? 1 // default value if results is empty
            : (results[rowPosition - 1] * (lineNumber - rowPosition + 1)) / rowPosition

        results.push(value) // add value into results
        rowPosition++ // increment rowPosition
    }

    return results;
}

module.exports = pascalTriangle;