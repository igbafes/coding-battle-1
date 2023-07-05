/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */                                                                  
 function transpose(arr) {
  const transposed = [];
  for (let i = 0; i < arr[0].length; i++) {
    const row = [];
    for (let j = 0; j < arr.length; j++) {
      row.push(arr[j][i]);
    }
    transposed.push(row);
  }
  return transposed;
}


// let transpose = function (array) {
//   const result = [];
//   for (let i = 0; i < array[0].length; i++) {
//     const col = []
//      for (let j = 0; j < array.length; j++) {
//       col.push(array[j][i]);
//      }
//      result.push(col)
//   }
//    return result;
// };

module.exports = transpose;
