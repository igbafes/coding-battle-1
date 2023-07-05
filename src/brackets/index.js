/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  const stack = [];
  for ( let i of str) {
    if (i === '(') {
      stack.push([i]);
    } 
    if (i === ')') {
      stack.pop();
    }
  }

  return stack.length === 0;
}

 isValid('()');

 module.exports = isValid 
